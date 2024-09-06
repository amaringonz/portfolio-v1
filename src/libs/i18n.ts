import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import type { LanguageProps } from '@/types';
import { ThemeConfig } from '@/utils';

export default getRequestConfig(async ({ locale }) => {
  if (!ThemeConfig.availableLanguages.includes(locale as LanguageProps)) {
    notFound();
  }

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
