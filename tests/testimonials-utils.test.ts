import { getFeaturedTestimonial } from '@/lib/testimonials-utils';
import type { TestimonialProps } from '@/types/ui-kit';

describe('getFeaturedTestimonial', () => {
  it('returns the featured testimonial when exactly one is present', () => {
    const testimonials: TestimonialProps[] = [
      { id: '1', author: 'A', text: 'Test A' },
      { id: '2', author: 'B', text: 'Test B', featured: true },
    ];

    expect(getFeaturedTestimonial(testimonials)).toEqual(testimonials[1]);
  });

  it('returns null when no testimonial is featured', () => {
    const testimonials: TestimonialProps[] = [
      { id: '1', author: 'A', text: 'Test A' },
      { id: '2', author: 'B', text: 'Test B' },
    ];

    expect(getFeaturedTestimonial(testimonials)).toBeNull();
  });
});
