import type { Project } from '@/types/project';

const IMG = '/images/projects';

export const inclusishield: Project = {
  id: 'inclusishield',
  ticketId: 'KARV-002',
  order: 1,
  title: 'InclusiShield',
  headline: "InclusiShield — SaaS d'audit d'accessibilité piloté par l'IA",
  tagline: "SaaS d'audit d'accessibilité numérique automatisé par l'IA.",
  status: 'shipped',
  statusLabel: 'SHIPPED',
  statusNote: 'V1 livrée en 20 j · V2 en cours',
  period: '2026',
  role: 'Founder & Lead Dev',
  website: 'https://inclusishield.fr/',
  stack: ['Playwright', 'Browserless', 'Redis', 'Upstash', 'Vercel', 'LLM'],
  stackCarnet: ['Next.js', 'TypeScript', 'Redis', 'Playwright', 'Stripe'],
  labels: [{ text: 'saas' }, { text: 'fullstack' }, { text: 'ai-tooling', accent: true }],
  summary:
    "Plateforme SaaS d'audit d'accessibilité numérique automatisé : un crawler headless scanne un site, l'IA transforme les diagnostics techniques en recommandations stratégiques, le tout conforme WCAG 2.2 AA et RGAA 4.1.2. Conçu, monétisé et industrialisé en un sprint de 20 jours.",
  description: [
    "Plateforme SaaS qui scanne les sites web et identifie automatiquement les problèmes d'accessibilité, transformant les diagnostics techniques en recommandations stratégiques de haute précision.",
    "Marque ma transition vers l'écosystème Next.js, avec une infrastructure cloud complète (Redis pour le cache, Playwright pour le crawling, Stripe pour la facturation). L'IA générative est intégrée au cœur du workflow grâce à la certification Google Prompting Essentials.",
  ],
  impact: 'Produit complet, monétisé & en prod en 20 jours',
  impactCarnet: 'Diagnostics techniques traduits en recommandations stratégiques actionnables.',
  aiTooling:
    "Modèles LLM en cœur de produit — traduction des diagnostics techniques bruts en recommandations actionnables, + Claude Code pour l'industrialisation.",
  shots: [
    {
      src: `${IMG}/inclusishield-home.png`,
      caption: "audit d'accessibilité · accueil",
      alt: "Page d'accueil InclusiShield — audit d'accessibilité numérique automatisé piloté par l'IA.",
    },
  ],
  caseStudy: {
    tagline:
      "Audit d'accessibilité automatisé : du diagnostic technique à la recommandation stratégique.",
    facts: [
      { label: 'Délai', value: '20 jours' },
      { label: 'Équipe', value: 'Solo · de A à Z' },
      { label: 'Statut', value: 'En prod · monétisé' },
      { label: 'Normes', value: 'WCAG 2.2 AA · RGAA 4.1.2' },
    ],
    sections: [
      {
        title: 'Le contexte',
        body: [
          "L'accessibilité numérique est devenue une obligation légale, mais les audits manuels restent lents et coûteux. InclusiShield répond à ce besoin : un SaaS qui automatise l'audit de conformité et rend les résultats exploitables par des équipes non-expertes.",
        ],
      },
      {
        title: "Ce que j'ai construit",
        body: [
          "Une architecture cloud orchestrant Playwright via Browserless pour le crawl headless des pages, Redis (Upstash) pour la file de traitement et le cache, le tout déployé sur Vercel.",
          "Le moteur automatise la vérification de conformité aux normes WCAG 2.2 AA et RGAA 4.1.2, puis génère des rapports priorisés — du diagnostic brut à la feuille de route de remédiation.",
        ],
      },
      {
        title: "Le rôle de l'IA",
        body: [
          "Des modèles LLM sont intégrés au cœur du produit : ils transforment des diagnostics techniques (souvent illisibles pour un non-spécialiste) en recommandations stratégiques claires et priorisées. L'IA n'est pas un gadget — c'est la couche de valeur qui rend l'audit actionnable.",
        ],
      },
      {
        title: 'Résultat',
        body: [
          "Un produit complet, monétisé et industrialisé en un sprint record de 20 jours — de l'architecture cloud au paiement, en passant par le moteur d'audit et l'interface. La preuve qu'un développement assisté par l'IA permet de livrer un vrai SaaS en solo, vite et proprement.",
        ],
      },
    ],
  },
  carnet: {
    rotation: '-3deg',
    background: '#0c1730',
    accent: '#1d2b5c',
    lightFrame: true,
    cardImage: `${IMG}/inclusishield-home.png`,
    heroImage: `${IMG}/inclusishield-mockup.png`,
    gallery: [],
  },
};
