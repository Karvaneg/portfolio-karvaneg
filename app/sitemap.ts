import type { MetadataRoute } from 'next';
import { playbookEntries } from '@/content/playbook-index';
import { siteUrl } from '@/app/lib/site-url';

/** Les 4 surfaces + chaque entrée de playbook publiée. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const surfaces: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified, priority: 1 },
    { url: `${siteUrl}/esquisses`, lastModified, priority: 0.8 },
    { url: `${siteUrl}/technique`, lastModified, priority: 0.8 },
    { url: `${siteUrl}/playbook`, lastModified, priority: 0.6 },
  ];

  const playbook: MetadataRoute.Sitemap = playbookEntries
    .filter((entry) => entry.status === 'live')
    .map((entry) => ({
      url: `${siteUrl}/playbook/${entry.slug}`,
      lastModified,
      priority: 0.5,
    }));

  return [...surfaces, ...playbook];
}
