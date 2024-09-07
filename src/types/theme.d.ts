import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

export type LanguageProps = 'es' | 'en';

export type ExperienceProps = {
  expId: number;
  yearStart: Date;
  yearEnd: Date;
  href?: string;
  languages: Array<string>;
};

export type ThemeConfigProps = {
  author: string;
  shortAuthor: string;
  //
  network: Array<{
    type: 'GitHub' | 'LinkedIn' | 'Instagram' | 'Email';
    icon: string;
    url: string;
  }> | null;
  //
  experience: ExperienceProps[];
  availableLanguages: LanguageProps[];
  defaultLanguage: LanguageProps;
  prefixLanguage: LocalePrefix; // 'as-needed' | 'always' | 'never';
};
