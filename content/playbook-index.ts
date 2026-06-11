import type { PlaybookEntry } from '@/types/playbook';

/**
 * Index des entrées du playbook : **source unique** des métadonnées (num, titre,
 * catégorie, temps de lecture, tags, résumé). L'atrium, la page /playbook, le
 * pager ET l'en-tête de l'article MDX lisent tous d'ici → aucune divergence
 * possible. L'ordre fait foi pour le pager prev/next.
 *
 * Ajouter une entrée = créer `content/playbook/<slug>.mdx`, l'enregistrer dans
 * `content/playbook/registry.ts`, puis l'ajouter ici.
 */
export const playbookEntries: PlaybookEntry[] = [
  {
    num: '001',
    slug: '001-setup-claude-code-windows',
    title: 'Le setup ultime de Claude Code sur Windows',
    status: 'live',
    category: 'Setup',
    readingTime: '~8 min de lecture',
    summary:
      "Laisser Claude Code auto-configurer son environnement sur Windows : Git, jonctions, alias PowerShell et status line — 100% prompt-driven.",
    tags: ['claude-code', 'windows', 'powershell', 'git', 'agent-driven'],
  },
  {
    num: '002',
    slug: '002-skills-workflows',
    title: 'Création de Skills & Workflows',
    status: 'live',
    category: 'Skills & Workflows',
    readingTime: '~10 min de lecture',
    summary:
      "Transformer ses méthodes en skills versionnés, invocables et partageables : anatomie d'un skill, cas pratique init-ai-workspace, orchestration et industrialisation.",
    tags: ['claude-code', 'custom-skills', 'workflows', 'automation', 'developer-tooling'],
  },
  {
    num: '003',
    slug: '003-refactoring-worktrees',
    title: 'Refactoring Asynchrone & Git Worktrees',
    status: 'live',
    category: 'Orchestration avancée',
    readingTime: '~8 min de lecture',
    summary:
      "Déléguer un refactoring complexe à un agent qui tourne en arrière-plan, dans un Git Worktree isolé : token economy, contrat de refactoring strict, audit par le diff.",
    tags: ['claude-code', 'git-worktrees', 'async-agents', 'token-economy', 'refactoring'],
  },
];
