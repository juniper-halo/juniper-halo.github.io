# juno – portfolio website

Single-page portfolio for **Juno (Madhav) Tripathi**, built with [Astro](https://astro.build).

- **Live site:** https://juniper-halo.github.io/
- **Look:** "latent space": a live t-SNE plot of my interests, a bio that unmasks like a masked diffusion LM, and experience drawn as a training-loss curve.

## Everyday edits (no web dev needed)

| I want to…                         | Edit this file                                                       |
| ---------------------------------- | -------------------------------------------------------------------- |
| Add/change a job, project, or date | `src/data/experience.ts` (`education`, `roles`, `projects`)          |
| Add stat tiles to a project card   | that project's `stats` in `src/data/experience.ts`                   |
| Change the bio / tagline / links   | `src/data/site.ts`                                                   |
| Update "currently reading"         | `src/data/reading.ts`                                                |
| Move or add points on the t-SNE    | `src/data/latent.ts` (x/y are 0–100, % of the plot box)              |
| Change colours / fonts             | the `:root` block at the top of `src/styles/global.css`              |
| Replace the photo                  | `src/assets/img/profile_pic.png` (any size; it's resized on build)   |
| Replace the resume PDF             | `public/assets/pdf/resume_juno_latest.pdf` (keep the file name)      |

The data files are plain TypeScript: each entry is an `{ ... }` object in a list, so copy an existing entry and change its text. Dates are `'YYYY-MM'`; leave out `end` for something ongoing. `npm run check` will point at any typo or missing field.

The training-log chart is generated from `education.start` and each role's `start` in `src/data/experience.ts`, labelled with the role's `chartLabel`, so new roles appear on it automatically.

## Run it locally

Needs Node 24 (pinned in `.nvmrc`).

```bash
nvm use            # switches to Node 24
npm install        # first time only
npm run dev        # http://localhost:4321/  (auto-reloads on save)
```

Before pushing, optionally run:

```bash
npm run check      # type-check
npm run build      # production build into dist/
npm run preview    # serve dist/ at http://localhost:4321/
```

## Deploying

Push to `main`. The **Deploy site** workflow type-checks and builds the site, then publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves at the domain root because the repo is named `juniper-halo.github.io` (Settings → Pages → Deploy from a branch → `gh-pages` / root). Pushes to other branches and PRs only check and build.

## Project layout

```
public/              files served as-is (resume PDF, favicon, robots.txt)
src/
  assets/img/        photos (optimised at build time)
  components/        Nav, Hero, LatentPlot, TrainingLog, Projects, Reading, Footer
  data/              site.ts, experience.ts, reading.ts, latent.ts (all the site's content)
  lib/               url.ts (base-path links), dates.ts (date formatting)
  layouts/Base.astro <head>, fonts, global CSS
  pages/             index (the site), cv (redirects to the PDF), 404
  styles/global.css  design tokens + shared styles
```

All animations stop when off-screen and are disabled for visitors who prefer reduced motion.
