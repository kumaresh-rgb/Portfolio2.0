import { motion } from "motion/react";

export const News = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[100] bg-black/40 backdrop-blur-md border-b border-white/5 py-1.5 overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: [0, -800] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex gap-16 items-center text-[10px] tracking-[0.3em] font-bold text-[#47ccff]">
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
          </div>
        ))}
      </motion.div>
    </div>
  );
};
