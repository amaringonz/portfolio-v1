import type { MetadataRoute } from 'next';

import { getCurrentUrl } from '@/utils';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${getCurrentUrl()}/sitemap.xml`,
  };
};

export default robots;
