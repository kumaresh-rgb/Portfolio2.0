import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Home, User, Code, Briefcase, Mail, Menu, X, Gamepad2, BookOpen } from "lucide-react";

const SECTIONS = [
  { id: "hero",            name: "Home",       icon: Home },
  { id: "about",           name: "About",       icon: User },
  { id: "projects",        name: "Projects",    icon: Code },
  { id: "skills",          name: "Skills",      icon: Briefcase },
  { id: "experience",      name: "Experience",  icon: Briefcase },
  { id: "contact",         name: "Contact",     icon: Mail },
  // { id: "accomplishments", name: "Milestones",  icon: Award },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome =
    location.pathname === "/" ||
    ["/about", "/projects", "/skills", "/experience", "/accomplishments", "/contact"].includes(
      location.pathname,
    );

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isHome) return;
    const observers: IntersectionObserver[] = [];
    const observe = () => {
      SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const obs = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
          { threshold: 0.25, rootMargin: "-76px 0px 0px 0px" },
        );
        obs.observe(el);
        observers.push(obs);
      });
    };
    const timer = setTimeout(observe, 300);
    return () => { clearTimeout(timer); observers.forEach(o => o.disconnect()); };
  }, [isHome, location.pathname]);

  const scrollToSection = useCallback((id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
    }
  }, [navigate]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* NEWS BANNER */}
      <div className="h-7 w-full bg-black/60 border-b border-white/5 flex items-center overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-12 items-center leading-none"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center text-[10px] tracking-[0.2em] font-bold text-[#47ccff]">
              <span>WORK MODE: REMOTE</span> <span>•</span>
              <span>EXP: 3+ YEARS</span> <span>•</span>
              <span>LOCATION: CHENNAI</span> <span>•</span>
              <span>WORK STATUS: OPEN TO WORK</span> <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* NAV BAR */}
      <nav className="relative -mt-[1px] bg-[#05070a]/90 border-b border-white/8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* LOGO */}
            <button onClick={() => scrollToSection("hero")} className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer">
              <span className="text-[13px] font-semibold text-white tracking-wide">.NET Full Stack Dev</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                {SECTIONS.map((item) => {
                  const isActive = isHome && activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative flex items-center gap-2 py-1 text-[13px] font-medium transition-colors duration-300 cursor-pointer ${isActive ? "text-white" : "text-gray-400 hover:text-white"}`}>
                      <item.icon size={14} className={isActive ? "text-[#47ccff]" : "text-gray-500 group-hover:text-white"} />
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#47ccff] rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}

                <Link
                  to="/blog"
                  className={`group relative flex items-center gap-2 py-1 text-[13px] font-medium transition-colors duration-300 ${location.pathname.startsWith("/blog") ? "text-white" : "text-gray-400 hover:text-white"}`}>
                  <BookOpen size={14} className={location.pathname.startsWith("/blog") ? "text-[#47ccff]" : "text-gray-500 group-hover:text-white"} />
                  <span>Blog</span>
                  {location.pathname.startsWith("/blog") && (
                    <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#47ccff] rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                </Link>
                <Link
                  to="/gamer"
                  className={`group relative flex items-center gap-2 py-1 text-[13px] font-medium transition-colors duration-300 ${location.pathname === "/gamer" ? "text-white" : "text-gray-400 hover:text-white"}`}>
                  <Gamepad2 size={14} className={location.pathname === "/gamer" ? "text-[#47ccff]" : "text-gray-500 group-hover:text-white"} />
                  <span>Gamer</span>
                  {location.pathname === "/gamer" && (
                    <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#47ccff] rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  )}
                </Link>
              </div>
            </div>

            {/* Mobile menu */}
            <div className="flex items-center gap-1">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-1.5 text-gray-300">
                {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#05070a] border-t border-white/8 overflow-hidden">
              <div className="px-4 py-4 space-y-2">
                {SECTIONS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors ${isHome && activeSection === item.id ? "bg-[#47ccff]/10 text-[#47ccff]" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </button>
                ))}
                <Link
                  to="/blog"
                  className={`flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname.startsWith("/blog") ? "bg-[#47ccff]/10 text-[#47ccff]" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
                  <BookOpen className="w-4 h-4 mr-3" />
                  Blog
                </Link>
                <Link
                  to="/gamer"
                  className={`flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === "/gamer" ? "bg-[#47ccff]/10 text-[#47ccff]" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
                  <Gamepad2 className="w-4 h-4 mr-3" />
                  Gamer
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
