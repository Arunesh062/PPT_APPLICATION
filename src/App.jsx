import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';

// Page Imports
import Dashboard from './pages/Dashboard';
import Abstract from './pages/Abstract';
import Introduction from './pages/Introduction';
import Objective from './pages/Objective';
import Architecture from './pages/Architecture';
import Dataset from './pages/Dataset';
import Results from './pages/Results';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'abstract': return <Abstract />;
      case 'introduction': return <Introduction />;
      case 'objective': return <Objective />;
      case 'architecture': return <Architecture />;
      case 'dataset': return <Dataset />;
      case 'results': return <Results />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 overflow-x-hidden p-8 md:p-12 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
