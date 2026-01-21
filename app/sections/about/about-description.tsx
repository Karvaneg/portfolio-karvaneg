import { aboutData } from '@/app/lib/data/about';
import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';

export function Description() {
  return (
    <div className={cn('space-y-6 text-lg leading-relaxed', dsTokens.color.textSecondary)}>
      {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index} className={cn('text-pretty')}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}
