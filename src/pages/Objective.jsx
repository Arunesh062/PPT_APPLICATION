import React from 'react';
import Card from '../components/Card';
import { Target, CheckCircle2, ChevronRight, Cpu, MessageSquare, Search, Box, Terminal, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Objective = () => {
  const objectives = [
    {
      title: "Neural Robustness",
      desc: "ARCHITECTING A CONVNEXT CORE TO IDENTIFY 08 UNIQUE PATHOGEN SIGNATURES.",
      icon: Cpu,
      color: "blue"
    },
    {
      title: "Cognitive Advice",
      desc: "INTEGRATING GEN-AI LOGIC FOR AUTONOMOUS TREATMENT PROTOCOL GENERATION.",
      icon: MessageSquare,
      color: "emerald"
    },
    {
      title: "XAI Transparency",
      desc: "DEPLOYING GRAD-CAM TO VISUALIZE SPATIAL NEURAL SENSITIVITY FOR USER TRUST.",
      icon: Search,
      color: "purple"
    },
    {
      title: "Edge Deployment",
      desc: "OPTIMIZING INFERENCE FOR LOW-LATENCY OPERATION ON MOBILE SENSOR NODES.",
      icon: Box,
      color: "amber"
    }
  ];

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
           <Terminal size={18} className="text-emerald-500" />
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Target Parameters // Goal Set</span>
        </div>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Mission <span className="text-emerald-500 text-glow">Objectives</span>
        </h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Defining the key neural and operational milestones of the framework.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {objectives.map((obj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="h-full border-none group hover:bg-white/[0.03] transition-all duration-500" hoverEffect={true}>
              <div className="flex gap-8 items-start">
                <div className={`w-16 h-16 shrink-0 rounded-[1.5rem] bg-${obj.color}-500/10 text-${obj.color}-400 flex items-center justify-center border border-${obj.color}-500/20 shadow-lg shadow-${obj.color}-500/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <obj.icon size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase group-hover:text-glow transition-all">{obj.title}</h3>
                  <p className="text-[10px] text-slate-500 font-black leading-relaxed uppercase tracking-[0.2em]">{obj.desc}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Target Milestone Banner */}
      <Card className="bg-slate-950 border-white/5 shadow-2xl overflow-hidden relative group" hoverEffect={false}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)]" />
        {/* Background Technical Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none scale-150">
           <Activity size={400} />
        </div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-12 lg:p-20 text-center lg:text-left">
          <div className="max-w-xl space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em] mb-2">
              <Target size={20} className="animate-pulse" />
              Primary Mission Vector
            </div>
            <h2 className="text-4xl font-black text-white tracking-tighter leading-none uppercase italic sm:text-5xl">
              AUTONOMOUS <span className="text-emerald-500">CROP SECURITY</span> ARCHITECTURE
            </h2>
            <p className="text-xs text-slate-500 font-black uppercase tracking-widest leading-relaxed">
              Achieving total integration of vision-based diagnostics and generative intervention strategies.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-14 h-14 rounded-full bg-slate-900 border-2 border-white/5 flex items-center justify-center text-xs font-black text-slate-600 shadow-2xl relative group-hover:scale-110 transition-transform">
                   <div className="absolute inset-0 bg-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   <span className="relative z-10">0{i}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
               <div className="h-[2px] w-12 bg-emerald-500/50" />
               <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Integrated Pipeline</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Objective;
