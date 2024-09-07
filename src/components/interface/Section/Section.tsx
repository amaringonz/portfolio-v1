'use client';

import React from 'react';

import { Base, Column, Text } from '@/components/ui';

type SectionProps = {
  title: string;
  id: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Section = ({ id, title = 'default', children, ...props }: SectionProps) => {
  return (
    <Base as="section" className="mb-12 md:mb-24 lg:mb-36" id={id} {...props}>
      <Base className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-foreground/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:p-0 lg:opacity-0">
        <Text size="sm" weight="bold" transform="uppercase" className="lg:sr-only">
          {title}
        </Text>
      </Base>
      <Column>
        {children}
      </Column>
    </Base>
  );
};

Section.displayName = 'Section';
