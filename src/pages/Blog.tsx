import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "../data/blogData";

const TAG_COLORS: Record<string, string> = {
  ".NET":         "#0078d4",
  "Azure":        "#0078d4",
  "Microservices":"#0078d4",
  "Performance":  "#10b981",
  "Caching":      "#10b981",
  "Architecture": "#a855f7",
  "DDD":          "#a855f7",
  "AI":           "#f59e0b",
  "Power BI":     "#f59e0b",
  "DAX":          "#f59e0b",
  "Microsoft Fabric": "#00b0e3",
  "XMLA":         "#00b0e3",
  "System Design":"#ec4899",
};

function getTagColor(tag: string) {
  return TAG_COLORS[tag] || "#64748b";
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

const Blog = () => (
  <div className="min-h-screen bg-background text-on-surface" style={{ paddingBottom: 80 }}>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">
      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12">
        <div className="inline-block px-3 py-1 mb-4 rounded-full border border-primary/20 bg-primary/5">
          <span className="font-label text-[10px] tracking-[0.25em] text-primary uppercase font-bold">Technical Writing</span>
        </div>
        <h1 className="font-headline text-3xl sm:text-4xl font-bold text-on-surface mb-3">
          Engineering Blog
        </h1>
        <p className="text-on-surface-variant text-sm max-w-xl leading-relaxed">
          Deep dives into .NET engineering, distributed systems, AI architecture, and real-world lessons from building production systems.
        </p>
      </motion.header>

      {/* Featured post */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8">
        <Link to={`/blog/${BLOG_POSTS[0].slug}`} className="group block">
          <div className="rounded-2xl border border-outline-variant bg-surface-container overflow-hidden hover:border-outline transition-all duration-200">
            <div className="p-7">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest bg-primary/10 text-primary font-label">Featured</span>
                <span className="text-xs text-on-surface-variant">{formatDate(BLOG_POSTS[0].date)}</span>
                <span className="text-on-surface-variant">·</span>
                <Clock size={12} className="text-on-surface-variant" />
                <span className="text-xs text-on-surface-variant">{BLOG_POSTS[0].readTime}</span>
              </div>
              <h2 className="font-headline text-xl sm:text-2xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                {BLOG_POSTS[0].title}
              </h2>
              <p className="text-sm text-on-surface-variant mb-5 leading-relaxed">{BLOG_POSTS[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {BLOG_POSTS[0].tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider font-label border"
                      style={{ color: getTagColor(tag), borderColor: `${getTagColor(tag)}30`, background: `${getTagColor(tag)}10` }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Remaining posts grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {BLOG_POSTS.slice(1).map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.07 }}>
            <Link to={`/blog/${post.slug}`} className="group block h-full">
              <div className="rounded-xl border border-outline-variant bg-surface-container overflow-hidden hover:border-outline transition-all duration-200 h-full flex flex-col">
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-on-surface-variant">{formatDate(post.date)}</span>
                    <span className="text-on-surface-variant text-xs">·</span>
                    <Clock size={10} className="text-on-surface-variant" />
                    <span className="text-xs text-on-surface-variant">{post.readTime}</span>
                  </div>
                  <h3 className="font-headline text-base font-bold text-on-surface mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4 flex-1">
                    {post.excerpt.slice(0, 140)}…
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider font-label border"
                        style={{ color: getTagColor(tag), borderColor: `${getTagColor(tag)}25`, background: `${getTagColor(tag)}10` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
