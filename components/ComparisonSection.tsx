import React from 'react';
import { motion } from 'framer-motion';
import { DIFFERENTIATORS, COMPETITORS } from '../constants';
import { Check, X, Layers, Globe } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0F0F0F] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Por Que Isso É <span className="text-brand-primary">Diferente</span>?
          </h2>
          <p className="text-xl text-gray-400 font-light">
            Nenhum serviço atual tem essa proposta. É tudo isso ao mesmo tempo, criado para o ecossistema das IAs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: What We Are Not */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
              <Layers className="text-gray-600" />
              O Que <span className="text-gray-500">NÃO</span> Somos
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {DIFFERENTIATORS.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-[#0F0F0F] border border-white/5 text-gray-400">
                  <X className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="p-6 mt-8 rounded-xl bg-gradient-to-br from-brand-primary/10 to-transparent border border-brand-primary/20">
               <p className="text-white text-lg font-medium mb-2">Somos uma Nova Categoria.</p>
               <p className="text-sm text-gray-400">
                 Engenharia de dados e otimização de reputação especificamente para a era da Inteligência Artificial Generativa.
               </p>
            </div>
          </div>

          {/* Right: First Mover Advantage */}
          <div className="space-y-8">
             <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
              <Globe className="text-brand-primary" />
              Pioneirismo Absoluto
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              Globalmente, apenas grandes corporações estão estudando isso agora. No Brasil, você é o primeiro a ter acesso.
            </p>

            <div className="bg-[#121212] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
               <div className="px-6 py-4 bg-[#171717] border-b border-white/5 flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Global Players</span>
                  <span className="text-[10px] px-2 py-1 rounded bg-green-500/10 text-green-500 border border-green-500/20">Active Research</span>
               </div>
               <div className="divide-y divide-white/5">
                 {COMPETITORS.map((comp, i) => (
                   <div key={i} className={`flex items-center justify-between px-6 py-4 ${comp.type === 'us' ? 'bg-brand-primary/5' : ''}`}>
                      <span className={`text-sm font-medium ${comp.type === 'us' ? 'text-brand-primary' : 'text-gray-400'}`}>
                        {comp.name}
                      </span>
                      {comp.type === 'us' && (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-brand-primary text-white rounded shadow-lg shadow-brand-primary/40">
                          YOU
                        </span>
                      )}
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;