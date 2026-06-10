import type { Metadata } from 'next';
import { refonteFontVariables } from '@/app/lib/refonte-fonts';
import { TechniqueShell } from '@/components/technique/technique-shell';
import { TechniqueNav } from '@/components/technique/technique-nav';
import { TechniqueHero } from '@/components/technique/technique-hero';
import { TechniqueShow } from '@/components/technique/technique-show';

export const metadata: Metadata = {
  title:
    'Carnet technique — Marie Le Carvennec · Développeuse Fullstack & AI-Augmented Engineer',
  description:
    "Le carnet technique de Marie Le Carvennec : workflow d'ingénierie augmentée par l'IA, projets en format ticket, études de cas et open source.",
};

export default function TechniquePage() {
  return (
    <TechniqueShell fontClass={refonteFontVariables}>
      <TechniqueNav />
      <TechniqueHero />
      <TechniqueShow />
    </TechniqueShell>
  );
}
