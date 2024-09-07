'use client';

import { useTranslations } from 'next-intl';

import { Link, Text } from '@/components/ui';

const Footer = () => {
  const t = useTranslations('UI.Paragraphs.Footer');
  return (
    <footer className="max-w-md pb-16 sm:pb-0">
      <Text as="span" variant="secondary" size="sm" className="tracking-normal">
        {t('paragraph_1')}
        <Text as="span" size="sm" asChild className="tracking-normal">
          <Link href="https://www.jetbrains.com/webstorm" external>
            {t('paragraph_2')}
          </Link>
        </Text>
        {t('paragraph_3')}
        <Text as="span" size="sm" asChild className="tracking-normal">
          <Link href="https://vercel.com" external>
            {t('paragraph_4')}
          </Link>
        </Text>
        {t('paragraph_5')}
        <Text as="span" size="sm" asChild className="tracking-normal">
          <Link href="https://nextjs.org" external>
            {t('paragraph_6')}
          </Link>
        </Text>
        {t('paragraph_7')}
        <Text as="span" size="sm" asChild className="tracking-normal">
          <Link href="https://iconify.design" external>
            {t('paragraph_8')}
          </Link>
        </Text>
        {t('paragraph_9')}
        <Text as="span" size="sm" asChild className="tracking-normal">
          <Link href="https://tailwindcss.com" external>
            {t('paragraph_10')}
          </Link>
        </Text>
        {t('paragraph_11')}
        <Text as="span" size="sm" asChild className="tracking-normal">
          <Link href="https://fonts.google.com/specimen/Inter" external>
            {t('paragraph_12')}
          </Link>
        </Text>
        {t('paragraph_13')}
      </Text>
    </footer>
  );
};

export { Footer };
