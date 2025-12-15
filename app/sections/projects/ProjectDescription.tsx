interface ProjectDescriptionProps {
  description: string
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
    return (
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{description}</p>
    )
}