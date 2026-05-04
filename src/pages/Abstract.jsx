import React from 'react';
import Card from '../components/Card';
import { FileText, Cpu, MessageSquare, Sparkles, Quote, Terminal, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';

const Abstract = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-6 pb-20">
      {/* ── Page Header ── */}
      <div className="text-center space-y-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl glass-card text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em] border border-emerald-500/20 shadow-lg shadow-emerald-500/10"
        >
          <Fingerprint size={16} />
          Project Dossier #812
        </motion.div>
        
        <div className="relative">
          <h1 className="text-6xl font-black text-white tracking-tighter sm:text-7xl uppercase">
            The <span className="text-emerald-500 text-glow italic">Blueprint</span>
          </h1>
          <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
             <Terminal size={200} />
          </div>
        </div>
        
        <p className="text-lg text-slate-400 font-bold max-w-2xl mx-auto uppercase tracking-wide leading-relaxed">
          Hybrid Neural Framework for the Autonomous Diagnosis of Papaya Foliar Pathogens.
        </p>
      </div>

      {/* ── Main Intel Card ── */}
      <Card className="border-none shadow-[0_40px_100px_rgba(0,0,0,0.7)] p-2 relative overflow-hidden" hoverEffect={false}>
        {/* Background Technical Decoration */}
        <div className="absolute top-0 right-0 p-12 text-white/[0.03] pointer-events-none rotate-12">
          <Quote size={240} strokeWidth={4} />
        </div>
        
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-emerald-500/10 blur-[60px] pointer-events-none" />

        <div className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-10 sm:p-16 relative z-10 border border-white/5">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-emerald-500 mb-4">
               <div className="h-px w-12 bg-emerald-500/50" />
               <span className="text-xs font-black uppercase tracking-[0.3em]">System Abstract</span>
            </div>

            <p className="text-2xl text-slate-200 leading-relaxed font-black tracking-tight uppercase sm:text-3xl">
              Agriculture faces an <span className="text-white border-b-2 border-emerald-500/30">unprecedented ecological pivot</span>. 
              The vulnerability of Papaya (Carica papaya) to rapid-spread pathogens demands a new paradigm of intervention.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
               <div className="space-y-6">
                  <p className="text-sm text-slate-400 leading-relaxed font-bold uppercase tracking-wider">
                    Our architecture introduces a <strong className="text-white font-black">Hybrid Neural Interface</strong>. 
                    By modernizing classical CNN designs with <strong className="text-emerald-400 font-black">ConvNeXt</strong>, 
                    we've achieved a validation threshold of <strong className="text-white text-glow font-black text-2xl">96.0% accuracy</strong>.
                  </p>
               </div>
               <div className="space-y-6">
                  <p className="text-sm text-slate-400 leading-relaxed font-bold uppercase tracking-wider">
                    Beyond identification, the framework utilizes <strong className="text-white font-black">Gen-AI Reasoning</strong> 
                    to synthesize treatment protocols. This isn't just a classifier; it's a 
                    <strong className="text-emerald-400 font-black"> Digital Agronomist</strong> providing real-time, 
                    scientifically-validated treatment blueprints for global resilience.
                  </p>
               </div>
            </div>

            <div className="pt-10 flex flex-wrap gap-4">
               {['#ConvNeXt', '#LLM-Reasoning', '#XAI', '#Smart-Farming'].map(tag => (
                 <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black text-slate-500 tracking-widest uppercase">{tag}</span>
               ))}
            </div>
          </div>
        </div>
      </Card>

      {/* ── Metric Highlights ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Vision Core', desc: 'ConvNeXt SOTA Backbone', icon: Cpu, color: 'blue' },
          { title: 'XAI Module', desc: 'Grad-CAM Transparency', icon: FileText, color: 'purple' },
          { title: 'Advice Engine', desc: 'LLM Treatment Blueprints', icon: MessageSquare, color: 'emerald' }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group flex items-center gap-6 p-6 rounded-[2rem] glass-card border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.03] transition-all"
          >
            <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 text-${item.color}-400 flex items-center justify-center shrink-0 border border-${item.color}-500/20 group-hover:scale-110 transition-transform`}>
              <item.icon size={28} />
            </div>
            <div>
              <h4 className="font-black text-white text-xs uppercase tracking-widest group-hover:text-glow">{item.title}</h4>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-wider mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Abstract;
