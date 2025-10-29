import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  { q: "Posso usar meu FGTS?", a: "Sim, você pode utilizar o saldo do seu FGTS como parte do pagamento na entrada do seu imóvel, seguindo as regras da Caixa Econômica Federal." },
  { q: "Como funciona o financiamento imobiliário?", a: "O financiamento é um empréstimo feito por um banco para você comprar seu imóvel. Eu te ajudo a encontrar as melhores taxas e a organizar toda a documentação necessária." },
  { q: "Como agendo uma visita?", a: "É simples! Você pode me chamar no WhatsApp ou preencher o formulário de contato nesta página que eu retorno para combinarmos o melhor dia e horário para você." },
  { q: "Quais documentos preciso para comprar um imóvel?", a: "Basicamente, documentos de identificação (RG e CPF), comprovante de estado civil, comprovante de residência e comprovante de renda. Te darei uma lista detalhada." },
];

export const FAQ = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};