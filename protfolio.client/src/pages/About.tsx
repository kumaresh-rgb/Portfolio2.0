import { motion } from "motion/react";
import { Cpu, Cloud, Layers } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#090f15] pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Grid Lines Background */}
      <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none z-0" />

      {/* Nebula Glow Background */}
      <div className="absolute -top-40 -right-40 w-96 h-96 nebula-glow opacity-50 pointer-events-none z-0" />

      {/* Hero Section: The Story Behind the Stack */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32 relative z-10">
        {/* Artistic Avatar Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#73b1ff]/20 to-[#47ccff]/20 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/20 bg-[#0d141b] shadow-2xl">
            <img
              src="/Tokyo.png"
              alt="Developer profile avatar"
              className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090f15] via-transparent to-transparent opacity-60"></div>
          </div>
          {/* Floating Detail Chip */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -right-6 p-4 bg-[#1e272f]/80 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[#47ccff] font-mono" style={{ fontFamily: '"Space Grotesk"' }}>
              Current Focus
            </p>
            <p className="font-bold text-[#e6ebf4]" style={{ fontFamily: '"Plus Jakarta Sans"' }}>
              Cloud Native Architectures
            </p>
          </motion.div>
        </motion.div>

        {/* Bio Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-block mb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#73b1ff] bg-[#73b1ff]/10 px-4 py-1.5 rounded-full border border-[#73b1ff]/20 font-mono" style={{ fontFamily: '"Space Grotesk"' }}>
              The Journey
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-[#e6ebf4]" style={{ fontFamily: '"Plus Jakarta Sans"', letterSpacing: '-0.02em' }}>
            From Tinkerer to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#73b1ff] to-[#47ccff]">
              Architect.
            </span>
          </h1>
          <div className="space-y-6 text-[#94a3b8] text-lg leading-relaxed max-w-2xl" style={{ fontFamily: '"Inter"' }}>
            <p>
              It started with a curiosity for how things work—dismantling software to understand the logic beneath the UI. What began as late-night experimentation with simple scripts evolved into a deep-seated passion for building robust, scalable digital ecosystems.
            </p>
            <p>
              Today, I navigate the vast expanse of the Microsoft ecosystem, bridging the gap between elegant frontend interfaces and high-performance backend infrastructure. My evolution from a tinkerer to a Cloud Architect is driven by one core belief:{" "}
              <span className="text-[#e6ebf4] font-medium italic">
                Technology should solve complex problems with invisible elegance.
              </span>
            </p>
            <p>
              I specialize in crafting distributed systems that don't just function—they thrive. Whether it's optimizing microservices in Azure or refining state management in React, I bring a craftsman's precision to every line of code.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Philosophy: Bento Grid */}
      <section className="mb-32 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#e6ebf4] mb-2" style={{ fontFamily: '"Plus Jakarta Sans"' }}>
            Tech Stack Philosophy
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#73b1ff] to-transparent rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* .NET Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-8 bg-[#0d141b] rounded-md border border-white/15 hover:border-[#c392fc]/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#c392fc]/5 rounded-full blur-3xl group-hover:bg-[#c392fc]/10 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-md bg-[#c392fc]/10 flex items-center justify-center border border-[#c392fc]/20">
                <Cpu className="text-[#c392fc] text-xl" />
              </div>
              <h3 className="font-bold text-xl text-[#e6ebf4]" style={{ fontFamily: '"Plus Jakarta Sans"' }}>
                .NET Ecosystem
              </h3>
            </div>
            <p className="text-[#94a3b8] mb-6 leading-relaxed" style={{ fontFamily: '"Inter"' }}>
              The backbone of reliability. I value .NET for its performance, type safety, and the seamless way it handles complex enterprise logic with C#. It's the engine that powers my most ambitious projects.
            </p>
            <div className="text-xs uppercase tracking-widest text-[#c392fc]/70 font-mono" style={{ fontFamily: '"Space Grotesk"' }}>
              The Powerhouse
            </div>
          </motion.div>

          {/* Azure Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group p-8 bg-[#1e272f] rounded-md border border-white/15 hover:border-[#47ccff]/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#47ccff]/5 rounded-full blur-3xl group-hover:bg-[#47ccff]/10 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-md bg-[#47ccff]/10 flex items-center justify-center border border-[#47ccff]/20">
                <Cloud className="text-[#47ccff] text-xl" />
              </div>
              <h3 className="font-bold text-xl text-[#e6ebf4]" style={{ fontFamily: '"Plus Jakarta Sans"' }}>
                Azure Cloud
              </h3>
            </div>
            <p className="text-[#94a3b8] mb-6 leading-relaxed" style={{ fontFamily: '"Inter"' }}>
              The horizon of scale. Azure provides the playground for global distribution. From Functions to Cosmos DB, it's where my code meets the world, scaling effortlessly to meet any demand.
            </p>
            <div className="text-xs uppercase tracking-widest text-[#47ccff]/70 font-mono" style={{ fontFamily: '"Space Grotesk"' }}>
              The Infinite Canvas
            </div>
          </motion.div>

          {/* React Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group p-8 bg-[#0d141b] rounded-md border border-white/15 hover:border-[#73b1ff]/30 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#73b1ff]/5 rounded-full blur-3xl group-hover:bg-[#73b1ff]/10 transition-colors"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-md bg-[#73b1ff]/10 flex items-center justify-center border border-[#73b1ff]/20">
                <Layers className="text-[#73b1ff] text-xl" />
              </div>
              <h3 className="font-bold text-xl text-[#e6ebf4]" style={{ fontFamily: '"Plus Jakarta Sans"' }}>
                React Architecture
              </h3>
            </div>
            <p className="text-[#94a3b8] mb-6 leading-relaxed" style={{ fontFamily: '"Inter"' }}>
              The medium of interaction. I leverage React to build fluid, high-fidelity user experiences. It brings the precision of component-driven design to the forefront of the digital journey.
            </p>
            <div className="text-xs uppercase tracking-widest text-[#73b1ff]/70 font-mono" style={{ fontFamily: '"Space Grotesk"' }}>
              The Human Interface
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (Asymmetric) */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 px-12 rounded-2xl bg-[#0d141b] border border-white/5 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#73b1ff]/5 via-transparent to-[#c392fc]/5 pointer-events-none"></div>
        <div className="text-center md:text-left">
          <div className="text-5xl font-black text-[#e6ebf4] mb-2" style={{ fontFamily: '"Plus Jakarta Sans"' }}>
            12+
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#64748b] font-mono" style={{ fontFamily: '"Space Grotesk"' }}>
            Years Tinkering
          </div>
        </div>
        <div className="w-px h-12 bg-white/15 hidden md:block"></div>
        <div className="text-center md:text-left">
          <div className="text-5xl font-black text-[#e6ebf4] mb-2" style={{ fontFamily: '"Plus Jakarta Sans"' }}>
            40+
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#64748b] font-mono" style={{ fontFamily: '"Space Grotesk"' }}>
            Cloud Deployments
          </div>
        </div>
        <div className="w-px h-12 bg-white/15 hidden md:block"></div>
        <div className="text-center md:text-left">
          <div className="text-5xl font-black text-[#e6ebf4] mb-2" style={{ fontFamily: '"Plus Jakarta Sans"' }}>
            ∞
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-[#64748b] font-mono" style={{ fontFamily: '"Space Grotesk"' }}>
            Lines of Coffee
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/experience")}
            className="bg-gradient-to-tr from-[#73b1ff] to-[#53a3ff] text-white px-8 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(115,177,255,0.4)] transition-all active:scale-95" style={{ fontFamily: '"Plus Jakarta Sans"' }}>
            View Experience
          </motion.button>
        </div>
      </motion.section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        body, html {
          background-color: #090f15 !important;
        }
        
        .grid-lines {
          background-image: linear-gradient(to right, rgba(66, 72, 80, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(66, 72, 80, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .nebula-glow {
          background: radial-gradient(circle at center, rgba(115, 177, 255, 0.15) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
};
