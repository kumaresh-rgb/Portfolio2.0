import { motion } from "motion/react";
import {
  Zap,
  Cloud,
  Cpu,
  ExternalLink,
  Github,
  Layout,
  Wallet,
  SparkleIcon,
  ShieldAlert,
  ShieldAlertIcon,
} from "lucide-react";

export const Projects = () => {
  const secondaryProjects = [
    {
      icon: Layout, // Better for "Timeline/TODO"
      color: "text-primary",
      glow: "shadow-[0_0_20px_rgba(71,204,255,0.2)]",
      title: "Modern Timeline Based TODO For School/Collage Students",
      desc: "Very Useful for students to manage their tasks and deadlines with a modern timeline-based interface. Boosts productivity and organization for students juggling multiple assignments and projects.",
      tags: [".NET 10", "REACT TypeScript", "Dotnet Package"],
      type: "PRODUCTIVITY",
      licenseLabel: "Commercial License ©2027 @kumaresh",
      isLicensed: true,
    },
    {
      icon: Wallet, // Better for "Finance"
      color: "text-tertiary",
      glow: "shadow-[0_0_20px_rgba(195,146,252,0.2)]",
      title: "Modern Personal Finance Tracker",
      desc: "A sleek personal finance tracker built with React and TypeScript, featuring a modern UI and seamless integration. Helps users effortlessly manage their finances, track expenses, and gain insights into their spending habits.",
      tags: ["Azure Bicep", "Actions"],
      type: "FINTECH", // Changed DEVOPS to FINTECH for better accuracy
      licenseLabel: "Private IP | License ©2027 @kumaresh",
      isLicensed: true,
    },
    {
      icon: SparkleIcon, // Better for "AI Matrimony"
      color: "text-primary",
      glow: "shadow-[0_0_20px_rgba(71,204,255,0.2)]",
      title: "ZEN-C MATRIMONY - NEXT GEN AI Powered Matrimonial Service",
      desc: "Working On really cool project called ZEN-C MATRIMONY, I Was working with Tamil Community Preparing Survey What they Facing Issue in the Current Generation which is an AI-powered matrimonial service built with Python and OpenAI's GPT-4. It offers personalized matchmaking, relationship advice, and a unique user experience for finding love in the digital age.",
      tags: ["Python", "OpenAI"],
      type: "AI",
      licenseLabel: "Private IP | License ©2027 @kumaresh",
      isLicensed: true,
    },
  ];

  return (
    <section className="relative min-h-screen bg-background text-on-surface font-body overflow-hidden">
      {/* ── Background Nebula Decor ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-5%] w-[40%] h-[40%] bg-tertiary/5 blur-[120px] rounded-full" />
      </div>

      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative z-10">
        {/* ── Header Section ── */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl">
            <span className="font-label text-[10px] tracking-[0.3em] text-primary uppercase font-bold text-white">
              Portfolio Showcase
            </span>
          </div>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-[#e6ebf4] mb-6">
            Forging the Future: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#73b1ff] via-[#c392fc] to-[#47ccff]">
              Featured Projects
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
            A curated collection of .NET technology stack solutions built within
            the Microsoft ecosystem.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* ── Main Featured: CodeCoverage Analytics (Open Source) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative rounded-xl overflow-hidden glass-card nebula-glow transition-all hover:border-primary/40">
            <div className="aspect-video w-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                alt="Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            <div className="p-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {[".NET 10", "REACT TypeScript", "Dotnet Package"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-widest font-bold px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary uppercase text-white">
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <h3 className="font-headline text-4xl font-bold mb-4 text-on-surface">
                .Net CodeCoverage Analytics Monitor
              </h3>
              <p className="text-on-surface-variant mb-8 text-lg leading-relaxed max-w-2xl">
                Open Source CLI Based Code Coverage Analytics Monitor built with
                .NET 10, Azure Functions, and React, providing Modern real-time
                DashBoard Analytics insights into code quality and test
                coverage.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold text-sm hover:shadow-[0_0_25px_rgba(71,204,255,0.4)] transition-all">
                  <ExternalLink size={18} /> Visit Doc
                </button>
                {/* Shows Github for Open Source */}
                <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 text-on-surface font-bold text-sm hover:bg-white/5 transition-all">
                  <Github size={18} /> Open Source
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Side: Quick Notes (Licensed) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 group relative rounded-xl overflow-hidden glass-card flex flex-col hover:border-tertiary/40 transition-all">
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800"
                alt="UI"
                className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-1000"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex gap-2 mb-4">
                {["TypeScript", "React"].map((tag) => (
                  <span
                    key={tag}
                    className="font-label text-[10px] font-bold px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/20 text-tertiary uppercase text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 text-on-surface">
                Quick Notes Developer
              </h3>
              <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                Open-source Quick Notes Developer Tool built with React and
                TypeScript featuring a sleek UIImportant Very useful for
                developers who want to quickly jot down ideas, code snippets,
                and project notes without leaving their coding
                environment.Important Very Lite weight and fast, making it an
                essential tool for boosting productivity and keeping all your
                notes in one place.
              </p>
              <div className="mt-auto pt-6 border-t border-white/5">
                <button className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-white font-bold text-xs uppercase tracking-widest transition-all">
                  <ExternalLink size={14} /> Coming Soon
                </button>
                {/* Removed Github Code Button for Licensed Product */}
                <p className="text-center text-[9px] text-white/20 mt-4 italic font-mono">
                  © kumaresh | Licensed Product
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Secondary Grid (Licensed) ── */}
          {secondaryProjects.map((proj, i) => (
            <motion.div
              key={i}
              className="md:col-span-4 p-8 rounded-xl glass-card flex flex-col relative group">
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`p-3 rounded-lg bg-white/5 border border-white/10 ${proj.glow}`}>
                  <proj.icon size={24} className={proj.color} />
                </div>
                <span className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full border border-outline-variant/30 text-on-surface-variant uppercase text-white">
                  {proj.type}
                </span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-2 text-on-surface">
                {proj.title}
              </h4>
              <p className="text-sm text-on-surface-variant mb-6 flex-1 leading-relaxed">
                {proj.desc}
              </p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 py-2 rounded-lg bg-surface-container border border-outline-variant/40 text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all">
                  <ExternalLink size={12} /> Coming Soon
                </a>
                {/* The new "Proprietary" replacement */}
                <div className="flex items-center justify-center gap-1.5 px-3 py-1 bg-white/5 rounded border border-white/10 text-[9px] text-white/40 uppercase font-mono">
                  <ShieldAlertIcon size={10} /> {proj.licenseLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .glass-card {
          background: rgba(30, 39, 47, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(115, 177, 255, 0.1);
        }
        .nebula-glow {
          box-shadow: 0 0 40px rgba(71, 204, 255, 0.05);
        }
      `}</style>
    </section>
  );
};
