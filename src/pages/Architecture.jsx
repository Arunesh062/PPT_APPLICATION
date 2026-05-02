import React from 'react';
import Card from '../components/Card';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90 } }
};

const Architecture = () => {
  const steps = [
    { name: 'Input Image', desc: 'Raw papaya leaf image captured from the field', type: 'input' },
    { name: 'Preprocessing', desc: 'Resizing (224x224), normalization, and augmentation', type: 'process' },
    { name: 'ConvNeXt Backbone', desc: 'Feature extraction using advanced convolutional blocks', type: 'model' },
    { name: 'Classification', desc: 'Softmax layer outputting probabilities for 8 classes', type: 'output' },
    { name: 'LLM Integration', desc: 'Context generation based on predicted disease', type: 'llm' },
    { name: 'Recommendation', desc: 'Final actionable output to the farmer', type: 'final' }
  ];

  const getColor = (type) => {
    switch(type) {
      case 'input': return 'bg-slate-100 border-slate-300 text-slate-800';
      case 'process': return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'model': return 'bg-purple-100 border-purple-300 text-purple-800';
      case 'output': return 'bg-amber-100 border-amber-300 text-amber-800';
      case 'llm': return 'bg-indigo-100 border-indigo-300 text-indigo-800';
      case 'final': return 'bg-emerald-100 border-emerald-300 text-emerald-800';
      default: return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">System Architecture</h1>
        <p className="text-slate-600 mt-2 font-medium">End-to-end pipeline of the hybrid framework</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="h-full">
          <Card title="Pipeline Flowchart" className="flex flex-col items-center justify-center p-8 bg-slate-50 border-2 border-slate-200 border-dashed h-full">
            <div className="w-full max-w-sm space-y-2">
              {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.15, type: 'spring', stiffness: 100 }}
                    className={`p-4 border-2 rounded-xl shadow-md text-center font-medium ${getColor(step.type)}`}
                  >
                    <div className="font-extrabold text-lg">{step.name}</div>
                    <div className="text-sm mt-1 font-medium opacity-90">{step.desc}</div>
                  </motion.div>
                  {idx < steps.length - 1 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.15 + 0.1 }}
                      className="flex justify-center text-slate-400 py-1"
                    >
                      <ArrowDown size={28} />
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-6 flex flex-col h-full">
          <motion.div variants={itemVariants} className="flex-1">
            <Card title="Architecture Components" className="h-full shadow-lg">
              <div className="space-y-8 pt-4">
                <motion.div whileHover={{ x: 5 }} className="transition-transform">
                  <h4 className="text-xl font-extrabold text-slate-800 flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-purple-500 inline-block shadow-sm"></span>
                    ConvNeXt Model
                  </h4>
                  <p className="text-slate-600 mt-2 text-base font-medium leading-relaxed">
                    ConvNeXt modernizes standard ResNets towards the design of Vision Transformers. It leverages larger kernel sizes and inverted bottlenecks, achieving superior performance on image classification tasks while maintaining the simplicity and efficiency of standard ConvNets.
                  </p>
                </motion.div>
                
                <motion.div whileHover={{ x: 5 }} className="border-t border-slate-200 pt-8 transition-transform">
                  <h4 className="text-xl font-extrabold text-slate-800 flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-amber-500 inline-block shadow-sm"></span>
                    Grad-CAM
                  </h4>
                  <p className="text-slate-600 mt-2 text-base font-medium leading-relaxed">
                    Gradient-weighted Class Activation Mapping (Grad-CAM) uses the gradients of any target concept flowing into the final convolutional layer to produce a coarse localization map highlighting the important regions in the image for predicting the concept.
                  </p>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="border-t border-slate-200 pt-8 transition-transform">
                  <h4 className="text-xl font-extrabold text-slate-800 flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-indigo-500 inline-block shadow-sm"></span>
                    LLM (Large Language Model)
                  </h4>
                  <p className="text-slate-600 mt-2 text-base font-medium leading-relaxed">
                    Acts as the reasoning engine post-classification. It takes the predicted disease class and confidence score to generate a tailored response, providing immediate pesticide recommendations and organic treatment alternatives.
                  </p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Architecture;
