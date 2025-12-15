interface ProjectTechnologiesProps {
    technologies: readonly string[]
}

export function ProjectTechnologies ({ technologies }: ProjectTechnologiesProps) {
    return (
        <div className="flex flex-wrap gap-2 pt-2" role="list" aria-label="Technologies utilisées">
            {technologies.map((tech) => (
            <span
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                role="listitem"
            >
                {tech}
            </span>
            ))}
        </div>
    )}