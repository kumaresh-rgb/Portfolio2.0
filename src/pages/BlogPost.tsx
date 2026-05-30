import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS } from "../data/blogData";

const TAG_COLORS: Record<string, string> = {
  ".NET":"#0078d4","Azure":"#0078d4","Microservices":"#0078d4","Performance":"#10b981",
  "Caching":"#10b981","Architecture":"#a855f7","DDD":"#a855f7","AI":"#f59e0b",
  "Power BI":"#f59e0b","DAX":"#f59e0b","Microsoft Fabric":"#00b0e3","XMLA":"#00b0e3",
  "System Design":"#ec4899","SignalR":"#0078d4","Redis":"#ef4444",
};
const getTagColor = (t: string) => TAG_COLORS[t] || "#64748b";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

// Very simple markdown-like renderer for the content
function renderContent(md: string) {
  const lines = md.split("\n");
  const elements: React.ReactElement[] = [];
  let codeBuffer: string[] = [];
  let inCode = false;
  let tableBuffer: string[] = [];
  let inTable = false;
  let key = 0;

  const flush = () => {
    if (codeBuffer.length > 0) {
      elements.push(
        <pre key={key++} className="rounded-xl border border-outline-variant bg-[#0d1117] p-5 overflow-x-auto mb-5 text-[12px] leading-relaxed text-[#e8ecf0] font-mono">
          <code>{codeBuffer.join("\n")}</code>
        </pre>
      );
      codeBuffer = [];
    }
    if (tableBuffer.length > 1) {
      const rows = tableBuffer.map(r => r.split("|").filter(c => c.trim()).map(c => c.trim()));
      const header = rows[0];
      const body = rows.slice(2);
      elements.push(
        <div key={key++} className="overflow-x-auto mb-5">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-outline-variant">
                {header.map((h, i) => (
                  <th key={i} className="text-left py-2 px-3 text-on-surface font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className="border-b border-outline-variant/50">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2 px-3 text-on-surface-variant">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableBuffer = [];
    }
  };

  lines.forEach(line => {
    if (line.startsWith("```")) {
      if (inCode) { flush(); inCode = false; }
      else { inCode = true; }
      return;
    }
    if (inCode) { codeBuffer.push(line); return; }

    if (line.startsWith("|")) {
      inTable = true;
      tableBuffer.push(line);
      return;
    }
    if (inTable) { inTable = false; flush(); }

    const inline = (text: string) => {
      // Bold, code, italics inline
      return text
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/`(.+?)`/g, `<code style="background:#1e293b;padding:2px 6px;border-radius:4px;font-family:monospace;font-size:11px;color:#47ccff">$1</code>`)
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2" target="_blank" style="color:#0078d4;text-decoration:underline">$1</a>`);
    };

    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="font-headline text-xl font-bold text-on-surface mt-10 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="font-headline text-base font-semibold text-on-surface mt-7 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      elements.push(
        <li key={key++} className="text-sm text-on-surface-variant leading-relaxed ml-4 mb-1.5 list-disc"
          dangerouslySetInnerHTML={{ __html: inline(line.slice(2)) }} />
      );
    } else if (line.startsWith("1. ") || /^\d+\. /.test(line)) {
      const text = line.replace(/^\d+\. /, "");
      elements.push(
        <li key={key++} className="text-sm text-on-surface-variant leading-relaxed ml-4 mb-1.5 list-decimal"
          dangerouslySetInnerHTML={{ __html: inline(text) }} />
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="mb-3" />);
    } else {
      elements.push(
        <p key={key++} className="text-sm text-on-surface-variant leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: inline(line) }} />
      );
    }
  });
  flush();
  return elements;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-on-surface-variant">Post not found.</p>
        <Link to="/blog" className="text-primary text-sm hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  const renderedContent = renderContent(post.content);

  return (
    <div className="min-h-screen bg-background text-on-surface" style={{ paddingBottom: 80 }}>
      {/* Header bar */}
      <div className="sticky top-[76px] z-40 bg-background/95 border-b border-outline-variant px-4 py-3">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
        {/* Post header */}
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10">
          <div className="flex flex-wrap gap-1.5 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider font-label border"
                style={{ color: getTagColor(tag), borderColor: `${getTagColor(tag)}30`, background: `${getTagColor(tag)}10` }}>
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">{post.subtitle}</p>

          <div className="flex items-center gap-4 text-xs text-on-surface-variant pt-5 border-t border-outline-variant">
            <div className="flex items-center gap-1.5">
              <Calendar size={12} />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={12} />
              {post.readTime}
            </div>
          </div>
        </motion.header>

        {/* Excerpt / intro */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-5 rounded-xl border border-outline-variant bg-surface-container">
          <p className="text-sm text-on-surface leading-relaxed font-medium">{post.excerpt}</p>
        </motion.div>

        {/* Article content */}
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}>
          {renderedContent}
        </motion.article>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-outline-variant">
          <p className="text-xs text-on-surface-variant mb-4">More articles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 2).map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group">
                <div className="p-4 rounded-xl border border-outline-variant bg-surface-container hover:border-outline transition-all">
                  <h4 className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors mb-1 leading-snug">
                    {p.title}
                  </h4>
                  <span className="text-xs text-on-surface-variant">{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
