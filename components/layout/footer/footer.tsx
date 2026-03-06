import { cn } from '@/lib/utils';
import { FooterBranding } from './footer-branding';
import { SocialLinksGroup } from '@/components/ui-kit/social-networks/social-links-group';

export function Footer() {
  return (
    <footer className={cn('bg-background border-t border-border py-8')}>
      <div className={cn('container mx-auto px-4')}>
        <div className={cn('flex flex-col md:flex-row items-center justify-between gap-4')}>
          <FooterBranding />
          <SocialLinksGroup variant="footer" label="Navigation footer - Liens réseaux sociaux et contact" />
        </div>
      </div>
    </footer>
  );
}
