import { motion } from "framer-motion";
import { Rocket, Zap, Cloud, Cpu, ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const secondaryProjects = [
    {
      icon: Zap,
      color: "#47ccff",
      title: "OmniGateway",
      desc: "High-performance API Gateway built with .NET YARP and Entra ID.",
      tags: [".NET 7", "Redis"],
      type: "API",
    },
    {
      icon: Cloud,
      color: "#73b1ff",
      title: "InfraScale",
      desc: "IaC repository using Bicep templates for zero-downtime Azure deployments.",
      tags: ["Azure Bicep", "Actions"],
      type: "DEVOPS",
    },
    {
      icon: Cpu,
      color: "#c392fc",
      title: "CogniSense ML",
      desc: "Azure OpenAI integration for natural language querying over SQL databases.",
      tags: ["Python", "OpenAI"],
      type: "AI",
    },
  ];

  return (
    <section className="relative min-h-screen bg-[#090f15] text-[#e6ebf4] font-['Inter'] overflow-hidden">
      {/* Background Nebula Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#73b1ff1a] to-transparent pointer-events-none -z-10"></div>

      <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto relative">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#73b1ff33] bg-[#73b1ff0d] backdrop-blur-xl">
            <span className="font-['Space_Grotesk'] text-xs tracking-[0.3em] text-[#73b1ff] uppercase font-bold">
              Portfolio Showcase
            </span>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-7xl font-extrabold tracking-tighter text-[#e6ebf4] mb-6">
            Forging the Future: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#73b1ff] via-[#c392fc] to-[#47ccff]">
              Featured Projects
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#a6abb4] text-lg leading-relaxed">
            A curated selection of cloud-native architectures and fluid
            front-end experiences built with the Microsoft ecosystem.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Featured Project: Nebula Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative rounded-xl overflow-hidden bg-[#1e272f]/40 backdrop-blur-xl border border-[#424850]/20 shadow-2xl transition-all hover:border-[#73b1ff]/40">
            <div className="aspect-video w-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                alt="Data Analytics Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090f15] via-transparent to-transparent"></div>
            </div>
            <div className="p-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {[".NET 8", "AZURE", "REACT"].map((tag) => (
                  <span
                    key={tag}
                    className="font-['Space_Grotesk'] text-[10px] tracking-widest font-bold px-3 py-1 rounded bg-[#73b1ff1a] border border-[#73b1ff33] text-[#73b1ff] uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-4xl font-bold mb-4 text-[#e6ebf4]">
                Nebula Analytics Engine
              </h3>
              <p className="text-[#a6abb4] mb-8 font-['Inter'] text-lg leading-relaxed max-w-2xl">
                Real-time telemetry platform handling millions of events per
                second with predictive microservices.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex items-center gap-2 bg-gradient-to-br from-[#73b1ff] to-[#53a3ff] text-[#002f59] px-8 py-3 rounded-full font-['Plus_Jakarta_Sans'] font-bold text-sm hover:shadow-[0_0_25px_rgba(115,177,255,0.4)] transition-all active:scale-95">
                  <Rocket size={18} /> Live Demo
                </button>
                <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-[#424850]/40 text-[#e6ebf4] font-['Plus_Jakarta_Sans'] font-bold text-sm hover:bg-white/5 transition-all">
                  <Github size={18} /> Source Code
                </button>
              </div>
            </div>
          </motion.div>

          {/* Side Project: Fluent UI Toolkit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 group relative rounded-xl overflow-hidden bg-[#0d141b] border border-[#424850]/20 flex flex-col hover:border-[#c392fc]/40 transition-all">
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800"
                alt="Component Library UI"
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex gap-2 mb-4">
                {["TypeScript", "React"].map((tag) => (
                  <span
                    key={tag}
                    className="font-['Space_Grotesk'] text-[10px] font-bold px-2 py-0.5 rounded bg-[#c392fc1a] border border-[#c392fc33] text-[#c392fc] uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-3 text-[#e6ebf4]">
                Fluent UI Toolkit
              </h3>
              <p className="text-[#a6abb4] mb-6 font-['Inter'] text-sm leading-relaxed">
                Open-source React components designed to mimic Microsoft Fluent
                aesthetics.
              </p>
              <div className="mt-auto space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#73b1ff] text-[#002f59] font-['Plus_Jakarta_Sans'] font-bold text-xs uppercase tracking-widest transition-all hover:bg-[#53a3ff]">
                  <ExternalLink size={14} /> Live Demo
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full border border-[#424850]/40 text-[#e6ebf4] font-['Space_Grotesk'] font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
                  <Github size={14} /> Source Code
                </button>
              </div>
            </div>
          </motion.div>

          {/* Grid Projects */}
          {secondaryProjects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="md:col-span-4 p-8 rounded-xl bg-[#0d141b] border border-[#424850]/10 hover:bg-[#1e272f] transition-all group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div
                  className="p-3 rounded-lg bg-[#1e272f] border border-[#424850]/30"
                  style={{ boxShadow: `0 0 20px ${proj.color}1a` }}>
                  <proj.icon size={24} color={proj.color} />
                </div>
                <span className="text-[10px] font-['Space_Grotesk'] font-bold px-2 py-0.5 rounded-full border border-[#424850]/30 text-[#a6abb4] uppercase">
                  {proj.type}
                </span>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-xl font-bold mb-2 text-[#e6ebf4]">
                {proj.title}
              </h4>
              <p className="text-sm text-[#a6abb4] mb-6 flex-1">{proj.desc}</p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 py-2 rounded-lg bg-[#1e272f] border border-[#424850]/40 text-[10px] font-bold uppercase tracking-widest text-[#73b1ff] hover:bg-[#73b1ff] hover:text-[#002f59] transition-all">
                  <ExternalLink size={12} /> Demo
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 py-2 rounded-lg bg-[#1e272f] border border-[#424850]/40 text-[10px] font-bold uppercase tracking-widest text-[#e6ebf4] hover:bg-white/10 transition-all">
                  <Github size={12} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
