// src/app/page.tsx
import { HeroSection } from "@/components/sections/home/Hero";
import { AboutSection } from "@/components/sections/home/About"; // Importa la nueva sección

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      {/* Las demás secciones (Cardápio, Galeria, Contato) irán aquí */}
    </main>
  );
}
