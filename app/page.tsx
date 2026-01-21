import { Footer } from '@/components/layout/footer/footer';
import { Header } from '@/components/layout/header/header';
import { ScrollToTop } from '@/components/layout/scroll-to-top';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Experience } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Contact } from './sections/contact/contact';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ui-kit/theme-toggle';

export default function Home() {
  return (
    <>
      <main className={cn('min-h-screen pt-16')}>
        <Header />
        <ThemeToggle />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
