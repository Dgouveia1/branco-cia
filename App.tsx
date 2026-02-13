import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { CopilotCRM } from './components/CopilotCRM';
import { Inventory } from './components/Inventory';
import { Team } from './components/Team';
import { Finance } from './components/Finance';
import { Settings } from './components/Settings';
import { ViewState, StoreLocation } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');
  const [selectedStore, setSelectedStore] = useState<StoreLocation>('Todas');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard selectedStore={selectedStore} />;
      case 'copilot_crm':
        return <CopilotCRM />;
      case 'inventory':
        return <Inventory selectedStore={selectedStore} />;
      case 'team':
        return <Team selectedStore={selectedStore} />;
      case 'finance':
        return <Finance />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard selectedStore={selectedStore} />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      onNavigate={setCurrentView}
      selectedStore={selectedStore}
      onStoreChange={setSelectedStore}
    >
      {renderView()}
    </Layout>
  );
}

export default App;
