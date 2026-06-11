import { ogImage, ogSize, ogContentType } from '@/app/lib/og';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = 'Carnet technique — Marie Le Carvennec';

export default function Image() {
  return ogImage({
    surface: 'technique',
    eyebrow: 'Carnet technique',
    title: "Ingénierie augmentée par l'IA — tickets, études de cas, open source",
  });
}
