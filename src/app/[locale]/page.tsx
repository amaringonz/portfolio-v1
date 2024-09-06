import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { LayoutProps, MetaDataProps } from '@/types';
import { ThemeConfig } from '@/utils';

export const generateMetadata = async ({ params: { locale } }: MetaDataProps) => {
  const t = await getTranslations({
    locale,
    namespace: 'Meta.Home',
  });

  return {
    title: t('title', { author: ThemeConfig.author }),
    description: t('description', { author: ThemeConfig.author }),
  };
};

const Page = ({ params }: LayoutProps) => {
  const { locale } = params;
  unstable_setRequestLocale(locale);

  return (
    <>
      Hello World
    </>
  );
};

export default Page;
