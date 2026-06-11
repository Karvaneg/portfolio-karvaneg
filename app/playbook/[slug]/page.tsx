import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { refonteFontVariables } from '@/app/lib/refonte-fonts';
import { TechniqueShell } from '@/components/technique/technique-shell';
import { TechniqueFooter } from '@/components/technique/technique-footer';
import { PlaybookNav } from '@/components/playbook/playbook-nav';
import { PlaybookArticleFooter } from '@/components/playbook/playbook-article-footer';
import {
  getAdjacentEntries,
  getPlaybookEntry,
  getPlaybookSlugs,
  loadPlaybookEntry,
} from '@/content/playbook/registry';
import styles from '@/components/playbook/playbook.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPlaybookSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getPlaybookEntry(slug);
  if (!entry) return {};

  const title = `${entry.title} — Playbook · ${entry.num} · Marie Le Carvennec`;
  return {
    title,
    description: entry.summary,
    openGraph: { title, description: entry.summary },
  };
}

export default async function PlaybookEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getPlaybookEntry(slug);
  const Entry = await loadPlaybookEntry(slug);
  if (!entry || !Entry) notFound();

  const { prev, next } = getAdjacentEntries(slug);

  return (
    <TechniqueShell fontClass={refonteFontVariables}>
      <PlaybookNav command={`cat playbook/${entry.num}.md`} />
      <main>
        <article className={styles.article}>
          <Entry entry={entry} />
          <PlaybookArticleFooter prev={prev} next={next} />
        </article>
      </main>
      <TechniqueFooter />
    </TechniqueShell>
  );
}
