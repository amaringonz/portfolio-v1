import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

export type LanguageProps = 'es' | 'en';

export type NetworkProps = {
  type: 'GitHub' | 'LinkedIn' | 'Instagram' | 'Email';
  icon: string;
  url: string;
} | null;

export type ExperienceProps = {
  expId: number;
  yearStart: Date;
  yearEnd: Date;
  previewUrl?: string;
  languages: Array<string>;
} | null;

export type ProjectProps = {
  projId: number;
  previewUrl: string;
  languages?: Array<string>;
} | null;

export type ThemeConfigProps = {
  author: string;
  shortAuthor: string;
  network: NetworkProps[];
  experience: ExperienceProps[];
  projects: ProjectProps[];
  availableLanguages: LanguageProps[];
  defaultLanguage: LanguageProps;
  prefixLanguage: LocalePrefix;
};
