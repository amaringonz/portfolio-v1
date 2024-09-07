'use client';

import type { VariantProps } from 'class-variance-authority';
import React, { useMemo } from 'react';

import { badgeVariants } from '@/components/ui/Badge/badgeVariants';
import { useMerge } from '@/utils';

export type BadgeProps = {} & React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>;

export const Badge = ({ variant, className, ...props }: BadgeProps) => {
  const mergedClassName = useMemo(() =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMerge(
      '',
      badgeVariants({
        variant,
        className,
      }),
    ), [variant, className]);
  return (
    <div
      className={mergedClassName}
      {...props}
    />
  );
};

Badge.displayName = 'Icon';
