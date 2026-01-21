import { SectionContainer } from '@/components/ui-kit/section/section-container';
import { SectionTitle } from '@/components/ui-kit/section/section-title';
import { Description } from './about-description';
import { Technologies } from './about-technologies';

export function About() {
  return (
    <SectionContainer id="a-propos">
      <SectionTitle>À propos</SectionTitle>
      <Description />
      <Technologies />
    </SectionContainer>
  );
}
