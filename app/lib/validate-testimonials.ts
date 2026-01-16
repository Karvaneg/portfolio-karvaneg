import type { TestimonialProps } from "@/types/ui-kit";

/**
 * Valide les données de testimonials au boot du serveur
 * S'exécute une seule fois lors de l'import, pas pendant le rendu
 */
export function validateTestimonials(
  testimonials: readonly TestimonialProps[]
): void {
  if (process.env.NODE_ENV !== "development") return;

  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const featuredCount = featuredTestimonials.length;

  if (featuredCount > 1) {
    console.warn(
      "%c🚨 Only one testimonial should be featured!🚨",
      "color: red; font-weight: bold; font-size: 16px;"
    );

    console.table(featuredTestimonials, ["id", "author", "featured", "text"]);
  }
}
