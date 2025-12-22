import { skillCategories } from "@/app/lib/data/skills"
import { SkillsHeader } from "./skills-header"
import { SkillCategoryCard } from "./skill-category-card"
import { cn } from "@/lib/utils"

export function Skills() {
  return (
    <section id="competences" className={cn("py-20 bg-muted/30")}>
      <div className={cn("container mx-auto px-4")}>
        <SkillsHeader />
        <div className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-6")}>
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
