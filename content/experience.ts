import type { Experience } from '@/types/experience';

/** Parcours professionnel, du plus récent au plus ancien. */
export const experiences: Experience[] = [
  {
    period: '2025 — Aujourd’hui',
    role: 'Développeuse Agentique Fullstack',
    company: 'Projets clients & produits',
    description:
      "Conception et livraison de produits de bout en bout, du cadrage avec le métier à la mise en production : Opportune (application de bureau open-source avec IA locale), Kommit (daily standup guidé par une IA), InclusiShield (SaaS d'audit d'accessibilité) et Astro Bassin (plateforme de réservation pour une cliente). Chaque projet est développé en test-first avec des workflows d'agents IA versionnés : planification des tests, écriture des tests avant le code, review automatisée.",
    tags: ['Claude Code', 'Agents IA', 'TypeScript', 'React', 'Python', 'TDD'],
  },
  {
    period: 'Août 2023 — Août 2025',
    role: 'Développeuse Fullstack',
    company: 'Conservatoire Botanique National Sud-Atlantique',
    description:
      "Refonte du site institutionnel et conception d'une suite de portails scientifiques sur un socle Symfony/Twig commun, avec un design system décliné par portail et une console d'administration unique. Contenus sortis du code pour rendre l'équipe autonome. Accessibilité WCAG, SEO et performances, bases PostgreSQL, Docker et pipelines GitLab CI/CD. Rédaction de cahiers des charges techniques, tests fonctionnels et unitaires, documentation.",
    tags: ['Symfony', 'PHP', 'PostgreSQL', 'TypeScript', 'Docker', 'GitLab CI'],
  },
  {
    period: '2021 — 2023',
    role: 'Reconversion — Développeuse Intégratrice Web',
    company: 'OpenClassrooms',
    description:
      'Formation Développeur Intégrateur Web (RNCP niveau 5, certifiée en 2023) : 6 projets professionnalisants, tous validés au premier passage, puis montée en compétences sur React et TypeScript en projets personnels.',
    tags: ['HTML/CSS', 'JS', 'React', 'Node', 'MongoDB', 'SEO', 'a11y'],
  },
  {
    period: 'Mai 2018 — Janvier 2021',
    role: 'Responsable Production & Qualité',
    company: 'Beephone',
    description:
      "Responsable d'une équipe de 3 personnes dans le reconditionnement d'iPhone : diagnostics, réparations, tests, gestion des stocks, procédures qualité, SAV technique et gestion RH. La rigueur ne s'est pas perdue en route.",
    tags: ['Management', 'Process', 'Qualité'],
  },
  {
    period: '2008 — 2018',
    role: 'Diététicienne Nutritionniste',
    company: 'Relation client & premiers pas web',
    description:
      "Dix ans à écouter, reformuler et accompagner des personnes vers un objectif concret : la base de ma relation au métier aujourd'hui. En parallèle, mes premières lignes de code en autodidacte (HTML/CSS, PHP).",
    tags: ['Relation client', 'Écoute', 'Autodidacte web'],
  },
];
