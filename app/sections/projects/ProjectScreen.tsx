import Image from "next/image"

interface ProjectScreenProps {
  project: {
    title: string
    description: string
    image: string
    technologies: readonly string[]
    github: string | null
    live: string | null
  }
  index: number
}

export function ProjectScreen({ project, index }: ProjectScreenProps) {
  return (
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
)}