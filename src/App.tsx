/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Areas } from './components/Areas';
import { About } from './components/About';
import { InteractiveScheduler } from './components/InteractiveScheduler';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ContactModal } from './components/ContactModal';
import { ClinicalArea } from './types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');
  const [prefilledMessageForForm, setPrefilledMessageForForm] = useState('');

  const handleOpenContactModal = (subject?: string) => {
    setContactSubject(subject || '');
    setIsModalOpen(true);
  };

  const handleSelectArea = (area: ClinicalArea) => {
    handleOpenContactModal(`Informações sobre ${area.title}`);
  };

  const handlePreFillScheduler = (message: string) => {
    setPrefilledMessageForForm(message);
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenContactModal(message);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-[#FCE7F3] selection:text-[#831843]">
      {/* 1. Header Fixo com Navegação Suave e Banner Ético */}
      <Header onOpenContact={handleOpenContactModal} />

      <main className="flex-1">
        {/* Seção Obrigatória 1: Início (Hero) */}
        <Hero onOpenContact={handleOpenContactModal} />

        {/* Seção Obrigatória 2: Áreas de Atuação */}
        <Areas 
          onSelectArea={handleSelectArea} 
          onOpenContact={handleOpenContactModal} 
        />

        {/* Seção Obrigatória 3: Sobre Claudia Amaral Ferreira */}
        <About onOpenContact={handleOpenContactModal} />

        {/* Funcionalidade Inteligente: Simulador de Acolhimento & Agendamento */}
        <InteractiveScheduler onPreFillContact={handlePreFillScheduler} />

        {/* Relatos Reais Éticos & Dúvidas Frequentes (FAQ) */}
        <TestimonialsAndFaq onOpenContact={handleOpenContactModal} />

        {/* Seção Obrigatória 4: Contato & Agendamento */}
        <Contact initialSubject={prefilledMessageForForm} />
      </main>

      {/* Footer com dados do CRP e Links Institucionais */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />

      {/* Modal Ágil de Contato para todos os CTAs */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultSubject={contactSubject}
      />
    </div>
  );
}
