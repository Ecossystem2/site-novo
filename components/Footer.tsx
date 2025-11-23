import React from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#020202] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA */}
        <div className="mb-24 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
           <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
             O futuro não espera. <br/>
             <span className="text-gray-600">Sua marca vai ser a resposta?</span>
           </h2>
           <p className="text-xl text-gray-400 font-light max-w-2xl">
             Descubra o que a Inteligência Artificial diz sobre sua empresa hoje e assuma o controle da sua reputação algorítmica.
           </p>
           <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
             Agendar Diagnóstico Gratuito
             <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
           </button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <div className="col-span-2 space-y-6">
            <span className="text-2xl font-bold text-white tracking-tight">
              AI Referral <span className="text-brand-primary">Engine™</span>
            </span>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              A primeira agência especializada em otimização para Large Language Models (LLMs) do Brasil.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#como-funciona" className="hover:text-brand-primary transition-colors">Metodologia</a></li>
              <li><a href="#diferenciais" className="hover:text-brand-primary transition-colors">Comparativo</a></li>
              <li><a href="#contato" className="hover:text-brand-primary transition-colors">Consultoria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 mt-16 border-t border-white/5 text-gray-600 text-xs">
          <p>© 2024 AI Referral Engine™. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-primary transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="hover:text-brand-primary transition-colors"><Mail className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;