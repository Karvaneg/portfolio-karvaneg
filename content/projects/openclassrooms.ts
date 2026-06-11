import type { Project } from '@/types/project';

const IMG = '/images/projects';

export const openclassrooms: Project = {
  id: 'openclassrooms',
  ticketId: 'KARV-007',
  order: 7,
  title: 'Formation OpenClassrooms',
  headline: 'Formation OpenClassrooms — fondations fullstack',
  tagline: 'Six projets professionnalisants — fondations fullstack solides.',
  status: 'certified',
  statusLabel: 'CERTIFIÉE',
  period: 'Mars — Nov. 2022',
  role: 'Développeuse en Formation',
  duration: '9 mois',
  stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
  labels: [{ text: 'formation' }, { text: 'fullstack' }, { text: 'certifiée', accent: true }],
  metaLabel: 'Focus',
  summary:
    'Formation intensive en développement web, six projets professionnalisants couvrant tout le stack, validée avec la certification Développeur Intégrateur Web (Niveau 5).',
  description: [
    "Formation intensive en développement web couvrant l'ensemble du stack, validée avec la certification professionnelle Développeur Intégrateur Web (Niveau 5).",
    'Tous les projets validés au premier passage. Six projets pros : front statique, JS interactif, React, API Node/Express, MongoDB, et tests/sécurité.',
    "Deux d'entre eux résument bien la progression : Kanap, un site e-commerce de canapés en JavaScript vanilla (gestion du panier, appels API, formulaire validé) ; et Groupomania, un réseau social d'entreprise fullstack (React, Node/Express, MongoDB) avec authentification, fil d'actualité, publications et likes.",
  ],
  impact:
    'Certification Développeur Intégrateur Web (Niveau 5) · tous projets validés au 1er passage',
  impactEsquisses: 'Certification Développeur Intégrateur Web (Niveau 5).',
  aiTooling:
    "Six projets pros — du front statique à l'API Node/MongoDB. Tous validés au premier passage.",
  shots: [
    {
      src: `${IMG}/openclassrooms-kanap.jpg`,
      caption: 'Kanap · e-commerce (JS vanilla)',
      alt: "Projet Kanap — site e-commerce de canapés en JavaScript vanilla : page d'accueil et catalogue produits.",
    },
    {
      src: `${IMG}/openclassrooms-groupomania.png`,
      caption: 'Groupomania · réseau social (fullstack)',
      alt: "Projet Groupomania — réseau social d'entreprise fullstack React/Node/MongoDB : fil d'actualité, publications et likes.",
    },
  ],
  caseStudy: {
    tagline: "Six projets, tout le stack — les fondations d'une pratique fullstack.",
    facts: [
      { label: 'Période', value: 'Mars — Nov. 2022' },
      { label: 'Statut', value: 'Certifiée · Niveau 5' },
      { label: 'Projets', value: '6 · tous validés au 1er passage' },
      { label: 'Stack', value: 'JS · React · Node · MongoDB' },
    ],
    sections: [
      {
        title: 'Le contexte',
        body: [
          "Formation intensive en développement web couvrant l'ensemble du stack, validée avec la certification professionnelle Développeur Intégrateur Web (Niveau 5). Tous les projets validés au premier passage : front statique, JS interactif, React, API Node/Express, MongoDB, et tests/sécurité.",
        ],
      },
      {
        title: 'Kanap — e-commerce JS vanilla',
        body: [
          'Un site e-commerce de canapés en JavaScript vanilla : gestion du panier, appels API, et formulaire de commande entièrement validé côté client.',
        ],
      },
      {
        title: 'Groupomania — réseau social fullstack',
        body: [
          "Un réseau social d'entreprise fullstack (React, Node/Express, MongoDB) avec authentification, fil d'actualité, publications et système de likes.",
        ],
      },
    ],
  },
  esquisses: {
    rotation: '2deg',
    background: '#ebe3d4',
    accent: '#1d2b5c',
    cardImage: `${IMG}/openclassrooms-kanap.jpg`,
    heroImage: `${IMG}/openclassrooms-kanap.jpg`,
    gallery: [`${IMG}/openclassrooms-kanap.jpg`, `${IMG}/openclassrooms-groupomania.png`],
  },
};
