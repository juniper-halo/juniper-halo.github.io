// Site-wide settings and copy that don't belong in the CV.
// Experience and projects come from cv/cv.yml (see src/data/cv.ts) so the
// website and the RenderCV PDF never drift apart.

export const site = {
  name: 'Juno Tripathi',
  handle: 'juno.t',
  location: 'CS @ UIUC · Urbana–Champaign, IL',
  description:
    'Juno Tripathi: CS undergrad at UIUC working on foundation models for vision and multimodal learning.',

  // The hero line "generates itself" word by word, like a masked diffusion LM.
  tagline:
    'I build foundation models for vision and multimodal learning that are data-efficient, robust out of distribution, and easy to adapt.',
  // Words drawn in the accent colour once unmasked.
  taglineEmphasis: ['foundation', 'models'],
  intro:
    'Second-year Computer Science undergrad at UIUC, looking for research opportunities and mentorship.',
  offHours: 'Off-hours: self-taught piano, light novels and manga (Your Lie in April is a longtime favourite).',

  // Profile photo lives in src/assets/img/profile_pic.png (optimised at build time).
  cvPdf: 'assets/pdf/resume_juno_latest.pdf',

  links: {
    github: 'https://github.com/juniper-halo',
    linkedin: 'https://www.linkedin.com/in/junotripathi',
    email: 'mailto:madhavt2@illinois.edu',
  },
} as const;

// Optional headline numbers shown on a project card, keyed by the project's
// `name` in cv/cv.yml. Projects without an entry simply show no stat tiles.
export const projectStats: Record<string, { value: string; label: string }[]> = {
  'ASL Transcription Service (CLIP + Django REST)': [
    { value: '98.46%', label: 'best val. accuracy' },
    { value: '24', label: 'classes' },
    { value: 'B/32', label: 'CLIP ViT' },
  ],
};
