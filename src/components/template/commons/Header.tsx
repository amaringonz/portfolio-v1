import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import { IconExternal } from '@/components/interface';
import { Column, Flex, Text } from '@/components/ui';
import { ThemeConfig } from '@/utils';

const Header = () => {
  const t = useTranslations('UI');

  const getNetwork = useMemo(() => {
    if (!ThemeConfig.network) {
      return;
    }

    return (
      <Flex>
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
  }, []);

  return (
    <Column as="header" gap={4}>
      <Column>
        <Text as="h1" size="4xl" weight="bold" overflow="truncate">
          {ThemeConfig.shortAuthor}
        </Text>
        <Text as="h2" size="lg" weight="medium">
          {t('Paragraphs.Author.title')}
        </Text>
        <Text variant="secondary">
          {t('Paragraphs.Author.resume')}
        </Text>
      </Column>
      {getNetwork}
    </Column>
  );
};

export { Header };
