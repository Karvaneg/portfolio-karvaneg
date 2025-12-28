import { Testimonial } from "@/components/ui-kit/testimonial";
import { cn } from "@/lib/utils";
import { getFeaturedTestimonial } from "@/lib/testimonials";
import { testimonialsData } from "@/app/lib/data/testimonials";

export const HeroTestimonial = () => {

  const featuredTestimonials = testimonialsData.filter((t) => t.featured);

  if (featuredTestimonials.length > 1) {
    console.warn("Only one testimonial should be featured.");
  }

  const featuredTestimonial = getFeaturedTestimonial(testimonialsData);

  return (
    <div className={cn("pt-15")}>
      {featuredTestimonial && <Testimonial {...featuredTestimonial} variant="hero" />}
    </div>
  );
};