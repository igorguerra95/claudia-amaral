import React from 'react';
import { Heart, ShieldCheck, ArrowUp, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Coluna 1: Marca Pessoal & Filosofia (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#E11D48] flex items-center justify-center text-white shadow-sm">
                <Heart className="w-4 h-4 fill-white/80" />
              </span>
              <div>
                <span className="font-heading text-2xl font-bold text-white tracking-tight block">
                  Claudia Amaral Ferreira
                </span>
                <span className="text-xs tracking-wider uppercase font-medium text-rose-300 block">
                  Psicóloga & Neuropsicóloga Clínica
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Espaço de acolhimento ético, psicoterapia humanizada e avaliação neuropsicológica 
              de alta precisão. Atendimento com afeto, ciência e respeito integral à sua singularidade.
            </p>

            <div className="flex items-center gap-2 text-xs text-rose-200/80 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60 max-w-sm">
              <ShieldCheck className="w-4 h-4 text-[#F472B6] shrink-0" />
              <span>Inscrita no Conselho Regional de Psicologia • CRP 06/148920</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-rose-300 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-rose-300 transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-rose-300 transition-colors">
                  Sobre Claudia
                </a>
              </li>
              <li>
                <a href="#agendamento" className="hover:text-rose-300 transition-colors">
                  Simulador de Consulta
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-300 transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-rose-300 transition-colors">
                  Contato & Agendamento
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Especialidades em Destaque (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Atendimento Especializado
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• Ansiedade, Pânico e Estresse Crônico</li>
              <li>• Avaliação Neuropsicológica (TDAH e Memória)</li>
              <li>• Psicoterapia Individual para Adultos</li>
              <li>• Depressão e Transtornos do Humor</li>
              <li>• Terapia de Casal e Vínculos Afetivos</li>
              <li>• Reabilitação Cognitiva e Estimulação</li>
            </ul>
            <div className="pt-2 text-xs text-slate-500">
              Modalidades: Presencial e Online em conformidade com as Resoluções do CFP.
            </div>
          </div>

        </div>

        {/* Rodapé Inferior com Direitos e Aviso Ético */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Claudia Amaral Ferreira. Todos os direitos reservados.
            <span className="block sm:inline sm:ml-2 text-slate-600">
              Atendimento psicológico estritamente confidencial.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
