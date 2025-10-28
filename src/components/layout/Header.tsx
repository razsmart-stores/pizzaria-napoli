"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IMAGES } from "@/lib/images";
import { useIsMounted } from "@/hooks/use-is-mounted";

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
  const { resolvedTheme } = useTheme();
  const isMounted = useIsMounted();

  // If the component is not yet mounted, render a placeholder or nothing
  // to avoid a hydration mismatch between the server and client.
  if (!isMounted) {
    return (
      <header className="fixed top-0 left-0 w-full bg-background/80 h-16 z-50 shadow-md" aria-hidden="true" />
    );
  }

  const logoSrc = resolvedTheme === 'dark' ? IMAGES.logo.light : IMAGES.logo.dark;

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

        {/* Desktop Navigation */}
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

        {/* Right-side Actions */}
        <div className="flex items-center space-x-2">
          <Button
            asChild
            className="bg-red-600 hover:bg-red-700 text-white font-bold hidden sm:inline-flex"
          >
            <a
              href="https://www.ifood.com.br/" // Replace with the actual order link
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedido Online
            </a>
          </Button>

          <ThemeToggle />

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)} // Close the menu on click
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
                  href="https://www.ifood.com.br/" // Replace with the actual order link
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
