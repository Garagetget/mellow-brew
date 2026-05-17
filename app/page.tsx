import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { VisitSection } from "@/components/sections/VisitSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <VisitSection />
      </main>
      <Footer />
    </>
  );
}
