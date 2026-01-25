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
    <section className="mt-6 flex flex-col items-center w-full max-w-5xl mx-auto px-6">
      <h1 className="text-5xl font-bold mb-4">Projects</h1>
      <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl">
        A collection of projects I&apos;ve built, initiatives I&apos;ve launched, and content I&apos;ve created.
      </p>

      <div className="w-full space-y-24">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            id={project.slug}
            className="w-full scroll-mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Tags and Year */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-sm font-medium text-primary">{project.year}</span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title and Subtitle */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h2>
            <p className="text-lg text-muted-foreground mb-6">{project.subtitle}</p>

            {/* Image */}
            <div className="w-full h-64 sm:h-96 relative mb-6 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition: "50% 20%" }}
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed mb-4">{project.description}</p>

            {/* Bullets */}
            <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed mb-6">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            {/* Links */}
            {project.links ? (
              <div className="flex flex-wrap gap-4">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline font-medium"
                  >
                    {link.label}
                    <svg
                      className="ml-2 h-4 w-4"
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
                className="inline-flex items-center text-primary hover:underline font-medium"
              >
                {project.linkText}
                <svg
                  className="ml-2 h-4 w-4"
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

            {/* Divider (except for last item) */}
            {index < projects.length - 1 && (
              <hr className="mt-24 border-border" />
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
