import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BedDouble, Bath, Car, Ruler, MapPin, CheckCircle, MessageSquare, Calendar, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

export const MainProperty = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=5527999039225&text=Olá, Vanessa! Tenho interesse no imóvel da Praia de Itaparica.`;
  const features = ["Lazer completo com piscina e sauna", "Localização privilegiada", "Salão de festa e salão gourmet", "Academia"];
  
  const supabaseBaseUrl = "https://frihyrxavhecjrhifyot.supabase.co/storage/v1/object/public/property_images";
  
  const carouselImages = [
    { src: `${supabaseBaseUrl}/CET01.jpg`, title: "Sala" },
    { src: `${supabaseBaseUrl}/CET02.jpg`, title: "Sala" },
    { src: `${supabaseBaseUrl}/CET03.jpg`, title: "Varanda" },
    { src: `${supabaseBaseUrl}/CET04.jpg`, title: "Cozinha" },
    { src: `${supabaseBaseUrl}/CET05.jpg`, title: "Homeoffice" },
    { src: `${supabaseBaseUrl}/CET06.jpg`, title: "Suíte" },
    { src: `${supabaseBaseUrl}/CET07.jpg`, title: "Banheiro suíte" },
    { src: `${supabaseBaseUrl}/CET08.jpg`, title: "Quarto 1" },
    { src: `${supabaseBaseUrl}/CET09.jpg`, title: "Quarto 2" },
    { src: `${supabaseBaseUrl}/CET10.jpg`, title: "Banheiro social" },
    { src: `${supabaseBaseUrl}/CET11.jpg`, title: "Piscina" },
    { src: `${supabaseBaseUrl}/CET12.jpg`, title: "Academia" },
    { src: `${supabaseBaseUrl}/CET13.jpg`, title: "Academia" },
    { src: `${supabaseBaseUrl}/CET14.jpg`, title: "Quadra" },
    { src: `${supabaseBaseUrl}/CET15.jpg`, title: "Churrasqueira" },
  ];

  const mapImageUrl = `${supabaseBaseUrl}/Mapa.jpg`;
  const mapLocationLink = "https://maps.app.goo.gl/818LZ2xZ8nxzFepP7";

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    return () => { api.off("select", () => setCurrent(api.selectedScrollSnap())) };
  }, [api]);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);
  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const nextImage = () => selectedImageIndex !== null && setSelectedImageIndex((selectedImageIndex + 1) % carouselImages.length);
  const prevImage = () => selectedImageIndex !== null && setSelectedImageIndex((selectedImageIndex - 1 + carouselImages.length) % carouselImages.length);

  return (
    <>
      <section id="main-property" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative group cursor-pointer" onClick={() => openLightbox(index)}>
                      <img src={image.src} alt={image.title} className="w-full h-auto object-cover rounded-lg" />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center rounded-b-lg">
                        <p className="font-semibold text-sm">{image.title}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 mt-4">
              {carouselImages.map((image, index) => (
                <button key={index} onClick={() => scrollTo(index)} className={`rounded-md overflow-hidden border-2 transition ${current === index ? 'border-teal-500' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                  <img src={image.src} alt={`Thumbnail ${image.title}`} className="w-full h-full object-cover aspect-video" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Apartamento na Praia de Itaparica</h2>
            <p className="text-gray-600 mb-4 text-lg">Valor <span className="text-teal-500 font-bold">R$ 1.200.000,00</span></p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-center">
              <div className="p-2 rounded-lg bg-gray-100"><BedDouble className="mx-auto mb-1" /> 3 Quartos</div>
              <div className="p-2 rounded-lg bg-gray-100"><Bath className="mx-auto mb-1" /> 1 Suíte</div>
              <div className="p-2 rounded-lg bg-gray-100"><Car className="mx-auto mb-1" /> 2 Vagas</div>
              <div className="p-2 rounded-lg bg-gray-100"><Ruler className="mx-auto mb-1" /> 120 m²</div>
            </div>

            <h3 className="font-bold text-xl mb-3">Diferenciais</h3>
            <ul className="space-y-2 mb-6">
              {features.map(feature => (
                <li key={feature} className="flex items-center"><CheckCircle className="h-5 w-5 text-teal-500 mr-2" /> {feature}</li>
              ))}
            </ul>

            <div className="mb-6">
              <h3 className="font-bold text-xl mb-3 flex items-center"><MapPin className="h-5 w-5 mr-2 text-teal-500" /> Localização</h3>
              <a href={mapLocationLink} target="_blank" rel="noopener noreferrer">
                <img src={mapImageUrl} alt="Mapa da localização" className="rounded-lg w-full h-auto cursor-pointer hover:opacity-80 transition-opacity" />
              </a>
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

      <Dialog open={selectedImageIndex !== null} onOpenChange={(isOpen) => !isOpen && closeLightbox()}>
        <DialogContent className="max-w-5xl p-0 border-0 bg-transparent shadow-none">
          {selectedImageIndex !== null && (
            <div className="relative">
              <img 
                src={carouselImages[selectedImageIndex].src} 
                alt={carouselImages[selectedImageIndex].title} 
                className="w-full h-auto object-contain max-h-[90vh] rounded-lg" 
              />
              <Button variant="ghost" size="icon" className="absolute top-1/2 -translate-y-1/2 left-2 text-white bg-black/50 hover:bg-black/75 rounded-full" onClick={prevImage}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="absolute top-1/2 -translate-y-1/2 right-2 text-white bg-black/50 hover:bg-black/75 rounded-full" onClick={nextImage}>
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-center rounded-b-lg">
                <p className="font-semibold">{carouselImages[selectedImageIndex].title}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};