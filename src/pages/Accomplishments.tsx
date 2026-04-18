import React from "react";
import { motion } from "framer-motion"; // Note: Changed to framer-motion for standard compatibility
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Gamepad2,
  RefreshCw,
  TrendingUp,
  Download,
  ExternalLink,
  Rocket,
  LayoutList,
  Layers,
} from "lucide-react";

// ─── Shared glass card style ──────────────────────────────────────────────────

function GlassCard({
  className = "",
  children,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`glass-card rounded-xl ${className}`}
      style={{
        background: "rgba(10, 15, 20, 0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        ...style,
      }}>
      {children}
    </div>
  );
}

// ─── Section header with divider line ────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-8 mb-12">
      <h2 className="font-headline text-3xl font-bold text-on-surface whitespace-nowrap">
        {children}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-[#73b1ff]/30 to-transparent" />
    </div>
  );
}

// ─── Timeline milestone ───────────────────────────────────────────────────────

interface MilestoneProps {
  year: string;
  title: string;
  desc: string;
  dotColor: string;
  dotGlow: string;
  yearColor: string;
}

function Milestone({
  year,
  title,
  desc,
  dotColor,
  dotGlow,
  yearColor,
}: MilestoneProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-12">
      <div
        className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-[#0a0f14] ${dotColor}`}
        style={{ boxShadow: dotGlow }}
      />
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
        <span className={`font-label font-bold text-sm ${yearColor}`}>
          {year}
        </span>
        <h4 className="text-xl font-bold text-on-surface">{title}</h4>
      </div>
      <p className="text-on-surface-variant leading-relaxed max-w-3xl text-sm">
        {desc}
      </p>
    </motion.div>
  );
}

export const Accomplishments = () => (
  <div className="min-h-screen bg-[#050505] text-white font-body">
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* ── Hero Header ── */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-24 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#c392fc] animate-pulse" />
          <span className="font-label text-xs uppercase tracking-widest text-[#c392fc]">
            Portfolio Milestones
          </span>
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
          Beyond the Code:
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d1fffc] via-[#c392fc] to-[#ff7e6c]">
            Milestones & Recognition
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-white/60 leading-relaxed">
          A curated timeline of technical excellence and architectural mastery
          within the Microsoft ecosystem. This is where high-scale engineering
          meets validation.
        </p>
      </motion.header>

      {/* ── Section 1: Certs Roadmap ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        <GlassCard
          className="md:col-span-2 p-8 flex flex-col justify-between relative overflow-hidden group"
          style={{ boxShadow: "0 0 40px -10px rgba(115,177,255,0.15)" }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#73b1ff]/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#73b1ff] w-10 h-10" />
              <span className="px-3 py-1 bg-[#73b1ff]/20 text-[#73b1ff] text-[10px] font-bold rounded-full uppercase tracking-tighter">
                Verified Expert
              </span>
            </div>
            <h3 className="font-headline text-3xl font-bold mb-6">
              Verified Certifications
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#73b1ff]/30 transition-colors">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg"
                  alt="AZ-900"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="text-[#73b1ff] font-bold text-sm tracking-tighter">
                    AZ-900
                  </div>
                  <div className="text-white font-semibold text-base">
                    Azure Fundamentals
                  </div>
                  <div className="text-white/50 text-xs">
                    Standardized baseline for Microsoft Cloud architectures.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="font-label text-sm flex gap-6">
              <div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">
                  Status
                </div>
                <div className="text-[#73b1ff] font-bold">ACTIVE</div>
              </div>
              <div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">
                  Last Update
                </div>
                <div className="text-white font-bold">JAN 2024</div>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-tertiary text-white px-6 py-2.5 rounded-full font-headline font-bold text-xs tracking-wide transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 group">
              <ExternalLink className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              View Certificate
            </motion.a>
          </div>
        </GlassCard>

        <GlassCard className="p-8 flex flex-col items-start border-[#c392fc]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c392fc]/5 rounded-full blur-3xl -mr-16 -mt-16" />

          <div className="relative z-10 w-full mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#c392fc]/10 flex items-center justify-center mb-6">
              <RefreshCw className="w-7 h-7 text-[#c392fc] animate-spin-slow" />
            </div>
            <h3 className="font-headline text-2xl font-bold mb-2">
              On-going / Future
            </h3>
            <p className="text-white/50 text-xs leading-relaxed">
              Actively mastering advanced specialties in DevOps and Data
              Engineering.
            </p>
          </div>

          <div className="relative z-10 w-full space-y-3">
            {[
              { id: "AZ-204", name: "Developer Associate", sub: "Learning" },
              {
                id: "DP-600",
                name: "Fabric Analytics Engineer",
                sub: "Planning",
              },
              { id: "AZ-400", name: "DevOps Engineer Expert", sub: "Planning" },

              // { id: "AZ-500", name: "Security Engineer", sub: "Planning" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-3 py-2 rounded-lg bg-white/5 border border-white/5 hover:bg-[#c392fc]/5 transition-colors">
                <div>
                  <div className="text-[10px] font-black text-[#c392fc] tracking-tighter leading-none mb-1">
                    {item.id}
                  </div>
                  <div className="text-[12px] font-bold text-white leading-tight">
                    {item.name}
                  </div>
                </div>
                <span
                  className={`text-[9px] font-bold py-1 px-2 rounded-md uppercase ${item.sub === "Learning" ? "bg-[#c392fc]/20 text-[#c392fc] animate-pulse" : "bg-white/5 text-white/40"}`}>
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </motion.section>

      {/* ── Section 2: Author + Gamer ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        <GlassCard className="p-8 flex items-start gap-6">
          <div className="w-14 h-14 rounded-xl bg-[#73b1ff]/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-7 h-7 text-[#73b1ff]" />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold mb-2">
              The End of Feminist (Sci-Fi)
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Author of the techno-thriller series **"THE END OF FEMINIST"**. A
              morally complex exploration of biological engineering, identity,
              and the unintended consequences of technology on humanity's
              future.
            </p>

            {/* Volume details based on your design specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 border-y border-white/10 py-6">
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-black text-[#73b1ff] mb-3">
                  Volume 1: Genesis
                </h4>
                <ul className="space-y-2 text-[11px] text-white/50 font-medium">
                  <li>• Male evolution & invention of the Catalyst</li>
                  <li>• International spread & global disruption</li>
                  <li>• Misuse of biological patents</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-black text-[#c392fc] mb-3">
                  Volume 2: Consequences
                </h4>
                <ul className="space-y-2 text-[11px] text-white/50 font-medium">
                  <li>• WWW III & The Treaty of BWBM</li>
                  <li>• AI Integration & Human Mankind Preservation</li>
                  <li>• The Global Peace Accords (UNIDO)</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary to-tertiary text-white px-6 py-2.5 rounded-full font-headline font-bold text-xs tracking-wide shadow-xl shadow-primary/20 group">
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Vol 1
              </motion.a>

              {/* Second Volume Button added to match your request */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-tertiary to-secondary text-white px-6 py-2.5 rounded-full font-headline font-bold text-xs tracking-wide shadow-xl shadow-tertiary/20 group">
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Vol 2
              </motion.a>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-8 flex items-start gap-6">
          <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
            <Gamepad2 className="w-7 h-7 text-secondary" />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold mb-2">
              Level Up: Gamer Profile
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Exploring high-performance digital storytelling. From competitive
              field-ops to immersive PC narrative epics.
            </p>
            <div className="flex gap-4 flex-wrap mt-6">
              <Link
                to="/gamer"
                className="inline-flex items-center gap-2 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20 px-6 py-2.5 rounded-full font-headline font-bold text-xs tracking-wide transition-all group overflow-hidden relative">
                <span>View Mission Brief</span>
                <Rocket className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </GlassCard>
      </motion.section>
      {/* ── Section 3: Open Source & Research ── */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-24">
        <SectionTitle>Open Source & Ecosystem Research</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Scalable Productivity Engines */}
          <motion.div
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            className="flex gap-6 p-6 rounded-xl bg-white/5 transition-colors duration-300 border border-white/5 hover:border-[#d1fffc]/30 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#d1fffc]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <LayoutList className="text-[#d1fffc] w-8 h-8" />
            </div>
            <div>
              <span className="font-label text-xs text-[#d1fffc] uppercase tracking-widest mb-2 block opacity-80">
                Full-Stack Systems
              </span>
              <h4 className="font-headline text-xl font-bold mb-2 text-white">
                Scalable Productivity Engines
              </h4>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Built a high-concurrency task engine using{" "}
                <span className="text-white font-semibold">ASP.NET Core</span>{" "}
                and <span className="text-white font-semibold">React</span>,
                implementing automated{" "}
                <span className="text-white font-semibold">Azure CI/CD</span>{" "}
                pipelines and optimized state management to handle complex
                academic and professional scheduling workflows.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Advanced Query Orchestration */}
          <motion.div
            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
            className="flex gap-6 p-6 rounded-xl bg-white/5 transition-colors duration-300 border border-white/5 hover:border-[#c392fc]/30 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-[#c392fc]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Layers className="text-[#c392fc] w-8 h-8" />
            </div>
            <div>
              <span className="font-label text-xs text-[#c392fc] uppercase tracking-widest mb-2 block opacity-80">
                Semantic R&D
              </span>
              <h4 className="font-headline text-xl font-bold mb-2 text-white">
                Advanced Query Orchestration
              </h4>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Researched and prototyped{" "}
                <span className="text-white font-semibold">XMLA-based</span>{" "}
                metadata automation, engineering recursive{" "}
                <span className="text-white font-semibold">DAX logic</span> to
                solve the 'Nested Top N' problem within complex enterprise
                matrix hierarchies and high-scale semantic models.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── Section 4: Career Highlights Timeline ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white/[0.02] border border-white/5 rounded-3xl p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-[0.04] pointer-events-none select-none">
          <TrendingUp className="w-48 h-48 text-white" />
        </div>

        <h2 className="font-headline text-3xl font-bold mb-16">
          Career Highlights
        </h2>

        <div className="space-y-12 relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#73b1ff] via-[#c392fc] to-transparent opacity-20" />

          <div className="space-y-12 relative">
            {/* The connecting line matches the full gradient journey */}
            <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#d1fffc] via-[#c392fc] to-[#ff7e6c] opacity-20" />

            <Milestone
              year="2025 — PRESENT"
              title="Product Developer at Lumel Technologies"
              desc="Engineering core XMLA server features and high-performance DAX orchestration for Microsoft Fabric. Optimized semantic model interactions for 5M+ cells, achieving 50% faster filter processing."
              dotColor="bg-[#d1fffc]"
              dotGlow="0 0 15px rgba(209, 255, 252, 0.4)"
              yearColor="text-[#d1fffc]"
            />

            <Milestone
              year="2023 — 2025"
              title="Associate Software Developer at Boston Harbor"
              desc="Led the microservices migration of a monolithic low-code platform. Integrated Roslyn and Monaco Editor to power advanced version control and automated code generation for Quickly.app."
              dotColor="bg-[#c392fc]"
              dotGlow="0 0 15px rgba(195, 146, 252, 0.4)"
              yearColor="text-[#c392fc]"
            />

            <Milestone
              year="CORE PROJECTS"
              title="AI Architect & Full-Stack Engineer"
              desc="Architected ZEN-C MATRIMONY using Python/GPT-4 for AI-driven matchmaking. Developed scalable portfolio engines and financial trackers utilizing the full Microsoft Azure ecosystem."
              dotColor="bg-[#ff7e6c]"
              dotGlow="0 0 15px rgba(255, 126, 108, 0.4)"
              yearColor="text-[#ff7e6c]"
            />
          </div>
        </div>
      </motion.section>
    </main>
  </div>
);
