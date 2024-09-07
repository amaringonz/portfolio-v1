'use client';

import React from 'react';

import type { IconProps, LinkProps } from '@/components/ui';
import { Icon, Link } from '@/components/ui';

type IconExternalProps = {} & LinkProps & IconProps;

export const IconExternal = ({ href, title, icon, variant, ...props }: IconExternalProps) => {
  return (
    <Link href={href} title={title} external {...props}>
      <span className="sr-only">{title}</span>
      <Icon icon={icon} variant={variant} height="1.5rem" width="1.5rem" />
    </Link>
  );
};

IconExternal.displayName = 'IconExternal';
