import type { Experience } from '@/types/experience';

/** Parcours professionnel, du plus récent au plus ancien. */
export const experiences: Experience[] = [
  {
    period: 'Août 2023 — Août 2025',
    role: 'Développeuse Fullstack',
    company: 'Conservatoire Botanique National Sud-Atlantique',
    description:
      "Développement de portails thématiques et refonte du site institutionnel. Conception d'interfaces web responsives accessibles (WCAG), optimisation SEO et performances. Modélisation et optimisation de bases PostgreSQL, développement Symfony et intégration d'API tierces. Rédaction de cahiers des charges techniques, tests fonctionnels et unitaires, documentation.",
    tags: ['Symfony', 'PHP', 'PostgreSQL', 'TypeScript', 'Docker', 'GitLab CI'],
  },
  {
    period: 'Mars — Novembre 2022',
    role: 'Développeuse Web — Formation',
    company: 'OpenClassrooms',
    description:
      "Formation intensive en développement web — 6 projets professionnalisants couvrant l'ensemble du stack. Certification Développeur Intégrateur Web (Niveau 5). Tous les projets validés au premier passage.",
    tags: ['HTML/CSS', 'JS', 'React', 'Node', 'MongoDB'],
  },
  {
    period: 'Mai 2018 — Janvier 2021',
    role: 'Responsable Production',
    company: 'Beephone',
    description:
      "Responsable d'une équipe de 3 personnes dans le reconditionnement d'iPhone. Diagnostics, réparations, tests, gestion des stocks, procédures qualité, SAV technique et gestion RH. La rigueur ne s'est pas perdue en route.",
    tags: ['Management', 'Process', 'Qualité'],
  },
];
