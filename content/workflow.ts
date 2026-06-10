import type { WorkflowSkill } from '@/types/workflow';

/** Skills d'ingénierie augmentée par l'IA (carnet technique · section Workflow). */
export const workflowSkills: WorkflowSkill[] = [
  {
    id: 'SKL-01',
    icon: 'skill',
    title: 'Custom Claude Skills',
    description:
      "Configuration JSON, injection de contexte, manipulation d'AST. Chaque skill est versionné, testé, et documenté dans le repo.",
    tags: ['json-config', 'ast', 'context-injection', 'versioned'],
  },
  {
    id: 'SKL-02',
    icon: 'test',
    title: 'AI-Driven TDD',
    description:
      "Génération des tests avant l'implémentation, boucle CI/CD locale jusqu'au build vert. Le code humain reste l'arbitre final.",
    tags: ['tdd', 'ci-local', 'jest', 'playwright'],
  },
  {
    id: 'SKL-03',
    icon: 'architecture',
    title: 'Architecture & Refactoring',
    description:
      'Audit de code legacy, optimisation de performances, application de Clean Architecture. Live sur des bases de plusieurs années.',
    tags: ['clean-arch', 'audit', 'perf', 'legacy'],
  },
];
