import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BedDouble, Bath, Car, Ruler, MapPin, CheckCircle, MessageSquare, Calendar } from "lucide-react";

export const MainProperty = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=5527999039225&text=Olá, Vanessa! Tenho interesse no imóvel da Praia da Costa.`;
  const features = ["Acabamento de alto padrão", "Lazer completo com piscina e sauna", "Localização privilegiada", "Varanda gourmet com vista para o mar"];

  return (
    <section id="main-property" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <img src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=${index}`} alt={`Foto do imóvel ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Apartamento na Praia da Costa</h2>
          <p className="text-gray-600 mb-4 text-lg">A partir de <span className="text-teal-500 font-bold">R$ 1.200.000,00</span></p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center">
            <div className="p-2 rounded-lg bg-gray-100"><BedDouble className="mx-auto mb-1" /> 3 Quartos</div>
            <div className="p-2 rounded-lg bg-gray-100"><Bath className="mx-auto mb-1" /> 2 Suítes</div>
            <div className="p-2 rounded-lg bg-gray-100"><Car className="mx-auto mb-1" /> 2 Vagas</div>
            <div className="p-2 rounded-lg bg-gray-100"><Ruler className="mx-auto mb-1" /> 140 m²</div>
          </div>

          <h3 className="font-bold text-xl mb-3">Diferenciais</h3>
          <ul className="space-y-2 mb-6">
            {features.map(feature => (
              <li key={feature} className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-2" /> {feature}</li>
            ))}
          </ul>

          <div className="mb-6">
            <h3 className="font-bold text-xl mb-3 flex items-center"><MapPin className="h-5 w-5 mr-2 text-teal-500" /> Localização</h3>
            <img src="https://i.imgur.com/Yq3s2aE.png" alt="Mapa da localização" className="rounded-lg w-full h-auto" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="flex-1" onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}>
              <Calendar className="mr-2 h-4 w-4" /> Agendar Visita
            </Button>
            <Button size="lg" variant="outline" className="flex-1" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-4 w-4" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};