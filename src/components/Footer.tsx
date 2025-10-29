export const Footer = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=5527999039225`;
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