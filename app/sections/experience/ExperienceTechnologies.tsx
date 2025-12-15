interface ExperienceTechnologiesProps {
  technologies: readonly string[]
}

export function ExperienceTechnologies({ technologies }: ExperienceTechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
        <span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
        >
            {tech}
        </span>
        ))}
    </div>           
  )
}