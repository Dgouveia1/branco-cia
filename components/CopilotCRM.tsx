import React from 'react';
import { LEADS } from '../services/mockData';
import { Bot, MessageCircle, Clock, CheckCircle2, AlertOctagon, UserX, ChevronRight } from 'lucide-react';

export const CopilotCRM: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
           <div className="flex items-center gap-2 text-copilot-glow mb-2">
             <Bot size={20} />
             <span className="text-xs font-bold uppercase tracking-widest">Auditoria em Tempo Real</span>
           </div>
           <h2 className="text-3xl font-heading font-bold text-white">Gestão de Oportunidades</h2>
           <p className="text-zinc-500 text-sm">O Copiloto analisa todas as conversas e prioriza quem você deve cobrar.</p>
        </div>
        
        <div className="flex gap-2">
           <div className="bg-copilot-dark border border-copilot-glow/30 px-4 py-2 rounded-xl flex flex-col items-center">
              <span className="text-xs text-copilot-glow font-bold uppercase">Leads Quentes</span>
              <span className="text-xl font-heading font-bold text-white">04</span>
           </div>
           <div className="bg-red-950/20 border border-red-900/30 px-4 py-2 rounded-xl flex flex-col items-center">
              <span className="text-xs text-red-500 font-bold uppercase">Sem Resposta</span>
              <span className="text-xl font-heading font-bold text-white">02</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {LEADS.map((lead) => (
          <div key={lead.id} className="bg-branco-card border border-branco-border p-5 rounded-2xl hover:border-zinc-600 transition-all group relative overflow-hidden">
            {/* Status Indicator Bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${
               lead.status === 'quente' ? 'bg-copilot-glow' : 
               lead.status === 'shadow' ? 'bg-red-500' : 
               lead.status === 'recuperado' ? 'bg-green-500' : 'bg-zinc-700'
            }`}></div>

            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center pl-4">
               
               {/* User Info */}
               <div className="min-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                     <h3 className="font-bold text-lg text-white">{lead.name}</h3>
                     {lead.status === 'shadow' && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                           <UserX size={10} /> SHADOW LEAD
                        </span>
                     )}
                     {lead.status === 'quente' && (
                        <span className="bg-copilot-primary text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                           <Bot size={10} /> Alta Intenção
                        </span>
                     )}
                  </div>
                  <p className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                     <MessageCircle size={12} /> {lead.phone}
                  </p>
               </div>

               {/* AI Insight Box */}
               <div className="flex-1 bg-black/40 border border-zinc-800 rounded-xl p-3 relative">
                  <div className="absolute -top-2 left-3 bg-zinc-900 text-[10px] text-zinc-400 px-2 rounded border border-zinc-800 flex items-center gap-1">
                     <Bot size={10} /> Análise do Copiloto
                  </div>
                  <p className="text-sm text-zinc-300 mt-1 leading-snug">
                     "{lead.aiSummary}"
                  </p>
                  <div className="flex gap-2 mt-2">
                     <span className="text-[10px] text-zinc-500 bg-zinc-900 px-2 py-1 rounded">Interesse: {lead.productInterest}</span>
                     <span className="text-[10px] text-zinc-500 bg-zinc-900 px-2 py-1 rounded">Score: {lead.interestScore}/100</span>
                  </div>
               </div>

               {/* Action */}
               <div className="flex flex-col items-end gap-2 min-w-[120px]">
                  <div className="text-right">
                     <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Última Interação</p>
                     <p className="text-xs font-bold text-white flex items-center gap-1 justify-end">
                        <Clock size={12} /> {new Date(lead.lastInteraction).toLocaleDateString()}
                     </p>
                  </div>
                  <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-zinc-200 flex items-center gap-2 w-full justify-center">
                     Ver Conversa <ChevronRight size={14} />
                  </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
