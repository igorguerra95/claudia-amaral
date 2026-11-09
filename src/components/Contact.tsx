import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  Clock, 
  AlertCircle,
  Sparkles,
  Heart
} from 'lucide-react';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [message, setMessage] = useState(initialSubject || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sincroniza se o initialSubject mudar dinamicamente
  React.useEffect(() => {
    if (initialSubject) {
      setMessage((prev) => prev ? `${prev}\n\n[Assunto de Interesse: ${initialSubject}]` : `Olá! Gostaria de agendar uma consulta sobre: ${initialSubject}`);
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio seguro do formulário de contato
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá, Dra. Claudia Amaral Ferreira! Gostaria de solicitar informações sobre atendimento na modalidade ${modality === 'online' ? 'Online' : 'Presencial'}.${message ? ` Detalhes: ${message}` : ''}`
    );
    // Abre WhatsApp sem expor número fictício quebrador
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-quartz-gradient relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#FCE7F3] text-xs font-semibold text-[#9D174D] uppercase tracking-wider mb-4 shadow-2xs">
            <Heart className="w-3.5 h-3.5 text-[#E11D48] fill-[#E11D48]/30" />
            <span>Primeiro Passo Para o Seu Cuidado</span>
          </div>
          <h2 className="section-headline text-slate-900 mb-4">
            Inicie Sua Jornada Terapêutica
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Envie sua mensagem com total confidencialidade. Entrarei em contato 
            diretamente para esclarecer suas dúvidas e apresentar os horários disponíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Coluna de Apoio e Confiança (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-quartz quartz-shadow-md rounded-3xl p-8 border border-white/90">
              <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">
                Como Funciona o Primeiro Contato?
              </h3>
              
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#FDF2F8] text-[#BE185D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Mensagem Inicial:</strong>
                    Você preenche o formulário ou clica no botão do WhatsApp contando brevemente sua necessidade.
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#FDF2F8] text-[#BE185D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Alinhamento de Horários:</strong>
                    Responderei com as opções disponíveis na agenda (presencial ou online) e valores de investimento.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#FDF2F8] text-[#BE185D] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Sessão Inicial:</strong>
                    Realizamos sua primeira consulta para nos conhecermos e traçarmos os objetivos do seu processo.
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-200/60">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Conversar Direto no WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Aviso Ético de Emergência */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold mb-0.5">Aviso Importante Sobre Crises Graves:</strong>
                Este canal de agendamento não oferece pronto-socorro psicológico imediato. 
                Em casos de crise emocional aguda com risco à vida, ligue gratuitamente para o 
                <strong> CVV (188)</strong> ou dirija-se à UPA / pronto-atendimento mais próximo.
              </div>
            </div>

          </div>

          {/* Formulário Principal de Contato (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="glass-quartz quartz-shadow-lg rounded-3xl p-8 sm:p-10 border border-white/90">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-slate-900">
                    Mensagem Recebida com Sucesso!
                  </h3>
                  <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                    Muito obrigada pela confiança, <strong>{name}</strong>. Responderei à sua solicitação 
                    com o máximo de brevidade e carinho no seu WhatsApp/E-mail.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold text-[#831843] bg-[#FDF2F8] hover:bg-[#FCE7F3] border border-[#FCE7F3] transition-colors"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Mariana Silva"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(11) 90000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                        E-mail de Contato *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                        Modalidade Preferida *
                      </label>
                      <select
                        value={modality}
                        onChange={(e) => setModality(e.target.value as any)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48]"
                      >
                        <option value="online">Psicoterapia Online (Todo o Brasil)</option>
                        <option value="presencial">Atendimento Presencial no Consultório</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-2">
                      Como Posso Ajudar Você? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Conte um pouco sobre o que você tem sentido, se busca avaliação neuropsicológica, se há preferência de dia/horário..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48] resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-[#BE185D] shrink-0" />
                    <span>Todas as informações são estritamente sigilosas e confidenciais.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#E11D48] hover:bg-[#BE185D] quartz-shadow-md hover:quartz-shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-70"
                  >
                    <span>{isSubmitting ? 'Enviando...' : 'Entrar em contato'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
