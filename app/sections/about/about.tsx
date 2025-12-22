
import { SectionContainer } from "@/components/ui-kit/section-container";
import { SectionTitle } from "@/components/ui-kit/section-title";
import { Technologies } from "./about-technologies";
import { Description } from "./about-description";

export function About() {
  return (
    <SectionContainer id="a-propos">
      <SectionTitle>À propos</SectionTitle>
      <Description />
      <Technologies />
    </SectionContainer>
  )
}