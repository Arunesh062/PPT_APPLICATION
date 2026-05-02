import React from 'react';
import Card from '../components/Card';
import { AlertCircle, Sprout, ShieldAlert } from 'lucide-react';
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

const Introduction = () => {
  const diseases = [
    { name: 'Anthracnose', desc: 'Fungal disease causing sunken, water-soaked spots on fruits and leaves.' },
    { name: 'Bacterial Spot', desc: 'Causes angular, water-soaked spots that turn brown or black.' },
    { name: 'Papaya Leaf Curl', desc: 'Viral infection causing severe curling, crinkling, and distortion of leaves.' },
    { name: 'Papaya Mosaic', desc: 'Characterized by mottling, yellowing, and mosaic patterns on leaves.' },
    { name: 'Papaya Ringspot', desc: 'Devastating viral disease causing prominent ring-like spots and mottling.' }
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Introduction</h1>
        <p className="text-slate-600 mt-2 font-medium">The context and importance of the problem</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="h-full">
          <Card title="Importance of Papaya Crop" className="h-full shadow-lg">
            <div className="flex items-start gap-4 mb-8 pt-4">
              <div className="p-4 bg-emerald-100 text-emerald-700 rounded-2xl shadow-sm">
                <Sprout size={32} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-800">Global Significance</h3>
                <p className="text-slate-700 font-medium mt-2 leading-relaxed">
                  Papaya (Carica papaya) is a vital commercial crop cultivated widely in tropical and subtropical regions. It is highly valued for its nutritional content, medicinal properties, and high economic return for farmers.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-4 bg-red-100 text-red-700 rounded-2xl shadow-sm">
                <ShieldAlert size={32} />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-800">The Threat</h3>
                <p className="text-slate-700 font-medium mt-2 leading-relaxed">
                  Papaya crops are highly susceptible to various pathogens including fungi, bacteria, and viruses. Early identification is crucial to prevent massive crop failure and economic losses. Manual inspection is slow, prone to error, and requires expert knowledge that many farmers lack.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="h-full">
          <Card title="Common Papaya Diseases" className="h-full bg-slate-100 border-none shadow-inner">
            <div className="space-y-4 pt-2">
              {diseases.map((disease, idx) => (
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  key={idx} 
                  className="bg-white p-5 rounded-2xl shadow-md border border-slate-200 flex gap-4 items-start"
                >
                  <div className="bg-amber-50 p-2 rounded-full">
                    <AlertCircle className="text-amber-500 shrink-0" size={24} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-lg">{disease.name}</h4>
                    <p className="text-sm text-slate-600 mt-1 font-medium">{disease.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 text-white border-none mt-6 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
            <Sprout size={200} />
          </div>
          <div className="relative z-10 p-4 sm:p-6">
            <h3 className="text-2xl font-extrabold mb-4 text-emerald-400">The Need for AI</h3>
            <p className="text-slate-200 leading-relaxed font-medium text-lg">
              Traditional diagnostic methods rely heavily on agricultural experts, which is time-consuming and often inaccessible to local farmers. By deploying Deep Learning and Generative AI, we can provide immediate, expert-level diagnostics and actionable treatment plans directly to a farmer's smartphone, bridging the gap between advanced agricultural science and grassroots farming.
            </p>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Introduction;
