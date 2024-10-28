'use client';

import React, { useMemo } from 'react';

import { useMerge } from '@/utils';

export type DivisorLinkProps = {
  active?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const DivisorLink = ({ active = false, children, ...props }: DivisorLinkProps) => {
  const mergedHrClassName = useMemo(() =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMerge(
      'mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-foreground motion-reduce:transition-none',
      active ? 'bg-foreground w-16' : 'bg-foreground-secondary w-6',
    ), [active]);

  const mergedTextClassName = useMemo(() =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMerge(
      'text-xs font-bold uppercase tracking-widest group-hover:text-foreground',
      active ? 'text-foreground' : 'text-foreground-secondary',
    ), [active]);

  return (
    <div className="group flex w-fit cursor-pointer items-center gap-2 uppercase" {...props}>
      <span className={mergedHrClassName} />
      <span className={mergedTextClassName}>
        {children}
      </span>
    </div>
  );
};

DivisorLink.displayName = 'DivisorLink';
