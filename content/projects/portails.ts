import type { Project } from '@/types/project';

const IMG = '/images/projects';

export const portails: Project = {
  id: 'portails',
  ticketId: 'KARV-003',
  order: 5,
  title: 'Portails Thématiques',
  headline: 'Portails thématiques — un socle, plusieurs visages',
  tagline:
    'Suite de portails web spécialisés autour du CBNSA — un design system, plusieurs visages.',
  status: 'shipped',
  statusLabel: 'SHIPPED',
  period: '2023 — 2025',
  role: 'Développeuse Fullstack',
  duration: '24 mois',
  website: 'https://vsol-na.fr/',
  stack: ['Symfony', 'Twig', 'TypeScript', 'Sass'],
  labels: [{ text: 'fullstack' }, { text: 'design system' }, { text: 'a11y', accent: true }],
  metaLabel: 'Focus',
  summary:
    "Suite de portails web scientifiques pour le CBNSA, chacun avec sa propre identité visuelle mais bâti sur un même socle Symfony/Twig. Premier mis en ligne : VSOL — Végétal Sauvage d'Origine Locale en Nouvelle-Aquitaine.",
  description: [
    "Le CBNSA avait besoin de plusieurs portails thématiques scientifiques, chacun avec sa propre identité visuelle, sans pour autant multiplier les bases techniques. J'ai conçu un design system partagé sur socle Symfony/Twig, thémé par portail : composants communs, tokens et styles déclinables, pour que chaque portail garde son visage tout en reposant sur la même fondation.",
    "Premier portail mis en ligne : VSOL — Végétal Sauvage d'Origine Locale en Nouvelle-Aquitaine, avec carnet d'adresses filtrable, rubriques éditoriales et cartographie des acteurs. Accessibilité conforme WCAG sur chaque portail, et un socle factorisé qui rend l'ajout d'un nouveau portail rapide et cohérent — sans repartir de zéro à chaque thème.",
    "Le tout est piloté depuis une console d'administration unique : un seul outil qui donne accès à l'ensemble des portails (du Catalogue de la Végétation de France aux portails Hotspots, PNAEAL, PEENA, ECOLAG ou Forêts) et centralise leur gestion — actualités, agendas, carnet d'adresses, partenaires, ressources, cartes et système de design. Administrer toute la galaxie de portails sans dupliquer les interfaces.",
  ],
  impact: 'Design system scalable & themable en production · VSOL, premier portail en ligne',
  impactEsquisses:
    'Design system scalable & themable en production · VSOL, premier portail en ligne.',
  aiTooling:
    'Un design system partagé, thémé par portail — base commune robuste, thèmes différenciés et accessibilité WCAG sans concession.',
  shots: [
    {
      src: `${IMG}/portail-admin.png`,
      caption: 'back-office · administration des portails',
      alt: "Page d'accueil de l'administration des portails thématiques du CBNSA — console unique donnant accès à tous les portails (Catalogue de la Végétation, Hotspots, PNAEAL, PEENA, ECOLAG, Forêts) et à leur gestion.",
    },
    {
      src: `${IMG}/vsol-1.png`,
      caption: "VSOL · carnet d'adresses",
      alt: "Portail VSOL — carnet d'adresses des professionnels en Nouvelle-Aquitaine : tableau filtrable par organisme, territoire et catégorie d'acteurs.",
    },
    {
      src: `${IMG}/vsol-2.png`,
      caption: 'VSOL · accueil',
      alt: "Page d'accueil du portail VSOL — « Végétal Sauvage d'Origine Locale en Nouvelle-Aquitaine », navigation Comprendre / Localiser / Agir / Consulter.",
    },
    {
      src: `${IMG}/vsol-3.png`,
      caption: 'VSOL · comprendre',
      alt: 'Portail VSOL, rubrique Comprendre — « Les végétaux locaux, une opportunité pour la Nouvelle-Aquitaine », article illustré et citation.',
    },
  ],
  caseStudy: {
    tagline: 'Une base Symfony/Twig partagée, déclinée portail par portail.',
    facts: [
      { label: 'Période', value: '2023 — 2025' },
      { label: 'Rôle', value: 'Développeuse fullstack' },
      { label: 'Statut', value: 'En production' },
      { label: 'Premier portail', value: 'VSOL' },
    ],
    sections: [
      {
        title: 'Le contexte',
        body: [
          "Le CBNSA avait besoin de plusieurs portails thématiques scientifiques, chacun avec sa propre identité visuelle, sans pour autant multiplier les bases techniques. L'enjeu : un socle partagé robuste capable de porter des thèmes différenciés.",
        ],
      },
      {
        title: "Ce que j'ai construit",
        body: [
          'Un design system partagé sur socle Symfony/Twig, thémé par portail : composants communs, tokens et styles déclinables, pour que chaque portail garde son visage tout en reposant sur la même fondation.',
          "Premier portail mis en ligne : VSOL — Végétal Sauvage d'Origine Locale en Nouvelle-Aquitaine, avec carnet d'adresses filtrable, rubriques éditoriales et cartographie des acteurs.",
        ],
      },
      {
        title: 'Accessibilité & maintenabilité',
        body: [
          "Accessibilité conforme aux normes WCAG sur chaque portail, et un socle factorisé qui rend l'ajout d'un nouveau portail rapide et cohérent — sans repartir de zéro à chaque thème.",
        ],
      },
      {
        title: 'Le back-office unique',
        body: [
          "L'ensemble est piloté depuis une console d'administration unique : un seul outil qui donne accès à tous les portails — du Catalogue de la Végétation de France aux portails Hotspots, PNAEAL, PEENA, ECOLAG ou Forêts — et centralise leur gestion : actualités, agendas, carnet d'adresses, partenaires, ressources, cartes et système de design. Administrer toute la galaxie de portails sans dupliquer les interfaces.",
        ],
      },
    ],
  },
  esquisses: {
    rotation: '-4deg',
    background: '#f3ede2',
    accent: '#e0411b',
    caption: 'VSOL · 2023 — 2025',
    cardImage: `${IMG}/vsol-1.png`,
    heroImage: `${IMG}/portail-admin.png`,
    gallery: [`${IMG}/vsol-2.png`, `${IMG}/vsol-1.png`, `${IMG}/vsol-3.png`],
  },
};
