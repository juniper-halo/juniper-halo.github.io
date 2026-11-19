// Prefixes internal URLs with Astro's BASE_URL. The site is served at the root
// today, but going through `url('assets/img/x.png')` (never '/assets/...') keeps
// every link correct if `base` in astro.config.mjs is ever set to a sub-path.
const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function url(path = ''): string {
  return base + path.replace(/^\/+/, '');
}
