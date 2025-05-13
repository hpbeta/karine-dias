import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';  // Importando os ícones do react-icons

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-serif font-bold">Karine Dias</h2>
            <p className="text-xs text-gray-400">Curso de Redação ENEM</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              &copy; {year} Karine Dias. Todos os direitos reservados.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://www.instagram.com/profakarinedias/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={24} className="text-white hover:text-[#edb966] transition-colors" />
              </a>
              <a
                href="https://wa.me/558291745926"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} className="text-white hover:text-[#edb966] transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@profakarinedias?_t=ZM-8wJ6LbPYhkL&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok size={24} className="text-white hover:text-[#edb966] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}