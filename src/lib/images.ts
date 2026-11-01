/**
 * Build fast, responsive Unsplash URLs.
 * Widths are requested from the Unsplash CDN so browsers only download
 * the resolution they actually need.
 */
export function unsplash(id: string, width = 1200, height?: number, quality = 70): string {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    w: String(width),
    q: String(quality),
  });

  if (height) params.set('h', String(height));

  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}

/**
 * Build a width-based srcset that keeps the requested aspect ratio at every size,
 * so the CDN never sends a crop the layout cannot use.
 */
export function unsplashSet(
  id: string,
  widths: number[] = [480, 768, 1024, 1440, 1920],
  aspect = 16 / 9,
  quality = 70,
): string {
  return widths
    .map((width) => `${unsplash(id, width, Math.round(width / aspect), quality)} ${width}w`)
    .join(', ');
}
