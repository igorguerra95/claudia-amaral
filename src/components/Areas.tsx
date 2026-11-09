import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wind, 
  Brain, 
  HeartHandshake, 
  SunMedium, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Clock, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { CLINICAL_AREAS } from '../data/clinicalData';
import { ClinicalArea } from '../types';

interface AreasProps {
  onSelectArea: (area: ClinicalArea) => void;
  onOpenContact: (subject?: string) => void;
}

export const Areas: React.FC<AreasProps> = ({ onSelectArea, onOpenContact }) => {
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);

  // Mapeamento dinâmico de ícones
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Wind':
        return <Wind className="w-6 h-6 text-[#BE185D]" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#BE185D]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#BE185D]" />;
      case 'SunMedium':
        return <SunMedium className="w-6 h-6 text-[#BE185D]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#BE185D]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-[#BE185D]" />;
    }
  };

  return (
    <section id="areas" className="py-24 bg-[#F8FAFC] relative">
      {/* Detalhe Sutil de Fundo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#FCE7F3] text-xs font-semibold text-[#9D174D] uppercase tracking-wider mb-4">
            Especialidades & Cuidado Clínico
          </div>
          <h2 className="section-headline text-slate-900 mb-5">
            Áreas de Atuação & Intervenção Especializada
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Metodologias estruturadas com respaldo em neurociência e psicologia baseada 
            em evidências para acolher suas dores, clarear diagnósticos e desenvolver recursos 
            internos para a vida.
          </p>
        </div>

        {/* Grid de 12 Colunas com Cards Assimétricos e Ricos em Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINICAL_AREAS.map((area, index) => {
            const isExpanded = selectedAreaId === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`relative flex flex-col justify-between rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F472B6]/40 ${
                  area.id === 'neuropsicologia-diagnostico'
                    ? 'ring-2 ring-[#F472B6]/40 quartz-shadow-md'
                    : 'quartz-shadow-sm hover:quartz-shadow-md'
                }`}
              >
                <div>
                  {/* Topo do Card: Ícone e Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#FDF2F8] border border-[#FCE7F3] flex items-center justify-center shadow-xs">
                      {renderIcon(area.iconName)}
                    </div>
                    <span className="inline-block text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                      {area.badge}
                    </span>
                  </div>

                  {/* Título da Especialidade */}
                  <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3 tracking-tight leading-snug">
                    {area.title}
                  </h3>

                  {/* Resumo Acolhedor */}
                  <p className="text-sm text-slate-600 font-normal leading-relaxed mb-6">
                    {area.shortDescription}
                  </p>

                  {/* Pills de Modalidade e Duração */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-[#F1F5F9] px-2.5 py-1 rounded-md">
                      <Layers className="w-3.5 h-3.5 text-[#BE185D]" />
                      {area.modality}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/50">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {area.duration}
                    </span>
                  </div>

                  {/* Benefícios Principais com Ícone Check */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      O que alcançamos em terapia:
                    </div>
                    <ul className="space-y-2">
                      {area.keyBenefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                          <span className="w-4 h-4 rounded-full bg-[#FDF2F8] text-[#BE185D] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Seção Expansível com Detalhes Aprofundados */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-slate-100 pt-4 mb-4"
                      >
                        <div className="text-xs text-slate-500 mb-2">
                          <strong className="text-slate-800">Abordagem:</strong> {area.approach}
                        </div>
                        <div className="text-xs text-slate-500 mb-3">
                          <strong className="text-slate-800">Para quem é indicado:</strong> {area.targetAudience}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed bg-[#FDF2F8]/60 p-3 rounded-xl border border-[#FCE7F3]">
                          {area.fullDescription}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Ações do Card */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedAreaId(isExpanded ? null : area.id)}
                    className="text-xs font-medium text-slate-500 hover:text-[#9D174D] flex items-center gap-1 transition-colors self-start sm:self-center"
                  >
                    <span>{isExpanded ? 'Menos detalhes' : 'Ver detalhes clínicos'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    onClick={() => onOpenContact(`Interesse em ${area.title}`)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#831843] bg-[#FDF2F8] hover:bg-[#FCE7F3] border border-[#FCE7F3] hover:border-[#F472B6]/40 transition-all duration-200"
                  >
                    <span>Entrar em contato</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E11D48]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bloco de Acolhimento Inferior */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200/80 quartz-shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-heading text-2xl font-bold text-slate-900 mb-2">
              Não tem certeza de qual área se encaixa na sua queixa?
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Não se preocupe em ter um diagnóstico prévio. A primeira sessão existe 
              justamente para escutar o que você está sentindo e construir juntos o melhor caminho de cuidado.
            </p>
          </div>
          <button
            onClick={() => onOpenContact('Dúvida sobre qual atendimento escolher')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#BE185D] quartz-shadow-sm hover:quartz-shadow-md transition-all shrink-0 cursor-pointer"
          >
            <span>Entrar em contato</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
