import { buildMetadata } from '@/app/lib/metadata';
import { refonteFontVariables } from '@/app/lib/refonte-fonts';
import { EsquissesShell } from '@/components/esquisses/esquisses-shell';
import { EsquissesNav } from '@/components/esquisses/esquisses-nav';
import { EsquissesHero } from '@/components/esquisses/esquisses-hero';
import { EsquissesMarquee } from '@/components/esquisses/esquisses-marquee';
import { EsquissesAbout } from '@/components/esquisses/esquisses-about';
import { EsquissesStack } from '@/components/esquisses/esquisses-stack';
import { EsquissesWork } from '@/components/esquisses/esquisses-work';
import { EsquissesExperience } from '@/components/esquisses/esquisses-experience';
import { EsquissesContact } from '@/components/esquisses/esquisses-contact';
import { EsquissesFooter } from '@/components/esquisses/esquisses-footer';

export const metadata = buildMetadata({
  path: '/esquisses',
  title: "Carnet d'esquisses — Marie Le Carvennec · Développeuse Web Fullstack",
  description:
    "Le carnet d'esquisses de Marie Le Carvennec : un portfolio manuscrit et tactile — à propos, stack, projets et parcours racontés comme des pages de carnet.",
});

export default function EsquissesPage() {
  return (
    <EsquissesShell fontClass={refonteFontVariables}>
      <EsquissesNav />
      <main>
        <EsquissesHero />
        <EsquissesMarquee />
        <EsquissesAbout />
        <EsquissesStack />
        <EsquissesWork />
        <EsquissesExperience />
        <EsquissesContact />
      </main>
      <EsquissesFooter />
    </EsquissesShell>
  );
}
