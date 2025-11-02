import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PropertyCard } from "./PropertyCard";

const supabaseBaseUrl = "https://frihyrxavhecjrhifyot.supabase.co/storage/v1/object/public/property_images";

const otherPropertiesData = [
  { image: `${supabaseBaseUrl}/other-opportunity-1.jpg`, price: 'A partir de R$ 750.000', neighborhood: 'Centro', title: 'Lançamento no Centro' },
  { image: `${supabaseBaseUrl}/other-opportunity-2.jpg`, price: 'R$ 2.300.000', neighborhood: 'Interlagos', title: 'Casa em Condomínio' },
  { image: `${supabaseBaseUrl}/other-opportunity-3.jpg`, price: 'A partir de R$ 450.000', neighborhood: 'Jardim Camburi', title: '2 Quartos com Suíte' },
  { image: `${supabaseBaseUrl}/other-opportunity-4.jpg`, price: 'R$ 890.000', neighborhood: 'Mata da Praia', title: '3 Quartos Decorado' },
];

export const OtherOpportunities = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Outras Oportunidades</h2>
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {otherPropertiesData.map((prop, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <PropertyCard property={prop} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};