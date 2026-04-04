import { motion } from "motion/react";

export const News = () => {
  return (
    // Reduced height to h-6 (24px) for a sleeker look
    <div className="fixed top-0 left-0 w-full z-[60] bg-black/40 backdrop-blur-md border-b border-white/5 h-6 flex items-center overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-12 items-center"
        animate={{ x: [0, -800] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex gap-12 items-center text-[9px] tracking-[0.2em] font-medium text-[#47ccff]/80">
            <span>WORK MODE: HYBRID</span>
            <span>•</span>
            <span>EXP: 3+ YEARS</span>
            <span>•</span>
            <span>LOCATION : CHENNAI</span>
            <span>•</span>
            <span>WORK STATUS: OPEN TO WORK</span>
            <span>•</span>
            <span>CURRENT COMPANY : LUMEL</span>
            <span>•</span>
            <span>EXPERT: .NET | AZURE SERVICES</span>
            <span>•</span>
            {/* ... other items */}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
