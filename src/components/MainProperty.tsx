import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Car, Ruler } from "lucide-react";

export const MainProperty = () => {
  const propertyDetails = {
    title: "Apartamento de 2 Quartos com Suíte na Praia de Itaparica",
    location: "Rua Deolindo Perim, 25, Praia de Itaparica, Vila Velha, ES",
    price: "R$ 450.000,00",
    condoFee: "R$ 350,00",
    features: [
      { icon: <Bed className="h-5 w-5 text-primary" />, label: "2 Quartos (1 Suíte)" },
      { icon: <Bath className="h-5 w-5 text-primary" />, label: "2 Banheiros" },
      { icon: <Car className="h-5 w-5 text-primary" />, label: "1 Vaga de Garagem" },
      { icon: <Ruler className="h-5 w-5 text-primary" />, label: "65m²" },
    ],
    tags: ["Lazer Completo", "Portaria 24h", "Frente para o Mar"],
  };

  const address = "Rua Deolindo Perim, 25, Praia de Itaparica, Vila Velha, ES";
  const mapLocationLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const mapImageUrl = "/placeholder.svg"; // Using a generic placeholder image

  return (
    <section id="main-property" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800">{propertyDetails.title}</CardTitle>
            <div className="flex items-center text-gray-600 mt-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{propertyDetails.location}</span>
            </div>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8 p-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{propertyDetails.price}</h3>
              <p className="text-gray-600 mb-6">Condomínio: {propertyDetails.condoFee}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {propertyDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {feature.icon}
                    <span className="text-gray-700">{feature.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {propertyDetails.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Localização</h4>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
                <a href={mapLocationLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={mapImageUrl}
                    alt="Mapa da localização"
                    className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};