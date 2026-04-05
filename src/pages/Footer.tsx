import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { 
    icon: Github, 
    href: "https://github.com/kumaresh-rgb", 
    label: "GitHub" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/mkumaresh/", 
    label: "LinkedIn" 
  },
  { 
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ), 
    href: "https://x.com/KumareshLovable", 
    label: "X (Twitter)" 
  },
];

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-white/10 bg-[#090f15]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight text-[#e6ebf4]">
              MK<span className="text-[#73b1ff]">.</span>
            </a>
            <p className="text-sm text-[#94a3b8] mt-2">
              {currentYear} MKumaresh. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#94a3b8] hover:text-[#e6ebf4] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:text-[#73b1ff] transition-all"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};