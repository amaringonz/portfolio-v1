'use client';

import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import React, { forwardRef, useMemo } from 'react';

import { baseVariants } from '@/components/ui';
import { useMerge } from '@/utils';

type BaseProps = {
  asChild?: boolean;
  as?: 'div' | 'header' | 'section' | 'main' | 'footer' | 'nav';
} & HTMLAttributes<HTMLDivElement> & VariantProps<typeof baseVariants>;

export const Base = forwardRef<HTMLDivElement, BaseProps>(
  (
    {
      asChild,
      as = 'div',
      className,
      display,
      gap,
      wrap,
      center,
      items,
      justify,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : as;

    const mergedClassName = useMemo(() =>
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useMerge(
        '',
        baseVariants({
          display,
          className,
          wrap,
          gap,
          center,
          items,
          justify,
        }),
      ), [justify, center, className, display, gap, items, wrap]);

    return (
      <Comp
        ref={ref}
        className={mergedClassName}
        {...props}
      />
    );
  },
);

Base.displayName = 'Base';

export const Flex = forwardRef<HTMLDivElement, BaseProps>((props, ref) => (
  <Base ref={ref} display="flex" {...props} />
));

Flex.displayName = 'Flex';

export const Column = forwardRef<HTMLDivElement, BaseProps>((props, ref) => (
  <Base ref={ref} display="flex-col" {...props} />
));

Column.displayName = 'Column';

export const Container = forwardRef<HTMLDivElement, BaseProps>(
  (props, ref) => <Base ref={ref} {...props} />,
);

Container.displayName = 'Container';
