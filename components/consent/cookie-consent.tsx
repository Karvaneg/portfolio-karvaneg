'use client';

import { useCallback, useEffect, useState } from 'react';
import Script from 'next/script';
import { refonteFontVariables } from '@/app/lib/refonte-fonts';
import { CookieBanner } from './cookie-banner';
import styles from './cookie-consent.module.css';

const CONSENT_KEY = 'analytics_consent';

type Consent = 'accepted' | 'refused' | null;

/**
 * Gestion du consentement analytics (RGPD) : bandeau, persistance du choix, et
 * chargement du script Contentsquare **seulement** après acceptation + 1re
 * interaction. Le wrapper porte data-surface + polices refonte (tokens).
 */
export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(() => {
    if (typeof window === 'undefined') return null;
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'accepted' || value === 'refused' ? value : null;
  });
  const [forceOpen, setForceOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setConsent('accepted');
    setForceOpen(false);
  };

  const refuse = () => {
    localStorage.setItem(CONSENT_KEY, 'refused');
    setConsent('refused');
    setForceOpen(false);
  };

  const markInteraction = useCallback(() => setHasInteracted(true), []);

  // Diffère le chargement analytics jusqu'à une vraie interaction (perf).
  useEffect(() => {
    if (consent !== 'accepted') return undefined;

    window.addEventListener('click', markInteraction, { once: true });
    window.addEventListener('scroll', markInteraction, { once: true });
    window.addEventListener('keydown', markInteraction, { once: true });
    const fallback = window.setTimeout(markInteraction, 500);

    return () => {
      window.removeEventListener('click', markInteraction);
      window.removeEventListener('scroll', markInteraction);
      window.removeEventListener('keydown', markInteraction);
      window.clearTimeout(fallback);
    };
  }, [consent, markInteraction]);

  return (
    <div className={refonteFontVariables} data-surface="atrium">
      {consent === 'accepted' && hasInteracted && (
        <Script src="https://t.contentsquare.net/uxa/134e75707d647.js" strategy="afterInteractive" />
      )}

      <CookieBanner consent={consent} forceOpen={forceOpen} onAccept={accept} onRefuse={refuse} />

      {consent !== null && !forceOpen && (
        <button
          type="button"
          className={styles.manage}
          onClick={() => setForceOpen(true)}
          aria-label="Gérer les cookies"
        >
          <span className={styles.manageDot} aria-hidden="true">
            *
          </span>
          Cookies
        </button>
      )}
    </div>
  );
}
