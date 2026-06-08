import { motion } from "motion/react";
import { ExternalLink, Github, Shield, Zap, Server, GitBranch } from "lucide-react";

const STATS = [
  { value: "8",    label: "Built-in Tools"  },
  { value: "0",    label: "Paid Services"   },
  { value: "100%", label: "Local-First"     },
  { value: "MIT",  label: "Open Source"     },
];

const TOOLS = [
  "Quick Notes", "MD Studio", "DAX Insight", "DAX Studio",
  "Mermaid Studio", "JSON Toolkit", "Text Compare", "Kanban",
];

const PRINCIPLES = [
  { icon: Github,     color: "#c392fc", title: "Open Source",   desc: "Every line on GitHub — fork it, extend it, submit a PR. No black boxes." },
  { icon: Shield,     color: "#10b981", title: "Privacy First", desc: "Everything stays in your browser. Nothing is uploaded anywhere, ever." },
  { icon: Server,     color: "#0078d4", title: "Self-Hostable", desc: "Run it on your laptop or company VM. One command, zero configuration." },
  { icon: Zap,        color: "#f59e0b", title: "Genuinely Fast", desc: "Browser-local storage means instant reads — no spinners, no round-trips." },
];

export const OpenSourceSection = () => (
  <section
    id="opensource"
    className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden"
    style={{ background: "var(--color-background)" }}>

    {/* Top divider */}
    <div style={{
      position: "absolute", top: 0, left: "5%", right: "5%",
      height: 1, background: "rgba(255,255,255,0.05)",
    }} />

    {/* Ambient glow */}
    <div aria-hidden style={{
      position: "absolute", top: "20%", left: "-10%",
      width: 500, height: 500, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(195,146,252,0.06) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />

    <div className="max-w-6xl mx-auto px-5 sm:px-8">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 lg:mb-14">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border"
          style={{ borderColor: "rgba(195,146,252,0.25)", background: "rgba(195,146,252,0.06)" }}>
          <GitBranch size={11} style={{ color: "#c392fc" }} />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-label" style={{ color: "#c392fc" }}>
            Open Source
          </span>
        </div>
        <h2
          className="font-headline font-extrabold leading-tight mb-3"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", color: "var(--color-on-surface)" }}>
          Tools Built for the .NET Community
        </h2>
        <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--color-on-surface-variant)" }}>
          Free, open-source developer tools that live entirely in your browser — no account, no cloud, no subscriptions.
          Built for developers who care about privacy, speed, and ownership.
        </p>
      </motion.div>

      {/* ── Product Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-2xl border overflow-hidden mb-6"
        style={{ borderColor: "rgba(195,146,252,0.18)", background: "rgba(195,146,252,0.03)" }}>

        <div className="p-6 sm:p-8">

          {/* Title + CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-lg font-headline font-bold" style={{ color: "var(--color-on-surface)" }}>
                  Quick Dev Tools
                </span>
                <span
                  className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider font-label"
                  style={{ color: "#10b981", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
                  Free Forever
                </span>
                <span
                  className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider font-label"
                  style={{ color: "#0078d4", background: "rgba(0,120,212,0.1)", border: "1px solid rgba(0,120,212,0.2)" }}>
                  Local-First
                </span>
              </div>
              <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--color-on-surface-variant)" }}>
                One workspace for everything you build — Notes, DAX, Mermaid, JSON, Diff, Kanban —
                all local-first, all free, all in one tab.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href="https://quickdevtool.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white transition-all hover:brightness-110 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #c392fc, #0078d4)" }}>
                <ExternalLink size={12} /> Open App
              </a>
              <a
                href="https://github.com/kumaresh-rgb/quickdevtool"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all hover:bg-white/10"
                style={{ color: "var(--color-on-surface)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <Github size={12} /> GitHub
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl px-4 py-3 text-center"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div
                  className="text-xl font-extrabold font-headline mb-0.5"
                  style={{ color: "#c392fc" }}>
                  {s.value}
                </div>
                <div
                  className="text-[9px] uppercase tracking-widest font-label font-bold"
                  style={{ color: "var(--color-on-surface-variant)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tools list */}
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.15em] font-bold font-label mb-3"
              style={{ color: "rgba(255,255,255,0.25)" }}>
              Included Tools
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-bold font-label"
                  style={{
                    color: "var(--color-on-surface-variant)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Principles grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRINCIPLES.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 * i }}
            className="rounded-xl p-5"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 flex-shrink-0"
              style={{ background: `${p.color}15`, border: `1px solid ${p.color}25` }}>
              <p.icon size={15} style={{ color: p.color }} />
            </div>
            <div className="text-sm font-bold mb-1.5" style={{ color: "var(--color-on-surface)" }}>
              {p.title}
            </div>
            <div className="text-xs leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
              {p.desc}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
