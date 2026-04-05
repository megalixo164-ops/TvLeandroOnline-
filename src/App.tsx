import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'motion/react';
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
  MoreVertical,
  ShoppingCart,
  Key,
  PlayCircle,
  Award,
  Users,
  ShieldCheck,
  Globe,
  MonitorPlay
} from 'lucide-react';

const WHATSAPP_NUMBER = "5547992733349";
const WHATSAPP_TEXT = "Olá, quero meu teste grátis na Leandro TV+";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

interface Feedback {
  id: number;
  name: string;
  avatar: string;
  clientMsg: string;
  clientTime: string;
  supportMsg: string;
  supportTime: string;
}

const feedbacks: Feedback[] = [
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

const FeedbackCard = memo(({ feedback, index, total, onSwipe }: any) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 100;
    const velocityThreshold = 500;

    if (Math.abs(info.offset.x) > swipeThreshold || Math.abs(info.velocity.x) > velocityThreshold) {
      onSwipe();
    }
    // The drag constraints will handle snapping back to 0 if not swiped
  };

  const isTop = index === total - 1;
  const depth = total - 1 - index;

  useEffect(() => {
    if (!isTop) {
      x.set(0);
    }
  }, [isTop, x]);

  return (
    <motion.div
      initial={false}
      animate={{
        scale: 1 - depth * 0.05,
        y: depth * 15,
        opacity: 1,
        zIndex: index,
      }}
      style={{
        x,
        rotate,
        opacity,
        willChange: "transform, opacity",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1,
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      onDragEnd={handleDragEnd}
      className="absolute top-0 left-0 w-full h-[500px] flex flex-col cursor-grab active:cursor-grabbing touch-none"
    >
      <div className="bg-[#111b21] rounded-[2.5rem] overflow-hidden border-[8px] border-[#202c33] shadow-2xl md:shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative group flex flex-col h-full">
        {/* Phone Notch/Speaker */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#202c33] rounded-b-2xl z-20 flex items-center justify-center gap-2">
          <div className="w-8 h-1 bg-[#2a3942] rounded-full"></div>
          <div className="w-2 h-2 bg-[#2a3942] rounded-full"></div>
        </div>

        {/* App Header */}
        <div className="bg-[#202c33] px-5 pt-8 pb-4 flex items-center justify-between text-[#e9edef] relative z-10">
          <div className="flex items-center gap-3">
            <ArrowLeft size={22} className="text-[#8696a0]" />
            <div className="relative">
              <img 
                src={feedback.avatar} 
                alt={feedback.name} 
                className="w-11 h-11 rounded-full object-cover border-2 border-white/5"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#00a884] border-2 border-[#202c33] rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base leading-tight text-[#e9edef]">{feedback.name}</span>
              <span className="text-[11px] text-[#8696a0] leading-tight">Visto por último hoje às {feedback.clientTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[#8696a0]">
            <Video size={20} />
            <Phone size={18} />
            <MoreVertical size={18} />
          </div>
        </div>

        {/* Chat Area */}
        <div className="bg-[#0b141a] flex-1 p-5 flex flex-col relative overflow-hidden">
          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.08] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex justify-center">
              <span className="bg-[#1f2c34] text-[#8696a0] text-[11px] px-3 py-1 rounded-lg shadow-sm font-semibold uppercase tracking-wider border border-[#202c33]">Hoje</span>
            </div>
            
            {/* Incoming Message (Client) */}
            <div className="self-start relative max-w-[85%]">
              {/* Message Tail */}
              <svg className="absolute -left-2 top-0 text-[#202c33]" width="8" height="13" viewBox="0 0 8 13">
                <path fill="currentColor" d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
              </svg>
              <div className="bg-[#202c33] rounded-lg rounded-tl-none p-3 shadow-md relative">
                <p className="text-[15px] text-[#e9edef] leading-relaxed pr-12">{feedback.clientMsg}</p>
                <div className="absolute bottom-1.5 right-2 flex items-center gap-1">
                  <span className="text-[10px] text-[#8696a0]">{feedback.clientTime}</span>
                </div>
              </div>
            </div>

            {/* Outgoing Message (Support) */}
            <div className="self-end relative max-w-[85%] ml-auto">
              {/* Message Tail */}
              <svg className="absolute -right-2 top-0 text-[#005c4b]" width="8" height="13" viewBox="0 0 8 13">
                <path fill="currentColor" d="M6.467 3.568 0 12.193V1h5.188C6.958 1 7.526 2.156 6.467 3.568z"></path>
              </svg>
              <div className="bg-[#005c4b] rounded-lg rounded-tr-none p-3 shadow-md relative">
                <p className="text-[15px] text-[#e9edef] leading-relaxed pr-16">{feedback.supportMsg}</p>
                <div className="absolute bottom-1.5 right-2 flex items-center gap-0.5">
                  <span className="text-[10px] text-[#8696a0]/90">{feedback.supportTime}</span>
                  <CheckCheck size={15} className="text-[#53bdeb]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input Area (Visual Only) */}
        <div className="bg-[#202c33] p-3 px-4 flex items-center gap-3 relative z-10">
          <div className="p-1 text-[#8696a0]"><Zap size={20} /></div>
          <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 text-[#8696a0] text-sm">Mensagem</div>
          <div className="p-1 text-[#8696a0]"><Phone size={20} /></div>
        </div>
      </div>
    </motion.div>
  );
});

const FeedbackStack = ({ items }: any) => {
  const [stack, setStack] = useState(items);

  const handleSwipe = useCallback(() => {
    setStack((prev) => {
      const newStack = [...prev];
      const swipedItem = newStack.pop();
      if (swipedItem) newStack.unshift(swipedItem);
      return newStack;
    });
  }, []);

  return (
    <div className="relative w-full h-full">
      {stack.map((feedback, index) => (
        <FeedbackCard
          key={feedback.id}
          feedback={feedback}
          index={index}
          total={stack.length}
          onSwipe={handleSwipe}
        />
      ))}
    </div>
  );
};

const HowItWorksSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathDesktopRef = useRef<SVGPathElement>(null);
  const pathMobileRef = useRef<SVGPathElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const pathDesktop = pathDesktopRef.current;
    const pathMobile = pathMobileRef.current;
    if (!container) return;

    const initPath = (path: SVGPathElement | null) => {
      if (!path) return 0;
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      return length;
    };

    let lengthDesktop = initPath(pathDesktop);
    let lengthMobile = initPath(pathMobile);

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Cálculo de progresso mais preciso baseado na viewport
      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.4;
      const progressRange = rect.height + (startTrigger - endTrigger);
      const currentPos = startTrigger - rect.top;
      
      let drawPercent = currentPos / progressRange;
      drawPercent = Math.max(0, Math.min(1, drawPercent));

      if (pathDesktop) {
        pathDesktop.style.strokeDashoffset = `${lengthDesktop - (lengthDesktop * drawPercent)}`;
      }
      if (pathMobile) {
        pathMobile.style.strokeDashoffset = `${lengthMobile - (lengthMobile * drawPercent)}`;
      }

      stepsRef.current.forEach((step, index) => {
        if (!step) return;
        // Thresholds recalibrados para os 4 passos
        const threshold = index / (steps.length - 1);
        if (drawPercent >= threshold * 0.85) { // Ativação levemente antecipada para fluidez
          step.classList.add('opacity-100', 'scale-100', 'translate-y-0');
          step.classList.remove('opacity-0', 'scale-75', 'translate-y-8');
          const icon = step.querySelector('.step-icon');
          if (icon) {
            icon.classList.add('animate-pulse-glow');
            icon.classList.replace('border-transparent', 'border-[#00CFFF]');
          }
        } else {
          step.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
          step.classList.add('opacity-0', 'scale-75', 'translate-y-8');
          const icon = step.querySelector('.step-icon');
          if (icon) {
            icon.classList.remove('animate-pulse-glow');
            icon.classList.replace('border-[#00CFFF]', 'border-transparent');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    const handleResize = () => {
      lengthDesktop = initPath(pathDesktop);
      lengthMobile = initPath(pathMobile);
      handleScroll();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const steps = [
    { id: 1, title: "ESCOLHA O PLANO", desc: "Selecione o plano de IPTV que melhor atende sua necessidade.", icon: ShoppingCart },
    { id: 2, title: "FALE CONOSCO", desc: "Clique no botão e fale direto com um suporte IPTV via WhatsApp.", icon: MessageCircle },
    { id: 3, title: "RECEBA O ACESSO", desc: "Liberação imediata! Basta configurar sua lista IPTV atualizada.", icon: Key },
    { id: 4, title: "APERTE O PLAY", desc: "Comece a assistir seus conteúdos favoritos na hora em qualquer dispositivo.", icon: PlayCircle }
  ];

  return (
    <section className="relative w-full bg-[#020b16] py-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/IGPMYNA.jpeg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b16] via-[#020b16]/60 to-[#020b16]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            COMO FUNCIONA O <span className="text-[#00CFFF] drop-shadow-[0_0_15px_rgba(0,207,255,0.5)]">IPTV?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Siga nossa jornada simples e rápida para ter acesso ao melhor entretenimento.</p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto" ref={containerRef}>
          {/* Desktop SVG Path */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-48 -translate-y-1/2 pointer-events-none z-0">
            <svg viewBox="0 0 1000 200" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <path d="M 140 100 C 260 0, 260 200, 380 100 C 500 0, 500 200, 620 100 C 740 0, 740 200, 860 100" 
                    fill="none" stroke="transparent" strokeWidth="4" strokeLinecap="round" />
              <path ref={pathDesktopRef} d="M 140 100 C 260 0, 260 200, 380 100 C 500 0, 500 200, 620 100 C 740 0, 740 200, 860 100" 
                    fill="none" stroke="#00CFFF" strokeWidth="6" strokeLinecap="round" 
                    style={{ filter: 'drop-shadow(0 0 8px rgba(0,207,255,0.8))', transition: 'stroke-dashoffset 0.1s ease-out' }} />
            </svg>
          </div>

          {/* Mobile SVG Path */}
          <div className="block md:hidden absolute top-0 left-8 w-8 h-full pointer-events-none z-0">
            <svg viewBox="0 0 20 800" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <path d="M 10 100 L 10 700" fill="none" stroke="transparent" strokeWidth="4" strokeLinecap="round" />
              <path ref={pathMobileRef} d="M 10 100 L 10 700" fill="none" stroke="#00CFFF" strokeWidth="6" strokeLinecap="round" 
                    style={{ filter: 'drop-shadow(0 0 8px rgba(0,207,255,0.8))', transition: 'stroke-dashoffset 0.1s ease-out' }} />
            </svg>
          </div>

          {/* Steps Container */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                ref={el => stepsRef.current[index] = el}
                className="flex flex-row md:flex-col items-center md:items-center gap-6 md:gap-6 w-full md:w-1/4 opacity-0 scale-75 translate-y-8 transition-all duration-700 ease-out"
              >
                {/* Node / Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#020b16] border-4 border-transparent flex items-center justify-center relative z-10 step-icon transition-colors duration-500">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-[#00CFFF]" />
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#00CFFF] text-[#0a0a1a] font-bold flex items-center justify-center text-sm z-20 shadow-[0_0_10px_rgba(0,207,255,0.8)]">
                    {step.id}
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 text-left md:text-center w-full shadow-xl hover:bg-white/10 transition-colors">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState(0);
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

      {/* Logo Modal (Informative - Multi-tab Blue Glass) */}
      <AnimatePresence>
        {isLogoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setIsLogoModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-md w-full bg-blue-900/30 backdrop-blur-2xl border-2 border-blue-400/30 rounded-[40px] shadow-[0_0_50px_rgba(30,58,138,0.5),inset_0_0_20px_rgba(147,197,253,0.2)] overflow-visible"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsLogoModalOpen(false)}
                className="absolute top-6 right-8 z-20 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Logo Overlapping Top */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20">
                <div className="relative group">
                  {/* Soft Ethereal Glow */}
                  <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 blur-md rounded-full"></div>
                  
                  <div className="relative h-24 w-24 rounded-full border-2 border-blue-400/40 p-1.5 bg-blue-950/40 backdrop-blur-xl shadow-2xl overflow-hidden">
                    <img 
                      src="https://i.imgur.com/gB6o74h.jpeg" 
                      alt="Leandro TV+" 
                      className="h-full w-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Floating Label */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-500/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-blue-200 border border-blue-400/30 shadow-lg whitespace-nowrap tracking-wider uppercase">
                    Leandro TV+
                  </div>
                </div>
              </div>

              <div className="pt-16 pb-8 px-8 flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 mb-8 tracking-tight">
                  Sobre a Leandro TV+
                </h2>

                {/* Content Area */}
                <div className="w-full space-y-6 text-left mb-10">
                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 p-2.5 rounded-xl bg-blue-400/10 border border-blue-400/20 text-blue-300 group-hover:bg-blue-400 group-hover:text-white transition-colors">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Ativação Instantânea</h3>
                      <p className="text-blue-100/60 text-xs leading-relaxed">Receba seus dados de acesso em poucos minutos após a confirmação.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 p-2.5 rounded-xl bg-blue-400/10 border border-blue-400/20 text-blue-300 group-hover:bg-blue-400 group-hover:text-white transition-colors">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Compatibilidade Total</h3>
                      <p className="text-blue-100/60 text-xs leading-relaxed">Smart TVs, Celulares, Tablets, TV Box e Computadores.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 p-2.5 rounded-xl bg-blue-400/10 border border-blue-400/20 text-blue-300 group-hover:bg-blue-400 group-hover:text-white transition-colors">
                      <Rocket className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Servidores Premium</h3>
                      <p className="text-blue-100/60 text-xs leading-relaxed">Servidores dedicados com tecnologia anti-travamento de última geração.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="mt-1 p-2.5 rounded-xl bg-blue-400/10 border border-blue-400/20 text-blue-300 group-hover:bg-blue-400 group-hover:text-white transition-colors">
                      <Unlock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Sem Fidelidade</h3>
                      <p className="text-blue-100/60 text-xs leading-relaxed">Cancele quando quiser, sem multas ou contratos abusivos.</p>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="w-full flex gap-4">
                  <a 
                    href="#planos"
                    onClick={() => setIsLogoModalOpen(false)}
                    className="flex-1 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all active:scale-95 text-center"
                  >
                    Ver Planos
                  </a>
                  <button 
                    onClick={() => setIsLogoModalOpen(false)}
                    className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all active:scale-95"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-blue-900/20 backdrop-blur-sm py-2 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-4 group cursor-pointer"
              onClick={() => setIsLogoModalOpen(true)}
            >
              <div className="relative">
                {/* Subtle blue border glow */}
                <div className="absolute -inset-1 bg-blue-500/40 blur-md rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="https://i.imgur.com/gB6o74h.jpeg" 
                  alt="Leandro TV+" 
                  className="relative h-14 w-14 object-cover rounded-full border-2 border-blue-400/50 brightness-110 contrast-110 shadow-[0_0_15px_rgba(67,175,239,0.3)]" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white hidden sm:block">
                Leandro TV+
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#inicio" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Início</a>
              <a href="#recursos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sobre</a>
              <a href="#planos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Planos</a>
              <a href="#duvidas" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Dúvidas</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            />
            
            {/* Sidebar Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] z-[70] bg-blue-950/40 backdrop-blur-2xl border-l border-blue-400/20 shadow-2xl md:hidden flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="p-6 flex justify-between items-center border-b border-blue-400/10">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://i.imgur.com/gB6o74h.jpeg" 
                    alt="Logo" 
                    className="h-10 w-10 rounded-full border border-blue-400/30"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-lg font-bold text-white tracking-tight">Leandro TV+</span>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex-1 px-6 py-8 space-y-6 overflow-y-auto">
                <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-white transition-colors group">
                  <div className="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Início
                </a>
                <a href="#recursos" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-white transition-colors group">
                  <div className="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Sobre
                </a>
                <a href="#planos" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-white transition-colors group">
                  <div className="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Planos
                </a>
                <a href="#duvidas" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-white transition-colors group">
                  <div className="w-1 h-1 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  Dúvidas
                </a>
              </div>

              {/* Sidebar Footer */}
              <div className="p-6 border-t border-blue-400/10">
                <p className="text-[10px] text-center text-blue-100/30 uppercase tracking-widest">
                  Leandro TV+ © 2026
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <section id="inicio" className="relative min-h-fit md:h-[90vh] md:min-h-[600px] w-full flex items-center pt-24 pb-8 md:py-0">
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

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-0 md:pt-20">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2 md:mb-4 leading-tight drop-shadow-2xl">
              A Melhor Experiência de <br />
              <span className="texto-gradiente">TV Online</span>
            </h1>
            <p className="text-base sm:text-2xl text-white font-medium mb-6 md:mb-8 drop-shadow-lg max-w-xl">
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
      <div className="relative z-30 w-full overflow-hidden mt-0 md:-mt-24 mb-8 md:mb-12">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[var(--color-brand-navy-dark)] via-transparent to-[var(--color-brand-navy-dark)]"></div>
        <motion.div 
          className="flex gap-6 w-max px-4"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 45, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div key={`series-group-${groupIndex}`} className="flex gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={`series-card-${groupIndex}-${i}`} 
                  className="w-48 h-72 md:w-64 md:h-96 bg-[#0b1623] rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group"
                >
                  {/* Background Image for F1 */}
                  {i === 0 && (
                    <img 
                      src="https://i.imgur.com/7JZNh7G.png" 
                      alt="Destaque F1" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F2 */}
                  {i === 1 && (
                    <img 
                      src="https://i.imgur.com/VH7Qpl9.png" 
                      alt="Destaque F2" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F3 */}
                  {i === 2 && (
                    <img 
                      src="https://i.imgur.com/0KpC37M.png" 
                      alt="Destaque F3" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F4 */}
                  {i === 3 && (
                    <img 
                      src="https://i.imgur.com/dEUiYbZ.png" 
                      alt="Destaque F4" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F5 */}
                  {i === 4 && (
                    <img 
                      src="https://i.imgur.com/NSetzHI.png" 
                      alt="Destaque F5" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F6 */}
                  {i === 5 && (
                    <img 
                      src="https://i.imgur.com/oyTs1Hp.png" 
                      alt="Destaque F6" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F7 */}
                  {i === 6 && (
                    <img 
                      src="https://i.imgur.com/gTwbLGn.png" 
                      alt="Destaque F7" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F8 */}
                  {i === 7 && (
                    <img 
                      src="https://i.imgur.com/nWPbzK1.png" 
                      alt="Destaque F8" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F9 */}
                  {i === 8 && (
                    <img 
                      src="https://i.imgur.com/xU5wDHG.jpeg" 
                      alt="Destaque F9" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for F10 */}
                  {i === 9 && (
                    <img 
                      src="https://i.imgur.com/0WIYgQ1.png" 
                      alt="Destaque F10" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}



                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 z-10"></div>
                  
                  {/* Placeholder Number Removed */}
                  
                  {/* Label Removed */}

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-brand-cyan)]/0 group-hover:bg-[var(--color-brand-cyan)]/10 transition-colors duration-300 z-30"></div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Features Carousel */}
      <section id="recursos" className="pt-12 pb-10 relative z-20 mt-0 md:-mt-20">
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

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 pb-8 pt-4 px-2 max-w-5xl mx-auto">
            {features.slice(0, 4).map((feature, index) => (
              <div 
                key={`${feature.id}-${index}`}
                onClick={feature.action}
                className="w-full aspect-[4/5] md:aspect-square bg-[#0a1623] rounded-2xl border border-white/10 relative group cursor-pointer transition-all duration-500 hover:scale-[1.02] md:hover:scale-105 hover:z-30 hover:shadow-[0_20px_50px_-10px_rgba(67,175,239,0.2)] overflow-hidden flex flex-col items-center justify-center p-4 md:p-8"
              >
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-cyan)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Central Destaque Icon */}
                <div className="mb-4 md:mb-8 p-4 md:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 z-20 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl">
                  <feature.icon className="w-8 h-8 md:w-16 md:h-16 text-[var(--color-brand-cyan)] drop-shadow-[0_0_15px_rgba(67,175,239,0.8)]" />
                </div>

                <div className="text-center z-20">
                  <h3 className="text-sm md:text-xl font-black text-white mb-1 md:mb-2 uppercase tracking-tight group-hover:text-[var(--color-brand-cyan)] transition-colors duration-300 leading-tight">{feature.title}</h3>
                  <p className="text-[10px] md:text-sm text-gray-400 font-medium opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2 md:line-clamp-none">
                    {feature.desc}
                  </p>
                </div>
                
                {/* Border Glow Effect */}
                <div className="absolute inset-0 border-2 border-[var(--color-brand-cyan)]/0 group-hover:border-[var(--color-brand-cyan)]/40 rounded-2xl transition-all duration-500 z-30 pointer-events-none"></div>
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
      <div className="relative z-30 w-full overflow-hidden my-4">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[var(--color-brand-navy-dark)] via-transparent to-[var(--color-brand-navy-dark)]"></div>
        <motion.div 
          className="flex gap-6 w-max px-4"
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div key={`movie-group-${groupIndex}`} className="flex gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={`movie-card-${groupIndex}-${i}`} 
                  className="w-56 h-80 md:w-80 md:h-[480px] bg-[#0b1623] rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group"
                >
                  {/* Background Image for S1 */}
                  {i === 0 && (
                    <img 
                      src="https://i.imgur.com/7MmpsfG.png" 
                      alt="Destaque S1" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S2 */}
                  {i === 1 && (
                    <img 
                      src="https://i.imgur.com/oerxMu6.jpeg" 
                      alt="Destaque S2" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S3 */}
                  {i === 2 && (
                    <img 
                      src="https://i.imgur.com/IJ2pkLV.jpeg" 
                      alt="Destaque S3" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S4 */}
                  {i === 3 && (
                    <img 
                      src="https://i.imgur.com/XuXjqYE.png" 
                      alt="Destaque S4" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S5 */}
                  {i === 4 && (
                    <img 
                      src="https://i.imgur.com/T9E0DzN.png" 
                      alt="Destaque S5" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S6 */}
                  {i === 5 && (
                    <img 
                      src="https://i.imgur.com/3BMbhlV.png" 
                      alt="Destaque S6" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S7 */}
                  {i === 6 && (
                    <img 
                      src="https://i.imgur.com/NwfOuJt.jpeg" 
                      alt="Destaque S7" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S8 */}
                  {i === 7 && (
                    <img 
                      src="https://i.imgur.com/QLssNnn.png" 
                      alt="Destaque S8" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S9 */}
                  {i === 8 && (
                    <img 
                      src="https://i.imgur.com/SSC0qZ9.png" 
                      alt="Destaque S9" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* Background Image for S10 */}
                  {i === 9 && (
                    <img 
                      src="https://i.imgur.com/u0fj70v.png" 
                      alt="Destaque S10" 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 z-10"></div>
                  
                  {/* Placeholder Number Removed */}
                  
                  {/* Label Removed */}

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-brand-cyan)]/0 group-hover:bg-[var(--color-brand-cyan)]/10 transition-colors duration-300 z-30"></div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <HowItWorksSection />

      {/* Channels Section */}
      <section className="py-16 border-y border-white/5 bg-[#030f1c] relative z-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/Ja1oHN4.png" 
            alt="Background" 
            className="w-full h-full object-cover blur-[4px] opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#030f1c]/80"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Channels Section Content */}
          <div className="text-center mb-12">
             <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
               Tenha acesso a todos os <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)]">Canais e plataformas streaming</span> do Brasil
             </h2>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
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
              <div key={`channel-group-${groupIndex}`} className="flex gap-8">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div 
                    key={`channel-card-${groupIndex}-${i}`} 
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#0b1623] border-2 border-white/10 flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] group hover:border-[var(--color-brand-cyan)] transition-all duration-300 hover:scale-110 cursor-pointer"
                  >
                    {i === 0 ? (
                      <img 
                        src="https://i.imgur.com/pvKExUA.png" 
                        alt="Logo 1" 
                        className="absolute inset-0 w-full h-full object-cover scale-125" 
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 1 ? (
                      <img 
                        src="https://i.imgur.com/EuuOVnC.jpeg" 
                        alt="Logo 2" 
                        className="absolute inset-0 w-full h-full object-cover scale-125" 
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 2 ? (
                      <img 
                        src="https://i.imgur.com/DA0kSNX.png" 
                        alt="Logo 3" 
                        className="absolute inset-0 w-full h-full object-cover scale-125" 
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 3 ? (
                      <img 
                        src="https://i.imgur.com/G5nGQ5B.png" 
                        alt="Logo 4" 
                        className="absolute inset-0 w-full h-full object-cover scale-125" 
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 4 ? (
                      <img 
                        src="https://i.imgur.com/ch1MU63.png" 
                        alt="Logo 5" 
                        className="absolute inset-0 w-full h-full object-cover scale-125" 
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 5 ? (
                      <img 
                        src="https://i.imgur.com/ZqOjxMV.png" 
                        alt="Logo 6" 
                        className="absolute inset-0 w-full h-full object-cover scale-125" 
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 6 ? (
                      <img 
                        src="https://i.imgur.com/lEZT3yO.png" 
                        alt="Logo 7" 
                        className="absolute inset-0 w-full h-full object-cover scale-125" 
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 7 ? (
                      <img 
                        src="https://i.imgur.com/ttQ82fK.png" 
                        alt="Logo 8" 
                        className="absolute inset-0 w-full h-full object-cover scale-125" 
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 8 ? (
                      <img 
                        src="https://i.imgur.com/JRkrceA.png" 
                        alt="Logo 9" 
                        className="absolute inset-0 w-full h-full object-cover scale-125" 
                        referrerPolicy="no-referrer"
                      />
                    ) : i === 9 ? (
                      <img 
                        src="https://i.imgur.com/ufhwNoh.png" 
                        alt="Logo 10" 
                        className="absolute inset-0 w-full h-full object-cover scale-125" 
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                        
                        {/* Placeholder Number */}
                        <span className="text-4xl md:text-5xl font-black text-white/20 group-hover:text-white/40 transition-colors duration-300 z-10">
                          {i + 1}
                        </span>
                      </>
                    )}
                    
                    {/* Image Placeholder Overlay (User will replace background) */}
                    <div className={`absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors ${(i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9) ? 'hidden' : ''}`}></div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[inset_0_0_20px_rgba(67,175,239,0.3)] transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Games Access Section */}
      <section className="relative py-16 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/4VVJdN0.jpeg" 
            alt="Esportes e Jogos" 
            className="w-full h-full object-cover blur-[2px] brightness-50"
            referrerPolicy="no-referrer"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b16] via-[#020b16]/80 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-black text-white mb-6 uppercase leading-tight"
            >
              Com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)]">Leandro TV+</span> você tem acesso a todos os seus <span className="text-[var(--color-brand-cyan)]">jogos</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mb-8 font-medium"
            >
              Não perca nenhum lance do seu time do coração. Acompanhe campeonatos nacionais e internacionais com a melhor qualidade de imagem.
            </motion.p>

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-[var(--color-brand-cyan)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#020b16] transition-all duration-300 shadow-[0_0_20px_rgba(67,175,239,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:scale-105"
            >
              Quero assistir agora
            </motion.a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="pt-12 md:pt-16 pb-4 md:pb-8 relative overflow-hidden bg-[#020b16]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/qvz7c99.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b16] via-[#020b16]/80 to-[#020b16]"></div>
        </div>

        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-brand-cyan)]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-cyan)]/5 rounded-full blur-[100px]"></div>
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-3xl md:text-5xl font-black mb-2 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)]">Plano Premium</span>
            </h2>
            <p className="text-white text-base md:text-lg max-w-2xl mx-auto font-medium">
              A melhor experiência em entretenimento com o melhor custo-benefício.
            </p>
          </div>
          <PricingCarousel whatsappLink={WHATSAPP_LINK} />
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section className="py-12 md:py-16 bg-[#020b16] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Veja o que nossos clientes estão dizendo
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Feedbacks reais de quem já usa nosso aplicativo todos os dias.
            </p>
          </div>

          {/* Feedback Card Stack */}
          <div className="relative h-[560px] w-full max-w-[400px] mx-auto mb-2 perspective-1000">
            <FeedbackStack items={feedbacks} />
          </div>
          
          {/* Swipe Instruction */}
          <div className="flex items-center justify-center gap-4 text-white/70 animate-pulse mb-16 relative z-20">
            <ChevronLeft size={24} className="text-[var(--color-brand-cyan)]" />
            <span className="text-sm md:text-base font-black uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(67,175,239,0.3)]">
              Deslize para ver mais
            </span>
            <ChevronRight size={24} className="text-[var(--color-brand-cyan)]" />
          </div>

          <div className="mb-12"></div>
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
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
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
    <div className="bg-[var(--color-brand-navy)] border border-white/5 rounded-md overflow-hidden transition-all duration-300 md:hover:border-[var(--color-brand-cyan)]/50 md:hover:scale-[1.02] active:scale-[0.98] h-full">
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
