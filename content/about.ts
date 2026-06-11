import type { AboutContent } from '@/types/about';

/**
 * Narratif « À propos » du carnet d'esquisses : paragraphes, citation de
 * recommandation et blocs hero-meta. Extrait de la maquette `app-v2.jsx`.
 */
export const about: AboutContent = {
  paragraphs: [
    [
      { text: "Développeuse web passionnée par la conception d'" },
      { text: 'applications performantes, bien structurées et durables.', accent: true },
      { text: ' Mes premières lignes de code remontent à la fin des années 2000, en autodidacte.' },
    ],
    [
      { text: 'Deux ans au ' },
      { text: 'Conservatoire Botanique National Sud-Atlantique', accent: true },
      {
        text: ' — développement de portails thématiques, refonte du site institutionnel, backend Symfony et frontend Twig/TypeScript, optimisation PostgreSQL, pipelines GitLab CI/CD, conteneurisation Docker, standards WCAG, et participation à un design system pour harmoniser le visuel.',
      },
    ],
    [
      {
        text: 'Depuis, montée en compétences React & TypeScript chez ViDev (Crazee-Burger), exploration de React Native — et fondation d’',
      },
      { text: 'InclusiShield,', accent: true },
      {
        text: " SaaS d'audit d'accessibilité automatisé par l'IA, avec une infra cloud complète (Redis, Playwright, Stripe).",
      },
    ],
    [
      { text: 'Le moteur : ' },
      { text: 'la ténacité.', accent: true },
      {
        text: " J'accorde une grande importance à la lisibilité du code, à la clarté des interfaces, et à la qualité de la documentation. Le travail en équipe et l'envie d'apprendre sont au cœur de ma démarche.",
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
      label: '001 — Discipline',
      parts: [
        { text: 'Le ' },
        { text: 'clean code', emphasis: true },
        { text: ', même quand personne ne regarde.' },
      ],
    },
    {
      label: '002 — Cœur de stack',
      parts: [{ text: 'Symfony', emphasis: true }, { text: ', React et PostgreSQL.' }],
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
