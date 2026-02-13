import { Lead, InventoryItem, Product, Salesperson } from '../types';

export const PRODUCTS: Product[] = [
  { id: 'p1', name: "Camisa Linho Premium Branco", category: 'Camisaria', price: 289.90, sku: 'LIN-001', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=300&auto=format&fit=crop' },
  { id: 'p2', name: "Calça Alfaiataria Slim", category: 'Calças', price: 349.90, sku: 'ALF-002', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=300&auto=format&fit=crop' },
  { id: 'p3', name: "Blazer Casual Navy", category: 'Alfaiataria', price: 890.00, sku: 'BLZ-003', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=300&auto=format&fit=crop' },
  { id: 'p4', name: "Tênis Branco Couro", category: 'Calçados', price: 420.00, sku: 'SH-004', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=300&auto=format&fit=crop' },
  { id: 'p5', name: "Polo Piquet Preta", category: 'Polos', price: 159.90, sku: 'POL-005', image: 'https://images.unsplash.com/photo-1626557981101-aae6f84aa6ff?q=80&w=300&auto=format&fit=crop' },
];

export const STORES = ['Matriz', 'Shopping'] as const;

export const INVENTORY: InventoryItem[] = PRODUCTS.flatMap(p => 
  STORES.map(s => ({
    productId: p.id,
    store: s,
    quantity: Math.floor(Math.random() * 20),
    minStock: 5
  }))
);

export const TEAM: Salesperson[] = [
  { id: 's1', name: 'Ricardo', store: 'Matriz', leadsActive: 15, responseRate: 92, monthlySales: 45000, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', role: 'Gerente de Vendas' },
  { id: 's2', name: 'Amanda', store: 'Shopping', leadsActive: 28, responseRate: 78, monthlySales: 32000, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d', role: 'Vendedora' },
];

export const LEADS: Lead[] = [
  { 
    id: 'l1', name: 'Dr. Roberto', phone: '11999...', status: 'quente', interestScore: 95, 
    lastInteraction: new Date().toISOString(), nextFollowUp: new Date().toISOString(), 
    salespersonId: 's1', productInterest: 'Blazer Casual Navy', 
    aiSummary: 'Pediu fotos do Blazer. Sinalizou compra à vista. Aguardando link de pag.' 
  },
  { 
    id: 'l2', name: 'Marina Jorge', phone: '11988...', status: 'em_atendimento', interestScore: 60, 
    lastInteraction: new Date(Date.now() - 86400000 * 2).toISOString(), nextFollowUp: new Date().toISOString(), 
    salespersonId: 's2', productInterest: 'Vestido Linho', 
    aiSummary: 'Parou de responder após preço. Sugestão: Ofertar 5% desconto ou frete grátis.' 
  },
  { 
    id: 'l3', name: 'Carlos (Sem Cadastro)', phone: '11977...', status: 'shadow', interestScore: 80, 
    lastInteraction: new Date(Date.now() - 86400000).toISOString(), nextFollowUp: new Date().toISOString(), 
    salespersonId: 's1', productInterest: 'Camisa Linho', 
    aiSummary: 'SHADOW LEAD DETECTADO: Contato salvo no celular do Ricardo mas não registrado no sistema.' 
  },
  { 
    id: 'l4', name: 'Fernanda Lima', phone: '11966...', status: 'recuperado', interestScore: 75, 
    lastInteraction: new Date().toISOString(), nextFollowUp: new Date(Date.now() + 86400000).toISOString(), 
    salespersonId: 's2', productInterest: 'Calça Alfaiataria', 
    aiSummary: 'IA reaqueceu o contato automaticamente (D+14). Cliente respondeu interessada.' 
  },
];

export const FINANCIAL_DATA = [
  { name: 'Jan', revenue: 45000, expenses: 20000 },
  { name: 'Fev', revenue: 52000, expenses: 22000 },
  { name: 'Mar', revenue: 48000, expenses: 21000 },
  { name: 'Abr', revenue: 61000, expenses: 25000 },
  { name: 'Mai', revenue: 55000, expenses: 24000 },
  { name: 'Jun', revenue: 75000, expenses: 28000 },
];

export const BENCHMARK_DATA = [
  { name: 'Tempo Resp.', you: 15, market: 45 }, // minutes
  { name: 'Conversão', you: 18, market: 12 }, // %
  { name: 'LTV', you: 850, market: 600 }, // R$
];