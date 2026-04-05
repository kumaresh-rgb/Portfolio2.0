import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    {
      id: "github",
      name: "GitHub",
      icon: Github,
      url: "https://github.com/kumaresh-rgb",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/kumaresh-rgb",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      id: "twitter",
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/kumaresh_rgb",
      color: "hover:text-sky-600 dark:hover:text-sky-400",
    },
    {
      id: "email",
      name: "Email",
      icon: Mail,
      url: "mailto:kumaresh@example.com",
      color: "hover:text-red-600 dark:hover:text-red-400",
    },
    {
      id: "website",
      name: "Website",
      icon: Globe,
      url: "https://kumaresh.dev",
      color: "hover:text-green-600 dark:hover:text-green-400",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#090f15] pt-16 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#090f15] via-[#0a1628] to-[#0f172a] opacity-90" />
      
      {/* Ambient glow effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#73b1ff] rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#47ccff] rounded-full blur-[120px] opacity-10" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-[#73b1ff] to-[#53a3ff] p-1 shadow-[0_0_30px_rgba(115,177,255,0.3)]">
              <div className="w-full h-full rounded-full bg-[#0a1628] flex items-center justify-center backdrop-blur-sm border border-white/10">
                <span className="text-2xl sm:text-3xl font-bold text-[#e6ebf4]">
                  K
                </span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#e6ebf4] mb-4 px-4 tracking-tight">
            Hi, I'm{" "}
            <span className="text-[#73b1ff]">Kumaresh</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-[#94a3b8] mb-6 px-4 font-medium">
            Microsoft Stack Developer & .Net Enthusiast
          </h2>

          <p className="text-base sm:text-lg text-[#94a3b8] mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            Passionate about Working for Large Scale User Base EnterPrise
            Project and working with Handlilng Millons Of Records Data
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[#64748b] transition-all duration-300 hover:scale-110 ${link.color}`}
                  aria-label={link.name}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-[#73b1ff] to-[#53a3ff] hover:from-[#53a3ff] hover:to-[#73b1ff] text-white font-medium rounded-full transition-all duration-300 text-center shadow-[0_4px_20px_rgba(115,177,255,0.3)] hover:shadow-[0_6px_30px_rgba(115,177,255,0.5)] hover:scale-105">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/15 text-[#e6ebf4] hover:bg-white/5 font-medium rounded-full transition-all duration-300 text-center backdrop-blur-sm hover:border-white/25">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
