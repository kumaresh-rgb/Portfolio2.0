import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Shield,
  Zap,
  Terminal,
  CheckCircle2,
  Cpu,
  Layers,
  BookOpen,
} from "lucide-react";

// ─── Detailed Data Structure ─────────────────────────────────────────────────

const DETAILED_DATA: Record<string, any> = {
  "lumel-technologies": {
    company: "Lumel Technologies",
    role: "Product Developer",
    location: "Chennai, India",
    period: "07/2025 — Present",
    challenge:
      "Handling massive semantic models (5M+ cells) and providing Power BI-parity features in a custom XMLA environment.",
    solution:
      "Leveraged .NET 8, TOM, and ADOMD.NET to architect advanced DAX orchestration and high-performance query engines.",
    result:
      "50% faster filter loading and successful delivery of core analytical features (Split Measure/Nested Top N).",
    stack: [
      "C#",
      "ASP.NET 8",
      "DAX Query Development",
      "ADOMD.NET",
      "ADOTabular",
      "In-Memory Caching",
      "Azure Services",
      "Duck DB",
      "Apache Parquet",
      "Unit Testing with xUnit",
      "Integration Testing",
    ],
    milestones: [
      {
        title: "Semantic Engine Innovation",
        points: [
          "Architected an XMLA 'Measure as Category' engine to unpivot measures into dynamic hierarchies, enabling restructuring across rows and columns.",
          "Engineered 'Nested Top N' logic for matrix hierarchies, allowing level-by-level filtering with automatic 'Top N + Others' grouping.",
          "Implemented support for Top N on flat date fields, ensuring contextual ranking within Planning Sheet visualizations.",
        ],
      },
      {
        title: "Analytical Feature Engineering",
        points: [
          "Developed 'Split By Measure' functionality, enabling automated measure generation by category without manual DAX writing.",
          "Implemented 'Show Items with No Data' parity, supporting multi-category hierarchies and complex filter interactions.",
          "Engineered 'Discourage Implicit Measures' to enforce data model integrity, mirroring Power BI's core governance behavior.",
        ],
      },
      {
        title: "Performance & Infrastructure",
        points: [
          "Optimized Batch Filter Pane loading by 40-50% for models with 5M+ cells by refining DAX execution plans and ADOMD connection pooling.",
          "Resolved critical TOPN/TOPNSKIP pagination bugs, ensuring 100% accuracy in large-data retrieval for enterprise reports.",
          "Proactively identified and fixed .NET dependency conflicts across all environments to prevent CI/CD bottlenecks.",
        ],
      },
      {
        title: "Knowledge Management",
        points: [
          "Authored comprehensive technical documentation (LOOP) for complex stories, accelerating team onboarding for DAX engine features.",
          "Actively utilized Semantic Model DMV queries and Redis caching for system-wide performance profiling.",
        ],
      },
    ],
  },
  "boston-harbor-consulting": {
    company: "Boston Harbor Consulting",
    role: "Associate Software Developer",
    location: "Chennai, India",
    period: "10/2023 — 06/2025",
    challenge:
      "A monolithic low-code platform suffering from stability issues and legacy architectural bottlenecks.",
    solution:
      "Transitioned to a .NET Core Microservices architecture while implementing a zero-trust debugging and testing culture.",
    result:
      "30% stability increase and successful migration of 30% of back-end modules.",
    stack: [
      "ASP.NET Core",
      "Angular",
      "SQL",
      "ASP.NET Zero Framework",
      "Microservices Architecture",
      "GraphQL",
      "Roslyn (.NET Compiler Platform)",
      "Monaco Editor",
      "Unit Testing (xUnit)",
    ],
    milestones: [
      {
        title: "Microservices & Migration",
        points: [
          "Owned the back-end conversion of 30% of total modules during the monolithic-to-microservices transition.",
          "Built multiple reusable components for the object module microservices, standardizing the low-code engine.",
          "Implemented advanced version control using GraphQL queries and the Roslyn compiler platform.",
        ],
      },
      {
        title: "Quality Assurance & Stability",
        points: [
          "Resolved 200+ critical bugs within a single year, tracked via Jira, significantly improving product reliability.",
          "Achieved a 20–30% reduction in recurring bugs per module through rigorous refactoring and unit testing.",
          "Maintained a consistent '8 hours of focused development' standard, providing weekend support for critical releases.",
        ],
      },
      {
        title: "Developer Experience (DX)",
        points: [
          "Integrated Monaco Editor with custom compiler logic to provide a seamless low-code development experience.",
          "Wrote clean, maintainable, and reusable code focused on high-performance execution and timely delivery.",
        ],
      },
    ],
  },
};

// ─── Main Component ───────────────────────────────────────────────────────────

export const ExperienceDetail = () => {
  const { id } = useParams();
  const data = id ? DETAILED_DATA[id] : null;

  if (!data) {
    return <div className="pt-40 text-center">Project not found.</div>;
  }

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/experience"
          className="flex items-center gap-2 text-primary hover:underline mb-8 transition-all">
          <ArrowLeft size={16} /> Back to Timeline
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12">
          {/* Header */}
          <header>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">
                  {data.company}
                </h1>
                <p className="text-xl text-primary font-medium">{data.role}</p>
              </div>
              <div className="text-md md:text-right text-on-surface-variant font-label">
                <p>{data.location}</p>
                <p>{data.period}</p>
              </div>
            </div>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </header>

          {/* Quick Stats Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
              <Shield className="text-tertiary mb-3" size={24} />
              <h3 className="font-bold mb-2">Challenge</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {data.challenge}
              </p>
            </div>
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
              <Zap className="text-primary mb-3" size={24} />
              <h3 className="font-bold mb-2">Solution</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {data.solution}
              </p>
            </div>
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
              <Terminal className="text-secondary mb-3" size={24} />
              <h3 className="font-bold mb-2">Outcome</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {data.result}
              </p>
            </div>
          </section>

          {/* Technical Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar: Tech Stack */}
            <aside className="lg:col-span-1">
              <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">
                Technical Stack
              </h4>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {data.stack.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-surface-container-high rounded-md text-sm border border-outline-variant/10 text-on-surface">
                    {tech}
                  </span>
                ))}
              </div>
            </aside>

            {/* Main Content: Milestones */}
            <div className="lg:col-span-3 space-y-10">
              {data.milestones.map((milestone: any, idx: number) => (
                <section
                  key={idx}
                  className="relative pl-8 border-l-2 border-outline-variant/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    {idx === 0 ? (
                      <Cpu size={20} className="text-primary" />
                    ) : idx === 1 ? (
                      <Layers size={20} className="text-tertiary" />
                    ) : (
                      <BookOpen size={20} className="text-secondary" />
                    )}
                    {milestone.title}
                  </h3>
                  <ul className="space-y-4">
                    {milestone.points.map((point: string, pIdx: number) => (
                      <li
                        key={pIdx}
                        className="flex gap-3 text-on-surface-variant leading-relaxed">
                        <CheckCircle2
                          size={16}
                          className="mt-1.5 text-primary flex-shrink-0"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
