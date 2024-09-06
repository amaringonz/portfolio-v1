import type { MetadataRoute } from 'next';

import { getCurrentUrl } from '@/utils';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: `${getCurrentUrl()}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];
};

export default sitemap;
