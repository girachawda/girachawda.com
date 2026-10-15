import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/projects";
import FadeIn from "./FadeIn";

export default function Project() {
  return (
    <section className="w-full py-20">
      <FadeIn>
        <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-16 text-center">
          Selected Work
        </p>
      </FadeIn>

      <div className="flex flex-col gap-12">
        {projects.slice(0, 3).map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.1}>
            <Link
              href={`/projects#${project.slug}`}
              className="flex flex-col lg:flex-row items-center gap-8 group"
              style={{ flexDirection: i % 2 === 1 ? "row-reverse" : "row" } as React.CSSProperties}
            >
              <div className="relative w-full lg:w-2/5 aspect-video rounded-xl overflow-hidden shadow-lg shrink-0 bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className={`lg:w-3/5 text-center lg:text-left ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                <div className="flex flex-wrap gap-2 mb-3 justify-center lg:justify-start" style={{ justifyContent: i % 2 === 1 ? "flex-end" : undefined }}>
                  <span className="text-xs font-semibold text-primary">{project.year}</span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black leading-tight mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">{project.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="px-6 py-3 border border-border rounded-full font-semibold hover:bg-muted transition"
          >
            See All Projects
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
