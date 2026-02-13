import { Lead, InventoryItem, Product, Salesperson, StoreLocation } from '../types';

export const PRODUCTS: Product[] = [
  { id: 'p1', name: "Camisa Linho Premium Branco", category: 'Camisaria', price: 289.90, sku: 'LIN-001', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=300&auto=format&fit=crop' },
  { id: 'p2', name: "Calça Alfaiataria Slim", category: 'Calças', price: 349.90, sku: 'ALF-002', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=300&auto=format&fit=crop' },
  { id: 'p3', name: "Blazer Casual Navy", category: 'Alfaiataria', price: 890.00, sku: 'BLZ-003', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&auto=format&fit=crop' },
  { id: 'p4', name: "Tênis Branco Couro", category: 'Calçados', price: 420.00, sku: 'SH-004', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=300&auto=format&fit=crop' },
  { id: 'p5', name: "Polo Piquet Preta", category: 'Polos', price: 159.90, sku: 'POL-005', image: 'https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?q=80&w=300&auto=format&fit=crop' },
];

export const STORES: StoreLocation[] = ['Fernandópolis', 'Jales', 'Votuporanga', 'Rio Preto', 'Santa Fé do Sul'];

// Generate inventory for all stores
export const INVENTORY: InventoryItem[] = PRODUCTS.flatMap(p => 
  STORES.map(s => ({
    productId: p.id,
    store: s,
    quantity: Math.floor(Math.random() * 25),
    minStock: 5
  }))
);

export const TEAM: Salesperson[] = [
  { id: 's1', name: 'Ricardo', store: 'Fernandópolis', leadsActive: 15, responseRate: 92, monthlySales: 45000, avatar: 'https://i.pravatar.cc/150?u=s1', role: 'Gerente' },
  { id: 's2', name: 'Amanda', store: 'Rio Preto', leadsActive: 28, responseRate: 78, monthlySales: 32000, avatar: 'https://i.pravatar.cc/150?u=s2', role: 'Vendedora' },
  { id: 's3', name: 'Bruno', store: 'Votuporanga', leadsActive: 12, responseRate: 85, monthlySales: 28000, avatar: 'https://i.pravatar.cc/150?u=s3', role: 'Vendedor' },
  { id: 's4', name: 'Carla', store: 'Jales', leadsActive: 20, responseRate: 88, monthlySales: 35000, avatar: 'https://i.pravatar.cc/150?u=s4', role: 'Gerente' },
  { id: 's5', name: 'Daniel', store: 'Santa Fé do Sul', leadsActive: 10, responseRate: 95, monthlySales: 22000, avatar: 'https://i.pravatar.cc/150?u=s5', role: 'Vendedor' },
];

export const LEADS: Lead[] = [
  { 
    id: 'l1', name: 'Dr. Roberto', phone: '17 999...', status: 'quente', interestScore: 95, 
    lastInteraction: new Date().toISOString(), nextFollowUp: new Date().toISOString(), 
    salespersonId: 's1', productInterest: 'Blazer Casual Navy', store: 'Fernandópolis',
    aiSummary: 'Pediu fotos do Blazer. Sinalizou compra à vista. Aguardando link de pag.' 
  },
  { 
    id: 'l2', name: 'Marina Jorge', phone: '17 988...', status: 'em_atendimento', interestScore: 60, 
    lastInteraction: new Date(Date.now() - 86400000 * 2).toISOString(), nextFollowUp: new Date().toISOString(), 
    salespersonId: 's2', productInterest: 'Vestido Linho', store: 'Rio Preto',
    aiSummary: 'Parou de responder após preço. Sugestão: Ofertar 5% desconto ou frete grátis.' 
  },
  { 
    id: 'l3', name: 'Carlos (Sem Cadastro)', phone: '17 977...', status: 'shadow', interestScore: 80, 
    lastInteraction: new Date(Date.now() - 86400000).toISOString(), nextFollowUp: new Date().toISOString(), 
    salespersonId: 's1', productInterest: 'Camisa Linho', store: 'Fernandópolis',
    aiSummary: 'SHADOW LEAD: Contato salvo no celular do Ricardo mas não registrado no CRM.' 
  },
  { 
    id: 'l4', name: 'Fernanda Lima', phone: '17 966...', status: 'recuperado', interestScore: 75, 
    lastInteraction: new Date().toISOString(), nextFollowUp: new Date(Date.now() + 86400000).toISOString(), 
    salespersonId: 's3', productInterest: 'Calça Alfaiataria', store: 'Votuporanga',
    aiSummary: 'IA reaqueceu o contato automaticamente (D+14). Cliente respondeu interessada.' 
  },
  { 
    id: 'l5', name: 'Gustavo M.', phone: '17 955...', status: 'quente', interestScore: 90, 
    lastInteraction: new Date().toISOString(), nextFollowUp: new Date().toISOString(), 
    salespersonId: 's5', productInterest: 'Tênis Branco', store: 'Santa Fé do Sul',
    aiSummary: 'Perguntou se tem numeração 42 disponível na loja hoje.' 
  },
];

export const FINANCIAL_DATA = [
  { name: 'Jan', revenue: 145000, expenses: 80000 },
  { name: 'Fev', revenue: 152000, expenses: 82000 },
  { name: 'Mar', revenue: 148000, expenses: 81000 },
  { name: 'Abr', revenue: 161000, expenses: 85000 },
  { name: 'Mai', revenue: 175000, expenses: 88000 },
  { name: 'Jun', revenue: 195000, expenses: 90000 },
];

export const BENCHMARK_DATA = [
  { name: 'Tempo Resp.', you: 15, market: 45 }, // minutes
  { name: 'Conversão', you: 18, market: 12 }, // %
  { name: 'LTV', you: 850, market: 600 }, // R$
];
