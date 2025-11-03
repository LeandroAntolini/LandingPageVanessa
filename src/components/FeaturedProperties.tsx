import { PropertyCard } from "./PropertyCard";

const properties = [
  {
    title: "Itaparica ON",
    description: "2 quartos, 1 suíte, lazer completo e perto de tudo que você precisa.",
    image: "/images/ITO00.jpg",
    link: "#lead-form",
  },
  // Adicione mais imóveis aqui, se necessário
];

export const FeaturedProperties = () => (
  <section id="properties" className="py-16 px-4 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Imóveis em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  </section>
);