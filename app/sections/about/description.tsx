import { aboutData } from "@/app/lib/data/about";

export function Description() {
  return (
    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
    {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index} className="text-pretty">
        {paragraph}
        </p>
    ))}
    </div>
  )
}