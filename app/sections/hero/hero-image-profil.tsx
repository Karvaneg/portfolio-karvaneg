import { HeroImageProfilSSR } from './hero-image-profil-server';
import { HeroImageProfilClient } from './hero-image-profil-client';
import { cn } from '@/lib/utils';
import { dsTokens } from '@/design-system/tokens';

export function HeroImageProfil() {
  return (
    <div
      className={cn(
        dsTokens.radius.pill,
        'relative w-48 h-48 md:w-64 md:h-64 overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background shadow-2xl shadow-primary/20 hover:ring-primary/50 transition-all duration-300 cursor-pointer',
      )}
    >
      <HeroImageProfilSSR />
      <HeroImageProfilClient />
    </div>
  );
}
