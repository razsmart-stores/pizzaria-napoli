import type { Metadata } from "next";
import { Inter, Lusitana } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lusitana",
});

export const metadata: Metadata = {
  title: "Pizzaria Napoli - A Melhor Pizza da Ilha",
  description:
    "Deliciosas pizzas feitas com ingredientes frescos e massa de fermentação natural. Peça online ou visite-nos em Florianópolis!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${lusitana.variable} font-sans bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
