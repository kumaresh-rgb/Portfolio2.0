import Home from "./Home";
import { About } from "./About";
import { Projects } from "./Projects";
import { OpenSourceSection } from "./OpenSourceSection";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
// import { Accomplishments } from "./Accomplishments";
import Contact from "./Contact";

const sectionStyle: React.CSSProperties = { scrollMarginTop: "76px" };

export const SinglePage = () => {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      {/* Hero — transparent so the galaxy canvas shows through */}
      <div id="hero" style={sectionStyle}>
        <Home />
      </div>

      {/*
        Non-hero sections sit inside position:relative / z-index:1 so they stack
        above the fixed galaxy canvas (z-index:0) and their solid bg-background
        properly covers it.
      */}
      <div style={{ position: "relative", zIndex: 1, backgroundColor: "var(--color-background)" }}>
        <div id="about"           style={sectionStyle}><About /></div>
        <div id="projects"        style={sectionStyle}><Projects /></div>
        <div id="opensource"      style={sectionStyle}><OpenSourceSection /></div>
        <div id="skills"          style={sectionStyle}><Skills /></div>
        <div id="experience"      style={sectionStyle}><Experience /></div>
        {/* <div id="accomplishments" style={sectionStyle}><Accomplishments /></div> */}
        <div id="contact"         style={sectionStyle}><Contact /></div>

        {/* ── Final CTA ─────────────────────────────────── */}
        <section className="py-20 text-center border-t border-outline-variant">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-on-surface mb-3">
              Ready to build the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Scalable Enterprise Product?
              </span>
            </h2>
            <p className="text-on-surface-variant text-sm mb-8">
              Open to new roles, collaborations, and challenging projects.
            </p>
            <button
              onClick={scrollToContact}
              className="px-10 py-3 bg-primary text-white font-bold rounded-full text-sm hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg">
              LET'S TALK
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
