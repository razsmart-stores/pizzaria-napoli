import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-background.jpg" // Asegúrate de tener esta imagen en tu carpeta public/images/hero
          alt="Deliciosa pizza em uma mesa rústica"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="brightness-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-shadow-lg animate-fade-in-down">
          O Melhor Pedaço do Seu Dia
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-up">
          Feita com os melhores ingredientes, com massa de fermentação natural e assada no forno a lenha. Sabor autêntico em cada fatia.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 text-lg rounded-full transition-transform transform hover:scale-105 animate-fade-in"
        >
          <a href="#cardapio">
            Ver Cardápio
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
