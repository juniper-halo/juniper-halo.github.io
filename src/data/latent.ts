// Data for the hero "t-SNE of my interests" plot.
//
// Coordinates are in percent of the plot box (x: 0 = left, y: 0 = top).
// They are hand-placed for now. To make the plot real, embed each point's
// description, run t-SNE/UMAP to 2-D, rescale to ~5–95 and paste x/y here.
//
// `color` is the name of a CSS custom property from src/styles/global.css.

export interface Cluster {
  id: string;
  label: string;
  color: string; // e.g. '--accent'
  x: number; // cluster centre (background points stream around it)
  y: number;
  labelX: number; // where the cluster's name is printed
  labelY: number;
}

export interface LatentPoint {
  id: string;
  label: string;
  kind: string; // shown above the label in the tooltip
  cluster: string; // Cluster id
  x: number;
  y: number;
  href?: string;
}

export const clusters: Cluster[] = [
  { id: 'vision', label: 'vision', color: '--accent', x: 24, y: 30, labelX: 6, labelY: 7 },
  { id: 'lm', label: 'diffusion LMs', color: '--cyan', x: 72, y: 28, labelX: 68, labelY: 7 },
  { id: 'teaching', label: 'teaching', color: '--violet', x: 28, y: 76, labelX: 6, labelY: 91 },
  { id: 'foundations', label: 'foundations', color: '--grey', x: 76, y: 75, labelX: 70, labelY: 91 },
];

export const points: LatentPoint[] = [
  { id: 'asl', label: 'ASL Transcription Service', kind: 'project', cluster: 'vision', x: 19, y: 24 },
  { id: 'mvs', label: 'MVSplat vs. SEVA ablations', kind: 'research · Shepherd Lab', cluster: 'vision', x: 31, y: 37 },
  { id: 'scribe', label: 'ScribeAR', kind: 'research · ScribeAR', cluster: 'lm', x: 56, y: 38 },
  { id: 'shep', label: 'Diffusion LMs: context coherence', kind: 'research · Shepherd Lab', cluster: 'lm', x: 66, y: 27 },
  { id: 'moe', label: 'MoE++', kind: 'reading', cluster: 'lm', x: 79, y: 20 },
  { id: 'longcat', label: 'LongCat-Flash', kind: 'reading', cluster: 'lm', x: 82, y: 35 },
  { id: 'cs1', label: 'CA, Intro to CS I', kind: 'teaching', cluster: 'teaching', x: 22, y: 70 },
  { id: 'cs2', label: 'CA, Intro to CS II', kind: 'teaching', cluster: 'teaching', x: 34, y: 77 },
  { id: 'linalg', label: 'Linear Algebra', kind: 'coursework', cluster: 'foundations', x: 69, y: 71 },
  { id: 'ds', label: 'Data Structures', kind: 'coursework', cluster: 'foundations', x: 79, y: 80 },
  { id: 'arch', label: 'Computer Architecture', kind: 'coursework', cluster: 'foundations', x: 84, y: 68 },
];

// The white "query" ring and its nearest neighbours (dashed lines + scores).
export const query = { label: 'query: juno', x: 48, y: 48 };
export const neighbours: { to: string; score: number }[] = [
  { to: 'scribe', score: 0.91 },
  { to: 'mvs', score: 0.87 },
  { to: 'shep', score: 0.84 },
];
