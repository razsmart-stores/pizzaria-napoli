// src/components/layout/Footer.tsx
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo y Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold mb-2">Pizzaria Napoli</h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Pizzaria Napoli Floripa. Todos os direitos
            reservados.
          </p>
        </div>

        {/* Endereços */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Nossas Lojas</h3>
          <p className="text-gray-400">
            LJ. PANTANAL: R. Dep. Antônio Edu Vieira, 1940 – CEP: 88040-245
          </p>
          <p className="text-gray-400 mt-2">
            LJ. CAMPECHE: Rod. Francisco Magno Vieira, 270 – CEP: 88065-005
          </p>
        </div>

        {/* Contato e Redes Sociais */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Contato</h3>
          <p className="text-gray-400">Telefone: (48) 3238-4852</p>
          <p className="text-gray-400">
            Horário: Todos os dias, das 18:00h às 23:45h
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
