import React from 'react';
import Card from '../components/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { Database, Image as ImageIcon, Layers, Zap, ShieldCheck, HardDrive, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Dataset = () => {
  const distribution = [
    { name: 'TRAINING', value: 8400, color: '#10b981' },
    { name: 'VALIDATION', value: 1800, color: '#3b82f6' },
    { name: 'TESTING', value: 1800, color: '#8b5cf6' },
  ];

  const categories = [
    { name: 'ANTHRACNOSE', count: 1500, type: 'FUNGAL' },
    { name: 'BACTERIAL SPOT', count: 1500, type: 'BACTERIAL' },
    { name: 'LEAF CURL', count: 1500, type: 'VIRAL' },
    { name: 'MOSAIC VIRUS', count: 1500, type: 'VIRAL' },
    { name: 'RINGSPOT', count: 1500, type: 'VIRAL' },
    { name: 'HEALTHY', count: 1500, type: 'STABLE' },
    { name: 'MEALYBUGS', count: 1500, type: 'STABLE' },
    { name: 'MITE DISEASES', count: 1500, type: 'STABLE' },
  ];

  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
           <HardDrive size={18} className="text-emerald-500" />
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Central Repository // DB-AXIS</span>
        </div>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Data <span className="text-emerald-500 text-glow">Library</span>
        </h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Structural analysis of the 12,000 unit neural training corpus.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Total Volume', val: '12,000', sub: 'DATA UNITS', icon: Database, color: 'emerald' },
          { label: 'Tensor Dim', val: '224x224', sub: 'RGB MAP', icon: ImageIcon, color: 'blue' },
          { label: 'Pathogen Classes', val: '08', sub: 'VECTORS', icon: Layers, color: 'purple' },
        ].map((item, i) => (
          <Card key={i} className="border-none group overflow-hidden relative" hoverEffect={true}>
            <div className={`absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-150 group-hover:rotate-12 transition-all duration-700`}>
               <item.icon size={100} />
            </div>
            <div className="flex items-center gap-6 relative z-10">
              <div className={`w-16 h-16 rounded-[1.5rem] bg-${item.color}-500/10 text-${item.color}-400 flex items-center justify-center border border-${item.color}-500/20 shadow-inner group-hover:scale-110 transition-transform`}>
                <item.icon size={32} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1.5">{item.label}</p>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-4xl font-black text-white tracking-tighter uppercase">{item.val}</h3>
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.sub}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left: Terminal Style Table */}
        <Card title="Corpus Distribution" subtitle="Class-Wise Categorization" className="lg:col-span-3 border-none bg-slate-950 shadow-2xl" noPadding={true}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/[0.02] border-b border-white/5">
                <tr>
                  <th className="px-8 py-5 font-black text-slate-500 uppercase tracking-widest text-[10px]">Pathogen Node</th>
                  <th className="px-8 py-5 font-black text-slate-500 uppercase tracking-widest text-[10px]">Classification</th>
                  <th className="px-8 py-5 font-black text-slate-500 uppercase tracking-widest text-[10px] text-right">Unit Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.02]">
                {categories.map((cat, i) => (
                  <tr key={i} className="hover:bg-white/[0.03] transition-all group cursor-default">
                    <td className="px-8 py-5 font-black text-white tracking-widest uppercase text-xs group-hover:text-emerald-400 transition-colors">{cat.name}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                         <div className={`h-1 w-1 rounded-full ${cat.type === 'STABLE' ? 'bg-emerald-500' : 'bg-slate-500'}`} />
                         <span className={`text-[9px] font-black uppercase tracking-widest ${
                          cat.type === 'STABLE' ? 'text-emerald-500' : 'text-slate-500'
                        }`}>
                          {cat.type}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 font-black text-slate-400 text-right uppercase tracking-tighter group-hover:text-white transition-colors">{cat.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-white/[0.01] border-t border-white/5 flex items-center justify-between">
             <div className="flex items-center gap-2">
                <Share2 size={12} className="text-slate-500" />
                <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Metadata Integrity: 100%</span>
             </div>
             <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Repository v4.1</span>
          </div>
        </Card>

        {/* Right: Pie Chart Hub */}
        <Card title="Split Protocols" subtitle="Data Partitioning Strategy" className="lg:col-span-2 border-none">
          <div className="h-72 w-full mt-6 relative">
            {/* Background glowing circle */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 blur-3xl">
               <div className="h-40 w-40 rounded-full bg-emerald-500" />
            </div>
            
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={distribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={10}
                  dataKey="value"
                  stroke="none"
                >
                  {distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{backgroundColor: '#0f172a', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)'}}
                  itemStyle={{fontWeight: 900, fontSize: '10px'}}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontSize: '9px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em'}} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 p-6 rounded-[2rem] bg-emerald-500/[0.03] border border-emerald-500/20 flex flex-col gap-4">
             <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Entropy Validation</h4>
             </div>
             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
               Balanced stratification across all pathogen vectors ensured high-fidelity generalization in multi-class diagnostic scenarios.
             </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dataset;
