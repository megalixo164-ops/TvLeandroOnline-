import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

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
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 overflow-hidden md:overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => {
          // Define more dramatic entry directions based on index
          const initialX = index === 0 ? -200 : index === 2 ? 200 : 0;
          const initialY = index === 1 ? 200 : 0;

          return (
            <motion.div 
              key={plan.id} 
              initial={{ opacity: 0, x: initialX, y: initialY, scale: 0.5, rotate: index === 0 ? -10 : index === 2 ? 10 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.05,
                mass: 0.8
              }}
              className="flex flex-col h-full transform hover:scale-105 transition-transform duration-500"
            >
              <PlanCard plan={plan} whatsappLink={whatsappLink} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function PlanCard({ plan, whatsappLink }: { plan: typeof plans[0], whatsappLink: string }) {
  return (
    <div 
      className={`
        relative flex flex-col h-full bg-[#0a1623] rounded-3xl p-10 
        border-2 border-[var(--color-brand-cyan)]/40 hover:border-[var(--color-brand-cyan)]
        shadow-[0_0_40px_-10px_rgba(67,175,239,0.2)] hover:shadow-[0_0_50px_-5px_rgba(67,175,239,0.4)]
        transition-all duration-500
      `}
    >
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] text-[#020b16] px-8 py-2 rounded-full text-sm font-black uppercase shadow-[0_10px_20px_rgba(67,175,239,0.5)] whitespace-nowrap tracking-widest z-20">
          MAIS POPULAR
        </div>
      )}

      <div className="text-center mb-8 mt-4">
        <h3 className="text-2xl font-black uppercase text-white tracking-widest mb-3">{plan.title}</h3>
        <p className="text-[var(--color-brand-cyan)] text-base font-bold tracking-wide">{plan.subtitle}</p>
      </div>

      <div className="mb-10 flex items-baseline justify-center gap-1">
        <span className="text-3xl font-bold text-[var(--color-brand-cyan)]">R$</span>
        <span className="text-7xl font-black text-white tracking-tighter">{plan.price}</span>
        <span className="text-lg text-gray-400 font-semibold">{plan.period}</span>
      </div>

      <ul className="space-y-5 mb-10 flex-1">
        {plan.benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-4">
            <div className="w-7 h-7 rounded-full bg-[var(--color-brand-cyan)]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(67,175,239,0.2)]">
              <Check className="w-5 h-5 text-[var(--color-brand-cyan)]" strokeWidth={4} />
            </div>
            <span className="text-gray-200 text-lg font-semibold">{benefit}</span>
          </li>
        ))}
        {plan.savings && (
          <li className="flex items-center gap-4 bg-[var(--color-brand-cyan)]/15 p-4 rounded-2xl border border-[var(--color-brand-cyan)]/30 mt-6">
            <div className="w-7 h-7 rounded-full bg-[var(--color-brand-cyan)]/30 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-[var(--color-brand-cyan)]" strokeWidth={4} />
            </div>
            <span className="text-[var(--color-brand-cyan)] font-black text-base uppercase tracking-tight">{plan.savings}</span>
          </li>
        )}
      </ul>

      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block text-center py-5 rounded-2xl font-black text-xl transition-all bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] text-[#020b16] shadow-[0_10px_30px_rgba(67,175,239,0.3)] hover:shadow-[0_15px_40px_rgba(67,175,239,0.5)] hover:scale-[1.02] active:scale-95"
      >
        Assinar Agora
      </a>
    </div>
  );
}
