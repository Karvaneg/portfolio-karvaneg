import type { Project } from '@/types/project';

const IMG = '/images/projects';

export const astroBassin: Project = {
  id: 'astro-bassin',
  ticketId: 'KARV-003',
  order: 2,
  title: 'Astro Bassin',
  headline: 'Astro Bassin — Site vitrine & plateforme de booking',
  tagline:
    'Site vitrine & plateforme de réservation pour une astrologue — booking, paiement et back-office, livrés en solo.',
  status: 'in-progress',
  statusLabel: 'IN PROGRESS',
  period: '2026 —',
  role: 'Conception & Dev Fullstack',
  duration: '2 mois · 2026',
  website: 'https://astrobassin.fr',
  stack: ['Astro', 'Supabase', 'Stripe', 'Resend', 'Vercel', 'GitLab CI'],
  labels: [{ text: 'client' }, { text: 'fullstack' }, { text: 'ai-tooling', accent: true }],
  summary:
    "Plateforme complète de réservation de créneaux online & présentiel pour une astrologue du Bassin d'Arcachon : paiement Stripe, emails transactionnels automatiques et dashboard admin. Livrée en 2 mois, seule, de A à Z.",
  description: [
    "Plateforme complète de réservation de créneaux en ligne et en présentiel pour une astrologue du Bassin d'Arcachon : paiement Stripe, emails transactionnels automatiques (Resend) et dashboard admin pour piloter réservations, commandes boutique et planning.",
    'Conçue, développée et déployée seule, de A à Z, en deux mois. Front Astro, back Supabase, intégration continue GitLab et déploiement sur Vercel.',
  ],
  impact: '2 emails captés sur le coming-soon, avant lancement public',
  impactEsquisses: "2 premiers leads captés sur le coming-soon, avant même l'ouverture publique.",
  aiTooling:
    'Claude Code — prompts chirurgicaux, optimisation des tokens, zéro hallucination en prod.',
  shots: [
    {
      src: `${IMG}/astrobassin-hero.png`,
      caption: 'site vitrine · accueil',
      alt: "Page d'accueil Astro Bassin — hero « Lisez les étoiles, éclairez votre chemin », réservation de consultations.",
    },
    {
      src: `${IMG}/astrobassin-tirages.png`,
      caption: 'les tirages · catalogue',
      alt: "Section Les Tirages d'Astro Bassin — choix du jeu de cartes (Planètes, Oracle magique, Sorciers) et bilan complet.",
    },
    {
      src: `${IMG}/astrobassin-admin.png`,
      caption: 'dashboard admin · preprod',
      alt: 'Dashboard admin Astro Bassin — preprod : KPIs boutique & consultations, dernières commandes et réservations.',
    },
    {
      src: `${IMG}/astrobassin-coming-soon.png`,
      caption: 'coming-soon · capture de leads',
      alt: "Page coming-soon Astro Bassin — capture d'emails avant lancement avec code de réduction.",
    },
  ],
  caseStudy: {
    tagline: 'Réservation, paiement et back-office complets — livrés en 2 mois, en solo.',
    facts: [
      { label: 'Délai', value: '2 mois' },
      { label: 'Équipe', value: 'Solo · de A à Z' },
      { label: 'Statut', value: 'Preprod' },
      { label: 'Rôle', value: 'Conception, dev & déploiement' },
    ],
    sections: [
      {
        title: 'Le contexte',
        body: [
          "Une astrologue du Bassin d'Arcachon souhaitait digitaliser son activité : consultations en présentiel et à distance, tirages de cartes, et une petite boutique ésotérique. L'objectif — un site vitrine et un système de réservation totalement autonome, sans dépendre d'un agenda ou d'un outil de paiement tiers.",
        ],
      },
      {
        title: "Ce que j'ai construit",
        body: [
          "Un front Astro (vitrine + tunnel de réservation), un back Supabase pour les créneaux, commandes et abonnés, le paiement géré par Stripe, et des emails transactionnels automatiques via Resend (confirmations, rappels).",
          'Côté coulisses, un dashboard admin complet : pilotage des réservations et des commandes boutique, gestion des produits, tirages, planning, témoignages, et une page de lancement. Le tout déployé sur Vercel avec une CI GitLab.',
        ],
      },
      {
        title: "Le rôle de l'IA",
        body: [
          "Claude Code en prompts chirurgicaux : un scope volontairement étroit à chaque tâche, une attention constante à l'économie de tokens, et une exigence de zéro hallucination en production. L'IA accélère les boucles — la spec, l'architecture et la revue par diff restent sous contrôle humain.",
        ],
      },
      {
        title: 'Résultat',
        body: [
          "La plateforme tourne en preprod et la page coming-soon est en ligne. Avant même l'ouverture publique, elle a déjà capté ses 2 premiers leads — une validation concrète de l'intérêt, livrée seule et de bout en bout en 2 mois.",
        ],
      },
    ],
  },
  esquisses: {
    rotation: '-2.5deg',
    background: '#141029',
    accent: '#c9a24a',
    cardImage: `${IMG}/astrobassin-coming-soon.png`,
    heroImage: `${IMG}/astrobassin-admin.png`,
    gallery: [`${IMG}/astrobassin-hero.png`, `${IMG}/astrobassin-tirages.png`],
  },
};
