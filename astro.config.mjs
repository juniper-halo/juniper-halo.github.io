// @ts-check
import { defineConfig } from 'astro/config';

// Served as a GitHub Pages *project* site: https://juniper-halo.github.io/juno/
// Every internal link must go through `import.meta.env.BASE_URL` (see src/lib/url.ts).
export default defineConfig({
  site: 'https://juniper-halo.github.io',
  base: '/juno',
  trailingSlash: 'ignore',
});
