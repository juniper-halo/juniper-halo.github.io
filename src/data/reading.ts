// "In my context window": what I'm currently reading. Newest first.
// `date` ('YYYY-MM-DD') is when it was added; it isn't shown on the page.

export interface ReadingItem {
  title: string;
  url: string;
  authors?: string;
  date?: string;
}

export const reading: ReadingItem[] = [
  {
    title: 'MoE++: Accelerating Mixture-of-Experts Methods with Zero-Computation Experts',
    url: 'https://arxiv.org/pdf/2410.07348',
    authors: 'Peng Jin, Bo Zhu, Li Yuan, Shuicheng Yan',
    date: '2026-02-02',
  },
  {
    title: 'LongCat-Flash Technical Report',
    url: 'https://arxiv.org/abs/2509.01322',
    authors: 'Meituan LongCat Team et al.',
    date: '2026-01-28',
  },
];
