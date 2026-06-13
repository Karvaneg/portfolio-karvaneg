import Link from 'next/link';
import styles from './technique.module.css';

export function TechniqueNav() {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.container} ${styles.navInner}`}>
        <a href="#top" className={styles.navBrand}>
          <span className={styles.navDot} />
          <span>marie@karvaneg:~$</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#workflow">workflow</a>
          <a href="#projects">projects</a>
          <Link href="/playbook">playbook</Link>
          <a href="#opensource">open source</a>
          <a href="#contact">contact</a>
        </div>
        <a href="#contact" className={styles.navCta}>
          <span className={styles.accent}>→</span> get in touch
        </a>
      </div>
    </nav>
  );
}
