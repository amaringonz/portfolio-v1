'use client';

import NextLink from 'next/link';
import React from 'react';

import { useMerge } from '@/utils';

export type LinkProps = {
  href: string;
  className?: string;
  external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ href, className, external = false, children, ...props }: LinkProps) => {
  const mergedClassName = useMerge('', className);

  if (external) {
    return (
      <a
        href={href}
        className={mergedClassName}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={mergedClassName} {...props}>
      {children}
    </NextLink>
  );
};

Link.displayName = 'Link';
