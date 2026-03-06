'use client';

import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

interface CookieBannerProps {
  forceOpen?: boolean;
  consent: 'accepted' | 'refused' | null;
  onAccept: () => void;
  onRefuse: () => void;
}

export default function CookieBanner({
  forceOpen = false,
  consent,
  onAccept,
  onRefuse,
}: CookieBannerProps) {
  const visible = forceOpen || consent === null;

  /* Escape handling */
  useEffect(() => {
    if (!visible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onRefuse();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visible, onRefuse]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className={cn(
        'fixed bottom-4 left-4 right-4 z-150 mx-auto max-w-xl border border-border bg-card text-card-foreground shadow-lg',
        dsTokens.space.lg,
        dsTokens.radius.xl,
        dsTokens.motion.fadeIn,
      )}
    >
      <p id="cookie-banner-title" className="sr-only">
        Gestion des cookies
      </p>

      <p id="cookie-banner-description" className="text-sm">
        Ce site utilise un outil d’analyse d’expérience utilisateur (Hotjar / Contentsquare) à des
        fins d’amélioration.
      </p>

      <div className="mt-3 flex gap-2 justify-end">
        <button
          type="button"
          className={cn(
            'px-3 py-1 text-sm border border-border bg-muted text-foreground hover:bg-muted/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card',
            dsTokens.radius.sm,
          )}
          onClick={onRefuse}
        >
          Refuser
        </button>

        <button
          type="button"
          autoFocus
          className={cn(
            'px-3 py-1 text-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card',
            dsTokens.color.bgPrimary,
            dsTokens.color.onPrimary,
            dsTokens.radius.sm,
          )}
          onClick={onAccept}
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
