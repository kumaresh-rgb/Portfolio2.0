import { motion } from "motion/react";
import { ExternalLink, Mic, MessageSquare, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: "lingoura",
    badge: "LIVE",
    title: "Lingoura AI",
    tagline: "Master English. Conquer IELTS.",
    desc: "AI-powered IELTS preparation and English fluency platform. Real-time pronunciation feedback, adaptive learning paths, and personalised mock testing.",
    features: [
      "Real-time Pronunciation AI",
      "Adaptive IELTS Mock Tests",
      "Speaking & Writing Feedback",
      "Personalised Learning Paths",
      "Grammar & Fluency Analysis",
    ],
    stats: [
      { value: "12K+", label: "Sessions" },
      { value: "89", label: "Countries" },
      { value: "4.9★", label: "Rating" },
    ],
    tags: ["AI", "NLP", "IELTS", "EdTech"],
    link: "https://lingoura-ai.vercel.app/",
    linkLabel: "Visit Live Product",
    accent: "#0ea5e9",
    icon: Mic,
  },
  {
    id: "fluentinmock",
    badge: "LIVE",
    title: "Fluent InMock",
    tagline: "Interview like a Pro.",
    desc: "AI mock interview and communication simulator. Practice with realistic scenarios, receive real-time feedback on confidence, clarity, and delivery.",
    features: [
      "Real-Time AI Interviewer",
      "Voice & Tone Analysis",
      "Confidence Scoring Engine",
      "50+ Industry Tracks",
      "Behavioural Simulations",
    ],
    stats: [
      { value: "6.5K+", label: "Interviews" },
      { value: "92%",   label: "Satisfaction" },
      { value: "Real",  label: "Voice AI" },
    ],
    tags: ["AI", "Voice", "HR Tech"],
    link: null,
    linkLabel: "Coming Soon",
    accent: "#a855f7",
    icon: MessageSquare,
  },
  {
    id: "roundiqai",
    badge: "LIVE",
    title: "Interview RoundIQ AI",
    tagline: "Hiring Intelligence.",
    desc: "AI-powered hiring platform for HR teams. Build structured interview workflows, automate candidate evaluation, and streamline hiring with intelligent AI.",
    features: [
      "AI Interview Workflow Builder",
      "Smart Candidate Evaluation",
      "Resume Intelligence Engine",
      "Technical Test Generation",
      "HR Automation & Reporting",
    ],
    stats: [
      { value: "800+", label: "Interviews" },
      { value: "40%",  label: "Faster Hire" },
      { value: "Live", label: "AI Scoring" },
    ],
    tags: ["AI", "SaaS", "Automation"],
    link: "https://roundiqai.vercel.app/",
    linkLabel: "Visit Live Product",
    accent: "#10b981",
    icon: Users,
  },
];

export const Projects = () => (
  <section className="w-full bg-background text-on-surface">
    <div className="pt-16 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10">
        <div
          className="inline-block px-3 py-1 mb-4 rounded-full border text-[10px] tracking-[0.25em] uppercase font-bold font-label"
          style={{ borderColor: "rgba(71,204,255,0.2)", background: "rgba(71,204,255,0.05)", color: "#47ccff" }}>
          Live AI Products
        </div>
        <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface mb-3">
          Built &amp; Shipped:{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            AI Platforms
          </span>
        </h1>
        <p className="max-w-xl text-on-surface-variant text-sm leading-relaxed">
          Production-grade AI platforms serving real users worldwide.
        </p>
      </motion.header>

      {/* 3 AI Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl overflow-hidden flex flex-col border border-outline-variant bg-surface-container hover:border-outline transition-all duration-200">

            {/* Top accent bar */}
            <div className="h-0.5 w-full" style={{ background: proj.accent }} />

            <div className="p-5 flex flex-col flex-1">
              {/* Badge + Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: proj.accent }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: proj.accent }} />
                  </span>
                  <span className="text-[10px] font-bold tracking-widest font-label uppercase" style={{ color: proj.accent }}>{proj.badge}</span>
                </div>
                <div className="p-2 rounded-lg" style={{ background: `${proj.accent}15`, border: `1px solid ${proj.accent}25` }}>
                  <proj.icon size={16} style={{ color: proj.accent }} />
                </div>
              </div>

              {/* Title & tagline */}
              <h3 className="font-headline text-lg font-bold text-on-surface mb-0.5">{proj.title}</h3>
              <p className="text-xs font-semibold mb-3 font-label" style={{ color: proj.accent }}>{proj.tagline}</p>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">{proj.desc}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-4">
                {proj.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: proj.accent }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tags.map(t => (
                  <span
                    key={t}
                    className="text-[9px] tracking-widest font-bold px-2 py-0.5 rounded font-label uppercase"
                    style={{ background: `${proj.accent}10`, border: `1px solid ${proj.accent}20`, color: proj.accent }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-t border-b border-outline-variant">
                {proj.stats.map(s => (
                  <div key={s.label} className="text-center">
                    <div className="text-sm font-extrabold font-headline" style={{ color: proj.accent }}>{s.value}</div>
                    <div className="text-[9px] text-on-surface-variant uppercase tracking-widest font-label">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-auto space-y-2">
                {/* Architecture detail button */}
                <Link
                  to={`/project/${proj.id}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest text-on-surface border border-outline-variant hover:border-outline hover:bg-surface-container-high transition-all">
                  <ChevronRight size={12} /> How It Was Built
                </Link>

                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest text-white transition-all"
                    style={{ background: `${proj.accent}20`, border: `1px solid ${proj.accent}40` }}
                    onMouseEnter={e => (e.currentTarget.style.background = `${proj.accent}35`)}
                    onMouseLeave={e => (e.currentTarget.style.background = `${proj.accent}20`)}>
                    <ExternalLink size={12} /> {proj.linkLabel}
                  </a>
                ) : (
                  <button
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest text-on-surface-variant border border-outline-variant">
                    {proj.linkLabel}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
