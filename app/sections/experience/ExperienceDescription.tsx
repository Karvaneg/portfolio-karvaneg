interface ExperienceDescriptionProps {
  description: string
}

export function ExperienceDescription({ description }: ExperienceDescriptionProps) {
  return (
    <p className="text-muted-foreground leading-relaxed text-pretty">{description}</p>       
  )
}