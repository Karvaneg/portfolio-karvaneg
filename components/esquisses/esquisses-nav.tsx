'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { profile } from '@/content/profile';
import styles from './esquisses-nav.module.css';

const LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#stack', label: 'Stack' },
  { href: '#work', label: 'Projets' },
  { href: '#experience', label: 'Parcours' },
];

/** Nav du carnet — liens ancrés + chip Playbook, avec tiroir mobile (burger). */
export function EsquissesNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
      <a href="#top" className={styles.navBrand} onClick={close}>
        karvaneg<span className={styles.star}>*</span>
      </a>

      <div className={styles.navLinks} id="esquisses-menu">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <Link href="/playbook" className={styles.navPlaybook} onClick={close}>
          <span className={styles.navPlaybookPrompt}>~$</span>playbook
        </Link>
      </div>

      <div className={styles.navStatus}>
        <span className={styles.statusDot} aria-hidden="true" />
        <span className={styles.navStatusText}>{profile.availability.esquisses}</span>
      </div>

      <button
        type="button"
        className={styles.navToggle}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={open}
        aria-controls="esquisses-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <svg viewBox="0 0 36 28" aria-hidden="true">
          {open ? (
            <>
              <path
                d="M 5,5 L 31,23"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 31,5 L 5,23"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
            </>
          ) : (
            <>
              <path
                d="M 4,7 Q 18,5 32,8"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 4,15 Q 20,13 32,16"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 4,23 Q 16,21 32,24"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                fill="none"
              />
            </>
          )}
        </svg>
      </button>
    </nav>
  );
}
