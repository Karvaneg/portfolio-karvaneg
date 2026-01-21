import { contactData } from '@/app/lib/data/contact';
import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';

export function ContactDescription() {
  return (
    <p className={cn('text-lg leading-relaxed text-pretty', dsTokens.color.textSecondary)}>
      {contactData.description}
    </p>
  );
}
