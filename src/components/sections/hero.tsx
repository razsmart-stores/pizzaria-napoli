import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IMAGES } from "@/lib/images"; // Import the image paths

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero.background}
          alt="Authentic Italian Pizza"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="z-0"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 text-shadow-lg animate-fade-down">
          Pizzaria Napoli
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-up">
          A melhor pizza da ilha. Feita com os melhores ingredientes, com massa de fermentação natural e assada no forno a lenha.
        </p>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-transform animate-fade-up"
        >
          VER CARDÁPIO
        </Button>
      </div>
    </section>
  );
}
