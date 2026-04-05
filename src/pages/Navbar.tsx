import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Menu,
  X,
  Award,
} from "lucide-react";

const navigationItems = [
  { id: "home", name: "Home", icon: Home, href: "/" },
  { id: "about", name: "About", icon: User, href: "/about" },
  { id: "projects", name: "Projects", icon: Code, href: "/projects" },
  { id: "skills", name: "Skills", icon: Briefcase, href: "/skills" },
  {
    id: "experience",
    name: "Experience",
    icon: Briefcase,
    href: "/experience",
  },
  { id: "contact", name: "Contact", icon: Mail, href: "/contact" },
  {
    id: "accomplishments",
    name: "Milestones",
    icon: Award,
    href: "/accomplishments",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* 1. NEWS BANNER */}
      <div className="h-7 w-full bg-black/40 backdrop-blur-md border-b border-white/5 flex items-center overflow-hidden whitespace-nowrap">
        <motion.div
          className="flex gap-12 items-center leading-none"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex gap-12 items-center text-[10px] tracking-[0.2em] font-bold text-[#47ccff]">
              <span>WORK MODE: REMOTE</span> <span>•</span>
              <span>EXP: 3+ YEARS</span> <span>•</span>
              <span>LOCATION: CHENNAI</span> <span>•</span>
              <span>WORK STATUS: OPEN TO WORK</span> <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. NAV BAR */}
      <nav className="relative -mt-[1px] bg-surface/80 backdrop-blur-md border-b border-outline-variant transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* LOGO */}
            <Link to="/">
              <div className="flex-shrink-0 flex items-center gap-2.5">
                <img
                  src="/Microsoft_Logo_24px.png"
                  alt="Logo"
                  className="h-4 w-auto"
                />
                <span className="text-[13px] font-semibold text-white">
                  MS Stack Dev
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                {navigationItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.id}
                      to={item.href}
                      className={`group relative flex items-center gap-2 py-1 text-[13px] font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}>
                      <item.icon
                        size={14}
                        className={
                          isActive
                            ? "text-[#47ccff]"
                            : "text-gray-500 group-hover:text-white"
                        }
                      />
                      <span>{item.name}</span>

                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#47ccff] rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Toggle - Theme Toggle Removed */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-1.5 text-white">
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
              className="md:hidden bg-surface border-t border-outline-variant overflow-hidden">
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-on-surface-variant hover:bg-surface-variant"
                    }`}>
                    <item.icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
