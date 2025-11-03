import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface Property {
  image: string;
  price: string;
  neighborhood: string;
  title: string;
}

export const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg">{property.title}</h3>
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