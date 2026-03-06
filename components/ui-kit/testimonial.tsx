import { dsTokens } from '@/design-system/tokens';
import { cn } from '@/lib/utils';
import type { TestimonialProps } from '@/types/ui-kit';

type TestimonialComponentProps = TestimonialProps & {
  className?: string;
  variant?: 'default' | 'hero';
};

export const Testimonial: React.FC<TestimonialComponentProps> = ({
  text,
  author,
  role,
  company,
  className,
  variant = 'default',
}) => {
  const heroStyles = variant === 'hero' ? 'text-lg md:text-xl font-serif italic' : 'text-base';

  return (
    <figure
      className={cn(
        'space-y-6 leading-relaxed',
        dsTokens.color.textSecondary,
        heroStyles,
        className,
      )}
    >
      <blockquote>“{text}”</blockquote>
      <figcaption className="flex flex-col items-end">
        <span className="font-semibold text-foreground">{author}</span>
        {(role || company) && (
          <span className="text-sm text-foreground/80">
            {role && <span>{role}</span>}
            {role && company && <span>, </span>}
            {company && <span>{company}</span>}
          </span>
        )}
      </figcaption>
    </figure>
  );
};
