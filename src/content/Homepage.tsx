'use client';

import { useTranslations } from 'next-intl';

import { Experience, Section } from '@/components/interface';
import { Base, Column, Text } from '@/components/ui';
import { ThemeConfig } from '@/utils';

const Homepage = () => {
  const t = useTranslations('UI');

  const getExperience = () => {
    if (!ThemeConfig.experience) {
      return null;
    }

    return (
      <Column gap={16}>
        {ThemeConfig.experience.map((experience) => {
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
