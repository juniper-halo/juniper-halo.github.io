# juno – portfolio website

Single-page portfolio for **Juno (Madhav) Tripathi**, built with [Astro](https://astro.build).

- **Live site:** https://juniper-halo.github.io/juno/
- **Look:** "latent space": a live t-SNE plot of my interests, a bio that unmasks like a masked diffusion LM, and experience drawn as a training-loss curve.

## Everyday edits (no web dev needed)

| I want to…                         | Edit this file                                                     |
| ---------------------------------- | ------------------------------------------------------------------ |
| Add/change a job, project, or date | `cv/cv.yml` (also feeds the PDF CV via RenderCV)                   |
| Change the bio / tagline / links   | `src/data/site.ts`                                                 |
| Update "currently reading"         | `src/data/reading.yml`                                             |
| Move or add points on the t-SNE    | `src/data/latent.ts` (x/y are 0–100, % of the plot box)            |
| Add stat tiles to a project card   | `projectStats` in `src/data/site.ts`                               |
| Change colours / fonts             | the `:root` block at the top of `src/styles/global.css`            |
| Replace the photo                  | `src/assets/img/profile_pic.png` (any size; it's resized on build) |
| Replace the resume PDF             | `public/assets/pdf/resume_juno_latest.pdf`                         |

The training-log chart is generated from the start dates in `cv/cv.yml`, so new roles appear on it automatically.

## Run it locally

Needs Node 24 (pinned in `.nvmrc`).

```bash
nvm use            # switches to Node 24
npm install        # first time only
npm run dev        # http://localhost:4321/juno/  (auto-reloads on save)
```

Before pushing, optionally run:

```bash
npm run check      # type-check
npm run build      # production build into dist/
npm run preview    # serve dist/ at http://localhost:4321/juno/
```

## Deploying

Push to `main`. The **Deploy site** workflow builds the site and publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves (Settings → Pages → Deploy from a branch → `gh-pages` / root). Pushes to other branches and PRs only build, as a check.

The **Render CV** workflow re-renders `cv/rendercv/output/*.pdf` with RenderCV when `cv/cv.yml` changes on `main`.

## Project layout

```
cv/                  CV source (RenderCV YAML), RenderCV config + output, LaTeX resume
public/              files served as-is (resume PDF, favicon, robots.txt)
src/
  assets/img/        photos (optimised at build time)
  components/        Nav, Hero, LatentPlot, TrainingLog, Projects, Reading, Footer
  data/              site.ts, cv.ts (reads cv/cv.yml), reading.yml, latent.ts
  layouts/Base.astro <head>, fonts, global CSS
  pages/             index (the site), cv (redirects to the PDF), 404
  styles/global.css  design tokens + shared styles
```

All animations stop when off-screen and are disabled for visitors who prefer reduced motion.
