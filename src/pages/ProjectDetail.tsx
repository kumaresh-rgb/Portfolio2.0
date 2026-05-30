import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, BarChart2 } from "lucide-react";
import { PROJECT_DETAILS } from "../data/projectDetailData";
import { MermaidDiagram } from "../components/MermaidDiagram";
import { Suspense } from "react";

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant">
        <Icon size={16} className="text-primary" />
      </div>
      <h2 className="font-headline text-lg font-bold text-on-surface">{title}</h2>
      <div className="h-px flex-1 bg-outline-variant" />
    </div>
  );
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const detail = id ? PROJECT_DETAILS[id] : null;

  if (!detail) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-on-surface-variant">Project not found.</p>
        <Link to="/#projects" className="text-primary text-sm hover:underline">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface" style={{ paddingBottom: 80 }}>
      {/* Header bar */}
      <div className="sticky top-[76px] z-40 bg-background/95 border-b border-outline-variant px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          {detail.link && (
            <a
              href={detail.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full text-white"
              style={{ background: detail.accent }}>
              <ExternalLink size={12} /> Visit Live
            </a>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: detail.accent }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: detail.accent }} />
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase font-label" style={{ color: detail.accent }}>LIVE PRODUCT</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-on-surface mb-2">
            {detail.title}
          </h1>
          <p className="text-lg font-semibold mb-4" style={{ color: detail.accent }}>{detail.tagline}</p>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-2xl">{detail.overview}</p>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
          {detail.metrics.map((m) => (
            <div
              key={m.label}
              className="text-center py-4 px-2 rounded-xl border border-outline-variant bg-surface-container">
              <div className="text-xl font-extrabold font-headline" style={{ color: detail.accent }}>{m.value}</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-0.5">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
          <SectionHeader icon={BarChart2} title="Technology Stack" />
          <div className="space-y-3">
            {detail.stack.map((layer) => (
              <div key={layer.layer} className="flex flex-col sm:flex-row flex-wrap items-start gap-2 sm:gap-3">
                <span className="text-xs font-bold text-on-surface-variant sm:w-28 flex-shrink-0 sm:pt-1.5 uppercase tracking-widest">
                  {layer.layer}
                </span>
                <div className="flex flex-wrap gap-2">
                  {layer.techs.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg border border-outline-variant bg-surface-container text-xs font-medium text-on-surface">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Architecture Diagram */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
          <SectionHeader icon={BarChart2} title="System Architecture" />
          <Suspense fallback={
            <div className="w-full rounded-xl border border-outline-variant bg-surface-container flex items-center justify-center h-40">
              <span className="text-on-surface-variant text-sm animate-pulse">Loading diagram…</span>
            </div>
          }>
            <MermaidDiagram chart={detail.architecture} />
          </Suspense>
        </motion.section>

        {/* Implementation Phases */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
          <SectionHeader icon={CheckCircle2} title="How It Was Built" />
          <div className="space-y-6">
            {detail.phases.map((phase, i) => (
              <div key={i} className="relative pl-5 border-l-2 border-outline-variant">
                <div
                  className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-background"
                  style={{ background: detail.accent }}
                />
                <h3 className="text-sm font-bold text-on-surface mb-3">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-xs text-on-surface-variant leading-relaxed">
                      <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: detail.accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Challenges & Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
          <SectionHeader icon={AlertTriangle} title="Challenges & Solutions" />
          <div className="space-y-4">
            {detail.challenges.map((c, i) => (
              <div key={i} className="rounded-xl border border-outline-variant bg-surface-container overflow-hidden">
                <div className="px-5 py-3 border-b border-outline-variant flex items-start gap-2.5">
                  <AlertTriangle size={14} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-on-surface font-medium">{c.problem}</p>
                </div>
                <div className="px-5 py-3 flex items-start gap-2.5">
                  <CheckCircle2 size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-on-surface-variant leading-relaxed">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Lessons Learned */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12">
          <SectionHeader icon={Lightbulb} title="Key Lessons" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {detail.lessons.map((lesson, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-outline-variant bg-surface-container">
                <div className="flex gap-2.5">
                  <span className="text-xs font-bold text-on-surface-variant mt-0.5">0{i + 1}</span>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{lesson}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectDetail;
