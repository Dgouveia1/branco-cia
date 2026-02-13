import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FINANCIAL_DATA } from '../services/mockData';
import { TrendingUp, TrendingDown, Wallet, Download } from 'lucide-react';

export const Finance: React.FC = () => {
  // Calculate totals
  const totalRevenue = FINANCIAL_DATA.reduce((acc, d) => acc + d.revenue, 0);
  const totalExpenses = FINANCIAL_DATA.reduce((acc, d) => acc + d.expenses, 0);
  const netProfit = totalRevenue - totalExpenses;
  const margin = ((netProfit / totalRevenue) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-normal text-white tracking-wide">Financeiro</h2>
          <p className="text-zinc-500 text-sm">Resultados da Loja.</p>
        </div>
        <button className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white border border-zinc-800 px-4 py-2 rounded-xl hover:bg-zinc-800 transition-colors">
          <Download size={16} /> Relatório
        </button>
      </div>

      {/* Main KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-maresias-card text-white p-6 rounded-3xl shadow-lg border border-maresias-border relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-maresias-blue blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 opacity-80">
                <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800"><Wallet size={18} /></div>
                <span className="text-sm font-bold tracking-widest uppercase text-zinc-400">Lucro Líquido</span>
              </div>
              <div className="text-4xl font-heading font-normal mb-2 tracking-wide">R$ {(netProfit / 1000).toFixed(1)}k</div>
              <div className="flex items-center gap-2 text-green-500 text-sm font-bold">
                <TrendingUp size={16} /> +14.2% vs mês anterior
              </div>
          </div>
        </div>

        <div className="bg-maresias-card border border-maresias-border p-6 rounded-3xl">
          <div className="flex items-center gap-3 mb-4 text-zinc-500">
            <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800"><TrendingUp size={18} /></div>
            <span className="text-sm font-bold tracking-widest uppercase">Receita Bruta</span>
          </div>
          <div className="text-4xl font-heading font-normal mb-2 text-white tracking-wide">R$ {(totalRevenue / 1000).toFixed(1)}k</div>
          <div className="text-zinc-500 text-sm">Semestre Atual</div>
        </div>

        <div className="bg-maresias-card border border-maresias-border p-6 rounded-3xl">
          <div className="flex items-center gap-3 mb-4 text-zinc-500">
            <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800"><TrendingDown size={18} /></div>
            <span className="text-sm font-bold tracking-widest uppercase">Despesas</span>
          </div>
          <div className="text-4xl font-heading font-normal mb-2 text-white tracking-wide">R$ {(totalExpenses / 1000).toFixed(1)}k</div>
          <div className="text-maresias-blue text-sm font-bold">Margem: {margin}%</div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-maresias-card p-6 rounded-3xl border border-maresias-border shadow-sm">
          <h3 className="font-heading font-normal text-lg mb-6 text-white tracking-wide">Receita vs Despesa</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={FINANCIAL_DATA} barGap={0}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                <Tooltip 
                   cursor={{fill: '#27272a'}}
                   contentStyle={{ backgroundColor: '#09090b', borderRadius: '12px', border: '1px solid #27272a' }}
                   itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="revenue" name="Receita" fill="#2563eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" name="Despesas" fill="#3f3f46" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-maresias-card p-6 rounded-3xl border border-maresias-border shadow-sm">
          <h3 className="font-heading font-normal text-lg mb-6 text-white tracking-wide">Crescimento do Lucro</h3>
          <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <LineChart data={FINANCIAL_DATA.map(d => ({...d, profit: d.revenue - d.expenses}))}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#71717a', fontSize: 12}} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#09090b', borderRadius: '12px', border: '1px solid #27272a' }}
                   itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="profit" stroke="#2563eb" strokeWidth={3} dot={{r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
