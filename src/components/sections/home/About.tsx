// src/components/sections/home/About.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center md:items-start justify-center space-y-4 text-center md:text-left">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Nossa História
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Uma Tradição de Sabor Familiar
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Desde 2014, a Pizzaria Napoli tem sido um ponto de encontro para
              amigos e famílias. Começamos com uma receita de massa secreta,
              passada de geração em geração, e a paixão por ingredientes
              frescos e de alta qualidade. Nossa missão é simples: criar a
              melhor pizza da ilha, uma fatia de cada vez.
            </p>
            <Button
              asChild
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold"
            >
              <a href="#menu">
                Veja Nosso Cardápio
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={IMAGES.about.chef}
              width={550}
              height={550}
              alt="Nosso Chef"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
