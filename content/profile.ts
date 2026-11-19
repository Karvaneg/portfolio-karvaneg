import type { Profile } from '@/types/profile';

/** Identité, statut et liens — partagés par les trois surfaces. */
export const profile: Profile = {
  name: 'Marie Le Carvennec',
  brand: 'karvaneg',
  roleShort: 'Développeuse Agentique Fullstack',
  roleLong: 'Développeuse Agentique Fullstack & Forward Deployed Engineer',
  location: 'Gironde · Remote / Hybride',
  geo: 'Le Teich — 44.63°N · 1.02°W',
  editionLabel: 'N° 04 · Édition 2026',
  availability: {
    available: true,
    atrium: 'Disponible — Gironde · Remote / Hybride',
    esquisses: 'Dispo — Gironde / Remote',
    technique: 'Disponible — dev agentique fullstack & Forward Deployed Engineer',
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
