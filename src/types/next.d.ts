import type { ReactNode } from 'react';

import type { LanguageProps } from '@/types';

export type ChildrenProps = {
  children: ReactNode;
};

export type ParamsProps = {
  locale: LanguageProps;
};

export type MetaDataProps = {
  params: ParamsProps;
};

export type LayoutProps = {
  params: ParamsProps;
  children: ReactNode;
};
