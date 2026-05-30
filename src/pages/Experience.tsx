import React from "react";
import { motion } from "motion/react";
import {
  Cloud,
  Database,
  Code2,
  LayoutGrid,
  Rocket,
  Gauge,
  ShieldCheck,
  Zap,
  BarChart2,
  Layers,
  Cpu,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BulletItem {
  icon: React.ElementType;
  text: React.ReactNode;
}

interface ExperienceEntry {
  year: string;
  role: string;
  company: string;
  productTitle: string;
  icons: { icon: React.ElementType; color: string; border: string }[];
  bullets: BulletItem[];
  accentColor: string;
  glowClass: string;
  reversed: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const EXPERIENCES: ExperienceEntry[] = [
  {
    year: "2025 — PRESENT",
    role: "Product Developer",
    company: "Lumel Technologies",
    productTitle: "Lumel EPM on Microsoft Fabric",
    accentColor: "text-primary",
    glowClass: "glow-azure",
    reversed: false,
    icons: [
      { icon: Cpu, color: "text-primary", border: "border-primary/20" },
      { icon: BarChart2, color: "text-tertiary", border: "border-tertiary/20" },
      {
        icon: Database,
        color: "text-secondary",
        border: "border-secondary/20",
      },
    ],
    bullets: [
      {
        icon: Sparkles,
        text: (
          <>
            Architected a custom{" "}
            <strong className="text-on-surface font-semibold">
              XMLA "Measure as Category" engine
            </strong>{" "}
            to unpivot measures into dynamic hierarchies, enabling complex data
            restructuring across rows and columns.
          </>
        ),
      },
      {
        icon: BarChart2,
        text: (
          <>
            Engineered a{" "}
            <strong className="text-on-surface font-semibold">
              "Split By Measure" orchestration
            </strong>{" "}
            logic that auto-generates virtual DAX measures, reducing data
            preparation time for analysts by 100%.
          </>
        ),
      },
      {
        icon: Gauge,
        text: (
          <>
            Implemented{" "}
            <strong className="text-on-surface font-semibold">
              Nested Top N logic
            </strong>{" "}
            for Planning Sheets, allowing level-by-level hierarchical filtering
            and "Top N + Others" grouping for both rows and columns.
          </>
        ),
      },
      {
        icon: ShieldCheck,
        text: (
          <>
            Engineered contextual ranking for{" "}
            <strong className="text-on-surface font-semibold">
              Flat Date & Hierarchy Fields
            </strong>{" "}
            using .NET, ensuring Top N filters respect parent-child
            relationships and matrix positioning.
          </>
        ),
      },
    ],
  },
  {
    year: "2023 — 2025",
    role: "Associate Software Developer",
    company: "Boston Harbor Consulting",
    productTitle: "Quickly.app — Low-Code Development Platform",
    accentColor: "text-secondary",
    glowClass: "glow-secondary",
    reversed: true,
    icons: [
      { icon: Layers, color: "text-secondary", border: "border-secondary/20" },
      { icon: LayoutGrid, color: "text-primary", border: "border-primary/20" },
    ],
    bullets: [
      {
        icon: Zap,
        text: (
          <>
            Architected the{" "}
            <strong className="text-on-surface font-semibold">
              Microservices conversion
            </strong>{" "}
            for 30% of backend modules, scaling the platform's ability to build
            and deploy apps quickly.
          </>
        ),
      },
      {
        icon: Code2,
        text: (
          <>
            Integrated{" "}
            <strong className="text-on-surface font-semibold">
              GraphQL & Roslyn
            </strong>{" "}
            within Monaco Editor to power advanced version control and
            third-party app integrations.
          </>
        ),
      },
      {
        icon: BarChart2,
        text: (
          <>
            Improved system stability by{" "}
            <strong className="text-on-surface font-semibold">30%</strong> by
            resolving 200+ critical bugs within the drag-and-drop visual
            interface engine.
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
    label: ".NET 10 / C#",
  },
  {
    icon: Database,
    color: "text-tertiary",
    border: "hover:border-tertiary/50",
    label: "SQL / T-SQL",
  },
  {
    icon: BarChart2,
    color: "text-tertiary",
    border: "hover:border-tertiary/50",
    label: "DAX / BI",
  },
  {
    icon: Cloud,
    color: "text-secondary",
    border: "hover:border-secondary/50",
    label: "Azure",
  },
  {
    icon: Code2,
    color: "text-primary",
    border: "hover:border-primary/50",
    label: "GraphQL / APIs",
  },
  {
    icon: Layers,
    color: "text-primary",
    border: "hover:border-primary/50",
    label: "React / Angular",
  },
  {
    icon: Terminal,
    color: "text-secondary",
    border: "hover:border-secondary/50",
    label: "Node.js",
  },
  {
    icon: ShieldCheck,
    color: "text-tertiary",
    border: "hover:border-tertiary/50",
    label: "SOLID / xUnit",
  },
];

// ─── Experience Card ──────────────────────────────────────────────────────────

function ExpCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-0 sm:pl-10">
      {/* Timeline dot */}
      <div className="absolute left-0 top-3 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background hidden sm:block" />

      {/* Meta */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <span className={`font-label text-[11px] tracking-widest uppercase ${entry.accentColor}`}>{entry.year}</span>
        <h3 className="font-headline text-base font-bold text-on-surface">{entry.role}</h3>
        <span className={`text-sm font-medium ${entry.accentColor}`}>@ {entry.company}</span>
      </div>

      {/* Card */}
      <div className="bg-surface-container rounded-xl border border-outline-variant p-5 hover:border-outline transition-all duration-300">
        <div className="flex gap-2 mb-3">
          {entry.icons.map(({ icon: Icon, color, border }, idx) => (
            <div key={idx} className={`w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center border ${border}`}>
              <Icon className={`w-4 h-4 ${color}`} />
            </div>
          ))}
        </div>
        <h4 className="font-headline text-sm font-semibold mb-3 text-on-surface">{entry.productTitle}</h4>
        <ul className="space-y-2.5 text-on-surface-variant">
          {entry.bullets.map(({ icon: BulletIcon, text }, idx) => (
            <li key={idx} className="flex gap-2.5 text-xs leading-relaxed">
              <BulletIcon className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${entry.accentColor}`} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-outline-variant/10">
          <Link
            to={`/experience/${entry.company.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-xs font-semibold transition-all">
            View Details <Rocket size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export const Experience = () => (
  <div className="w-full bg-background text-on-surface font-body">
    <div className="pt-16 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/5">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
          <span className="font-label text-[10px] uppercase tracking-widest text-tertiary">Career Timeline</span>
        </div>
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
          <span className="text-on-surface">Engineering </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            Enterprise Solutions.
          </span>
        </h1>
        <p className="text-on-surface-variant text-sm max-w-xl leading-relaxed">
          Full-Stack .NET & Analytics — specialising in high-scale data modelling and Microsoft ecosystem performance.
        </p>
      </motion.header>

      {/* Timeline */}
      <div className="relative space-y-8">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/10 to-transparent hidden sm:block" />
        {EXPERIENCES.map((entry, i) => (
          <ExpCard key={i} entry={entry} />
        ))}
      </div>

      {/* Tech orbit */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="font-headline text-xl font-bold text-on-surface whitespace-nowrap">Core Technologies</h2>
          <div className="h-px flex-1 bg-outline-variant" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TECH_ORBIT.map(({ icon: Icon, color, label }) => (
            <div key={label} className="bg-surface-container p-3 rounded-lg border border-outline-variant flex items-center gap-2.5 transition-colors hover:border-outline">
              <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
              <span className="text-xs font-medium text-on-surface">{label}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  </div>
);
