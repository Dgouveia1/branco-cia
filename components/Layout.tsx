import React from 'react';
import { 
  LayoutGrid, 
  Users, 
  Package, 
  LogOut, 
  Search,
  Bell,
  PieChart,
  Settings,
  Bot,
  Sparkles,
  MapPin
} from 'lucide-react';
import { ViewState, StoreLocation } from '../types';
import { STORES } from '../services/mockData';

interface LayoutProps {
  currentView: ViewState;
  selectedStore: StoreLocation;
  onStoreChange: (store: StoreLocation) => void;
  onNavigate: (view: ViewState) => void;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ currentView, selectedStore, onStoreChange, onNavigate, children }) => {
  
  const NavItem = ({ view, icon: Icon, label, isAi = false }: { view: ViewState; icon: any; label: string, isAi?: boolean }) => (
    <button
      onClick={() => onNavigate(view)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${
        currentView === view 
          ? isAi ? 'bg-copilot-dark text-white border border-copilot-glow/50 shadow-[0_0_15px_rgba(124,58,237,0.3)]' : 'bg-branco-text text-black' 
          : 'text-branco-muted hover:bg-branco-card hover:text-white'
      }`}
    >
      <Icon size={20} className={currentView === view ? (isAi ? 'text-copilot-glow' : 'text-black') : (isAi ? 'text-copilot-primary' : 'group-hover:text-white')} />
      <span className="font-heading font-medium tracking-wide text-sm relative z-10">{label}</span>
      {isAi && currentView !== view && (
         <div className="absolute right-2 w-2 h-2 rounded-full bg-copilot-primary animate-pulse"></div>
      )}
    </button>
  );

  return (
    <div className="flex min-h-screen bg-branco-base font-sans">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-branco-base border-r border-branco-border z-50 hidden md:flex flex-col text-white">
        <div className="p-8">
          <div className="flex flex-col items-center gap-4 mb-10 text-center">
            {/* Logo Text Only for Branco & Cia */}
            <div className="relative mb-2">
               <h1 className="font-heading font-bold text-3xl tracking-tighter leading-none text-white">
                 Branco<span className="text-branco-muted">&</span>Cia
               </h1>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-copilot-dark/50 border border-copilot-primary/30">
               <Sparkles size={12} className="text-copilot-glow" />
               <p className="text-[10px] uppercase tracking-widest text-copilot-glow font-bold">Copiloto Ativo</p>
            </div>
          </div>

          <nav className="space-y-1">
            <NavItem view="dashboard" icon={LayoutGrid} label="Visão Geral" />
            <NavItem view="copilot_crm" icon={Bot} label="Copiloto CRM" isAi={true} />
            <NavItem view="team" icon={Users} label="Equipe & Vendas" />
            <NavItem view="inventory" icon={Package} label="Estoque" />
            <NavItem view="finance" icon={PieChart} label="Financeiro" />
            <div className="pt-4 mt-4 border-t border-branco-border">
              <NavItem view="settings" icon={Settings} label="Configurações" />
            </div>
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-branco-border">
          <button className="flex items-center gap-3 text-branco-muted hover:text-red-500 transition-colors text-sm font-medium">
            <LogOut size={18} />
            <span>Encerrar Sessão</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen bg-branco-base text-white">
        {/* Header */}
        <header className="sticky top-0 z-40 glass px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-branco-border/50">
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
             <span className="md:hidden font-heading font-bold text-xl text-white tracking-tighter">Branco&Cia</span>
             
             {/* Store Selector */}
             <div className="relative group">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-copilot-glow pointer-events-none" size={16} />
                <select 
                  value={selectedStore}
                  onChange={(e) => onStoreChange(e.target.value as StoreLocation)}
                  className="pl-10 pr-8 py-2 rounded-xl bg-branco-card border border-branco-border text-sm font-medium text-white appearance-none cursor-pointer hover:border-copilot-primary/50 focus:outline-none focus:border-copilot-primary transition-all w-[180px] md:w-[220px]"
                >
                  <option value="Todas">Todas as Lojas</option>
                  {STORES.map(store => (
                    <option key={store} value={store}>{store}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-white opacity-50"></div>
             </div>
          </div>

          <div className="hidden md:block">
            <h2 className="font-heading font-bold text-xl text-white tracking-wide capitalize flex items-center gap-2">
              {currentView === 'copilot_crm' && <Bot className="text-copilot-glow" />}
              {
                currentView === 'dashboard' ? 'Painel de Controle' : 
                currentView === 'copilot_crm' ? 'Auditoria & Leads' : 
                currentView === 'inventory' ? 'Gestão de Produto' : 
                currentView === 'finance' ? 'Resultados' :
                currentView === 'settings' ? 'Sistema' : 'Performance da Equipe'
              }
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-branco-muted" size={16} />
              <input 
                type="text" 
                placeholder="Pergunte ao Copiloto..." 
                className="pl-10 pr-4 py-2 rounded-full bg-branco-card border border-branco-border text-sm w-64 focus:ring-1 focus:ring-copilot-primary focus:border-copilot-primary outline-none transition-all placeholder-branco-muted text-white"
              />
            </div>
            <button className="relative p-2 rounded-full hover:bg-branco-card transition-colors text-branco-muted hover:text-white">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-copilot-alert rounded-full animate-pulse"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-branco-card text-white flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-branco-border border border-branco-border">
              ADM
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8 max-w-7xl mx-auto animate-[fadeIn_0.4s_ease-out]">
          {children}
        </div>
      </main>
    </div>
  );
};
