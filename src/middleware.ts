import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { ThemeConfig } from '@/utils';

const intlMiddleware = createMiddleware({
  locales: ThemeConfig.availableLanguages,
  defaultLocale: ThemeConfig.defaultLanguage,
  localePrefix: ThemeConfig.prefixLanguage,
});

export default async function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next|monitoring).*)', '/', '/(api|trpc)(.*)'],
};
