import React from 'react';
import Card from '../components/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, LineChart, Line, Cell, AreaChart, Area } from 'recharts';
import { Activity, Target, Zap, ShieldCheck, TrendingUp, AlertCircle, BarChart3, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const Results = () => {
  const modelComparison = [
    { name: 'EFF-NET', acc: 94.4, color: 'rgba(71, 85, 105, 0.5)' },
    { name: 'DENSE-121', acc: 95.1, color: 'rgba(71, 85, 105, 0.5)' },
    { name: 'RES-NET50', acc: 94.2, color: 'rgba(71, 85, 105, 0.5)' },
    { name: 'MobileNet-v3', acc: 94.0, color: 'rgba(71, 85, 105, 0.5)' },
    { name: 'VGG', acc: 94.3, color: 'rgba(71, 85, 105, 0.5)' },
    { name: 'CONVNEXT', acc: 96.0, color: '#10b981' },
  ];

  const metrics = [
    { label: 'Precision', value: '95.8%', icon: Target, color: 'emerald', status: 'Optimal' },
    { label: 'Recall', value: '96.1%', icon: Activity, color: 'blue', status: 'Stable' },
    { label: 'F1-Score', value: '95.9%', icon: ShieldCheck, color: 'purple', status: 'High' },
    { label: 'mAP @.5', value: '94.2%', icon: BarChart3, color: 'indigo', status: 'Stable' },
  ];

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Database size={18} className="text-emerald-500" />
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Analytics Hub // Metrics V4.0</span>
        </div>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Performance <span className="text-emerald-500 text-glow">Matrix</span>
        </h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Quantitative evaluation of neural classification benchmarks.</p>
      </div>

      {/* ── Metric Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className={`absolute inset-0 bg-${metric.color}-500/5 blur-2xl group-hover:bg-${metric.color}-500/10 transition-all duration-700 rounded-[2rem]`}></div>
            <Card className="border-none bg-white/[0.01] backdrop-blur-xl relative z-10 hover:border-emerald-500/20" hoverEffect={true}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-${metric.color}-500/10 text-${metric.color}-400 flex items-center justify-center border border-${metric.color}-500/20 shadow-inner group-hover:scale-110 transition-transform`}>
                    <metric.icon size={28} />
                  </div>
                  <div className={`px-2 py-1 rounded-md bg-${metric.color}-500/10 border border-${metric.color}-500/20 text-[8px] font-black text-${metric.color}-400 uppercase tracking-widest`}>
                    {metric.status}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{metric.label}</p>
                  <h3 className="text-4xl font-black text-white tracking-tighter uppercase group-hover:text-glow transition-all">{metric.value}</h3>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ── Benchmarking Section ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card
          title="Comparative Accuracy"
          subtitle="Model Delta Analysis vs SOTA"
          icon={TrendingUp}
        >
          <div className="h-[400px] w-full mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modelComparison} layout="vertical" margin={{ left: 40, right: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.03)" />
                <XAxis type="number" domain={[80, 100]} hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#475569', fontSize: 10, fontWeight: 900, textTransform: 'uppercase' }}
                />
                <RechartsTooltip
                  cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.5)' }}
                  itemStyle={{ fontWeight: 900, color: '#10b981', fontSize: '10px' }}
                />
                <Bar dataKey="acc" radius={[0, 10, 10, 0]} barSize={40}>
                  {modelComparison.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,1)]" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ConvNeXt Dominance</span>
            </div>
            <span className="text-xs font-black text-white tracking-tighter uppercase">+1.9% vs DenseNet</span>
          </div>
        </Card>

        {/* Inference Card */}
        <Card
          title="Inference Optimization"
          subtitle="Real-Time Processing Performance"
          icon={Zap}
          className="relative overflow-hidden"
        >
          <div className="space-y-10 mt-8">
            <div className="flex items-center justify-between p-8 rounded-[2.5rem] bg-slate-950 text-white border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:rotate-12 group-hover:scale-125 transition-transform duration-1000">
                <Zap size={140} />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em] mb-2">Cycle Latency</p>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-6xl font-black tracking-tighter uppercase italic">45</h3>
                  <span className="text-xl font-black text-slate-600 uppercase tracking-widest">MS / IMG</span>
                </div>
              </div>
              <div className="h-16 w-16 rounded-[1.5rem] bg-emerald-500/10 flex items-center justify-center text-emerald-400 relative z-10 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                <Activity size={32} className="animate-pulse" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { l: 'CPU Optimization', v: 'OPTIMAL', c: 'emerald' },
                { l: 'Edge Ready', v: '92% SYNC', c: 'blue' }
              ].map((spec, i) => (
                <div key={i} className="p-6 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all group">
                  <h4 className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">{spec.l}</h4>
                  <p className={`text-sm font-black text-white tracking-widest group-hover:text-${spec.c}-400 transition-colors`}>{spec.v}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-amber-500">
              <AlertCircle size={20} className="shrink-0" />
              <p className="text-[10px] font-bold leading-relaxed uppercase tracking-wider">
                Benchmark validated on RTX-Series nodes; edge-tier mobile deployment may introduce 10-15% variance.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Disease-Wise Matrix Visualization */}
      <Card title="Pathogen Specificity" subtitle="Neural Sensitivity Matrix by Class" className="border-none shadow-xl">
        <div className="h-40 w-full mt-8 flex gap-3 items-end">
          {[88, 92, 98, 95, 99, 94, 96, 97].map((val, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end gap-3 group cursor-pointer">
              <div className="relative flex flex-col justify-end h-full">
                <div
                  className={`w-full rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500/30 transition-all duration-500 relative`}
                  style={{ height: `${val}%` }}
                >
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-500/40 to-emerald-500/10 rounded-xl"
                  />
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-emerald-500 rounded-t-lg shadow-[0_0_15px_rgba(16,185,129,1)]" />

                  {/* Tooltip on hover */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-slate-900 border border-white/10 text-[9px] font-black text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {val}%
                  </div>
                </div>
              </div>
              <span className="text-[9px] font-black text-slate-500 text-center uppercase tracking-tighter">NODE-0{i + 1}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Results;
