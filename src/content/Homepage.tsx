'use client';

import { useTranslations } from 'next-intl';

import { Experience, Section } from '@/components/interface';
import { Base, Column, Text } from '@/components/ui';
import { ThemeConfig } from '@/utils';
import { ExperienceProps } from '@/types';

const Homepage = () => {
  const t = useTranslations('UI');

  const getExperience = () => {
    if (!ThemeConfig.experience) {
      return null;
    }

    const sortExperienceFunction = (experience1: ExperienceProps, experience2: ExperienceProps): number => { 
      return (experience2?.yearStart?.getTime() - experience1?.yearStart?.getTime() ||
              experience1?.yearEnd?.getTime() - experience2?.yearEnd?.getTime()) 
    }
    const sortedExperience = ThemeConfig?.experience?.sort(sortExperienceFunction) || [];
    return (
      <Column gap={16}>
        {sortedExperience.map((experience) => {
          return (
            <Experience
              key={experience.expId}
              expId={experience.expId}
              yearStart={experience.yearStart}
              yearEnd={experience.yearEnd}
              languages={experience.languages}
            />
          );
        })}
      </Column>
    );
  };

  return (
    <Base>
      <Section title={t('Accessibility.About.title')} aria-label={t('Accessibility.About.description')} id="about">
        <Text variant="secondary">
          {t('Paragraphs.About.resume_1')}
        </Text>
        <Text variant="secondary">
          {t('Paragraphs.About.resume_2')}
        </Text>
        <Text variant="secondary">
          {t('Paragraphs.About.resume_3')}
        </Text>
      </Section>
      <Section title={t('Accessibility.Experience.title')} aria-label={t('Accessibility.Experience.description')} id="experience">
        {getExperience()}
      </Section>
    </Base>
  );
};

export { Homepage };
