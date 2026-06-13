'use client';

import { useEffect } from 'react';
import styles from './cookie-consent.module.css';

interface CookieBannerProps {
  forceOpen?: boolean;
  consent: 'accepted' | 'refused' | null;
  onAccept: () => void;
  onRefuse: () => void;
}

/** Bandeau de consentement (présentation). Visible tant qu'aucun choix, ou si rouvert. */
export function CookieBanner({ forceOpen = false, consent, onAccept, onRefuse }: CookieBannerProps) {
  const visible = forceOpen || consent === null;

  useEffect(() => {
    if (!visible) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onRefuse();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible, onRefuse]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      className={styles.banner}
    >
      <p id="cookie-title" className={styles.label}>
        <span className={styles.dot} aria-hidden="true">
          *
        </span>
        Cookies
      </p>
      <p id="cookie-desc" className={styles.text}>
        Ce site utilise un outil d&rsquo;analyse d&rsquo;expérience (Contentsquare / Hotjar) pour
        s&rsquo;améliorer. Rien n&rsquo;est chargé sans votre accord.
      </p>
      <div className={styles.actions}>
        <button type="button" className={`${styles.btn} ${styles.refuse}`} onClick={onRefuse}>
          Refuser
        </button>
        <button
          type="button"
          autoFocus
          className={`${styles.btn} ${styles.accept}`}
          onClick={onAccept}
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
