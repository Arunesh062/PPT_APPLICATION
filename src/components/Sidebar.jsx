import React, { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Target,
  Layers,
  Database,
  BarChart3,
  Smartphone,
  Award,
  FolderOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Leaf,
  Settings,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'abstract', label: 'Abstract', icon: FileText },
  { id: 'introduction', label: 'Introduction', icon: BookOpen },
  { id: 'objective', label: 'Objectives', icon: Target },
  { id: 'architecture', label: 'Architecture', icon: Layers },
  { id: 'dataset', label: 'Dataset', icon: Database },
  { id: 'results', label: 'Results', icon: BarChart3 },
  { id: 'conclusion', label: 'Conclusion', icon: Award },
  { id: 'projectphases', label: "Project Phase's", icon: FolderOpen },
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`${
        collapsed ? 'w-20' : 'w-72'
      } hidden md:flex flex-col h-screen sticky top-0 transition-all duration-500 ease-out z-40 glass-sidebar relative overflow-hidden`}
    >
      {/* Decorative Blur Bloom */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none" />
      
      {/* ── Logo ── */}
      <div className="relative p-7 pb-6">
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 shrink-0 border border-emerald-400/30"
          >
            <Leaf size={22} className="text-white drop-shadow-md" />
          </motion.div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="overflow-hidden"
              >
                <h1 className="text-xl font-black text-white tracking-tighter leading-none">
                  Papaya <span className="text-emerald-400 text-glow">AI</span>
                </h1>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black">
                    CORE v4.2
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.03)' }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center ${
                collapsed ? 'justify-center px-0' : 'px-4'
              } py-3.5 rounded-2xl transition-all duration-300 relative group overflow-hidden ${
                isActive
                  ? 'text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {/* Active Glitch/Glow background */}
              {isActive && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20"
                />
              )}
              
              <div className="relative z-10 flex items-center gap-3.5">
                <Icon
                  size={20}
                  className={`shrink-0 transition-all duration-500 ${
                    isActive
                      ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] scale-110'
                      : 'text-slate-500 group-hover:text-slate-300'
                  }`}
                />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      className={`text-sm tracking-wide whitespace-nowrap ${
                        isActive ? 'font-black' : 'font-semibold'
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          );
        })}
      </nav>

      {/* ── Footer ── */}
      <div className="p-6 mt-auto">
        <div className="space-y-4">
          {!collapsed && (
             <div className="grid grid-cols-2 gap-2 mb-4">
                <button className="flex items-center justify-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                  <Settings size={14} />
                  <span className="text-[10px] font-black uppercase">Setup</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-slate-400 hover:text-white">
                  <HelpCircle size={14} />
                  <span className="text-[10px] font-black uppercase">Docs</span>
                </button>
             </div>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-slate-500 hover:text-emerald-400 bg-white/5 hover:bg-emerald-500/5 border border-white/5 hover:border-emerald-500/20 transition-all duration-300"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            {!collapsed && <span className="text-[10px] font-black uppercase tracking-widest">Collapse Nexus</span>}
          </button>

          <div
            className={`flex items-center ${
              collapsed ? 'justify-center' : 'gap-3'
            } p-3.5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 shadow-2xl`}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 flex items-center justify-center shrink-0 border border-emerald-400/20 shadow-lg shadow-emerald-500/10">
              <Sparkles size={18} className="text-emerald-400 animate-pulse" />
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-xs font-black text-white truncate tracking-tight">System Admin</p>
                <p className="text-[10px] text-emerald-500/70 font-black uppercase tracking-tighter">Diagnostic Node 01</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
