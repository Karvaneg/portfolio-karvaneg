import { profile } from '@/content/profile';
import styles from './atrium.module.css';

export function AtriumHero() {
  return (
    <div className={styles.hero}>
      <span className={`${styles.eyebrow} ${styles.reveal} ${styles.d2}`}>
        {profile.name} — {profile.roleShort}
      </span>
      <h1 className={`${styles.heroTitle} ${styles.reveal} ${styles.d2}`}>
        Deux éditions, un seul <span className={styles.alt}>savoir-faire.</span>
      </h1>
      <p className={`${styles.lede} ${styles.reveal} ${styles.d3}`}>
        Le même parcours, les mêmes projets — mis en page de deux façons. Choisissez le carnet qui
        vous ressemble&nbsp;; vous pourrez passer de l&rsquo;un à l&rsquo;autre à tout moment.
      </p>
    </div>
  );
}
