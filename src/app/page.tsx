import { HeroSection } from "@/components/sections/home/Hero";
import { AboutSection } from "@/components/sections/home/About";
import { MenuSection } from "@/components/sections/home/Menu"; // Importa la nueva sección

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSection /> {/* Añade la sección del menú aquí */}
      {/* Las demás secciones (Galeria, Contato) irán aquí */}
    </main>
  );
}
