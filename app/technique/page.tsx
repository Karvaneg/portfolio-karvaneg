import { buildMetadata } from '@/app/lib/metadata';
import { refonteFontVariables } from '@/app/lib/refonte-fonts';
import { TechniqueShell } from '@/components/technique/technique-shell';
import { TechniqueNav } from '@/components/technique/technique-nav';
import { TechniqueHero } from '@/components/technique/technique-hero';
import { TechniqueShow } from '@/components/technique/technique-show';
import { TechniqueWorkflow } from '@/components/technique/technique-workflow';
import { TechniqueProjects } from '@/components/technique/technique-projects';
import { TechniqueOpenSource } from '@/components/technique/technique-opensource';
import { TechniqueContact } from '@/components/technique/technique-contact';
import { TechniqueFooter } from '@/components/technique/technique-footer';

export const metadata = buildMetadata({
  path: '/technique',
  title: 'Carnet technique — Marie Le Carvennec · Développeuse Fullstack & AI-Augmented Engineer',
  description:
    "Le carnet technique de Marie Le Carvennec : workflow d'ingénierie augmentée par l'IA, projets en format ticket, études de cas et open source.",
});

// ISR : la page reste statique mais se régénère en arrière-plan toutes les 24 h,
// rafraîchissant les stats du repo open source (getRepoData) sans rebuild manuel.
export const revalidate = 86400;

export default function TechniquePage() {
  return (
    <TechniqueShell fontClass={refonteFontVariables}>
      <TechniqueNav />
      <main>
        <TechniqueHero />
        <TechniqueShow />
        <TechniqueWorkflow />
        <TechniqueProjects />
        <TechniqueOpenSource />
        <TechniqueContact />
      </main>
      <TechniqueFooter />
    </TechniqueShell>
  );
}
