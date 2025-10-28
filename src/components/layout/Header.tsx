"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react"; // Importé Moon y Sun aquí

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IMAGES } from "@/lib/images";

// --- ThemeToggle Component ---
export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Escuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// --- Navigation Links ---
const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre Nós" },
  { href: "#menu", label: "Cardápio" },
  { href: "#gallery", label: "Galeria" },
  { href: "#contact", label: "Contato" },
];

// --- Header Component ---
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme } = useTheme();
  // Estado para el logo para evitar FOUC (Flash of Unstyled Content) en la carga inicial
  const [logoSrc, setLogoSrc] = React.useState(IMAGES.logo.dark); // Default a uno para evitar error en el servidor

  React.useEffect(() => {
    // Solo actualizamos el logo en el cliente para que coincida con el tema
    setLogoSrc(theme === "dark" ? IMAGES.logo.light : IMAGES.logo.dark);
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" aria-label="Página inicial da Pizzaria Napoli">
          <Image
            src={logoSrc}
            alt="Pizzaria Napoli Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Navegación para pantallas grandes */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Acciones del lado derecho */}
        <div className="flex items-center space-x-2">
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white font-bold hidden sm:inline-flex"
          >
            <a
              href="https://www.ifood.com.br/" // Reemplazar con el enlace real
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedido Online
            </a>
          </Button>

          <ThemeToggle />

          {/* Botón de Menú Hamburguesa para móviles */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? "Fechar menu" : "Abrir menu"}</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable para Móviles */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="border-t border-border pb-3 pt-4">
            <div className="flex items-center px-5">
              <Button
                asChild
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
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
          </div>
        </div>
      )}
    </header>
  );
}
