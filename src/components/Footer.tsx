import { Instagram, Linkedin, Star } from "lucide-react";

export const Footer = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=5527999039225`;
  
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
        
        <p className="my-4">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
            WhatsApp: (27) 99903-9225
          </a>
        </p>
        
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