import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Heart, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { TESTIMONIALS, FAQ_ITEMS } from '../data/clinicalData';

interface TestimonialsAndFaqProps {
  onOpenContact: (subject?: string) => void;
}

export const TestimonialsAndFaq: React.FC<TestimonialsAndFaqProps> = ({ onOpenContact }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco 1: Relatos de Pacientes & Prova de Humanização */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#FCE7F3] text-xs font-semibold text-[#9D174D] uppercase tracking-wider mb-4">
              Vozes Reais • Ética e Sigilo
            </div>
            <h2 className="section-headline text-slate-900 mb-4">
              Transformações Que Começaram na Escuta
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Relatos autorizados de pessoas que encontraram na psicoterapia e na 
              neuropsicologia um novo olhar sobre si mesmas. Dados pessoais preservados em respeito ao sigilo ético.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative rounded-3xl p-8 bg-[#F8FAFC] border border-slate-200/80 quartz-shadow-sm hover:quartz-shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#FCE7F3] flex items-center justify-center text-[#BE185D] shadow-2xs">
                      <Quote className="w-5 h-5 fill-[#FCE7F3]" />
                    </div>
                    <span className="text-xs font-semibold text-[#9D174D] bg-[#FDF2F8] px-3 py-1 rounded-full border border-[#FCE7F3]">
                      {item.focusArea}
                    </span>
                  </div>

                  <p className="font-heading text-lg sm:text-xl text-slate-800 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      {item.patientProfile}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {item.duration}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Acompanhamento Real</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bloco 2: FAQ - Dúvidas Frequentes */}
        <div id="faq" className="pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Coluna Lateral Informativa (4 colunas) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#FCE7F3] text-xs font-semibold text-[#9D174D] uppercase tracking-wider mb-4">
                Transparência & Cuidado
              </div>
              <h3 className="section-headline text-slate-900 mb-4 text-balance">
                Perguntas Frequentes
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Buscar auxílio psicológico é um passo de coragem. Reunimos aqui os principais 
                esclarecimentos para que você se sinta completamente seguro(a) antes de iniciar.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF5F7] border border-[#FCE7F3]">
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  Ainda ficou alguma dúvida?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Envie sua pergunta diretamente pelo WhatsApp. Terei o maior prazer em orientar você.
                </p>
                <button
                  onClick={() => onOpenContact('Dúvida sobre o processo de terapia')}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#BE185D] transition-all cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Accordion List (8 colunas) */}
            <div className="lg:col-span-8 space-y-4">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaqId === item.id;
                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200/80 bg-[#F8FAFC] overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    >
                      <span className="font-heading text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {item.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#FDF2F8] text-[#BE185D]' : 'text-slate-500'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
