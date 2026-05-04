import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const Card = ({ 
  children, 
  title, 
  subtitle, 
  icon: Icon, 
  className, 
  headerAction,
  noPadding = false,
  glass = true,
  hoverEffect = true,
  gradientBorder = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { y: -8, scale: 1.01, transition: { duration: 0.3 } } : {}}
      className={cn(
        "rounded-[2rem] border transition-all duration-500 overflow-hidden relative group",
        glass ? "glass-card" : "bg-slate-900 shadow-2xl border-white/5",
        gradientBorder && "glow-border",
        hoverEffect && "hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-emerald-500/30",
        className
      )}
    >
      {/* Decorative Corner Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {(title || subtitle || Icon) && (
        <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between relative z-10 bg-white/[0.01]">
          <div className="flex items-center gap-4">
            {Icon && (
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                <Icon size={20} />
              </div>
            )}
            <div>
              {title && (
                <h3 className="font-black text-white tracking-tighter uppercase text-sm group-hover:text-emerald-400 transition-colors">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-1">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          {headerAction && <div className="relative z-10">{headerAction}</div>}
        </div>
      )}
      <div className={cn(noPadding ? "" : "p-8", "relative z-10")}>
        {children}
      </div>

      {/* Technical Scanning Line (Hover Effect) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-[2000ms] ease-in-out" />
    </motion.div>
  );
};

export default Card;
