import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface Property {
  image: string;
  price: string;
  neighborhood: string;
  title: string;
}

const supabaseBaseUrl = "https://frihyrxavhecjrhifyot.supabase.co/storage/v1/object/public/property_images";

export const PropertyCard = ({ property }: { property: Property }) => {
  // Usando a imagem ITO12.jpg do Supabase para todos os cards similares
  const imageUrl = `${supabaseBaseUrl}/ITO12.jpg`;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img src={imageUrl} alt="Itaparica ON" className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg">Itaparica ON</h3>
        <p className="text-teal-500 font-semibold text-xl my-2">{property.price}</p>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{property.neighborhood}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="outline">Detalhes</Button>
      </CardFooter>
    </Card>
  );
};