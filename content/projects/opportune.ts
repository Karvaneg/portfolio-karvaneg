import type { Project } from '@/types/project';

const IMG = '/images/projects';

export const opportune: Project = {
  id: 'opportune',
  ticketId: 'KARV-008',
  order: 1,
  title: 'Opportune',
  headline: 'Opportune : suivi de candidatures local-first, assisté par une IA locale',
  tagline:
    'Application de bureau open-source pour centraliser ses candidatures, avec une IA 100 % locale.',
  status: 'shipped',
  statusLabel: 'SHIPPED · v1.1.0',
  period: 'Oct. – nov. 2026',
  role: 'Conception & Dev',
  websites: ['https://github.com/Karvaneg/Opportune'],
  stack: ['Tauri', 'React', 'TypeScript', 'Python', 'SQLite', 'Ollama', 'GitHub Actions'],
  stackEsquisses: ['React', 'Tauri', 'Python', 'SQLite', 'Ollama'],
  labels: [{ text: 'desktop' }, { text: 'open-source' }, { text: 'local-first', accent: true }],
  summary:
    "Application de bureau open-source qui centralise le suivi des candidatures et s'appuie sur un LLM local pour scorer les offres et aider à rédiger les lettres. Toutes les données restent sur la machine : SQLite en local, modèle servi par Ollama, fonctionnement 100 % hors-ligne.",
  description: [
    "Chercher un emploi, c'est jongler entre des dizaines d'offres, des lettres à écrire et des relances à ne pas oublier. Opportune rassemble tout ça dans une seule application de bureau, qui s'installe en un double-clic sur Windows ou Linux.",
    "Son assistant IA tourne entièrement sur l'ordinateur : il note chaque offre selon le profil et le CV, et propose un premier jet de lettre de motivation. Aucune donnée personnelle ne quitte la machine, et l'application fonctionne sans connexion.",
    "Un espace Démo, isolé des vraies données, permet de découvrir l'outil sans rien saisir.",
  ],
  impact: 'Installeurs Windows & Linux · 0 donnée envoyée hors de la machine',
  impactEsquisses: 'Une IA qui aide à postuler, sans jamais voir passer vos données sur Internet.',
  aiTooling:
    'LLM local via Ollama (CPU) : scoring sémantique des offres face au profil et aide à la rédaction des lettres, sans aucun appel à un service externe.',
  shots: [
    {
      src: `${IMG}/opportune-logo-dark.png`,
      caption: "logo · saisir l'occasion au vol",
      alt: "Logo d'Opportune, avec sa baseline « Saisir l'occasion au vol. ».",
    },
    {
      src: `${IMG}/opportune-welcome.png`,
      caption: 'choix de l’espace · démo ou personnel',
      alt: 'Opportune, écran de bienvenue : choix entre « Mon espace » pour ses vraies candidatures et « Démo », un exemple isolé des données personnelles.',
    },
    {
      src: `${IMG}/opportune-guide.png`,
      caption: 'guide · nouveau profil en 3 étapes',
      alt: "Opportune, accueil d'un nouveau profil : guide en trois étapes (ajouter son CV, récupérer des offres, lancer une analyse) et ajout optionnel des clés Adzuna.",
    },
    {
      src: `${IMG}/opportune-accueil.png`,
      caption: 'cockpit · synthèse des candidatures',
      alt: "Opportune, écran d'accueil : compteurs d'offres à étudier, à postuler, postulées, entretiens et relances, qualité du score et dernières activités.",
    },
    {
      src: `${IMG}/opportune-profil.png`,
      caption: 'profil · import du CV',
      alt: 'Opportune, page Profil : import du CV en PDF, compétences et parcours extraits.',
    },
    {
      src: `${IMG}/opportune-offres.png`,
      caption: "catalogue d'offres scorées",
      alt: "Opportune, page Offres : lancement d'une analyse, ajout d'une offre par texte ou URL, et bibliothèque d'offres notées sur 100.",
    },
    {
      src: `${IMG}/opportune-recommandation.png`,
      caption: 'lettre générée · validation',
      alt: "Opportune, fiche d'une offre : lettre de motivation générée par l'IA locale, boutons Approuver, Rejeter, Reporter et suivi de la candidature.",
    },
    {
      src: `${IMG}/opportune-reglages.png`,
      caption: 'réglages · clés Adzuna & flux RSS',
      alt: 'Opportune, page Réglages : saisie des clés Adzuna et gestion des flux RSS d’offres.',
    },
  ],
  caseStudy: {
    tagline:
      "Suivre ses candidatures et se faire aider par l'IA, sans que ses données quittent l'ordinateur.",
    facts: [
      { label: 'Période', value: 'Oct. – nov. 2026' },
      { label: 'Équipe', value: 'Solo · de A à Z' },
      { label: 'Plateformes', value: 'Windows (.exe/.msi) · Linux (.deb/.AppImage)' },
      { label: 'Licence', value: 'Open-source · MIT' },
    ],
    sections: [
      {
        title: 'Le besoin',
        body: [
          "Une recherche d'emploi produit beaucoup d'éléments éparpillés : offres, CV, lettres, relances. Les outils en ligne qui les centralisent demandent d'envoyer ses données personnelles à un service tiers. Opportune fait le choix inverse : tout est stocké et traité sur la machine de l'utilisateur.",
        ],
      },
      {
        title: 'Distribution desktop',
        body: [
          "L'application est empaquetée avec Tauri, qui produit des installeurs légers et autonomes : .exe et .msi pour Windows, .deb et .AppImage pour Linux. L'utilisateur l'installe en un double-clic, sans ouvrir de terminal ni installer de dépendances.",
        ],
      },
      {
        title: 'Interface & design system',
        body: [
          "Le dashboard est construit avec React 18, Vite et Tailwind CSS, sur un design system à jetons sémantiques qui gère automatiquement les modes clair et sombre. Les critères d'accessibilité sont appliqués à chaque composant.",
        ],
      },
      {
        title: 'Local-first & confidentialité',
        body: [
          "Toutes les données sont persistées dans une base SQLite locale. Le modèle de langage est servi par Ollama sur le processeur, embarqué avec l'application. Aucune donnée personnelle n'est envoyée sur le réseau, et l'application fonctionne entièrement hors-ligne.",
        ],
      },
      {
        title: 'Moteur métier & orchestration IA',
        body: [
          "La logique métier est écrite en Python et découplée de l'interface. Un orchestrateur (Hermes) coordonne l'ingestion de flux RSS, les connecteurs d'offres d'emploi, le parsing du CV en PDF et le scoring multicritère des offres face au profil.",
        ],
      },
      {
        title: "Rigueur d'ingénierie",
        body: [
          'Le développement est guidé par les tests : pytest pour le back, Vitest pour le front. Une CI GitHub Actions valide les builds et les tests sur chaque pull request.',
          "Le dépôt est documenté pour accueillir des contributions : ADR (Architecture Decision Records, qui consignent chaque choix d'architecture et sa raison), cartographie du logiciel et guide de contribution.",
        ],
      },
    ],
  },
  esquisses: {
    rotation: '-3deg',
    background: '#e8e6f7',
    accent: '#4f46e5',
    cardImage: `${IMG}/opportune-logo.png`,
    heroImage: `${IMG}/opportune-accueil.png`,
    gallery: [`${IMG}/opportune-offres.png`, `${IMG}/opportune-guide.png`],
  },
};
