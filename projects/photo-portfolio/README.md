# Photo Portfolio — Astro + Tailwind + Cloudinary

A cinematic, editorial photography portfolio. Dark "film room" palette, Libre Bodoni + Public Sans,
full-bleed art-directed hero, alternating series index, editorial series pages with a keyboard/swipe
lightbox, and an About/Contact page. Static output, near-zero JS.

## Run it

```bash
cp .env.example .env        # then set PUBLIC_CLOUDINARY_CLOUD_NAME
npm install
npm run dev                 # http://localhost:4321
npm run build               # static site in dist/
```

## Make it yours

| What | Where |
|------|-------|
| Name, tagline, email, socials, hero & portrait image | `src/data/site.ts` |
| Series, photos, captions, crops, layout | `src/data/series.ts` |
| Palette, fonts, grain, motion | `src/styles/global.css` (`@theme` block) |
| Production URL (canonical / Open Graph) | `astro.config.mjs` → `site` |

Photos are Cloudinary **public IDs**. The defaults point at the `samples/` images that ship with every
new Cloudinary account, so the site renders as soon as your cloud name is set. Replace them with your
own uploads and rewrite each `alt` to describe the actual frame.

Per photo you choose:
- `ratio` — the crop it's served at (`3:2`, `4:5`, `2.39:1` …). Cloudinary crops with `g_auto`.
- `span` — `full` (edge to edge), `wide`, `left` or `right` (offset frame with caption beside).
- `tone` — its dominant colour, shown behind the blurred placeholder while loading.

Each series also has a `tone` that tints the top of its page.

## How images are delivered

`src/lib/cloudinary.ts` builds URLs directly (no SDK, no API secret): `f_auto,q_auto` for AVIF/WebP,
a 7-step `srcset` from 480 to 2560px, fixed aspect ratios (no layout shift), and a ~1 KB blurred
preview. The lightbox shows each frame uncropped.

## Accessibility & motion

Text on the background is AA+ (paper 15.5:1, ash 7.0:1, brass 8.2:1). Skip link, visible focus
rings, 44px targets, native `<dialog>` lightbox with focus return, arrow keys and swipe.
Scroll reveals, hero drift, grain and page cross-fades all switch off under `prefers-reduced-motion`,
and content is fully visible without JavaScript.
