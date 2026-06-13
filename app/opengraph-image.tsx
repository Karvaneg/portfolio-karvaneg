import { ogImage, ogSize, ogContentType } from '@/app/lib/og';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Karvaneg — portfolio de Marie Le Carvennec';

export default function Image() {
  return ogImage({
    surface: 'atrium',
    eyebrow: 'N° 04 · Édition 2026',
    title: 'Portfolio éditorial — deux carnets & un playbook',
  });
}
