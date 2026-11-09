import React, { useState } from 'react';
import { MessageCircle, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá, Dra. Claudia Amaral Ferreira! Encontrei seu site e gostaria de tirar algumas dúvidas sobre o atendimento psicológico/neuropsicológico.'
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Tooltip Acolhedor de Apresentação */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-3 p-3.5 rounded-2xl glass-quartz quartz-shadow-lg border border-white/90 max-w-xs text-left relative flex items-start gap-3"
          >
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Fechar balão"
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="w-8 h-8 rounded-full bg-[#FDF2F8] border border-[#FCE7F3] flex items-center justify-center text-[#BE185D] shrink-0 mt-0.5">
              <Heart className="w-4 h-4 fill-[#FCE7F3]" />
            </div>

            <div className="pr-4">
              <div className="text-xs font-bold text-slate-900 leading-tight">
                Precisa conversar?
              </div>
              <div className="text-[11px] text-slate-600 leading-normal mt-0.5">
                Olá! Estou aqui para te acolher. Fale comigo pelo WhatsApp com total sigilo.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão Flutuante com Pulso Discreto */}
      <div className="relative group">
        {/* Anel de Pulso Suave */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-60" />

        <button
          onClick={handleOpenWhatsApp}
          aria-label="Iniciar conversa no WhatsApp com Claudia Amaral Ferreira"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
