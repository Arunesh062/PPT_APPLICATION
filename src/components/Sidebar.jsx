import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Info, 
  Target, 
  Layers, 
  Database, 
  BarChart3, 
  Smartphone, 
  CheckCircle 
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'abstract', label: 'Abstract', icon: FileText },
  { id: 'introduction', label: 'Introduction', icon: Info },
  { id: 'objective', label: 'Objective', icon: Target },
  { id: 'architecture', label: 'Architecture', icon: Layers },
  { id: 'dataset', label: 'Dataset', icon: Database },
  { id: 'results', label: 'Results', icon: BarChart3 },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-slate-900 text-slate-200 flex-shrink-0 hidden md:flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white leading-tight">
          Papaya Disease <span className="text-emerald-400">Detection</span>
        </h1>
        <p className="text-xs text-slate-400 mt-2 tracking-wider uppercase font-semibold">ConvNeXt + LLM</p>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto mt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-emerald-500/10 text-emerald-400 font-medium' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={20} className={isActive ? 'text-emerald-400' : 'text-slate-400'} />
              <span className={isActive ? 'font-bold' : 'font-medium'}>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
            P
          </div>
          <div>
            <p className="text-sm font-medium text-white">Project Demo</p>
            <p className="text-xs text-slate-500">Static Version</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
