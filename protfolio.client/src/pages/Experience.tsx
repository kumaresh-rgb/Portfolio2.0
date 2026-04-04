import { motion } from "motion/react";
import {
  Cloud,
  Database,
  Terminal,
  Code2,
  LayoutGrid,
  Network,
  HardDrive,
  Rocket,
  Gauge,
  ShieldCheck,
  Zap,
  BarChart2,
  Layers,
  Cpu,
  CheckCircle2,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BulletItem {
  icon: React.ElementType;
  text: React.ReactNode;
}

interface ExperienceEntry {
  year: string;
  role: string;
  company: string;
  cardTitle: string;
  icons: { icon: React.ElementType; color: string; border: string }[];
  bullets: BulletItem[];
  accentColor: string; // Tailwind text color for year / company
  glowClass: string; // CSS class for card glow
  reversed: boolean; // card left, meta right
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXPERIENCES: ExperienceEntry[] = [
  {
    year: "2022 — PRESENT",
    role: "Senior Cloud Architect",
    company: "Nebula Systems Corp",
    cardTitle: "Enterprise Data Orchestration",
    accentColor: "text-primary",
    glowClass: "glow-azure",
    reversed: false,
    icons: [
      { icon: Cloud, color: "text-primary", border: "border-primary/20" },
      { icon: Database, color: "text-tertiary", border: "border-tertiary/20" },
      {
        icon: Terminal,
        color: "text-secondary",
        border: "border-secondary/20",
      },
    ],
    bullets: [
      {
        icon: Rocket,
        text: (
          <>
            Reduced deployment time by 60% with{" "}
            <strong className="text-on-surface font-semibold">
              Azure Container Apps
            </strong>{" "}
            and GitHub Actions.
          </>
        ),
      },
      {
        icon: Gauge,
        text: (
          <>
            Engineered a high-throughput API gateway processing 50k+
            requests/sec using{" "}
            <strong className="text-on-surface font-semibold">.NET 8</strong>.
          </>
        ),
      },
      {
        icon: ShieldCheck,
        text: (
          <>
            Implemented zero-trust security architecture across multi-region{" "}
            <strong className="text-on-surface font-semibold">Azure SQL</strong>{" "}
            clusters.
          </>
        ),
      },
    ],
  },
  {
    year: "2019 — 2022",
    role: "Full Stack Developer",
    company: "Lumina Digital Finance",
    cardTitle: "FinTech Microservices Migration",
    accentColor: "text-secondary",
    glowClass: "glow-secondary",
    reversed: true, // card on LEFT, meta on RIGHT
    icons: [
      { icon: Code2, color: "text-secondary", border: "border-secondary/20" },
      { icon: LayoutGrid, color: "text-primary", border: "border-primary/20" },
    ],
    bullets: [
      {
        icon: Zap,
        text: (
          <>
            Led migration from monolithic architecture to{" "}
            <strong className="text-on-surface font-semibold">
              Dapr-based microservices
            </strong>{" "}
            on Kubernetes.
          </>
        ),
      },
      {
        icon: BarChart2,
        text: (
          <>
            Optimized SQL queries reducing report generation latency by 85% for{" "}
            <strong className="text-on-surface font-semibold">Power BI</strong>{" "}
            integration.
          </>
        ),
      },
      {
        icon: Layers,
        text: (
          <>
            Developed a unified design system using{" "}
            <strong className="text-on-surface font-semibold">
              Blazor WebAssembly
            </strong>{" "}
            for internal tooling.
          </>
        ),
      },
    ],
  },
  {
    year: "2017 — 2019",
    role: "Backend Engineer",
    company: "CoreLink Infrastructure",
    cardTitle: "Legacy Infrastructure Overhaul",
    accentColor: "text-tertiary",
    glowClass: "glow-tertiary",
    reversed: false,
    icons: [
      { icon: Network, color: "text-tertiary", border: "border-tertiary/20" },
      { icon: HardDrive, color: "text-primary", border: "border-primary/20" },
    ],
    bullets: [
      {
        icon: CheckCircle2,
        text: (
          <>
            Modernized .NET Framework 4.5 applications to{" "}
            <strong className="text-on-surface font-semibold">
              .NET Core 2.1
            </strong>
            .
          </>
        ),
      },
      {
        icon: CheckCircle2,
        text: (
          <>
            Managed on-premise to{" "}
            <strong className="text-on-surface font-semibold">
              Azure Hybrid Benefit
            </strong>{" "}
            transition for 40+ servers.
          </>
        ),
      },
    ],
  },
];

const TECH_ORBIT = [
  {
    icon: Cpu,
    color: "text-primary",
    border: "hover:border-primary/50",
    label: ".NET 8 / C#",
  },
  {
    icon: Cloud,
    color: "text-tertiary",
    border: "hover:border-tertiary/50",
    label: "Azure",
  },
  {
    icon: Database,
    color: "text-secondary",
    border: "hover:border-secondary/50",
    label: "SQL Server",
  },
  {
    icon: HardDrive,
    color: "text-error",
    border: "hover:border-error/50",
    label: "Docker",
  },
];

// ─── Experience Card ──────────────────────────────────────────────────────────

function ExpCard({ entry }: { entry: ExperienceEntry }) {
  const metaBlock = (
    <div className={entry.reversed ? "md:text-left" : "md:text-right"}>
      <div
        className={`font-label text-sm tracking-widest uppercase mb-2 ${entry.accentColor}`}>
        {entry.year}
      </div>
      <h3 className="font-headline text-3xl font-bold text-on-surface">
        {entry.role}
      </h3>
      <p className={`font-body text-lg font-medium ${entry.accentColor}`}>
        {entry.company}
      </p>
    </div>
  );

  const cardBlock = (
    <div
      className={`group relative bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 ${entry.glowClass} hover:bg-surface-container transition-all duration-500`}>
      {/* Icon row */}
      <div className="flex gap-3 mb-6">
        {entry.icons.map(({ icon: Icon, color, border }, idx) => (
          <div
            key={idx}
            className={`w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border ${border} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
        ))}
      </div>

      {/* Title */}
      <h4 className="font-headline text-xl font-semibold mb-4 text-on-surface">
        {entry.cardTitle}
      </h4>

      {/* Bullets */}
      <ul className="space-y-4 font-body text-on-surface-variant">
        {entry.bullets.map(({ icon: BulletIcon, text }, idx) => (
          <li key={idx} className="flex gap-3 text-sm leading-relaxed">
            <BulletIcon
              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${entry.accentColor}`}
            />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
      {/* Dot on the central line */}
      <div className="absolute left-4 md:left-1/2 top-3 w-3 h-3 -translate-x-1/2 rounded-full bg-primary border-2 border-background hidden md:block z-10" />

      {entry.reversed ? (
        <>
          <div className="md:order-1">{cardBlock}</div>
          <div className="md:order-2 pt-2">{metaBlock}</div>
        </>
      ) : (
        <>
          <div className="pt-2">{metaBlock}</div>
          <div>{cardBlock}</div>
        </>
      )}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export const Experience = () => (
  <div className="min-h-screen bg-background text-on-surface font-body">
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* ── Header ── */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="font-label text-xs uppercase tracking-widest text-tertiary">
            Career Architecture
          </span>
        </div>

        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 leading-tight">
          Building the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
            Enterprise
          </span>{" "}
          Nebula.
        </h1>

        <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Expertise focused on the Microsoft Ecosystem. Architecting scalable
          cloud solutions, optimizing legacy data pipelines, and pushing the
          boundaries of .NET performance.
        </p>
      </motion.header>

      {/* ── Timeline ── */}
      <div className="relative space-y-24">
        {/* Central vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-tertiary/20 to-transparent hidden md:block opacity-40 -translate-x-1/2" />

        {EXPERIENCES.map((entry, i) => (
          <ExpCard key={i} entry={entry} />
        ))}
      </div>

      {/* ── Core Technical Orbit ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-40">
        <h2 className="font-headline text-4xl font-bold text-on-surface mb-12">
          Core Technical Orbit
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TECH_ORBIT.map(({ icon: Icon, color, border, label }) => (
            <div
              key={label}
              className={`group bg-surface-container p-6 rounded-xl border border-outline-variant/10 ${border} flex flex-col items-center justify-center gap-4 transition-colors duration-300`}>
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.section>
    </main>

    {/* Scoped glow styles */}
    <style>{`
      .glow-azure     { box-shadow: 0 0 30px rgba(115, 177, 255, 0.10); }
      .glow-secondary { box-shadow: 0 0 30px rgba(195, 146, 252, 0.10); }
      .glow-tertiary  { box-shadow: 0 0 30px rgba(71,  204, 255, 0.10); }
    `}</style>
  </div>
);
