// @ts-check
import { defineConfig } from 'astro/config';

// Served as the GitHub Pages *user* site (repo juniper-halo.github.io), at the
// domain root: https://juniper-halo.github.io/
// Internal links still go through `url()` (src/lib/url.ts), so a sub-path can be
// reintroduced by setting `base` here alone.
export default defineConfig({
  site: 'https://juniper-halo.github.io',
  trailingSlash: 'ignore',
});
