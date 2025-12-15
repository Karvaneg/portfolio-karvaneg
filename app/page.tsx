import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Hero } from "./sections/hero/hero";
import { About } from "./sections/about/about";
import { Skills } from "./sections/skills/skills";
import { Experience } from "./sections/experience/experience";
import { Projects } from "./sections/projects/projects";

export default function Home() {
  return (
    <>
      <main className="min-h-screen pt-16">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* Section Contact */}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
