import type { StackCategory } from '@/types/stack';

/** Stack par domaine — 6 catégories partagées par les deux éditions. */
export const stack: StackCategory[] = [
  {
    num: '01',
    name: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'HTML5', 'Sass', 'Tailwind', 'Framer Motion'],
  },
  {
    num: '02',
    name: 'Backend',
    items: ['PHP', 'Symfony', 'Twig', 'Node.js', 'Express', 'PostgreSQL', 'MySQL'],
  },
  {
    num: '03',
    name: 'DevOps & Outils',
    items: ['Git', 'GitLab CI/CD', 'Docker', 'Vercel', 'Mirroring GitLab→GitHub', 'Trello'],
  },
  {
    num: '04',
    name: 'UX, Qualité & Design',
    items: ['WCAG / A11y', 'Design System', 'SEO', 'Dark / Light', 'Figma', 'Canva'],
  },
  {
    num: '05',
    name: 'IA & Workflow',
    items: ['Prompting (Google)', 'IA générative', 'Redis', 'Playwright', 'Stripe'],
  },
  {
    num: '06',
    name: 'Posture',
    items: ['Clean Code', 'Apprentissage continu', 'Ténacité', 'Communication', 'Travail en équipe'],
  },
];
