import type { MetadataRoute } from 'next';
import { playbookEntries } from '@/content/playbook-index';

// Slash final retiré pour éviter les `//` en concaténant les chemins.
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_LOCAL_SITE_URL!).replace(
  /\/+$/,
  '',
);

/** Les 4 surfaces + chaque entrée de playbook publiée. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const surfaces: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, priority: 1 },
    { url: `${SITE_URL}/esquisses`, lastModified, priority: 0.8 },
    { url: `${SITE_URL}/technique`, lastModified, priority: 0.8 },
    { url: `${SITE_URL}/playbook`, lastModified, priority: 0.6 },
  ];

  const playbook: MetadataRoute.Sitemap = playbookEntries
    .filter((entry) => entry.status === 'live')
    .map((entry) => ({
      url: `${SITE_URL}/playbook/${entry.slug}`,
      lastModified,
      priority: 0.5,
    }));

  return [...surfaces, ...playbook];
}
