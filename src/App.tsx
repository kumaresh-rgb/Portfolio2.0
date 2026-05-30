import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./pages/Navbar";
import { Footer } from "./pages/Footer";
import { SinglePage } from "./pages/SinglePage";

const Gamer          = lazy(() => import("./pages/Gamer"));
const ExperienceDetail = lazy(() => import("./pages/ExperienceDetail"));
const ProjectDetail  = lazy(() => import("./pages/ProjectDetail"));
const Blog           = lazy(() => import("./pages/Blog"));
const BlogPost       = lazy(() => import("./pages/BlogPost"));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-nebula-base flex flex-col overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>
      <main className="relative pt-[1px] flex-grow w-full overflow-x-hidden">
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full">
              <Routes location={location}>
                <Route path="/"               element={<SinglePage />} />
                <Route path="/gamer"          element={<Gamer />} />
                <Route path="/experience/:id" element={<ExperienceDetail />} />
                <Route path="/project/:id"    element={<ProjectDetail />} />
                <Route path="/blog"           element={<Blog />} />
                <Route path="/blog/:slug"     element={<BlogPost />} />
                {/* Legacy SPA anchors */}
                <Route path="/about"          element={<SinglePage />} />
                <Route path="/projects"       element={<SinglePage />} />
                <Route path="/skills"         element={<SinglePage />} />
                <Route path="/experience"     element={<SinglePage />} />
                <Route path="/accomplishments"element={<SinglePage />} />
                <Route path="/contact"        element={<SinglePage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
