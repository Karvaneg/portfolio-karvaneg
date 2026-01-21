'use client';

import { useState } from 'react';
import Script from 'next/script';
import CookieBanner from './cookie-banner';

const CONSENT_KEY = 'analytics_consent';

type Consent = 'accepted' | 'refused' | null;

export default function HotjarLoader() {
  const [consent, setConsent] = useState<Consent>(() => {
    if (typeof window === 'undefined') return null;
    return (localStorage.getItem(CONSENT_KEY) as Consent) ?? null;
  });

  const [forceOpen, setForceOpen] = useState(false);

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

  return (
    <>
      {consent === 'accepted' && (
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
