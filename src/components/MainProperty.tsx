"use client";

import { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { MapPin, BedDouble, Bath, Car, Ruler, PlayCircle } from "lucide-react";

const items = [
  { type: "image", src: "/images/apartamento1.jpeg" },
  { type: "image", src: "/images/apartamento2.jpeg" },
  { type: "image", src: "/images/apartamento3.jpeg" },
  { type: "image", src: "/images/apartamento4.jpeg" },
  { type: "image", src: "/images/apartamento5.jpeg" },
  { type: "image", src: "/images/apartamento6.jpeg" },
  { type: "video", src: "/images/apartamento1.jpeg", link: "https://www.instagram.com/reel/DN8yx55ETbi/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==" },
];

type ThumbProps = {
  selected: boolean;
  item: { type: string; src: string };
  onClick: () => void;
};

const EmblaCarouselThumbsButton = ({ selected, item, onClick }: ThumbProps) => (
  <button
    onClick={onClick}
    className={`relative aspect-video h-20 w-full rounded-lg overflow-hidden transition-opacity ${selected ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
    type="button"
  >
    <img src={item.src} alt="Thumbnail" className="object-cover w-full h-full" />
    {item.type === 'video' && (
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <PlayCircle className="h-8 w-8 text-white" />
      </div>
    )}
  </button>
);

export const MainProperty = () => {
  const [api, setApi] = useState<EmblaCarouselType | undefined>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback((index: number) => {
    if (!api) return;
    api.scrollTo(index);
  }, [api]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api, setSelectedIndex]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
  }, [api, onSelect]);

  const whatsappLink = `https://api.whatsapp.com/send?phone=5527999039225&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20im%C3%B3vel%20em%20Itapu%C3%A3%2C%20Vila%20Velha.%20Poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F`;

  return (
    <main>
      <section id="main-property" className="py-16 px-4 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {items.map((item, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-none rounded-lg overflow-hidden">
                      <CardContent className="flex aspect-video items-center justify-center p-0 relative">
                        {item.type === 'video' ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                            <img src={item.src} alt={`Vídeo do Apartamento`} className="object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer">
                              <PlayCircle className="h-16 w-16 text-white" />
                            </div>
                          </a>
                        ) : (
                          <img src={item.src} alt={`Apartamento em Itapuã ${index + 1}`} className="object-cover w-full h-full" />
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {items.map((item, index) => (
                <EmblaCarouselThumbsButton
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  item={item}
                />
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">Apartamento de Luxo em Itapuã, Vila Velha</h1>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2 text-teal-500" />
              <span>Itapuã, Vila Velha - ES</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Este incrível apartamento de 3 quartos, sendo 1 suíte, oferece o máximo de conforto e sofisticação. Com uma localização privilegiada em Itapuã, você estará perto de tudo o que precisa: praias, comércios, restaurantes e muito mais. O imóvel conta com acabamentos de alto padrão, lazer completo e uma vista deslumbrante.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-lg">
                <BedDouble className="h-8 w-8 mx-auto text-teal-500 mb-2" />
                <span className="font-semibold">3 Quartos</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Bath className="h-8 w-8 mx-auto text-teal-500 mb-2" />
                <span className="font-semibold">2 Banheiros</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Car className="h-8 w-8 mx-auto text-teal-500 mb-2" />
                <span className="font-semibold">2 Vagas</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Ruler className="h-8 w-8 mx-auto text-teal-500 mb-2" />
                <span className="font-semibold">110 m²</span>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-2">Valor: R$ 980.000,00</h3>
              <Button asChild size="lg" className="w-full bg-teal-500 hover:bg-teal-600">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Agendar Visita pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};