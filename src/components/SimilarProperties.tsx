import { PropertyCard } from "./PropertyCard";

const similarPropertiesData = [
  { image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop', price: 'R$ 980.000', neighborhood: 'Itapuã', title: 'Cobertura Duplex' },
  { image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', price: 'R$ 1.500.000', neighborhood: 'Praia da Costa', title: 'Frente Mar 4 Quartos' },
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