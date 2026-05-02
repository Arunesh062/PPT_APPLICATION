import React from 'react';
import Card from '../components/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

const Dataset = () => {
  const distribution = [
    { name: 'Training Set (70%)', value: 8400, color: '#10b981' },
    { name: 'Validation Set (15%)', value: 1800, color: '#3b82f6' },
    { name: 'Testing Set (15%)', value: 1800, color: '#8b5cf6' },
  ];

  const classes = [
    { name: 'Anthracnose', count: 1500 },
    { name: 'Bacterial Spot', count: 1450 },
    { name: 'Papaya Leaf Curl', count: 1600 },
    { name: 'Papaya Mosaic', count: 1550 },
    { name: 'Papaya Ringspot', count: 1400 },
    { name: 'Powdery Mildew', count: 1500 },
    { name: 'Brown Spot', count: 1500 },
    { name: 'Healthy', count: 1500 },
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Dataset Information</h1>
        <p className="text-slate-600 mt-2 font-medium">Details about the data used to train the model</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants}>
          <Card className="text-center shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
            <p className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-2">Total Images</p>
            <h2 className="text-5xl font-extrabold text-slate-800">12,000</h2>
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className="text-center shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
            <p className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-2">Disease Classes</p>
            <h2 className="text-5xl font-extrabold text-slate-800">8</h2>
          </Card>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Card className="text-center shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
            <p className="text-slate-500 font-bold uppercase tracking-wider text-sm mb-2">Image Resolution</p>
            <h2 className="text-5xl font-extrabold text-slate-800">224<span className="text-3xl text-slate-400">px</span></h2>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <motion.div variants={itemVariants} className="h-full">
          <Card title="Dataset Split Distribution" className="h-full shadow-lg">
            <div className="h-72 w-full flex items-center justify-center pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {distribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    formatter={(value) => [`${value} images`, 'Count']}
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 'bold'}}
                  />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{fontWeight: 600, color: '#475569'}} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <Card title="Class Distribution" className="h-full shadow-lg">
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-sm text-left text-slate-600">
                <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                  <tr>
                    <th scope="col" className="px-6 py-4 rounded-tl-lg font-bold">Class Name</th>
                    <th scope="col" className="px-6 py-4 font-bold">Category</th>
                    <th scope="col" className="px-6 py-4 rounded-tr-lg text-right font-bold">Count</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((cls, idx) => (
                    <motion.tr 
                      whileHover={{ backgroundColor: '#f8fafc' }}
                      key={idx} 
                      className="bg-white border-b border-slate-100 last:border-0"
                    >
                      <th scope="row" className="px-6 py-3 font-extrabold text-slate-800 whitespace-nowrap">
                        {cls.name}
                      </th>
                      <td className="px-6 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${cls.name === 'Healthy' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                          {cls.name === 'Healthy' ? 'Healthy' : 'Diseased'}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-right font-extrabold text-slate-700">
                        {cls.count}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dataset;
