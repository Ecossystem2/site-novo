import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, Sparkles, User, Search, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { CHAT_QUERIES } from '../constants';

const Hero: React.FC = () => {
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 30;
    const deleteSpeed = 15;
    const pauseTime = 4000;

    const type = () => {
      const currentFullText = CHAT_QUERIES[currentQueryIndex];
      
      if (isDeleting) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentQueryIndex((prev) => (prev + 1) % CHAT_QUERIES.length);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentQueryIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-0 bg-[#050505]">
      <ThreeScene />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">AI Referral Engine™</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              A Nova Era do <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Marketing Começou</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
              As pessoas não pesquisam mais como antes. Elas perguntam para a IA.
              <br className="hidden md:block" />
              O <span className="text-white font-medium">AI Referral Engine™</span> define quem vence nesse novo mercado.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group px-8 py-4 bg-brand-primary text-white rounded-lg font-semibold text-base transition-all hover:bg-brand-primaryHover shadow-[0_0_20px_rgba(234,88,12,0.3)] flex items-center justify-center gap-3">
              Iniciar Análise de IA
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/10 text-white rounded-lg font-medium text-base transition-all hover:bg-white/5 flex items-center justify-center gap-2">
              <Play className="w-4 h-4 fill-current" />
              Ver o Processo
            </button>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="pt-8 border-t border-white/5"
          >
             <p className="text-xs text-gray-500 font-mono mb-4 uppercase tracking-widest">Compatível com os principais LLMs</p>
             <div className="flex flex-wrap gap-8 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
               {['OpenAI GPT-4', 'Google Gemini', 'Perplexity', 'Claude 3', 'Copilot'].map(brand => (
                 <span key={brand} className="text-sm font-semibold text-white">{brand}</span>
               ))}
             </div>
          </motion.div>
        </div>

        {/* Right Content - Software UI */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent blur-[80px] rounded-full opacity-40"></div>
          
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/5">
            {/* Browser Header */}
            <div className="px-4 py-3 border-b border-white/5 flex items-center gap-4 bg-[#0F0F0F]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1A1A] border border-white/5 text-[10px] text-gray-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  ai-referral-engine.sys
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-6 min-h-[400px] flex flex-col justify-between bg-[#0A0A0A]">
              <div className="space-y-8">
                {/* User Message */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">User Query</div>
                    <p className="text-lg text-white font-light leading-relaxed">
                      {displayText}
                      <span className="inline-block w-0.5 h-5 ml-1 bg-brand-primary animate-pulse align-middle"></span>
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                {!isDeleting && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4"
                  >
                    <div className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-primary/20">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="space-y-3 w-full">
                      <div className="text-[10px] font-bold text-brand-primary uppercase tracking-wider">AI Response</div>
                      <div className="p-4 rounded-lg bg-[#141414] border border-white/5 space-y-3">
                         <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-white">Top Recommendation</span>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-brand-primary/20 text-brand-primary border border-brand-primary/20">99.8% Match</span>
                         </div>
                         <div className="h-px bg-white/10 w-full"></div>
                         <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center border border-white/10">
                               <Sparkles className="w-5 h-5 text-brand-primary" />
                            </div>
                            <div>
                               <p className="text-white font-medium">Sua Empresa™</p>
                               <p className="text-xs text-gray-500">Autoridade Verificada • E-E-A-T Confirmado</p>
                            </div>
                         </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="mt-8 relative">
                <input 
                  disabled
                  type="text" 
                  placeholder="Ask follow up..." 
                  className="w-full bg-[#141414] border border-white/10 rounded-lg py-3 px-4 text-sm text-gray-500 focus:outline-none cursor-not-allowed"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded bg-white/5">
                  <ArrowRight className="w-3 h-3 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;