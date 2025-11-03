import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-3xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Política de Privacidade</h1>
        
        <div className="space-y-4 text-gray-700">
          <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <h2 className="text-2xl font-semibold pt-4">1. Coleta de Informações</h2>
          <p>
            Coletamos informações que você nos fornece diretamente ao preencher o formulário de contato em nosso site. As informações coletadas incluem:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Nome</li>
            <li>Número de WhatsApp</li>
            <li>Bairro de Interesse (opcional)</li>
            <li>Mensagem (opcional)</li>
          </ul>
          <p>
            Também podemos coletar informações de navegação, como parâmetros UTM, para entender a origem do seu acesso.
          </p>

          <h2 className="text-2xl font-semibold pt-4">2. Uso das Informações</h2>
          <p>
            As informações que coletamos são usadas exclusivamente para os seguintes propósitos:
          </p>
          <ul className="list-disc list-inside pl-4">
            <li>Entrar em contato com você para fornecer informações sobre imóveis e agendar visitas.</li>
            <li>Entender suas necessidades e interesses para oferecer um atendimento personalizado.</li>
            <li>Analisar a eficácia de nossas campanhas de marketing.</li>
          </ul>

          <h2 className="text-2xl font-semibold pt-4">3. Armazenamento e Segurança</h2>
          <p>
            Suas informações são armazenadas de forma segura em nosso banco de dados (Supabase) e são acessadas apenas por profissionais autorizados. Tomamos medidas para proteger seus dados contra acesso não autorizado, alteração ou destruição.
          </p>

          <h2 className="text-2xl font-semibold pt-4">4. Compartilhamento de Informações</h2>
          <p>
            Não compartilhamos, vendemos ou alugamos suas informações pessoais para terceiros para fins de marketing. Suas informações são confidenciais e usadas apenas para o processo de consultoria imobiliária.
          </p>

          <h2 className="text-2xl font-semibold pt-4">5. Seus Direitos</h2>
          <p>
            Você tem o direito de solicitar o acesso, a correção ou a exclusão de suas informações pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco pelo WhatsApp.
          </p>
          
          <h2 className="text-2xl font-semibold pt-4">6. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Utilizamos o Meta Pixel para fins de remarketing e para acompanhar a eficácia de nossos anúncios. Isso nos ajuda a exibir anúncios relevantes para pessoas que já demonstraram interesse em nossos serviços. Nenhuma informação pessoal identificável é compartilhada com o Facebook através deste pixel.
          </p>

          <h2 className="text-2xl font-semibold pt-4">7. Alterações nesta Política</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações publicando a nova política nesta página.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="text-teal-500 hover:text-teal-700 underline">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;