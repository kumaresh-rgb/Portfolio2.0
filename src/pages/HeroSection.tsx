import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Send,
  Download,
  Github,
  Linkedin,
  ArrowRight,
  Clock,
  Code2,
  Bug,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

const ROLES = [
  ".NET Full Stack Developer",
  "Azure Cloud Integrator",
  "AI Product Integrator",
  "Backend Systems Architect",
];

const TECH_STRIP = [
  ".NET 8",
  "C#",
  "Azure",
  "React",
  "TypeScript",
  "SQL Server",
  "Docker",
  "Kubernetes",
  "Power BI",
  "Redis",
  "EF Core",
  "DevOps",
  "ASP.NET Core",
  "GraphQL",
  "Microservices",
  "SignalR",
];

const STAT_CARDS = [
  {
    icon: Clock,
    value: "3+",
    label: "Years Exp",
    color: "#0078d4",
    pos: { top: -24, left: -80 },
  },
  {
    icon: Code2,
    value: "30+",
    label: "Features",
    color: "#c392fc",
    pos: { bottom: 40, left: -88 },
  },
  {
    icon: Bug,
    value: "200+",
    label: "Bugs Fixed",
    color: "#10b981",
    pos: { top: 50, right: -88 },
  },
  {
    icon: Cpu,
    value: "3",
    label: "AI Products",
    color: "#f59e0b",
    pos: { bottom: -20, right: -60 },
  },
];

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    const current = ROLES[roleIndex];
    let i = 0;
    setDisplayed("");
    setTyping(true);
    const t = setInterval(() => {
      if (i < current.length) {
        setDisplayed(current.slice(0, i + 1));
        i++;
      } else {
        clearInterval(t);
        setTyping(false);
        setTimeout(() => setRoleIndex((p) => (p + 1) % ROLES.length), 2200);
      }
    }, 45);
    return () => clearInterval(t);
  }, [roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const cardBg = "rgba(11, 17, 28, 0.92)";
  const dotGridColor = "rgba(255,255,255,0.06)";
  const edgeFade = "#05070a";
  const nameBg =
    "linear-gradient(135deg, #ffffff 0%, #73b1ff 50%, #c392fc 100%)";

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100vh", background: "var(--color-background)" }}>
      {/* Ambient glows */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: `radial-gradient(ellipse 80% 50% at 50% -5%, rgba(0,120,212,0.18) 0%, transparent 70%)`,
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "30%",
          right: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(195,146,252,0.07) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.6,
          backgroundImage: `radial-gradient(${dotGridColor} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── CONTENT ──────────────────────────────────────── */}
      <div
        className="relative max-w-6xl mx-auto px-5 sm:px-8"
        style={{
          minHeight: "100vh",
          paddingTop: "clamp(80px, 11vh, 96px)",
          paddingBottom: 24,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
        {/* Main grid: text | photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ── LEFT: text ── */}
          <div className="order-2 lg:order-1 flex flex-col items-start">
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-[11px] font-bold tracking-widest text-green-500 uppercase font-label">
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}>
              <span className="block text-sm font-medium text-on-surface-variant mb-1.5 tracking-widest uppercase font-label">
                Hi, I'm
              </span>
              <h1
                className="font-headline font-extrabold leading-tight mb-4"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.4rem)",
                  background: nameBg,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                Kumaresh M.
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="mb-4 h-7 flex items-center">
              <span
                className="font-label font-bold text-base tracking-wide"
                style={{ color: "#47ccff" }}>
                {displayed}
                <span
                  className="inline-block w-0.5 h-5 ml-0.5 align-middle"
                  style={{
                    background: "#47ccff",
                    animation: typing ? "none" : "blink 1s step-end infinite",
                  }}
                />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="text-on-surface-variant text-sm leading-relaxed mb-4 max-w-md">
              Building scalable enterprise applications with{" "}
              <span className="text-on-surface font-semibold">
                .NET, Azure & React
              </span>
              . 3+ yearsof experience shipping enterprise-grade systems and
              AI-powered products that serve 1,000+ users worldwide.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.36 }}
              className="flex items-center gap-2 text-on-surface-variant text-xs mb-6">
              <MapPin size={12} />
              <span>Chennai, Tamil Nadu, India</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6 w-full lg:w-auto">
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:brightness-110 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #0078d4, #005a9e)",
                }}>
                <Send size={13} /> Get in Touch
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold text-on-surface border border-outline-variant hover:border-outline hover:bg-surface-container transition-all">
                View Projects <ArrowRight size={13} />
              </button>
              <a
                href={import.meta.env.VITE_RESUME_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold text-on-surface border border-outline-variant hover:border-outline hover:bg-surface-container transition-all">
                <Download size={13} /> Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.48 }}
              className="flex flex-col sm:flex-row sm:flex-wrap mt-5 lg:mt-2 gap-y-3 gap-x-5">
              <div className="flex items-center gap-5">
                {[
                  {
                    href: "https://github.com/kumaresh-rgb",
                    icon: <Github size={15} />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.linkedin.com/in/mkumaresh/",
                    icon: <Linkedin size={15} />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://x.com/KumareshLovable",
                    icon: <XIcon />,
                    label: "X",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-on-surface-variant hover:text-on-surface transition-colors">
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline text-outline-variant">·</span>
                <Link
                  to="/blog"
                  className="text-xs text-primary hover:underline font-semibold">
                  Engineering Blog →
                </Link>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: photo + stat cards ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="order-1 lg:order-2 hidden lg:flex flex-col items-center gap-6">
            {/* Photo wrapper — smaller on mobile */}
            <div
              className="relative flex items-center justify-center"
              style={{
                width: "clamp(160px, 40vw, 260px)",
                height: "clamp(160px, 40vw, 260px)",
              }}>
              {/* Soft glow — desktop only */}
              <div
                className="hidden lg:block"
                style={{
                  position: "absolute",
                  inset: -16,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, #0078d4, #c392fc, #47ccff, #0078d4)",
                  filter: "blur(32px)",
                  opacity: 0.22,
                }}
              />

              {/* Spinning gradient border — desktop only */}
              <div
                className="hidden lg:block"
                style={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, #0078d4, #c392fc, #47ccff, #0078d4)",
                  animation: "spin 7s linear infinite",
                }}
              />

              {/* Background fill — desktop only */}
              <div
                className="hidden lg:block"
                style={{
                  position: "absolute",
                  inset: -1,
                  borderRadius: "50%",
                  background: "var(--color-background)",
                }}
              />

              {/* Photo — desktop only */}
              <div
                className="hidden lg:block"
                style={{
                  position: "absolute",
                  inset: 5,
                  borderRadius: "50%",
                  overflow: "hidden",
                }}>
                {!imageError ? (
                  <img
                    src="/cropped_circle_image.png"
                    alt="Kumaresh"
                    onError={() => setImageError(true)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 8%",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, #0a1929, #1e3a5f)",
                      fontSize: "clamp(32px, 8vw, 56px)",
                      fontWeight: 800,
                      color: "white",
                    }}>
                    K
                  </div>
                )}
              </div>

              {/* Floating stat cards */}
              {STAT_CARDS.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.7 + i * 0.12,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="flex"
                  style={{
                    position: "absolute",
                    ...card.pos,
                    background: cardBg,
                    border: `1px solid ${card.color}30`,
                    borderRadius: 14,
                    padding: "10px 14px",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: `0 8px 28px ${card.color}18, 0 1px 0 rgba(255,255,255,0.06) inset`,
                    zIndex: 10,
                    minWidth: 120,
                    animation: `float-card ${3.5 + i * 0.4}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: `${card.color}15`,
                      border: `1px solid ${card.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                    <card.icon size={16} style={{ color: card.color }} />
                  </div>
                  {/* Text */}
                  <div>
                    <div
                      style={{
                        fontSize: 17,
                        fontWeight: 800,
                        color: card.color,
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                        lineHeight: 1.1,
                      }}>
                      {card.value}
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        color: "var(--color-on-surface-variant)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginTop: 2,
                      }}>
                      {card.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 lg:mt-14 relative overflow-hidden py-1">
          <div
            style={{
              display: "flex",
              gap: 24,
              animation: "marquee 28s linear infinite",
            }}>
            {[...TECH_STRIP, ...TECH_STRIP].map((tech, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-[10px] sm:text-[11px] font-bold text-on-surface-variant font-label uppercase tracking-widest flex-shrink-0">
                {tech}
              </span>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 40,
              background: `linear-gradient(to right, ${edgeFade}, transparent)`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 40,
              background: `linear-gradient(to left, ${edgeFade}, transparent)`,
              pointerEvents: "none",
            }}
          />
        </motion.div>

        {/* Loved by many */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-y-1.5 gap-x-3 text-center px-2">
          <div
            className="hidden sm:block h-px w-10 flex-shrink-0"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.08))",
            }}
          />
          <span
            className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.18em] uppercase font-label whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.3)" }}>
            Loved by Developers &amp; Professionals worldwide
          </span>
          <span className="text-[11px]" style={{ lineHeight: 1 }}>
            ❤️
          </span>
          <span
            className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.18em] uppercase font-label whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.3)" }}>
            Kumaresh is a Hard Heart Developer
          </span>
          <div
            className="hidden sm:block h-px w-10 flex-shrink-0"
            style={{
              background:
                "linear-gradient(to left, transparent, rgba(255,255,255,0.08))",
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
};
