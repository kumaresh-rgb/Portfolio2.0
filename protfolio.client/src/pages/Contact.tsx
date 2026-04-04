import React, { useState } from "react"; // Added missing useState
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Send,
  Terminal as TerminalIcon,
  CheckCircle2,
  Sun, // Added missing icon
  Moon, // Added missing icon
} from "lucide-react";

export const Contact = () => {
  return (
    // Updated bg-background to match Skills page
    <div className="min-h-screen bg-background text-on-surface font-body overflow-x-hidden relative">
      {/* ── Background Nebula Consistency (This was missing) ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-tertiary/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        {/* ── Page Header ── */}
        <motion.header
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-left">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-4 text-on-surface">
            Initialize{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
              Connection
            </span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Ready to bridge the gap between concept and execution. Reach out via
            the terminal or traditional channels.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ── Contact Form (Now using glass-card and nebula-glow) ── */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card nebula-glow rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-primary">
                    Name
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-primary">
                    Email
                  </label>
                  <input
                    className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none"
                    placeholder="john@nebula.dev"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-primary">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-lg p-4 text-on-surface focus:ring-1 focus:ring-primary/50 transition-all outline-none resize-none"
                  placeholder="Transmit your request..."
                  rows={5}
                />
              </div>
              <button className="w-full py-4 bg-primary text-white font-headline font-bold rounded-lg hover:shadow-[0_0_20px_rgba(71,204,255,0.3)] transition-all flex items-center justify-center gap-2">
                <Send size={18} />
                Send Transmission
              </button>
            </form>
          </motion.section>

          {/* ── Terminal & Hub ── */}
          <div className="lg:col-span-5 space-y-6">
            {/* Terminal Box */}
            <div className="bg-black/40 backdrop-blur-md rounded-xl border border-outline-variant/20 overflow-hidden shadow-2xl font-mono">
              <div className="bg-surface-container-highest/50 px-4 py-2 flex items-center justify-between border-b border-outline-variant/10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                  system_status.sh
                </span>
              </div>
              <div className="p-6 space-y-4 text-sm">
                <div className="flex gap-2">
                  <span className="text-primary">~</span>{" "}
                  <span className="text-on-surface">whoami</span>
                </div>
                <div className="text-on-surface-variant pl-4">
                  DevNebula // Full-Stack Architect
                </div>
                <div className="flex gap-2">
                  <span className="text-primary">~</span>{" "}
                  <span className="text-on-surface">status --check</span>
                </div>
                <div className="flex items-center gap-2 pl-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary">Status: Online</span>
                </div>
              </div>
            </div>

            {/* Social Links (Matching Skills tiles) */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="glass-card p-4 rounded-xl flex items-center gap-3 hover:scale-[1.02] transition-all">
                <Github size={20} className="text-primary" />
                <span className="text-sm font-semibold">GitHub</span>
              </a>
              <a
                href="#"
                className="glass-card p-4 rounded-xl flex items-center gap-3 hover:scale-[1.02] transition-all">
                <Linkedin size={20} className="text-tertiary" />
                <span className="text-sm font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* ── Scoped Styles (Essential for Consistency) ── */}
      <style>{`
        .glass-card {
          background: rgba(30, 39, 47, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(115, 177, 255, 0.1);
        }
        .nebula-glow {
          box-shadow: 0 0 40px rgba(71, 204, 255, 0.06);
        }
      `}</style>
    </div>
  );
};
