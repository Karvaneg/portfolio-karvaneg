import type { Project, ProjectStatus } from '@/types/project';
import { ArrowUpRightIcon } from './icons';
import styles from './technique.module.css';
import cs from './case-study.module.css';

const STATUS_CLASS: Record<ProjectStatus, string> = {
  shipped: styles.shipped,
  'in-progress': styles.inProgress,
  certified: styles.certified,
  growing: styles.growing,
};

interface CaseStudyHeadProps {
  project: Project;
  tagline: string;
  onClose: () => void;
}

/** En-tête de la modale étude de cas : méta (ticket/statut/période), titre, lien site. */
export function CaseStudyHead({ project, tagline, onClose }: CaseStudyHeadProps) {
  return (
    <header className={cs.caseHead}>
      <div>
        <div className={cs.caseHeadMeta}>
          <span className={styles.ticketId}>{project.ticketId}</span>
          <span className={`${styles.ticketStatus} ${STATUS_CLASS[project.status]}`}>
            <span className={styles.statusDot} /> {project.statusLabel}
          </span>
          <span className={styles.ticketPeriod}>{project.period}</span>
        </div>
        <h3 className={cs.caseTitle}>{project.headline}</h3>
        <p className={cs.caseTagline}>{tagline}</p>
        {project.website && (
          <a
            className={`${cs.caseSiteLink} ${styles.mono}`}
            href={project.website}
            target="_blank"
            rel="noreferrer"
          >
            {project.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            <ArrowUpRightIcon />
          </a>
        )}
      </div>
      <button type="button" className={cs.caseClose} onClick={onClose} aria-label="Fermer">
        ×
      </button>
    </header>
  );
}
