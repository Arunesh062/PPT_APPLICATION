import React from 'react';
import { Search, Bell, User, Menu, Cpu, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ activeTabLabel }) => {
  return (
    <header className="sticky top-0 z-30 flex h-24 w-full items-center justify-between px-10 glass-header">
      {/* Background Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-30" />
      
      <div className="flex items-center gap-6">
        <div className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10">
          <Menu className="text-slate-300" size={20} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">Module</span>
            <div className="h-1 w-1 rounded-full bg-emerald-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Nexus-01</span>
          </div>
          <h2 className="text-2xl font-black text-white tracking-tighter uppercase drop-shadow-md">
            {activeTabLabel}
          </h2>
        </div>
      </div>

      <div className="flex items-center gap-8">
        {/* Technical Search */}
        <div className="relative hidden xl:block group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-emerald-400 transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="SCAN DATASETS..." 
            className="h-12 w-80 rounded-2xl border border-white/10 bg-white/5 pl-12 pr-4 text-[10px] font-black tracking-[0.2em] text-slate-300 outline-none focus:border-emerald-500/50 focus:bg-white/10 focus:ring-4 focus:ring-emerald-500/5 transition-all uppercase"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
             <div className="h-1 w-1 rounded-full bg-emerald-500/30 group-hover:bg-emerald-500 transition-colors" />
             <div className="h-1 w-1 rounded-full bg-emerald-500/30 group-hover:bg-emerald-500 transition-colors delay-75" />
          </div>
        </div>

        <div className="flex items-center gap-4 border-l border-white/10 pl-8">
          {/* Status Indicators */}
          <div className="hidden lg:flex items-center gap-4 mr-4">
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Uplink</span>
              <div className="flex items-center gap-1 text-emerald-400">
                <Wifi size={10} strokeWidth={3} />
                <span className="text-[10px] font-black">STABLE</span>
              </div>
            </div>
            <div className="h-8 w-px bg-white/5" />
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Latency</span>
              <div className="flex items-center gap-1 text-emerald-400">
                <Cpu size={10} strokeWidth={3} />
                <span className="text-[10px] font-black">4ms</span>
              </div>
            </div>
          </div>

          <button className="relative rounded-2xl p-3 text-slate-400 hover:text-white bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/5 translate-y-full group-hover:translate-y-0 transition-transform" />
            <Bell size={20} className="relative z-10" />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-slate-950 animate-pulse"></span>
          </button>
          
          <div className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-1.5 pr-5 pl-1.5 hover:bg-white/10 transition-all cursor-pointer group active:scale-95">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 border border-emerald-400/30 overflow-hidden relative">
              <User size={22} className="relative z-10" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </div>
            <div className="hidden sm:block">
              <p className="text-[11px] font-black text-white tracking-tight leading-none uppercase">A. Arunesh</p>
              <p className="text-[9px] font-black text-emerald-500/70 tracking-widest mt-1.5 uppercase">Security Clearance 5</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
