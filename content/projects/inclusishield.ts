import type { Project } from '@/types/project';
import { profile } from '@/content/profile';

const IMG = '/images/projects';

export const inclusishield: Project = {
  id: 'inclusishield',
  ticketId: 'KARV-006',
  order: 3,
  title: 'InclusiShield',
  headline: "InclusiShield — SaaS d'audit d'accessibilité piloté par l'IA",
  tagline: "SaaS d'audit d'accessibilité numérique automatisé par l'IA.",
  status: 'growing',
  statusLabel: 'GROWING · Vn → Vn+1',
  statusNote: 'V1 (PoC) livrée en 20 j · V2 en cours',
  period: '2026',
  role: 'Founder & Lead Dev',
  website: 'https://inclusishield.fr/',
  stack: ['Playwright', 'Browserless', 'Redis', 'Upstash', 'Vercel', 'LLM'],
  stackEsquisses: ['Next.js', 'TypeScript', 'Redis', 'Playwright', 'Stripe'],
  labels: [{ text: 'saas' }, { text: 'fullstack' }, { text: 'ai-tooling', accent: true }],
  summary:
    "Plateforme SaaS d'audit d'accessibilité numérique automatisé : un crawler headless scanne un site, l'IA transforme les diagnostics techniques en recommandations stratégiques, le tout conforme WCAG 2.2 AA et RGAA 4.1.2. Conçu en un sprint de 20 jours pour être monétisé et industrialisé.",
  description: [
    "Plateforme SaaS qui scanne les sites web et identifie automatiquement les problèmes d'accessibilité, transformant les diagnostics techniques en recommandations stratégiques de haute précision.",
    "Marque ma transition vers l'écosystème Next.js, avec une infrastructure cloud complète (Redis pour le cache, Playwright pour le crawling, Stripe pour la facturation). L'IA générative est intégrée au cœur du workflow grâce à la certification Google Prompting Essentials.",
    "Avec du recul, cette V1 était une preuve de concept : la chaîne fonctionnait de bout en bout, mais pas encore avec la fiabilité qu'exigent des cas réels. Une V2 complète est en cours, plus précise, pensée pour les développeurs et capable de suivre l'accessibilité d'un site dans le temps.",
    'Je recherche 3 à 5 testeurs (développeurs, leads tech ou directeurs d’agence) pour éprouver cette V2 en avant-première sur des cas réels, dès qu’elle sera prête.',
  ],
  descriptionLink: { label: 'Me contacter sur LinkedIn', url: profile.socials.linkedin.url },
  impact: 'V1 (PoC) en prod en 20 jours · V2 en cours de développement',
  impactEsquisses:
    'Une V1 en 20 jours pour prouver que la chaîne fonctionne, une V2 en cours pour la rendre fiable.',
  aiTooling:
    "Modèles LLM en cœur de produit — traduction des diagnostics techniques bruts en recommandations actionnables, + Claude Code pour l'industrialisation.",
  shots: [
    {
      src: `${IMG}/inclusishield-v2.png`,
      caption: 'V2 · en cours de développement',
      alt: "Page d'accueil de la V2 d'InclusiShield : audit RGAA 4.1.2 et WCAG 2.2 AA, aperçu d'un rapport avec taux de conformité, violations critiques et correctifs de code prêts.",
    },
    {
      src: `${IMG}/inclusishield-home.png`,
      caption: 'V1 · accueil',
      alt: "Page d'accueil de la V1 d'InclusiShield : thème sombre, champ d'URL à scanner pour un audit WCAG 2.2 AA.",
    },
  ],
  caseStudy: {
    tagline:
      "Audit d'accessibilité automatisé : du diagnostic technique à la recommandation stratégique.",
    facts: [
      { label: 'Délai', value: '20 jours' },
      { label: 'Équipe', value: 'Solo · de A à Z' },
      { label: 'Statut', value: 'V1 en prod · V2 en cours' },
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
          'Une architecture cloud orchestrant Playwright via Browserless pour le crawl headless des pages, Redis (Upstash) pour la file de traitement et le cache, le tout déployé sur Vercel.',
          'Le moteur automatise la vérification de conformité aux normes WCAG 2.2 AA et RGAA 4.1.2, puis génère des rapports priorisés — du diagnostic brut à la feuille de route de remédiation.',
        ],
      },
      {
        title: "Le rôle de l'IA",
        body: [
          "Des modèles LLM sont intégrés au cœur du produit : ils transforment des diagnostics techniques (souvent illisibles pour un non-spécialiste) en recommandations stratégiques claires et priorisées. L'IA n'est pas un gadget — c'est la couche de valeur qui rend l'audit actionnable.",
        ],
      },
      {
        title: 'La V1 : une preuve de concept',
        body: [
          "Un produit complet, construit en 20 jours pour être monétisé et industrialisé, de l'architecture cloud au paiement, en passant par le moteur d'audit et l'interface. Avec du recul, c'était une preuve de concept : elle montrait que la chaîne fonctionnait d'un bout à l'autre, mais ses limites apparaissaient dès qu'on cherchait une fiabilité sans faille sur des cas réels.",
        ],
      },
      {
        title: 'La V2 en cours',
        body: [
          'Plutôt que de masquer ces faiblesses, je reconstruis le produit. La V2 a quatre priorités :',
          'Fiabilité et précision : éliminer les faux positifs et les alertes génériques pour ne remonter que les vrais points de blocage RGAA / WCAG 2.2.',
          'Par des devs, pour des devs : remplacer les rapports abstraits par de vrais diffs de code, propres, testables et directement applicables dans les composants.',
          'Suivi dans le temps : historiser les scans pour mesurer la santé d’accessibilité d’un site au fil des sprints et des releases.',
          "Expérience produit repensée : une interface claire, conçue pour s'intégrer au workflow de dev plutôt que d'encombrer une boîte mail.",
          'Je recherche 3 à 5 testeurs (développeurs, leads tech ou directeurs d’agence) pour éprouver cette V2 en avant-première sur des cas réels, dès qu’elle sera prête.',
        ],
        link: { label: 'Me contacter sur LinkedIn', url: profile.socials.linkedin.url },
      },
    ],
  },
  esquisses: {
    rotation: '-3deg',
    background: '#0c1730',
    accent: '#1d2b5c',
    lightFrame: true,
    cardImage: `${IMG}/inclusishield-v2.png`,
    heroImage: `${IMG}/inclusishield-v2.png`,
    gallery: [`${IMG}/inclusishield-v2.png`, `${IMG}/inclusishield-home.png`],
  },
};
