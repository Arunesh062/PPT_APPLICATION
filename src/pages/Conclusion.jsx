import React from 'react';
import Card from '../components/Card';
import { Award, Globe, Leaf, CheckCircle2, ChevronRight, Sparkles, TrendingUp, ShieldCheck, Zap, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Conclusion = () => {
  return (
    <div className="space-y-16 py-6 pb-20">
      {/* ── High Impact Sign-off ── */}
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl glass-card text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em] border border-emerald-500/20 shadow-xl shadow-emerald-500/10"
        >
          <Award size={18} />
          Mission Complete // Summary
        </motion.div>
        
        <h1 className="text-6xl font-black text-white tracking-tighter sm:text-8xl uppercase italic">
          Neural <span className="text-emerald-500 text-glow">Frontier</span>
        </h1>
        
        <p className="text-xl text-slate-400 font-bold uppercase tracking-widest leading-relaxed max-w-3xl mx-auto">
          The convergence of deep neural classification and LLM reasoning has redefined the parameters of global crop security.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Achievements Card */}
        <Card 
          className="lg:col-span-2 border-none shadow-[0_50px_100px_rgba(0,0,0,0.8)] bg-slate-950 overflow-hidden relative group p-2"
          hoverEffect={false}
          glass={false}
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:rotate-45 group-hover:scale-150 transition-all duration-1000">
            <Sparkles size={240} strokeWidth={1} />
          </div>
          
          <div className="bg-white/[0.01] backdrop-blur-3xl rounded-[3rem] p-10 lg:p-16 relative z-10 border border-white/5">
            <div className="flex items-center gap-4 mb-10">
               <div className="h-px w-16 bg-emerald-500/50" />
               <h2 className="text-3xl font-black tracking-tight text-white uppercase italic">System Efficacy</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {[
                { label: 'Diagnostic Load', val: '96.0%', desc: 'NEURAL ACCURACY THRESHOLD', icon: ShieldCheck, color: 'emerald' },
                { label: 'Reasoning Node', val: 'Gen-AI', desc: 'TACTICAL INTERVENTION CORE', icon: TrendingUp, color: 'blue' },
              ].map((stat, i) => (
                <div key={i} className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl bg-${stat.color}-500/10 text-${stat.color}-400 flex items-center justify-center border border-${stat.color}-500/20 shadow-lg shadow-${stat.color}-500/10`}>
                    <stat.icon size={32} />
                  </div>
                  <div className="space-y-1">
                     <h3 className="text-6xl font-black text-white tracking-tighter group-hover:text-glow transition-all">{stat.val}</h3>
                     <p className="text-[11px] font-black text-white uppercase tracking-[0.3em]">{stat.label}</p>
                     <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Tactical Impact */}
        <div className="space-y-8">
          <Card className="border-none bg-emerald-500/[0.03] border-emerald-500/20 group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-125 transition-transform">
               <Globe className="text-emerald-500" size={100} />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <Globe className="text-emerald-500" size={24} />
              <h4 className="font-black text-white text-lg tracking-tight uppercase">Global Impact</h4>
            </div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed relative z-10">
              DEPLOYED ACROSS DISTRIBUTED NODES TO EMPOWER REGIONAL HUBS WITH SOTA DIAGNOSTIC CAPABILITIES WHERE HUMAN EXPERTISE IS SCARCE.
            </p>
          </Card>
          
          <Card className="border-none bg-white/[0.02] border-white/5 group overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-125 transition-transform">
               <Zap className="text-amber-500" size={100} />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <Zap className="text-amber-500" size={24} />
              <h4 className="font-black text-white text-lg tracking-tight uppercase">Performance</h4>
            </div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed relative z-10">
              MINIMIZING REACTION LATENCY AND OPTIMIZING CHEMICAL INTERVENTION THROUGH PRECISION TARGETING.
            </p>
          </Card>
        </div>
      </div>

      {/* ── Roadmap Grid ── */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
           <Terminal size={18} className="text-emerald-500" />
           <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">Future Vectors</h3>
           <div className="flex-1 h-px bg-white/5" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Drone Integration', tag: 'SYNC // P2' },
            { title: 'Edge Hardware', tag: 'Q4-2026' },
            { title: 'Multi-Crop Array', tag: 'RESEARCH' },
            { title: 'SAT-Surveillance', tag: 'VISION' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-8 rounded-[2rem] glass-card border-white/5 hover:border-emerald-500/30 transition-all cursor-default group"
            >
              <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-3 group-hover:text-glow">{item.tag}</p>
              <h4 className="font-black text-white flex items-center justify-between uppercase tracking-widest text-xs">
                {item.title}
                <ChevronRight size={14} className="text-slate-600" />
              </h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Final Transmission ── */}
      <div className="pt-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <h2 className="text-7xl font-black text-white tracking-tighter uppercase mb-2 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)] italic">
          Thank <span className="text-emerald-500">You.</span>
        </h2>
        <p className="text-slate-500 font-black uppercase tracking-[0.6em] text-[10px] mt-4">End of Transmission // Global Nexus Node</p>
      </div>
    </div>
  );
};

export default Conclusion;
