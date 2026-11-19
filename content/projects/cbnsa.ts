import type { Project } from '@/types/project';

const IMG = '/images/projects';

export const cbnsa: Project = {
  id: 'cbnsa',
  ticketId: 'KARV-002',
  order: 8,
  title: 'CBNSA',
  headline: 'CBNSA — Refonte du site institutionnel',
  tagline:
    'Refonte du site institutionnel, un vent de modernité souffle sur le Conservatoire Botanique National Sud-Atlantique.',
  status: 'shipped',
  statusLabel: 'SHIPPED',
  period: '2023 — 2025',
  role: 'Développeuse Fullstack',
  duration: '24 mois',
  websites: ['https://cbnsa.fr'],
  stack: ['Symfony', 'PHP', 'Twig', 'TypeScript', 'PostgreSQL', 'Docker', 'GitLab CI'],
  labels: [{ text: 'fullstack' }, { text: 'refactor' }, { text: 'a11y', accent: true }],
  metaLabel: 'Focus',
  summary:
    "Conservatoire Botanique National Sud-Atlantique. Refonte du site institutionnel sous Symfony/Twig : contenus sortis du code et éditables par l'équipe, SEO consolidé et accessibilité conforme WCAG.",
  description: [
    'Le Conservatoire Botanique National Sud-Atlantique avait un site institutionnel vieillissant. Surtout, ses contenus étaient figés dans le code : la moindre mise à jour passait par un développeur.',
    "J'ai refondu le site sous Symfony/Twig. Les contenus, jusque-là en dur dans les templates, ont été sortis du code pour devenir éditables : l'équipe fait désormais évoluer le site en autonomie, sans toucher au code. Les portails thématiques du Conservatoire, bâtis sur le même socle, font l'objet d'un projet à part.",
    "Trois gains nets à l'arrivée : un SEO consolidé (structure sémantique, métadonnées, performances), une accessibilité conforme WCAG, et une navigation bien plus fluide. Aujourd'hui près d'un visiteur sur deux arrive via la recherche organique, et les pages les plus consultées sont des contenus de fond — la structure éditoriale sortie du code est réellement exploitée.",
  ],
  impact: '~45% du trafic en recherche organique · 11,4k pages vues (2026)',
  impactEsquisses: 'Autonomie éditoriale complète · ~45% du trafic en recherche organique (2026).',
  aiTooling:
    'SEO & accessibilité (WCAG), navigation fluidifiée et contenus sortis du code en dur — désormais éditables sans intervention technique.',
  shots: [
    {
      src: `${IMG}/cbnsa-site-accueil.png`,
      caption: 'Site institutionnel - accueil',
      alt: "Page d'accueil du CBNSA — hero « Connaître et protéger la biodiversité végétale et fongique » sur fond de fleur rouge.",
    },
    {
      src: `${IMG}/cbnsa-site-gouvernance.png`,
      caption: 'Site institutionnel - Gouvernance',
      alt: 'Page Gouvernance du CBNSA — mission de service public, agrément ministériel et chiffres clés.',
    },
    {
      src: `${IMG}/cbnsa-site-portails.png`,
      caption: 'Site institutionnel - Nos portails thématiques',
      alt: "Section « Nos portails thématiques » du CBNSA — cartes vers l'Observatoire, le Centre de ressources et portails à venir.",
    },
  ],
  caseStudy: {
    tagline: "Un site institutionnel modernisé, que l'équipe fait évoluer sans toucher au code.",
    facts: [
      { label: 'Période', value: '2023 — 2025' },
      { label: 'Rôle', value: 'Développeuse fullstack' },
      { label: 'Statut', value: 'Livré' },
      { label: 'Contexte', value: 'Établissement public' },
    ],
    metrics: {
      label: 'Résultats mesurés · 2026 (à date)',
      note: 'Pas de mesure avant refonte — ces chiffres reflètent le trafic post-refonte, pas un taux de croissance.',
      items: [
        { value: '4k', label: 'visiteurs uniques', sub: '11,4k pages vues' },
        {
          value: '~45%',
          label: 'via la recherche organique',
          sub: 'Google · Bing · Ecosia · Qwant',
        },
        { value: '2,7', label: 'pages par visite', sub: '~1 min 40 s par session' },
      ],
    },
    sections: [
      {
        title: 'Le contexte',
        body: [
          "Le Conservatoire Botanique National Sud-Atlantique disposait d'un site institutionnel vieillissant. Les contenus étaient figés dans le code, ce qui rendait chaque mise à jour dépendante d'une intervention de développement.",
        ],
      },
      {
        title: "Ce que j'ai construit",
        body: [
          'La refonte complète du site institutionnel sous Symfony/Twig, du design des pages à leur structure sémantique.',
          "Les contenus, jusque-là en dur dans les templates, ont été sortis du code pour devenir éditables : l'équipe peut désormais faire évoluer le site en autonomie, sans toucher au code.",
          "Les portails thématiques du Conservatoire, bâtis sur le même socle, font l'objet d'un projet à part.",
        ],
      },
      {
        title: 'SEO, accessibilité & navigation',
        body: [
          "La refonte a permis un gain net sur trois axes : un SEO consolidé (structure sémantique, métadonnées, performances), une accessibilité conforme aux normes WCAG, et une navigation nettement plus fluide pour l'utilisateur final.",
        ],
      },
      {
        title: 'Impact',
        body: [
          "Un site plus rapide, mieux référencé et accessible, doublé d'une autonomie éditoriale complète : les contenus ne dépendent plus du code.",
          "Côté trafic, près d'un visiteur sur deux arrive aujourd'hui via la recherche organique (Google, Bing, Ecosia, Qwant) — une validation concrète du travail SEO. Et les pages les plus consultées sont des contenus de fond (expertise, projets phares, gouvernance) : la structure éditoriale sortie du code est réellement exploitée.",
        ],
      },
    ],
  },
  esquisses: {
    rotation: '3deg',
    background: '#dbd0bb',
    accent: '#4a5d3a',
    cardImage: `${IMG}/cbnsa-site-accueil.png`,
    heroImage: `${IMG}/cbnsa-site-accueil.png`,
    gallery: [`${IMG}/cbnsa-site-gouvernance.png`, `${IMG}/cbnsa-site-portails.png`],
  },
};
