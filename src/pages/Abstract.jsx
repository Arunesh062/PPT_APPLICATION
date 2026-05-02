import React from 'react';
import Card from '../components/Card';
import { FileText, Cpu, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80 } }
};

const Abstract = () => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Abstract</h1>
        <p className="text-slate-600 mt-2 font-medium">Summary of the research project</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="relative overflow-hidden shadow-xl border-0 ring-1 ring-slate-200">
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-emerald-600"></div>
          <div className="p-4 sm:p-8 prose prose-slate max-w-none text-lg text-slate-700 leading-relaxed font-medium">
            <p className="mb-6">
              Agriculture plays a crucial role in the global economy, and papaya is a highly cultivated fruit known for its nutritional and economic value. However, papaya cultivation is severely threatened by various foliar diseases, leading to significant yield losses if not identified and treated promptly.
            </p>
            <p className="mb-6">
              This project presents a novel <strong className="text-emerald-700 font-extrabold bg-emerald-50 px-2 py-1 rounded">Hybrid Framework</strong> combining the advanced image classification capabilities of <strong className="text-emerald-700 font-extrabold bg-emerald-50 px-2 py-1 rounded">ConvNeXt</strong> with the natural language reasoning of <strong className="text-emerald-700 font-extrabold bg-emerald-50 px-2 py-1 rounded">Large Language Models (LLMs)</strong> to address this challenge. 
            </p>
            <p>
              By leveraging a comprehensive dataset of 12,000 images across 8 distinct disease classes, the ConvNeXt model achieves an outstanding classification <strong className="text-emerald-700 font-extrabold bg-emerald-50 px-2 py-1 rounded">accuracy of 96%</strong>. To ensure interpretability, Grad-CAM is integrated to visualize the decision-making process. Finally, an LLM module translates the diagnostic results into actionable, easy-to-understand treatment recommendations, creating an end-to-end solution for modern precision agriculture.
            </p>
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
          <Card className="text-center p-8 shadow-lg border-t-4 border-t-blue-500 bg-gradient-to-b from-white to-slate-50">
            <div className="w-20 h-20 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Cpu size={40} />
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 mb-3">Detection</h3>
            <p className="text-slate-600 font-medium">State-of-the-art ConvNeXt architecture for accurate disease classification.</p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
          <Card className="text-center p-8 shadow-lg border-t-4 border-t-purple-500 bg-gradient-to-b from-white to-slate-50">
            <div className="w-20 h-20 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <FileText size={40} />
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 mb-3">Explainability</h3>
            <p className="text-slate-600 font-medium">Grad-CAM integration highlights the exact diseased regions on the leaf.</p>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} whileHover={{ y: -5 }}>
          <Card className="text-center p-8 shadow-lg border-t-4 border-t-amber-500 bg-gradient-to-b from-white to-slate-50">
            <div className="w-20 h-20 mx-auto bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <MessageSquare size={40} />
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 mb-3">Recommendation</h3>
            <p className="text-slate-600 font-medium">LLM generates natural language treatment plans and preventive measures.</p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Abstract;
