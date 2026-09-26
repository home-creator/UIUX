/**
 * Types, build-time checks and helpers for `site.config.ts`.
 * You shouldn't need to edit this file — edit `site.config.ts` instead.
 */
import rawConfig from '../../site.config';
import type { SiteConfig, Series, Span } from './config-types';

export type { SiteConfig, Series, Photo, Span } from './config-types';

// ---------------------------------------------------------------------------
// Build-time checks: fail early, in plain language, instead of shipping a
// broken page.

function validate(c: SiteConfig): SiteConfig {
  const problems: string[] = [];
  const ratioOk = (r: string) => /^\d+(\.\d+)?:\d+(\.\d+)?$/.test(r);
  const colourOk = (t: string) => /^#[0-9a-fA-F]{6}$/.test(t);
  const idOk = (id: string) => id.trim() !== '' && !/^https?:\/\//.test(id) && !/\.(jpe?g|png|webp|avif|heic)$/i.test(id);
  const spans: Span[] = ['full', 'wide', 'left', 'right'];

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c.email)) problems.push(`email "${c.email}" doesn't look like an email address`);
  if (!/^https?:\/\//.test(c.url)) problems.push(`url "${c.url}" must start with https://`);
  if (!c.name.trim()) problems.push('name is empty');

  const checkImage = (where: string, img: { id: string; alt: string; tone: string; ratio?: string }) => {
    if (!idOk(img.id))
      problems.push(`${where}: id "${img.id}" should be a Cloudinary public ID like "folder/photo" — no full URL, no file extension`);
    if (!img.alt.trim()) problems.push(`${where}: alt text is empty`);
    if (!colourOk(img.tone)) problems.push(`${where}: tone "${img.tone}" should be a 6-digit hex colour like "#5d6769"`);
    if (img.ratio !== undefined && !ratioOk(img.ratio)) problems.push(`${where}: ratio "${img.ratio}" should look like "3:2" or "2.39:1"`);
  };

  checkImage('home.hero', c.home.hero);
  checkImage('about.portrait', c.about.portrait);

  const slugs = new Set<string>();
  if (c.series.length === 0) problems.push('series: add at least one series');
  c.series.forEach((s, i) => {
    const where = `series[${i}] "${s.title}"`;
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s.slug)) problems.push(`${where}: slug "${s.slug}" should be lowercase-with-dashes`);
    if (slugs.has(s.slug)) problems.push(`${where}: slug "${s.slug}" is used twice`);
    slugs.add(s.slug);
    if (!colourOk(s.tone)) problems.push(`${where}: tone "${s.tone}" should be a 6-digit hex colour`);
    checkImage(`${where} cover`, s.cover);
    if (s.photos.length === 0) problems.push(`${where}: has no photos`);
    s.photos.forEach((p, j) => {
      checkImage(`${where} photo ${j + 1}`, p);
      if (!spans.includes(p.span)) problems.push(`${where} photo ${j + 1}: span "${p.span}" must be one of ${spans.join(', ')}`);
    });
  });

  if (problems.length) {
    throw new Error(`site.config.ts has ${problems.length} problem(s):\n  - ${problems.join('\n  - ')}`);
  }
  return c;
}

export const site = validate(rawConfig);
export const series = site.series;

export function getSeries(slug: string): Series | undefined {
  return series.find((s) => s.slug === slug);
}

/** Split "a *word* here" into text/emphasis parts for rendering. */
export function emphasis(text: string): { text: string; em: boolean }[] {
  return text
    .split(/(\*[^*]+\*)/)
    .filter(Boolean)
    .map((part) => (part.startsWith('*') && part.endsWith('*') ? { text: part.slice(1, -1), em: true } : { text: part, em: false }));
}
