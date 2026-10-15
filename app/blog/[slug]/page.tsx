"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { posts } from "../../../lib/posts";
import { use } from "react";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-2xl font-black mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-bold text-foreground mt-6 mb-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="mt-4" />);
    } else {
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed">
          {line}
        </p>
      );
    }
  }

  return elements;
}

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <motion.article
      className="w-full max-w-2xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Thoughts
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-sm text-muted-foreground">{formatDate(post.date)}</span>
        {post.tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-12">
        {post.title}
      </h1>

      <div className="prose-like space-y-1">
        {renderContent(post.content)}
      </div>
    </motion.article>
  );
}
