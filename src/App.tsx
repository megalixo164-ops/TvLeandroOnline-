import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PricingCarousel } from './components/PricingCarousel';
import { 
  Tv, 
  Zap, 
  Film, 
  MonitorSmartphone, 
  Headset, 
  Check, 
  ChevronDown, 
  MessageCircle,
  Smartphone,
  Monitor,
  Cast,
  Menu,
  X,
  Play,
  Info,
  Rocket,
  Unlock,
  ChevronLeft,
  ChevronRight,
  CheckCheck,
  ArrowLeft,
  Video,
  Phone,
  MoreVertical
} from 'lucide-react';

const WHATSAPP_NUMBER = "5547992733349";
const WHATSAPP_TEXT = "Olá, quero meu teste grátis na Leandro TV+";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

const feedbacks = [
  {
    id: 1,
    name: "Carlos Silva",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    clientMsg: "Instalei o app aqui agora e gostei muito, bem rápido 👏",
    clientTime: "10:42",
    supportMsg: "Que bom saber disso! Muito obrigado pelo feedback 🙌",
    supportTime: "10:45"
  },
  {
    id: 3,
    name: "Roberto Mendes",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    clientMsg: "Peguei o plano de 3 meses e está funcionando perfeito até agora.",
    clientTime: "09:20",
    supportMsg: "Obrigado pela confiança! Esperamos que aproveite bastante.",
    supportTime: "09:25"
  },
  {
    id: 5,
    name: "Marcos Oliveira",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    clientMsg: "O suporte de vocês é nota 10, me ajudaram rapidinho a configurar na TV.",
    clientTime: "11:30",
    supportMsg: "Conte sempre com a gente! O importante é você conseguir assistir.",
    supportTime: "11:35"
  },
  {
    id: 6,
    name: "Fernanda Lima",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    clientMsg: "Melhor IPTV que já testei, não trava nada na novela.",
    clientTime: "19:10",
    supportMsg: "Focamos muito na estabilidade! Boa novela pra você 📺",
    supportTime: "19:12"
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false);
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState(false);
  const [isMultiplatformModalOpen, setIsMultiplatformModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const features = [
    {
      id: 'zero-travamentos',
      title: 'IPTV Zero Travamentos',
      desc: 'Clique para ver detalhes da nossa infraestrutura.',
      image: 'https://i.imgur.com/uODMHHK.png',
      icon: Rocket,
      action: () => setIsFeatureModalOpen(true)
    },
    {
      id: 'catalogo',
      title: 'Lista IPTV Atualizada',
      desc: 'Clique para ver detalhes sobre nosso acervo.',
      image: 'https://i.imgur.com/Y8Yy08G.png',
      icon: Film,
      action: () => setIsCatalogModalOpen(true)
    },
    {
      id: 'multiplataforma',
      title: 'IPTV Multiplataforma',
      desc: 'Clique para ver detalhes sobre compatibilidade.',
      image: 'https://i.imgur.com/BxYKbsn.png',
      icon: MonitorSmartphone,
      action: () => setIsMultiplatformModalOpen(true)
    },
    {
      id: 'suporte',
      title: 'Suporte Premium',
      desc: 'Clique para falar com nosso suporte.',
      image: 'https://i.imgur.com/aJ3HnSA.png',
      icon: Headset,
      action: () => setIsSupportModalOpen(true)
    },
    {
      id: 'contrato',
      title: 'IPTV sem contrato',
      desc: 'Clique para saber mais sobre nossa política sem fidelidade.',
      image: 'https://i.imgur.com/1ImclTN.png',
      icon: Unlock,
      action: () => setIsContractModalOpen(true)
    }
  ];



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-[var(--color-brand-navy-dark)] text-white selection:bg-[var(--color-brand-cyan)] selection:text-white scroll-smooth overflow-x-hidden">
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" className="absolute pointer-events-none">
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#43afef" />
            <stop offset="100%" stopColor="#7decf1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Logo Modal */}
      <AnimatePresence>
        {isLogoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setIsLogoModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative max-w-lg w-full aspect-square flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsLogoModalOpen(false)}
                className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="absolute inset-0 bg-[var(--color-brand-cyan)]/20 blur-[100px] rounded-full animate-pulse-slow"></div>
              <img 
                src="https://i.imgur.com/gB6o74h.jpeg" 
                alt="Leandro TV+ Logo Grande" 
                className="relative w-full h-full object-contain drop-shadow-[0_0_50px_rgba(67,175,239,0.3)] rounded-full"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[var(--color-brand-navy-dark)] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 group cursor-pointer"
              onClick={() => setIsLogoModalOpen(true)}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-[var(--color-brand-cyan)]/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="https://i.imgur.com/gB6o74h.jpeg" 
                  alt="Leandro TV+" 
                  className="relative h-12 w-12 object-cover rounded-full border-2 border-[var(--color-brand-cyan)]/30 brightness-110 contrast-110 shadow-[0_0_15px_rgba(67,175,239,0.2)]" 
                  referrerPolicy="no-referrer" 
                />
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Início</a>
              <a href="#recursos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sobre</a>
              <a href="#planos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Planos</a>
              <a href="#duvidas" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Dúvidas</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#008F4C] to-[#00FF7F] text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(0,255,127,0.2)] hover:shadow-[0_0_25px_rgba(0,255,127,0.5)] hover:scale-105 active:scale-95"
              >
                Teste Grátis
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--color-brand-navy-dark)] border-b border-white/10 absolute w-full shadow-2xl">
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-300 hover:text-[var(--color-brand-cyan)] transition-colors">Início</a>
              <a href="#recursos" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-300 hover:text-[var(--color-brand-cyan)] transition-colors">Sobre</a>
              <a href="#planos" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-300 hover:text-[var(--color-brand-cyan)] transition-colors">Planos</a>
              <a href="#duvidas" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-gray-300 hover:text-[var(--color-brand-cyan)] transition-colors">Dúvidas</a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-[#008F4C] to-[#00FF7F] text-white px-6 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(0,255,127,0.2)] hover:shadow-[0_0_25px_rgba(0,255,127,0.5)] hover:scale-105"
              >
                Teste Grátis
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section (Netflix Style) */}
      <section id="inicio" className="relative h-[90vh] min-h-[450px] md:min-h-[600px] w-full flex items-center">
        {/* Background Image with Cinematic Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://i.imgur.com/aBGT6rF.png" 
            alt="TV Streaming Background" 
            className="w-full h-full object-cover blur-[3px]"
            referrerPolicy="no-referrer"
          />
          {/* Netflix-style cinematic gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-navy-dark)] via-[var(--color-brand-navy-dark)]/60 to-transparent w-[80%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy-dark)] via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-brand-navy-dark)]"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-tight drop-shadow-2xl">
              A Melhor Experiência de <br />
              <span className="texto-gradiente">TV Online</span>
            </h1>
            <p className="text-lg sm:text-2xl text-white font-medium mb-8 drop-shadow-lg max-w-xl">
              Acesse a melhor TV Online com canais ao vivo, filmes online e séries completas em TV ao vivo HD e 4K. Experiência de cinema com o Melhor IPTV do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#008F4C] to-[#00FF7F] text-white px-8 py-4 rounded-full font-bold text-xl transition-all shadow-[0_0_20px_rgba(0,255,127,0.3)] hover:shadow-[0_0_30px_rgba(0,255,127,0.6)] transform hover:scale-105 w-full sm:w-auto"
              >
                <Play className="w-6 h-6 fill-current" />
                Assinar Agora
              </a>
              <a 
                href="#planos"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0062E6] to-[#33AEFF] hover:brightness-110 text-white px-8 py-4 rounded-full font-bold text-xl transition-all backdrop-blur-sm border border-white/20 transform hover:scale-105 w-full sm:w-auto shadow-[0_0_20px_rgba(0,98,230,0.3)] hover:shadow-[0_0_30px_rgba(0,98,230,0.6)]"
              >
                <Info className="w-6 h-6" />
                <span>Ver Planos IPTV</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Series Carousel */}
      <div className="relative z-30 w-full overflow-hidden mt-8 md:-mt-24 mb-12">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[var(--color-brand-navy-dark)] via-transparent to-[var(--color-brand-navy-dark)]"></div>
        <motion.div 
          className="flex gap-6 w-max px-4"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 35, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-40 h-60 md:w-52 md:h-80 bg-[#0b1623] rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group"
                >
                  {/* Background Image for F1 */}
                  {i === 0 && (
                    <img 
                      src="https://i.imgur.com/7JZNh7G.png" 
                      alt="Destaque F1" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F2 */}
                  {i === 1 && (
                    <img 
                      src="https://i.imgur.com/VH7Qpl9.png" 
                      alt="Destaque F2" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F3 */}
                  {i === 2 && (
                    <img 
                      src="https://i.imgur.com/0KpC37M.png" 
                      alt="Destaque F3" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F4 */}
                  {i === 3 && (
                    <img 
                      src="https://i.imgur.com/dEUiYbZ.png" 
                      alt="Destaque F4" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F5 */}
                  {i === 4 && (
                    <img 
                      src="https://i.imgur.com/NSetzHI.png" 
                      alt="Destaque F5" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F6 */}
                  {i === 5 && (
                    <img 
                      src="https://i.imgur.com/oyTs1Hp.png" 
                      alt="Destaque F6" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F7 */}
                  {i === 6 && (
                    <img 
                      src="https://i.imgur.com/gTwbLGn.png" 
                      alt="Destaque F7" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F8 */}
                  {i === 7 && (
                    <img 
                      src="https://i.imgur.com/nWPbzK1.png" 
                      alt="Destaque F8" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F9 */}
                  {i === 8 && (
                    <img 
                      src="https://i.imgur.com/xU5wDHG.jpeg" 
                      alt="Destaque F9" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F10 */}
                  {i === 9 && (
                    <img 
                      src="https://i.imgur.com/0WIYgQ1.png" 
                      alt="Destaque F10" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}



                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 z-10"></div>
                  
                  {/* Placeholder Number */}
                  <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300 z-20 relative">
                    F{i + 1}
                  </span>
                  
                  {/* Label Removed */}

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-brand-cyan)]/0 group-hover:bg-[var(--color-brand-cyan)]/5 transition-colors duration-300 z-30"></div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Features Carousel */}
      <section id="recursos" className="pt-12 pb-32 relative z-20 -mt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://i.imgur.com/yGRqNnf.png" 
            alt="Background Texture" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-navy-dark)] via-[var(--color-brand-navy-dark)]/80 to-[var(--color-brand-navy-dark)]"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 px-2 text-white">Por Que Nos Escolher?</h2>
          <h3 className="text-xl md:text-2xl font-bold mb-4 px-2 uppercase tracking-wide">
            <span className="texto-gradiente">O MELHOR SERVIÇO DE IPTV PREMIUM DO BRASIL</span>
          </h3>
          
          <p className="text-gray-300 px-2 mb-8 max-w-4xl text-lg leading-relaxed">
            A Leandro TV+ é referência em Streaming de alta performance. Oferecemos o melhor IPTV do Brasil para quem busca qualidade, estabilidade e zero travamentos. Esqueça as antenas, fiações e instalações complicadas: com nossa lista IPTV atualizada, você tem o mundo do entretenimento na palma da sua mão.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 pt-4 px-2 max-w-5xl mx-auto">
            {features.slice(0, 4).map((feature, index) => (
              <div 
                key={`${feature.id}-${index}`}
                onClick={feature.action}
                className="w-full aspect-video bg-[var(--color-brand-navy)] rounded-md border border-white/5 relative group cursor-pointer transition-all duration-300 hover:scale-105 hover:z-30 hover:shadow-[0_10px_40px_-10px_rgba(67,175,239,0.3)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-navy-dark)] via-transparent to-transparent z-10 rounded-md"></div>
                <img src={feature.image} alt={feature.title} className="absolute inset-0 w-full h-full object-cover rounded-md opacity-60 group-hover:opacity-70 transition-opacity" />
                
                {/* Glassmorphism Icon Container */}
                <div className="absolute top-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg z-20 transform group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-[var(--color-brand-cyan)] drop-shadow-[0_0_8px_rgba(67,175,239,0.8)]" />
                </div>

                <div className="absolute bottom-0 left-0 p-6 z-20 w-full transform translate-y-0 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white drop-shadow-md">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-200 opacity-100 transition-opacity duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-300 px-2 mb-8 max-w-4xl text-lg leading-relaxed">
            Seja para assistir ao futebol ao vivo, filmes recém-lançados ou maratonar suas séries favoritas, nossa infraestrutura de IPTV premium entrega a menor latência e a melhor fidelidade de som e imagem com qualidade 4K.
          </p>

          <div className="flex justify-center md:justify-start px-2">
            <a 
              href="#planos"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#008F4C] to-[#00FF7F] text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,255,127,0.2)] hover:shadow-[0_0_30px_rgba(0,255,127,0.5)] hover:scale-105 active:scale-95"
            >
              CONHECER A LEANDRO TV+
            </a>
          </div>
        </div>
      </section>

      {/* Infinite Movie Carousel */}
      <div className="relative z-30 w-full overflow-hidden -mt-24 mb-12">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[var(--color-brand-navy-dark)] via-transparent to-[var(--color-brand-navy-dark)]"></div>
        <motion.div 
          className="flex gap-6 w-max px-4"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 30, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-40 h-60 md:w-52 md:h-80 bg-[#0b1623] rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group"
                >
                  {/* Background Image for S1 */}
                  {i === 0 && (
                    <img 
                      src="https://i.imgur.com/7MmpsfG.png" 
                      alt="Destaque S1" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S2 */}
                  {i === 1 && (
                    <img 
                      src="https://i.imgur.com/oerxMu6.jpeg" 
                      alt="Destaque S2" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S3 */}
                  {i === 2 && (
                    <img 
                      src="https://i.imgur.com/IJ2pkLV.jpeg" 
                      alt="Destaque S3" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S4 */}
                  {i === 3 && (
                    <img 
                      src="https://i.imgur.com/XuXjqYE.png" 
                      alt="Destaque S4" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S5 */}
                  {i === 4 && (
                    <img 
                      src="https://i.imgur.com/T9E0DzN.png" 
                      alt="Destaque S5" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S6 */}
                  {i === 5 && (
                    <img 
                      src="https://i.imgur.com/3BMbhlV.png" 
                      alt="Destaque S6" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S7 */}
                  {i === 6 && (
                    <img 
                      src="https://i.imgur.com/NwfOuJt.jpeg" 
                      alt="Destaque S7" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S8 */}
                  {i === 7 && (
                    <img 
                      src="https://i.imgur.com/QLssNnn.png" 
                      alt="Destaque S8" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S9 */}
                  {i === 8 && (
                    <img 
                      src="https://i.imgur.com/SSC0qZ9.png" 
                      alt="Destaque S9" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S10 */}
                  {i === 9 && (
                    <img 
                      src="https://i.imgur.com/u0fj70v.png" 
                      alt="Destaque S10" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 z-10"></div>
                  
                  {/* Placeholder Number */}
                  <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300 z-20 relative">
                    S{i + 1}
                  </span>
                  
                  {/* Label Removed */}

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-brand-cyan)]/0 group-hover:bg-[var(--color-brand-cyan)]/5 transition-colors duration-300 z-30"></div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* How it works */}
      <section className="py-16 border-y border-white/5 bg-[#030f1c] relative z-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/gXICK3l.png" 
            alt="Background" 
            className="w-full h-full object-cover blur-[4px] opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#030f1c]/80"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white uppercase tracking-wide">COMO FUNCIONA O <span className="texto-gradiente">IPTV?</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Simples, rápido e compatível com todos os dispositivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-[var(--color-brand-navy)] p-8 rounded-xl border border-white/5 text-center relative group hover:border-[var(--color-brand-cyan)]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] rounded-full flex items-center justify-center text-[#020b16] font-bold text-2xl mx-auto mb-6 shadow-[0_0_15px_rgba(67,175,239,0.5)]">1</div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase">ESCOLHA O PLANO</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Selecione o plano de IPTV que melhor atende sua necessidade.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-[var(--color-brand-navy)] p-8 rounded-xl border border-white/5 text-center relative group hover:border-[var(--color-brand-cyan)]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] rounded-full flex items-center justify-center text-[#020b16] font-bold text-2xl mx-auto mb-6 shadow-[0_0_15px_rgba(67,175,239,0.5)]">2</div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase">FALE CONOSCO</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Clique no botão e fale direto com um suporte IPTV via WhatsApp.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-[var(--color-brand-navy)] p-8 rounded-xl border border-white/5 text-center relative group hover:border-[var(--color-brand-cyan)]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] rounded-full flex items-center justify-center text-[#020b16] font-bold text-2xl mx-auto mb-6 shadow-[0_0_15px_rgba(67,175,239,0.5)]">3</div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase">RECEBA O ACESSO</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Liberação imediata! Basta configurar sua lista IPTV atualizada.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-[var(--color-brand-navy)] p-8 rounded-xl border border-white/5 text-center relative group hover:border-[var(--color-brand-cyan)]/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] rounded-full flex items-center justify-center text-[#020b16] font-bold text-2xl mx-auto mb-6 shadow-[0_0_15px_rgba(67,175,239,0.5)]">4</div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase">APERTE O PLAY</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Comece a assistir seus conteúdos favoritos na hora em qualquer dispositivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Channels/Stories Carousel */}
      <div className="relative z-30 w-full overflow-hidden py-8 bg-[#030f1c] border-b border-white/5">
        <div className="relative z-20 text-center mb-8 px-4">
           <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
             Tenha acesso a todos os <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)]">Canais e plataformas streaming</span> do Brasil
           </h2>
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#030f1c] via-transparent to-[#030f1c]"></div>
        <motion.div 
          className="flex gap-8 w-max px-4"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-8">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#0b1623] border-2 border-white/10 flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] group hover:border-[var(--color-brand-cyan)] transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                  
                  {/* Placeholder Number */}
                  <span className="text-4xl md:text-5xl font-black text-white/20 group-hover:text-white/40 transition-colors duration-300 z-10">
                    {i + 1}
                  </span>
                  
                  {/* Image Placeholder Overlay (User will replace background) */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[inset_0_0_20px_rgba(67,175,239,0.3)] transition-all duration-300"></div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pricing Carousel */}
      <section id="planos" className="py-12 bg-[#020b16]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 px-2 text-center text-white">
            Planos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)]">Premium</span>
          </h2>
          <PricingCarousel whatsappLink={WHATSAPP_LINK} />
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="py-20 bg-[#020b16] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Veja o que nossos clientes estão dizendo
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Feedbacks reais de quem já usa nosso aplicativo todos os dias.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mb-12 max-w-3xl mx-auto">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111b21] rounded-2xl overflow-hidden border border-[#202c33] shadow-2xl relative group hover:border-[var(--color-brand-cyan)]/30 transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                {/* App Header */}
                <div className="bg-[#202c33] px-4 py-3 flex items-center justify-between text-[#e9edef] shadow-md relative z-10">
                  <div className="flex items-center gap-3">
                    <ArrowLeft size={20} className="cursor-pointer text-[#8696a0]" />
                    <div className="relative">
                      <img 
                        src={feedback.avatar} 
                        alt={feedback.name} 
                        className="w-10 h-10 rounded-full object-cover border border-white/10"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm leading-tight text-[#e9edef]">{feedback.name}</span>
                      <span className="text-[10px] text-[#8696a0] leading-tight">Online agora</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 text-[#8696a0]">
                    <Video size={20} />
                    <Phone size={18} />
                    <MoreVertical size={18} />
                  </div>
                </div>

                {/* Chat Area */}
                <div className="bg-[#0b141a] p-4 flex flex-col relative h-full min-h-[180px]">
                  {/* Background Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat pointer-events-none"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-center">
                    <div className="flex justify-center mb-4">
                      <span className="bg-[#1f2c34] text-[#8696a0] text-[10px] px-2 py-0.5 rounded-lg shadow-sm font-medium uppercase tracking-wide border border-[#202c33]">Hoje</span>
                    </div>
                    
                    {/* Incoming Message (Client) */}
                    <div className="self-start bg-[#202c33] rounded-lg rounded-tl-none p-2 px-3 shadow-sm max-w-[85%] mb-3 relative group">
                      <p className="text-sm text-[#e9edef] leading-snug">{feedback.clientMsg}</p>
                      <span className="text-[10px] text-[#8696a0] float-right mt-1 ml-2">{feedback.clientTime}</span>
                    </div>

                    {/* Outgoing Message (Support) */}
                    <div className="self-end bg-[#005c4b] rounded-lg rounded-tr-none p-2 px-3 shadow-sm max-w-[85%] relative group ml-auto">
                      <p className="text-sm text-[#e9edef] leading-snug">{feedback.supportMsg}</p>
                      <div className="flex items-center justify-end gap-1 mt-1 ml-1 float-right">
                        <span className="text-[10px] text-[#8696a0]/80">{feedback.supportTime}</span>
                        <CheckCheck size={14} className="text-[#53bdeb]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#008F4C] to-[#00FF7F] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(0,255,127,0.2)] hover:shadow-[0_0_30px_rgba(0,255,127,0.5)] hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              Quero testar o aplicativo
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Carousel */}
      <section id="duvidas" className="py-12 bg-[var(--color-brand-navy-dark)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 px-2">Perguntas Frequentes</h2>

          <div className="flex overflow-x-auto gap-4 pb-8 pt-4 px-2 hide-scrollbar snap-x snap-mandatory">
            <div className="min-w-[20rem] md:min-w-[25rem] snap-start">
              <FAQItem 
                question="Preciso de internet rápida?" 
                answer="Recomendamos pelo menos 15 Mega para HD e 30 Mega para 4K. Nossa tecnologia P2P ajuda na estabilidade."
              />
            </div>
            <div className="min-w-[20rem] md:min-w-[25rem] snap-start">
              <FAQItem 
                question="Como recebo o acesso?" 
                answer="Após a confirmação, você receberá seus dados de acesso e tutorial diretamente no WhatsApp."
              />
            </div>
            <div className="min-w-[20rem] md:min-w-[25rem] snap-start">
              <FAQItem 
                question="Posso testar antes de pagar?" 
                answer="Sim! Oferecemos um teste gratuito de 1 hora para você conhecer nossa grade e qualidade."
              />
            </div>
            <div className="min-w-[20rem] md:min-w-[25rem] snap-start">
              <FAQItem 
                question="Em quais aparelhos posso assistir?" 
                answer="Compatível com Smart TVs, TV Box, Smartphones (Android/iOS), PC e Chromecast."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <img 
                src="https://i.imgur.com/gB6o74h.jpeg" 
                alt="Leandro TV+" 
                className="h-12 w-12 object-cover rounded-full opacity-80 hover:opacity-100 transition-all duration-300 border border-white/10" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center w-full md:w-auto">
              <a href="#inicio" className="text-gray-400 hover:text-white transition-colors py-2 px-4 md:p-0 text-lg md:text-base">Início</a>
              <a href="#planos" className="text-gray-400 hover:text-white transition-colors py-2 px-4 md:p-0 text-lg md:text-base">Planos</a>
              <a href="#duvidas" className="text-gray-400 hover:text-white transition-colors py-2 px-4 md:p-0 text-lg md:text-base">Dúvidas</a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <p className="text-center md:text-left">© 2026 Leandro TV+ - Todos os direitos reservados.</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <a href="#" className="hover:text-gray-300 transition-colors py-2">Termos de Uso</a>
              <a href="#" className="hover:text-gray-300 transition-colors py-2">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {isFeatureModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setIsFeatureModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#080808] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsFeatureModalOpen(false)}
                className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-[var(--color-brand-cyan)] transition-all z-50 backdrop-blur-sm touch-manipulation"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative h-64 w-full">
                 <img 
                   src="https://i.imgur.com/uODMHHK.png" 
                   alt="IPTV Zero Travamentos" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent"></div>
                 
                 <div className="absolute bottom-4 left-8 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[var(--color-brand-cyan)]/20 backdrop-blur-md border border-[var(--color-brand-cyan)]/30">
                      <Rocket className="w-8 h-8 text-[var(--color-brand-cyan)]" />
                    </div>
                 </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <h3 className="text-3xl font-black text-white mb-4 font-display uppercase tracking-wide">IPTV Zero Travamentos</h3>
                <p className="text-[#e0e0e0] leading-relaxed text-lg font-sans">
                  Esqueça a tela carregando. Nossa infraestrutura conta com servidores próprios e máquinas dedicadas de alta performance. O resultado? Seu conteúdo roda liso, com estabilidade total, mesmo nos horários de pico.
                </p>
                
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full block text-center py-4 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] text-[#020b16] font-bold rounded-xl shadow-[0_0_20px_rgba(67,175,239,0.3)] hover:shadow-[0_0_30px_rgba(67,175,239,0.5)] transition-all transform hover:scale-[1.02]"
                >
                  Começar Agora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Catalog Detail Modal */}
      <AnimatePresence>
        {isCatalogModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setIsCatalogModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#080808] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsCatalogModalOpen(false)}
                className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-[var(--color-brand-cyan)] transition-all z-50 backdrop-blur-sm touch-manipulation"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative h-64 w-full">
                 <img 
                   src="https://i.imgur.com/Y8Yy08G.png" 
                   alt="Lista IPTV Atualizada" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent"></div>
                 
                 <div className="absolute bottom-4 left-8 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[var(--color-brand-cyan)]/20 backdrop-blur-md border border-[var(--color-brand-cyan)]/30">
                      <Film className="w-8 h-8 text-[var(--color-brand-cyan)]" />
                    </div>
                 </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <h3 className="text-3xl font-black text-white mb-4 font-display uppercase tracking-wide">Lista IPTV Atualizada</h3>
                <p className="text-[#e0e0e0] leading-relaxed text-lg font-sans">
                  Atualização diária e automática. Nosso servidor é conectado aos maiores bancos de dados de entretenimento do mundo, garantindo que os lançamentos do cinema e das plataformas cheguem à sua TV em tempo real.
                </p>
                
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full block text-center py-4 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] text-[#020b16] font-bold rounded-xl shadow-[0_0_20px_rgba(67,175,239,0.3)] hover:shadow-[0_0_30px_rgba(67,175,239,0.5)] transition-all transform hover:scale-[1.02]"
                >
                  Começar Agora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Multiplatform Detail Modal */}
      <AnimatePresence>
        {isMultiplatformModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setIsMultiplatformModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#080808] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsMultiplatformModalOpen(false)}
                className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-[var(--color-brand-cyan)] transition-all z-50 backdrop-blur-sm touch-manipulation"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative h-64 w-full">
                 <img 
                   src="https://i.imgur.com/BxYKbsn.png" 
                   alt="IPTV Multiplataforma" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent"></div>
                 
                 <div className="absolute bottom-4 left-8 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[var(--color-brand-cyan)]/20 backdrop-blur-md border border-[var(--color-brand-cyan)]/30">
                      <MonitorSmartphone className="w-8 h-8 text-[var(--color-brand-cyan)]" />
                    </div>
                 </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <h3 className="text-3xl font-black text-white mb-4 font-display uppercase tracking-wide">IPTV Multiplataforma</h3>
                <p className="text-[#e0e0e0] leading-relaxed text-lg font-sans">
                  Liberdade total. Instalamos em qualquer app de TV, computador ou celular.
                </p>
                <p className="text-gray-400 mt-4 text-sm italic border-l-2 border-[var(--color-brand-cyan)] pl-3">
                  Lembrete: cada aplicativo possui sua própria mensalidade independente.
                </p>
                
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full block text-center py-4 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] text-[#020b16] font-bold rounded-xl shadow-[0_0_20px_rgba(67,175,239,0.3)] hover:shadow-[0_0_30px_rgba(67,175,239,0.5)] transition-all transform hover:scale-[1.02]"
                >
                  Começar Agora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Support Detail Modal */}
      <AnimatePresence>
        {isSupportModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setIsSupportModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#080808] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsSupportModalOpen(false)}
                className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-[var(--color-brand-cyan)] transition-all z-50 backdrop-blur-sm touch-manipulation"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative h-64 w-full">
                 <img 
                   src="https://i.imgur.com/aJ3HnSA.png" 
                   alt="Suporte Premium" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent"></div>
                 
                 <div className="absolute bottom-4 left-8 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[var(--color-brand-cyan)]/20 backdrop-blur-md border border-[var(--color-brand-cyan)]/30">
                      <Headset className="w-8 h-8 text-[var(--color-brand-cyan)]" />
                    </div>
                 </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <h3 className="text-3xl font-black text-white mb-4 font-display uppercase tracking-wide">Suporte Premium</h3>
                <p className="text-[#e0e0e0] leading-relaxed text-lg font-sans">
                  Atendimento rápido e humano direto pelo WhatsApp. Sem robôs te enrolando. Nossa equipe está pronta para ajudar com qualquer dúvida ou configuração.
                </p>
                
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] text-[#020b16] font-bold rounded-xl shadow-[0_0_20px_rgba(67,175,239,0.3)] hover:shadow-[0_0_30px_rgba(67,175,239,0.5)] transition-all transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar com Suporte
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contract Detail Modal */}
      <AnimatePresence>
        {isContractModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setIsContractModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#080808] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsContractModalOpen(false)}
                className="absolute top-4 right-4 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-[var(--color-brand-cyan)] transition-all z-50 backdrop-blur-sm touch-manipulation"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="relative h-64 w-full">
                 <img 
                   src="https://i.imgur.com/1ImclTN.png" 
                   alt="IPTV sem contrato" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent"></div>
                 
                 <div className="absolute bottom-4 left-8 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[var(--color-brand-cyan)]/20 backdrop-blur-md border border-[var(--color-brand-cyan)]/30">
                      <Unlock className="w-8 h-8 text-[var(--color-brand-cyan)]" />
                    </div>
                 </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <h3 className="text-3xl font-black text-white mb-4 font-display uppercase tracking-wide">IPTV sem contrato</h3>
                <p className="text-[#e0e0e0] leading-relaxed text-lg font-sans">
                  Assinatura IPTV premium sem fidelidade. Pague apenas pelo mês que utilizar.
                </p>
                
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full block text-center py-4 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] text-[#020b16] font-bold rounded-xl shadow-[0_0_20px_rgba(67,175,239,0.3)] hover:shadow-[0_0_30px_rgba(67,175,239,0.5)] transition-all transform hover:scale-[1.02]"
                >
                  Começar Agora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors flex items-center justify-center animate-pulse-slow group"
        aria-label="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Fale Conosco
        </span>
      </a>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[var(--color-brand-navy)] border border-white/5 rounded-md overflow-hidden transition-all duration-300 hover:border-[var(--color-brand-cyan)]/50 hover:scale-[1.02] h-full">
      <button 
        className="w-full px-6 py-5 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default App;
