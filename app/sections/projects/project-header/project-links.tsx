import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

interface ProjectLinksProps {
  links: {
    title: string;
    github: string | null;
    live: string | null;
  };
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <nav className={cn('flex gap-3')} aria-label={`Liens du projet ${links.title}`}>
      {links.github && (
        <Link
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm',
          )}
          aria-label={`Voir le code source de ${links.title} sur GitHub`}
        >
          <Github className={cn(dsTokens.size.iconLg)} aria-hidden="true" />
        </Link>
      )}
      {links.live && (
        <Link
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm',
          )}
          aria-label={`Voir ${links.title} en ligne`}
        >
          <ExternalLink className={cn(dsTokens.size.iconLg)} aria-hidden="true" />
        </Link>
      )}
    </nav>
  );
}
