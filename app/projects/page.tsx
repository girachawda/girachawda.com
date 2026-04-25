"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  useEffect(() => {
    // Scroll to section if hash is present in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  return (
    <section className="mt-6 flex flex-col items-center w-full max-w-7xl mx-auto px-6 pb-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of projects I&apos;ve built, initiatives I&apos;ve launched, and content I&apos;ve created.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            id={project.slug}
            className="group scroll-mt-24 rounded-xl border bg-card shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Image Container - Fixed aspect ratio */}
            <div className="relative w-full aspect-video overflow-hidden bg-muted">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Tags and Year */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm font-semibold text-primary">{project.year}</span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title and Subtitle */}
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                {project.description}
              </p>

              {/* Bullets */}
              <ul className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed mb-6 text-muted-foreground flex-grow">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>

              {/* Links */}
              <div className="mt-auto pt-4 border-t">
                {project.links ? (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline font-medium"
                      >
                        {link.label}
                        <svg
                          className="ml-1.5 h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline font-medium"
                  >
                    {project.linkText}
                    <svg
                      className="ml-1.5 h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
