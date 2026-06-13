import Link from 'next/link';
import styles from '@/components/technique/technique.module.css';

interface PlaybookNavProps {
  /** Commande affichée après l'invite (ex. « cat playbook/001.md »). */
  command: string;
}

/** Mini-nav du playbook : marque terminal + renvois vers le carnet technique. */
export function PlaybookNav({ command }: PlaybookNavProps) {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} ${styles.navInner}`}>
        <Link href="/playbook" className={styles.navBrand}>
          <span className={styles.navDot} />
          <span>marie@karvaneg:~$ {command}</span>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/technique#workflow">workflow</Link>
          <Link href="/technique#projects">projects</Link>
          <Link href="/playbook">playbook</Link>
          <Link href="/technique#contact">contact</Link>
        </div>
        <Link href="/" className={styles.navCta}>
          <span className={styles.accent}>←</span> retour portfolio
        </Link>
      </div>
    </nav>
  );
}
