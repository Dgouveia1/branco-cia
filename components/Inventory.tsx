import React, { useState } from 'react';
import { INVENTORY, PRODUCTS } from '../services/mockData';
import { Archive, AlertOctagon, Plus, Search, Filter, Sparkles, FileText, Link, MapPin } from 'lucide-react';
import { StoreLocation } from '../types';

interface InventoryProps {
  selectedStore: StoreLocation;
}

export const Inventory: React.FC<InventoryProps> = ({ selectedStore }) => {
  const [filter, setFilter] = useState('');

  const inventoryList = PRODUCTS.map(product => {
    // Filter inventory items based on selected store
    const itemsInStore = INVENTORY.filter(i => 
      i.productId === product.id && (selectedStore === 'Todas' || i.store === selectedStore)
    );
    
    // Sum quantities if "Todas" is selected, otherwise just take the single store quantity
    const totalQty = itemsInStore.reduce((acc, curr) => acc + curr.quantity, 0);
    // Use the lowest minStock or an arbitrary one for "Todas"
    const minStock = itemsInStore.length > 0 ? itemsInStore[0].minStock : 5;

    return { 
      product, 
      quantity: totalQty, 
      minStock: selectedStore === 'Todas' ? minStock * itemsInStore.length : minStock 
    };
  }).filter(item => item.product.name.toLowerCase().includes(filter.toLowerCase()));

  const lowStockCount = inventoryList.filter(i => i.quantity < i.minStock).length;

  return (
    <div className="space-y-6 relative">
      
      {/* Copilot Onboarding Action */}
      <div className="bg-copilot-dark/20 border border-copilot-primary/30 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-copilot-primary/20 rounded-xl flex items-center justify-center border border-copilot-primary/50 text-copilot-glow">
               <Sparkles size={24} />
            </div>
            <div>
               <h3 className="font-heading font-bold text-xl text-white">Onboarding de Estoque (IA)</h3>
               <p className="text-sm text-zinc-400 max-w-md">
                 Não cadastre manualmente. Envie um PDF de catálogo ou link do fornecedor e o Copiloto atualiza o sistema em segundos.
               </p>
            </div>
         </div>
         <div className="flex gap-3">
            <button className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all">
               <Link size={16} /> Link
            </button>
            <button className="bg-copilot-primary hover:bg-copilot-glow text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-lg shadow-copilot-primary/20">
               <FileText size={16} /> Enviar PDF
            </button>
         </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-4 gap-4">
        <div>
           <h2 className="text-xl font-heading font-bold text-white tracking-wide">Catálogo Branco & Cia</h2>
           {selectedStore !== 'Todas' && (
             <p className="text-xs text-branco-muted flex items-center gap-1 mt-1">
               <MapPin size={10} /> Exibindo estoque de {selectedStore}
             </p>
           )}
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
             <input 
               type="text" 
               placeholder="Buscar peça, sku..." 
               className="w-full pl-10 pr-4 py-2 rounded-xl bg-branco-card border border-branco-border text-white focus:outline-none focus:border-white transition-colors"
               onChange={(e) => setFilter(e.target.value)}
             />
          </div>
          <button className="bg-branco-card text-zinc-400 px-3 py-2 rounded-xl border border-branco-border hover:text-white">
             <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {inventoryList.map((item) => (
          <div key={item.product.id} className="bg-branco-card border border-branco-border rounded-2xl p-4 shadow-sm hover:border-zinc-700 transition-all flex items-center gap-4 group">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 relative">
              <img src={item.product.image} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest bg-zinc-900 text-zinc-500 border border-zinc-800`}>
                    {item.product.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight mt-1">{item.product.name}</h3>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">{item.product.sku}</p>
                </div>
                <div className="text-right">
                  <span className="block text-lg font-heading font-bold text-white tracking-wide">R$ {item.product.price.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="w-px h-10 bg-zinc-800 mx-2 hidden md:block"></div>

            <div className="w-32 text-right">
               <div>
                 <span className={`block text-xl font-bold ${item.quantity < item.minStock ? 'text-red-500' : 'text-white'}`}>
                   {item.quantity} <span className="text-xs font-normal text-zinc-500">un</span>
                 </span>
                 {item.quantity < item.minStock && <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider flex items-center justify-end gap-1"><AlertOctagon size={10}/> Baixo</span>}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
