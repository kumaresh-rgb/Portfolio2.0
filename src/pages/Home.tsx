// â”€â”€â”€ Solar System hero commented out â€” new HeroSection used instead â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// To restore: uncomment the solar system code below and remove <HeroSection />
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

import { HeroSection } from "./HeroSection";
import {
  Cpu,
  Database,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
/* SOLAR SYSTEM â€” kept for future restore
import { Send, Download } from "lucide-react";
import { Link } from "react-router-dom";
*/
/* Solar system interfaces (kept for restore):
interface PlanetData { id: string; rPct: number; speed: number; startAngle: number; name: string; color: string; }
interface TechIconProps { name: string; color: string; delay: number; }
*/

/* â”€â”€ SOLAR SYSTEM DATA (kept for restore) â”€â”€ */
/* PLANET_DATA, TechIcon, scene useEffects, galaxy canvas useEffect all removed.
   See git history to restore. Now replaced by HeroSection component. */

const Home = () => {
  /* Solar system state removed â€” kept as comment for restore:
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sceneSize, setSceneSize] = useState(0);
  const [imageError, setImageError] = useState(false);
  */

  // SOLAR SYSTEM RUNTIME CODE (PLANET_DATA, TechIcon, canvas useEffects)
  // Removed — restore from git history if needed

  return (
    <>
      {/* â”€â”€ New Modern Hero â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <HeroSection />

      {/*
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
      SOLAR SYSTEM HERO â€” COMMENTED OUT (restore if needed)
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
      <style>{`
        SOLAR SYSTEM CSS REMOVED â€” see HeroSection.tsx
      `}</style>
      <canvas ref={canvasRef} style={{ position:"fixed", top:0, left:0, right:0, bottom:0, zIndex:0, pointerEvents:"none", display:"block" }} />
      <section style={{ minHeight:"100vh", background:"transparent", position:"relative", overflow:"hidden" }}>
        ... solar system JSX ...
      </section>
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
      */}

      {/* Sections B / C / D follow below */}
      <div style={{ position: "relative", zIndex: 1, background: "var(--color-background)" }}>
      <style>{`
        /* Kept only for sections B/C/D below hero */
        .orbit-ring {
          position:absolute; 
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          border-radius:50%;
          border:1px solid rgba(0,150,255,0.09); pointer-events:none;
          animation:ring-breathe 6s ease-in-out infinite;
          width:calc(var(--rp)*1%); height:calc(var(--rp)*1%);
        }
        @keyframes ring-breathe {
          0%,100% { border-color:rgba(0,150,255,0.07); }
          50%      { border-color:rgba(0,200,255,0.18); }
        }

        .aura {
          position:absolute; width:36%; height:36%; border-radius:50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          background:radial-gradient(circle,rgba(0,145,255,0.2) 0%,rgba(0,65,200,0.06) 52%,transparent 72%);
          animation:aura-pulse 3s ease-in-out infinite; z-index:2;
        }
        @keyframes aura-pulse {
          0%,100% { transform: translate(-50%, -50%) scale(1);   opacity:0.8; }
          50%      { transform: translate(-50%, -50%) scale(1.1); opacity:1;   }
        }

        .center {
          position:absolute;
          top: 50%; left: 50%;
          /* Translate vertically by half the photo height to make it the true center */
          transform: translate(-50%, calc(-1 * clamp(50px, 11vmin, 80px)));
          z-index:10;
          display:flex; flex-direction:column; align-items:center;
          gap:clamp(10px,2.5vmin,24px);
          pointer-events: none;
        }
        .center > * { pointer-events: auto; }

        .photo-circle {
          width:clamp(100px, 22vmin, 160px); height:clamp(100px, 22vmin, 160px);
          border-radius:50%; overflow:hidden;
          border:clamp(3px,0.6vmin,5px) solid rgba(0,195,255,0.9);
          box-shadow:
            0 0 0 clamp(4px,1vmin,8px) rgba(0,120,255,0.15),
            0 0 clamp(25px,5vmin,50px) rgba(0,170,255,0.6),
            0 0 clamp(55px,10vmin,110px) rgba(0,95,230,0.3),
            inset 0 0 clamp(14px,3vmin,28px) rgba(0,0,0,0.2);
          animation:photo-glow 3.5s ease-in-out infinite;
          background:linear-gradient(145deg,#0a1929,#1e3a5f);
          flex-shrink: 0;
        }
        @keyframes photo-glow {
          0%,100% { border-color:rgba(0,195,255,0.9); transform:scale(1); }
          50% {
            border-color:rgba(0,240,255,1); transform:scale(1.02);
            box-shadow:
              0 0 0 clamp(6px,1.5vmin,12px) rgba(0,140,255,0.25),
              0 0 clamp(40px,7vmin,78px) rgba(0,225,255,0.8),
              0 0 clamp(80px,14vmin,155px) rgba(0,115,248,0.5),
              inset 0 0 clamp(14px,3vmin,28px) rgba(0,0,0,0.15);
          }
        }

        .nametag { 
  text-align: center; 
  padding: 0 clamp(12px, 3vmin, 32px); 
  margin-top: 4px; 
}

.nametag h1 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(22px, 4.2vmin, 38px); 
  font-weight: 800; 
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-bottom: 8px;
  white-space: nowrap;
  
  /* Updated Multi-Stop Gradient Pattern */
  background: linear-gradient(
    to right, 
    #fff 10%,      /* Bright start */
    #73b1ff 35%,   /* Vibrant Blue */
    #c392fc 65%,   /* Lavender/Purple */
    #ff7e6c 95%    /* Coral/Pink end */
  );
  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  /* Enhanced Glow Effect */
  filter: drop-shadow(0 0 15px rgba(195, 146, 252, 0.4));
}

.nametag p {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(10px, 1.8vmin, 14px); 
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 4px;
}
        .icon-pill-inner {
          display:flex; flex-direction:column; align-items:center;
          gap:clamp(3px,0.8vmin,6px); pointer-events:none;
        }

        .ibox {
          width:clamp(36px,7.5vmin,54px); height:clamp(36px,7.5vmin,54px);
          border-radius:clamp(8px,1.8vmin,14px);
          background:rgba(4,14,42,0.93);
          border:1.5px solid rgba(0,165,255,0.38);
          display:flex; align-items:center; justify-content:center;
          box-shadow:
            0 4px 20px rgba(0,0,0,0.65),
            inset 0 1px 0 rgba(255,255,255,0.07),
            0 0 var(--gsize,14px) var(--gc,rgba(0,130,255,0.25));
          position:relative; overflow:hidden; will-change:box-shadow;
          animation:icon-pulse var(--pd,3s) ease-in-out infinite var(--poff,0s);
        }
        .ibox::before {
          content:''; position:absolute; inset:0; border-radius:inherit;
          background:linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 55%);
        }
        @keyframes icon-pulse {
          0%,100% { box-shadow:0 4px 20px rgba(0,0,0,0.65),inset 0 1px 0 rgba(255,255,255,0.07),0 0 var(--gsize,14px) var(--gc,rgba(0,130,255,0.25)); }
          50%      { box-shadow:0 4px 20px rgba(0,0,0,0.65),inset 0 1px 0 rgba(255,255,255,0.07),0 0 calc(var(--gsize,14px)*2.2) var(--gc,rgba(0,130,255,0.5)); }
        }

        .ilabel {
          font-size:clamp(6px,1.1vmin,9px); color:rgba(170,225,255,0.88);
          font-family:'Rajdhani',sans-serif; font-weight:700;
          letter-spacing:0.6px; text-transform:uppercase; white-space:nowrap;
          text-shadow:0 0 8px rgba(0,175,255,0.75);
        }

        .cta-group {
          display: flex; gap: 15px; margin-top: 25px;
          flex-wrap: wrap; justify-content: center;
          z-index: 20; position: relative;
        }
        .cta-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 28px; border-radius: 50px;
          font-family: 'Rajdhani', sans-serif; font-weight: 700;
          text-transform: uppercase; font-size: 13px;
          letter-spacing: 1.2px; transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer; text-decoration: none;
          position: relative; overflow: hidden;
        }
        
        .cta-primary {
          background: rgba(0, 145, 255, 0.12);
          border: 1.5px solid rgba(0, 195, 255, 0.65);
          color: #fff;
          box-shadow: 0 0 25px rgba(0, 140, 255, 0.25);
        }
        .cta-primary::after {
          content: ''; position: absolute; top: -50%; left: -60%;
          width: 40%; height: 200%; background: linear-gradient(
            to right, transparent, rgba(255, 255, 255, 0.15), transparent
          );
          transform: rotate(35deg); transition: 0.7s;
        }
        .cta-primary:hover::after {
          left: 120%;
        }
        .cta-primary:hover {
          background: rgba(0, 145, 255, 0.25);
          border-color: #fff;
          box-shadow: 0 0 45px rgba(0, 195, 255, 0.6);
          transform: translateY(-2px) scale(1.03);
          text-shadow: 0 0 10px #fff;
        }

        .cta-secondary {
          background: rgba(195, 146, 252, 0.08);
          border: 1.5px solid rgba(195, 146, 252, 0.45);
          color: #d1a9ff;
          box-shadow: 0 0 20px rgba(195, 146, 252, 0.15);
        }
        .cta-secondary:hover {
          background: rgba(195, 146, 252, 0.18);
          border-color: #fff;
          color: #fff;
          box-shadow: 0 0 35px rgba(195, 146, 252, 0.4);
          transform: translateY(-2px) scale(1.03);
        }

        @media (max-width:480px) {
          .orbit-ring { animation:none; border-color:rgba(0,150,255,0.07); }
          .aura        { animation:none; }
          .cta-btn { padding: 10px 20px; font-size: 11px; }
          .cta-group { margin-top: 15px; }
        }
        @media (prefers-reduced-motion:reduce) {
          .orbit-ring,.aura,.photo-circle,.ibox { animation:none !important; }
          .cta-primary::after { display: none; }
        }
      `}</style>
      {/* SOLAR SYSTEM SECTION COMMENTED OUT â€” replaced by HeroSection above */}
      {/* <canvas ref={canvasRef} ... /> */}
      {/* <section style={{ minHeight:"100vh", background:"transparent" }}> */}
      {/* Solar system JSX removed — use HeroSection above */}

      {/* â”€â”€ Section B: The Enterprise Lifecycle â”€â”€ */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Side: Production Grade Card */}
          {/* Removed aspect-video on mobile to allow card to grow with text */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative group cursor-pointer">
              {/* --- THE MISSING OUTSIDE HOVER EFFECT --- */}
              {/* This div sits BEHIND the card and expands outward on hover */}
              <div className="absolute -inset-8 bg-gradient-to-r from-[#47ccff]/20 via-[#a259ff]/25 to-[#47ccff]/20 rounded-[3rem] blur-[50px] opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-105" />

              {/* Main Glass Card */}
              <div className="relative rounded-[2rem] bg-surface-container border border-outline-variant overflow-hidden p-8 md:p-12 min-h-[380px] flex flex-col justify-between transition-all duration-500 group-hover:border-[#47ccff]/40 group-hover:shadow-[0_0_50px_rgba(71,204,255,0.1)]">
                <div className="flex justify-between items-start mb-8">
                  {/* Icon with Neon Pulse */}
                  <div className="p-4 bg-[#47ccff]/10 rounded-2xl border border-[#47ccff]/20 group-hover:bg-[#47ccff]/20 group-hover:border-[#47ccff]/50 transition-all duration-300">
                    <ShieldCheck
                      className="text-[#47ccff] drop-shadow-[0_0_10px_rgba(71,204,255,0.8)]"
                      size={30}
                    />
                  </div>

                  <div className="text-right">
                    <span className="block text-[10px] tracking-[0.3em] text-on-surface-variant uppercase mb-1 font-semibold group-hover:text-white transition-colors">
                      SERVICE STATUS
                    </span>
                    <span className="text-2xl font-mono font-bold text-white group-hover:text-[#47ccff] transition-colors duration-300">
                      Always-On Support
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 italic text-white tracking-tight group-hover:text-[#47ccff] transition-colors duration-300">
                    Enterprise-Grade Solutions.
                  </h3>
                  <p className="text-on-surface-variant text-sm md:text-base leading-relaxed max-w-md group-hover:text-white transition-colors duration-300">
                    Specializing in the implementation of high-performance
                    features within the Microsoft ecosystem, engineered for
                    global scalability and mission-critical reliability.
                  </p>
                </div>

                {/* Internal Accent Glow (Bottom Right) */}
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#a259ff]/15 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Engineering Text */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-white">
              .Net Ecosystem <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#47ccff] via-[#7e93ff] to-[#a259ff] drop-shadow-[0_0_15px_rgba(71,204,255,0.3)]">
                Developer.
              </span>
            </motion.h2>

            <div className="relative space-y-12">
              {/* Animated Vertical Progress Line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-0 top-0 w-px bg-gradient-to-b from-[#47ccff] via-white/20 to-transparent origin-top"
              />

              {[
                {
                  label: "Strategic Discovery",
                  text: "Translating complex business logic into high-precision technical specifications.",
                },
                {
                  label: "Scalable Architecture",
                  text: "Designing robust, future-proof infrastructures using industry-standard design patterns.",
                },
                {
                  label: "Precision Engineering",
                  text: "Delivering clean, strictly-typed code reinforced by comprehensive unit and integration testing.",
                },
              ].map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative pl-8 group cursor-default">
                  <div className="absolute -left-[4.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/10 group-hover:bg-[#47ccff] group-hover:shadow-[0_0_15px_#47ccff] transition-all duration-300 z-10" />

                  <h4 className="font-bold text-lg mb-2 text-white group-hover:text-[#47ccff] transition-all duration-300">
                    {s.label}
                  </h4>

                  <p className="text-sm text-on-surface-variant group-hover:text-white transition-colors duration-300">
                    {s.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Section C: The Data Intelligence Layer (Refined with Transparency) */}
      <section className="py-24 px-8 relative overflow-hidden bg-transparent">
        {/* Realistic Ambient Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#47ccff]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="mb-14 relative">
            <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#47ccff] to-transparent opacity-50 hidden md:block" />

            <span className="text-[#47ccff] font-mono text-[11px] tracking-[0.4em] uppercase font-bold">
              Technical Ecosystem
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold mt-4 text-white tracking-tighter leading-[1.1]">
              Specializing in <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#47ccff] via-[#7e93ff] to-[#a259ff] drop-shadow-[0_0_15px_rgba(71,204,255,0.3)]">
                Full-Stack .NET & Analytics.
              </span>
            </h2>

            <p className="mt-6 text-on-surface-variant text-sm md:text-lg max-w-3xl leading-relaxed font-light tracking-wide">
              Leveraging{" "}
              <span className="text-white font-semibold">
                3+ years of experience
              </span>{" "}
              in{" "}
              <span className="text-white font-medium">
                C#, ASP.NET Core, EF Core, and SQL
              </span>{" "}
              to architect scalable{" "}
              <span className="text-white font-semibold italic border-b border-[#47ccff]/30">
                Microservices
              </span>
              . Specialized in high-scale data modeling with{" "}
              <span className="text-[#47ccff] font-bold drop-shadow-[0_0_8px_rgba(71,204,255,0.4)]">
                Power BI
              </span>{" "}
              and optimized Azure infrastructure.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Power BI & Analytics",
                skills: [
                  "DAX Development",
                  "DAX Optimization",
                  "Report Matrixing",
                ],
                icon: <Zap size={18} />,
                accent: "#f29111",
                glow: "group-hover:shadow-[0_0_20px_rgba(242,145,17,0.2)]",
              },
              {
                title: "High-Perf Querying",
                skills: [
                  "DuckDB & Analytical SQL",
                  "LINQ Optimization",
                  "Schema Evolution",
                ],
                icon: <Database size={18} />,
                accent: "#ffde59",
                glow: "group-hover:shadow-[0_0_20px_rgba(255,222,89,0.2)]",
              },
              {
                title: "Tabular Services",
                skills: [
                  "ADOMD.NET",
                  "Tabular Object Model",
                  "Metadata Management",
                ],
                icon: <Layers size={18} />,
                accent: "#47ccff",
                glow: "group-hover:shadow-[0_0_20px_rgba(71,204,255,0.2)]",
              },
              {
                title: "Data Architecture",
                skills: [
                  "Redis / Azure Cache",
                  "Azure SQL / T-SQL",
                  "Delta Lake / Parquet",
                  "In-Memory Persistence",
                ],
                icon: <ShieldCheck size={18} />,
                accent: "#a259ff",
                glow: "group-hover:shadow-[0_0_20px_rgba(162,89,255,0.2)]",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl bg-surface-container border border-outline-variant hover:border-outline transition-all duration-500 cursor-default ${item.glow}`}>
                {/* Decorative Top Accent */}
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                  style={{ backgroundColor: item.accent }}
                />

                <div
                  className="mb-6 transition-transform duration-500 group-hover:-translate-y-2"
                  style={{ color: item.accent }}>
                  {item.icon}
                </div>

                <h3 className="font-bold text-lg mb-4 text-white group-hover:text-[#47ccff] transition-colors">
                  {item.title}
                </h3>

                <ul className="space-y-3">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[12px] text-on-surface-variant flex items-center gap-2 group-hover:text-white transition-colors">
                      <div
                        className="w-1 h-1 rounded-full opacity-30 group-hover:opacity-100 transition-all"
                        style={{ backgroundColor: item.accent }}
                      />
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <div className="w-8 h-1 bg-white/5 group-hover:w-full group-hover:bg-white/10 transition-all duration-700 rounded-full" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Status Metadata */}
          <div className="mt-12 flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono text-white/40 uppercase tracking-widest">
              Enterprise Focus: Scalable Metadata & Tabular Modeling
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
        </div>
      </section>
      {/* Section D: Performance Engineering - Transparent Glass Update */}
      <section className="py-24 px-8 bg-transparent relative overflow-hidden">
        {/* Soft ambient glow to highlight the content without blocking stars */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#47ccff]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <span className="text-[#a259ff] font-mono text-[10px] tracking-[0.5em] uppercase">
              Performance Engineering
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-white leading-tight">
              Native <br />
              <span className="text-[#47ccff]">Cache Migration.</span>
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
              Successfully migrated the application layer from third-party Redis
              to <strong>Microsoft In-Memory Cache</strong>. This strategic
              shift eliminated external dependency overhead while maintaining
              100% functional parity.
            </p>

            <div className="space-y-4">
              {[
                {
                  label: "Performance Gain",
                  value: "90% Faster",
                  color: "#47ccff",
                },
                { label: "API Cache Uptime", value: "> 92%", color: "#a259ff" },
                {
                  label: "Architecture",
                  value: "Zero-Dependency",
                  color: "#ffde59",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    x: 10,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low border border-outline-variant transition-colors cursor-default">
                  <span className="text-[11px] uppercase tracking-wider text-on-surface-variant">
                    {stat.label}
                  </span>
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: stat.color }}>
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* The Technical Visualization Element - Glass Terminal */}
          <div className="lg:w-2/3 w-full">
            <motion.div
              whileHover={{ rotateX: 2, rotateY: -2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group perspective-1000">
              {/* Window Controls */}
              <div className="absolute top-4 left-6 flex gap-1.5 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/50 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500/50 transition-colors" />
              </div>

              {/* CHANGED: Swapped solid black bg for transparent glass backdrop */}
              <div className="relative overflow-hidden rounded-2xl bg-surface-container border border-outline-variant p-8 pt-14 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Live Migration Logs */}
                  <div className="space-y-3 font-mono text-[10px] leading-tight">
                    <div className="text-[#a259ff]/60">
                      [MIGRATION] Decommissioning Redis Nodes...
                    </div>
                    <div className="text-green-400/80">
                      [SUCCESS] Microsoft.Extensions.Caching initialized.
                    </div>
                    <div className="text-white/40">
                      [METRIC] Response time:
                      <span className="text-[#47ccff]">12ms</span> (was 120ms)
                    </div>
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-[#ffde59]">
                      &gt; IMemoryCache active: 0.0ms lookup latency
                    </motion.div>
                  </div>

                  {/* Grid-Based Memory Matrix - Transparent inner card */}
                  <div className="flex flex-col items-center justify-center p-8 bg-black/20 rounded-2xl border border-white/5 relative overflow-hidden group/viz">
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20 p-4">
                      {[...Array(36)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            backgroundColor:
                              Math.random() > 0.8
                                ? ["#121b25", "#47ccff", "#121b25"]
                                : "#121b25",
                            opacity: [0.2, 0.5, 0.2],
                          }}
                          transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                          }}
                          className="w-full h-full rounded-sm border border-white/5"
                        />
                      ))}
                    </div>

                    <div className="relative z-10 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative">
                        <div className="text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(71,204,255,0.3)]">
                          90<span className="text-xl text-[#47ccff]">%</span>
                        </div>
                        <div className="mt-2 inline-block px-3 py-1 rounded-full bg-surface-container border border-outline-variant">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-[#47ccff] font-bold">
                            Latency Drop
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="mt-10 pt-6 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3 bg-surface-container border border-outline-variant px-3 py-1.5 rounded-full transition-all hover:border-[#47ccff]/30 group">
                    <div className="relative flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute w-2 h-2 rounded-full bg-green-500/50"
                      />
                      <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)] group-hover:bg-[#47ccff] group-hover:shadow-[#47ccff]/60 transition-all" />
                    </div>
                    <span className="text-[10px] text-white/70 font-mono font-medium tracking-[0.15em] uppercase">
                      Status:
                      <span className="text-white group-hover:text-[#47ccff]">
                        Engine_Optimized
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 px-3 py-1.5 bg-[#47ccff]/5 border border-[#47ccff]/20 rounded-lg text-[#47ccff]">
                      <Cpu size={14} className="animate-pulse" />
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em]">
                        STABLE_BUILD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CTA moved to end of SinglePage */}
      </div>{/* end sections B/C/D wrapper */}
    </>
  );
};

export default Home;

