/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./pages/Navbar";
import { Footer } from "./pages/Footer";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Accomplishments } from "./pages/Accomplishments";
import { Contact } from "./pages/Contact";
import { Skills } from "./pages/Skills";
import { VisitorTelemetry } from "./components/VisitorTelemetry";
import { News } from "./pages/News";
import { useEffect } from "react";
export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-nebula-base">
      {/* Wrap the header elements */}
      <header className="fixed top-0 left-0 w-full z-50">
        <News />
        <Navbar />
      </header>
      <main className="relative pt-[1px]">
        {/* Render only on Home page, below Navbar on the right */}
        <VisitorTelemetry />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/accomplishments" element={<Accomplishments />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
