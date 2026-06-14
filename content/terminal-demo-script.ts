import type { TerminalDemoLine } from '@/types/terminal-demo';

/**
 * Reconstitution honnête de la session du Playbook 003 (refactoring asynchrone
 * en git worktree). Les commandes sont celles de l'article ; les sorties sont
 * soit réelles (`git`, `madge`), soit qualitatives — aucun chiffre inventé, pour
 * rester fidèle à la ligne « stricte réalité » (cf. 003-refactoring-worktrees).
 */
export const TERMINAL_DEMO_003: TerminalDemoLine[] = [
  { kind: 'comment', text: '# 1 · isoler le terrain de jeu de l’agent' },
  { kind: 'cmd', text: 'git checkout -b ai/refactor-auth-module' },
  { kind: 'out', text: "Switched to a new branch 'ai/refactor-auth-module'" },
  { kind: 'cmd', text: 'npx madge --circular src/auth/' },
  { kind: 'ok', text: '✔ No circular dependency found!' },
  { kind: 'gap' },
  { kind: 'comment', text: '# 2 · matérialiser la branche dans un worktree isolé' },
  { kind: 'cmd', text: 'git worktree add ../ai-refactor-auth-module' },
  { kind: 'out', text: "Preparing worktree (new branch 'ai-refactor-auth-module')" },
  { kind: 'cmd', text: 'cd ../ai-refactor-auth-module' },
  { kind: 'cmd', text: 'claude --dangerously-skip-permissions' },
  { kind: 'agent', text: '● claude — agent autonome sur src/auth/' },
  { kind: 'step', text: 'tests (baseline) — suite verte avant toute modif' },
  { kind: 'step', text: 'refactor — validation migrée vers le nouveau standard' },
  { kind: 'ok', text: 'tests (après refacto) — toujours verts ✓' },
  { kind: 'ok', text: 'commit · refactor(auth): migrate validation to new standard' },
  { kind: 'gap' },
  { kind: 'comment', text: '# pendant ce temps, je code sur main — onglet 2 →' },
  { kind: 'cmd', text: 'git checkout main' },
  { kind: 'cmd', text: 'git diff main..ai/refactor-auth-module' },
  { kind: 'comment', text: '# diff propre : imports à jour, complexité en baisse' },
  { kind: 'cmd', text: 'git merge ai/refactor-auth-module' },
  { kind: 'cmd', text: 'git worktree remove ../ai-refactor-auth-module' },
];
