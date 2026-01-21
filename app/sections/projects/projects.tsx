import { Card, CardContent } from '@/components/ui/card';
import { projects } from '@/app/lib/data/projects';
import { SectionTitle } from '@/components/ui-kit/section/section-title';
import { SectionContainer } from '@/components/ui-kit/section/section-container';
import { ProjectScreen } from './project-screen';
import { ProjectHeader } from './project-header/project-header';

import { HintText } from '@/components/ui-kit/hint-text';
import { cn } from '@/lib/utils';
import { dsTokens } from '@/design-system/tokens';
import { ProjectDescription } from './project-description';
import { ProjectTechnologies } from './project-technologies';

export function Projects() {
  return (
    <SectionContainer id="projets">
      <SectionTitle>Réalisations Significatives</SectionTitle>
      <div className={cn('grid md:grid-cols-2 gap-6')}>
        {projects.map((project, index) => (
          <Card
            key={index}
            className={cn('group overflow-hidden hover:shadow-xl transition-shadow')}
          >
            <CardContent className={cn(dsTokens.space.xxs)}>
              <ProjectScreen project={project} index={index} />
              <div className={cn(dsTokens.space.xl, 'space-y-4')}>
                <ProjectHeader header={project} />
                <ProjectDescription description={project.description} />
                {project.live && <HintText>{project.hint}</HintText>}
                <ProjectTechnologies technologies={project.technologies} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
