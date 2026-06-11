import { ogImage, ogSize, ogContentType } from '@/app/lib/og';

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Carnet d'esquisses — Marie Le Carvennec";

export default function Image() {
  return ogImage({
    surface: 'carnet',
    eyebrow: "Carnet d'esquisses",
    title: 'Un portfolio manuscrit, tactile et raconté',
  });
}
