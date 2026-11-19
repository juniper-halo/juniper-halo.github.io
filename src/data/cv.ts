// Reads cv/cv.yml (the RenderCV source) so the website and the PDF CV share
// one source of truth. Edit the YAML, not this file.
import { parse } from 'yaml';
import raw from '../../cv/cv.yml?raw';

export interface ExperienceEntry {
  company: string;
  position: string;
  location?: string;
  start_date?: string;
  end_date?: string;
  url?: string;
  summary?: string;
  highlights?: string[];
}

export interface ProjectEntry {
  name: string;
  location?: string;
  role?: string;
  start_date?: string;
  end_date?: string;
  url?: string;
  website?: string;
  summary?: string;
  highlights?: string[];
}

export interface EducationEntry {
  institution: string;
  area?: string;
  start_date?: string;
  end_date?: string;
}

interface CvFile {
  cv: {
    name: string;
    sections: {
      Education?: EducationEntry[];
      Experience?: ExperienceEntry[];
      Projects?: ProjectEntry[];
    };
  };
}

const data = parse(raw) as CvFile;
const sections = data.cv.sections;

export const education: EducationEntry[] = sections.Education ?? [];
export const experience: ExperienceEntry[] = sections.Experience ?? [];
export const projects: ProjectEntry[] = sections.Projects ?? [];

/** "2026-03" → "2026.03"; missing/"present" → "now". */
export function fmtDate(d?: string): string {
  if (!d || d === 'present') return 'now';
  return String(d).slice(0, 7).replace('-', '.');
}

export function fmtRange(start?: string, end?: string): string {
  return `${fmtDate(start)} → ${fmtDate(end)}`;
}

/** Fractional year for a "YYYY-MM" string, e.g. "2025-08" → 2025.583. */
export function toYear(d: string): number {
  const [y, m = '1'] = String(d).split('-');
  return Number(y) + (Number(m) - 1) / 12;
}

/** Compact label for the training-log chart: "Research Assistant, ScribeAR" → "RA · ScribeAR". */
export function shortRole(position: string): string {
  return position
    .replace(/^Research Assistant,?\s*/i, 'RA · ')
    .replace(/^Course Assistant,?\s*/i, 'CA · ')
    .replace(/Introduction to Computer Science/i, 'CS')
    .replace(/\s*Research Lab$/i, ' Lab');
}
