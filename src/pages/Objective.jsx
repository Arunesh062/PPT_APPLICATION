import React from 'react';
import Card from '../components/Card';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';
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

const Objective = () => {
  const objectives = [
    {
      title: "Build robust ConvNeXt model",
      desc: "Develop and fine-tune a deep learning architecture capable of classifying papaya leaf diseases with high accuracy.",
      color: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200"
    },
    {
      title: "Improve accuracy using preprocessing",
      desc: "Implement advanced image augmentation and preprocessing techniques to ensure model robustness under varying field conditions.",
      color: "text-purple-600",
      bg: "bg-purple-100",
      border: "border-purple-200"
    },
    {
      title: "Integrate LLM for recommendations",
      desc: "Connect the classification output to a Large Language Model to generate human-readable, context-specific treatment plans.",
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      border: "border-emerald-200"
    },
    {
      title: "Enable visual explainability",
      desc: "Apply Grad-CAM to visualize the model's decision-making process, ensuring trust and transparency for the end user.",
      color: "text-amber-600",
      bg: "bg-amber-100",
      border: "border-amber-200"
    }
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
      <motion.div variants={itemVariants} className="mb-10 flex items-center gap-4">
        <div className="p-3 bg-emerald-100 rounded-full text-emerald-600 shadow-sm">
          <Target size={36} />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Project Objectives</h1>
          <p className="text-slate-600 mt-2 font-medium">Key goals and milestones of the research</p>
        </div>
      </motion.div>

      <div className="grid gap-6">
        {objectives.map((obj, idx) => (
          <motion.div variants={itemVariants} key={idx}>
            <Card className={`border-l-8 ${obj.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="flex items-center gap-6 p-2">
                <div className={`p-4 rounded-2xl ${obj.bg} ${obj.color} shrink-0 shadow-inner`}>
                  <CheckCircle2 size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-slate-800">{obj.title}</h3>
                  <p className="text-slate-600 mt-2 text-lg font-medium leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants}>
        <Card className="mt-8 border-dashed border-2 border-slate-300 bg-slate-100 shadow-inner overflow-hidden relative">
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-6">
            <div className="text-center md:text-left">
              <h4 className="font-extrabold text-slate-800 text-xl">Final Deliverable</h4>
              <p className="text-slate-600 font-medium mt-1">A completely integrated, end-to-end static dashboard for demonstration.</p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-emerald-700 font-extrabold bg-white px-6 py-4 rounded-full shadow-lg border border-emerald-100"
            >
              <span>Model</span>
              <ArrowRight size={20} className="text-emerald-400" />
              <span>Explainability</span>
              <ArrowRight size={20} className="text-emerald-400" />
              <span>LLM</span>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Objective;
