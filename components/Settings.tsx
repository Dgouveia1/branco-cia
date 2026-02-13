import React from 'react';
import { Store, Shield, BellRing, User } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-heading font-normal text-white tracking-wide">Configurações da Loja</h2>
        <p className="text-zinc-500 text-sm">Dados da unidade Fernandópolis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Store Profile */}
        <div className="space-y-6">
           <div className="bg-maresias-card border border-maresias-border rounded-3xl overflow-hidden p-6">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-maresias-blue border border-zinc-800">
                 <Store size={32} />
               </div>
               <div>
                 <h3 className="font-bold text-xl text-white">Maresias Fernandópolis</h3>
                 <p className="text-sm text-zinc-500">Rua Principal, 123 - Centro</p>
               </div>
             </div>
             
             <div className="space-y-4">
               <div>
                 <label className="block text-xs font-bold text-zinc-500 uppercase mb-1">Nome da Unidade</label>
                 <input type="text" defaultValue="Maresias Store - FPA" className="w-full p-3 rounded-xl bg-black border border-zinc-800 text-sm font-medium text-white focus:border-maresias-blue focus:outline-none" />
               </div>
               <div>
                 <label className="block text-xs font-bold text-zinc-500 uppercase mb-1">WhatsApp da Loja</label>
                 <input type="text" defaultValue="(17) 99999-9999" className="w-full p-3 rounded-xl bg-black border border-zinc-800 text-sm font-medium text-white focus:border-maresias-blue focus:outline-none" />
               </div>
               <button className="w-full bg-maresias-blue text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">Salvar Alterações</button>
             </div>
           </div>
        </div>

        {/* System Settings */}
        <div className="space-y-6">
           <div className="bg-maresias-card border border-maresias-border rounded-3xl overflow-hidden">
             <div className="p-6 border-b border-zinc-800">
               <h3 className="font-bold text-lg flex items-center gap-2 text-white">
                 <Shield size={20} className="text-zinc-500" /> Meu Perfil
               </h3>
             </div>
             <div className="p-6 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold border border-zinc-800"><User size={20}/></div>
                    <div>
                      <p className="font-bold text-sm text-white">Lucas Silva</p>
                      <p className="text-xs text-zinc-500">Gerente</p>
                    </div>
                 </div>
                 <button className="text-xs font-bold border border-zinc-700 text-zinc-400 px-3 py-1 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors">Editar</button>
             </div>
           </div>

           <div className="bg-maresias-card border border-maresias-border rounded-3xl overflow-hidden">
             <div className="p-6 border-b border-zinc-800">
               <h3 className="font-bold text-lg flex items-center gap-2 text-white">
                 <BellRing size={20} className="text-zinc-500" /> Notificações
               </h3>
             </div>
             <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                   <span className="text-sm font-medium text-zinc-400">Venda Realizada (Push)</span>
                   <div className="w-10 h-6 bg-maresias-blue rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                </div>
                <div className="flex items-center justify-between">
                   <span className="text-sm font-medium text-zinc-400">Estoque Crítico</span>
                   <div className="w-10 h-6 bg-maresias-blue rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                </div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
};
