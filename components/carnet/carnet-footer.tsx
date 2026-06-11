import Link from 'next/link';
import { profile } from '@/content/profile';
import styles from './carnet.module.css';

/** Pied de page du carnet — renvoi croisé vers le carnet technique. */
export function CarnetFooter() {
  return (
    <footer className={styles.footer}>
      <span>
        2026 — {profile.name} · {profile.roleShort}
      </span>
      <span>Développé avec Next.js &amp; Tailwind CSS · Déployé sur Vercel</span>
      <span>
        <Link href="/technique" className={styles.footerAltLink}>
          ↪ version carnet technique
        </Link>
      </span>
      <span>{profile.geo}</span>
    </footer>
  );
}
