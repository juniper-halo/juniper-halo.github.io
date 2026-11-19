// Currently-reading list. Edit src/data/reading.yml, not this file.
import { parse } from 'yaml';
import raw from './reading.yml?raw';

export interface ReadingItem {
  title: string;
  url: string;
  authors?: string;
  date?: string;
}

export const reading: ReadingItem[] = (parse(raw) as ReadingItem[] | null) ?? [];
