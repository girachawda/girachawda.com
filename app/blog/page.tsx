"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { posts } from "../../lib/posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <section className="w-full max-w-3xl mx-auto px-6 py-16">
      <div className="mb-16">
        <h1 className="text-5xl font-black mb-4">Thoughts</h1>
        <p className="text-lg text-muted-foreground">
          Things on my mind. Lessons learned. Stuff I wish someone told me earlier.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link href={`/blog/${post.slug}`} className="group block py-10">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-black mb-3 group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-sm font-semibold text-primary inline-flex items-center gap-1.5">
                Read more
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
