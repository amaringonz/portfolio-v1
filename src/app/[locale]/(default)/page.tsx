import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Homepage } from '@/pages';
import type { MetaDataProps } from '@/types';
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

const Page = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return <Homepage />;
};

export default Page;
