/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — the one file to edit.
 *
 *  Your name, contact details, clients, page text and every photo live here.
 *  Save, and the dev server reloads. `npm run build` checks this file and
 *  stops with a plain-language message if something is off (a missing alt
 *  text, a duplicated slug, a full URL where a Cloudinary ID should be…).
 *
 *  Photos are Cloudinary public IDs: the path shown in your Media Library,
 *  without the file extension — e.g. "portfolio/low-tide/boat".
 *  The IDs below are the "samples/" images every new Cloudinary account
 *  includes, so the site works as soon as you set your cloud name.
 *
 *  Tips: wrap a word in *asterisks* in a headline to set it in italic accent;
 *  write {name} or {base} in the bio and it is filled in for you.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { defineSiteConfig } from './src/lib/config-types';

export default defineSiteConfig({
  // ── Basics ────────────────────────────────────────────────────────────────
  url: 'https://example.com',
  cloudinary: {
    cloudName: 'demo', // ← your cloud name (Cloudinary Dashboard → "Cloud name")
  },

  name: 'Aurelio Vane',
  role: 'Photographer',
  base: 'Lisbon & Milan',
  email: 'studio@example.com',
  social: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
  ],
  description:
    'Aurelio Vane is a documentary and editorial photographer working between the coast and the city. Selected series, commissions and prints.',

  // ── Home page ─────────────────────────────────────────────────────────────
  home: {
    headline: 'Stillness, *held* a moment longer.',
    tagline: 'Quiet light, long shadows, and the minutes before something happens.',
    hero: {
      id: 'samples/landscapes/beach-boat',
      alt: 'A small wooden boat resting on an empty beach at low tide',
      tone: '#5d6769',
      caption: 'Low Tide — Costa da Caparica, 2025',
    },
    commissions: 'Available for editorial, portrait and interiors work — and for prints.',
  },

  // ── About page ────────────────────────────────────────────────────────────
  about: {
    portrait: {
      id: 'samples/man-portrait',
      alt: 'Portrait of the photographer in soft window light',
      tone: '#5a4f47',
    },
    headline: 'I photograph the *in-between* — light arriving, people waiting, rooms just left.',
    bio: [
      '{name} is a documentary and editorial photographer based in {base}. Their work moves between long personal series and commissions for magazines, architects and small brands.',
      'Most of it is made on film or slow digital, in available light, with as little direction as possible. Prints of every series are available in small editions on archival cotton paper.',
    ],
    availableFor: 'Editorial, portrait, interiors, prints',
    // Placeholder names — list your real clients and publications.
    clients: ['Client One', 'Journal Two', 'Studio Three', 'Magazine Four', 'Gallery Five', 'House Six'],
  },

  contact: {
    heading: 'For commissions, prints and collaborations.',
    note: 'I reply to every message, usually within two working days.',
  },

  // ── Series ────────────────────────────────────────────────────────────────
  //  Shown on the home page in this order; each gets a page at /series/<slug>.
  //
  //  Per photo:
  //    ratio  crop it's served at — "3:2", "4:5", "2.39:1" (cinematic), "16:9"
  //    tone   its dominant colour, shown while it loads
  //    span   "full" edge to edge · "wide" main column ·
  //           "left" / "right" narrower frame with the caption beside it
  //  Rewrite every alt to describe what is actually in the frame.
  series: [
    {
      slug: 'low-tide',
      title: 'Low Tide',
      year: '2025',
      place: 'Atlantic coast',
      summary:
        'Six weeks walking the same stretch of shore at first light, when the water pulls back and leaves everything slightly out of place.',
      tone: '#5d6769',
      cover: { id: 'samples/landscapes/beach-boat', alt: 'A small wooden boat resting on an empty beach', ratio: '4:5', tone: '#5d6769' },
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
      summary: 'Commuters, cleaners and late trams — the city in the thin hours, lit only by what it forgets to switch off.',
      tone: '#3d3530',
      cover: { id: 'samples/man-on-a-street', alt: 'A man walking alone down a city street', ratio: '4:5', tone: '#3d3530' },
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
      summary: 'Tables after breakfast, chairs nobody sits in. A study of domestic light and the objects it chooses.',
      tone: '#7d6a55',
      cover: { id: 'samples/cup-on-a-table', alt: 'A cup on a wooden table in soft morning light', ratio: '4:5', tone: '#7d6a55' },
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
      summary: 'People photographed slowly, mostly in their own light. Editorial commissions alongside an ongoing personal archive.',
      tone: '#5a4f47',
      cover: { id: 'samples/outdoor-woman', alt: 'A woman photographed outdoors in natural light', ratio: '4:5', tone: '#5a4f47' },
      photos: [
        { id: 'samples/outdoor-woman', alt: 'A woman photographed outdoors in natural light', ratio: '4:5', tone: '#5a4f47', span: 'right', caption: 'For a spring editorial' },
        { id: 'samples/people/bicycle', alt: 'A person standing with a bicycle', ratio: '3:2', tone: '#6b6255', span: 'wide' },
        { id: 'samples/people/boy-snow-hoodie', alt: 'A boy in a hooded jacket in the snow', ratio: '4:5', tone: '#7c8288', span: 'left', caption: 'First snow' },
        { id: 'samples/woman-on-a-football-field', alt: 'A woman standing on an empty football field', ratio: '2.39:1', tone: '#56614f', span: 'full' },
      ],
    },
  ],
});
