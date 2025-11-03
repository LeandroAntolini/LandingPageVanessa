import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Property {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img src="/ITO12.jpg" alt={property.title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg">{property.title}</h3>
        <p className="text-sm text-gray-600">{property.description}</p>
        <p className="font-bold text-lg mt-2">{property.price}</p>
      </CardContent>
    </Card>
  );
}