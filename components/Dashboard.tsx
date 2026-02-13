import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ArrowUpRight, Play, Pause, Bot, MessageSquare, AlertTriangle, TrendingUp, Zap, Users, Sparkles } from 'lucide-react';
import { FINANCIAL_DATA, BENCHMARK_DATA, LEADS } from '../services/mockData';

export const Dashboard: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Filter urgent leads
  const urgentLeads = LEADS.filter(l => l.status === 'quente' || l.status === 'shadow');

  return (
    <div className="space-y-8">
      
      {/* TOP SECTION: COPILOT BRIEFING (Daily Podcast) */}
      <div className="bg-gradient-to-r from-copilot-dark to-black border border-copilot-primary/30 rounded-3xl p-6 md:p-8 relative overflow-hidden group">
         <div className="absolute top-0 right-0 w-64 h-64 bg-copilot-primary blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
         
         <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
               <div className="flex items-center gap-2 mb-2 text-copilot-glow font-bold uppercase tracking-widest text-xs">
                 <Bot size={14} /> Briefing Diário • 08:00 AM
               </div>
               <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                 Bom dia, equipe Branco&Cia. Você tem <span className="text-copilot-glow">R$ 12.5k</span> em oportunidades críticas hoje.
               </h2>
               <p className="text-branco-muted text-sm max-w-xl">
                 Identifiquei 3 leads quentes sem resposta há mais de 2h e um "Shadow Lead" no contato do Ricardo. O tráfego de loja aumentou 15% ontem.
               </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 min-w-[300px]">
               <button 
                 onClick={() => setIsPlaying(!isPlaying)}
                 className="w-12 h-12 rounded-full bg-copilot-primary text-white flex items-center justify-center hover:bg-copilot-glow transition-all shadow-[0_0_15px_rgba(124,58,237,0.5)] hover:scale-105"
               >
                 {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" className="ml-1" />}
               </button>
               <div className="flex-1 space-y-2">
                  <div className="flex justify-between text-xs text-branco-muted font-mono">
                    <span>{isPlaying ? '0:14' : '0:00'}</span>
                    <span>1:45</span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className={`h-full bg-copilot-glow rounded-full ${isPlaying ? 'w-1/3 animate-pulse' : 'w-0'}`}></div>
                  </div>
                  {/* Fake Waveform */}
                  <div className="flex items-center gap-0.5 h-4 items-end opacity-50">
                    {[4,8,3,10,14,8,5,12,6,4,8,12,6,3,10,5,2].map((h, i) => (
                      <div key={i} className="w-1 bg-white rounded-full transition-all duration-300" style={{height: isPlaying ? `${Math.random() * 100}%` : `${h*5}%`}}></div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* METRICS GRID: Hybrid Retail + AI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Leads Recuperados (IA)" 
          value="14" 
          subtitle="R$ 8.4k em potencial"
          icon={Zap} 
          color="text-copilot-glow"
        />
        <StatCard 
          title="Vendas Totais" 
          value="R$ 1.250" 
          subtitle="Hoje, até agora"
          icon={TrendingUp} 
          color="text-white"
        />
        <StatCard 
          title="Tempo de Resposta" 
          value="15 min" 
          subtitle="Média do Mercado: 45min"
          icon={MessageSquare} 
          color="text-green-400"
          isBenchmark
        />
        <StatCard 
          title="Leads Críticos" 
          value={urgentLeads.length.toString()} 
          subtitle="Requer Atenção Imediata"
          icon={AlertTriangle} 
          color="text-copilot-alert"
          isAlert
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart: Sales vs Benchmark */}
        <div className="lg:col-span-2 bg-branco-card p-6 rounded-3xl border border-branco-border shadow-sm">
          <div className="flex justify-between items-center mb-6">
             <div>
               <h3 className="font-heading font-bold text-lg text-white">Performance de Vendas</h3>
               <p className="text-xs text-branco-muted">Comparativo Semestral</p>
             </div>
             <div className="flex gap-2">
               <span className="flex items-center gap-1 text-xs text-branco-muted"><div className="w-2 h-2 rounded-full bg-white"></div> Você</span>
               <span className="flex items-center gap-1 text-xs text-branco-muted"><div className="w-2 h-2 rounded-full bg-zinc-700"></div> Meta</span>
             </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={FINANCIAL_DATA}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', borderRadius: '8px', border: '1px solid #27272a', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#ffffff" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                <Area type="monotone" dataKey="expenses" stroke="#3f3f46" strokeWidth={2} strokeDasharray="5 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* BENCHMARK RADAR / BAR */}
        <div className="bg-branco-card p-6 rounded-3xl border border-branco-border shadow-sm flex flex-col">
           <h3 className="font-heading font-bold text-lg text-white mb-1">Benchmark de Mercado</h3>
           <p className="text-xs text-branco-muted mb-6">Comparação anônima com setor (Varejo Moda)</p>
           
           <div className="flex-1">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={BENCHMARK_DATA} layout="vertical" barSize={10} barGap={4}>
                 <XAxis type="number" hide />
                 <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 10, fill:'#a1a1aa'}} axisLine={false} tickLine={false} />
                 <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                 <Bar dataKey="you" name="Sua Loja" fill="#7c3aed" radius={[0, 4, 4, 0]} />
                 <Bar dataKey="market" name="Média Mercado" fill="#27272a" radius={[0, 4, 4, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </div>
           
           <div className="bg-copilot-dark/30 border border-copilot-primary/20 p-4 rounded-xl mt-4">
              <p className="text-xs text-copilot-glow font-bold mb-1 flex items-center gap-1"><Sparkles size={10}/> Insight do Copiloto</p>
              <p className="text-xs text-zinc-400">Sua taxa de conversão está 6% acima da média. Parabéns! Foco em manter o tempo de resposta baixo.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, subtitle, icon: Icon, color, isAlert, isBenchmark }: any) => (
  <div className={`p-6 rounded-3xl border transition-all relative overflow-hidden group ${isAlert ? 'bg-red-950/10 border-red-900/40 hover:border-red-500/50' : 'bg-branco-card border-branco-border hover:border-zinc-600'}`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${isAlert ? 'bg-red-900/20 border-red-900/50' : 'bg-zinc-900 border-zinc-800'}`}>
        <Icon size={20} className={color} />
      </div>
      {isBenchmark && <span className="text-[10px] font-bold bg-green-900/30 text-green-400 px-2 py-1 rounded border border-green-900/50">TOP 10%</span>}
    </div>
    <p className="text-zinc-500 text-xs uppercase tracking-wider font-bold mb-1">{title}</p>
    <h3 className={`text-3xl font-heading font-bold tracking-tight ${color}`}>{value}</h3>
    <p className="text-xs text-zinc-600 mt-2">{subtitle}</p>
    
    {isAlert && <div className="absolute inset-0 border-2 border-red-500/20 rounded-3xl animate-pulse pointer-events-none"></div>}
  </div>
);