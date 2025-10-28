// src/components/ui/pizza-card.tsx
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface Pizza {
  name: string;
  description: string;
  price: string;
  image: string;
}

export function PizzaCard({ pizza }: { pizza: Pizza }) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={pizza.image}
            alt={pizza.name} // <-- Añadido alt text
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-2 text-xl font-bold">{pizza.name}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400 mb-4 h-12">
          {pizza.description}
        </CardDescription>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-primary">{pizza.price}</p>
          <Button size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
