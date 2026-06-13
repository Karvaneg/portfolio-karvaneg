import type { ReactNode } from 'react';
import type { PlaybookEntry } from '@/types/playbook';
import ui from '@/components/shared/ui.module.css';
import styles from './playbook-article-header.module.css';

interface ArticleHeaderProps {
  /** Source unique des métadonnées (num, titre, catégorie, temps, tags). */
  entry: PlaybookEntry;
  /** Sous-chaîne de `entry.title` mise en accent (émeraude). */
  accent: string;
  /** Sous-titre mono affiché sous le H1. */
  subtitle: ReactNode;
  lede: ReactNode;
  ledeEmphasis?: ReactNode;
}

/** Découpe le titre autour de la sous-chaîne d'accent (le H1 reste = entry.title). */
function renderTitle(title: string, accent: string): ReactNode {
  const at = title.indexOf(accent);
  if (at === -1) return title;
  return (
    <>
      {title.slice(0, at)}
      <em>{accent}</em>
      {title.slice(at + accent.length)}
    </>
  );
}

/** En-tête d'une entrée : méta, titre, lede, tags. Le 1er tag est mis en accent. */
export function ArticleHeader({ entry, accent, subtitle, lede, ledeEmphasis }: ArticleHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.meta}>
        <span className={styles.metaTag}>Playbook · {entry.num}</span>
        <span className={styles.metaSep}>·</span>
        <span>{entry.category}</span>
        <span className={styles.metaSep}>·</span>
        <span>{entry.readingTime}</span>
      </div>
      <h1 className={styles.title}>
        {renderTitle(entry.title, accent)}
        <span className={styles.titleSub}>{subtitle}</span>
      </h1>
      <p className={styles.lede}>{lede}</p>
      {ledeEmphasis ? <p className={`${styles.lede} ${styles.ledeEmphasis}`}>{ledeEmphasis}</p> : null}
      <div className={styles.tags}>
        {entry.tags.map((tag, i) => (
          <span key={tag} className={`${ui.tag} ${i === 0 ? ui.tagAccent : ''}`}>
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
