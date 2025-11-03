import { Instagram, Linkedin, Star, Phone, MessageSquare } from "lucide-react";
import { WHATSAPP_LINK_DEFAULT, CALL_LINK } from "@/lib/constants";

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/vanessatapias.corretora/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vanessa-da-silva-t%C3%A1pias-antolini/", label: "LinkedIn" },
    { icon: Star, href: "https://share.google/RtDWfeLALGPvywIuU", label: "Google Negócios" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto text-center text-sm">
        <p className="font-bold text-lg mb-2">Vanessa Tápias - Corretora de Imóveis</p>
        <p>CRECI 9780-F</p>
        
        {/* Social Icons Section */}
        <div className="flex justify-center space-x-6 my-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a 
              key={label}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-teal-400 transition-colors"
              aria-label={label}
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        
        {/* Contact Info */}
        <div className="space-y-2 my-4">
          <p className="flex items-center justify-center">
            <a href={CALL_LINK} className="hover:text-teal-400 transition-colors flex items-center">
              <Phone className="h-4 w-4 mr-2" /> Telefone: +55 (27) 99903-9225
            </a>
          </p>
          <p className="flex items-center justify-center">
            <a href={WHATSAPP_LINK_DEFAULT} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp: (27) 99903-9225
            </a>
          </p>
        </div>
        
        <p className="text-gray-400 mt-4">
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