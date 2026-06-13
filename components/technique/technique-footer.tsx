import Link from 'next/link';
import { profile } from '@/content/profile';
import styles from './technique.module.css';
import ft from './footer.module.css';

export function TechniqueFooter() {
  return (
    <footer className={`${ft.footer} ${styles.container}`}>
      <div className={ft.footerLeft}>
        <span className={styles.accent}>●</span>
        <span>2026 — {profile.name} · Fullstack &amp; AI-Augmented Engineer</span>
      </div>
      <div className={ft.footerRight}>
        <Link href="/esquisses">↩ version carnet d'esquisses</Link>
        <span>{profile.geo}</span>
      </div>
    </footer>
  );
}
