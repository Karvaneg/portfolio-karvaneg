import { SocialLinksGroup } from '@/components/ui-kit/social-networks/social-links-group';
import { HeroDescriptionProfil } from './hero-decription-profil';
import { HeroImageProfil } from './hero-image-profil';
import { cn } from '@/lib/utils';
import { HeroTestimonial } from './hero-testimonial';
import { getFeaturedTestimonial } from '@/lib/testimonials-utils';
import { testimonialsData } from '@/app/lib/data/testimonials';
import { validateTestimonials } from '@/app/lib/validate-testimonials';

export function Hero() {
  validateTestimonials(testimonialsData);
  const featuredTestimonial = getFeaturedTestimonial(testimonialsData);

  return (
    <section
      id="accueil"
      className={cn('min-h-screen flex items-center justify-center px-6 py-20')}
    >
      <div className={cn('max-w-6xl w-full')}>
        <div className={cn('flex flex-col md:flex-row items-center gap-12')}>
          <HeroImageProfil />
          <div className={cn('space-y-8 flex-1')}>
            <HeroDescriptionProfil />
            <SocialLinksGroup label="Navigation principale - Liens réseaux sociaux et contact" />
          </div>
        </div>
        <HeroTestimonial featuredTestimonial={featuredTestimonial} />
      </div>
    </section>
  );
}
