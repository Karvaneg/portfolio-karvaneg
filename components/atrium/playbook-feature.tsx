import Link from 'next/link';
import { playbookEntries } from '@/content/playbook-index';
import styles from './atrium.module.css';

/** Bande Playbook : teaser cliquable (→ /playbook) + index des entrées. */
export function PlaybookFeature() {
  return (
    <section className={`${styles.playbook} ${styles.reveal} ${styles.d5}`} aria-labelledby="pb-title">
      <Link href="/playbook" className={styles.pbLink} aria-label="Lire le playbook">
        <div>
          <span className={styles.pbBadge}>
            <span className={styles.pbBadgeDot} />
            Playbook · en cours d&rsquo;écriture
          </span>
          <h2 className={styles.pbTitle} id="pb-title">
            Le setup ultime de Claude Code sur Windows —{' '}
            <span className={styles.em}>100% prompt-driven.</span>
          </h2>
          <p className={styles.pbLede}>
            Une série d&rsquo;entrées sur ma méthode d&rsquo;ingénierie augmentée par l&rsquo;IA&nbsp;:
            orchestration d&rsquo;agents, skills sur-mesure, TDD piloté par l&rsquo;IA. Le terrain où
            je teste — et documente — ma façon de travailler. Nouvelle entrée régulièrement.
          </p>
          <span className={styles.pbCta}>
            <span className={styles.pbCtaSym}>~$</span> cat playbook/001.md{' '}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
      <div className={styles.pbIndex}>
        <div className={styles.pbIndexLabel}>~/playbook · index</div>
        {playbookEntries.map((entry) => (
          <div
            key={entry.num}
            className={`${styles.pbEntry} ${entry.status === 'live' ? styles.live : styles.soon}`}
          >
            <span className={styles.pbEntryN}>{entry.num}</span>
            <span className={styles.pbEntryT}>{entry.title}</span>
            <span className={styles.pbEntryS}>{entry.status === 'live' ? '● live' : 'à venir'}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
