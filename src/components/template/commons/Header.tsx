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
    <Column as="header" className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24" gap={4}>
      <Column>
        <Text as="h1" size="4xl" weight="bold" overflow="truncate">
          {ThemeConfig.shortAuthor}
        </Text>
        <Text as="h2" size="lg" weight="medium">
          {t('Paragraphs.Author.title')}
        </Text>
        <Text variant="secondary" className="max-w-md">
          {t('Paragraphs.Author.resume')}
        </Text>
        <Base className="mt-12 hidden lg:block">
          <Navigator />
        </Base>
      </Column>
      {getNetwork}
    </Column>
  );
};

export { Header };
