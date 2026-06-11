import type { Project } from '@/types/project';

const IMG = '/images/projects';

export const cbnsa: Project = {
  id: 'cbnsa',
  ticketId: 'KARV-001',
  order: 5,
  title: 'CBNSA',
  headline: 'CBNSA — Refonte institutionnelle & portails thématiques',
  tagline:
    'Refonte du site institutionnel et portails thématiques du Conservatoire Botanique.',
  status: 'shipped',
  statusLabel: 'SHIPPED',
  period: '2023 — 2025',
  role: 'Développeuse Fullstack',
  duration: '24 mois',
  website: 'https://cbnsa.fr',
  stack: ['Symfony', 'PHP', 'Twig', 'TypeScript', 'PostgreSQL', 'Docker', 'GitLab CI'],
  labels: [{ text: 'fullstack' }, { text: 'refactor' }, { text: 'a11y', accent: true }],
  metaLabel: 'Focus',
  summary:
    "Conservatoire Botanique National Sud-Atlantique. Refonte du site institutionnel et conception d'une suite de portails thématiques partageant un même design system Symfony/Twig — un socle, plusieurs visages.",
  description: [
    'Deux ans au Conservatoire Botanique National Sud-Atlantique : développement de plusieurs portails thématiques et refonte complète du site institutionnel. Backend PHP/Symfony, frontend Twig + JavaScript/TypeScript, bases PostgreSQL optimisées.',
    "Mise en pratique des principes DevOps (pipelines GitLab CI/CD, conteneurisation Docker, automatisation des déploiements), respect des standards WCAG, suivi SEO. J'ai aussi participé à la mise en œuvre d'un design system pour harmoniser le visuel des portails thématiques.",
  ],
  impact: '~45% du trafic en recherche organique · 11,4k pages vues (2026)',
  impactEsquisses: 'Design system unifié et plusieurs portails thématiques en production.',
  aiTooling:
    'SEO & accessibilité (WCAG), navigation fluidifiée et contenus sortis du code en dur — désormais éditables sans intervention technique.',
  shots: [
    {
      src: `${IMG}/cbnsa-accueil.png`,
      caption: 'site institutionnel · accueil',
      alt: "Page d'accueil du CBNSA — hero « Connaître et protéger la biodiversité végétale et fongique » sur fond de fleur rouge.",
    },
    {
      src: `${IMG}/cbnsa-portails.png`,
      caption: 'portails thématiques · accueil',
      alt: "Section « Nos portails thématiques » du CBNSA — cartes vers l'Observatoire, le Centre de ressources et portails à venir.",
    },
    {
      src: `${IMG}/cbnsa-gouvernance.png`,
      caption: 'institutionnel · gouvernance',
      alt: 'Page Gouvernance du CBNSA — mission de service public, agrément ministériel et chiffres clés.',
    },
  ],
  caseStudy: {
    tagline: 'Un socle de design system Symfony/Twig, plusieurs portails à son image.',
    facts: [
      { label: 'Période', value: '2023 — 2025' },
      { label: 'Rôle', value: 'Développeuse fullstack' },
      { label: 'Statut', value: 'Livré' },
      { label: 'Contexte', value: 'Établissement public' },
    ],
    metrics: {
      label: 'Résultats mesurés · 2026 (à date)',
      note: "Pas de mesure avant refonte — ces chiffres reflètent le trafic post-refonte, pas un taux de croissance.",
      items: [
        { value: '4k', label: 'visiteurs uniques', sub: '11,4k pages vues' },
        { value: '~45%', label: 'via la recherche organique', sub: 'Google · Bing · Ecosia · Qwant' },
        { value: '2,7', label: 'pages par visite', sub: '~1 min 40 s par session' },
      ],
    },
    sections: [
      {
        title: 'Le contexte',
        body: [
          "Le Conservatoire Botanique National Sud-Atlantique disposait d'un site institutionnel vieillissant et avait besoin de portails thématiques distincts, tout en gardant une cohérence visuelle et technique forte. Les contenus étaient figés dans le code, ce qui rendait chaque mise à jour dépendante d'une intervention de développement.",
        ],
      },
      {
        title: "Ce que j'ai construit",
        body: [
          'La refonte du site institutionnel et une suite de portails thématiques bâtis sur un même socle Symfony/Twig — un design system partagé, décliné en plusieurs visages.',
          "Les contenus, jusque-là en dur dans les templates, ont été sortis du code pour devenir éditables : l'équipe peut désormais faire évoluer le site en autonomie, sans toucher au code.",
        ],
      },
      {
        title: 'SEO, accessibilité & navigation',
        body: [
          'La refonte a permis un gain net sur trois axes : un SEO consolidé (structure sémantique, métadonnées, performances), une accessibilité conforme aux normes WCAG, et une navigation nettement plus fluide pour l\'utilisateur final.',
        ],
      },
      {
        title: 'Impact',
        body: [
          "Un site plus rapide, mieux référencé et accessible, doublé d'une autonomie éditoriale complète : les contenus ne dépendent plus du code. Le socle partagé garantit enfin la cohérence entre l'institutionnel et les portails thématiques.",
          "Côté trafic, près d'un visiteur sur deux arrive aujourd'hui via la recherche organique (Google, Bing, Ecosia, Qwant) — une validation concrète du travail SEO. Et les pages les plus consultées sont des contenus de fond (expertise, projets phares, gouvernance) : la structure éditoriale sortie du code est réellement exploitée.",
        ],
      },
    ],
  },
  esquisses: {
    rotation: '3deg',
    background: '#dbd0bb',
    accent: '#4a5d3a',
    cardImage: `${IMG}/cbnsa-portails.png`,
    heroImage: `${IMG}/cbnsa-accueil.png`,
    gallery: [`${IMG}/cbnsa-gouvernance.png`, `${IMG}/cbnsa-portails.png`],
  },
};
