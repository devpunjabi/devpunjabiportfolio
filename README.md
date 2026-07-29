# Dev Punjabi — Portfolio

Personal portfolio site. React 19 + TypeScript + Vite + Tailwind CSS, deployed as a
static build to GitHub Pages.

Live: <https://devpunjabi.github.io/devpunjabiportfolio/>

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script              | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Development server with HMR                         |
| `npm run build`     | Typecheck, then build the static site into `dist/`  |
| `npm run preview`   | Serve the production build locally                  |
| `npm run images`    | Regenerate responsive image derivatives (see below) |
| `npm run typecheck` | Typecheck without building                          |
| `npm run deploy`    | Build and publish `dist/` to the `gh-pages` branch  |

## Images

Source photos live in `assets/<section>/` and are **never** referenced directly by
the app. `npm run images` runs `scripts/optimize-images.mjs`, which uses sharp to
produce, for each photo:

- AVIF and WebP at 640 / 1280 / 1920 px wide
- one JPEG fallback at 1280 px
- a tiny inline blur placeholder (LQIP)

Output goes to `public/img/` with a content hash in each filename, and
`assets/generated/manifest.ts` records the set. Components consume it through the
`<Img>` component, which emits a `<picture>` with the right `srcset` and `sizes`.

To add a photo:

1. Drop it in the relevant `assets/<section>/` folder.
2. Run `npm run images` (existing derivatives are skipped, so this is fast).
3. Reference it from that folder's `images.ts` via `img('<section>/<filename>')`.

Commit the generated files in `public/img/` and the manifest — the build reads them
directly and does not re-encode anything.

## Contact form

The form uses [EmailJS](https://dashboard.emailjs.com/). Copy `.env.example` to
`.env.local` and fill in the three values:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Without them the form still works — it falls back to opening a pre-filled message in
the visitor's own mail client.

## Configuration

`config/site.ts` holds the name, role, email, location and social links. Any social
URL left as an empty string is omitted from the UI rather than rendered as a dead
link.

## Structure

```
App.tsx                  Router, footer, layout shell
components/              Page components + shared <Img> and <Reveal>
config/site.ts           Identity, contact details, social links
constants.ts             Page copy and navigation, EN and DE
contexts/                Language provider
hooks/                   Shared hooks (media queries)
assets/<section>/        Source photos + images.ts lookups
assets/generated/        Image manifest (generated — do not edit)
scripts/                 Image optimisation
public/img/              Generated responsive derivatives (committed)
```
