import React from 'react';
import Card from '../components/Card';
import { Target, Image as ImageIcon, Layers, Cpu } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'MobileNet', accuracy: 88, color: '#94a3b8' },
  { name: 'ResNet50', accuracy: 91, color: '#94a3b8' },
  { name: 'DenseNet', accuracy: 94, color: '#94a3b8' },
  { name: 'ConvNeXt', accuracy: 96, color: '#10b981' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const Dashboard = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants} className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Project Dashboard</h1>
          <p className="text-slate-600 mt-2 font-medium">Overview of the Papaya Leaf Disease Detection Framework</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="border-l-4 border-l-emerald-500 transform hover:scale-105 transition-transform duration-300 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Model Accuracy</p>
                <h3 className="text-4xl font-extrabold text-slate-800">96.0%</h3>
              </div>
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shadow-inner">
                <Target size={28} />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-l-4 border-l-blue-500 transform hover:scale-105 transition-transform duration-300 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Dataset Size</p>
                <h3 className="text-4xl font-extrabold text-slate-800">12,000</h3>
              </div>
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-inner">
                <ImageIcon size={28} />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-l-4 border-l-purple-500 transform hover:scale-105 transition-transform duration-300 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Disease Classes</p>
                <h3 className="text-4xl font-extrabold text-slate-800">8</h3>
              </div>
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shadow-inner">
                <Layers size={28} />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="border-l-4 border-l-amber-500 transform hover:scale-105 transition-transform duration-300 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Architecture</p>
                <h3 className="text-2xl font-extrabold text-slate-800 mt-1">ConvNeXt</h3>
              </div>
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shadow-inner">
                <Cpu size={28} />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <motion.div variants={itemVariants} className="h-full">
          <Card title="Model Performance Comparison" className="h-full shadow-lg">
            <div className="h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 600}} />
                  <YAxis domain={[80, 100]} axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 600}} />
                  <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="accuracy" radius={[6, 6, 0, 0]} maxBarSize={60}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <Card title="Key Project Features" className="h-full shadow-lg">
            <div className="space-y-4 pt-2">
              {[
                { title: 'High Accuracy Classification', desc: 'ConvNeXt model achieves state-of-the-art 96% accuracy on 8 classes.' },
                { title: 'Explainable AI (Grad-CAM)', desc: 'Visualizes the specific regions of the leaf that led to the disease prediction.' },
                { title: 'LLM Integration', desc: 'Provides actionable, context-aware treatment recommendations for farmers.' },
                { title: 'Robust Preprocessing', desc: 'Advanced augmentation and filtering for reliable real-world inference.' }
              ].map((feature, i) => (
                <motion.div 
                  whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
                  key={i} 
                  className="flex gap-4 p-4 rounded-xl transition-colors border border-transparent hover:border-slate-200 cursor-default"
                >
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0 shadow-sm" />
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{feature.title}</h4>
                    <p className="text-sm text-slate-600 mt-1 font-medium">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
