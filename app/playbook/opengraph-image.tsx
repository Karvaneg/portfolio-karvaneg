import { ogImage, ogSize, ogContentType } from '@/app/lib/og';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Playbook — Marie Le Carvennec';

export default function Image() {
  return ogImage({
    surface: 'technique',
    eyebrow: 'Playbook',
    title: "Tutoriels d'ingénierie augmentée par l'IA",
  });
}
