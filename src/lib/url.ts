// The site lives under a sub-path (/juno/), so every internal URL must be
// prefixed with Astro's BASE_URL. Use `url('assets/img/x.png')`, never '/assets/...'.
const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function url(path = ''): string {
  return base + path.replace(/^\/+/, '');
}
