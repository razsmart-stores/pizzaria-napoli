// src/components/layout/Footer.tsx
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes"; // We'll use this for the logo

// Import the IMAGES object
import { IMAGES } from "@/lib/images";

export function Footer() {
  const { theme } = useTheme();

  // Determine which logo to use based on the current theme
  const logoSrc = theme === "dark" ? IMAGES.logo.dark : IMAGES.logo.light;

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="mb-4">
            <Image
              src={logoSrc}
              alt="Pizzaria Napoli Logo"
              width={150}
              height={50}
              className="h-10 w-auto" // Control size more effectively
            />
          </Link>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pizzaria Napoli. <br /> Todos os direitos reservados.
          </p>
        </div>

        {/* Column 2: Address and Hours */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white uppercase tracking-wider">
            Nossas Lojas
          </h3>
          <address className="not-italic space-y-2">
            <p>
              <strong>Unidade Pantanal:</strong>
              <br />
              R. Dep. Antônio Edu Vieira, 1940
              <br />
              Florianópolis, SC, 88040-245
            </p>
            <p className="mt-2">
              <strong>Unidade Campeche:</strong>
              <br />
              Rod. Francisco Magno Vieira, 270
              <br />
              Florianópolis, SC, 88065-005
            </p>
          </address>
        </div>

        {/* Column 3: Contact and Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white uppercase tracking-wider">
            Contato
          </h3>
          <p className="mb-2">
            Telefone:{" "}
            <a
              href="tel:+554832384852"
              className="hover:text-white transition-colors"
            >
              (48) 3238-4852
            </a>
          </p>
          <p className="mb-4">
            Horário: Todos os dias,
            <br />
            das 18:00h às 23:45h
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Pizzaria Napoli"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Pizzaria Napoli"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/554832384852" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Pizzaria Napoli"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        <p>
          Desenvolvido com ❤️ por
          <a
            href="https://alvarosa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Alvaro
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
