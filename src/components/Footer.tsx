import { Instagram, Linkedin, Store } from "lucide-react";

export const Footer = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=5527999039225`;
  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/vanessatapias.corretora/", icon: <Instagram className="h-6 w-6" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/vanessa-da-silva-t%C3%A1pias-antolini/", icon: <Linkedin className="h-6 w-6" /> },
    { name: "Google Negócios", href: "https://share.google/RtDWfeLALGPvywIuU", icon: <Store className="h-6 w-6" /> },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto text-center text-sm">
        <p className="font-bold text-lg mb-2">Vanessa Tápias - Corretora de Imóveis</p>
        <p>CRECI 9780-F</p>
        <p className="my-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            WhatsApp: (27) 99903-9225
          </a>
        </p>

        <div className="flex justify-center gap-6 my-6">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={`Link para o ${link.name}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p className="text-gray-400">
          © {new Date().getFullYear()} Vanessa Tápias. Todos os direitos reservados.
        </p>
        <div className="mt-4">
          <a href="/politica-de-privacidade" className="text-gray-400 hover:text-white underline text-xs">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};