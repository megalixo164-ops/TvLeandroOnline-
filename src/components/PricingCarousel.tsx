import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

interface PricingCarouselProps {
  whatsappLink: string;
}

const plans = [
  {
    id: 'mensal',
    title: 'MENSAL',
    subtitle: 'Perfeito para conhecer',
    price: '25,00',
    period: '/mês',
    benefits: [
      '+100.000 Conteúdos',
      'Qualidade 4K/FHD',
      '1 Tela Simultânea'
    ],
    popular: false,
    savings: null
  },
  {
    id: 'trimestral',
    title: 'TRIMESTRAL',
    subtitle: 'Melhor opção para começar',
    price: '65,00',
    period: '/trimestre',
    benefits: [
      '+100.000 Conteúdos',
      'Qualidade 4K/FHD',
      '1 Tela Simultânea'
    ],
    popular: true,
    savings: 'Economia de R$ 10,00'
  },
  {
    id: 'semestral',
    title: 'SEMESTRAL',
    subtitle: 'Garanta 6 meses de diversão',
    price: '130,00',
    period: '/semestre',
    benefits: [
      '+100.000 Conteúdos',
      'Qualidade 4K/FHD',
      '1 Tela Simultânea'
    ],
    popular: false,
    savings: 'Economia de R$ 20,00'
  }
];

export function PricingCarousel({ whatsappLink }: PricingCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(1); // Start with Trimestral (index 1) as active
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) {
      nextSlide();
    } else if (info.offset.x > 50) {
      prevSlide();
    }
  };

  // Calculate the ordered plans based on activeIndex for desktop view
  // We want the activeIndex to be in the middle (index 1 of the displayed array)
  // So we need [prev, current, next]
  const getOrderedPlans = () => {
    const prevIndex = (activeIndex - 1 + plans.length) % plans.length;
    const nextIndex = (activeIndex + 1) % plans.length;
    return [plans[prevIndex], plans[activeIndex], plans[nextIndex]];
  };

  const orderedPlans = getOrderedPlans();

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12" ref={containerRef}>
      
      {/* Navigation Buttons - Desktop */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between z-20 pointer-events-none px-4 xl:-mx-12">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-3 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] hover:bg-[#00ff66] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:shadow-[0_0_25px_rgba(0,255,102,0.5)]"
          aria-label="Previous plan"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] hover:bg-[#00ff66] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:shadow-[0_0_25px_rgba(0,255,102,0.5)]"
          aria-label="Next plan"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="flex md:hidden justify-center gap-4 mb-6">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66]"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66]"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative h-[600px] md:h-[550px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          {/* 
            On Mobile: We show only the active card with slide animation.
            On Desktop: We show 3 cards with position transition.
          */}
          
          {/* Mobile View Implementation */}
          <div className="md:hidden absolute w-full max-w-[320px]">
            <motion.div
              key={`mobile-${activeIndex}`}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="w-full"
            >
              <PlanCard plan={plans[activeIndex]} isActive={true} whatsappLink={whatsappLink} />
            </motion.div>
          </div>

          {/* Desktop View Implementation */}
          <div className="hidden md:flex items-center justify-center gap-6 w-full absolute">
            {orderedPlans.map((plan, index) => {
              // Index 1 is the center (active) item in our ordered array
              const isCenter = index === 1;
              
              return (
                <motion.div
                  key={`desktop-${plan.id}`}
                  layoutId={plan.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ 
                    scale: isCenter ? 1.05 : 0.95, 
                    opacity: isCenter ? 1 : 0.5,
                    zIndex: isCenter ? 10 : 1,
                    x: isCenter ? 0 : (index === 0 ? -20 : 20) // Slight overlap or spacing
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`relative min-w-[350px] ${isCenter ? 'z-10' : 'z-0 blur-[1px] grayscale-[30%]'}`}
                  onClick={() => {
                    if (!isCenter) {
                      // If clicking side card, move to it
                      if (index === 0) prevSlide();
                      if (index === 2) nextSlide();
                    }
                  }}
                >
                   <PlanCard plan={plan} isActive={isCenter} whatsappLink={whatsappLink} />
                </motion.div>
              );
            })}
          </div>
        </AnimatePresence>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {plans.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex 
                ? 'w-8 bg-[#00ff66] shadow-[0_0_10px_#00ff66]' 
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function PlanCard({ plan, isActive, whatsappLink }: { plan: typeof plans[0], isActive: boolean, whatsappLink: string }) {
  return (
    <div 
      className={`
        relative flex flex-col h-full bg-[#0a0f18] rounded-2xl p-8 
        transition-all duration-300
        ${isActive 
          ? 'border-2 border-[#00ff66] shadow-[0_0_30px_-5px_rgba(0,255,102,0.3)]' 
          : 'border border-white/10 opacity-80 hover:opacity-100'
        }
      `}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00ff66] to-[#00cc52] text-[#0a0f18] px-6 py-1.5 rounded-full text-sm font-black uppercase shadow-[0_5px_15px_rgba(0,255,102,0.4)] whitespace-nowrap tracking-wider z-20">
          MAIS POPULAR
        </div>
      )}

      <div className="text-center mb-6 mt-2">
        <h3 className="text-xl font-bold uppercase text-gray-300 tracking-wider mb-2">{plan.title}</h3>
        <p className="text-[#00ff66] text-sm font-medium">{plan.subtitle}</p>
      </div>

      <div className="mb-8 flex items-baseline justify-center gap-1">
        <span className="text-2xl font-bold text-[#00ff66]">R$</span>
        <span className="text-5xl font-black text-white tracking-tight">{plan.price}</span>
        <span className="text-sm text-gray-400 font-medium">{plan.period}</span>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {plan.benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isActive ? 'bg-[#00ff66]/20 shadow-[0_0_10px_rgba(0,255,102,0.2)]' : 'bg-white/10'}`}>
              <Check className={`w-4 h-4 ${isActive ? 'text-[#00ff66]' : 'text-gray-400'}`} strokeWidth={3} />
            </div>
            <span className="text-gray-300 font-medium">{benefit}</span>
          </li>
        ))}
        {plan.savings && (
          <li className="flex items-center gap-3 bg-[#00ff66]/10 p-3 rounded-lg border border-[#00ff66]/20 mt-4">
            <div className="w-6 h-6 rounded-full bg-[#00ff66]/20 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-[#00ff66]" strokeWidth={3} />
            </div>
            <span className="text-[#00ff66] font-bold text-sm">{plan.savings}</span>
          </li>
        )}
      </ul>

      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          w-full block text-center py-4 rounded-xl font-bold text-lg transition-all
          ${isActive 
            ? 'bg-gradient-to-r from-[#008F4C] to-[#00FF7F] text-[#020b16] shadow-[0_0_20px_rgba(0,255,127,0.4)] hover:shadow-[0_0_30px_rgba(0,255,127,0.6)] hover:scale-105' 
            : 'bg-white/10 text-white hover:bg-white/20'
          }
        `}
      >
        Assinar Agora
      </a>
    </div>
  );
}
