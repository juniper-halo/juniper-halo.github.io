# Agent Guide for this Portfolio

This repository is a **single-page portfolio built with Astro 7** (static output, no UI framework). It replaced an al-folio/Jekyll site; none of the Jekyll/al-folio files, docs or workflows apply any more. This file is the master reference for agents. `README.md` is the owner-facing guide.

The owner is an ML researcher, not a web developer: keep changes simple, explain them plainly, and prefer editing data files over code.

## 1. What the site is

One page at `/` (served at `https://juniper-halo.github.io/juno/`) with, in order:

1. **Sticky glass nav** (`src/components/Nav.astro`): the *only* frosted-glass surfaces are things that float above content (nav, plot tooltip). Don't put glass on content cards; it was tried and rejected.
2. **Hero** (`Hero.astro`): name, photo, a tagline that "unmasks" word-by-word like a masked diffusion LM (30 steps, resample button), and the **live t-SNE plot** (`LatentPlot.astro`: canvas background stream + real points as focusable buttons with glass tooltips, nearest-neighbour lines from "query: juno").
3. **Training log** (`TrainingLog.astro`): experience as a TensorBoard-style loss curve. Milestones = education start + each role's `start_date` from `cv/cv.yml`. A time cursor replays the run when scrolled into view; then the tail flickers "live". The role list underneath also comes from `cv/cv.yml`.
4. **Projects** (`Projects.astro`): from `cv/cv.yml` `Projects`, with optional stat tiles from `projectStats` in `src/data/site.ts`.
5. **In my context window** (`Reading.astro`): from `src/data/reading.yml`.
6. **Footer**: off-hours line + links.

Other routes: `/cv/` (meta-refresh to the resume PDF, so the old URL works) and a themed `404`.

Visual direction ("Latent Space", dark only): near-black background, Space Grotesk + JetBrains Mono, one lime accent (`--accent`) plus cyan/violet/grey cluster colours, crisp hairlines and grids. Design tokens live in `:root` in `src/styles/global.css`.

## 2. Single sources of truth

| Content                       | File                                                       |
| ----------------------------- | ---------------------------------------------------------- |
| Experience, projects, dates   | `cv/cv.yml` (RenderCV format, parsed by `src/data/cv.ts`)  |
| Name, tagline, intro, links   | `src/data/site.ts`                                         |
| Reading list                  | `src/data/reading.yml`                                     |
| t-SNE points / clusters       | `src/data/latent.ts` (hand-placed; owner may replace with real embeddings) |
| Photo                         | `src/assets/img/profile_pic.png` (optimised via `astro:assets`) |
| Resume PDF                    | `public/assets/pdf/resume_juno_latest.pdf` (URL kept from the old site) |

Never duplicate CV content into components. **Don't add site-only keys to `cv/cv.yml`**: RenderCV validates it strictly; put extras in `src/data/site.ts`.

## 3. Rules that bite

- **Base path:** the site lives under `/juno/`. Build internal URLs with `url()` from `src/lib/url.ts` (or `import.meta.env.BASE_URL`), never a leading `/`.
- **Glass CSS:** write only `backdrop-filter`, never also `-webkit-backdrop-filter`; with both, the minifier keeps only the prefixed one and Chrome loses the blur.
- **Motion:** every animation must (a) pause when off-screen / tab hidden, and (b) be skipped for `prefers-reduced-motion`, leaving the server-rendered final state. The page must still read fine without JS.
- **Accessibility:** real `<button>`/`<a>`, visible focus, text contrast ≥ 4.5:1; keep `aria-label`s on the plot points and the chart.
- **No new dependencies** without a reason; current deps are `astro`, `yaml`, two `@fontsource` packages.
- Keep it one page unless the owner asks for more.

## 4. Commands

Node 24 (`.nvmrc`; Astro 7 needs ≥ 22.23.4).

```bash
npm install
npm run dev       # http://localhost:4321/juno/
npm run check     # astro check (must be 0 errors)
npm run build     # → dist/
npm run preview
```

Verify visual changes in a real browser at desktop (1280px) and phone (390px) widths, with and without reduced motion, and check the console for errors.

## 5. CI / deployment

- `.github/workflows/deploy.yml`: on every push/PR: `npm ci`, `npm run check`, `npm run build`. On `main` only, publishes `dist/` to the **`gh-pages`** branch (Pages source = "Deploy from a branch", `gh-pages`, root). `public/.nojekyll` must stay, or Pages hides `_astro/`.
- `.github/workflows/render-cv.yml`: on `main` changes to `cv/cv.yml` or `cv/rendercv/*.yaml`, renders the PDF with RenderCV (`cv/requirements.txt`) into `cv/rendercv/output/` and commits it.

## 6. What NOT to commit

Obey `.gitignore` (`dist/`, `.astro/`, `node_modules/`, RenderCV `.typ` intermediates, OS/editor files, `.env*`). Never commit secrets.
