"use client";

import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isPending, setIsPending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    setSuccess(false);

    try {
      // Formspree expects a standard POST request
      const response = await fetch("https://formspree.io/f/xbdqjkzw", {
        method: "POST",
        body: formData, // Send the FormData object directly
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const result = await response.json();
        throw new Error(
          result.errors ? result.errors[0].message : "Submission failed",
        );
      }
    } catch (error: any) {
      console.error("System Protocol Error:", error.message);
      alert("Error: " + (error.message || "Unknown error occurred"));
    } finally {
      setIsPending(false);
    }
  }

  const getStatusText = () => {
    if (isPending)
      return (
        <span className="text-yellow-400 animate-pulse">
          Sending request...
        </span>
      );
    if (success)
      return (
        <span className="text-blue-400">
          Message Delivered / Awaiting Response
        </span>
      );
    return <span className="text-green-400">System Ready / Online</span>;
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body overflow-x-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-tertiary/10 blur-[120px] rounded-full opacity-50" />
      </div>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <motion.header
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16 text-left">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
              Touch
            </span>
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Have a project in mind or want to discuss a potential partnership?
            Let&apos;s turn your vision into a production-ready reality.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 glass-card nebula-glow rounded-2xl p-8 border border-outline-variant/10">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle2
                    size={64}
                    className="text-primary mb-6 animate-pulse"
                  />
                  <h3 className="text-3xl font-bold mb-2">Message Sent</h3>
                  <p className="text-on-surface-variant mb-8">
                    I have received your message and will get back to you
                    shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-primary font-bold hover:underline">
                    Send another message?
                  </button>
                </motion.div>
              ) : (
                <form action={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-primary font-bold">
                        Full Name
                      </label>
                      <input
                        name="senderName"
                        required
                        placeholder="e.g. Kumaresh"
                        className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-primary font-bold">
                        Email Address
                      </label>
                      <input
                        name="senderEmail"
                        type="email"
                        required
                        placeholder="e.g. kumaresh@zendesk.com"
                        className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-primary font-bold">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about your project, goals, or inquiries..."
                      className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    disabled={isPending}
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50">
                    {isPending ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.section>

          <div className="lg:col-span-5 space-y-8">
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-outline-variant/20 overflow-hidden shadow-2xl font-mono">
              <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
                <span className="text-[10px] text-white/40 uppercase tracking-widest">
                  status_monitor.sh
                </span>
              </div>
              <div className="p-8 space-y-4 text-sm">
                <div className="flex gap-3 text-primary">
                  <span>&gt;</span>
                  <span className="text-on-surface">check --connectivity</span>
                </div>
                <div className="pl-6 text-on-surface-variant">
                  Latency: 14ms <br />
                  Status: {getStatusText()}
                </div>
                <div className="flex gap-3 text-primary pt-4">
                  <span>&gt;</span>
                  <span className="text-on-surface">get --location</span>
                </div>
                <div className="pl-6 text-on-surface-variant">
                  Chennai, Tamil Nadu, IN
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* GitHub Link */}
              <a
                href="https://github.com/kumaresh-rgb"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl flex items-center justify-center gap-3 hover:border-primary/50 transition-all group">
                <Github
                  size={20}
                  className="text-primary group-hover:scale-110 transition-transform"
                />
                <span className="font-bold text-sm">GitHub</span>
              </a>
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/mkumaresh/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl flex items-center justify-center gap-3 hover:border-tertiary/50 transition-all group">
                <Linkedin
                  size={20}
                  className="text-tertiary group-hover:scale-110 transition-transform"
                />
                <span className="font-bold text-sm">LinkedIn</span>
              </a>
              {/* X Link */}
              <a
                href="https://x.com/KumareshLovable"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-2xl flex items-center justify-center gap-3 hover:border-white/30 transition-all group">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white group-hover:scale-110 transition-transform">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-bold text-sm">X</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <style>
        {`
        .glass-card {
          background: rgba(255, 255, 255, 0.03) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
        }
        .nebula-glow {
          box-shadow: 0 0 80px -20px rgba(71, 204, 255, 0.15) !important;
        }
        `}
      </style>
    </div>
  );
}
