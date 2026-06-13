import type { WorkflowSkill } from '@/types/workflow';

/** Skills d'ingénierie augmentée par l'IA (carnet technique · section Workflow). */
export const workflowSkills: WorkflowSkill[] = [
  {
    id: 'SKL-01',
    icon: 'skill',
    title: 'Environnement versionné',
    description:
      "Mon dossier ~/.claude est un repo Git : skills isolés, alias d'exécution, status line de télémétrie. Une config versionnée et reproductible, que je récupère sur n'importe quel poste en un git clone.",
    tags: ['statusline', 'git', 'windows', 'powershell', 'telemetry'],
  },
  {
    id: 'SKL-02',
    icon: 'test',
    title: 'Custom Skills & Workflows',
    description:
      "Une méthode répétée devient un skill versionné : un contrat invocable (nom, entrées, sorties) que toute l'équipe peut cloner. Smart scaffolding — l'agent génère l'outil qui lui fournit son contexte.",
    tags: ['custom-skills', 'versioned', 'scaffolding', 'workflows'],
  },
  {
    id: 'SKL-03',
    icon: 'architecture',
    title: 'Architecture & Refactoring',
    description:
      "Refactoring délégué à un agent en Git Worktree, sur une branche isolée : token economy, TDD dans le contrat, review par le diff. Je manage des agents, je garantis l'architecture.",
    tags: ['git-worktrees', 'async-agents', 'tdd', 'token-economy'],
  },
];
