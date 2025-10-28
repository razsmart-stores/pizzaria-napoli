"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"; // Asegúrate de que este plugin esté instalado

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { IMAGES } from "@/lib/images";

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <Carousel
          className="w-full h-full"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {IMAGES.hero.carousel.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-screen w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    quality={85}
                    priority={index === 0}
                    className="brightness-50"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div className="flex flex-col items-center p-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-shadow-lg animate-fade-in-down">
            O Sabor da Itália, no Coração de Floripa
          </h1>
          <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fade-in-up">
            Feita com os melhores ingredientes, com massa de fermentação natural e assada no forno a lenha. Sabor autêntico em cada fatia.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 text-lg rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Link href="#menu">
              Ver Cardápio
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
