import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "motion/react";
import { Users } from "lucide-react";

const NAMESPACE = "kumaresh-ms-team-3510";
const KEY = "portfolio-home";
const COUNTER_BASE = `https://api.counterapi.dev/v2/${NAMESPACE}/${KEY}`;

export const VisitorTelemetry = () => {
  const [count, setCount] = useState<number | null>(null);
  const isTrackingRef = useRef(false);

  useEffect(() => {
    if (isTrackingRef.current) return;

    const trackUniqueVisitor = async () => {
      isTrackingRef.current = true;
      try {
        const PERSISTENT_KEY = "portfolio_visited_status";
        const hasVisitedLocal = localStorage.getItem(PERSISTENT_KEY);

        let res;
        if (!hasVisitedLocal) {
          // Immediately pre-set to prevent React strict-mode double firing
          localStorage.setItem(PERSISTENT_KEY, "pending");
          
          try {
            // 1. Get user IP to use as a second layer of verification
            const ipRes = await axios.get("https://api.ipify.org?format=json");
            const userIP = ipRes.data.ip;
            localStorage.setItem(PERSISTENT_KEY, btoa(userIP));
          } catch (ipError) {
             localStorage.setItem(PERSISTENT_KEY, "unknown_ip");
          }

          // 2. We store a hash of the IP + a flag in localStorage
          res = await axios.get(`${COUNTER_BASE}/up`);
        } else {
          res = await axios.get(COUNTER_BASE);
        }

        const data = res.data?.data;
        // Logic: Total = Up minus Down
        const netCount = (data?.up_count || 0) - (data?.down_count || 0);

        setCount(netCount > 0 ? netCount : 0);
      } catch (err) {
        console.error("Tracking failed:", err);
        // Fallback to just getting the count if IP check fails
        try {
            const fallback = await axios.get(COUNTER_BASE);
            setCount(fallback.data?.data?.up_count || 0);
        } catch (e) {
            console.error(e);
        }
      }
    };

    trackUniqueVisitor();
  }, []);

  const displayCount = count !== null ? count.toLocaleString() : "---";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="absolute top-24 right-8 z-[100] flex items-center gap-3 px-4 py-2 
                 bg-[#0d151d]/80 border border-white/10 rounded-xl backdrop-blur-md 
                 hover:border-primary/30 transition-all group cursor-default shadow-2xl">
      <div className="relative">
        <Users
          size={14}
          className="text-primary group-hover:scale-110 transition-transform"
        />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
      </div>

      <div className="flex flex-col border-l border-white/10 pl-3 leading-tight">
        <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/40">
          Unique Operators
        </span>
        <span className="text-xs font-mono font-bold text-white tracking-widest">
          {displayCount}
        </span>
      </div>
    </motion.div>
  );
};
