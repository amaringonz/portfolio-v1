'use client';

import type { IconProps as IconifyIconProps } from '@iconify/react';
import { Icon as IconRef } from '@iconify/react';
import type { VariantProps } from 'class-variance-authority';
import React, { useMemo } from 'react';

import { iconVariants } from '@/components/ui';
import { useMerge } from '@/utils';

export type IconProps = {} & IconifyIconProps & VariantProps<typeof iconVariants>;

export const Icon = ({ variant, icon, className, fontSize = 24, ...props }: IconProps) => {
  const mergedClassName = useMemo(() =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMerge(
      '',
      iconVariants({
        variant,
        className,
      }),
    ), [variant, className]);
  return (
    <IconRef
      icon={icon}
      fontSize={fontSize}
      className={mergedClassName}
      {...props}
    />
  );
};

Icon.displayName = 'Icon';
