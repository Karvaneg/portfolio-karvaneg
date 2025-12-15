
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Technologies } from "./technologies";
import { Description } from "./description";

export function About() {
  return (
    <SectionContainer id="a-propos">
      <SectionTitle>À propos</SectionTitle>
      <Description />
      <Technologies />
    </SectionContainer>
  )
}