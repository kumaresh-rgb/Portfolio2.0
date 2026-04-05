import React from "react";
import { motion } from "motion/react";
import {
  Award,
  ShieldCheck,
  BookOpen,
  Gamepad2,
  Users,
  MapPin,
  Video,
  Star,
  CheckCircle2,
  RefreshCw,
  TrendingUp,
  Code2,
  Infinity,
  Lock,
  Database,
  Download,
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

// ─── Certification card ───────────────────────────────────────────────────────

interface CertCardProps {
  code: string;
  title: string;
  icon: React.ElementType;
  ongoing?: boolean;
}

function CertCard({ code, title, icon: Icon, ongoing = false }: CertCardProps) {
  if (ongoing) {
    return (
      <div className="p-6 rounded-xl bg-surface-container-low border border-dashed border-tertiary/40 flex flex-col items-center text-center group relative overflow-hidden">
        <div className="absolute top-0 right-0 px-2 py-0.5 bg-tertiary/20 text-[10px] font-label text-tertiary uppercase tracking-tighter rounded-bl-lg">
          On-going
        </div>
        <div className="w-16 h-16 mb-4 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
          <RefreshCw className="w-6 h-6 text-tertiary animate-spin [animation-duration:3s]" />
        </div>
        <span className="font-label text-xs text-outline mb-1">{code}</span>
        <h5 className="font-bold text-sm text-on-surface">{title}</h5>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/10 flex flex-col items-center text-center group hover:border-primary/40 transition-all duration-300">
      <div className="w-16 h-16 mb-4 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <span className="font-label text-xs text-outline mb-1">{code}</span>
      <h5 className="font-bold text-sm text-on-surface">{title}</h5>
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
            Milestones &amp; Recognition
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-on-surface-variant leading-relaxed">
          A curated timeline of technical excellence, architectural mastery, and
          contributions to the Microsoft ecosystem. This is where innovation
          meets validation.
        </p>
      </motion.header>

      {/* ── Section 1: Top Bento — Cert + MVP ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {/* Major Certification — spans 2 cols */}
        <GlassCard
          className="md:col-span-2 p-8 flex flex-col justify-between relative overflow-hidden"
          style={{
            boxShadow: "0 0 40px -10px rgba(115,177,255,0.2)",
          }}>
          {/* Background glow blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />

          <div>
            <Award className="text-primary w-10 h-10 mb-6" />
            <h3 className="font-headline text-3xl font-bold text-on-surface mb-4">
              Solutions Architect Expert
            </h3>
            <p className="text-on-surface-variant text-base leading-relaxed max-w-md">
              Microsoft Certified: Azure Solutions Architect Expert. Validating
              expertise in compute, network, storage, and security.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVzznTk7HTp70Dod_y2G_kBpecaxAxafcRmCAJo9VWgY58wl2_hOH9wR5jcdrcq2a7Afd5Pv-biLbyMo_qt0TAlKIfPyG585t7KkiS_U-RnGheZxEwmbA_bnN90NxNGstqleZD1yNK3b309RhDiJKRbs2qPzKooLD95l57MHGbTsVvF44fcxgb9F7Hjo1K-mb6Tp4lcmtUzh1w3s6LYzmI9Cp7xUsAY8OZH1NhxfM4W_4SV8L_xyzkTAqxjvwJRSAPBe4Iq_0ToAvt"
              alt="Azure Solutions Architect Badge"
              className="w-16 h-16 rounded-lg object-contain"
            />
            <div className="font-label text-sm">
              <div className="text-on-surface font-semibold">
                Issued Jan 2024
              </div>
              <div className="text-tertiary">ID: MS-700-ARCH</div>
            </div>
          </div>
          
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-full font-headline font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-primary/20">
              <Download className="w-4 h-4" />
              Download Certificate
            </motion.button>
          </div>
        </GlassCard>

        {/* MVP Nominee */}
        <GlassCard className="p-8 flex flex-col justify-between border-tertiary/20">
          <div>
            <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-tertiary" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-3">
              MVP Nominee
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Recognized for significant contributions to the .NET community and
              open-source cloud patterns.
            </p>
          </div>
          <div className="pt-6 border-t border-outline-variant/10 mt-6">
            <span className="font-label text-xs text-outline tracking-widest uppercase">
              Community Excellence 2023
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
              Author
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Written 2 technical books focusing on cloud-native patterns and
              Azure architecture for modern enterprises.
            </p>
            <div className="flex gap-2 flex-wrap mb-4">
              <Chip label="Cloud Native" color="text-primary" />
              <Chip label="Azure Mastery" color="text-primary" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-full font-headline font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-primary/20">
              <Download className="w-4 h-4" />
              Download Book
            </motion.button>
          </div>
        </GlassCard>

        {/* Gamer */}
        <GlassCard className="p-8 flex items-start gap-6">
          <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
            <Gamepad2 className="w-7 h-7 text-secondary" />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">
              Gamer
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Passionate about gaming and esports. Active competitor in strategy
              titles and advocate for tech-gaming synergy.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Chip label="Strategy" color="text-secondary" />
              <Chip label="Competitive" color="text-secondary" />
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

      {/* ── Section 4: Verified Certifications ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-24">
        <h2 className="font-headline text-3xl font-bold text-on-surface mb-12">
          Verified Certifications
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <CertCard
            code="AZ-900"
            title="Azure Fundamentals"
            icon={CheckCircle2}
          />
          <CertCard
            code="AZ-204"
            title="Azure Developer Associate"
            icon={Code2}
          />
          <CertCard
            code="AZ-204 (Renew)"
            title="Azure Developer Associate"
            icon={RefreshCw}
            ongoing
          />
          <CertCard code="AZ-500" title="Azure Security Engineer" icon={Lock} />
          <CertCard code="DP-203" title="Azure Data Engineer" icon={Database} />
          <CertCard
            code="AZ-400"
            title="DevOps Engineer Expert"
            icon={Infinity}
          />
        </div>
      </motion.section>

      {/* ── Section 5: Career Highlights Timeline ── */}
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
            title="Principal Cloud Architect at Nexa Systems"
            desc="Led the migration of a legacy retail platform to Azure, reducing operational costs by 40% and increasing deployment frequency from monthly to daily using GitHub Actions and AKS."
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
