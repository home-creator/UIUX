/**
 * The shape of `site.config.ts`. You shouldn't need to edit this file.
 */

export type Span = 'full' | 'wide' | 'left' | 'right';

export interface Photo {
  /** Cloudinary public ID, e.g. "portfolio/low-tide/boat" (no file extension). */
  id: string;
  /** Describe what is in the frame, for screen readers and search engines. */
  alt: string;
  /** Crop the image is served at: "3:2", "4:5", "2.39:1", "16:9", … */
  ratio: string;
  /** Dominant colour, shown while the image loads. */
  tone: string;
  /** Layout on the series page. */
  span: Span;
  caption?: string;
}

export interface Series {
  /** URL segment: /series/<slug>. Lowercase letters, numbers and dashes. */
  slug: string;
  title: string;
  year: string;
  place: string;
  summary: string;
  /** Colour cast of the series — tints the top of its page. */
  tone: string;
  /** Image used on the home page. */
  cover: Omit<Photo, 'span' | 'caption'>;
  photos: Photo[];
}

export interface SiteConfig {
  /** Production URL, e.g. "https://yourname.com". Used for canonical and share links. */
  url: string;
  cloudinary: {
    /** Your Cloudinary cloud name. PUBLIC_CLOUDINARY_CLOUD_NAME in .env overrides it. */
    cloudName: string;
  };
  name: string;
  role: string;
  base: string;
  email: string;
  social: { label: string; href: string }[];
  /** Meta description for search engines and link previews. */
  description: string;
  home: {
    /** Wrap a word in *asterisks* to set it in italic accent colour. */
    headline: string;
    tagline: string;
    hero: { id: string; alt: string; tone: string; caption: string };
    commissions: string;
  };
  about: {
    portrait: { id: string; alt: string; tone: string };
    headline: string;
    bio: string[];
    availableFor: string;
    clients: string[];
  };
  contact: {
    heading: string;
    note: string;
  };
  series: Series[];
}

/** Identity helper that gives `site.config.ts` autocompletion and type checking. */
export function defineSiteConfig(config: SiteConfig): SiteConfig {
  return config;
}
