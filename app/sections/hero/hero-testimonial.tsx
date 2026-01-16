import { Testimonial } from "@/components/ui-kit/testimonial";
import { cn } from "@/lib/utils";
import type { TestimonialProps } from "@/types/ui-kit";

interface HeroTestimonialProps {
  featuredTestimonial: TestimonialProps | null;
}

export const HeroTestimonial = ({ featuredTestimonial }: HeroTestimonialProps) => {
  
  return (
    <div className={cn("pt-15")}>
      {featuredTestimonial && <Testimonial {...featuredTestimonial} variant="hero" />}
    </div>
  );
};