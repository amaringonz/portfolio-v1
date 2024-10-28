'use client';

import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import React, { forwardRef, useMemo } from 'react';

import { textVariants } from '@/components/ui/Text/textVariants';
import { useMerge as twMerge } from '@/utils';

type TextProps = {
  asChild?: boolean;
  as?: 'p' | 'span' | 'strong' | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & HTMLAttributes<HTMLDivElement> & VariantProps<typeof textVariants>;

export const Text = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      asChild,
      as = 'p',
      className,
      size,
      overflow,
      weight,
      align,
      variant,
      transform,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : as;

    const mergedClassName = useMemo(() =>
      twMerge(
        '',
        textVariants({
          size,
          overflow,
          weight,
          align,
          variant,
          transform,
          className,
        }),
      ), [size, overflow, weight, align, variant, transform, className]);

    return (
      <Comp
        ref={ref}
        className={mergedClassName}
        {...props}
      />
    );
  },
);

Text.displayName = 'Text';
