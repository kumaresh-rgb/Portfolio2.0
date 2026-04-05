import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const COUNTER_BASE =
  "https://api.counterapi.dev/v2/kumaresh-ms-team-3510/portfolio-home";

export const VisitorTelemetry = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const getCount = async () => {
      try {
        const hasVisited = localStorage.getItem("v_session");

        let res;
        if (!hasVisited) {
          res = await axios.get(`${COUNTER_BASE}/up`);
          localStorage.setItem("v_session", "true"); // persists across sessions
        } else {
          res = await axios.get(COUNTER_BASE);
        }

        const finalCount = res.data?.data?.up_count ?? 0;
        setCount(finalCount);
      } catch (err) {
        console.error("Telemetry Error:", err);
        setCount(0);
      }
    };

    getCount();
  }, []);

  const displayCount = count !== null ? count.toLocaleString() : "---";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="absolute top-24 right-8 z-[100] flex items-center gap-3 px-4 py-2 
                 bg-[#0d151d]/80 border border-white/10 rounded-xl backdrop-blur-md 
                 hover:border-brand-primary/30 transition-all group cursor-default shadow-2xl">
      <div className="relative">
        <Users
          size={14}
          className="text-brand-primary group-hover:scale-110 transition-transform"
        />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
      </div>

      <div className="flex flex-col border-l border-white/10 pl-3 leading-tight">
        <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/40">
          Total Visitors
        </span>
        <span className="text-xs font-mono font-bold text-white tracking-widest">
          {displayCount}
        </span>
      </div>
    </motion.div>
  );
};
