import { SkillCategory } from "@/types/data"
import { Card, CardContent } from "@/components/ui/card"
import { SectionSubTitle } from "@/components/ui-kit/section-sub-title"
import { SkillItem } from "./skill-item"
import { dsTokens } from "@/design-system/tokens"
import { cn } from "@/lib/utils"

interface SkillCategoryCardProps {
  category: SkillCategory
}

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const Icon = category.icon
  return (
    <Card className={cn("hover:shadow-lg transition-shadow")}>
      <CardContent className={cn(dsTokens.space.xl)}>
        <div className={cn("flex items-center gap-3 mb-6")}>
          <div className={cn(dsTokens.space.sm, dsTokens.color.primarySoft, dsTokens.radius.lg)}>
            <Icon className={cn(dsTokens.size.iconLg, dsTokens.color.primary)} aria-hidden="true" />
          </div>
          <SectionSubTitle>{category.title}</SectionSubTitle>
        </div>
        <div className={cn("space-y-4")}>
          {category.skills.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}