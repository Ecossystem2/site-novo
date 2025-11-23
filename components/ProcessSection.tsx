import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const ProcessCard: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-[#0A0A0A] hover:bg-[#111111] border border-white/10 hover:border-brand-primary/40 rounded-xl p-6 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-4xl font-bold text-white group-hover:opacity-20 group-hover:text-brand-primary transition-all">
        {step.id}
      </div>

      <div className="mb-6 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-brand-primary/25">
         {React.cloneElement(step.icon, { size: 24, strokeWidth: 1.5 })}
      </div>

      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
        {step.title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {step.description}
      </p>

      <div className="pt-4 border-t border-white/5">
        <ul className="space-y-2">
          {step.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
              <span className="mt-1 w-1 h-1 rounded-full bg-brand-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ProcessSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-4 block">Metodologia Exclusiva</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Engenharia Reversa <br />
            <span className="text-gray-600">Do Algoritmo.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Não é mágica, é um processo técnico de 6 etapas para alinhar sua marca com os critérios de autoridade das LLMs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;