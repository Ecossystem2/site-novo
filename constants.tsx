import React from 'react';
import { Step, ComparisonItem } from './types';
import { 
  Activity, 
  Brain, 
  Search, 
  Globe, 
  Zap, 
  TrendingUp, 
  Target,
  Share2,
  Cpu,
  BarChart3,
  Layers,
  MousePointerClick
} from 'lucide-react';

export const CHAT_QUERIES = [
  "ChatGPT, qual a melhor agência de tráfego da região?",
  "Gemini, qual empresa tem mais credibilidade em automação?",
  "Perplexity, que restaurante você recomenda hoje?"
];

export const PROCESS_STEPS: Step[] = [
  {
    id: 1,
    title: "Leitura Algorítmica do Mercado",
    description: "Descobrimos exatamente como a IA enxerga seu setor. Analisamos critérios de confiança, avaliamos a reputação que ela vê e rodamos benchmarks de recomendações reais.",
    features: ["Análise de critérios de confiança", "Identificação de lacunas", "Mapa de autoridade algorítmica"],
    icon: <Search className="w-6 h-6 text-brand-primary" />
  },
  {
    id: 2,
    title: "Construção da Autoridade Digital Real",
    description: "A IA não vê beleza, ela vê consistência. Criamos ativos que as IAs leem como 'credibilidade máxima' e expertise comprovada (E-E-A-T).",
    features: ["SEO Conversacional", "Conteúdo profundo para IA", "Reviews verificáveis"],
    icon: <Activity className="w-6 h-6 text-brand-primary" />
  },
  {
    id: 3,
    title: "Otimização da Presença Digital",
    description: "Sua marca se torna impossível de ignorar. Perfil digital limpo, estável e forte, sendo o caminho de menor resistência para a recomendação.",
    features: ["Google Business Profile Avançado", "Estrutura IA-SEO", "Presença Omnichannel"],
    icon: <Globe className="w-6 h-6 text-brand-primary" />
  },
  {
    id: 4,
    title: "IA Awareness Boost™",
    description: "Nossa tecnologia exclusiva. Criamos trilhas e conexões digitais que aumentam a probabilidade matemática da IA escolher VOCÊ.",
    features: ["Links semânticos", "Ativos de reputação", "Relações contextuais"],
    icon: <Brain className="w-6 h-6 text-brand-primary" />
  },
  {
    id: 5,
    title: "Sinalização via Tráfego Pago",
    description: "Empresas ativas são mais relevantes. Usamos o tráfego para enviar sinais de volume, cliques e liderança de mercado para o algoritmo.",
    features: ["Sinais de volume de busca", "Relevância cross-platform", "Expansão de marca"],
    icon: <TrendingUp className="w-6 h-6 text-brand-primary" />
  },
  {
    id: 6,
    title: "Conversão da Recomendação",
    description: "Transformamos a menção da IA em dinheiro no caixa. IA → Seu Nome → Site Otimizado → Prova Social → Venda.",
    features: ["Tráfego orgânico qualificado", "Visitantes com alta intenção", "Vendas recorrentes"],
    icon: <Zap className="w-6 h-6 text-brand-primary" />
  }
];

export const DIFFERENTIATORS = [
  "Não é SEO tradicional",
  "Não é Social Media",
  "Não é Tráfego Pago comum",
  "Não é Branding clássico",
  "Não é Gestão de Reputação",
  "Não é Automação simples"
];

export const COMPETITORS: ComparisonItem[] = [
  { name: "Accenture Interactive", type: 'competitor' },
  { name: "Deloitte Digital", type: 'competitor' },
  { name: "Publicis Groupe", type: 'competitor' },
  { name: "Ogilvy & Mather", type: 'competitor' },
  { name: "AI Referral Engine™", type: 'us' },
];