import { motion } from "framer-motion";
import { Github, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 lg:px-12 flex flex-col items-center justify-center bg-[#090f15] relative overflow-hidden">
      {/* Background Nebula Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center lg:text-left">
          <h1 className="font-['Plus_Jakarta_Sans'] text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-[#e6ebf4]">
            Initialize <span className="text-[#73b1ff]">Connection</span>
          </h1>
          <p className="font-sans text-[#a6abb4] text-lg md:text-xl max-w-2xl">
            Ready to bridge the gap between concept and execution. Reach out via
            the terminal or traditional channels.
          </p>
        </motion.section>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#1e272f]/40 backdrop-blur-xl p-8 md:p-10 rounded-xl border border-[#424850]/20 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#73b1ff] font-bold">
                    Name
                  </label>
                  <input
                    className="w-full bg-[#0d141b] border-none rounded-md p-4 text-[#e6ebf4] focus:ring-2 focus:ring-[#47ccff] transition-all placeholder:text-[#a6abb4]/30 outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#73b1ff] font-bold">
                    Email
                  </label>
                  <input
                    className="w-full bg-[#0d141b] border-none rounded-md p-4 text-[#e6ebf4] focus:ring-2 focus:ring-[#47ccff] transition-all placeholder:text-[#a6abb4]/30 outline-none"
                    placeholder="john@nebula.dev"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#73b1ff] font-bold">
                  Message
                </label>
                <textarea
                  className="w-full bg-[#0d141b] border-none rounded-md p-4 text-[#e6ebf4] focus:ring-2 focus:ring-[#47ccff] transition-all placeholder:text-[#a6abb4]/30 resize-none outline-none"
                  placeholder="Transmit your request..."
                  rows={5}
                />
              </div>
              <button
                className="w-full py-4 bg-gradient-to-r from-[#73b1ff] to-[#53a3ff] text-[#002f59] font-['Plus_Jakarta_Sans'] font-bold rounded-full hover:shadow-[0_0_20px_rgba(115,177,255,0.4)] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                type="submit">
                <Send size={18} />
                Send Transmission
              </button>
            </form>
          </motion.div>

          {/* Terminal & Socials Section */}
          <div className="space-y-10">
            {/* Terminal Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#000000] rounded-xl border border-[#424850]/30 overflow-hidden shadow-2xl font-['Space_Grotesk']">
              <div className="bg-[#1e272f] px-4 py-2 flex items-center justify-between border-b border-[#424850]/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff716c]/50"></div>
                  <div className="w-3 h-3 rounded-full bg-[#c392fc]/50"></div>
                  <div className="w-3 h-3 rounded-full bg-[#47ccff]/50"></div>
                </div>
                <span className="text-[10px] text-[#a6abb4] font-bold uppercase tracking-widest">
                  system_status.sh
                </span>
              </div>
              <div className="p-6 space-y-3 text-sm leading-relaxed">
                <div className="flex gap-3">
                  <span className="text-[#47ccff]">~</span>
                  <span className="text-[#e6ebf4]">whoami</span>
                </div>
                <div className="text-[#a6abb4] pl-6">
                  DevNebula // Full-Stack Architect
                </div>
                <div className="flex gap-3">
                  <span className="text-[#47ccff]">~</span>
                  <span className="text-[#e6ebf4]">status --check</span>
                </div>
                <div className="flex items-center gap-2 pl-6">
                  <span className="w-2 h-2 rounded-full bg-[#0ebef5] animate-pulse"></span>
                  <span className="text-[#0ebef5]">
                    Status: Online & Ready for Deployment
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#47ccff]">~</span>
                  <span className="text-[#e6ebf4]">stack --active</span>
                </div>
                <div className="text-[#c392fc] pl-6">
                  [.NET 8, React, Azure Cloud, SQL Server]
                </div>
              </div>
            </motion.div>

            {/* Social Hub */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="group flex items-center gap-4 p-5 bg-[#1e272f]/40 backdrop-blur-md rounded-xl border border-[#424850]/10 hover:border-[#73b1ff]/40 transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1e272f] text-[#73b1ff] group-hover:shadow-[0_0_15px_rgba(115,177,255,0.3)] transition-all">
                  <Github size={20} />
                </div>
                <div>
                  <span className="block text-xs font-['Space_Grotesk'] uppercase tracking-widest text-[#a6abb4]">
                    GitHub
                  </span>
                  <span className="text-[#e6ebf4] font-semibold">
                    /dev-nebula
                  </span>
                </div>
              </a>
              <a
                href="#"
                className="group flex items-center gap-4 p-5 bg-[#1e272f]/40 backdrop-blur-md rounded-xl border border-[#424850]/10 hover:border-[#c392fc]/40 transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1e272f] text-[#c392fc] group-hover:shadow-[0_0_15px_rgba(195,146,252,0.3)] transition-all">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="block text-xs font-['Space_Grotesk'] uppercase tracking-widest text-[#a6abb4]">
                    LinkedIn
                  </span>
                  <span className="text-[#e6ebf4] font-semibold">
                    /in/devnebula
                  </span>
                </div>
              </a>
            </div>

            {/* Network Visualization Box */}
            <div className="relative h-32 w-full rounded-xl overflow-hidden bg-[#0d141b] border border-[#424850]/10">
              <img
                alt="Network Topology"
                className="w-full h-full object-cover opacity-30"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFZbmCfYWXyvGH4TXNqqbBW3j-9c18G52UttA1XEQP6ldxGyirHqmGsOLBgKtMpHpoo2bnI2N7ReWd6r1M0APuAb5BKZM2C1yotFEkYpn9Ymesu50MT3g3Ag7WSi6AN98MlcYe0Pb1Gnj41Wr-86ERgL2dtsz-HYvRlytlfQx_T4nv8VZ5dxM2WGSVvoTbZhDDvGhiTuRfpVb2woQ42itVFW3XK2k2zp6Wj12oL98t6lvSWzzY3zOi9DlEMz1tOZyaoIjgQDt55ZW0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090f15] to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <p className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.3em] text-[#47ccff]">
                  Network Topology Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
