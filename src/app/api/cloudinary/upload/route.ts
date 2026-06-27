import { NextResponse } from 'next/server';
import { v2 as cloudinary, type UploadApiResponse } from 'cloudinary';

export const runtime = 'nodejs';

const MAX_IMAGE_BYTES = 20 * 1024 * 1024;
const MAX_VIDEO_BYTES = 100 * 1024 * 1024;
const DEFAULT_FOLDER = 'venerato/galeria';

type ResourceType = 'image' | 'video' | 'auto';
type ValidationResult = { error: string; status: 400 | 413 } | null;

function getCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return null;
  }

  return { cloudName, apiKey, apiSecret };
}

function getResourceType(file: File, requested: FormDataEntryValue | null): ResourceType {
  if (requested === 'image' || requested === 'video' || requested === 'auto') return requested;
  if (file.type.startsWith('image/')) return 'image';
  if (file.type.startsWith('video/')) return 'video';
  return 'auto';
}

function validateFile(file: File, resourceType: ResourceType): ValidationResult {
  const isImage = file.type.startsWith('image/');
  const isVideo = file.type.startsWith('video/');

  if (!isImage && !isVideo) {
    return { error: 'Invalid file type. Use image/* or video/*.', status: 400 };
  }

  if (resourceType === 'image' && !isImage) {
    return { error: 'resourceType image requires an image/* file.', status: 400 };
  }

  if (resourceType === 'video' && !isVideo) {
    return { error: 'resourceType video requires a video/* file.', status: 400 };
  }

  if (isImage && file.size > MAX_IMAGE_BYTES) {
    return { error: 'Image file too large. Maximum size is 20MB.', status: 413 };
  }

  if (isVideo && file.size > MAX_VIDEO_BYTES) {
    return { error: 'Video file too large. Maximum size is 100MB.', status: 413 };
  }

  return null;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;

  if (error && typeof error === 'object') {
    const cloudinaryError = error as {
      error?: unknown;
      http_code?: unknown;
      message?: unknown;
      name?: unknown;
    };

    if (typeof cloudinaryError.message === 'string') {
      return cloudinaryError.message;
    }

    if (typeof cloudinaryError.error === 'string') {
      return cloudinaryError.error;
    }

    const details = [
      typeof cloudinaryError.name === 'string' ? cloudinaryError.name : null,
      typeof cloudinaryError.http_code === 'number' ? `HTTP ${cloudinaryError.http_code}` : null,
    ].filter(Boolean);

    if (details.length) {
      return `Cloudinary upload failed (${details.join(', ')})`;
    }
  }

  return 'Cloudinary upload failed';
}

function uploadBuffer(buffer: Buffer, resourceType: ResourceType, folder: string) {
  return new Promise<UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
        eager: resourceType === 'video' ? [{ quality: 'auto', video_codec: 'auto' }] : undefined,
        eager_async: false,
      },
      (error, result) => {
        if (error) {
          reject(new Error(getErrorMessage(error)));
          return;
        }

        if (!result) {
          reject(new Error('Cloudinary upload returned no result.'));
          return;
        }

        resolve(result);
      }
    );

    stream.end(buffer);
  });
}

function buildOptimizedUrl(result: UploadApiResponse): string {
  if (!result.secure_url || !result.secure_url.includes('/upload/')) return result.secure_url;

  const transformation =
    result.resource_type === 'video' ? 'f_auto,q_auto' : 'f_auto,q_auto,dpr_auto,c_limit,w_1600';

  return result.secure_url.replace('/upload/', `/upload/${transformation}/`);
}

function buildPosterUrl(result: UploadApiResponse): string | null {
  if (result.resource_type !== 'video' || !result.public_id) return null;

  return cloudinary.url(result.public_id, {
    resource_type: 'video',
    secure: true,
    format: 'jpg',
    transformation: [{ start_offset: '1', width: 1600, crop: 'limit', quality: 'auto' }],
  });
}

function jsonError(error: string, status: 400 | 413 | 500) {
  return NextResponse.json({ error }, { status });
}

export async function POST(request: Request) {
  try {
    const config = getCloudinaryConfig();

    if (!config) {
      return jsonError('Cloudinary env vars missing', 500);
    }

    cloudinary.config({
      cloud_name: config.cloudName,
      api_key: config.apiKey,
      api_secret: config.apiSecret,
      secure: true,
    });

    const formData = await request.formData();
    const fileValue = formData.get('file');

    if (!(fileValue instanceof File)) {
      return jsonError('Missing file', 400);
    }

    const resourceType = getResourceType(fileValue, formData.get('resourceType'));
    const validationError = validateFile(fileValue, resourceType);

    if (validationError) {
      return jsonError(validationError.error, validationError.status);
    }

    const folderValue = formData.get('folder');
    const folder =
      typeof folderValue === 'string' && folderValue.trim() ? folderValue : DEFAULT_FOLDER;

    console.info('Cloudinary upload request', {
      fileName: fileValue.name,
      type: fileValue.type,
      size: fileValue.size,
      resourceType,
    });

    const buffer = Buffer.from(await fileValue.arrayBuffer());
    const result = await uploadBuffer(buffer, resourceType, folder);
    const posterUrl = buildPosterUrl(result);

    return NextResponse.json({
      secure_url: result.secure_url,
      public_id: result.public_id,
      resource_type: result.resource_type,
      format: result.format,
      width: result.width,
      height: result.height,
      bytes: result.bytes,
      duration: result.duration,
      poster_url: posterUrl,
      optimized_url: buildOptimizedUrl(result),
    });
  } catch (error) {
    const message = getErrorMessage(error);
    console.error('Cloudinary upload failed', { message });
    return jsonError(message, 500);
  }
}
