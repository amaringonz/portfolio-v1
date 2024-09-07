import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import type { LayoutProps } from '@/types';
import { ThemeConfig } from '@/utils';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

const font = Inter({ subsets: ['latin'], variable: '--theme-font' });

export function generateStaticParams() {
  return ThemeConfig.availableLanguages.map(locale => ({ locale }));
}

const RootLayout = ({ children, params }: LayoutProps) => {
  unstable_setRequestLocale(params.locale);

  const { locale } = params;
  const messages = useMessages();

  return (
    <html lang={locale} className={font.variable}>
      <body>
        <NextIntlClientProvider
          locale={params.locale}
          messages={messages}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
