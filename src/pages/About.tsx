import { motion } from "motion/react";
import { Cpu, Cloud, Layers, Monitor, Keyboard, Smartphone, Watch } from "lucide-react";

export const About = () => {
  const techGear = [
    { icon: Monitor,    name: "MSI Modern MD272 Series",   detail: "reddot Winner 2021" },
    { icon: Keyboard,   name: "Rapoo 9010M Combo",         detail: "Multi-Device Wireless (4 Devices)" },
    { icon: Watch,      name: "AmazFit Active 2",          detail: "Accurate Health Tracking" },
    { icon: Smartphone, name: "iPhone 14 & iQOO 12 5G",   detail: "iOS & Android" },
  ];

  const scrollToExperience = () => {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-background overflow-x-hidden">
      <div className="pt-16 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">

        {/* ─── HERO ─── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-outline-variant bg-surface-container max-w-xs mx-auto lg:max-w-none">
              <img
                src="/Tokyo.png"
                alt="Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
            {/* Current focus badge */}
            <div className="absolute -bottom-4 -right-2 lg:-right-4 px-3 py-2 bg-surface-container border border-primary/20 rounded-xl shadow-lg">
              <p className="font-label text-[9px] uppercase tracking-[0.2em] text-primary font-bold mb-0.5">Current Focus</p>
              <p className="font-headline font-bold text-on-surface text-xs">Azure Cloud & Scalable Solutions</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col justify-center mt-8 lg:mt-0">
            <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/5 self-start">
              <span className="font-label text-[10px] tracking-[0.25em] text-primary uppercase font-bold">The Journey</span>
            </div>

            <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface mb-5 leading-tight">
              From Tinkerer to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
                Solutions Developer.
              </span>
            </h1>

            <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed">
              <p>
                My journey evolved from a <span className="text-on-surface font-medium">Standard Developer</span> into
                a specialist mastering the core principles of the <span className="text-on-surface font-medium">.NET Ecosystem</span>.
                What started as a drive to understand complex frameworks has transformed into a career dedicated to engineering{" "}
                <strong className="text-on-surface font-semibold">high-performance, scalable infrastructures.</strong>
              </p>
              <p>
                Today, I specialise in the .NET and Azure landscapes, bridging the gap between{" "}
                <span className="text-on-surface">complex requirements</span> and{" "}
                <span className="text-on-surface">robust, high-availability solutions</span>. I build with a strict
                focus on type-safety, performance optimisation, and enterprise-grade scalability.
              </p>
              <p className="border-l-2 border-secondary pl-4 py-1 italic text-on-surface/80 text-xs">
                "In an AI-driven world, anyone can write code. But engineers who truly stand out are those who master
                the requirements, bridge architectural gaps, and solve the right problems."
              </p>
            </div>
          </motion.div>
        </section>

        {/* ─── STACK PHILOSOPHY ─── */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-headline text-xl font-bold text-on-surface whitespace-nowrap">Core Stack Philosophy</h2>
            <div className="h-px flex-1 bg-outline-variant" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Cpu,    title: ".NET Ecosystem",        accent: "#c392fc", label: "Backend Foundation" },
              { icon: Cloud,  title: "Azure Infrastructure",  accent: "#47ccff", label: "Cloud Canvas" },
              { icon: Layers, title: "Scalable UI",           accent: "#73b1ff", label: "Human Interface" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 bg-surface-container rounded-xl border border-outline-variant hover:border-outline transition-all duration-300">
                <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant mb-4">
                  <item.icon size={18} style={{ color: item.accent }} />
                </div>
                <h3 className="font-headline font-bold text-base text-on-surface mb-1">{item.title}</h3>
                <div className="font-label text-[10px] uppercase tracking-[0.15em] font-bold" style={{ color: item.accent }}>{item.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── STATS ─── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-8 px-6 rounded-xl bg-surface-container border border-outline-variant mb-16">
          <div className="flex gap-10 sm:gap-16">
            {[
              { v: "3+",   l: "Years" },
              { v: "30+",  l: "Features" },
              { v: "200+", l: "Bugs Solved" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-headline text-3xl font-black text-on-surface tracking-tight">{s.v}</div>
                <div className="font-label text-[10px] uppercase tracking-[0.25em] text-on-surface-variant font-bold mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollToExperience}
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-container transition-colors whitespace-nowrap">
            View Career →
          </button>
        </motion.section>

        {/* ─── HARDWARE ENVIRONMENT ─── */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-headline text-xl font-bold text-on-surface whitespace-nowrap">Hardware Environment</h2>
            <div className="h-px flex-1 bg-outline-variant" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {[
                { src: "/worksetup.jpg",  alt: "Main Setup" },
                { src: "/Workstup2.jpg",  alt: "Dev Node" },
              ].map((img) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden border border-outline-variant aspect-square relative group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-base font-bold text-on-surface flex items-center gap-2 mb-4">
                <span className="w-6 h-0.5 bg-primary inline-block" />
                The Engineering Console
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {techGear.map((item, i) => (
                  <div key={i} className="p-3 bg-surface-container border border-outline-variant rounded-lg flex gap-3 items-center">
                    <item.icon className="text-primary flex-shrink-0" size={16} />
                    <div>
                      <div className="text-sm font-semibold text-on-surface">{item.name}</div>
                      <div className="text-[10px] text-on-surface-variant">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
