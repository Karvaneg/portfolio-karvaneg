import { contactData } from '@/app/lib/data/contact';
import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';
import { MapPin, Phone } from 'lucide-react';

export function ContactDetails() {
  return (
    <address
      className={cn(
        'flex flex-col items-center gap-4 pt-4 not-italic',
        dsTokens.color.textSecondary,
      )}
    >
      <div className={cn('flex items-center gap-2')}>
        <MapPin className={cn(dsTokens.size.iconMd)} aria-hidden="true" />
        <span>{contactData.location}</span>
      </div>
      <div className={cn('flex items-center gap-2')}>
        <Phone className={cn(dsTokens.size.iconMd)} aria-hidden="true" />
        <a
          href={`tel:${contactData.phone}`}
          className={cn(
            'rounded-sm text-foreground/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
            dsTokens.interaction.hoverTextPrimary,
            dsTokens.motion.base,
          )}
        >
          {contactData.phoneDisplay}
        </a>
      </div>
    </address>
  );
}
