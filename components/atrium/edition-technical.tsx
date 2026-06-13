import Link from 'next/link';
import styles from './atrium-editions.module.css';
import base from './atrium-base.module.css';

/** Carte « Édition 02 — Carnet technique » → /technique. */
export function EditionTechnical() {
  return (
    <Link
      href="/technique"
      className={`${styles.edition} ${styles.edTech} ${base.reveal} ${base.d4}`}
      aria-label="Entrer dans le carnet technique"
    >
      <span className={styles.lights} aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <div className={styles.edTag}>
        <span className={styles.edNumber}>Édition 02</span>
        <span className={styles.edKind}>sobre · terminal</span>
      </div>
      <div className={styles.edTitle}>
        <div className={styles.edH}>Carnet technique</div>
        <p className={styles.edDesc}>
          Structuré, façon terminal. Pour les profils techniques et les recruteurs pressés qui
          veulent aller droit au stack.
        </p>
        <div className={styles.edPrompt}>
          <span className={styles.sym}>~$</span> open --edition=technique
          <span className={styles.cursor} />
        </div>
        <span className={styles.edEnter}>
          Lancer <span className={styles.arrow}>→</span>
        </span>
      </div>
    </Link>
  );
}
