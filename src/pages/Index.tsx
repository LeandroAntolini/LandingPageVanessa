import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MainProperty } from "@/components/MainProperty";
import { SimilarProperties } from "@/components/SimilarProperties";
import { OtherOpportunities } from "@/components/OtherOpportunities";
import { SocialProof } from "@/components/SocialProof";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { trackViewContent } from "@/lib/meta-pixel";

const Index = () => {
  useEffect(() => {
    // Dispara o evento ViewContent quando a página do imóvel principal é carregada.
    trackViewContent();
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero propertyTitle="Seu Novo Lar na Praia da Costa" />
        <MainProperty />
        <SimilarProperties />
        <OtherOpportunities />
        <SocialProof />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;