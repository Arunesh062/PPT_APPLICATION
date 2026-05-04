import React, { useState } from 'react';
import Card from '../components/Card';
import { Smartphone, Upload, Bot, Sprout, Tractor, LineChart, Target, ShieldCheck, Search, ChevronRight, X, Sparkles, Terminal, Activity, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Application = () => {
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handleDemoRun = () => {
    setIsPredicting(true);
    setPrediction(null);
    
    setTimeout(() => {
      setIsPredicting(false);
      setPrediction({
        disease: 'Papaya Ringspot Virus',
        confidence: 98.4,
        symptoms: 'Distorted leaves with mosaic patterns and prominent oily streaks on petioles.',
        recommendation: [
          "DE-IDENTIFY AND INCINERATE INFECTED BIOMASS",
          "APPLY ORGANIC NEEM OIL (5ML/L) VECTOR CONTROL",
          "DEPLOY MARIGOLD INTERCROPPING BARRIERS",
          "INITIATE SECONDARY ORCHARD MONITORING PROTOCOL"
        ]
      });
    }, 3000);
  };

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
           <Terminal size={18} className="text-emerald-500" />
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Live Interface // Node Diagnostic</span>
        </div>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Tactical <span className="text-emerald-500 text-glow">Inference</span>
        </h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Real-time neural diagnostic and LLM reasoning environment.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* ── Left: Technical Controls ── */}
        <div className="lg:col-span-2 space-y-8">
          <Card 
            title="Data Capture Node" 
            subtitle="Input Stream: RGB-224-TENSOR"
            icon={Upload}
          >
            <div 
              onClick={handleDemoRun}
              className="mt-6 group relative cursor-pointer overflow-hidden rounded-[2rem] border-2 border-dashed border-white/10 bg-white/[0.02] p-12 text-center transition-all hover:border-emerald-500/50 hover:bg-emerald-500/[0.02]"
            >
              {/* Animated Technical Crosshairs */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-emerald-500/30 group-hover:border-emerald-500 transition-colors" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-emerald-500/30 group-hover:border-emerald-500 transition-colors" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-emerald-500/30 group-hover:border-emerald-500 transition-colors" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-emerald-500/30 group-hover:border-emerald-500 transition-colors" />
              
              {/* Scanning Shimmer */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 text-emerald-500 shadow-2xl border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Upload size={32} />
                </div>
                <h4 className="mt-8 font-black text-white tracking-tighter uppercase text-lg group-hover:text-glow">Initialize Diagnostic</h4>
                <p className="mt-3 text-[10px] font-black text-slate-500 leading-relaxed uppercase tracking-[0.2em] max-w-[200px] mx-auto">
                  Execute inference on pre-loaded dataset sample.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-6">
            {[
              { l: 'Mobile Interface', v: 'ACTIVE', i: Smartphone, c: 'blue' },
              { l: 'Grad-CAM XAI', v: 'SYNCED', i: Search, c: 'purple' }
            ].map((node, i) => (
              <div key={i} className="p-6 rounded-[2rem] glass-card border-white/5 flex flex-col items-center text-center group hover:border-white/20 transition-all">
                <div className={`w-12 h-12 rounded-2xl bg-${node.c}-500/10 text-${node.c}-400 flex items-center justify-center mb-4 border border-${node.c}-500/20 group-hover:scale-110 transition-transform`}>
                  <node.i size={24} />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{node.l}</p>
                <div className="flex items-center gap-2 mt-2">
                   <div className={`h-1 w-1 rounded-full bg-${node.c}-500 animate-pulse`} />
                   <p className="text-[11px] font-black text-white tracking-tighter uppercase">{node.v}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 rounded-[2rem] bg-amber-500/5 border border-amber-500/20 flex gap-4 items-start">
             <AlertTriangle size={20} className="text-amber-500 shrink-0" />
             <p className="text-[10px] font-bold text-amber-200/60 uppercase tracking-wider leading-relaxed">
               Warning: Static simulation node. Real-time GPU acceleration bypass engaged for demonstration efficiency.
             </p>
          </div>
        </div>

        {/* ── Right: Diagnostic Terminal ── */}
        <div className="lg:col-span-3">
          <Card className="h-full border-none shadow-[0_50px_100px_rgba(0,0,0,0.8)] bg-slate-950 relative overflow-hidden flex flex-col min-h-[600px] rounded-[3rem]" noPadding={true}>
            {/* Terminal Header */}
            <div className="px-10 py-8 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                   <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
                <div className="h-4 w-px bg-white/10 mx-2" />
                <div className="flex items-center gap-3">
                  <Activity size={16} className="text-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Neural Output Terminal</span>
                </div>
              </div>
              <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400">0x812-SYNC</div>
            </div>

            <div className="flex-1 p-10 relative flex flex-col">
              {/* Technical Grid Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <AnimatePresence mode="wait">
                {isPredicting ? (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-slate-950 z-20"
                  >
                    <div className="relative">
                      {/* Technical Spinner */}
                      <div className="h-32 w-32 rounded-full border-[1px] border-emerald-500/20 animate-[spin_4s_linear_infinite]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="h-24 w-24 rounded-full border-t-2 border-emerald-500 animate-spin shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center text-emerald-500">
                        <Activity size={32} className="animate-pulse" />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <h4 className="font-black text-white tracking-[0.2em] uppercase text-xl animate-pulse">Analyzing Tensors</h4>
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em]">ConvNeXt-S Layer 4 // Weights: Static</p>
                    </div>
                  </motion.div>
                ) : prediction ? (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-10 h-full relative z-10"
                  >
                    {/* Diagnostic Alert */}
                    <div className="flex items-center justify-between p-8 rounded-[2rem] bg-red-500/5 border border-red-500/20 relative group overflow-hidden">
                       <div className="absolute inset-0 bg-red-500/[0.02] translate-x-[-100%] group-hover:translate-x-full transition-transform duration-[3000ms]" />
                       
                       <div className="relative z-10 flex items-center gap-6">
                          <div className="h-16 w-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 shadow-lg shadow-red-500/10 border border-red-500/20">
                             <ShieldCheck size={32} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-red-500/70 uppercase tracking-[0.4em] mb-1.5">Diagnosis Confirmed</p>
                            <h3 className="text-3xl font-black text-white tracking-tighter uppercase drop-shadow-md">{prediction.disease}</h3>
                          </div>
                       </div>
                       
                       <div className="text-right relative z-10">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1.5">Confidence Delta</p>
                        <h3 className="text-5xl font-black text-red-500 tracking-tighter text-glow-red">{prediction.confidence}%</h3>
                      </div>
                    </div>

                    {/* LLM Output Terminal */}
                    <div className="flex-1 rounded-[2.5rem] bg-emerald-500/[0.02] border border-emerald-500/10 p-10 relative group overflow-hidden shadow-2xl">
                      {/* Scanning Light Effect */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/30 blur-sm animate-[scan_5s_ease-in-out_infinite]" />
                      
                      <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                        <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 shadow-inner">
                          <Bot size={24} />
                        </div>
                        <div>
                           <h4 className="font-black text-white text-sm uppercase tracking-widest">Neural Logic Node</h4>
                           <p className="text-[9px] font-black text-emerald-500/50 uppercase tracking-widest mt-1">Generated // Context: Agricultural-v4</p>
                        </div>
                        <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10">
                           <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                           <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Realtime</span>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {prediction.recommendation.map((item, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 + 0.5 }}
                            className="flex items-center gap-5 group"
                          >
                            <div className="h-1 w-6 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-all duration-300 group-hover:w-10" />
                            <p className="text-xs text-slate-300 font-black uppercase tracking-widest leading-relaxed group-hover:text-white transition-colors">{item}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-12 flex items-center justify-between">
                         <div className="space-y-1">
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Protocol Severity</p>
                            <p className="text-xs font-black text-amber-500 uppercase tracking-tighter">Critical Intervention Required</p>
                         </div>
                         <motion.button 
                           whileHover={{ x: 5, color: '#10b981' }}
                           className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] transition-all"
                         >
                           Export Dossier <ChevronRight size={16} />
                         </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-800 gap-8">
                    <div className="relative">
                       <div className="w-24 h-24 rounded-[2rem] border-2 border-dashed border-white/5 flex items-center justify-center">
                        <ImageIcon size={40} strokeWidth={1} className="opacity-20" />
                      </div>
                      <motion.div 
                        animate={{ y: [0, 100, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-0 left-0 w-full h-[1px] bg-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                      />
                    </div>
                    <div className="text-center space-y-2">
                       <p className="text-xs font-black uppercase tracking-[0.5em] text-slate-700">Awaiting Sensor Data</p>
                       <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-800">Connection Status: Idle</p>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Terminal Footer Scanline */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          </Card>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(600px); opacity: 0; }
        }
        .text-glow-red {
          text-shadow: 0 0 10px rgba(239, 68, 68, 0.5), 0 0 20px rgba(239, 68, 68, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Application;
a