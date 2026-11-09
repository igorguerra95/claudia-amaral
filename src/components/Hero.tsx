import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Sparkles, Calendar, Heart, Award, CheckCircle2 } from 'lucide-react';
import { CLINICAL_METRICS } from '../data/clinicalData';

interface HeroProps {
  onOpenContact: (subject?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  // Animação de contadores para estatísticas
  const [counts, setCounts] = useState(CLINICAL_METRICS.map(() => 0));

  useEffect(() => {
    const duration = 1600; // ms
    const steps = 30;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        CLINICAL_METRICS.map((m) => Math.floor(m.value * eased))
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="inicio" className="relative pt-6 pb-20 lg:pt-12 lg:pb-32 overflow-hidden bg-quartz-gradient">
      {/* Elementos Decorativos de Fundo Suaves */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FCE7F3]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#FFE4E6]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna de Texto (7 colunas) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Pill Label / Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#F472B6]/30 shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-ping" />
              <span className="text-xs font-semibold tracking-wide text-[#9D174D]">
                Acolhimento Clínico & Neurociência Afetiva
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs text-slate-600 font-medium hidden sm:inline">
                Atendimento Presencial e Online
              </span>
            </motion.div>

            {/* Headline Magnético e Original (Display Grande em Cormorant Garamond) */}
            <motion.h1
              variants={itemVariants}
              className="hero-headline text-slate-900 mb-6 text-balance"
            >
              Onde a ciência da mente encontra a{' '}
              <span className="italic font-normal text-[#BE185D] underline decoration-[#F472B6]/40 decoration-wavy decoration-1 underline-offset-8">
                delicadeza
              </span>{' '}
              da escuta humana.
            </motion.h1>

            {/* Subheadline Esclarecedor em Lato */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl text-pretty"
            >
              Psicoterapia individual e avaliação neuropsicológica clínica. Um espaço 
              seguro e sigiloso para você compreender a raiz das suas dores emocionais, 
              desarmar a ansiedade e reconstruir sua autonomia com rigor científico e afeto genuíno.
            </motion.p>

            {/* CTAs Principais */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={() => onOpenContact('Consulta Inicial de Acolhimento')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#E11D48] hover:bg-[#BE185D] quartz-shadow-md hover:quartz-shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#areas"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-slate-700 bg-white/80 hover:bg-white border border-slate-200/90 hover:border-[#F472B6]/50 shadow-xs hover:shadow-sm transition-all duration-200 text-center"
              >
                <span>Conhecer Áreas de Atuação</span>
              </a>
            </motion.div>

            {/* Micro-prova de Confiança e Credenciais */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-200/70 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FDF2F8] border border-[#FCE7F3] flex items-center justify-center text-[#BE185D] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">CRP 06/148920</div>
                  <div className="text-[11px] text-slate-500">Cadastro Ativo</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FDF2F8] border border-[#FCE7F3] flex items-center justify-center text-[#BE185D] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">HC-FMUSP</div>
                  <div className="text-[11px] text-slate-500">Especialista Clínica</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-full bg-[#FDF2F8] border border-[#FCE7F3] flex items-center justify-center text-[#BE185D] shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">100% Sigiloso</div>
                  <div className="text-[11px] text-slate-500">Espaço Não Julgador</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna Visual e Retrato da Profissional (5 colunas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Moldura Assimétrica Elegante */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glow Quartzo Sutil */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F472B6]/25 to-[#FDA4AF]/20 rounded-3xl blur-2xl -z-10" />

              {/* Imagem Principal da Psicóloga Claudia */}
              <div className="relative rounded-3xl overflow-hidden border border-white/90 shadow-2xl bg-white aspect-[3/4]">
                <img
                  src="/src/assets/images/psicologa_claudia_1794239759263.jpg"
                  alt="Dra. Claudia Amaral Ferreira em seu consultório acolhedor de psicologia e neuropsicologia"
                  className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradiente sutil na base da foto para sobreposição elegante */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Legenda interna suave */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-2xl bg-slate-950/40 backdrop-blur-md border border-white/20">
                  <div className="font-heading text-lg font-medium leading-snug">
                    Claudia Amaral Ferreira
                  </div>
                  <div className="text-xs text-rose-200/90 font-light">
                    Psicóloga & Neuropsicóloga • Atendimento Humanizado
                  </div>
                </div>
              </div>

              {/* Card Flutuante de Destaque 1 - Avaliação & Terapia */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 sm:-left-8 glass-quartz quartz-shadow-lg p-4 rounded-2xl border border-white/90 hidden sm:flex items-center gap-3.5 max-w-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F472B6] to-[#E11D48] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Neurociência & Empatia
                  </div>
                  <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    Planos terapêuticos personalizados para cada história
                  </div>
                </div>
              </motion.div>

              {/* Card Flutuante 2 - Modalidade Flexível */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-4 -right-4 sm:-right-6 glass-quartz quartz-shadow-md px-4 py-2.5 rounded-full border border-white/90 flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-800">
                  Vagas Abertas Este Mês
                </span>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Métricas e Estatísticas Numéricas Animadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 pt-10 border-t border-slate-200/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {CLINICAL_METRICS.map((metric, idx) => (
              <div
                key={metric.label}
                className="p-5 sm:p-6 rounded-2xl bg-white/70 border border-slate-200/60 quartz-shadow-sm hover:quartz-shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#9D174D] tracking-tight">
                  {counts[idx]}
                  {metric.suffix}
                </div>
                <div className="text-sm font-semibold text-slate-900 mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 font-normal">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
