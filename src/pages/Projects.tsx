import { motion } from "motion/react";
import { Rocket, Zap, Cloud, Cpu, ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const secondaryProjects = [
    {
      icon: Zap,
      color: "text-primary", // Use theme color
      glow: "shadow-[0_0_20px_rgba(71,204,255,0.2)]",
      title: "OmniGateway",
      desc: "High-performance API Gateway built with .NET YARP and Entra ID.",
      tags: [".NET 7", "Redis"],
      type: "API",
    },
    {
      icon: Cloud,
      color: "text-tertiary",
      glow: "shadow-[0_0_20px_rgba(195,146,252,0.2)]",
      title: "InfraScale",
      desc: "IaC repository using Bicep templates for zero-downtime Azure deployments.",
      tags: ["Azure Bicep", "Actions"],
      type: "DEVOPS",
    },
    {
      icon: Cpu,
      color: "text-primary",
      glow: "shadow-[0_0_20px_rgba(71,204,255,0.2)]",
      title: "CogniSense ML",
      desc: "Azure OpenAI integration for natural language querying over SQL databases.",
      tags: ["Python", "OpenAI"],
      type: "AI",
    },
  ];

  return (
    <section className="relative min-h-screen bg-background text-on-surface font-body overflow-hidden">
      {/* ── Background Nebula Decor (Matches Skills/Contact) ── */}
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
            <span className="font-label text-[10px] tracking-[0.3em] text-primary uppercase font-bold">
              Portfolio Showcase
            </span>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-7xl font-extrabold tracking-tighter text-[#e6ebf4] mb-6">
            Forging the Future: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#73b1ff] via-[#c392fc] to-[#47ccff]">
              Featured Projects
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
            A curated selection of cloud-native architectures and fluid
            front-end experiences built with the Microsoft ecosystem.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* ── Main Featured Project ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative rounded-xl overflow-hidden glass-card nebula-glow transition-all hover:border-primary/40">
            <div className="aspect-video w-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                alt="Data Analytics Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
            <div className="p-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {[".NET 8", "AZURE", "REACT"].map((tag) => (
                  <span
                    key={tag}
                    className="font-label text-[10px] tracking-widest font-bold px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-headline text-4xl font-bold mb-4 text-on-surface">
                Nebula Analytics Engine
              </h3>
              <p className="text-on-surface-variant mb-8 text-lg leading-relaxed max-w-2xl">
                Real-time telemetry platform handling millions of events per
                second with predictive microservices.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-headline font-bold text-sm hover:shadow-[0_0_25px_rgba(71,204,255,0.4)] transition-all active:scale-95">
                  <Rocket size={18} /> Live Demo
                </button>
                <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-outline-variant/40 text-on-surface font-headline font-bold text-sm hover:bg-white/5 transition-all">
                  <Github size={18} /> Source Code
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Side Project ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 group relative rounded-xl overflow-hidden glass-card flex flex-col hover:border-tertiary/40 transition-all">
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800"
                alt="Component Library UI"
                className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-1000"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex gap-2 mb-4">
                {["TypeScript", "React"].map((tag) => (
                  <span
                    key={tag}
                    className="font-label text-[10px] font-bold px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/20 text-tertiary uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3 text-on-surface">
                Fluent UI Toolkit
              </h3>
              <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
                Open-source React components designed to mimic Microsoft Fluent
                aesthetics.
              </p>
              <div className="mt-auto space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-primary text-white font-headline font-bold text-xs uppercase tracking-widest transition-all">
                  <ExternalLink size={14} /> Live Demo
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-outline-variant/40 text-on-surface font-label font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
                  <Github size={14} /> Source Code
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── Grid Secondary Projects ── */}
          {secondaryProjects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="md:col-span-4 p-8 rounded-xl glass-card hover:bg-surface-container-low transition-all group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`p-3 rounded-lg bg-surface-container border border-outline-variant/30 ${proj.glow}`}>
                  <proj.icon size={24} className={proj.color} />
                </div>
                <span className="text-[10px] font-label font-bold px-2 py-0.5 rounded-full border border-outline-variant/30 text-on-surface-variant uppercase">
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
                  <ExternalLink size={12} /> Demo
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 py-2 rounded-lg bg-surface-container border border-outline-variant/40 text-[10px] font-bold uppercase tracking-widest text-on-surface hover:bg-white/10 transition-all">
                  <Github size={12} /> Code
                </a>
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
