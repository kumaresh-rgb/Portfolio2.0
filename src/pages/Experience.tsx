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
      <div className="flex gap-3 mb-6">
        {entry.icons.map(({ icon: Icon, color, border }, idx) => (
          <div
            key={idx}
            className={`w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border ${border} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
        ))}
      </div>

      <h4 className="font-headline text-xl font-semibold mb-4 text-on-surface">
        {entry.productTitle}
      </h4>

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
      <div className="mt-8 pt-6 border-t border-outline-variant/10">
        <Link
          to={`/experience/${entry.company.toLowerCase().replace(/\s+/g, "-")}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg text-sm font-semibold transition-all group/btn">
          View Mission Brief
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}>
            <Rocket size={14} />
          </motion.span>
        </Link>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
      <div className="absolute left-4 md:left-1/2 top-3 w-3 h-3 -translate-x-1/2 rounded-full bg-primary border-2 border-background hidden md:block z-10" />
      <div className={`${entry.reversed ? "md:order-2" : "md:order-1"} pt-2`}>
        {metaBlock}
      </div>
      <div className={entry.reversed ? "md:order-1" : "md:order-2"}>
        {cardBlock}
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export const Experience = () => (
  <div className="min-h-screen bg-background text-on-surface font-body">
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl">
          <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
          <span className="font-label text-xs uppercase tracking-widest text-tertiary">
            Mission Timeline
          </span>
        </div>

        <h1 className="font-headline text-[11vw] xs:text-[10vw] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-10 leading-[1.1] hyphens-none">
          {/* Force the word to scale with the screen width */}
          <span className="inline-block whitespace-nowrap">
            <span className="text-on-surface">Engin</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d1fffc] via-[#c392fc] to-[#ff7e6c] drop-shadow-[0_0_25px_rgba(195,146,252,0.3)]">
              eering
            </span>
          </span>

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d1fffc] via-[#c392fc] to-[#ff7e6c] drop-shadow-[0_0_25px_rgba(195,146,252,0.3)]">
            {" "}
            High-Scale <br className="hidden sm:block" />
            Enterprise Foundations.
          </span>
        </h1>

        <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed mx-auto relative pr-8">
          Specializing in Full-Stack .NET & Analytics. Pushing the boundaries of
          high-scale data modeling and Microsoft ecosystem performance.
          <span className="absolute bottom-1 right-2 w-4 h-4 text-on-surface/50 font-sans">
            ✦
          </span>
        </p>
      </motion.header>

      <div className="relative space-y-24">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-tertiary/20 to-transparent hidden md:block opacity-40 -translate-x-1/2" />
        {EXPERIENCES.map((entry, i) => (
          <ExpCard key={i} entry={entry} />
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-40">
        <h2 className="font-headline text-4xl font-bold text-on-surface mb-12">
          Technical Arsenal
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

    <style>{`
      .glow-azure     { box-shadow: 0 0 30px rgba(115, 177, 255, 0.10); }
      .glow-secondary { box-shadow: 0 0 30px rgba(195, 146, 252, 0.10); }
      .glow-tertiary  { box-shadow: 0 0 30px rgba(71,  204, 255, 0.10); }
    `}</style>
  </div>
);
