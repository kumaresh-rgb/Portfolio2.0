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
      const response = await fetch("https://formspree.io/f/xbdqjkzw", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSuccess(true);
      } else {
        const result = await response.json();
        throw new Error(result.errors ? result.errors[0].message : "Submission failed");
      }
    } catch (error: any) {
      alert("Error: " + (error.message || "Unknown error occurred"));
    } finally {
      setIsPending(false);
    }
  }

  const statusText = isPending
    ? <span className="text-yellow-400 animate-pulse">Sending...</span>
    : success
    ? <span className="text-blue-400">Delivered · Awaiting Response</span>
    : <span className="text-green-400">Online · Ready</span>;

  const inputCls = "w-full bg-surface-container border border-outline-variant rounded-lg px-3 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-primary/30 outline-none transition-all placeholder:text-on-surface-variant/50";

  return (
    <div className="w-full bg-background text-on-surface overflow-x-hidden">
      <div className="pt-16 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10">
          <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Touch</span>
          </h1>
          <p className="text-on-surface-variant text-sm max-w-xl leading-relaxed">
            Have a project in mind or want to discuss a collaboration? Let's build something together.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-surface-container rounded-xl p-6 border border-outline-variant">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={48} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-on-surface-variant text-sm mb-6">I'll get back to you shortly.</p>
                  <button onClick={() => setSuccess(false)} className="text-primary font-semibold text-sm hover:underline">
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" action={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-primary font-bold">Full Name</label>
                      <input name="senderName" required placeholder="Your name" className={inputCls} />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-primary font-bold">Email</label>
                      <input name="senderEmail" type="email" required placeholder="you@email.com" className={inputCls} />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-primary font-bold">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className={inputCls + " resize-none"}
                    />
                  </div>
                  <button
                    disabled={isPending}
                    type="submit"
                    className="w-full py-3 bg-primary text-white font-bold rounded-lg flex items-center justify-center gap-2 text-sm hover:brightness-110 transition-all disabled:opacity-50">
                    {isPending ? <Loader2 size={16} className="animate-spin" /> : <><Send size={14} /> Send Message</>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.section>

          {/* Right: Status + Social */}
          <div className="lg:col-span-5 space-y-4">
            {/* Terminal status */}
            <div className="rounded-xl border border-outline-variant overflow-hidden font-mono text-sm bg-surface-container">
              <div className="bg-surface-container-high px-4 py-2.5 flex items-center justify-between border-b border-outline-variant">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">status_monitor</span>
              </div>
              <div className="p-5 space-y-3 text-xs">
                <div className="flex gap-2 text-primary">
                  <span>&gt;</span>
                  <span className="text-on-surface">check --connectivity</span>
                </div>
                <div className="pl-5 text-on-surface-variant">
                  Latency: 14ms<br />Status: {statusText}
                </div>
                <div className="flex gap-2 text-primary pt-2">
                  <span>&gt;</span>
                  <span className="text-on-surface">get --location</span>
                </div>
                <div className="pl-5 text-on-surface-variant">Chennai, Tamil Nadu, IN</div>
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { href: "https://github.com/kumaresh-rgb",        label: "GitHub",   color: "text-primary",  icon: <Github size={18} /> },
                { href: "https://www.linkedin.com/in/mkumaresh/", label: "LinkedIn", color: "text-tertiary", icon: <Linkedin size={18} /> },
                {
                  href: "https://x.com/KumareshLovable",
                  label: "X",
                  color: "text-on-surface",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg border border-outline-variant bg-surface-container flex flex-col items-center gap-1.5 hover:border-outline transition-all ${s.color}`}>
                  {s.icon}
                  <span className="font-semibold text-[11px] text-on-surface">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
