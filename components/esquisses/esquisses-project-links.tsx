import type { Project } from '@/types/project';
import { projectLinks } from '@/lib/project-links';
import styles from './esquisses-project-detail.module.css';

/** Liens du projet (sites, vidéo de démo), sous le sous-titre du détail (esquisses). */
export function EsquissesProjectLinks({ project }: { project: Project }) {
  const links = projectLinks(project);
  if (links.length === 0) return null;
  return (
    <div className={styles.detailLinks}>
      {links.map((link) => (
        <a
          key={link.url}
          className={styles.detailLink}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.kind === 'video' ? '▶' : '↗'} {link.label}
        </a>
      ))}
    </div>
  );
}
