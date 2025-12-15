import { aboutData } from "@/app/lib/data/about";
import { SectionSubTitle } from "@/components/ui/SectionSubTitle";

export function Technologies() {
  return (
    <div className="pt-8">
      <SectionSubTitle className="mb-4">Technologies que j&apos;utilise :</SectionSubTitle>
      <div className="flex flex-wrap gap-2">
        {aboutData.technologies.map((tech) => (
          <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}