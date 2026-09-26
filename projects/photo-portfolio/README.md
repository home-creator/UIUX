# Photo Portfolio — Astro + Tailwind + Cloudinary

A cinematic, editorial photography portfolio. Dark "film room" and light "paper" themes, Libre Bodoni + Public Sans,
full-bleed art-directed hero, alternating series index, editorial series pages with a keyboard/swipe
lightbox, and an About/Contact page. Static output, near-zero JS.

## Run it

```bash
npm install
npm run dev                 # http://localhost:4321
npm run build               # static site in dist/
```

## Make it yours — edit `site.config.ts`

Everything personal lives in **one file at the project root, `site.config.ts`**:

- URL and Cloudinary cloud name
- name, role, city, email, social links, meta description
- home-page headline, tagline, hero photo and commissions line
- about-page portrait, headline, bio, "available for" and client list
- contact heading and note
- every series and every photo (Cloudinary IDs, alt text, captions, crops, layout)

Your editor autocompletes every field, and `npm run build` checks the file and stops with a plain-language
list of problems (bad email, duplicated slug, empty alt text, a full URL or `.jpg` where a Cloudinary ID
should be…). In headlines, wrap a word in `*asterisks*` to set it in italic accent; in the bio, `{name}`
and `{base}` are filled in for you.

Photos are Cloudinary **public IDs**: the path in your Media Library without the extension, e.g.
`portfolio/low-tide/boat`. The defaults point at the `samples/` images every new Cloudinary account
includes, so the site renders as soon as your cloud name is set. Replace them with your own uploads and
rewrite each `alt` to describe the actual frame.

Per photo you choose:
- `ratio` — the crop it's served at (`3:2`, `4:5`, `2.39:1` …). Cloudinary crops with `g_auto`.
- `span` — `full` (edge to edge), `wide`, `left` or `right` (offset frame with caption beside).
- `tone` — its dominant colour, shown behind the blurred placeholder while loading.

Each series also has a `tone` that tints the top of its page. Palette, fonts, grain and motion are design,
not content — they stay in `src/styles/global.css`.

Optional: `PUBLIC_CLOUDINARY_CLOUD_NAME` in a `.env` file overrides the cloud name from the config
(handy for a staging account).

## Themes

Two themes share one palette: the default dark "film room" and a light "paper" room. The site follows the
visitor's system setting until they press the sun/moon toggle, which is then remembered. The hero, its
overlaid header and the lightbox always stay dark — photographs read best on dark, and type over a photo
needs the dark scrim. Tokens (`bg`, `surface`, `line`, `fg`, `muted`, `accent`) live in
`src/styles/global.css`; the light values are under `:root[data-theme='light']`.

## How images are delivered

`src/lib/cloudinary.ts` builds URLs directly (no SDK, no API secret): `f_auto,q_auto` for AVIF/WebP,
a 7-step `srcset` from 480 to 2560px, fixed aspect ratios (no layout shift), and a ~1 KB blurred
preview. The lightbox shows each frame uncropped.

## Accessibility & motion

Text on the background passes AA in both themes (dark: fg 15.5:1, muted 7.0:1, accent 8.2:1; light: fg 15.3:1, muted 6.3:1, accent 5.1:1). Skip link, visible focus
rings, 44px targets, native `<dialog>` lightbox with focus return, arrow keys and swipe.
Scroll reveals, hero drift, grain and page cross-fades all switch off under `prefers-reduced-motion`,
and content is fully visible without JavaScript.
