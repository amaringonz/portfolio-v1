import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

export type LanguageProps = 'es' | 'en';

type ThemeConfigProps = {
  author: string;
  //
  availableLanguages: LanguageProps[];
  defaultLanguage: LanguageProps;
  prefixLanguage: LocalePrefix; // 'as-needed' | 'always' | 'never';
};
