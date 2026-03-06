import type { IconSize } from '@/design-system/tokens';
import { SocialIconButton } from './social-icon-button';
import { getSocialLinks } from '@/lib/social-links-utils';
import { cn } from '@/lib/utils';

export type SocialLinksGroupVariant = 'hero' | 'footer';

interface SocialLinksGroupProps {
  className?: string;
  iconClassName?: IconSize;
  variant?: SocialLinksGroupVariant;
  label: string;
}

export function SocialLinksGroup({
  className,
  iconClassName,
  variant = 'hero',
  label,
}: SocialLinksGroupProps) {
  const socialLinks = getSocialLinks(iconClassName);

  return (
    <nav className={cn('flex items-center gap-4')} aria-label={label}>
      {socialLinks.map((link) => (
        <SocialIconButton
          key={link.id}
          href={link.href}
          label={link.label}
          icon={link.icon}
          className={className}
          variant={variant}
        />
      ))}
    </nav>
  );
}
