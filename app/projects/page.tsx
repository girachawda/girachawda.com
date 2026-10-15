"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  const rotations = [-2, 1.5, -1, 2, -1.5];

  return (
    <section className="mt-6 w-full max-w-7xl mx-auto px-6 pb-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4">My Work</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Things I have built, launched, and shared. Some technical, some community-driven, all personal.
        </p>
      </div>

      {/* Pinboard */}
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {projects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.slug}
            id={project.slug}
            className="scroll-mt-24 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            style={{ rotate: rotations[index % rotations.length] }}
            whileHover={{ rotate: 0, y: -6, transition: { duration: 0.2 } }}
          >
            {/* Pin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-foreground border-2 border-background shadow-md" />

            <a
              href={project.links ? project.links[0].href : project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden border border-border bg-card shadow-lg"
            >
              <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-xs font-semibold text-primary">{project.year}</span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-black mb-1 group-hover:text-primary transition-colors leading-snug">
                  {project.title}
                </h2>
                <p className="text-xs text-muted-foreground mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>

                <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-3">
                  {project.links ? (
                    project.links.map((link, i) => (
                      <span
                        key={i}
                        onClick={(e) => { e.preventDefault(); window.open(link.href, "_blank"); }}
                        className="text-xs text-primary font-semibold hover:underline cursor-pointer"
                      >
                        {link.label} ↗
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-primary font-semibold hover:underline">
                      {project.linkText} ↗
                    </span>
                  )}
                </div>
              </div>
            </a>
          </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start max-w-[66%] mx-auto w-full">
          {projects.slice(3).map((project, index) => (
            <motion.div
              key={project.slug}
              id={project.slug}
              className="scroll-mt-24 relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{ rotate: rotations[(index + 3) % rotations.length] }}
              whileHover={{ rotate: 0, y: -6, transition: { duration: 0.2 } }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-foreground border-2 border-background shadow-md" />
              <a
                href={project.links ? project.links[0].href : project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl overflow-hidden border border-border bg-card shadow-lg"
              >
                <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden">
                  <Image src={project.image} alt={project.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="text-xs font-semibold text-primary">{project.year}</span>
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                    ))}
                  </div>
                  <h2 className="text-lg font-black mb-1 group-hover:text-primary transition-colors leading-snug">{project.title}</h2>
                  <p className="text-xs text-muted-foreground mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-3">
                    {project.links ? project.links.map((link, i) => (
                      <span key={i} onClick={(e) => { e.preventDefault(); window.open(link.href, "_blank"); }} className="text-xs text-primary font-semibold hover:underline cursor-pointer">{link.label} ↗</span>
                    )) : (
                      <span className="text-xs text-primary font-semibold hover:underline">{project.linkText} ↗</span>
                    )}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
