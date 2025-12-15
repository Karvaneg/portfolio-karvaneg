import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/app/lib/data/projects"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionSubTitle } from "@/components/ui/SectionSubTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"

export function Projects() {
  return (
    <SectionContainer id="projets">
        <SectionTitle>Projets Significatifs</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-shadow">
            <CardContent className="p-0">
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Capture d'écran du projet ${project.title}`}
                    fill
                    className="object-contain transition-transform group-hover:scale-105"
                    loading={index < 2 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                </div>

                <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                    <SectionSubTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                    </SectionSubTitle>

                    <nav className="flex gap-3" aria-label={`Liens du projet ${project.title}`}>
                    {project.github && (
                        <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Voir le code source de ${project.title} sur GitHub`}
                        >
                        <Github className="w-5 h-5" aria-hidden="true" />
                        </Link>
                    )}
                    {project.live && (
                        <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Voir ${project.title} en ligne`}
                        >
                        <ExternalLink className="w-5 h-5" aria-hidden="true" />
                        </Link>
                    )}
                    </nav>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{project.description}</p>

                {project.live && index === 0 && (
                    <p className="text-xs text-muted-foreground/80 italic">
                    Cliquez sur l&apos;icône ci-dessus pour suivre l&apos;évolution de ce projet
                    </p>
                )}

                <div className="flex flex-wrap gap-2 pt-2" role="list" aria-label="Technologies utilisées">
                    {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        role="listitem"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                </div>
            </CardContent>
            </Card>
        ))}
        </div>
    </SectionContainer>
  )
}
