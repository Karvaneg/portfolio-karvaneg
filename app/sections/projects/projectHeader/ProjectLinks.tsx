import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectLinksProps {
  links: {
    title: string;
    github: string | null;
    live: string | null;
  };
}

export function ProjectLinks ({ links }: ProjectLinksProps) {
    return (
        <nav className="flex gap-3" aria-label={`Liens du projet ${links.title}`}>
            {links.github && (
                <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Voir le code source de ${links.title} sur GitHub`}
                >
                <Github className="w-5 h-5" aria-hidden="true" />
                </Link>
            )}
            {links.live && (
                <Link
                href={links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Voir ${links.title} en ligne`}
                >
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
                </Link>
            )}
        </nav>
    )}