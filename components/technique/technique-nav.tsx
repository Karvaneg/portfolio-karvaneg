'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './technique.module.css';

/** Icône burger « terminal » : trois traits nets, croix une fois ouverte. */
function NavToggleIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.navToggleIcon}>
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </>
      )}
    </svg>
  );
}

export function TechniqueNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 760) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
      <div className={`${styles.container} ${styles.navInner}`}>
        <a href="#top" className={styles.navBrand} onClick={close}>
          <span className={styles.navDot} />
          <span>marie@karvaneg:~$</span>
        </a>
        <div className={styles.navLinks} id="technique-menu">
          <a href="#workflow" onClick={close}>
            workflow
          </a>
          <a href="#projects" onClick={close}>
            projects
          </a>
          <Link href="/playbook" onClick={close}>
            playbook
          </Link>
          <a href="#opensource" onClick={close}>
            open source
          </a>
          <a href="#contact" onClick={close}>
            contact
          </a>
          <a href="#contact" className={styles.navCta} onClick={close}>
            <span className={styles.accent}>→</span> get in touch
          </a>
        </div>
        <button
          type="button"
          className={styles.navToggle}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="technique-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <NavToggleIcon open={open} />
        </button>
      </div>
    </nav>
  );
}
