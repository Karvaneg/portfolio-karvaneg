import { SectionSubTitle } from '@/components/ui-kit/section/section-sub-title';
import { ariaLabels } from '@/design-system/a11y';
import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ExperienceTitleProps {
  title: string;
  company: string;
  link: string | null;
}

export function ExperienceTitle({ title, company, link }: ExperienceTitleProps) {
  return (
    <div>
      <SectionSubTitle className={cn('group-hover:text-primary transition-colors')}>
        {title} · {company}
        {link && (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn('inline-block ml-2 align-middle')}
            aria-label={ariaLabels.externalLink(`le site de ${company}`)}
          >
            <ExternalLink
              className={cn(
                dsTokens.size.iconMd,
                'opacity-0 group-hover:opacity-100 transition-opacity',
              )}
              aria-hidden="true"
            />
          </Link>
        )}
      </SectionSubTitle>
    </div>
  );
}
