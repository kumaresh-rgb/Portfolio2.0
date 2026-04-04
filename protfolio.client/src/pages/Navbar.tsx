import {
  Moon,
  Sun,
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  // Destructure as an array: [currentValue, toggleFunction]
  const [theme, toggleTheme] = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", name: "Home", icon: Home, href: "#home" },
    { id: "about", name: "About", icon: User, href: "#about" },
    { id: "projects", name: "Projects", icon: Code, href: "#projects" },
    { id: "skills", name: "Skills", icon: Briefcase, href: "#skills" },
    {
      id: "experience",
      name: "Experience",
      icon: Briefcase,
      href: "#experience",
    },
    { id: "contact", name: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/Microsoft Logo.png"
              alt="Microsoft Logo"
              className="h-8 w-auto mr-2 dark:brightness-100 brightness-90"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-variant transition-all duration-200">
                    <Icon className="w-4 h-4 mr-2 text-primary" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* FIX: toggleTheme is called with 0 arguments */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface-container-low hover:bg-surface-variant transition-all border border-outline-variant"
              aria-label="Toggle theme">
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface">
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface border-t border-outline-variant">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex items-center px-3 py-3 rounded-md text-base font-medium text-on-surface-variant hover:bg-surface-variant"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  <item.icon className="w-5 h-5 mr-3 text-primary" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
