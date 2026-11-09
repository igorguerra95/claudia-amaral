import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  ShieldCheck, 
  Heart, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight,
  BookOpenCheck,
  CheckCircle2
} from 'lucide-react';

interface AboutProps {
  onOpenContact: (subject?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenContact }) => {
  const pilares = [
    {
      title: 'Escuta Ativa & Sem Julgamentos',
      desc: 'Um espaço neutro, confidencial e caloroso onde você pode despir suas defesas e expressar vulnerabilidades sem qualquer receio de reprovação.',
      icon: Heart
    },
    {
      title: 'Rigor Científico & Neurociência',
      desc: 'Intervenções embasadas nas mais recentes pesquisas mundiais sobre neuroplasticidade, cognição humana e regulação emocional.',
      icon: BrainCircuit
    },
    {
      title: 'Sigilo Ético Absoluto',
      desc: 'Garantia inegociável de confidencialidade resguardada pelo Código de Ética do Conselho Federal de Psicologia (CRP 06/148920).',
      icon: ShieldCheck
    },
    {
      title: 'Plano Terapêutico Singular',
      desc: 'Nada de fórmulas prontas. Cada mente carrega uma biografia única; seus objetivos guiam o ritmo e os métodos do acompanhamento.',
      icon: Sparkles
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Glow Suave Rosa Quartzo de Fundo */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#FCE7F3]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Superior: História e Propósito */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Imagem do Consultório Acolhedor (5 colunas) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl aspect-[4/3] lg:aspect-[4/5] bg-slate-100">
              <img
                src="/src/assets/images/consultorio_acolhedor_1794239770838.jpg"
                alt="Consultório acolhedor de Claudia Amaral Ferreira com poltronas confortáveis e iluminação natural"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-slate-950/40 backdrop-blur-md border border-white/20">
                <div className="text-xs font-semibold tracking-wider uppercase text-rose-200 mb-0.5">
                  Ambiente Clínico Planejado
                </div>
                <div className="text-sm font-medium leading-snug">
                  Iluminação natural, poltronas confortáveis e atmosfera desenhada para acalmar os sentidos.
                </div>
              </div>
            </div>

            {/* Badge Flutuante de Formação */}
            <div className="absolute -bottom-5 -right-4 sm:-right-6 glass-quartz quartz-shadow-md p-3.5 rounded-2xl border border-white/90 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FDF2F8] border border-[#FCE7F3] flex items-center justify-center text-[#BE185D]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Especialização HC-FMUSP</div>
                <div className="text-[11px] text-slate-500">Neuropsicologia Clínica</div>
              </div>
            </div>
          </motion.div>

          {/* Biografia e Apresentação da Profissional (7 colunas) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F8] border border-[#FCE7F3] text-xs font-semibold text-[#9D174D] uppercase tracking-wider mb-4">
              Trajetória & Filosofia Clínica
            </div>

            <h2 className="section-headline text-slate-900 mb-6 text-balance">
              Claudia Amaral Ferreira: compromisso com a sua saúde mental e clareza cognitiva.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
              <p>
                Acredito profundamente que a terapia não é um processo de consertar pessoas quebradas, 
                mas sim de iluminar caminhos para que cada indivíduo reconheça suas forças, 
                compreenda o funcionamento do seu cérebro e construa respostas saudáveis diante do sofrimento.
              </p>
              <p>
                Com mais de uma década de prática clínica, alio a profundidade do acolhimento humano 
                à precisão diagnóstica da neuropsicologia. Minha formação pelo Instituto de 
                Psiquiatria do HC-FMUSP me permite enxergar o ser humano sob a ótica biológica, psicológica e social, 
                respeitando a complexidade singular de cada paciente.
              </p>
            </div>

            {/* Credenciais em Destaque */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Graduação em Psicologia (CRP 06/148920)
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Especialista em Neuropsicologia Clínica (IPq-HC-FMUSP)
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Formação em TCC e Terapias de Terceira Geração (ACT)
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-slate-200/60">
                <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium">
                  Membro da Sociedade Brasileira de Neuropsicologia (SBNp)
                </span>
              </div>
            </div>

            {/* CTA & Assinatura */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full pt-4 border-t border-slate-100">
              <button
                onClick={() => onOpenContact('Quero agendar uma conversa com a Claudia')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#BE185D] quartz-shadow-sm hover:quartz-shadow-md transition-all cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-left sm:text-right">
                <div className="font-heading text-2xl font-semibold italic text-slate-900 leading-tight">
                  Claudia Amaral Ferreira
                </div>
                <div className="text-xs text-slate-500 font-normal">
                  Psicóloga & Neuropsicóloga Clínica
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Pilares Éticos do Consultório */}
        <div className="pt-12 border-t border-slate-200/70">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-heading text-3xl font-bold text-slate-900 mb-3">
              Os 4 Pilares da Nossa Relação Terapêutica
            </h3>
            <p className="text-sm text-slate-600">
              Princípios inegociáveis que norteiam cada sessão e garantem sua segurança em cada passo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilares.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 quartz-shadow-sm hover:quartz-shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#FCE7F3] flex items-center justify-center text-[#BE185D] mb-4 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-heading text-xl font-bold text-slate-900 mb-2">
                      {p.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
