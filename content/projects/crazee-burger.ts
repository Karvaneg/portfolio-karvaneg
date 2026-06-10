import type { Project } from '@/types/project';

const IMG = '/images/projects';

export const crazeeBurger: Project = {
  id: 'crazee-burger',
  ticketId: 'KARV-005',
  order: 4,
  title: 'Crazee-Burger',
  headline: 'Crazee-Burger — application React avancée',
  tagline: 'Application React avancée — montée en compétences React & TypeScript chez ViDev.',
  status: 'shipped',
  statusLabel: 'SHIPPED',
  period: '2024',
  role: 'Dev Frontend',
  duration: '4 mois',
  stack: ['React', 'TypeScript', 'Styled Components'],
  labels: [{ text: 'react' }, { text: 'typescript' }, { text: 'frontend', accent: true }],
  metaLabel: 'Focus',
  summary:
    "Application complète de gestion de commandes pour fast-food, développée lors de ma montée en compétences React & TypeScript chez ViDev : mode admin / client, gestion de panier, persistance d'état et design system maison.",
  description: [
    "Application complète de gestion de commandes pour fast-food, développée dans le cadre de ma montée en compétences React & TypeScript en entreprise avec ViDev.",
    "Mode admin / mode client, gestion de panier, persistance d'état, design system maison. Pas de pastiche fast-food kitsch — juste une interface qui fonctionne.",
  ],
  impact: 'Maîtrise consolidée de React/TypeScript en contexte production',
  impactCarnet: 'Maîtrise consolidée de React/TypeScript en contexte production.',
  aiTooling:
    'Mode admin & client, panier persistant et un design system maison — une interface qui fonctionne, sans pastiche fast-food kitsch.',
  shots: [
    {
      src: `${IMG}/crazee-burger.webp`,
      caption: 'application · interface',
      alt: 'Application Crazee-Burger — interface de commande fast-food développée en React/TypeScript.',
    },
  ],
  caseStudy: {
    tagline: 'Montée en compétences React & TypeScript, en conditions de production.',
    facts: [
      { label: 'Période', value: '2024' },
      { label: 'Contexte', value: 'ViDev · montée en compétences' },
      { label: 'Rôle', value: 'Dev frontend' },
      { label: 'Stack', value: 'React · TypeScript' },
    ],
    sections: [
      {
        title: 'Le contexte',
        body: [
          'Application complète de gestion de commandes pour fast-food, développée dans le cadre de ma montée en compétences React & TypeScript en entreprise avec ViDev.',
        ],
      },
      {
        title: "Ce que j'ai construit",
        body: [
          "Mode admin / mode client, gestion de panier, persistance d'état et un design system maison. Pas de pastiche fast-food kitsch — juste une interface qui fonctionne.",
        ],
      },
    ],
  },
  carnet: {
    rotation: '-2deg',
    background: '#f3ede2',
    accent: '#4a5d3a',
    cardImage: `${IMG}/crazee-burger.webp`,
    heroImage: `${IMG}/crazee-burger.webp`,
    gallery: [],
  },
};
