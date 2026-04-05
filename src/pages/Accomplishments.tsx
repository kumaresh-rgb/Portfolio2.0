import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Gamepad2,
  Users,
  MapPin,
  Video,
  Star,
  RefreshCw,
  TrendingUp,
  Download,
  ExternalLink,
  Rocket,
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
        background: "rgba(30, 39, 47, 0.4)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(112, 118, 126, 0.15)",
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
      <div className="h-px flex-1 bg-gradient-to-r from-outline-variant/30 to-transparent" />
    </div>
  );
}

// ─── Pill chip ────────────────────────────────────────────────────────────────

function Chip({
  label,
  color = "text-primary",
}: {
  label: string;
  color?: string;
}) {
  return (
    <span
      className={`px-3 py-1 bg-surface-container-highest rounded-full text-xs font-label ${color}`}>
      {label}
    </span>
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
      {/* Dot */}
      <div
        className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-background ${dotColor}`}
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

// ─── Main Component ───────────────────────────────────────────────────────────

export const Accomplishments = () => (
  <div className="min-h-screen bg-background text-on-surface font-body">
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* ── Hero Header ── */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-24 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest border border-outline-variant/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="font-label text-xs uppercase tracking-widest text-tertiary">
            Portfolio Milestones
          </span>
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight">
          Beyond the Code:
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
            Milestones & Recognition
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-on-surface-variant leading-relaxed">
          A curated timeline of technical excellence, architectural mastery, and
          contributions to the Microsoft ecosystem. This is where innovation
          meets validation.
        </p>
      </motion.header>

      {/* ── Section 1: Top Bento — Certs Roadmap ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {/* ─── Verified Certifications Stack (Left/Large Card) ─── */}
        <GlassCard
          className="md:col-span-2 p-8 flex flex-col justify-between relative overflow-hidden group"
          style={{
            boxShadow: "0 0 40px -10px rgba(115,177,255,0.2)",
          }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary w-10 h-10" />
              <span className="px-3 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded-full uppercase tracking-tighter">
                Verified Expert
              </span>
            </div>
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-6">
              Verified Certifications
            </h3>

            <div className="space-y-6">
              {/* AZ-900 */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg"
                  alt="AZ-900"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="text-primary font-bold text-sm tracking-tighter">AZ-900</div>
                  <div className="text-on-surface font-semibold text-base">Azure Fundamentals</div>
                  <div className="text-on-surface-variant text-xs">Standardized baseline for Microsoft Cloud architectures.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
             <div className="font-label text-sm flex gap-6">
                <div>
                  <div className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Status</div>
                  <div className="text-primary-light font-bold">ACTIVE</div>
                </div>
                <div>
                  <div className="text-on-surface-variant text-[10px] uppercase tracking-widest mb-1">Last Update</div>
                  <div className="text-white font-bold">JAN 2024</div>
                </div>
             </div>
             <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={import.meta.env.VITE_CERTIFICATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-tertiary text-white px-6 py-2.5 rounded-full font-headline font-bold text-xs tracking-wide transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 group">
                <ExternalLink className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                View Certificate
             </motion.a>
          </div>
        </GlassCard>

        {/* ─── Learning Roadmap / Ongoing (Right/Small Card) ─── */}
        <GlassCard className="p-8 flex flex-col items-start border-tertiary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full blur-3xl -mr-16 -mt-16" />
          
          <div className="relative z-10 w-full mb-6">
            <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6">
              <RefreshCw className="w-7 h-7 text-tertiary animate-spin-slow" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">
              On-going / Future
            </h3>
            <p className="text-on-surface-variant text-xs leading-relaxed">
              Actively mastering advanced specialties and renewing core associate credentials.
            </p>
          </div>

          <div className="relative z-10 w-full space-y-3">
             {[
               { id: "AZ-204", name: "Developer Associate", sub: "Learning" },
               { id: "PL-300", name: "Power BI Data Analyst", sub: "Planning" },
               { id: "DP-600", name: "Fabric Analytics Engineer", sub: "Planning" },
               { id: "AZ-500", name: "Security Engineer", sub: "Planning" },
               { id: "DP-203", name: "Data Engineer", sub: "Planning" },
               { id: "AZ-400", name: "DevOps Engineer Expert", sub: "Planning" }
             ].map((item, idx) => (
               <div key={idx} className="flex justify-between items-center p-3 py-2 rounded-lg bg-surface-container/50 border border-white/5 hover:bg-tertiary/5 transition-colors">
                 <div>
                   <div className="text-[10px] font-black text-tertiary tracking-tighter leading-none mb-1">{item.id}</div>
                   <div className="text-[12px] font-bold text-on-surface leading-tight">{item.name}</div>
                 </div>
                 <span className={`text-[9px] font-bold py-1 px-2 rounded-md uppercase ${item.sub === 'Learning' ? 'bg-tertiary/20 text-tertiary animate-pulse' : 'bg-white/5 text-white/40'}`}>
                   {item.sub}
                 </span>
               </div>
             ))}
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant/10 w-full relative z-10 text-left">
            <span className="font-label text-[10px] text-on-surface/50 tracking-widest uppercase">
              NEXT GOAL: DEVOPS EXPERT
            </span>
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
        {/* Author */}
        <GlassCard className="p-8 flex items-start gap-6">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">
              The End of Feminist (Sci-Fi)
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Author of the techno-thriller series <strong>"THE END OF FEMINIST"</strong>. A morally complex exploration of biological engineering, identity, and the unintended consequences of technology on humanity's future.
            </p>
            <div className="flex gap-2 flex-wrap mb-6">
              <Chip label="Tech Architect" color="text-primary" />
              <Chip label="Sci-Fi Fantasy" color="text-primary" />
              <Chip label="Azure Mastery" color="text-primary" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={import.meta.env.VITE_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary to-tertiary text-white px-6 py-2.5 rounded-full font-headline font-bold text-xs tracking-wide transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 group">
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Vol 1
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={import.meta.env.VITE_BOOK_VOL2_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-tertiary to-secondary text-white px-6 py-2.5 rounded-full font-headline font-bold text-xs tracking-wide transition-all shadow-xl shadow-tertiary/20 hover:shadow-tertiary/40 group">
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Vol 2
              </motion.a>
            </div>
          </div>
        </GlassCard>

        {/* Gamer */}
        <GlassCard className="p-8 flex items-start gap-6">
          <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
            <Gamepad2 className="w-7 h-7 text-secondary" />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">
              Level Up: Gamer Profile
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Exploring the convergence of high-performance engineering and digital storytelling. From competitive FPS field-ops to immersive PC narrative epics.
            </p>
            <div className="flex gap-4 flex-wrap mt-6">
              <Link
                to="/gamer"
                className="inline-flex items-center gap-2 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20 px-6 py-2.5 rounded-full font-headline font-bold text-xs tracking-wide transition-all group overflow-hidden relative">
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}>
                  <span>View Mission Brief</span>
                  <Rocket className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </div>
          </div>
        </GlassCard>
      </motion.section>

      {/* ── Section 3: Speaking Engagements ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-24">
        <SectionTitle>Speaking Engagements</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Talk 1 */}
          <div className="flex gap-6 p-6 rounded-xl hover:bg-surface-container-high transition-all duration-300 border border-transparent hover:border-outline-variant/20">
            <div className="flex-shrink-0 w-24 h-24 rounded-lg bg-surface-container-highest overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC57kZrYDE5y_b4nRIZLFUbSrSysRCKZVViyN6lk-oyVebLbJNpVVD-FpWQqpt7PnFsKgamgpTZnj4QRNsiULqArZ3Ihh0YNdWLyaCLeRmAGzlVX4DyBR7etidVmb2HyiYlYcZttFwrTLDsJacRQr39ILYCjesxN4rNjO8fyAXXR3Xiu3JCEoJO87rzMvB8_79jWmIFPl1SyB-jOD83t6LpqxRJsjXASLT4Hmbi276HiwsvIIGcnbW9XfsiBXdg-d_HctKw7JWRyHPS"
                alt="Microsoft Build Talk"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div>
              <span className="font-label text-xs text-tertiary uppercase tracking-widest mb-2 block">
                Microsoft Build '23
              </span>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-2">
                Architecting for Global Scale on Azure
              </h4>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                A deep dive into multi-region failover and Cosmos DB consistency
                levels for enterprise apps.
              </p>
              <div className="flex items-center gap-4 text-xs font-label text-outline">
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> 500+ Attendees
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Seattle, WA
                </span>
              </div>
            </div>
          </div>

          {/* Talk 2 */}
          <div className="flex gap-6 p-6 rounded-xl hover:bg-surface-container-high transition-all duration-300 border border-transparent hover:border-outline-variant/20">
            <div className="flex-shrink-0 w-24 h-24 rounded-lg bg-surface-container-highest overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRMAHaOEZu4PSkRP8cNJLBvSIP_uS8hKboHmMGWwv61mlqh_LMLtzQIqhhfNOXb1YXSvVSzyKr3N96cZfrPSKiN74vVBM6Uo9hD1PEcUakTyC2ZZ01vXpVbKPWhMJDaiQYlaLtRf4oXrtRqZpFcWB2L6OdeDRAhQITv6_vCim6zadYXTYKkDLuBIucUtYYf5FHFUEx0p6Yf3MtLPVzokYQOO3USznXk0SBx_xoJmaaTLj84pUojouj3kqmhFu6h2a5_l6Ihet29zai"
                alt=".NET Conf Talk"
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div>
              <span className="font-label text-xs text-tertiary uppercase tracking-widest mb-2 block">
                .NET Conf 2023
              </span>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-2">
                Modernizing Legacy Monoliths
              </h4>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">
                Strategies for incremental migration to microservices using Dapr
                and Container Apps.
              </p>
              <div className="flex items-center gap-4 text-xs font-label text-outline">
                <span className="flex items-center gap-1">
                  <Video className="w-3.5 h-3.5" /> Virtual Session
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5" /> Rated 4.9/5
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      {/* ── Section 4: Career Highlights Timeline ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-surface-container-low rounded-3xl p-12 overflow-hidden relative">
        {/* Decorative watermark icon */}
        <div className="absolute top-0 right-0 p-12 opacity-[0.04] pointer-events-none select-none">
          <TrendingUp className="w-48 h-48 text-on-surface" />
        </div>

        <h2 className="font-headline text-3xl font-bold text-on-surface mb-16">
          Career Highlights
        </h2>

        <div className="space-y-12 relative">
          {/* Vertical gradient line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-tertiary to-transparent opacity-20" />

          <Milestone
            year="2022 — PRESENT"
            title="Backend Developer & R&D at Lumel Technologies"
            desc="Leading R&D for Power BI Semantic Models and metadata automation. Architecting high-performance data analytics tools using C#, XMLA endpoints, DAX, and Azure ecosystem for a premier Microsoft ISV partner."
            dotColor="bg-primary"
            dotGlow="0 0 15px rgba(115,177,255,0.5)"
            yearColor="text-primary"
          />

          <Milestone
            year="2020 — 2022"
            title="Open Source Core Contributor"
            desc="Authored 'Azure-Ready-Templates' — a library of Bicep modules used by over 5,000 developers worldwide for standardized cloud provisioning."
            dotColor="bg-tertiary"
            dotGlow="0 0 15px rgba(71,204,255,0.5)"
            yearColor="text-tertiary"
          />

          <Milestone
            year="2018 — 2020"
            title="Senior Full-Stack Developer"
            desc="Architected a real-time analytics dashboard using SignalR and Azure Functions, supporting 50k+ concurrent users during peak sports events."
            dotColor="bg-outline-variant"
            dotGlow="none"
            yearColor="text-outline"
          />
        </div>
      </motion.section>
    </main>
  </div>
);
