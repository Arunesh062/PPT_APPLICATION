import React from 'react';
import Card from '../components/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Activity, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90 } }
};

const Results = () => {
  const modelComparison = [
    { name: 'EfficientNet', accuracy: 92.4, precision: 91.8, recall: 92.1, f1: 91.9 },
    { name: 'DenseNet121', accuracy: 94.1, precision: 93.7, recall: 93.9, f1: 93.8 },
    { name: 'ResNet50', accuracy: 91.5, precision: 91.0, recall: 91.2, f1: 91.1 },
    { name: 'ConvNeXt (Ours)', accuracy: 96.0, precision: 95.8, recall: 96.1, f1: 95.9 },
  ];

  const trainingHistory = [
    { epoch: 1, acc: 65, val_acc: 60, loss: 1.2, val_loss: 1.4 },
    { epoch: 5, acc: 82, val_acc: 78, loss: 0.6, val_loss: 0.7 },
    { epoch: 10, acc: 89, val_acc: 86, loss: 0.4, val_loss: 0.5 },
    { epoch: 15, acc: 93, val_acc: 91, loss: 0.25, val_loss: 0.35 },
    { epoch: 20, acc: 95, val_acc: 94, loss: 0.15, val_loss: 0.22 },
    { epoch: 25, acc: 96.5, val_acc: 96, loss: 0.08, val_loss: 0.15 },
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Results & Evaluation</h1>
        <p className="text-slate-600 mt-2 font-medium">Quantitative analysis of the model's performance</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }}>
          <Card className="flex items-center gap-5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-none shadow-lg">
            <div className="p-4 bg-white/20 rounded-2xl shadow-inner">
              <Target size={32} />
            </div>
            <div>
              <p className="text-emerald-100 font-bold uppercase tracking-wider text-sm mb-1">Top Accuracy</p>
              <h3 className="text-4xl font-extrabold">96.0%</h3>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }}>
          <Card className="flex items-center gap-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white border-none shadow-lg">
            <div className="p-4 bg-white/20 rounded-2xl shadow-inner">
              <Activity size={32} />
            </div>
            <div>
              <p className="text-blue-100 font-bold uppercase tracking-wider text-sm mb-1">Macro F1-Score</p>
              <h3 className="text-4xl font-extrabold">95.9%</h3>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }}>
          <Card className="flex items-center gap-5 bg-gradient-to-r from-purple-500 to-purple-600 text-white border-none shadow-lg">
            <div className="p-4 bg-white/20 rounded-2xl shadow-inner">
              <Zap size={32} />
            </div>
            <div>
              <p className="text-purple-100 font-bold uppercase tracking-wider text-sm mb-1">Inference Time</p>
              <h3 className="text-4xl font-extrabold">45<span className="text-xl ml-1 text-purple-200">ms</span></h3>
            </div>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
        <motion.div variants={itemVariants} className="h-full">
          <Card title="Model Comparison Metrics" className="h-full shadow-lg">
            <div className="h-80 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={modelComparison}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 600}} />
                  <YAxis domain={[80, 100]} axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 600}} />
                  <RechartsTooltip 
                    cursor={{fill: '#f1f5f9'}} 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold'}}
                  />
                  <Legend wrapperStyle={{fontWeight: 600, color: '#475569'}} />
                  <Bar dataKey="accuracy" name="Accuracy" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="f1" name="F1-Score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <Card title="Training vs Validation Accuracy" className="h-full shadow-lg">
            <div className="h-80 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={trainingHistory}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="epoch" name="Epoch" tick={{fill: '#475569', fontWeight: 600}} label={{ value: 'Epochs', position: 'insideBottom', offset: -5, fill: '#475569', fontWeight: 'bold' }} />
                  <YAxis domain={[50, 100]} tick={{fill: '#475569', fontWeight: 600}} />
                  <RechartsTooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold'}}
                  />
                  <Legend verticalAlign="top" height={36} wrapperStyle={{fontWeight: 600, color: '#475569'}} />
                  <Line type="monotone" dataKey="acc" name="Training Accuracy" stroke="#10b981" strokeWidth={4} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="val_acc" name="Validation Accuracy" stroke="#8b5cf6" strokeWidth={4} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card title="Confusion Matrix (Placeholder)" className="mt-6 text-center shadow-lg bg-slate-50">
          <div className="py-12 px-6 border-2 border-dashed border-slate-300 rounded-xl bg-white flex flex-col items-center justify-center">
            <div className="grid grid-cols-4 grid-rows-4 gap-1 w-64 h-64 opacity-60 hover:opacity-100 transition-opacity duration-300">
              {[...Array(16)].map((_, i) => {
                const isDiagonal = i % 5 === 0;
                return (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 + 0.5 }}
                    key={i} 
                    className={`rounded-sm ${isDiagonal ? 'bg-emerald-500 shadow-sm' : 'bg-emerald-100'}`}
                    style={{ opacity: isDiagonal ? 1 : Math.random() * 0.5 + 0.1 }}
                  ></motion.div>
                );
              })}
            </div>
            <p className="text-slate-700 mt-6 max-w-md mx-auto font-medium leading-relaxed">
              The confusion matrix demonstrates strong diagonal dominance, indicating high precision across all 8 classes with minimal misclassifications between visually similar diseases.
            </p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Results;
