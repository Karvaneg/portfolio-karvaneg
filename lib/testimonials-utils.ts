import type { TestimonialProps } from "@/types/ui-kit";

/**
 * Renvoie le testimonial "featured", ou null si aucun
 */
export const getFeaturedTestimonial = (
  testimonials: readonly TestimonialProps[]
): TestimonialProps | null => {
  return testimonials.find((t) => t.featured) || null;
};
