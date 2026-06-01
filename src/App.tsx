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
  ChevronRight,
  X,
  Trophy,
  Activity,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackPixelEvent } from './lib/tracking';

const WHATSAPP_NUMBER = "5547992733349";
const WHATSAPP_TEXT = "Olá, gostaria do meu primeiro acesso grátis à Leandro TV+";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={false}
      className="border-b border-white/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-400 leading-relaxed pr-8">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#040810] font-sans text-slate-300 selection:bg-blue-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#040810]/70 backdrop-blur-2xl border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform duration-300">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-extrabold text-white tracking-tight">Leandro TV<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">+</span></span>
          </div>
          <div className="hidden lg:flex items-center gap-10">
            <a href="#beneficios" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative after:absolute after:-bottom-2 after:inset-x-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Benefícios</a>
            <a href="#como-funciona" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative after:absolute after:-bottom-2 after:inset-x-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Como Funciona</a>
            <a href="#comparativo" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative after:absolute after:-bottom-2 after:inset-x-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Comparativo</a>
            <a href="#planos" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative after:absolute after:-bottom-2 after:inset-x-0 after:h-0.5 after:bg-blue-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Planos</a>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFreeTrialClick}
            className="hidden sm:flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5c] hover:to-[#0f776a] text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-105"
          >
            Teste Grátis Agora
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-700 to-cyan-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Liberado Acesso Imediato
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[1.05]">
              TV Online com Estabilidade <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_30px_rgba(37,99,235,0.3)]">Premium.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              Assista a milhares de filmes, séries, canais ao vivo e o melhor do futebol. Sem travamentos, sem fios, em qualquer tela.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleFreeTrialClick}
                className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5c] hover:to-[#0f776a] text-white font-black text-xl transition-all shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.6)] hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                TESTE GRÁTIS AGORA <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPixelEvent('Contact', { content_name: 'Hero WhatsApp' })}
                className="group w-full sm:w-auto px-10 py-5 rounded-full bg-[#121B2A] hover:bg-[#1A2638] border border-white/10 text-white font-bold text-lg transition-all flex items-center justify-center gap-3 hover:-translate-y-1 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
              >
                <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" /> Falar com Especialista
              </a>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-14 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-sm md:text-base font-semibold text-slate-400"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-500" /> Sem multas
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> Ativação em 1 minuto
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> Suporte 24h
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="relative z-20 -mt-10 mb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-[#0B1320] border border-white/5 rounded-3xl p-8 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center justify-evenly gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex items-center gap-4 px-6 w-full justify-center">
              <Users className="w-12 h-12 text-blue-500" />
              <div>
                <p className="text-3xl font-black text-white">+15k</p>
                <p className="text-slate-400 font-medium">Assinantes Ativos</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 pt-8 md:pt-0 w-full justify-center">
              <Activity className="w-12 h-12 text-cyan-400" />
              <div>
                <p className="text-3xl font-black text-white">99.9%</p>
                <p className="text-slate-400 font-medium">Uptime dos Servidores</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-6 pt-8 md:pt-0 w-full justify-center">
              <Star className="w-12 h-12 text-yellow-400" />
              <div>
                <p className="text-3xl font-black text-white">4.9/5</p>
                <p className="text-slate-400 font-medium">No Google e Trustpilot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 bg-[#040810] relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Tecnologia de <span className="text-blue-500">Ponta</span>
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="text-xl text-slate-400 max-w-3xl mx-auto font-medium"
            >
              Diga adeus aos travamentos constantes. Nossa infraestrutura premium foi desenhada para a melhor experiência em streaming do mercado.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: Zap, title: "Qualidade de Cinema", desc: "Assista 100% liso. Transmissões otimizadas em Ultra HD e 4K HDR para as melhores TVs do mercado." },
              { icon: Headset, title: "Suporte Imediato", desc: "Problemas? Resolvidos na hora. Equipe especializada de prontidão no WhatsApp 7 dias por semana." },
              { icon: ShieldCheck, title: "Anti-Travamento 3.0", desc: "Rota blindada contra bloqueios de operadoras. Estabilidade máxima até em dias de jogos clássicos." },
              { icon: MonitorSmartphone, title: "Multi Dispositivos", desc: "Smart TVs, Box Android, Fire TV, Apple TV, iPhone e PC. Seu conteúdo vai com você para todo lugar." },
              { icon: Play, title: "Lançamentos Semanais", desc: "Catálogo atualizado todos os dias. Filmes que acabaram de sair do cinema e as séries mais hypadas." },
              { icon: Activity, title: "Baixa Latência (Delay)", desc: "Comemore o gol antes do seu vizinho. Nossa tecnologia IPTV reduz drasticamente o atraso na transmissão ao vivo." }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                variants={fadeUp}
                className="p-8 rounded-3xl bg-[#09101C] border border-white/[0.03] hover:bg-[#0C1525] hover:border-blue-500/30 transition-all duration-500 group shadow-lg"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-500">
                  <benefit.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparativo" className="py-24 bg-gradient-to-b from-[#040810] to-[#060C15]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Por que somos a melhor escolha?</h2>
            <p className="text-xl text-slate-400">Veja o que diferencia a Leandro TV+ dos concorrentes comuns do mercado.</p>
          </div>

          <div className="bg-[#0B1320] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 bg-[#080D16] p-6 border-b border-white/5">
              <div className="col-span-1"></div>
              <div className="col-span-1 text-center border-r border-white/5">
                <span className="text-lg font-bold text-slate-400">Outros IPTVs</span>
              </div>
              <div className="col-span-1 text-center flex flex-col items-center justify-center gap-2">
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Leandro TV+</span>
              </div>
            </div>
            
            {[
              { feature: "Qualidade de Imagem", others: "SD e 720p serrilhado", us: "Ultra HD e 4K Real" },
              { feature: "Travamentos", others: "Constants, piora no Futebol", us: "Sistema Anti-Block Dedicado" },
              { feature: "Suporte", others: "Robôs ou sem resposta", us: "Humano no WhatsApp (Imediato)" },
              { feature: "Catálogo", others: "Desatualizado / Quebrado", us: "Atualização Diária Garantida" },
              { feature: "Delay (Atraso)", others: "Até 3 minutos de atraso", us: "Baixíssima latência" }
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-6 items-center ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.01]'}`}>
                <div className="col-span-1 font-semibold text-white">{row.feature}</div>
                <div className="col-span-1 text-center font-medium text-slate-500 flex flex-col items-center gap-2">
                  <X className="w-5 h-5 text-red-500/70" />
                  <span className="text-sm">{row.others}</span>
                </div>
                <div className="col-span-1 text-center font-bold text-slate-200 flex flex-col items-center gap-2">
                  <Check className="w-6 h-6 text-green-500" />
                  <span className="text-sm text-blue-300">{row.us}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-20 bg-[#060C15] border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl font-bold text-slate-400 mb-12 tracking-widest uppercase">Compatibilidade Total</h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60"
          >
            <div className="flex flex-col items-center gap-4 hover:text-white hover:opacity-100 transition-all cursor-default">
              <Tv className="w-16 h-16" />
              <span className="font-semibold tracking-wide">SMART TV</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:text-white hover:opacity-100 transition-all cursor-default">
              <MonitorSmartphone className="w-16 h-16" />
              <span className="font-semibold tracking-wide">TV BOX & STICK</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:text-white hover:opacity-100 transition-all cursor-default">
              <Smartphone className="w-16 h-16" />
              <span className="font-semibold tracking-wide">MOBILE</span>
            </div>
            <div className="flex flex-col items-center gap-4 hover:text-white hover:opacity-100 transition-all cursor-default">
              <Laptop className="w-16 h-16" />
              <span className="font-semibold tracking-wide">WEB APP</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-32 bg-[#040810] relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#060C15] to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.h2 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
             className="text-4xl md:text-6xl font-extrabold text-white mb-20 tracking-tight"
          >
             É muito fácil e rápido começar
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[3px] bg-gradient-to-r from-blue-700/0 via-blue-600/50 to-blue-700/0 -z-10 rounded-full"></div>
            
            {[
              { step: 1, title: "Chame no WhatsApp", desc: "Aperte qualquer botão verde nesta página para iniciar o atendimento." },
              { step: 2, title: "Receba o App", desc: "Nossa equipe vai orientar o download do app oficial na sua TV ou celular." },
              { step: 3, title: "Acesso Liberado", desc: "Insira seu usuário e senha e comece a maratona imediatamente." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col items-center relative group"
              >
                <div className="w-20 h-20 rounded-full bg-[#0B1527] border-4 border-[#040810] text-blue-400 font-black text-3xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(37,99,235,0.2)] group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-20"
          >
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFreeTrialClick}
              className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5c] hover:to-[#0f776a] text-white font-black text-xl transition-all shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.6)] hover:-translate-y-1"
            >
              Começar Teste de 1 Hora Gratuito
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-32 bg-[#060C15] relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              O que nossos clientes <span className="text-blue-500">estão dizendo</span>
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-xl text-slate-400 max-w-2xl mx-auto font-medium"
            >
              Veja a opinião de clientes que utilizam nossa plataforma diariamente.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-12 -mx-6 px-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none md:mx-0 md:px-0"
          >
            {[
              { name: "Carlos Henrique", location: "São Paulo/SP", text: "Já utilizei outros serviços e este foi o mais estável. A configuração foi simples e o suporte respondeu rapidamente.", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" },
              { name: "Juliana Santos", location: "Rio de Janeiro/RJ", text: "Uso todos os dias na Smart TV. A qualidade é excelente e o funcionamento é muito estável.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" },
              { name: "Rodrigo Almeida", location: "Belo Horizonte/MG", text: "Recebi o acesso rapidamente e consegui configurar tudo em poucos minutos. Recomendo.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" },
              { name: "Fernanda Costa", location: "Curitiba/PR", text: "Excelente experiência. Atendimento rápido e ótima qualidade de transmissão.", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80" },
              { name: "Marcelo Oliveira", location: "Porto Alegre/RS", text: "Assisto filmes, séries e esportes diariamente. Funciona muito bem e sem complicações.", avatar: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&w=150&q=80" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center p-8 rounded-3xl bg-[#09101C] border border-white/[0.03] hover:bg-[#0C1525] hover:border-blue-500/30 transition-all duration-500 group shadow-lg flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-1 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]" />)}
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8 flex-grow font-medium">"{item.text}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={item.avatar} alt={item.name} loading="lazy" className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/20 group-hover:border-blue-400 transition-colors" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{item.name}</h4>
                    <p className="text-slate-500 text-sm font-medium">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="mt-12 text-center"
          >
            <div className="flex flex-col items-center justify-center gap-2 mb-12">
               <div className="flex gap-2 mb-2">
                 {[1,2,3,4,5].map(star => <Star key={star} className="w-8 h-8 fill-yellow-500 text-yellow-500 drop-shadow-[0_0_12px_rgba(234,179,8,0.5)]" />)}
               </div>
               <div className="flex items-baseline gap-2">
                 <span className="text-white font-black text-4xl">4.9/5</span>
               </div>
               <p className="text-slate-400 font-semibold text-lg mt-1">Mais de 1.000 clientes satisfeitos.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleFreeTrialClick}
                className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-black text-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
                Solicitar Teste Grátis
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPixelEvent('Contact', { content_name: 'Testimonials WhatsApp' })}
                className="group w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5c] hover:to-[#0f776a] text-white font-bold text-xl transition-all flex items-center justify-center gap-3 hover:-translate-y-1 shadow-[0_0_30px_rgba(37,211,102,0.3)]"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" /> Falar no WhatsApp
              </a>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-32 bg-gradient-to-b from-[#040810] to-[#0A1220] relative">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Planos Transparentes</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Tudo desbloqueado. Sem fidelidade. Renove apenas se gostar do serviço (e sabemos que você vai gostar).</p>
          </div>

          <div className="flex justify-center">
            {/* Recommended Plan */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-lg relative bg-gradient-to-b from-[#0F1C33] to-[#0B1527] rounded-[2.5rem] border border-blue-500/30 p-10 md:p-14 shadow-[0_20px_80px_-15px_rgba(37,99,235,0.25)]"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 pb-1">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold uppercase tracking-widest py-2 px-6 rounded-full whitespace-nowrap shadow-xl">
                  Plano VIP Premium
                </span>
              </div>
              
              <div className="text-center mb-10 mt-4">
                <h3 className="text-3xl font-black text-white mb-2">Mensal</h3>
                <p className="text-blue-400 font-semibold text-lg">Liberdade total por 30 dias</p>
              </div>

              <div className="flex justify-center items-start gap-2 mb-12">
                <span className="text-3xl font-bold text-slate-400 mt-2">R$</span>
                <span className="text-7xl font-black text-white tracking-tighter">29,90</span>
                <span className="text-xl text-slate-400 font-medium self-end mb-2">/mês</span>
              </div>

              <div className="space-y-6 mb-12">
                {[
                  { text: "+120 Mil Conteúdos Atualizados", strong: true },
                  { text: "Filmes, Séries, Novelas", strong: false },
                  { text: "PFC, Combate, Conmebol TV", strong: false },
                  { text: "Imagem 4K HDR Real", strong: true },
                  { text: "Anti-Travamento Smart", strong: true },
                  { text: "Canais Adultos (Opcional)", strong: false },
                  { text: "Suporte 24h via WhatsApp", strong: false }
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-blue-500/20 p-1 p rounded-full shrink-0">
                      <Check className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className={`text-lg ${benefit.strong ? 'text-white font-bold' : 'text-slate-300'}`}>{benefit.text}</span>
                  </div>
                ))}
              </div>

              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleContactClick('Plano Mensal', 29.90)}
                className="w-full h-16 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5c] hover:to-[#0f776a] text-white font-black text-xl transition-all shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-[1.02] active:scale-[0.98]"
              >
                QUERO ASSINAR AGORA
              </a>
              <p className="text-center text-sm text-slate-500 mt-6 mtfont-medium">Ao assinar, você recebe bônus exclusivos.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-[#040810] border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Dúvidas Frequentes</h2>
            <p className="text-xl text-slate-400">Tudo o que você precisa saber antes de fazer a melhor escolha.</p>
          </div>

          <div className="border-t border-white/10">
            <FAQItem 
              question="Preciso ter algum aparelho específico ou antena?" 
              answer="Não precisa de antena! Nosso serviço funciona 100% via internet na sua Smart TV (Samsung, LG, Philco, TCL, Android), Tv Box, Computadores, Celulares (Android e iPhone) e Chromecast."
            />
            <FAQItem 
              question="Qual é a velocidade de internet exigida para rodar liso?" 
              answer="Graças à nossa tecnologia de compressão avançada, com apenas 15 Mega reais você já consegue assistir sem travamentos. Para o catálogo 4K HDR, sugerimos 50 Mega."
            />
            <FAQItem 
              question="Como é feita a liberação do acesso?" 
              answer="A liberação é automática e imediata. Seja no teste grátis ou na assinatura paga, você recebe seu usuário, senha e vídeo tutorial de instalação em menos de 1 minuto diretamente no WhatsApp."
            />
            <FAQItem 
              question="Posso usar em mais de uma TV ao mesmo tempo?" 
              answer="O plano padrão é para 1 acesso simultâneo. Você pode instalar em quantos aparelhos quiser, mas usar em um por vez. Caso precise assistir em várias TVs ao mesmo tempo, temos planos adicionais muito baratos, consulte nosso suporte no WhatsApp."
            />
            <FAQItem 
              question="Como funciona se eu quiser cancelar?" 
              answer="Não trabalhamos com pegadinhas, burocracias ou multas. Como é um plano pré-pago mensal, se você não quiser mais o serviço, basta não pagar a fatura do mês seguinte. Sem amarrações."
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 via-[#060B14] to-[#040810] relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <Trophy className="w-20 h-20 text-yellow-500 mb-8 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]" />
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight max-w-4xl leading-tight">
            Pare de pagar caro por TV por Assinatura ruim.
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mb-14 leading-relaxed">
            Faça como mais de 15.000 clientes inteligentes. Assine Leandro TV+ e tenha todos os canais liberados na sua casa hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFreeTrialClick}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5c] hover:to-[#0f776a] text-white font-black text-xl transition-all shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.6)] hover:-translate-y-1 w-full sm:w-auto"
            >
              LIBERAR TESTE GRÁTIS
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackPixelEvent('Contact', { content_name: 'Footer WhatsApp' })}
              className="px-10 py-5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5c] hover:to-[#0f776a] text-white font-bold text-xl transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] flex items-center justify-center gap-3 hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="w-7 h-7" /> ATENDIMENTO WHATSAPP
            </a>
          </div>
          <p className="mt-8 text-slate-500 text-sm font-medium">✨ Ativação imediata • 🔒 Pagamento 100% Seguro</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#020408] border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-extrabold text-white text-2xl tracking-tight">Leandro TV<span className="text-blue-500">+</span></span>
            </div>
            <div className="flex gap-6 text-sm font-semibold text-slate-400">
              <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
              <a href="#comparativo" className="hover:text-white transition-colors">Comparativo</a>
              <a href="#planos" className="hover:text-white transition-colors">Planos</a>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Leandro TV+. O Melhor IPTV do Brasil. Todos os direitos reservados.</p>
            <p className="text-xs text-slate-600 font-medium">Serviço estável operando via CDNs Globais.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Bubble */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackPixelEvent('Contact', { content_name: 'Floating WhatsApp' })}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5c] hover:to-[#0f776a] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        {/* Helper Ping */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#25D366]"></span>
        </span>
      </a>
    </div>
  );
}
