// src/components/layout/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Importamos el componente de botón de shadcn/ui

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50 shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/pizzaria-napoli-logo-white.png" // Asumimos que tendrás un logo blanco para fondos oscuros
              alt="Pizzaria Napoli"
              width={150}
              height={50}
              className="h-10 w-auto" // Ajusta el tamaño según sea necesario
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-red-500 transition-colors">
            Início
          </Link>
          <Link
            href="/#sobre"
            className="hover:text-red-500 transition-colors"
          >
            Quem Somos
          </Link>
          <Link
            href="/#cardapio"
            className="hover:text-red-500 transition-colors"
          >
            Cardápio
          </Link>
          <Link
            href="/#galeria"
            className="hover:text-red-500 transition-colors"
          >
            Galeria
          </Link>
          <Link
            href="/#contato"
            className="hover:text-red-500 transition-colors"
          >
            Contato
          </Link>
        </nav>
        <Button
          asChild
          className="bg-red-600 hover:bg-red-700 text-white font-bold"
        >
          <a
            href="https://www.ifood.com.br/" // Reemplazar con el enlace real
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedido Online
          </a>
        </Button>
      </div>
    </header>
  );
}
