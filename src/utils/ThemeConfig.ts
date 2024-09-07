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
  experience: [{
    expId: 1,
    yearStart: new Date(2017, 0),
    yearEnd: new Date(2019, 3),
    languages: [
      'Liquid',
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery',
      'API de Shopify',
      'Meta Pixel',
      'Google Analytics',
    ],
  }, {
    expId: 2,
    yearStart: new Date(2019, 3),
    yearEnd: new Date(2021, 0),
    languages: [
      'Next.js',
      'Node.js',
      'MySQL',
      'WebSockets',
      'Redis',
      'Cloudflare',
      'AWS WAF',
      'JWT',
      'HTML',
      'CSS',
      'JavaScript',
    ],
  }, {
    expId: 3,
    yearStart: new Date(2021, 1),
    yearEnd: new Date(2023, 1),
    languages: [
      'PHP',
      'HTML5',
      'CSS3',
      'JavaScript',
      'WordPress Plugins',
      'Stripe API',
      'Cron jobs',
    ],
  }],
  availableLanguages: ['es', 'en'],
  defaultLanguage: 'es',
  prefixLanguage: 'as-needed',
};
