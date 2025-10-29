import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { name: 'Ana Paula S.', text: 'A Vanessa foi incrível! Encontrou o apartamento perfeito para minha família com muita agilidade e profissionalismo. Recomendo!' },
  { name: 'Marcos R.', text: 'Processo de compra super tranquilo. A assessoria da Vanessa fez toda a diferença para nos sentirmos seguros.' },
];

export const SocialProof = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">O que meus clientes dizem</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex justify-center mb-2">
                  {Array(5).fill(0).map((_, i) => <Star key={i} className="text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <span className="font-bold text-gray-700">CRECI 9780-F</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-700">Google Avaliações</span>
            <div className="flex items-center"><Star className="text-yellow-400 fill-current h-5 w-5" /> 5.0</div>
          </div>
        </div>
      </div>
    </section>
  );
};