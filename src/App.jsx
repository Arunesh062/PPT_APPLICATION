import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Page Imports
import Dashboard from './pages/Dashboard';
import Abstract from './pages/Abstract';
import Introduction from './pages/Introduction';
import Objective from './pages/Objective';
import Architecture from './pages/Architecture';
import Dataset from './pages/Dataset';
import Results from './pages/Results';
import Application from './pages/Application';
import Conclusion from './pages/Conclusion';

const navItems = {
  dashboard: { label: 'Dashboard', component: <Dashboard /> },
  abstract: { label: 'Abstract', component: <Abstract /> },
  introduction: { label: 'Introduction', component: <Introduction /> },
  objective: { label: 'Objectives', component: <Objective /> },
  architecture: { label: 'Architecture', component: <Architecture /> },
  dataset: { label: 'Dataset', component: <Dataset /> },
  results: { label: 'Results', component: <Results /> },
  application: { label: 'Application', component: <Application /> },
  conclusion: { label: 'Conclusion', component: <Conclusion /> },
};

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="relative min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200 overflow-hidden">
      {/* ── Background Elements ── */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="grain" />
      
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Main Viewport */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header activeTabLabel={navItems[activeTab].label} />
          
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-10 scroll-smooth custom-scrollbar">
            <div className="mx-auto max-w-7xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.98, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.02, filter: 'blur(20px)' }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  <div className="relative z-10">
                    {navItems[activeTab].component}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Bottom Gradient Fade */}
            <div className="pointer-events-none fixed bottom-0 left-0 h-32 w-full bg-gradient-to-t from-slate-950/80 to-transparent z-0" />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
