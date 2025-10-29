import { Button } from "@/components/ui/button";

export const Hero = ({ propertyTitle }: { propertyTitle: string }) => {
  return (
    <section className="relative h-[60vh] min-h-[400px] bg-cover bg-center text-white flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2000&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in-down">{propertyTitle}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">A oportunidade que você esperava para viver com conforto, segurança e qualidade de vida.</p>
        <Button size="lg" className="bg-teal-500 hover:bg-teal-600" onClick={() => document.getElementById('main-property')?.scrollIntoView({ behavior: 'smooth' })}>
          Quero Saber Mais
        </Button>
      </div>
    </section>
  );
};