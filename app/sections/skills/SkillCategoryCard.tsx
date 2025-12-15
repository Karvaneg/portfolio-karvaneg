import { SkillCategory } from "@/types/data"
import { Card, CardContent } from "@/components/ui/card"
import { SectionSubTitle } from "@/components/ui/SectionSubTitle"
import { SkillItem } from "./SkillItem"

interface SkillCategoryCardProps {
  category: SkillCategory
}

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const Icon = category.icon
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
          <SectionSubTitle>{category.title}</SectionSubTitle>
        </div>
        <div className="space-y-4">
          {category.skills.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}