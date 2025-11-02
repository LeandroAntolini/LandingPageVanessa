import { PropertyCard } from "./PropertyCard";

const supabaseBaseUrl = "https://frihyrxavhecjrhifyot.supabase.co/storage/v1/object/public/property_images";

const similarPropertiesData = [
  { image: `${supabaseBaseUrl}/similar-property-1.jpg`, price: 'R$ 980.000', neighborhood: 'Itapuã', title: 'Cobertura Duplex' },
  { image: `${supabaseBaseUrl}/similar-property-2.jpg`, price: 'R$ 1.500.000', neighborhood: 'Praia da Costa', title: 'Frente Mar 4 Quartos' },
];

export const SimilarProperties = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Imóveis Similares na Região</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {similarPropertiesData.map((prop, index) => (
            <PropertyCard key={index} property={prop} />
          ))}
        </div>
      </div>
    </section>
  );
};