/**
 * Your work, grouped into series. Each photo is a Cloudinary public ID.
 *
 * The IDs below point at the sample images every new Cloudinary account ships
 * with (the "samples/" folder), so the site renders as soon as you set
 * PUBLIC_CLOUDINARY_CLOUD_NAME. Swap them for your own uploads — and rewrite
 * the alt text to describe what is actually in each frame.
 *
 * - ratio: the crop the image is served at ("3:2", "4:5", "2.39:1", …)
 * - tone:  a dominant colour, painted behind the image while it loads
 * - span:  "full" (edge to edge), "wide" (main column), or "left"/"right"
 *          (a narrower frame offset to one side, caption beside it)
 */

export type Span = 'full' | 'wide' | 'left' | 'right';

export interface Photo {
  id: string;
  alt: string;
  ratio: string;
  tone: string;
  span: Span;
  caption?: string;
}

export interface Series {
  slug: string;
  title: string;
  year: string;
  place: string;
  summary: string;
  /** Colour cast of the series — tints the page's atmosphere. */
  tone: string;
  cover: Photo;
  photos: Photo[];
}

export const series: Series[] = [
  {
    slug: 'low-tide',
    title: 'Low Tide',
    year: '2025',
    place: 'Atlantic coast',
    summary:
      'Six weeks walking the same stretch of shore at first light, when the water pulls back and leaves everything slightly out of place.',
    tone: '#5d6769',
    cover: {
      id: 'samples/landscapes/beach-boat',
      alt: 'A small wooden boat resting on an empty beach',
      ratio: '4:5',
      tone: '#5d6769',
      span: 'wide',
    },
    photos: [
      { id: 'samples/landscapes/beach-boat', alt: 'A small wooden boat resting on an empty beach', ratio: '2.39:1', tone: '#5d6769', span: 'full', caption: 'The hour after the tide turns' },
      { id: 'samples/sheep', alt: 'Sheep grazing on a pale coastal field', ratio: '4:5', tone: '#7a7b6c', span: 'left', caption: 'Dune pasture, north of the lighthouse' },
      { id: 'samples/landscapes/nature-mountains', alt: 'Mountains fading into haze beyond the water', ratio: '3:2', tone: '#56606a', span: 'wide' },
      { id: 'samples/landscapes/landscape-panorama', alt: 'A wide panorama of the coastline under an overcast sky', ratio: '2.39:1', tone: '#6a7072', span: 'full', caption: 'Weather coming in from the west' },
    ],
  },
  {
    slug: 'night-shift',
    title: 'Night Shift',
    year: '2024',
    place: 'Milan',
    summary:
      'Commuters, cleaners and late trams — the city in the thin hours, lit only by what it forgets to switch off.',
    tone: '#3d3530',
    cover: {
      id: 'samples/man-on-a-street',
      alt: 'A man walking alone down a city street',
      ratio: '4:5',
      tone: '#3d3530',
      span: 'wide',
    },
    photos: [
      { id: 'samples/man-on-a-street', alt: 'A man walking alone down a city street', ratio: '3:2', tone: '#3d3530', span: 'wide', caption: 'Via Padova, 02:40' },
      { id: 'samples/man-on-a-escalator', alt: 'A man riding an escalator in a metro station', ratio: '4:5', tone: '#433a33', span: 'right', caption: 'Last train' },
      { id: 'samples/landscapes/architecture-signs', alt: 'Illuminated signs on the facades of old buildings', ratio: '2.39:1', tone: '#4b3f37', span: 'full' },
      { id: 'samples/look-up', alt: 'Looking up between tall buildings towards the sky', ratio: '4:5', tone: '#4a4a4f', span: 'left', caption: 'Courtyard, Porta Romana' },
      { id: 'samples/people/jazz', alt: 'A musician playing in a dim bar', ratio: '3:2', tone: '#3a2e28', span: 'wide', caption: 'Closing set' },
    ],
  },
  {
    slug: 'quiet-rooms',
    title: 'Quiet Rooms',
    year: '2023',
    place: 'Still life',
    summary:
      'Tables after breakfast, chairs nobody sits in. A study of domestic light and the objects it chooses.',
    tone: '#7d6a55',
    cover: {
      id: 'samples/cup-on-a-table',
      alt: 'A cup on a wooden table in soft morning light',
      ratio: '4:5',
      tone: '#7d6a55',
      span: 'wide',
    },
    photos: [
      { id: 'samples/cup-on-a-table', alt: 'A cup on a wooden table in soft morning light', ratio: '4:5', tone: '#7d6a55', span: 'left', caption: 'Morning, east window' },
      { id: 'samples/breakfast', alt: 'A breakfast table seen from above', ratio: '3:2', tone: '#8a7760', span: 'wide' },
      { id: 'samples/coffee', alt: 'A cup of coffee on a saucer', ratio: '4:5', tone: '#6f5a47', span: 'right', caption: 'Second cup' },
      { id: 'samples/dessert-on-a-plate', alt: 'A dessert on a ceramic plate', ratio: '3:2', tone: '#8b7a68', span: 'wide' },
    ],
  },
  {
    slug: 'portraits',
    title: 'Portraits',
    year: '2022 — 2025',
    place: 'Commissioned & personal',
    summary:
      'People photographed slowly, mostly in their own light. Editorial commissions alongside an ongoing personal archive.',
    tone: '#5a4f47',
    cover: {
      id: 'samples/outdoor-woman',
      alt: 'A woman photographed outdoors in natural light',
      ratio: '4:5',
      tone: '#5a4f47',
      span: 'wide',
    },
    photos: [
      { id: 'samples/outdoor-woman', alt: 'A woman photographed outdoors in natural light', ratio: '4:5', tone: '#5a4f47', span: 'right', caption: 'For a spring editorial' },
      { id: 'samples/people/bicycle', alt: 'A person standing with a bicycle', ratio: '3:2', tone: '#6b6255', span: 'wide' },
      { id: 'samples/people/boy-snow-hoodie', alt: 'A boy in a hooded jacket in the snow', ratio: '4:5', tone: '#7c8288', span: 'left', caption: 'First snow' },
      { id: 'samples/woman-on-a-football-field', alt: 'A woman standing on an empty football field', ratio: '2.39:1', tone: '#56614f', span: 'full' },
    ],
  },
];

export function getSeries(slug: string): Series | undefined {
  return series.find((s) => s.slug === slug);
}
