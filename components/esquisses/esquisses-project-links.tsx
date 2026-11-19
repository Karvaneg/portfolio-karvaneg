import type { Project } from '@/types/project';
import { displayUrl } from '@/lib/display-url';
import styles from './esquisses-project-detail.module.css';

/** Liens vers les sites du projet, sous le sous-titre du détail (esquisses). */
export function EsquissesProjectLinks({ websites }: Pick<Project, 'websites'>) {
  if (!websites?.length) return null;
  return (
    <div className={styles.detailLinks}>
      {websites.map((url) => (
        <a key={url} className={styles.detailLink} href={url} target="_blank" rel="noreferrer">
          ↗ {displayUrl(url)}
        </a>
      ))}
    </div>
  );
}
