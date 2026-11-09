import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Laptop, 
  Sparkles, 
  ArrowRight, 
  Check, 
  MessageCircle, 
  ShieldCheck,
  Send
} from 'lucide-react';

interface InteractiveSchedulerProps {
  onPreFillContact: (message: string) => void;
}

export const InteractiveScheduler: React.FC<InteractiveSchedulerProps> = ({ onPreFillContact }) => {
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [selectedArea, setSelectedArea] = useState<string>('Ansiedade e Estresse');
  const [preferredPeriod, setPreferredPeriod] = useState<'manha' | 'tarde' | 'noite'>('tarde');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const areas = [
    'Ansiedade e Pânico',
    'Avaliação Neuropsicológica (TDAH / Memória)',
    'Psicoterapia Individual e Autoconhecimento',
    'Depressão e Transtornos do Humor',
    'Terapia de Casal',
    'Reabilitação Cognitiva'
  ];

  const periods = [
    { id: 'manha', label: 'Manhã', detail: '08:00 às 12:00' },
    { id: 'tarde', label: 'Tarde', detail: '13:00 às 18:00' },
    { id: 'noite', label: 'Noite', detail: '18:30 às 21:00' },
  ];

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const formattedMessage = `Olá, Dra. Claudia! Me chamo ${name || 'um visitante do site'}. Gostaria de solicitar informações para consulta na modalidade ${modality === 'online' ? 'Online' : 'Presencial'}, com foco em ${selectedArea}, preferencialmente no período da ${preferredPeriod}.${note ? ` Observação: ${note}` : ''}`;
    
    onPreFillContact(formattedMessage);
  };

  return (
    <section id="agendamento" className="py-24 bg-[#FAF5F7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#FCE7F3] text-xs font-semibold text-[#9D174D] uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Simulador de Acolhimento & Agendamento</span>
          </div>
          <h2 className="section-headline text-slate-900 mb-4">
            Planeje sua Consulta em Poucos Passos
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Selecione a modalidade, sua principal necessidade e seu melhor horário. 
            Você receberá um retorno amigável com a disponibilidade da agenda.
          </p>
        </div>

        {/* Card Interativo Principal */}
        <div className="glass-quartz quartz-shadow-lg rounded-3xl p-6 sm:p-10 border border-white/90">
          
          <form onSubmit={handleSimulate} className="space-y-8">
            
            {/* Passo 1: Modalidade */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                1. Onde você prefere ser atendido(a)?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setModality('online')}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${
                    modality === 'online'
                      ? 'bg-[#FDF2F8] border-[#E11D48] ring-2 ring-[#E11D48]/20 quartz-shadow-sm'
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    modality === 'online' ? 'bg-[#E11D48] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span>Psicoterapia Online</span>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-[#E11D48] text-white">
                        Todo Brasil & Exterior
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      No conforto da sua casa, com plataforma criptografada de alta segurança.
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setModality('presencial')}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${
                    modality === 'presencial'
                      ? 'bg-[#FDF2F8] border-[#E11D48] ring-2 ring-[#E11D48]/20 quartz-shadow-sm'
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    modality === 'presencial' ? 'bg-[#E11D48] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span>Atendimento Presencial</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Consultório aconchegante, ideal para avaliações neuropsicológicas completas.
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Passo 2: Área de Foco */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                2. Qual queixa ou objetivo você gostaria de trabalhar?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {areas.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => setSelectedArea(area)}
                    className={`px-4 py-3 rounded-xl text-xs font-medium text-left border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      selectedArea === area
                        ? 'bg-[#E11D48] text-white border-[#E11D48] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200/70 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <span>{area}</span>
                    {selectedArea === area && <Check className="w-4 h-4 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Passo 3: Melhor Período */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                3. Qual o período mais conveniente para suas sessões?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {periods.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPreferredPeriod(p.id as any)}
                    className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                      preferredPeriod === p.id
                        ? 'bg-[#FDF2F8] border-[#E11D48] ring-2 ring-[#E11D48]/20'
                        : 'bg-white border-slate-200/80 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">{p.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{p.detail}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Passo 4: Dados para Contato */}
            <div className="pt-4 border-t border-slate-200/60">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como prefere ser chamado(a)?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    WhatsApp ou Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Alguma observação ou detalhe que gostaria de adiantar? (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Ex: Já fiz terapia antes; tenho encaminhamento neurológico; gostaria de saber sobre valores..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48] resize-none"
                />
              </div>
            </div>

            {/* Botão de Envio com Micro-Feedback */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#BE185D]" />
                <span>Seus dados são protegidos por sigilo profissional absoluto.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#BE185D] quartz-shadow-md hover:quartz-shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <Send className="w-4 h-4" />
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
