"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useLocation } from "react-router-dom";
import { trackLead } from "@/lib/meta-pixel";
import { showSuccess, showError } from "@/utils/toast";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  whatsapp: z.string().min(10, { message: "WhatsApp inválido." }),
  interest: z.string().optional(),
  message: z.string().optional(),
  lgpd: z.boolean().refine(val => val === true, { message: "Você deve aceitar os termos." }),
});

export const LeadForm = () => {
  const location = useLocation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", whatsapp: "", interest: "", message: "", lgpd: false },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const searchParams = new URLSearchParams(location.search);
    const utms = {
      utm_source: searchParams.get('utm_source'),
      utm_medium: searchParams.get('utm_medium'),
      utm_campaign: searchParams.get('utm_campaign'),
      utm_term: searchParams.get('utm_term'),
      utm_content: searchParams.get('utm_content'),
    };

    const dataToSend = { ...values, ...utms };
    
    const { error } = await supabase.from('leads').insert([dataToSend]);

    if (error) {
      console.error("Erro ao enviar lead:", error);
      showError("Ocorreu um erro ao enviar seu contato. Tente novamente.");
    } else {
      // Dispara o evento de Lead para o Meta Pixel
      trackLead();
      showSuccess("Contato enviado com sucesso! Em breve retornarei.");
      form.reset();
    }
  }

  return (
    <section id="lead-form" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-2">Ficou com alguma dúvida?</h2>
        <p className="text-center text-gray-600 mb-8">Preencha o formulário abaixo que entrarei em contato.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl><Input placeholder="Seu nome completo" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="whatsapp" render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp</FormLabel>
                <FormControl><Input placeholder="(99) 99999-9999" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="interest" render={({ field }) => (
              <FormItem>
                <FormLabel>Bairro de Interesse</FormLabel>
                <FormControl><Input placeholder="Ex: Praia da Costa, Itapuã" {...field} /></FormControl>
              </FormItem>
            )} />
            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem (Opcional)</FormLabel>
                <FormControl><Textarea placeholder="Deixe sua mensagem aqui..." {...field} /></FormControl>
              </FormItem>
            )} />
            <FormField control={form.control} name="lgpd" render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Autorizo o contato conforme a Política de Privacidade.</FormLabel>
                </div>
              </FormItem>
            )} />
            <Button type="submit" size="lg" className="w-full bg-teal-500 hover:bg-teal-600">Enviar Contato</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};