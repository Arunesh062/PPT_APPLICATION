// import React from 'react';
// import Card from '../components/Card';
// import { ArrowRight, Cpu, Database, Image as ImageIcon, MessageSquare, ShieldCheck, Box, ChevronRight, Share2, Activity } from 'lucide-react';
// import { motion } from 'framer-motion';

// const Architecture = () => {
//   const steps = [
//     { name: 'Input', icon: ImageIcon, desc: 'RAW DATA STREAM', color: 'slate' },
//     { name: 'Pre-Op', icon: Database, desc: 'TENSOR NORM', color: 'blue' },
//     { name: 'Backbone', icon: Cpu, desc: 'CONVNEXT NEURAL', color: 'purple' },
//     { name: 'Classify', icon: Box, desc: 'PROBABILITY MATRIX', color: 'amber' },
//     { name: 'LLM Node', icon: MessageSquare, desc: 'COGNITIVE LOGIC', color: 'indigo' },
//     { name: 'Terminal', icon: ShieldCheck, desc: 'COMMAND OUTPUT', color: 'emerald' },
//   ];

//   return (
//     <div className="space-y-12 pb-20">
//       <div className="flex flex-col gap-3">
//         <div className="flex items-center gap-3">
//            <Share2 size={18} className="text-emerald-500" />
//            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">System Schematic // 01</span>
//         </div>
//         <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
//           Neural <span className="text-emerald-500 text-glow">Pipeline</span>
//         </h1>
//         <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Technical breakdown of the hybrid inferencing infrastructure.</p>
//       </div>

//       {/* ── Schematic Diagram ── */}
//       <Card className="border-none shadow-[0_50px_100px_rgba(0,0,0,0.6)] bg-white/[0.01] relative overflow-hidden" noPadding={true}>
//         {/* Technical Grid Overlay */}
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
//         <div className="p-10 lg:p-20 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
//             {/* Connecting Flux Line */}
//             <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent hidden lg:block -translate-y-1/2 z-0" />
            
//             {steps.map((step, i) => (
//               <React.Fragment key={i}>
//                 <motion.div 
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.1, type: 'spring' }}
//                   className="flex flex-col items-center gap-6 relative z-10 lg:w-44 group cursor-default"
//                 >
//                   <div className={`w-20 h-20 rounded-3xl bg-slate-900 border border-${step.color}-500/30 text-${step.color}-400 flex items-center justify-center shadow-2xl group-hover:shadow-${step.color}-500/20 group-hover:scale-110 transition-all duration-500 relative`}>
//                     <div className={`absolute inset-0 bg-${step.color}-500/5 blur-xl group-hover:bg-${step.color}-500/10 transition-all`} />
//                     <step.icon size={32} className="relative z-10" />
                    
//                     {/* Corner accents */}
//                     <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/20" />
//                     <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/20" />
//                   </div>
                  
//                   <div className="text-center">
//                     <h4 className="font-black text-white text-[11px] uppercase tracking-widest mb-1.5 group-hover:text-emerald-400 transition-colors">{step.name}</h4>
//                     <div className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/5">
//                        <p className="text-[8px] text-slate-500 font-black uppercase tracking-[0.2em]">{step.desc}</p>
//                     </div>
//                   </div>
//                 </motion.div>
                
//                 {i < steps.length - 1 && (
//                   <div className="text-slate-700 lg:mb-14 rotate-90 lg:rotate-0">
//                     <motion.div
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ duration: 2, repeat: Infinity }}
//                     >
//                       <ChevronRight size={28} strokeWidth={3} />
//                     </motion.div>
//                   </div>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </Card>

//       {/* ── Sub-System Specs ── */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         <Card 
//           title="Module // CONVNEXT-BASE" 
//           subtitle="Feature Extraction Unit"
//           icon={Cpu}
//         >
//           <div className="space-y-8 mt-6">
//             <div className="p-6 rounded-3xl bg-indigo-500/[0.03] border border-indigo-500/20 relative group">
//               <div className="absolute top-4 right-4 text-indigo-500/20"><Activity size={40} /></div>
//               <h4 className="font-black text-indigo-400 text-sm uppercase tracking-widest mb-3 flex items-center gap-3">
//                  <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
//                  Core Specifications
//               </h4>
//               <p className="text-xs text-slate-400 font-bold leading-relaxed uppercase tracking-wider">
//                 Utilizes a purely convolutional macro-design inspired by vision transformers. Leverages depthwise convolutions and large kernels (7x7) to achieve hierarchical spatial sensitivity.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-2 gap-4">
//                {[
//                  { l: 'Activation', v: 'GELU-G2' },
//                  { l: 'Norm Layer', v: 'LAYER-NORM' },
//                  { l: 'Kernel Size', v: '7 X 7 px' },
//                  { l: 'Stride Map', v: 'HE-INITS' }
//                ].map((spec, i) => (
//                  <div key={i} className="px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all group">
//                     <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">{spec.l}</p>
//                     <p className="text-xs font-black text-white tracking-widest group-hover:text-indigo-400 transition-colors">{spec.v}</p>
//                  </div>
//                ))}
//             </div>
//           </div>
//         </Card>

//         <Card 
//           title="Module // LLM-REASONER" 
//           subtitle="Cognitive Decision Hub"
//           icon={MessageSquare}
//         >
//           <div className="space-y-8 mt-6">
//             <div className="p-6 rounded-3xl bg-emerald-500/[0.03] border border-emerald-500/20 relative overflow-hidden group">
//                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//                <h4 className="font-black text-emerald-400 text-sm uppercase tracking-widest mb-3 flex items-center gap-3 relative z-10">
//                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
//                  Actionable Output Generation
//               </h4>
//               <p className="text-xs text-slate-400 font-bold leading-relaxed uppercase tracking-wider relative z-10">
//                 A context-aware reasoning engine that synthesizes classification metadata with agricultural datasets to produce surgical treatment protocols and pesticide optimization strategies.
//               </p>
//             </div>

//             <div className="space-y-3">
//                {[
//                  { label: 'Prompt Template', val: 'Agronomic-V4' },
//                  { label: 'Context Window', val: '8,192 Tokens' },
//                  { label: 'Output Mode', val: 'Technical/JSON' }
//                ].map((row, i) => (
//                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all">
//                     <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{row.label}</span>
//                     <span className="text-[10px] font-black text-emerald-500 tracking-widest uppercase">{row.val}</span>
//                  </div>
//                ))}
//             </div>
            
//             <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-center">
//                <p className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.3em]">Module Status: Integrated</p>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Architecture;


// new code 
import React from 'react';
import Card from '../components/Card';
import {
  Cpu,
  MessageSquare,
  Activity,
  Share2,
  ShieldCheck,
  Database,
  Image as ImageIcon,
  Box,
  ChevronRight
} from 'lucide-react';

import { motion } from 'framer-motion';

const Architecture = () => {
  const steps = [
    {
      name: 'Input',
      icon: ImageIcon,
      desc: 'RAW DATA STREAM',
      color: 'emerald'
    },
    {
      name: 'Pre-Op',
      icon: Database,
      desc: 'TENSOR NORM',
      color: 'blue'
    },
    {
      name: 'Backbone',
      icon: Cpu,
      desc: 'CONVNEXT NEURAL',
      color: 'purple'
    },
    {
      name: 'Classify',
      icon: Box,
      desc: 'PROBABILITY MATRIX',
      color: 'amber'
    },
    {
      name: 'LLM Node',
      icon: MessageSquare,
      desc: 'COGNITIVE LOGIC',
      color: 'indigo'
    },
    {
      name: 'Terminal',
      icon: ShieldCheck,
      desc: 'COMMAND OUTPUT',
      color: 'green'
    }
  ];

  return (
    <div className="space-y-12 pb-20">

      {/* ───────── HEADER ───────── */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Share2 size={18} className="text-emerald-500" />

          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">
            System Schematic // 01
          </span>
        </div>

        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Neural <span className="text-emerald-500 text-glow">Pipeline</span>
        </h1>

        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
          Technical breakdown of the hybrid inferencing infrastructure.
        </p>
      </div>

      {/* ───────── REAL ARCHITECTURE IMAGE ───────── */}
      <Card
        className="border border-emerald-500/20 bg-white/[0.02] overflow-hidden rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
        noPadding={true}
      >
        <div className="p-6 lg:p-10">

          <div className="mb-8">
            <h2 className="text-2xl font-black text-white uppercase tracking-wider">
              System Architecture
            </h2>

            <p className="text-slate-400 text-sm mt-2 uppercase tracking-widest">
              Hybrid ConvNeXt + LLM Framework Workflow
            </p>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-black group">
            <img
              src="/images/Picture1.jpg"
              alt="Architecture Diagram"
              className="w-full object-cover rounded-2xl"
            />
          </div>

        </div>
      </Card>

      {/* ───────── ANIMATED PIPELINE ───────── */}
      <Card
        className="border-none shadow-[0_50px_100px_rgba(0,0,0,0.6)] bg-white/[0.01] relative overflow-hidden"
        noPadding={true}
      >

        {/* GRID OVERLAY */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />

        <div className="p-10 lg:p-20 relative z-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">

            {/* CONNECTING LINE */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent hidden lg:block -translate-y-1/2 z-0" />

            {steps.map((step, i) => (
              <React.Fragment key={i}>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    type: 'spring'
                  }}
                  className="flex flex-col items-center gap-6 relative z-10 lg:w-44 group cursor-default"
                >

                  {/* ICON BOX */}
                  <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-white/10 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 relative">

                    <div className="absolute inset-0 bg-emerald-500/5 blur-xl group-hover:bg-emerald-500/10 transition-all" />

                    <step.icon size={32} className="relative z-10" />

                    {/* CORNERS */}
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/20" />

                    <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/20" />
                  </div>

                  {/* TEXT */}
                  <div className="text-center">

                    <h4 className="font-black text-white text-[11px] uppercase tracking-widest mb-1.5 group-hover:text-emerald-400 transition-colors">
                      {step.name}
                    </h4>

                    <div className="px-3 py-1 rounded-md bg-white/[0.03] border border-white/5">

                      <p className="text-[8px] text-slate-500 font-black uppercase tracking-[0.2em]">
                        {step.desc}
                      </p>

                    </div>
                  </div>
                </motion.div>

                {/* ARROW */}
                {i < steps.length - 1 && (
                  <div className="text-slate-700 lg:mb-14 rotate-90 lg:rotate-0">

                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <ChevronRight size={28} strokeWidth={3} />
                    </motion.div>

                  </div>
                )}

              </React.Fragment>
            ))}

          </div>

        </div>
      </Card>

      {/* ───────── MODULE DETAILS ───────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* CONVNEXT */}
        <Card
          title="Module // CONVNEXT-BASE"
          subtitle="Feature Extraction Unit"
          icon={Cpu}
        >

          <div className="space-y-8 mt-6">

            <div className="p-6 rounded-3xl bg-indigo-500/[0.03] border border-indigo-500/20 relative group">

              <div className="absolute top-4 right-4 text-indigo-500/20">
                <Activity size={40} />
              </div>

              <h4 className="font-black text-indigo-400 text-sm uppercase tracking-widest mb-3 flex items-center gap-3">

                <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />

                Core Specifications
              </h4>

              <p className="text-xs text-slate-400 font-bold leading-relaxed uppercase tracking-wider">
                Utilizes a purely convolutional macro-design inspired by vision transformers.
                Uses depthwise convolutions and large kernels (7x7) for hierarchical spatial learning.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {[
                { l: 'Activation', v: 'GELU-G2' },
                { l: 'Norm Layer', v: 'LAYER-NORM' },
                { l: 'Kernel Size', v: '7 X 7 px' },
                { l: 'Stride Map', v: 'HE-INITS' }
              ].map((spec, i) => (

                <div
                  key={i}
                  className="px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all group"
                >

                  <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    {spec.l}
                  </p>

                  <p className="text-xs font-black text-white tracking-widest group-hover:text-indigo-400 transition-colors">
                    {spec.v}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </Card>

        {/* LLM */}
        <Card
          title="Module // LLM-REASONER"
          subtitle="Cognitive Decision Hub"
          icon={MessageSquare}
        >

          <div className="space-y-8 mt-6">

            <div className="p-6 rounded-3xl bg-emerald-500/[0.03] border border-emerald-500/20 relative overflow-hidden group">

              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <h4 className="font-black text-emerald-400 text-sm uppercase tracking-widest mb-3 flex items-center gap-3 relative z-10">

                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

                Actionable Output Generation
              </h4>

              <p className="text-xs text-slate-400 font-bold leading-relaxed uppercase tracking-wider relative z-10">
                Context-aware reasoning engine generating agricultural treatment recommendations and disease management protocols.
              </p>

            </div>

            <div className="space-y-3">

              {[
                { label: 'Prompt Template', val: 'Agronomic-V4' },
                { label: 'Context Window', val: '8,192 Tokens' },
                { label: 'Output Mode', val: 'Technical/JSON' }
              ].map((row, i) => (

                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all"
                >

                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    {row.label}
                  </span>

                  <span className="text-[10px] font-black text-emerald-500 tracking-widest uppercase">
                    {row.val}
                  </span>

                </div>

              ))}

            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 text-center">

              <p className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.3em]">
                Module Status: Integrated
              </p>

            </div>

          </div>

        </Card>

      </div>

    </div>
  );
};

export default Architecture;