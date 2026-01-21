import Image from 'next/image';
import { profileData } from '@/app/lib/data/profile';
import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';

export function HeroImageProfilSSR() {
  return (
    <Image
      src={profileData.image}
      alt={profileData.imageAlt}
      width={256}
      height={256}
      priority
      fetchPriority="high"
      sizes="(max-width: 768px) 192px, 256px"
      className={cn(dsTokens.radius.pill, 'object-cover')}
    />
  );
}
