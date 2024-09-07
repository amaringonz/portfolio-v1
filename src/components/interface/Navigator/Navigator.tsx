'use client';

import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Column, DivisorLink } from '@/components/ui';

const Navigator = () => {
  const t = useTranslations('UI');

  const [activeSection, setActiveSection] = useState<string>('');
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const sections = useMemo(() => ['about', 'experience'], []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== activeSection) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }, // Adjust threshold as needed
    );

    // Copy the sectionsRef.current into a local variable
    const currentSections = sectionsRef.current;

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentSections[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = currentSections[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections, activeSection]);

  return (
    <Column as="nav" gap={4}>
      <DivisorLink active={activeSection === 'about'} onClick={() => scrollToSection('about')}>
        {t('Accessibility.About.title')}
      </DivisorLink>
      <DivisorLink active={activeSection === 'experience'} onClick={() => scrollToSection('experience')}>
        {t('Accessibility.Experience.title')}
      </DivisorLink>
    </Column>
  );
};

export { Navigator };
