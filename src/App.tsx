import React, { useState } from 'react';
import { 
  Play, 
  MessageCircle, 
  CheckCircle2, 
  MonitorSmartphone, 
  Zap, 
  Headset, 
  ShieldCheck, 
  Tv, 
  Smartphone, 
  Laptop, 
  ChevronDown, 
  Star,
  Check,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackPixelEvent } from './lib/tracking';

const WHATSAPP_NUMBER = "5547992733349";
const WHATSAPP_TEXT = "Olá, gostaria do meu primeiro acesso grátis à Leandro TV+";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <ChevronDown className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const handleContactClick = (planName: string, price: number) => {
    trackPixelEvent('Contact', {
      content_name: planName,
      value: price,
      currency: 'BRL'
    });
  };

  const handleFreeTrialClick = () => {
    trackPixelEvent('Contact', { content_name: 'Teste Grátis' });
  };

  return (
    <div className="min-h-screen bg-[#060B14] font-sans text-slate-300 selection:bg-blue-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#060B14]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <Play className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Leandro TV<span className="text-blue-500">+</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#beneficios" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Benefícios</a>
            <a href="#como-funciona" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Como Funciona</a>
            <a href="#planos" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Planos</a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Dúvidas</a>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFreeTrialClick}
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            Teste Grátis
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-600/10 via-blue-900/5 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Sinal Digital Estável 24/7
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 max-w-4xl leading-[1.1]">
              TV Online com Qualidade Premium e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Máxima Estabilidade</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Assista seus canais, filmes, séries e esportes favoritos em qualquer dispositivo. Sem travamentos, sem antenas e com qualidade incrível.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleFreeTrialClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Teste Grátis Agora <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPixelEvent('Contact', { content_name: 'Hero WhatsApp' })}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> Atendimento rápido
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> Alta estabilidade
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> Compatível com Smart TV
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`w-12 h-12 rounded-full border-2 border-[#060B14] flex items-center justify-center font-bold text-white shadow-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md`}>
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-white font-medium">Mais de 5.000 clientes satisfeitos</p>
              <p className="text-sm text-slate-400">Avaliações 5 estrelas em nosso suporte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 bg-[#060B14]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">O que fazemos de melhor</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Uma infraestrutura premium desenhada para oferecer a melhor experiência em streaming.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Alta Qualidade", desc: "Transmissões em Ultra HD, 4K e FHD para você aproveitar cada detalhe na sua TV." },
              { icon: Headset, title: "Suporte Rápido", desc: "Atendimento humano e dedicado pelo WhatsApp. Estamos sempre prontos para ajudar." },
              { icon: MonitorSmartphone, title: "Compatibilidade Total", desc: "Assista na Smart TV, celular, computador, TV Box ou Chromecast com facilidade." },
              { icon: CheckCircle2, title: "Instalação Simples", desc: "Configuração em menos de 5 minutos, auxiliada por tutoriais passo a passo." },
              { icon: Play, title: "Conteúdo Atualizado", desc: "Acesso aos filmes recém-lançados, séries do momento e todos os canais ao vivo." },
              { icon: ShieldCheck, title: "Excelente Estabilidade", desc: "Servidores otimizados com sistema anti-travamentos (Anti-Block) de alta performance." }
            ].map((benefit, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-24 bg-gradient-to-b from-white/[0.01] to-[#060B14] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-16 tracking-tight">Assista onde quiser</h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-70">
            <div className="flex flex-col items-center gap-4">
              <Tv className="w-16 h-16 text-slate-300" />
              <span className="font-medium text-slate-300">Smart TV</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <MonitorSmartphone className="w-16 h-16 text-slate-300" />
              <span className="font-medium text-slate-300">TV Box</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Smartphone className="w-16 h-16 text-slate-300" />
              <span className="font-medium text-slate-300">Celulares</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Laptop className="w-16 h-16 text-slate-300" />
              <span className="font-medium text-slate-300">Computadores</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-24 bg-[#060B14]">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">Três passos para começar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -z-10"></div>
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.4)]">1</div>
              <h3 className="text-xl font-bold text-white mb-3">Solicite o teste</h3>
              <p className="text-slate-400">Clique no botão para falar conosco e pedir sua avaliação de degustação gratuita.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.4)]">2</div>
              <h3 className="text-xl font-bold text-white mb-3">Receba acesso</h3>
              <p className="text-slate-400">Nosso sistema processa e libera seus dados de login em minutos através do WhatsApp.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(37,99,235,0.4)]">3</div>
              <h3 className="text-xl font-bold text-white mb-3">Aproveite</h3>
              <p className="text-slate-400">Configure no dispositivo da sua preferência e pronto! O entretenimento começou.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFreeTrialClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              Iniciar Teste Agora <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-24 bg-gradient-to-b from-[#060B14] to-[#0A1220]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Planos simples e transparentes</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Acesso liberado a todo o conteúdo premium sem fidelidade ou surpresas no cartão.</p>
          </div>

          <div className="flex justify-center">
            {/* Recommended Plan */}
            <div className="w-full max-w-md relative bg-[#0B1527] rounded-3xl border border-blue-500/40 p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full whitespace-nowrap shadow-lg">
                  O Mais Procurado
                </span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Plano Mensal</h3>
                <p className="text-slate-400 font-medium">Acesso Completo por 30 Dias</p>
              </div>

              <div className="flex justify-center items-baseline gap-2 mb-10">
                <span className="text-2xl font-bold text-blue-400">R$</span>
                <span className="text-6xl font-extrabold text-white tracking-tighter">29,90</span>
                <span className="text-slate-400 font-medium">/mês</span>
              </div>

              <div className="space-y-5 mb-10">
                {[
                  "+100.000 Conteúdos",
                  "Qualidade Ultra HD e 4K",
                  "Grade Completa de Esportes",
                  "Canais Adultos (Opcional)",
                  "Suporte VIP Humanizado",
                  "Sem Contrato de Fidelidade"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-blue-400 shrink-0" />
                    <span className="text-slate-300 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleContactClick('Plano Mensal', 29.90)}
                className="w-full block text-center py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25"
              >
                Assinar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#060B14] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Perguntas Frequentes</h2>
            <p className="text-slate-400">Encontre respostas rápidas para as dúvidas mais comuns dos nossos clientes.</p>
          </div>

          <div className="mb-12 border-t border-white/10">
            <FAQItem 
              question="Preciso ter algum aparelho específico?" 
              answer="Não. Nosso serviço funciona perfeitamente em Smart TVs (Samsung, LG, Roku, Android), Tv Box, Computadores, Celulares (Android e iOS) e Chromecast. Basta ter conexão com a internet."
            />
            <FAQItem 
              question="Qual é a velocidade de internet recomendada?" 
              answer="Para aproveitar nossos canais SD, HD e Full HD recomendamos no mínimo 15 Megas de velocidade. Já para conteúdos em 4K, recomendamos 50 Megas ou mais para garantir estabilidade."
            />
            <FAQItem 
              question="Como recebo meus dados de acesso?" 
              answer="A liberação é automática! Segundos após a confirmação do pagamento, você receberá o login, senha, link do servidor e tutorial completo diretamente no seu WhatsApp."
            />
            <FAQItem 
              question="Tem fidelidade ou multa de cancelamento?" 
              answer="Garantimos transparência total: não existe contrato de fidelidade nem consultas ao SPC/Serasa. É um sistema pré-pago, você renova apenas o mês que quiser assistir."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A1220] to-[#060B14] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight max-w-3xl mx-auto">
            Pronto para transformar sua experiência com TV?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
            Junte-se a milhares de clientes que já cortaram o cabo da TV por assinatura tradicional e desfrutam de total liberdade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFreeTrialClick}
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-1"
            >
              Liberar Teste Grátis
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixelEvent('Contact', { content_name: 'Footer WhatsApp' })}
              className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" /> Via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#040810] border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Play className="w-5 h-5 text-blue-500 fill-blue-500" />
            <span className="font-bold text-white text-lg tracking-tight">Leandro TV<span className="text-blue-500">+</span></span>
          </div>
          <p className="mb-2">© {new Date().getFullYear()} Leandro TV+. Todos os direitos reservados.</p>
          <p className="text-xs opacity-60">Operamos globalmente oferecendo estabilidade, qualidade de imagem e acesso rápido.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Bubble */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackPixelEvent('Contact', { content_name: 'Floating WhatsApp' })}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center flex-col group"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
