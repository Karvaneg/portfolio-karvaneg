import { ogImage, ogSize, ogContentType } from '@/app/lib/og';
import { getPlaybookEntry, getPlaybookSlugs } from '@/content/playbook/registry';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Entrée du playbook — Marie Le Carvennec';

export function generateStaticParams() {
  return getPlaybookSlugs().map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getPlaybookEntry(slug);

  return ogImage({
    surface: 'technique',
    eyebrow: entry ? `Playbook · ${entry.num}` : 'Playbook',
    title: entry?.title ?? 'Playbook',
  });
}
