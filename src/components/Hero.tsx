import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const propertyTitle = "Seu Novo Lar na Praia de Itaparica";
  const supabaseImageUrl = "https://frihyrxavhecjrhifyot.supabase.co/storage/v1/object/public/property_images/hero.jpg";

  return (
    <section className="relative h-[60vh] min-h-[400px] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: `url('${supabaseImageUrl}')` }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in-down">{propertyTitle}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">A oportunidade que você esperava para viver com conforto, segurança e qualidade de vida.</p>
        <Button size="lg" onClick={() => document.getElementById('main-property')?.scrollIntoView({ behavior: 'smooth' })}>
          Ver Imóvel <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};