import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { Hero } from "./sections/hero/hero";

export default function Home() {
  return (
    <>
      <main className="min-h-screen pt-16">
        <Header />
        <Hero />
        {/* Section À propos */}
        {/* Section Skills */}
        {/* Section Experience */}
        {/* Section Projects */}
        {/* Section Contact */}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
