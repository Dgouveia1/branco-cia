import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { CopilotCRM } from './components/CopilotCRM';
import { Inventory } from './components/Inventory';
import { Team } from './components/Team';
import { Finance } from './components/Finance';
import { Settings } from './components/Settings';
import { ViewState } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'copilot_crm':
        return <CopilotCRM />;
      case 'inventory':
        return <Inventory />;
      case 'team':
        return <Team />;
      case 'finance':
        return <Finance />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

export default App;
