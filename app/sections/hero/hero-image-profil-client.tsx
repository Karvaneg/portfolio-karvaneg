'use client';

import { useCopyToClipboard } from '@/app/hooks/use-copy-to-clipboard';
import { contactData } from '@/app/lib/data/contact';
import { cn } from '@/lib/utils';

export function HeroImageProfilClient() {
  const { copy } = useCopyToClipboard();

  const handleClick = () => {
    copy(contactData.email, { action: 'copy-email' });
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick();
      }}
      role="button"
      tabIndex={0}
      aria-label="Copier l’adresse email"
      className={cn(
        'absolute inset-0 w-full h-full cursor-pointer',
        'flex items-end justify-center pb-4 group',
      )}
    >
      <div className="rounded-full border border-border bg-card/90 px-3 py-1 text-xs font-medium text-card-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
        Copier mon email
      </div>
    </div>
  );
}
