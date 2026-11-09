import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenContact: (subject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Áreas de Atuação', href: '#areas' },
    { name: 'Sobre Claudia', href: '#sobre' },
    { name: 'Simulador de Acolhimento', href: '#agendamento' },
    { name: 'Dúvidas Frequentes', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner de Compromisso Ético */}
      <div className="bg-[#FAF5F7] border-b border-[#FCE7F3] text-xs text-[#831843] py-2 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center justify-center gap-2">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#E11D48] animate-pulse"></span>
            <span className="font-medium tracking-wide">
              Atendimento Humanizado Presencial & Online em todo o Brasil
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500 text-[11px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E11D48]" />
              CRP 06/148920 • Sigilo Ético Garantido
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-quartz quartz-shadow-sm border-b border-slate-200/80 py-3.5'
            : 'bg-[#F8FAFC]/90 backdrop-blur-md py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Marca Pessoal */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="group flex flex-col text-left focus:outline-none"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F472B6] to-[#FDA4AF] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-4 h-4 fill-white/80" />
              </span>
              <div>
                <span className="font-heading text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-none block">
                  Claudia Amaral Ferreira
                </span>
                <span className="text-[11px] md:text-xs tracking-widest uppercase font-medium text-[#9D174D] block mt-0.5">
                  Psicóloga & Neuropsicóloga Clínica
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-[#9D174D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F472B6] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Header */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#E11D48] hover:bg-[#BE185D] shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="p-2 rounded-xl text-slate-700 hover:text-[#9D174D] hover:bg-slate-100 transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[100px] z-50 lg:hidden px-4"
          >
            <div className="glass-quartz quartz-shadow-lg rounded-2xl p-6 border border-slate-200/90 flex flex-col space-y-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-medium text-slate-700 hover:text-[#9D174D] py-2 px-3 rounded-lg hover:bg-[#FDF2F8] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-slate-200/60 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium text-white bg-[#E11D48] hover:bg-[#BE185D] shadow-sm transition-all"
                >
                  <span>Entrar em contato</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9D174D]" />
                  <span>Atendimento com sigilo e acolhimento integral</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
