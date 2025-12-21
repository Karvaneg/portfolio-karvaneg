import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/app/lib/data/projects"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { SectionContainer } from "@/components/ui/SectionContainer"
import { ProjectScreen } from "./ProjectScreen"
import { ProjectHeader } from "./projectHeader/ProjectHeader"
import { ProjectTechnologies } from "./ProjectTechnologies"
import { ProjectDescription } from "./ProjectDescription"
import { HintText } from "@/components/ui/HintText"
import { cn } from "@/lib/utils"
import { dsTokens } from "@/design-system/tokens"

export function Projects() {
  return (
    <SectionContainer id="projets">
        <SectionTitle>Projets Significatifs</SectionTitle>
        <div className={cn("grid md:grid-cols-2 gap-6")}>
            {projects.map((project, index) => (
                <Card key={index} className={cn("group overflow-hidden hover:shadow-xl transition-shadow")}>
                    <CardContent className={cn(dsTokens.space.xxs)}>
                        <ProjectScreen project={project} index={index} />
                        <div className={cn(dsTokens.space.xl, "space-y-4")}>
                            <ProjectHeader header={project} />
                            <ProjectDescription description={project.description} />
                            {project.live && (
                                <HintText>
                                    {project.hint}
                                </HintText>
                            )}
                            <ProjectTechnologies technologies={project.technologies} />
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </SectionContainer>
  )
}
