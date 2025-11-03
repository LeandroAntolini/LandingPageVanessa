import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, Phone } from "lucide-react";
import { WHATSAPP_LINK_DEFAULT, CALL_LINK } from "@/lib/constants";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm p-4 flex justify-between items-center z-50">
      <div className="text-lg font-bold text-gray-800">
        <span className="text-teal-500">Vanessa</span> Tápias
      </div>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="secondary" asChild>
          <a href={CALL_LINK}>
            <Phone className="mr-2 h-4 w-4" /> Ligar
          </a>
        </Button>
        <Button size="sm" asChild>
          <a href={WHATSAPP_LINK_DEFAULT} target="_blank" rel="noopener noreferrer">
            <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </Button>
        <Button size="sm" variant="outline" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
          <Calendar className="mr-2 h-4 w-4" /> Agendar Visita
        </Button>
      </div>
    </header>
  );
};