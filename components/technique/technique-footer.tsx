import Link from 'next/link';
import { profile } from '@/content/profile';
import styles from './technique.module.css';

export function TechniqueFooter() {
  return (
    <footer className={`${styles.footer} ${styles.container}`}>
      <div className={styles.footerLeft}>
        <span className={styles.accent}>●</span>
        <span>2026 — {profile.name} · Fullstack &amp; AI-Augmented Engineer</span>
      </div>
      <div className={styles.footerRight}>
        <Link href="/carnet">↩ version carnet d'esquisses</Link>
        <span>{profile.geo}</span>
      </div>
    </footer>
  );
}
