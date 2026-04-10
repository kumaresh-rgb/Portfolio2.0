import { motion } from "motion/react";
import {
  Cpu,
  Cloud,
  Layers,
  Monitor,
  Keyboard,
  Smartphone,
  Watch,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  const techGear = [
    {
      icon: Monitor,
      name: "MSI Modern MD272 Series",
      detail: "reddot Winner 2021",
    },
    {
      icon: Keyboard,
      name: "Rapoo 9010M Combo",
      detail: "Multi-Device Wireless Keypad & Mouse (4 Devices)",
    },
    {
      icon: Watch,
      name: "AmazFit Active 2",
      detail: "Less Wieght, Accurete Health Tracking",
    },
    {
      icon: Smartphone,
      name: "I Phone 14 && IQOO 12 5G",
      detail: "iOS & Android",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-background overflow-x-hidden">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* ─── HERO SECTION ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-outline-variant bg-surface-container shadow-2xl backdrop-blur-sm">
              <img
                src="/Tokyo.png"
                alt="Profile"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 p-5 bg-surface-container/80 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl">
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-1">
                Current Focus
              </p>
              <p className="font-headline font-extrabold text-on-surface">
                Azure Cloud & Scalable Solutions
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl self-start">
              <span className="font-label text-xs tracking-[0.3em] text-primary uppercase font-bold">
                The Journey
              </span>
            </div>

            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
              From Tinkerer to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
                Solutions Developer.
              </span>
            </h1>

            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-2xl font-body">
              <p>
                My journey evolved from a{" "}
                <span className="text-white font-medium">
                  Standard Developer
                </span>{" "}
                into a specialist mastering the core principles of the{" "}
                <span className="text-white font-medium">.NET Ecosystem</span>.
                What started as a drive to understand complex frameworks has
                transformed into a career dedicated to engineering{" "}
                <strong className="text-on-surface font-semibold">
                  high-performance, scalable infrastructures.
                </strong>
              </p>
              <p>
                Today, I specialize in the .NET and Azure landscapes, bridging
                the gap between{" "}
                <span className="text-white">complex requirements</span> and{" "}
                <span className="text-white">
                  robust, high-availability solutions
                </span>
                . I build with a strict focus on type-safety, performance
                optimization, and enterprise-grade scalability.
              </p>
              <p className="border-l-2 border-secondary pl-6 py-2 italic text-on-surface/90">
                "In an AI-driven world, anyone can Write code. But the engineers
                who truly stand out are those who master the requirements,
                bridge the architectural gaps, and solve the right problems.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ─── STACK PHILOSOPHY ─── */}
        <section className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">
              Core Stack Philosophy
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-outline-variant to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: ".NET Ecosystem",
                accent: "#c392fc",
                label: "Backend Foundation",
              },
              {
                icon: Cloud,
                title: "Azure Infrastructure",
                accent: "#47ccff",
                label: "The Cloud Canvas",
              },
              {
                icon: Layers,
                title: "Scalable UI Architecture",
                accent: "#73b1ff",
                label: "The Human Interface",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-surface-container/40 rounded-2xl border border-outline-variant hover:border-on-surface/20 transition-all duration-500 relative overflow-hidden backdrop-blur-md">
                <div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: item.accent }}
                />
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-8">
                  <item.icon size={28} style={{ color: item.accent }} />
                </div>
                <h3 className="font-headline font-extrabold text-2xl text-on-surface mb-4">
                  {item.title}
                </h3>
                <div
                  className="font-label text-[10px] uppercase tracking-[0.2em] font-bold"
                  style={{ color: item.accent }}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── STATS SECTION ─── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-12 py-16 px-12 rounded-3xl bg-surface-container border border-outline-variant relative overflow-hidden mb-40">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div>
              <div className="font-headline text-6xl font-black text-on-surface mb-2 tracking-tighter">
                3+
              </div>
              <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold">
                Professional Years
              </div>
            </div>
            <div>
              <div className="font-headline text-6xl font-black text-on-surface mb-2 tracking-tighter">
                30+
              </div>
              <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold">
                Features Delivered
              </div>
            </div>
            <div>
              <div className="font-headline text-6xl font-black text-on-surface mb-2 tracking-tighter">
                200+
              </div>
              <div className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-bold">
                Bugs Solved
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/experience")}
            className="bg-gradient-to-br from-primary to-primary-container text-white px-10 py-4 rounded-full font-headline font-extrabold text-sm shadow-lg hover:shadow-primary/40 transition-all">
            Review Technical Career
          </motion.button>
        </motion.section>

        {/* ─── COMMAND CENTER SECTION ─── */}
        <section className="pb-20">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface">
              Hardware Environment
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-outline-variant to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-outline-variant aspect-square lg:aspect-video relative group">
                <img
                  src="/worksetup.jpg"
                  alt="Architecture Hub"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ imageRendering: "crisp-edges" as any }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl overflow-hidden border border-outline-variant aspect-square relative group mt-12">
                <img
                  src="/Workstup2.jpg"
                  alt="Development Node"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ imageRendering: "crisp-edges" as any }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </motion.div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-xl font-bold text-on-surface flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary"></span>
                The Engineering Console
              </h3>
              <p className="text-on-surface-variant leading-relaxed font-body">
                A clean space leads to clean code. My environment is optimized
                for deep focus
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techGear.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-surface-container/50 border border-outline-variant rounded-xl flex gap-4 items-center">
                    <item.icon className="text-primary" size={20} />
                    <div>
                      <div className="text-sm font-bold text-on-surface">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-on-surface-variant uppercase tracking-wider">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .grid-lines {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};
