import type { Profile } from '@/types/profile';

/** Identité, statut et liens — partagés par les trois surfaces. */
export const profile: Profile = {
  name: 'Marie Le Carvennec',
  brand: 'karvaneg',
  roleShort: 'Développeuse Web Fullstack',
  roleLong: 'Développeuse Fullstack & AI-Augmented Engineer',
  location: 'Sud-Ouest · Remote',
  geo: 'Le Teich — 44.63°N · 1.02°W',
  editionLabel: 'N° 04 · Édition 2026',
  availability: {
    available: true,
    atrium: 'Disponible — Sud-Ouest / Remote',
    carnet: 'Dispo — Sud-Ouest / Remote',
    technique: 'Disponible — opportunités fullstack & AI tooling · Q3 2026',
  },
  email: 'marie.lecarvennec@gmail.com',
  phoneDisplay: '06 77 84 86 53',
  phoneHref: 'tel:+33677848653',
  socials: {
    github: {
      label: 'GitHub',
      handle: '@Karvaneg',
      url: 'https://github.com/Karvaneg',
    },
    linkedin: {
      label: 'LinkedIn',
      handle: 'in/marielecarvennec',
      url: 'https://www.linkedin.com/in/marielecarvennec/',
    },
  },
  openSourceRepo: 'https://github.com/Karvaneg/claude-code-dev-workflows',
};
