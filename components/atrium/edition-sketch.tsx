import Link from 'next/link';
import styles from './atrium.module.css';

/** Carte « Édition 01 — Carnet d'esquisses » → /carnet. */
export function EditionSketch() {
  return (
    <Link
      href="/carnet"
      className={`${styles.edition} ${styles.edSketch} ${styles.reveal} ${styles.d3}`}
      aria-label="Entrer dans le carnet d'esquisses"
    >
      <span className={styles.tape} aria-hidden="true" />
      <span className={styles.doodle} aria-hidden="true">
        *
      </span>
      <div className={styles.edTag}>
        <span className={styles.edNumber}>Édition 01</span>
        <span className={styles.edKind}>chaleureux · tactile</span>
      </div>
      <div className={styles.edTitle}>
        <div className={styles.edH}>
          Carnet
          <br />
          d&rsquo;esquisses
        </div>
        <p className={styles.edDesc}>
          Manuscrit, façon atelier. Pour qui aime voir la main derrière le code et lire les projets
          comme des pages de carnet.
        </p>
        <span className={styles.edEnter}>
          Ouvrir le carnet <span className={styles.arrow}>→</span>
        </span>
      </div>
    </Link>
  );
}
