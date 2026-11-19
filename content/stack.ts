import type { StackCategory } from '@/types/stack';

/** Stack par domaine — 6 catégories partagées par les deux éditions. */
export const stack: StackCategory[] = [
  {
    num: '01',
    name: 'IA & Agents',
    items: [
      'Claude Code',
      'Skills · rules · subagents',
      'Orchestration multi-agents',
      'MCP',
      'RAG',
      'LLM locaux (Ollama)',
      'Groq',
    ],
  },
  {
    num: '02',
    name: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Vite', 'Astro', 'Tailwind', 'Tauri (desktop)'],
  },
  {
    num: '03',
    name: 'Backend & Données',
    items: ['Node.js', 'Express', 'Python', 'Symfony', 'PostgreSQL', 'SQLite', 'Prisma', 'Redis'],
  },
  {
    num: '04',
    name: 'Qualité & Tests',
    items: ['Test-first (TDD)', 'Vitest', 'Playwright', 'pytest', 'WCAG 2.2 AA / RGAA', 'ADR'],
  },
  {
    num: '05',
    name: 'DevOps',
    items: ['Git', 'Docker', 'GitLab CI/CD', 'GitHub Actions', 'Vercel', 'Render', 'Neon'],
  },
  {
    num: '06',
    name: 'Posture',
    items: ['Cadrage & écoute métier', 'Vision produit', 'Clean Code', 'Transmission', 'Ténacité'],
  },
];
