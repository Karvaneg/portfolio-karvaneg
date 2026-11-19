import type { Project } from '@/types/project';

const IMG = '/images/projects';

export const kommit: Project = {
  id: 'kommit',
  ticketId: 'KARV-009',
  order: 2,
  title: 'Kommit',
  headline: 'Kommit — daily standup guidé par une IA',
  tagline:
    'Application de daily standup : on raconte sa journée à une IA, qui en tire un récap structuré.',
  status: 'in-progress',
  statusLabel: 'IN PROGRESS',
  period: '2026',
  role: 'Dev Agentique Fullstack',
  websites: ['https://kommit-frontend-dev-karvaneg.vercel.app/'],
  stack: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'BetterAuth', 'Groq'],
  stackEsquisses: ['React', 'Express', 'PostgreSQL', 'Groq'],
  labels: [{ text: 'fullstack' }, { text: 'llm' }, { text: 'ai-tooling', accent: true }],
  summary:
    "Application web de daily standup : l'utilisateur décrit ses progrès, ses blocages et ce qu'il prévoit, une IA mène la conversation puis produit un récap structuré enregistré au jour près. Front React, API Express, base PostgreSQL. Concept et maquettes de ViDev, développement et enrichissements par moi-même.",
  description: [
    "Kommit transforme le daily standup en une courte conversation avec une IA. On écrit librement ce qu'on a fait, ce qui bloque et ce qu'on va faire ; l'IA pose les questions qui manquent, puis rédige un récap en trois parties : hier, blocages, à venir. On le valide, ou on le complète avant de le valider.",
    "Chaque récap validé est enregistré pour la journée, et un calendrier sur l'année montre d'un coup d'œil les jours où le daily a été fait. Un clic sur une case affiche le résumé de ce jour-là. Le concept et les maquettes viennent de ViDev ; j'ai développé l'application et l'ai enrichie.",
    "J'en ai profité pour mettre en place un workflow d'agents IA : des agents spécialisés planifient les tests, les écrivent avant le code, transforment les maquettes en composants et relisent chaque ticket avant sa mise en ligne.",
    'Le projet est encore en cours : la version en ligne est une préproduction.',
  ],
  impact: 'Front + API + IA conversationnelle, développés en test-first',
  impactEsquisses: 'Un daily en conversation, un récap clair à la fin.',
  aiTooling:
    "LLM servi par Groq pour mener la conversation et produire le récap, et un workflow Claude Code outillé (agents de planification des tests, d'écriture des tests et de review) pour développer ticket par ticket.",
  shots: [
    {
      src: `${IMG}/kommit-accueil.png`,
      caption: 'accueil · lancer le daily',
      alt: "Page d'accueil de Kommit : « Prêt(e) pour ton daily standup ? », zone de saisie des progrès, blocages et prévisions, bouton « Lancer le daily ».",
    },
    {
      src: `${IMG}/kommit-inscription.png`,
      caption: 'inscription',
      alt: 'Kommit, formulaire de création de compte : prénom, email et mot de passe.',
    },
    {
      src: `${IMG}/kommit-connecte.png`,
      caption: 'accueil connecté · saisie du daily',
      alt: "Kommit une fois connecté : « Ton daily du jour est déjà renseigné, Marie ! », saisie d'un nouveau daily et calendrier annuel avec les jours renseignés en vert.",
    },
    {
      src: `${IMG}/kommit-daily.png`,
      caption: 'daily · conversation et récap',
      alt: "Kommit, fenêtre « Daily Standup Assistant » : conversation avec l'IA puis récap du daily en trois parties (Hier, Blocages, À venir), avec les boutons pour valider ou compléter.",
    },
    {
      src: `${IMG}/kommit-resume-jour.png`,
      caption: "résumé d'un jour · depuis le calendrier",
      alt: 'Kommit, résumé du daily du jeudi 19 novembre 2026 ouvert depuis une case du calendrier : Hier, Blocages, À venir.',
    },
  ],
  caseStudy: {
    tagline: 'Raconter sa journée en quelques lignes, repartir avec un récap structuré.',
    facts: [
      { label: 'Année', value: '2026' },
      { label: 'Rôle', value: 'Dev agentique fullstack' },
      { label: 'Statut', value: 'En cours · préprod en ligne' },
      { label: 'Concept & maquettes', value: 'ViDev' },
    ],
    sections: [
      {
        title: 'Le concept',
        body: [
          "Le daily standup tient en trois questions : qu'as-tu fait, qu'est-ce qui te bloque, que vas-tu faire ? Kommit les pose sous forme de conversation avec une IA, puis garde une trace propre de chaque jour. Le concept et les maquettes sont de ViDev ; j'ai développé l'application et ajouté mes propres enrichissements.",
        ],
      },
      {
        title: "Ce que j'ai construit",
        body: [
          "Un front React (Vite, TypeScript, Tailwind CSS, shadcn/ui) et une API Express séparée, avec PostgreSQL hébergé sur Neon et Prisma comme ORM. L'authentification repose sur BetterAuth, et toutes les données entrantes sont validées avec Zod. Le front est déployé sur Vercel et l'API sur Render ; un cronjob l'appelle régulièrement pour qu'elle ne se mette pas en veille entre deux utilisations.",
          "La conversation est menée par un LLM servi par Groq. Seul le récap validé est enregistré, jamais les messages échangés. La règle « un daily par jour » est garantie par la base de données elle-même, pour qu'un second onglet ne puisse pas créer de doublon.",
        ],
      },
      {
        title: "Un workflow d'agents IA",
        body: [
          "J'ai profité de ce projet pour mettre en place un workflow complet d'agents IA avec Claude Code, versionné dans le dossier .claude/ de chaque dépôt. Il s'organise en quatre briques :",
          'Des agents spécialisés : test-planner classe les critères d’acceptation en tests unitaires, mixtes ou manuels ; unit-test-writer, smoke-test-writer et e2e-test-writer écrivent les tests avant le code ; mockup-code-fetcher et mockup-flow-describer transforment une maquette en composants ; code-reviewer et responsive-reviewer relisent le résultat.',
          "Des skills qui enchaînent les étapes d'un ticket : start-ticket, write-ui, write-tests, write-code, open-pr, merge-pr et ship, ainsi que setup-ci et setup-cd pour l'intégration et le déploiement continus.",
          'Des règles propres au projet (nommage, fichiers, composants UI, boutons, icônes, commentaires, tests, passage de la maquette Figma au code) et des hooks qui lancent automatiquement le lint et la vérification des imports.',
          'Chaque ticket suit ainsi le même parcours, de la maquette à la pull request, avec des tests écrits avant le code et lancés avec Vitest et Playwright.',
        ],
      },
    ],
  },
  esquisses: {
    rotation: '2.5deg',
    background: '#e6eef9',
    accent: '#1f6fd1',
    cardImage: `${IMG}/kommit-accueil.png`,
    heroImage: `${IMG}/kommit-accueil.png`,
    gallery: [
      `${IMG}/kommit-inscription.png`,
      `${IMG}/kommit-connecte.png`,
      `${IMG}/kommit-daily.png`,
      `${IMG}/kommit-resume-jour.png`,
    ],
  },
};
