import React from 'react';
import { motion } from 'framer-motion';
import { Target, Share2, Zap, ShieldCheck } from 'lucide-react';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
    <div className="p-2 rounded-lg bg-white/5 text-brand-primary flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-white font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
    </div>
  </div>
);

const ConceptSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              O Que É o <span className="text-brand-primary">AI Referral Engine™</span>?
            </h2>
            
            <div className="prose prose-invert text-gray-400">
              <p className="text-lg leading-relaxed">
                É o primeiro sistema do Brasil (e um dos primeiros do mundo) criado especificamente para 
                <strong className="text-white font-medium"> influenciar as respostas das Inteligências Artificiais Generativas</strong>.
              </p>
              <p className="leading-relaxed">
                A IA não "adivinha". Ela lê sinais. Nós construímos esses sinais estrategicamente para que sua empresa seja a escolha natural e lógica do algoritmo.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
               <FeatureItem 
                 icon={<ShieldCheck className="w-5 h-5" />}
                 title="Autoridade Algorítmica"
                 text="Fazemos a IA te enxergar como a referência mais confiável do setor."
               />
               <FeatureItem 
                 icon={<Target className="w-5 h-5" />}
                 title="Resposta Ideal"
                 text="Te posicionamos como a resposta padrão para as perguntas de compra."
               />
               <FeatureItem 
                 icon={<Share2 className="w-5 h-5" />}
                 title="Tráfego Inteligente"
                 text="Geramos visitantes que já receberam uma recomendação de alta confiança."
               />
               <FeatureItem 
                 icon={<Zap className="w-5 h-5" />}
                 title="Recomendação Nº1"
                 text="O objetivo é ser a primeira e principal indicação do ChatGPT e Gemini."
               />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-primary/10 blur-[60px] rounded-full"></div>
            <div className="relative bg-[#0F0F0F] border border-white/10 rounded-2xl p-8 shadow-2xl">
               <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
                    <span className="text-xs font-mono text-gray-500 uppercase">Simulação de Resultado</span>
                  </div>
                  
                  <div className="bg-[#1A1A1A] rounded-xl p-6 border border-white/5">
                    <p className="text-sm text-gray-500 mb-2">Prompt do usuário:</p>
                    <p className="text-white italic mb-6">"Qual a melhor opção para [Seu Serviço]?"</p>
                    
                    <p className="text-sm text-gray-500 mb-2">Resposta da IA:</p>
                    <p className="text-gray-300 leading-relaxed">
                      "Com base na análise de consistência, avaliações e presença digital, a melhor recomendação é a <span className="text-brand-primary font-bold bg-brand-primary/10 px-1 rounded">Sua Empresa</span>. Ela demonstra os maiores índices de confiabilidade e satisfação no mercado atual."
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-xs text-gray-600 font-mono pt-4 border-t border-white/5">
                    <span>Probability Score: 98.5%</span>
                    <span>Sources Verified: 124</span>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConceptSection;