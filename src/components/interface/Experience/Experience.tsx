'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import { useFormatter } from 'use-intl';

import { Badge, Base, Column, Flex, Link, Text } from '@/components/ui';
import type { ExperienceProps } from '@/types';

type ExperienceInterfaceProps = {
} & ExperienceProps & React.HTMLAttributes<HTMLDivElement>;

export const Experience = ({ expId, yearStart, yearEnd, languages, ...props }: ExperienceInterfaceProps) => {
  const format = useFormatter();
  const t = useTranslations('UI');

  const getFormatYears = (yearStart: Date, yearEnd: Date) => {
    const yearsDiff = yearEnd.getFullYear() - yearStart.getFullYear();

    if (yearsDiff === 0) {
      return `${yearStart.getFullYear()}`;
    }

    return `${format.dateTime(new Date(yearStart), { month: 'short', year: 'numeric' })} — ${format.dateTime(new Date(yearEnd), { month: 'short', year: 'numeric' })}`;
  };

  const getLanguages = (languages: string[]) => {
    if (!languages) {
      return;
    }

    return languages.map((language) => {
      return (
        <Badge key={language}>
          {language}
        </Badge>
      );
    });
  };

  return (
    <Base className="flex flex-col gap-8 md:flex-row" {...props}>
      <Base>
        <Text variant="secondary" size="xs" weight="semibold" transform="uppercase" className="text-nowrap leading-6">
          {getFormatYears(yearStart, yearEnd)}
        </Text>
      </Base>
      <Column gap={4}>
        <Text as="h3" weight="medium" asChild>
          <Link href="#">
            {t(`Paragraphs.Experience.${expId}.title`)}
          </Link>
        </Text>
        <Text variant="secondary" size="sm" className="leading-normal tracking-normal">
          {t(`Paragraphs.Experience.${expId}.description`)}
        </Text>
        <Flex wrap>
          {getLanguages(languages)}
        </Flex>
      </Column>
    </Base>
  );
};

Experience.displayName = 'Experience';
