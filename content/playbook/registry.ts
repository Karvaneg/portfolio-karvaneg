import type { ComponentType } from 'react';
import { playbookEntries } from '@/content/playbook-index';
import type { PlaybookEntry } from '@/types/playbook';

/** Le composant MDX reçoit l'entrée d'index (métadonnées) en prop. */
export type PlaybookMdx = ComponentType<{ entry: PlaybookEntry }>;
type MdxModule = { default: ComponentType };

/**
 * Charge le contenu MDX d'une entrée par slug. Imports statiques (analysables
 * par Turbopack) → SSG fiable. Ajouter une entrée = ajouter une ligne ici.
 */
const loaders: Record<string, () => Promise<MdxModule>> = {
  '001-setup-claude-code-windows': () => import('./001-setup-claude-code-windows.mdx'),
  '002-skills-workflows': () => import('./002-skills-workflows.mdx'),
  '003-refactoring-worktrees': () => import('./003-refactoring-worktrees.mdx'),
};

/** Slugs enregistrés dans le registre (pour les tests d'intégrité). */
export const registeredSlugs = Object.keys(loaders);

/** Composant MDX d'une entrée, ou `null` si le slug est inconnu. */
export async function loadPlaybookEntry(slug: string): Promise<PlaybookMdx | null> {
  const loader = loaders[slug];
  if (!loader) return null;
  const mod = await loader();
  // Le type ambient `*.mdx` ignore les props ; on sait que l'en-tête lit `entry`.
  return mod.default as unknown as PlaybookMdx;
}

/** Métadonnées d'une entrée par slug. */
export function getPlaybookEntry(slug: string): PlaybookEntry | undefined {
  return playbookEntries.find((entry) => entry.slug === slug);
}

/** Entrées précédente / suivante (selon l'ordre de l'index), parmi les publiées. */
export function getAdjacentEntries(slug: string): {
  prev: PlaybookEntry | null;
  next: PlaybookEntry | null;
} {
  const live = playbookEntries.filter((entry) => entry.status === 'live');
  const i = live.findIndex((entry) => entry.slug === slug);
  return {
    prev: i > 0 ? live[i - 1] : null,
    next: i >= 0 && i < live.length - 1 ? live[i + 1] : null,
  };
}

/** Slugs des entrées publiées (pour generateStaticParams). */
export function getPlaybookSlugs(): string[] {
  return playbookEntries.filter((entry) => entry.status === 'live').map((entry) => entry.slug);
}
