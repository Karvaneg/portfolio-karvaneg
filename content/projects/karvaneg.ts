import type { Project } from '@/types/project';

const IMG = '/images/projects';

export const karvaneg: Project = {
  id: 'karvaneg',
  ticketId: 'KARV-005',
  order: 3,
  title: 'Karvaneg',
  headline: 'Karvaneg — le portfolio que vous regardez',
  tagline: "Portfolio professionnel — l'objet que vous regardez actuellement.",
  status: 'shipped',
  statusLabel: 'SHIPPED',
  period: '2026',
  role: 'Designer & Dev',
  duration: '2026',
  stack: ['Next.js', 'Tailwind CSS', 'Vercel'],
  labels: [{ text: 'portfolio' }, { text: 'design' }, { text: 'a11y', accent: true }],
  metaLabel: 'Focus',
  summary:
    "Un portfolio pensé comme un objet en soi plutôt qu'un CV en ligne. Deux versions, un même socle : « Carnet d'esquisses » et « Carnet technique ».",
  description: [
    "Un portfolio qui se voulait un objet en soi, plutôt qu'un CV en ligne. Direction éditoriale, typographie expressive, animations sobres mais présentes.",
    "Il en existe d'ailleurs deux versions, pensées pour deux publics : une version « Carnet d'esquisses », chaleureuse et tactile, qui assume le côté atelier et raconte les projets comme des pages de carnet ; et une version « Carnet technique », plus sobre et structurée façon terminal, qui parle directement aux profils techniques et aux recruteurs pressés. Même contenu, même socle — deux manières d'entrer dans le travail selon qui regarde.",
    "Construit avec une attention particulière à la performance et à l'accessibilité — parce que prêcher l'a11y dans InclusiShield et avoir un portfolio inaccessible serait, disons, gênant.",
  ],
  impact: 'Lighthouse 100 / 100 / 100 / 100',
  impactEsquisses: 'Lighthouse 100/100/100/100. On a ses standards.',
  aiTooling:
    "Deux déclinaisons d'un même contenu — l'une chaleureuse façon atelier, l'autre sobre façon terminal — selon le public qui regarde.",
  shots: [
    {
      src: `${IMG}/karvaneg-technique.png`,
      caption: 'version carnet technique',
      alt: 'Portfolio Karvaneg, version Carnet technique — présentation sobre et structurée façon terminal.',
    },
    {
      src: `${IMG}/karvaneg-fullstack.png`,
      caption: 'présentation · fullstack',
      alt: 'Portfolio Karvaneg — page de présentation « Développeuse Fullstack & AI-Augmented Engineer ».',
    },
    {
      src: `${IMG}/karvaneg-marie.png`,
      caption: "version carnet d'esquisses",
      alt: "Portfolio Karvaneg, version Carnet d'esquisses — présentation chaleureuse et tactile de Marie Le Carvennec.",
    },
  ],
  caseStudy: {
    tagline: "Deux carnets, un même travail : à chaque public sa porte d'entrée.",
    facts: [
      { label: 'Année', value: '2026' },
      { label: 'Rôle', value: 'Design & dev' },
      { label: 'Versions', value: "Carnet d'esquisses · Carnet technique" },
      { label: 'Lighthouse', value: '100 / 100 / 100 / 100' },
    ],
    sections: [
      {
        title: "L'intention",
        body: [
          "Un portfolio qui se voulait un objet en soi, plutôt qu'un CV en ligne. Direction éditoriale, typographie expressive, animations sobres mais présentes.",
        ],
      },
      {
        title: 'Deux versions, deux publics',
        body: [
          "Il en existe deux versions, pensées pour deux publics : une version « Carnet d'esquisses », chaleureuse et tactile, qui assume le côté atelier et raconte les projets comme des pages de carnet ; et une version « Carnet technique », plus sobre et structurée façon terminal, qui parle directement aux profils techniques et aux recruteurs pressés. Même contenu, même socle — deux manières d'entrer dans le travail selon qui regarde.",
        ],
      },
      {
        title: 'Performance & accessibilité',
        body: [
          "Construit avec une attention particulière à la performance et à l'accessibilité — parce que prêcher l'a11y dans InclusiShield et avoir un portfolio inaccessible serait, disons, gênant.",
        ],
      },
    ],
  },
  esquisses: {
    rotation: '4deg',
    background: '#ebe3d4',
    accent: '#e0411b',
    cardImage: `${IMG}/karvaneg-marie.png`,
    heroImage: `${IMG}/karvaneg-technique.png`,
    gallery: [`${IMG}/karvaneg-marie.png`, `${IMG}/karvaneg-fullstack.png`],
  },
};
