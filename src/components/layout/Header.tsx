"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Asegúrate de que este archivo exporta los componentes correctamente

// --- 1. Definición del Componente ThemeToggle ---
// Se ha movido el componente ThemeToggle aquí para asegurar que esté disponible.
// Si prefieres mantenerlo en un archivo separado, asegúrate de que esté exportado desde
// src/components/ui/theme-toggle.tsx y correctamente importado aquí.

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
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

// --- 2. Definición de la Lista de Navegación ---
const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre Nós" },
  { href: "#menu", label: "Cardápio" },
  { href: "#gallery", label: "Galeria" },
  { href: "#contact", label: "Contato" },
];

// --- 3. Componente Principal del Header ---
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Asegura que el logo se renderice correctamente en el servidor y el cliente
  const logoSrc = isMounted && theme === "dark" ? "/logo-light.svg" : "/logo-dark.svg";

  return (
    <>
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
              style={{ objectFit: 'contain' }}
            />
          </Link>

          {/* Navegación para pantallas grandes */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
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
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú Desplegable para Móviles (Overlay) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic fuera
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 h-full w-64 bg-background shadow-lg p-6"
            >
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors block py-2"
                      onClick={() => setIsMenuOpen(false)}
                      aria-label={`Ir para a seção ${link.label}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-red-600 hover:bg-red-700 text-white font-bold w-full"
                  size="lg"
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
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
