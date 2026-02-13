export type StoreLocation = 'Todas' | 'Fernandópolis' | 'Jales' | 'Votuporanga' | 'Rio Preto' | 'Santa Fé do Sul';

export type LeadStatus = 'novo' | 'em_atendimento' | 'quente' | 'recuperado' | 'shadow';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  sku: string;
}

export interface InventoryItem {
  productId: string;
  store: StoreLocation;
  quantity: number;
  minStock: number;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  status: LeadStatus;
  lastInteraction: string; // ISO date
  nextFollowUp: string; // ISO date
  interestScore: number; // 0-100
  productInterest?: string;
  salespersonId: string;
  aiSummary?: string; // Briefing from Copilot
  store: StoreLocation;
}

export interface Salesperson {
  id: string;
  name: string;
  store: StoreLocation;
  avatar: string;
  monthlySales: number;
  leadsActive: number;
  responseRate: number; // Percentage
  role: string;
}

export type ViewState = 'dashboard' | 'copilot_crm' | 'inventory' | 'team' | 'finance' | 'settings';
