import type { Metadata } from 'next';
import { refonteFontVariables } from '@/app/lib/refonte-fonts';
import { CarnetShell } from '@/components/carnet/carnet-shell';
import { CarnetNav } from '@/components/carnet/carnet-nav';
import { CarnetHero } from '@/components/carnet/carnet-hero';
import { CarnetMarquee } from '@/components/carnet/carnet-marquee';
import { CarnetAbout } from '@/components/carnet/carnet-about';
import { CarnetStack } from '@/components/carnet/carnet-stack';
import { CarnetWork } from '@/components/carnet/carnet-work';

export const metadata: Metadata = {
  title: "Carnet d'esquisses — Marie Le Carvennec · Développeuse Web Fullstack",
  description:
    "Le carnet d'esquisses de Marie Le Carvennec : un portfolio manuscrit et tactile — à propos, stack, projets et parcours racontés comme des pages de carnet.",
};

export default function CarnetPage() {
  return (
    <CarnetShell fontClass={refonteFontVariables}>
      <CarnetNav />
      <CarnetHero />
      <CarnetMarquee />
      <CarnetAbout />
      <CarnetStack />
      <CarnetWork />
    </CarnetShell>
  );
}
