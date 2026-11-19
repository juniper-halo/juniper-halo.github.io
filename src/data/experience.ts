// Education, experience and projects shown on the site.
// Dates are 'YYYY-MM'. Leave `end` out for something that's still ongoing.
// The training-log chart is drawn from `education.start` plus each role's
// `start`, labelled with its `chartLabel`, so new roles appear on it automatically.

export interface Education {
  institution: string;
  /** Short name used on the chart, e.g. 'UIUC'. */
  short: string;
  degree: string;
  start: string;
  end?: string;
}

export interface Role {
  title: string;
  org: string;
  location?: string;
  start: string;
  /** Omit while the role is ongoing. */
  end?: string;
  url?: string;
  /** Compact label for the training-log chart, e.g. 'RA · ScribeAR'. */
  chartLabel: string;
  summary: string;
  highlights?: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Project {
  name: string;
  role?: string;
  start?: string;
  end?: string;
  /** Link to the source code. */
  code?: string;
  /** Link to a project page / demo. */
  website?: string;
  summary: string;
  highlights?: string[];
  /** Optional headline numbers shown as tiles on the project card. */
  stats?: Stat[];
}

export const education: Education = {
  institution: 'University of Illinois Urbana-Champaign',
  short: 'UIUC',
  degree: 'Computer Science (B.S.)',
  start: '2023-08',
  end: '2028-05',
};

// Newest first.
export const roles: Role[] = [
  {
    title: 'Research Assistant, Shepherd Research Lab',
    org: 'Siebel School of Computing and Data Science',
    location: 'Urbana, IL',
    start: '2026-03',
    chartLabel: 'RA · Shepherd Lab',
    summary:
      'Research assistant in Shepherd Lab, developing methods to improve context coherence and compute on masked/discrete diffusion-based language models.',
    highlights: [
      'Designed and implemented a reproducible ablation pipeline for a training-free diffusion-based rendering, benchmarking MVSplat against four SEVA variants with Hydra-configured experiment orchestration and CLIP-guided schedule modulation.',
      'Isolated per-scene and per-mode artifacts and used metrics such as PSNR, SSIM, LPIPS, and MUSIQ to quantify diffusion work and quality under different conditions.',
    ],
  },
  {
    title: 'Research Assistant, ScribeAR',
    org: 'Siebel School of Computing and Data Science',
    location: 'Urbana, IL',
    start: '2026-02',
    url: 'https://scribear.illinois.edu/v/index.html',
    chartLabel: 'RA · ScribeAR',
    summary:
      'Research assistant on ScribeAR, building accessible real-time captioning and transcription systems.',
    highlights: [
      'Currently developing a general-purpose Redux state migrator to support the addition of new UI components without custom migrations.',
      'Designing and implementing a speaker-aware transcription architecture that integrates with a server-side ML diarization service over WebSockets, enabling real-time speaker-change detection, shared typed event contracts, and live frontend speaker state updates.',
      'Implemented and integrated a new StreamText transcription provider end-to-end across frontend state management, provider runtime logic, configuration UI, persistence migration, and provider registry wiring in a TypeScript monorepo with a React/Vite + Redux web client, Fastify-based backend, shared schema/library packages, and PostgreSQL infrastructure.',
    ],
  },
  {
    title: 'Course Assistant, Introduction to Computer Science II',
    org: 'Siebel School of Computing and Data Science',
    location: 'Urbana, IL',
    start: '2025-08',
    chartLabel: 'CA · CS II',
    summary: 'Course assistant for CS II, supporting students in C++ programming and core data structures.',
    highlights: [
      'Led in-person and online help sessions; debugged C++ code and reinforced core concepts with structured walkthroughs.',
      'Facilitated discussion sections focused on hands-on implementation of course concepts.',
      'Built PrairieLearn practice activities for struggling students and led weekly extra-practice sessions.',
    ],
  },
  {
    title: 'Course Assistant, Introduction to Computer Science I',
    org: 'Siebel School of Computing and Data Science',
    location: 'Urbana, IL',
    start: '2025-01',
    chartLabel: 'CA · CS I',
    summary: 'Course assistant for CS I, helping students build strong foundations in Java and introductory CS.',
    highlights: [
      'Held office hours; guided Java fundamentals, MP debugging, and quiz preparation.',
      'Supported a ~200-student discussion section and mentored ~30 students on a semester-long machine project.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'ASL Transcription Service (CLIP + Django REST)',
    role: 'Course Project',
    start: '2025-08',
    end: '2026-01',
    code: 'https://github.com/juniper-halo/TranSlaDoorss',
    website: 'https://juniper-halo.github.io/ASL-Classification-via-Contrastive-Learning/',
    summary:
      'Real-time ASL alphabet transcription service using webcam capture, a Django REST API, and a CLIP-based classifier.',
    highlights: [
      'Built a real-time ASL alphabet classifier (24 classes; J/Z excluded) with webcam capture → Django REST → top-1 prediction + confidence.',
      'Fine-tuned CLIP ViT-B/32 via prompt-tuned text tokens while optimizing the vision encoder; exported the best checkpoint for deployment.',
      'Implemented end-to-end train/infer/eval with checkpointing, cached inference, CI, and metrics dashboards (confusion, top-k, calibration/ECE); achieved 98.46% best validation accuracy.',
    ],
    stats: [
      { value: '98.46%', label: 'best val. accuracy' },
      { value: '24', label: 'classes' },
      { value: 'B/32', label: 'CLIP ViT' },
    ],
  },
  {
    name: 'Viral Protein Mutation Modeling',
    role: 'Mentored Research Project (Conference/Fair Presentation)',
    start: '2022-01',
    end: '2023-11',
    summary:
      'Mentored research project on viral protein structure/function and mutation pathways, presented at conferences/fairs.',
    highlights: [
      'Developed and presented a mentored project (guided by the high school CS department head) on viral protein structure/function and mutation pathways.',
      'Organized a dataset pipeline from protein databank files and prototyped a CNN-based predictor on an engineered representation of the spike protein; documented methodology, limitations, and findings.',
    ],
  },
];
