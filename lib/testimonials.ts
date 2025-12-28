import { TestimonialProps } from "@/types/ui-kit";

export const getFeaturedTestimonial = (
  testimonials: readonly TestimonialProps[]
) => testimonials.find((t) => t.featured);
