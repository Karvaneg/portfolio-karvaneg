import type { Project } from '@/types/project';
import { ArrowUpRightIcon } from './icons';
import styles from './technique.module.css';

const STATUS_CLASS: Record<Project['status'], string> = {
  shipped: styles.shipped,
  'in-progress': styles.inProgress,
  certified: styles.certified,
  growing: styles.growing,
};

interface TicketProps {
  project: Project;
  onOpen: () => void;
}

export function Ticket({ project, onOpen }: TicketProps) {
  return (
    <article className={styles.ticket}>
      <header className={styles.ticketHeader}>
        <span className={styles.ticketId}>{project.ticketId}</span>
        <span className={`${styles.ticketStatus} ${STATUS_CLASS[project.status]}`}>
          <span className={styles.statusDot} /> {project.statusLabel}
        </span>
        <span className={styles.ticketPeriod}>{project.period}</span>
        <div className={styles.ticketLabels}>
          {project.labels.map((label) => (
            <span
              key={label.text}
              className={`${styles.tag} ${styles.mono} ${label.accent ? styles.tagAccent : ''}`}
            >
              {label.text}
            </span>
          ))}
        </div>
      </header>
      <div className={styles.ticketBody}>
        <div>
          <h3>{project.headline}</h3>
          <p className={styles.summary}>{project.summary}</p>
          <div className={styles.ctaRow}>
            <button type="button" className={`${styles.btn} ${styles.btnSecondary}`} onClick={onOpen}>
              <span>Étude de cas</span>
              <ArrowUpRightIcon className={styles.icon} />
            </button>
          </div>
        </div>
        <div className={styles.ticketMeta}>
          <div className={styles.ticketMetaRow}>
            <div className={styles.metaKey}>Stack</div>
            <div className={styles.metaValue}>
              <div className={styles.stack}>
                {project.stack.map((tech) => (
                  <span key={tech} className={`${styles.tag} ${styles.mono}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.ticketMetaRow}>
            <div className={styles.metaKey}>{project.metaLabel ?? 'AI Tooling'}</div>
            <div className={styles.metaValue}>{project.aiTooling}</div>
          </div>
          <div className={`${styles.ticketMetaRow} ${styles.impact}`}>
            <div className={styles.metaKey}>Impact</div>
            <div className={styles.metaValue}>{project.impact}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
