import type { PlaybookEntry } from '@/types/playbook';

/** Index des entrées du playbook (affiché sur l'atrium et la page /playbook). */
export const playbookEntries: PlaybookEntry[] = [
  {
    num: '001',
    slug: '001-setup-claude-code-windows',
    title: 'Setup Claude Code · Windows',
    status: 'live',
  },
  {
    num: '002',
    slug: '002-skills-agents',
    title: 'Skills sur-mesure & agents',
    status: 'soon',
  },
  {
    num: '003',
    slug: '003-tdd-ia',
    title: "TDD piloté par l'IA",
    status: 'soon',
  },
];
