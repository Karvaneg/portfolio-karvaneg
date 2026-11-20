import type { Project } from '@/types/project';
import { displayUrl } from '@/lib/display-url';

export interface ProjectExternalLink {
  url: string;
  label: string;
  kind: 'site' | 'video';
}

/** Liens externes d'un projet (sites puis vidéo de démo), communs aux deux éditions. */
export const projectLinks = ({
  websites = [],
  demoVideo,
}: Pick<Project, 'websites' | 'demoVideo'>): ProjectExternalLink[] => [
  ...websites.map((url) => ({ url, label: displayUrl(url), kind: 'site' as const })),
  ...(demoVideo ? [{ url: demoVideo, label: 'Vidéo de démo', kind: 'video' as const }] : []),
];
