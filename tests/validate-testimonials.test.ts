import { validateTestimonials } from '@/app/lib/validate-testimonials';
import type { TestimonialProps } from '@/types/ui-kit';
import { vi } from 'vitest';

describe('validateTestimonials', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('warns when more than one testimonial is featured in development', () => {
    vi.stubEnv('NODE_ENV', 'development');
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const tableSpy = vi.spyOn(console, 'table').mockImplementation(() => undefined);

    const testimonials: TestimonialProps[] = [
      { id: '1', author: 'A', text: 'Test A', featured: true },
      { id: '2', author: 'B', text: 'Test B', featured: true },
    ];

    validateTestimonials(testimonials);

    expect(warnSpy).toHaveBeenCalled();
    expect(tableSpy).toHaveBeenCalled();

    warnSpy.mockRestore();
    tableSpy.mockRestore();
  });
});
