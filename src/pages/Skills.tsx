import React from "react";
import { motion } from "motion/react";
import {
  Terminal,
  Code2,
  Database,
  Cloud,
  Wrench,
  Layers,
  CheckCircle2,
  Diamond,
  ArrowLeftRight,
  Bug,
  BadgeCheck,
  Coins,
} from "lucide-react";

// ─── Reusable chip styles ────────────────────────────────────────────────────

/** Bordered pill chip — used in Backend & Frontend */
function SkillPill({ label }: { label: string }) {
  return (
    <span className="px-4 py-2 bg-surface-container-low border border-primary/20 rounded-lg font-body text-sm text-on-surface">
      {label}
    </span>
  );
}

/** Subtle rounded chip — used in Cloud secondary tags */
function SubtleChip({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-label text-on-surface-variant border border-outline-variant/20">
      {label}
    </span>
  );
}

// ─── Card wrapper ────────────────────────────────────────────────────────────

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`glass-card nebula-glow rounded-xl p-8 transition-all hover:scale-[1.01] ${className}`}>
      {children}
    </motion.section>
  );
}

// ─── Section header used in Backend / Frontend ───────────────────────────────

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  iconColor = "text-primary",
  iconBorder = "border-primary/20",
}: {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  iconColor?: string;
  iconBorder?: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div
        className={`w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center border ${iconBorder} ${iconColor}`}>
        <Icon className="w-7 h-7" />
      </div>
      <div>
        <h2 className="font-headline text-2xl font-bold text-on-surface">
          {title}
        </h2>
        {subtitle && (
          <p className="font-label text-tertiary text-xs tracking-widest uppercase mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Skills Page ─────────────────────────────────────────────────────────────

export const Skills = () => (
  <div className="min-h-screen bg-background text-on-surface font-body">
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* ── Page Header ── */}
      <motion.header
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-left">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-on-surface">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
            Arsenal
          </span>
        </h1>
        <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          A high-performance stack architected for scalability, reliability, and
          precision. Deeply specialized in the .NET ecosystem and cloud-native
          deployments.
        </p>
      </motion.header>

      {/* ── Bento Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* 1 — Backend Development (6 cols) */}
        <Card className="lg:col-span-6">
          <SectionHeader
            icon={Terminal}
            title="Backend Development"
            subtitle="Logic & Infrastructure"
          />
          <div className="flex flex-wrap gap-2">
            {[
              ".NET 8",
              "C#",
              "ASP.NET Core Web API",
              "Entity Framework Core",
              "LINQ",
              "Microservices",
              "gRPC",
              "SignalR",
            ].map((s) => (
              <SkillPill key={s} label={s} />
            ))}
          </div>
        </Card>

        {/* 2 — Frontend Development (6 cols) */}
        <Card className="lg:col-span-6">
          <SectionHeader
            icon={Code2}
            title="Frontend Development"
            subtitle="Interface & UX"
          />
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Angular",
              "Tailwind CSS",
              "Redux",
              "Framer Motion",
              "Next.js",
              "Vite",
            ].map((s) => (
              <SkillPill key={s} label={s} />
            ))}
          </div>
        </Card>

        {/* 3 — Data & Storage (4 cols) */}
        <Card className="lg:col-span-4">
          <SectionHeader
            icon={Database}
            title="Data & Storage"
            iconColor="text-secondary"
            iconBorder="border-secondary/20"
          />
          <div className="space-y-3">
            {[
              { label: "SQL Server / Azure SQL", icon: "🗄️" },
              { label: "PostgreSQL", icon: "🐘" },
              { label: "Redis / Cosmos DB", icon: "⚡" },
              { label: "MongoDB / Dapper", icon: "🍃" },
            ].map(({ label }) => (
              <div
                key={label}
                className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant/10">
                <span className="text-sm font-body text-on-surface">
                  {label}
                </span>
                <Database className="w-4 h-4 text-secondary opacity-60" />
              </div>
            ))}
          </div>
        </Card>

        {/* 4 — Cloud & Infrastructure (8 cols) */}
        <Card className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center border border-tertiary/20 text-tertiary">
              <Cloud className="w-7 h-7" />
            </div>
            <div>
              <h2 className="font-headline text-2xl font-bold text-on-surface">
                Cloud &amp; Infrastructure
              </h2>
              <p className="font-label text-tertiary text-xs tracking-widest uppercase mt-0.5">
                Provisioning &amp; Scaling
              </p>
            </div>
          </div>

          {/* Platform tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {[
              { name: "Azure", sub: "Primary", color: "text-primary" },
              {
                name: "AWS",
                sub: "Secondary",
                color: "text-on-surface-variant",
              },
              { name: "Docker", sub: "Container", color: "text-tertiary" },
              { name: "K8s", sub: "Orchestrator", color: "text-secondary" },
            ].map(({ name, sub, color }) => (
              <div
                key={name}
                className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 text-center">
                <span className="block font-headline font-bold text-on-surface">
                  {name}
                </span>
                <span
                  className={`text-[10px] uppercase tracking-widest font-label ${color}`}>
                  {sub}
                </span>
              </div>
            ))}
          </div>

          {/* Secondary chips */}
          <div className="flex flex-wrap gap-2">
            {["CI/CD Pipelines", "Terraform", "Serverless Functions"].map(
              (s) => (
                <SubtleChip key={s} label={s} />
              ),
            )}
          </div>
        </Card>

        {/* 5 — DevOps & Tools (5 cols) */}
        <Card className="lg:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center border border-primary/20 text-primary">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="font-headline text-xl font-bold text-on-surface">
              DevOps &amp; Tools
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              "Azure DevOps",
              "GitHub Actions",
              "Git / Jira",
              "Postman",
              "Swagger",
              "SonarQube",
            ].map((tool) => (
              <div
                key={tool}
                className="flex items-center gap-2 text-on-surface-variant">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-body">{tool}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* 6 — Architecture & Patterns (7 cols) */}
        <Card className="lg:col-span-7">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center border border-tertiary/20 text-tertiary">
              <Layers className="w-6 h-6" />
            </div>
            <h2 className="font-headline text-xl font-bold text-on-surface">
              Architecture &amp; Patterns
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Core Philosophy column */}
            <div className="space-y-2">
              <p className="font-label text-[10px] text-outline uppercase tracking-[0.2em] mb-3">
                Core Philosophy
              </p>
              {[
                {
                  label: "Clean Architecture",
                  icon: <Diamond className="w-3 h-3 text-primary" />,
                },
                {
                  label: "CQRS",
                  icon: <ArrowLeftRight className="w-3 h-3 text-primary" />,
                },
                {
                  label: "Domain Driven Design",
                  icon: <Layers className="w-3 h-3 text-primary" />,
                },
              ].map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant/10">
                  <span className="text-sm font-body text-on-surface">
                    {label}
                  </span>
                  {icon}
                </div>
              ))}
            </div>

            {/* Implementation column */}
            <div className="space-y-2">
              <p className="font-label text-[10px] text-outline uppercase tracking-[0.2em] mb-3">
                Implementation
              </p>
              {[
                {
                  label: "SOLID Principles",
                  icon: <BadgeCheck className="w-3 h-3 text-tertiary" />,
                },
                {
                  label: "Design Patterns",
                  icon: <Coins className="w-3 h-3 text-tertiary" />,
                },
                {
                  label: "Unit Testing (xUnit)",
                  icon: <Bug className="w-3 h-3 text-tertiary" />,
                },
              ].map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-outline-variant/10">
                  <span className="text-sm font-body text-on-surface">
                    {label}
                  </span>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
      {/* /grid */}

      {/* ── Certification / Stats Bar ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Badge + text */}
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center p-2 border border-primary/20 flex-shrink-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXo-PUCjw54potFd2yHCD7iprEi4Duz2utcL61L-b2ELLvWgDHGis3b8WXphNmvO_-WqjrUk7ZxwcmNW7-3dCXC_z6O09AN0wsiTyff3M_BjeDScRLOz3zLwP2QGTls06l0p1NSiqL12Kxt92e66HOsPbVFGJLihedOR1WmbYK5314koB1EXx8rieuW5bmcIrAXBQUYVNK9ZqYfk3WossTO2iKhcxskduuP1gFMC_gErwYLyOy4BHt8GCgJc6W20ph5_Bf-kGXDe-8"
              alt="Azure Solutions Architect Certification"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-headline text-xl font-bold text-on-surface">
              Microsoft Certified: Azure Solutions Architect
            </h3>
            <p className="font-body text-on-surface-variant text-sm mt-1">
              Validating expertise in compute, network, storage, and security.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex gap-12 flex-shrink-0">
          <div className="text-center">
            <span className="block font-headline text-3xl font-extrabold text-primary">
              12+
            </span>
            <span className="font-label text-xs text-outline tracking-widest uppercase">
              Proprietary APIs
            </span>
          </div>
          <div className="text-center">
            <span className="block font-headline text-3xl font-extrabold text-tertiary">
              99.9%
            </span>
            <span className="font-label text-xs text-outline tracking-widest uppercase">
              Uptime Target
            </span>
          </div>
        </div>
      </motion.section>
    </main>

    {/* Scoped styles */}
    <style>{`
      .glass-card {
        background: rgba(30, 39, 47, 0.4);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(115, 177, 255, 0.1);
      }
      .nebula-glow {
        box-shadow: 0 0 40px rgba(71, 204, 255, 0.06);
      }
    `}</style>
  </div>
);
