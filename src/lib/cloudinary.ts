const CLOUDINARY_HOST = 'res.cloudinary.com';

function insertTransform(url: string, transform: string): string {
  if (!isCloudinaryUrl(url) || !url.includes('/upload/')) return url;
  if (url.includes(`/upload/${transform}/`)) return url;
  return url.replace('/upload/', `/upload/${transform}/`);
}

export function isCloudinaryUrl(url?: string | null): boolean {
  if (!url) return false;

  try {
    return new URL(url).hostname === CLOUDINARY_HOST;
  } catch {
    return false;
  }
}

export function buildCloudinaryImageUrl(url?: string | null, width = 1600): string {
  if (!url) return '';
  return insertTransform(url, `f_auto,q_auto,dpr_auto,c_limit,w_${width}`);
}

export function buildCloudinaryMobileImageUrl(url?: string | null): string {
  return buildCloudinaryImageUrl(url, 800);
}

export function buildCloudinaryVideoUrl(url?: string | null): string {
  if (!url) return '';
  return insertTransform(url, 'f_auto,q_auto');
}

export function buildCloudinaryPosterUrl(url?: string | null): string {
  if (!url) return '';
  return buildCloudinaryImageUrl(url, 1600);
}
