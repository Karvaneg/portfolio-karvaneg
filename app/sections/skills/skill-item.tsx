import { Progress } from "@/components/ui-kit/progress/progress"

interface SkillItemProps {
  name: string
  level: number
}

export function SkillItem({ name, level }: SkillItemProps) {
  return (
    <Progress
      label={name}
      value={level}
      step={5}
    />
  )
}