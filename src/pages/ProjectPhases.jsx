import React from 'react';
import Card from '../components/Card';
import { FileText, Download, ExternalLink, Terminal, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectPhases = () => {
  const pdfs = [
    {
      title: "Phase 1",
      file: "/pdfs/phase-1.pdf",
      desc: "Initial feasibility study and data collection protocols.",
      tag: "ANALYSIS"
    },
    {
      title: "Phase 2",
      file: "/pdfs/phase-2.pdf",
      desc: "Model training results and comparative benchmarking.",
      tag: "TRAINING"
    },
    {
      title: "Phase 3",
      file: "/pdfs/phase-3.pdf", 
      desc: "Final integration, LLM reasoning, and system validation.",
      tag: "INTEGRATION"
    },
  ];

  return (
    <div className="space-y-12 pb-20">
      {/* ── Page Header ── */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Layers size={18} className="text-emerald-500" />
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Project Documentation // Archive</span>
        </div>
        <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">
          Project <span className="text-emerald-500 text-glow">Phase's</span>
        </h1>
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Access and review technical documentation across development cycles.</p>
      </div>

      {/* ── PDF Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {pdfs.map((pdf, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card
              className="group overflow-hidden border-none bg-slate-950/40 backdrop-blur-xl relative"
              hoverEffect={true}
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[60px] pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white tracking-tight uppercase">{pdf.title}</h3>
                      <p className="text-[9px] font-black text-emerald-500/60 uppercase tracking-[0.2em]">{pdf.tag}</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 font-medium leading-relaxed uppercase tracking-wider">
                  {pdf.desc}
                </p>

                {/* PDF Preview Frame */}
                <div className="relative rounded-[1.5rem] overflow-hidden border border-white/5 bg-slate-900 shadow-2xl group-hover:border-emerald-500/30 transition-colors h-48">
                  <iframe
                    src={pdf.file}
                    title={pdf.title}
                    className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                    style={{ border: 'none' }}
                  />
                  {/* Overlay to catch clicks and prevent iframe interaction issues in grid */}
                  <div className="absolute inset-0 bg-transparent" />
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.a
                    href={pdf.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-[10px] tracking-[0.2em] uppercase shadow-lg shadow-blue-500/20 border border-blue-400/30 transition-all"
                  >
                    <ExternalLink size={14} />
                    View Node
                  </motion.a>

                  <motion.a
                    href={pdf.file}
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-[10px] tracking-[0.2em] uppercase shadow-lg shadow-emerald-500/20 border border-emerald-400/30 transition-all"
                  >
                    <Download size={14} />
                    Extract Data
                  </motion.a>
                </div>
              </div>

              {/* Bottom Technical Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
            </Card>
          </motion.div>
        ))}
      </div>

      {/* ── Information Card ── */}
      <Card className="bg-slate-950/60 border-white/5 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="p-4 rounded-3xl bg-amber-500/10 border border-amber-500/20 text-amber-500">
            <Terminal size={32} />
          </div>
          <div className="flex-1 space-y-2">
            <h4 className="text-sm font-black text-white uppercase tracking-widest">Document Security Protocol</h4>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
              All phase documents are hosted on the local public repository. Accessing these files requires an active session within the Diagnostic Node 01 environment.
            </p>
          </div>
          <div className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-[9px] font-black text-slate-400 uppercase tracking-widest">
            Status: Secure
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectPhases;