import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import { IconExternal, Navigator } from '@/components/interface';
import { Base, Column, Flex, Text } from '@/components/ui';
import { ThemeConfig } from '@/utils';

const Header = () => {
  const t = useTranslations('UI');

  const getNetwork = useMemo(() => {
    if (!ThemeConfig.network) {
      return;
    }

    return (
      <Flex items="center">
        {ThemeConfig.network.map(social => (
          <IconExternal
            key={social.icon}
            icon={social.icon}
            href={social.url}
            variant="secondary"
            title={t(`Accessibility.Network.${social.type}.title`)}
            aria-label={t(`Accessibility.Network.${social.type}.description`)}
          />
        ))}
      </Flex>
    );
  }, [t]);

  return (
    <Column as="header" className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24" gap={12}>
      <Column gap={12}>
        <Column>
          <Text as="h1" weight="bold" overflow="truncate" letterSpacing="tight" className="text-5xl md:text-4xl">
            {ThemeConfig.shortAuthor}
          </Text>
          <Text as="h2" weight="medium" letterSpacing="tight" className="text-xl md:text-lg">
            {t('Paragraphs.Author.title')}
          </Text>
          <Text variant="secondary" letterSpacing="normal" className="max-w-md">
            {t('Paragraphs.Author.resume')}
          </Text>
        </Column>
        <Base className="hidden lg:block">
          <Navigator />
        </Base>
      </Column>
      {getNetwork}
    </Column>
  );
};

export { Header };
