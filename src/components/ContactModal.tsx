import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, ShieldCheck, Heart, CheckCircle2, MessageCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultSubject = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultSubject) {
      setMessage(`Olá, gostaria de informações e agendamento para: ${defaultSubject}`);
    } else {
      setMessage('');
    }
    setSubmitted(false);
  }, [defaultSubject, isOpen]);

  // Bloqueia scroll do body enquanto modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá, Dra. Claudia! Gostaria de falar sobre atendimento (${modality === 'online' ? 'Online' : 'Presencial'}). ${message ? `Detalhes: ${message}` : ''}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Escurecido Suave */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity"
          />

          {/* Card do Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 z-10"
          >
            {/* Botão Fechar */}
            <button
              onClick={onClose}
              aria-label="Fechar janela"
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900">
                  Solicitação Enviada!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
                  Agradeço pelo contato, <strong>{name}</strong>. Responderei brevemente pelo seu WhatsApp com as orientações de agendamento.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#E11D48] hover:bg-[#BE185D] transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-[#FDF2F8] text-[#BE185D] flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 fill-[#BE185D]" />
                  </span>
                  <span className="text-xs font-bold text-[#9D174D] uppercase tracking-wider">
                    Acolhimento & Agendamento
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">
                  Entrar em Contato
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Preencha abaixo para receber os horários disponíveis e informações de consulta com total sigilo.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Como prefere ser chamado(a)?"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(00) 00000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Modalidade *
                      </label>
                      <select
                        value={modality}
                        onChange={(e) => setModality(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-[#F8FAFC] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48]"
                      >
                        <option value="online">Online (Todo Brasil)</option>
                        <option value="presencial">Presencial (Consultório)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mensagem ou Demanda Principal
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ex: Gostaria de saber sobre horários para ansiedade, avaliação para TDAH, etc."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-[#F8FAFC] text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#F472B6]/40 focus:border-[#E11D48] resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#BE185D] shrink-0" />
                    <span>Sigilo profissional resguardado pelo CRP 06/148920.</span>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-semibold text-white bg-[#E11D48] hover:bg-[#BE185D] shadow-sm transition-all cursor-pointer"
                    >
                      <span>{isSubmitting ? 'Enviando...' : 'Entrar em contato'}</span>
                      <Send className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
