import { PizzaCard } from "@/components/ui/pizza-card"; // Corregí el path
import { menuData } from "@/lib/menu-data";
import { Separator } from "@/components/ui/separator";

export function MenuSection() {
  return (
    <section id="menu" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Nosso Cardápio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Sabores que Encantam
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feitas com ingredientes frescos e massa de fermentação natural,
              nossas pizzas são uma explosão de sabor. Escolha a sua favorita!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4 mt-12">
          {/* Pizzas Tradicionais */}
          <div className="col-span-full">
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              Tradicionais
            </h3>
            <Separator />
          </div>
          {menuData.tradicionais.map((pizza, index) => (
            <PizzaCard key={`trad-${index}`} pizza={pizza} />
          ))}

          {/* Pizzas Especiais */}
          <div className="col-span-full mt-8">
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              Especiais
            </h3>
            <Separator />
          </div>
          {menuData.especiais.map((pizza, index) => (
            <PizzaCard key={`esp-${index}`} pizza={pizza} />
          ))}

          {/* Pizzas Doces */}
          <div className="col-span-full mt-8">
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              Doces
            </h3>
            <Separator />
          </div>
          {menuData.doces.map((pizza, index) => (
            <PizzaCard key={`doce-${index}`} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}
