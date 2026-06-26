import { NextResponse } from 'next/server';
import { v2 as cloudinary, type UploadApiResponse } from 'cloudinary';

export const runtime = 'nodejs';

const MAX_IMAGE_BYTES = 20 * 1024 * 1024;
const MAX_VIDEO_BYTES = 100 * 1024 * 1024;
const DEFAULT_FOLDER = 'venerato/galeria';

type ResourceType = 'image' | 'video' | 'auto';

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

function validateFile(file: File, resourceType: ResourceType) {
  const isImage = file.type.startsWith('image/');
  const isVideo = file.type.startsWith('video/');

  if (!isImage && !isVideo) {
    return 'Tipo de arquivo inválido. Use image/* ou video/*.';
  }

  if (resourceType === 'image' && !isImage) {
    return 'resourceType image requer um arquivo image/*.';
  }

  if (resourceType === 'video' && !isVideo) {
    return 'resourceType video requer um arquivo video/*.';
  }

  if (isImage && file.size > MAX_IMAGE_BYTES) {
    return 'Imagem acima do limite de 20MB.';
  }

  if (isVideo && file.size > MAX_VIDEO_BYTES) {
    return 'Vídeo acima do limite de 100MB.';
  }

  return null;
}

function uploadBuffer(
  buffer: Buffer,
  resourceType: ResourceType,
  folder: string
): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
        quality: 'auto',
        fetch_format: 'auto',
        transformation:
          resourceType === 'image'
            ? [{ width: 1600, crop: 'limit', quality: 'auto', fetch_format: 'auto' }]
            : [{ quality: 'auto', fetch_format: 'auto', video_codec: 'auto' }],
        eager:
          resourceType === 'video'
            ? [{ quality: 'auto', fetch_format: 'auto', video_codec: 'auto' }]
            : undefined,
        eager_async: false,
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        if (!result) {
          reject(new Error('Cloudinary não retornou resultado do upload.'));
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

export async function POST(request: Request) {
  const config = getCloudinaryConfig();

  if (!config) {
    return NextResponse.json(
      {
        error:
          'Variáveis Cloudinary ausentes. Configure CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY e CLOUDINARY_API_SECRET.',
      },
      { status: 500 }
    );
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
    return NextResponse.json(
      { error: 'Arquivo ausente. Envie multipart/form-data com campo "file".' },
      { status: 400 }
    );
  }

  const resourceType = getResourceType(fileValue, formData.get('resourceType'));
  const validationError = validateFile(fileValue, resourceType);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const folderValue = formData.get('folder');
  const folder =
    typeof folderValue === 'string' && folderValue.trim() ? folderValue : DEFAULT_FOLDER;
  const buffer = Buffer.from(await fileValue.arrayBuffer());

  try {
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
    const message =
      error instanceof Error ? error.message : 'Falha ao enviar arquivo para Cloudinary.';
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
