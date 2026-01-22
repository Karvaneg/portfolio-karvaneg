import { render, screen } from '@testing-library/react';
import { Projects } from '@/app/sections/projects/projects';
import { projects } from '@/app/lib/data/projects';

describe('Projects section', () => {
  it('renders every project title', () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(
        screen.getByRole('heading', { name: project.title }),
      ).toBeInTheDocument();
    });
  });
});
