import type { ThemeConfigProps } from '@/types';

export const ThemeConfig: ThemeConfigProps = {
  author: 'Alejandro Marín González',
  shortAuthor: 'Alejandro Marín',
  //
  network: [{
    type: 'GitHub',
    icon: 'ri:github-fill',
    url: 'https://github.com/amaringonz',
  }, {
    type: 'LinkedIn',
    icon: 'ri:linkedin-box-fill',
    url: 'https://www.linkedin.com/in/amaringonz',
  }, {
    type: 'Instagram',
    icon: 'ri:instagram-line',
    url: 'https://www.instagram.com/amaringonz',
  }, {
    type: 'Email',
    icon: 'ri:mail-line',
    url: 'mailto:amaringonz.dev@gmail.com',
  }],
  //
  availableLanguages: ['es', 'en'],
  defaultLanguage: 'es',
  prefixLanguage: 'as-needed',
};
