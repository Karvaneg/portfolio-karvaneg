'use client';

import { useCallback, useEffect, useState } from 'react';
import Script from 'next/script';
import CookieBanner from './cookie-banner';

const CONSENT_KEY = 'analytics_consent';

type Consent = 'accepted' | 'refused' | null;

export default function HotjarLoader() {
  const [consent, setConsent] = useState<Consent>(() => {
    if (typeof window === 'undefined') return null;
    const value = localStorage.getItem(CONSENT_KEY);
    return value === 'accepted' || value === 'refused' ? value : null;
  });

  const [forceOpen, setForceOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const accept = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    }
    setConsent('accepted');
    setForceOpen(false);
  };

  const refuse = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONSENT_KEY, 'refused');
    }
    setConsent('refused');
    setForceOpen(false);
  };

  const markInteraction = useCallback(() => {
    setHasInteracted(true);
  }, []);

  useEffect(() => {
    if (consent !== 'accepted') return undefined;

    window.addEventListener('click', markInteraction, { once: true });
    window.addEventListener('scroll', markInteraction, { once: true });
    window.addEventListener('keydown', markInteraction, { once: true });

    const fallbackTimer = window.setTimeout(() => {
      markInteraction();
    }, 500);

    return () => {
      window.removeEventListener('click', markInteraction);
      window.removeEventListener('scroll', markInteraction);
      window.removeEventListener('keydown', markInteraction);
      window.clearTimeout(fallbackTimer);
    };
  }, [consent, markInteraction]);

  useEffect(() => {
    if (consent) {
      console.log(`[Analytics] User consent: ${consent}`);
    }
  }, [consent]);

  return (
    <>
      {consent === 'accepted' && hasInteracted && (
        <Script
          src="https://t.contentsquare.net/uxa/134e75707d647.js"
          strategy="afterInteractive"
        />
      )}

      <CookieBanner consent={consent} forceOpen={forceOpen} onAccept={accept} onRefuse={refuse} />

      <button
        type="button"
        onClick={() => setForceOpen(true)}
        aria-label="Ouvrir le panneau de gestion des cookies"
        className="fixed bottom-4 right-4 z-40 text-xs underline text-neutral-500 hover:text-neutral-700"
      >
        Gérer les cookies
      </button>
    </>
  );
}