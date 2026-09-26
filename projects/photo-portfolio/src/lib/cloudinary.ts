/**
 * Tiny Cloudinary URL builder — no SDK, no API secret.
 *
 * Every image is requested at an explicit aspect ratio (c_fill + ar_),
 * so the rendered box is known before the file arrives (no layout shift),
 * and f_auto/q_auto let Cloudinary serve AVIF/WebP at a sensible quality.
 */

import config from '../../site.config';

/** From site.config.ts; PUBLIC_CLOUDINARY_CLOUD_NAME in .env overrides it. */
export const CLOUD_NAME: string =
  import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME || config.cloudinary.cloudName;

const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/** Widths offered in every srcset. */
export const WIDTHS = [480, 720, 960, 1280, 1600, 2048, 2560] as const;

export interface CldOptions {
  width: number;
  /** Aspect ratio as "w:h", e.g. "3:2", "4:5", "2.39:1". */
  ratio?: string;
  /** Extra raw transformations, e.g. "e_grayscale". */
  raw?: string;
  quality?: string;
}

export function cldUrl(publicId: string, { width, ratio, raw, quality = 'auto' }: CldOptions): string {
  const t = [
    'f_auto',
    `q_${quality}`,
    ratio ? `c_fill,g_auto,ar_${ratio}` : 'c_limit',
    `w_${width}`,
    raw,
  ]
    .filter(Boolean)
    .join(',');
  return `${BASE}/${t}/${publicId}`;
}

export function cldSrcset(publicId: string, ratio?: string, raw?: string): string {
  return WIDTHS.map((w) => `${cldUrl(publicId, { width: w, ratio, raw })} ${w}w`).join(', ');
}

/** A ~1KB blurred preview, painted behind the real image while it loads. */
export function cldPlaceholder(publicId: string, ratio?: string): string {
  return cldUrl(publicId, { width: 40, ratio, raw: 'e_blur:800', quality: '1' });
}

/** Parse "3:2" → 1.5 (used for width/height attributes). */
export function ratioToNumber(ratio: string): number {
  const [w, h] = ratio.split(':').map(Number);
  return w / h;
}
