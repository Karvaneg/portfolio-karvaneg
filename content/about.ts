import type { AboutContent } from '@/types/about';

/**
 * Narratif « À propos » du carnet d'esquisses : paragraphes, citation de
 * recommandation et blocs hero-meta. Extrait de la maquette `app-v2.jsx`.
 */
export const about: AboutContent = {
  paragraphs: [
    [
      { text: 'Développeuse agentique fullstack et ' },
      { text: 'Forward Deployed Engineer', accent: true },
      {
        text: " : je travaille au plus près du métier, du cadrage jusqu'à la mise en production, et je livre des applications robustes, testées et maintenables en m'appuyant sur des workflows d'agents IA.",
      },
    ],
    [
      { text: 'Deux ans au ' },
      { text: 'Conservatoire Botanique National Sud-Atlantique', accent: true },
      {
        text: " : refonte du site institutionnel et suite de portails scientifiques sur un socle Symfony/Twig commun, design system décliné par portail, console d'administration unique, PostgreSQL, Docker, GitLab CI/CD et accessibilité WCAG.",
      },
    ],
    [
      { text: 'Depuis, je conçois mes propres produits de bout en bout : ' },
      { text: 'Opportune,', accent: true },
      {
        text: " application de bureau open-source où une IA locale aide à suivre ses candidatures sans qu'aucune donnée ne quitte la machine ; Kommit, un daily standup guidé par une IA ; InclusiShield, un SaaS d'audit d'accessibilité ; et Astro Bassin, une plateforme de réservation pour une cliente.",
      },
    ],
    [
      { text: 'Ma méthode : ' },
      { text: 'des agents IA encadrés par des tests.', accent: true },
      {
        text: " Avec Claude Code, je versionne des skills, des règles et des agents spécialisés qui planifient les tests, les écrivent avant le code et relisent chaque ticket. L'IA accélère la livraison, mais l'architecture, les tests et la revue restent sous mon contrôle.",
      },
    ],
    [
      { text: 'Avant le code, dix ans de diététique et trois ans à diriger une production : ' },
      { text: "l'écoute et la rigueur", accent: true },
      {
        text: " que j'apporte aujourd'hui à chaque projet. J'accorde une grande importance à l'accessibilité, à la lisibilité du code et à la documentation (ADR, guides de contribution) pour que l'équipe puisse reprendre le travail sans moi.",
      },
    ],
  ],
  quote: {
    text: "Marie, une collaboratrice compétente, investie, à l'écoute et ayant le goût des challenges professionnels qu'elle a su relever durant ses deux années au CBNSA. Avec un bel esprit d'équipe, elle a beaucoup apporté au Conservatoire et aux équipes. Chanceux seront ses futurs employeurs.",
    author: 'Coralie Pradel',
    role: 'Directrice générale des services',
  },
  heroMeta: [
    {
      label: '001 — Méthode',
      parts: [
        { text: 'Des agents IA, ' },
        { text: 'encadrés par des tests', emphasis: true },
        { text: ' écrits avant le code.' },
      ],
    },
    {
      label: '002 — Cœur de stack',
      parts: [
        { text: 'TypeScript', emphasis: true },
        { text: ', React, Node.js, Python et Symfony.' },
      ],
    },
    {
      label: '003 — Promesse',
      parts: [
        { text: 'Interfaces fiables, accessibles et ' },
        { text: 'pensées pour durer.', emphasis: true },
      ],
    },
  ],
};
