import React from 'react';
import Card from '../components/Card';
import { Sprout, ShieldAlert, AlertTriangle, ChevronRight, Globe, Zap, Leaf, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
           <Info size={18} className="text-emerald-500" />
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Operational Context // Global Tier</span>
        </div>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Project <span className="text-emerald-500 text-glow">Origins</span>
        </h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Defining the ecological and economic parameters of the diagnostic mission.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Context Card */}
        <Card 
          className="lg:col-span-2 border-none p-2 bg-transparent"
          hoverEffect={false}
          glass={false}
        >
          <div className="glass-card rounded-[3rem] p-10 lg:p-14 border border-white/10 relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/5 blur-[100px] pointer-events-none group-hover:scale-125 transition-transform duration-1000" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-2xl shadow-emerald-500/20 border border-emerald-400/30">
                <Sprout size={28} />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">The Economic Backbone</h3>
            </div>
            
            <div className="space-y-8 relative z-10">
              <p className="text-2xl text-slate-300 leading-relaxed font-black tracking-tight uppercase">
                Papaya (Carica papaya) represents more than a nutritional asset; it is a <span className="text-white border-b-2 border-emerald-500/30">multi-billion dollar pillar</span> of tropical agriculture.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 shadow-inner group/item hover:bg-white/[0.04] transition-all">
                  <Globe className="text-blue-500 mb-4 group-hover/item:scale-110 transition-transform" size={24} />
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Market Impact</p>
                  <p className="text-sm font-black text-white tracking-widest uppercase">Global Export Dominance</p>
                </div>
                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 shadow-inner group/item hover:bg-white/[0.04] transition-all">
                  <Zap className="text-amber-500 mb-4 group-hover/item:scale-110 transition-transform" size={24} />
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Industrial Yield</p>
                  <p className="text-sm font-black text-white tracking-widest uppercase">Papain Extraction Catalyst</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tactical Threat Analysis */}
        <div className="space-y-8">
          <Card 
            title="Operational Threats" 
            subtitle="Pathogen Vulnerability Vector"
            icon={ShieldAlert}
            className="border-none bg-red-500/[0.02] border-red-500/20"
          >
            <div className="space-y-6 mt-2">
              <p className="text-xs text-slate-400 font-bold leading-relaxed uppercase tracking-widest">
                Papaya cultivation is plagued by viral and fungal strains that spread with near-total lethality, threatening entire regional yields within weeks.
              </p>
              
              <div className="space-y-3">
                {[
                  'Inconsistent Field Diagnosis',
                  'Expert Scarcity in Rural Hubs',
                  'High Reaction Latency'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-red-500/30 transition-all">
                    <AlertTriangle size={16} className="text-red-500 animate-pulse" />
                    <span className="text-[10px] font-black text-red-200/50 uppercase tracking-widest group-hover:text-red-400 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="border-none bg-slate-950 text-white group overflow-hidden relative" hoverEffect={true}>
             <div className="absolute -top-10 -right-10 p-6 opacity-[0.03] group-hover:scale-150 transition-transform duration-1000 rotate-12">
               <Leaf size={160} strokeWidth={1} />
             </div>
             <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-4 relative z-10">Project Imperative</p>
             <h4 className="text-xl font-black leading-snug tracking-tight uppercase italic relative z-10">
               "We provide the neural eyes to secure the global harvest."
             </h4>
             <div className="mt-6 flex items-center gap-2 relative z-10">
                <div className="h-[2px] w-8 bg-emerald-500" />
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Diagnostic Node 01 Initialized</span>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
