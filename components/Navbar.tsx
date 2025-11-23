import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#0C0A09]/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
             <div className="absolute inset-0 bg-brand-primary blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
             <div className="relative p-2 rounded-xl bg-gradient-to-br from-brand-surface to-brand-dark border border-white/10 group-hover:border-brand-primary/50 transition-colors">
                <Cpu className="w-5 h-5 text-brand-primary" />
             </div>
          </div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-gray-100 transition-colors">
            AI Referral <span className="text-brand-primary">Engine™</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {['Como Funciona', 'Diferenciais', 'Contato'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all hover:bg-white/5 rounded-full"
            >
              {item}
            </a>
          ))}
          
          <button className="ml-4 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2">
            Agendar Análise
            <Sparkles className="w-3 h-3 text-brand-secondary" />
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0C0A09] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-fade-in">
          <a href="#como-funciona" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white py-2">Como Funciona</a>
          <a href="#diferenciais" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white py-2">Diferenciais</a>
          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-secondary to-brand-primary text-white font-bold shadow-lg shadow-brand-primary/20">
            Começar Agora
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;