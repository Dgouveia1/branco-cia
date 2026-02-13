import React from 'react';
import { TEAM } from '../services/mockData';
import { Crown, Star, ShoppingBag, Clock } from 'lucide-react';

export const Team: React.FC = () => {
  const me = TEAM[0]; // Single user

  return (
    <div className="space-y-8">
      
      <div className="bg-maresias-card text-white rounded-3xl p-8 shadow-xl border border-maresias-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-maresias-blue rounded-full blur-[100px] opacity-20"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-4 border-zinc-800 p-1 bg-black">
               <img src={me.avatar} className="w-full h-full rounded-full object-cover" alt="" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-maresias-blue text-white p-2 rounded-full border-4 border-black">
               <Crown size={20} fill="white" />
            </div>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl font-heading font-normal tracking-wide">{me.name}</h2>
            <p className="text-zinc-400 text-lg">{me.role}</p>
            <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
               <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">Vendas Mês</p>
                  <p className="text-2xl font-bold text-white">R$ {(me.monthlySales/1000).toFixed(1)}k</p>
               </div>
               <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wider text-zinc-500">Meta</p>
                  <div className="flex items-center gap-1 text-2xl font-bold text-green-500">
                    85%
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-maresias-card border border-maresias-border rounded-3xl p-6">
           <h3 className="font-heading font-normal tracking-wide text-lg mb-4 flex items-center gap-2 text-white">
             <ShoppingBag className="text-maresias-blue" /> Vendas Recentes
           </h3>
           <div className="space-y-4">
             {[1,2,3,4].map(i => (
               <div key={i} className="flex items-center justify-between p-3 border-b border-zinc-800 last:border-0 hover:bg-zinc-900 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                       <ShoppingBag size={18} className="text-zinc-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">Venda #{4920+i}</h4>
                      <p className="text-xs text-zinc-500">3 Itens • Cliente Balcão</p>
                    </div>
                  </div>
                  <div className="text-right">
                     <span className="block font-bold text-maresias-blue">+ R$ 149,90</span>
                     <span className="text-[10px] text-zinc-600">14:3{i}</span>
                  </div>
               </div>
             ))}
           </div>
        </div>

        <div className="bg-maresias-card border border-maresias-border rounded-3xl p-6">
           <h3 className="font-heading font-normal tracking-wide text-lg mb-4 flex items-center gap-2 text-white">
             <Clock className="text-maresias-blue" /> Itens Mais Vendidos (Hoje)
           </h3>
           <div className="space-y-4">
             {['Camiseta Maresias Basic', 'Boné Trucker', 'Pomada Matte'].map((item, i) => (
               <div key={i} className="flex items-center justify-between p-3 border-b border-zinc-800 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-heading text-zinc-600 w-6">0{i+1}</div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{item}</h4>
                      <p className="text-xs text-zinc-500">Estoque: {10-i} un</p>
                    </div>
                  </div>
                  <span className="font-bold text-white">{4-i} un</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};
