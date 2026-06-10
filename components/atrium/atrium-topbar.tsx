import Link from 'next/link';
import { profile } from '@/content/profile';
import styles from './atrium.module.css';

export function AtriumTopbar() {
  return (
    <div className={`${styles.topbar} ${styles.reveal} ${styles.d1}`}>
      <Link href="/" className={styles.wordmark} aria-label="Karvaneg, accueil">
        {profile.brand}
        <span className={styles.star}>*</span>
      </Link>
      <div className={styles.topbarRight}>
        <span className={styles.status}>
          <span className={styles.statusDot} />
          {profile.availability.atrium}
        </span>
        <span className={styles.topbarIssue}>{profile.editionLabel}</span>
      </div>
    </div>
  );
}
