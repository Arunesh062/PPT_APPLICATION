import React from 'react';
import Card from '../components/Card';
import { Target, Image as ImageIcon, Layers, Cpu, TrendingUp, ShieldCheck, Zap, Activity, Globe } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const performanceData = [
  { name: 'T-05', val: 78 },
  { name: 'T-04', val: 82 },
  { name: 'T-03', val: 88 },
  { name: 'T-02', val: 94 },
  { name: 'T-01', val: 96 },
];

const Dashboard = () => {
  const stats = [
    { label: 'Neural Accuracy', value: '96.0%', icon: Target, color: 'emerald', trend: '+2.4%', sub: 'Verified' },
    { label: 'Data Repository', value: '12,000', icon: ImageIcon, color: 'blue', trend: 'LATEST', sub: 'Sync Stable' },
    { label: 'Pathogen Matrix', value: '08', icon: Layers, color: 'purple', trend: 'ACTIVE', sub: 'Matrix Load' },
    { label: 'Sync Latency', value: '45ms', icon: Zap, color: 'amber', trend: '-10ms', sub: 'Optimal' },
  ];

  return (
    <div className="space-y-10 pb-20">
      {/* ── System Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-3 mb-1">
             <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 tracking-widest uppercase">Live System</div>
             <div className="h-1 w-12 rounded-full bg-slate-800 flex overflow-hidden">
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="h-full w-full bg-emerald-500"
                />
             </div>
          </div>
          <h1 className="text-5xl font-black text-white tracking-tighter uppercase drop-shadow-2xl">
            System <span className="text-emerald-500 text-glow italic">Nexus</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">Diagnostic Framework & Neural Integration</p>
        </div>
        
        <div className="flex items-center gap-6">
           <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global Node</span>
              <div className="flex items-center gap-2 text-white">
                <Globe size={14} className="text-emerald-500" />
                <span className="text-sm font-black tracking-tighter">PH-042 (Manila)</span>
              </div>
           </div>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-8 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-[10px] tracking-[0.2em] shadow-lg shadow-emerald-500/20 border border-emerald-400/30 uppercase transition-all"
           >
             Initialize Scan
           </motion.button>
        </div>
      </div>

      {/* ── Diagnostic Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card 
            key={i} 
            className="border-none group overflow-hidden"
            hoverEffect={true}
          >
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className={`w-14 h-14 rounded-2xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 flex items-center justify-center text-${stat.color}-400 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon size={28} />
                </div>
                <div className="text-right">
                   <div className={`text-[10px] font-black px-2 py-1 rounded-md bg-${stat.color}-500/10 text-${stat.color}-400 border border-${stat.color}-500/20`}>
                      {stat.trend}
                   </div>
                </div>
              </div>
              
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">{stat.label}</p>
                <h3 className="text-4xl font-black text-white tracking-tighter drop-shadow-md">{stat.value}</h3>
                <div className="flex items-center gap-1.5 mt-3">
                   <div className={`h-1.5 w-1.5 rounded-full bg-${stat.color}-500 animate-pulse`} />
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{stat.sub}</p>
                </div>
              </div>
            </div>
            
            {/* Background Data Stream Animation */}
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
               <motion.div 
                 initial={{ y: '100%' }}
                 animate={{ y: '-100%' }}
                 transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                 className="w-full h-full text-[8px] font-mono whitespace-pre"
               >
                 {Array(50).fill('010110010110101010101011').join('\n')}
               </motion.div>
            </div>
          </Card>
        ))}
      </div>

      {/* ── Main Neural Center ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progress Monitor */}
        <Card 
          title="Neural Convergence" 
          subtitle="Model Training History (T-Minus)"
          className="lg:col-span-2"
          icon={Activity}
        >
          <div className="h-[400px] w-full mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#475569', fontSize: 10, fontWeight: 900}} 
                  dy={15}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#475569', fontSize: 10, fontWeight: 900}}
                  domain={[70, 100]}
                />
                <Tooltip 
                  contentStyle={{backgroundColor: '#0f172a', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)', fontWeight: 'bold'}}
                  itemStyle={{color: '#10b981'}}
                />
                <Area 
                  type="monotone" 
                  dataKey="val" 
                  stroke="#10b981" 
                  strokeWidth={6} 
                  fillOpacity={1} 
                  fill="url(#colorVal)" 
                  animationDuration={3000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4">
             {[
               { l: 'Stability', v: '99.2%' },
               { l: 'Convergence', v: 'High' },
               { l: 'Epoch Delta', v: '+0.04' }
             ].map((m, i) => (
               <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">{m.l}</p>
                  <p className="text-lg font-black text-white tracking-tighter">{m.v}</p>
               </div>
             ))}
          </div>
        </Card>

        {/* Integration Hub */}
        <Card 
          title="Architecture Core" 
          subtitle="Active Framework Modules"
          className="flex flex-col h-full"
          icon={Cpu}
        >
          <div className="flex-1 space-y-6 mt-6">
            {[
              { title: 'ConvNeXt Backbone', desc: 'Base Feature Extractor', icon: Layers, color: 'indigo', status: '88% LOAD' },
              { title: 'LLM Reasoning', desc: 'Gen-AI Treatment Node', icon: Zap, color: 'amber', status: 'IDLE' },
              { title: 'Explainable AI', desc: 'Grad-CAM XAI Module', icon: ShieldCheck, color: 'emerald', status: 'ONLINE' }
            ].map((feature, i) => (
              <div key={i} className="group p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-default">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 shrink-0 rounded-2xl bg-${feature.color}-500/10 text-${feature.color}-400 flex items-center justify-center border border-${feature.color}-500/20 group-hover:scale-110 transition-transform`}>
                    <feature.icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                       <h4 className="font-black text-white text-xs uppercase tracking-tight">{feature.title}</h4>
                       <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{feature.status}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-10 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-2xl font-black text-[11px] tracking-[0.3em] uppercase transition-all shadow-xl shadow-emerald-900/20 active:scale-95 border border-emerald-400/20">
            Open Nexus Controls
          </button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
