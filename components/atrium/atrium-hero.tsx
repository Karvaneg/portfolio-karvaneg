import { profile } from '@/content/profile';
import styles from './atrium-hero.module.css';
import base from './atrium-base.module.css';

export function AtriumHero() {
  return (
    <div className={styles.hero}>
      <span className={`${styles.eyebrow} ${base.reveal} ${base.d2}`}>
        {profile.name} — {profile.roleShort}
      </span>
      <h1 className={`${styles.heroTitle} ${base.reveal} ${base.d2}`}>
        Deux éditions, un seul <span className={styles.alt}>savoir-faire.</span>
      </h1>
      <p className={`${styles.lede} ${base.reveal} ${base.d3}`}>
        Le même parcours, les mêmes projets — mis en page de deux façons. Choisissez le carnet qui
        vous ressemble&nbsp;; vous pourrez passer de l&rsquo;un à l&rsquo;autre à tout moment.
      </p>
    </div>
  );
}
