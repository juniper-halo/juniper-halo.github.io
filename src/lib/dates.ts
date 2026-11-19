// Small helpers for the 'YYYY-MM' dates used in src/data/experience.ts.

/** '2026-03' → '2026.03'; missing → 'now'. */
export function fmtDate(d?: string): string {
  if (!d) return 'now';
  return d.slice(0, 7).replace('-', '.');
}

/** ('2025-08', undefined) → '2025.08 → now'. */
export function fmtRange(start?: string, end?: string): string {
  return `${fmtDate(start)} → ${fmtDate(end)}`;
}

/** Fractional year for a 'YYYY-MM' string, e.g. '2025-08' → 2025.583. */
export function toYear(d: string): number {
  const [y, m = '1'] = d.split('-');
  return Number(y) + (Number(m) - 1) / 12;
}
