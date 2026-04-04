import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Zap, Terminal } from "lucide-react";

export const ExperienceDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background text-on-surface pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/experience"
          className="flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft size={16} /> Back to Experience
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12">
          <header>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
              Project Detail:{" "}
              <span className="text-primary">{id?.replace("-", " ")}</span>
            </h1>
            <p className="text-xl text-on-surface-variant">
              A deep dive into the architecture, challenges, and outcomes of
              this mission.
            </p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
              <Shield className="text-tertiary mb-3" />
              <h3 className="font-bold">Challenge</h3>
              <p className="text-sm text-on-surface-variant">
                Legacy bottlenecks and security vulnerabilities.
              </p>
            </div>
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
              <Zap className="text-primary mb-3" />
              <h3 className="font-bold">Solution</h3>
              <p className="text-sm text-on-surface-variant">
                Microservices orchestration using Dapr and .NET.
              </p>
            </div>
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
              <Terminal className="text-secondary mb-3" />
              <h3 className="font-bold">Result</h3>
              <p className="text-sm text-on-surface-variant">
                99.9% uptime and 40% cost reduction.
              </p>
            </div>
          </section>

          <article className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold">The Technical Stack</h2>
            <p className="text-on-surface-variant">
              Detailed breakdown of how I utilized Azure Kubernetes Service
              (AKS) and Entity Framework Core to handle high-concurrency
              financial transactions...
            </p>
          </article>
        </motion.div>
      </div>
    </div>
  );
};
