import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingCarouselProps {
  whatsappLink: string;
}

const monthlyPlan = {
  id: 'mensal',
  title: 'PLANO MENSAL',
  subtitle: 'Acesso completo por 30 dias',
  price: '25,00',
  period: '/mês',
  benefits: [
    '+100.000 Conteúdos (Canais, Filmes e Séries)',
    'Qualidade Ultra HD / 4K / FHD',
    'Grade Completa de Esportes e Premiere',
    'Canais Adultos (Opcional com Senha)',
    'Suporte VIP via WhatsApp',
    'Sem Fidelidade - Cancele quando quiser'
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export function PricingCarousel({ whatsappLink }: PricingCarouselProps) {
  return (
    <div className="w-full flex items-center justify-center pt-0 pb-8 md:pb-12">
      <motion.div 
        className="w-full max-w-md px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 30 },
            visible: { 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" }
            }
          }}
          className="
            relative flex flex-col bg-[#0a1623]/80 backdrop-blur-xl rounded-3xl md:rounded-[2.5rem] p-5 md:p-10
            border border-white/10 hover:border-[var(--color-brand-cyan)]/50
            shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]
            transition-all duration-500 group overflow-hidden
          "
        >
          {/* Aesthetic Glow Effect */}
          <div className="absolute -inset-px bg-gradient-to-b from-[var(--color-brand-cyan)]/20 to-transparent rounded-3xl md:rounded-[2.5rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Materializing Scanline Effect */}
          <motion.div 
            initial={{ top: "-100%" }}
            animate={{ top: "200%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand-cyan)]/50 to-transparent z-20 pointer-events-none"
          />

          <div className="text-center mb-4 md:mb-10">
            <motion.span 
              variants={itemVariants}
              className="inline-block px-3 py-1 rounded-full bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-3 md:mb-6 border border-[var(--color-brand-cyan)]/20"
            >
              O MAIS PROCURADO
            </motion.span>
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-black text-white tracking-tight mb-1 md:mb-2">{monthlyPlan.title}</motion.h3>
            <motion.p variants={itemVariants} className="text-gray-400 text-[10px] md:text-sm font-medium">{monthlyPlan.subtitle}</motion.p>
          </div>

          <motion.div variants={itemVariants} className="mb-6 md:mb-12 flex items-baseline justify-center gap-1">
            <span className="text-xl md:text-2xl font-bold text-[var(--color-brand-cyan)]">R$</span>
            <span className="text-5xl md:text-8xl font-black text-white tracking-tighter">{monthlyPlan.price}</span>
            <span className="text-sm md:text-lg text-gray-500 font-medium">{monthlyPlan.period}</span>
          </motion.div>

          <div className="space-y-3 md:space-y-6 mb-6 md:mb-12">
            {monthlyPlan.benefits.map((benefit, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="flex items-start gap-3 md:gap-4"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_15px_rgba(67,175,239,0.4)]">
                  <Check className="w-3 md:w-3.5 text-[#020b16]" strokeWidth={4} />
                </div>
                <span className="text-gray-300 text-sm md:text-base font-medium leading-tight">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full block text-center py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl 
                bg-gradient-to-r from-[var(--color-brand-cyan)] to-[var(--color-brand-cyan-light)] 
                text-[#020b16] shadow-[0_10px_30px_rgba(67,175,239,0.3)] 
                hover:shadow-[0_15px_40px_rgba(67,175,239,0.5)] 
                hover:translate-y-[-2px] active:translate-y-[0px]
                transition-all duration-300
              "
            >
              ASSINAR AGORA
            </a>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-center text-gray-500 text-[10px] mt-6 font-bold uppercase tracking-widest"
          >
            Ativação imediata após o pagamento
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}


