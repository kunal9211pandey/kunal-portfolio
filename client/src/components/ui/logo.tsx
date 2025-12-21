import { motion } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";

export function Logo({ className }: { className?: string }) {
  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`group flex items-center gap-2 ${className}`}
    >
      <div className="relative flex items-center justify-center w-10 h-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity"
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            borderRadius: ["20%", "50%", "20%"]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative bg-background/80 backdrop-blur-sm border border-primary/20 p-2 rounded-lg group-hover:border-primary/50 transition-colors">
          <BrainCircuit className="w-5 h-5 text-primary group-hover:text-purple-500 transition-colors" />
        </div>
        <motion.div
          className="absolute -top-1 -right-1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        </motion.div>
      </div>
      
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
          Kunal<span className="text-primary">.AI</span>
        </span>
        <span className="text-[0.65rem] text-muted-foreground font-medium tracking-widest uppercase">
          Data Scientist
        </span>
      </div>
    </a>
  );
}
