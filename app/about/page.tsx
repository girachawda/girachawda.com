"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Milestone = {
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  links?: { label: string; href: string }[];
};

const milestones: Milestone[] = [
  {
    title: "Self-Learning Spark",
    subtitle: "Where it all began",
    description:
      "I taught myself Python and JavaScript, tackled CS50, and built my first projects. I didn’t love coding at first—but the thrill of finally figuring things out hooked me for life.",
    achievements: [
      "Completed Harvard CS50 course",
      "Built early personal projects",
      "Explored web and software fundamentals",
    ],
  },
  {
    title: "Teaching & Empowering",
    subtitle: "Cracking the Code",
    description:
      "I started teaching coding to just a few people—my sister, friends, and one stranger—and loved seeing someone genuinely excited to learn. Over time, I grew workshops to over 100 participants, partnered with SLYE Patchwork, and even had Tiffany Janzen (@tiffintech) as a guest.",
    achievements: [
      "Started coding workshops with 4 participants",
      "Scaled workshops to 100+ learners online",
      "Partnered with SLYE Patchwork community organization",
      "Featured Tiffany Janzen (@tiffintech) as a guest",
    ],
    links: [
      {
        label: "Filmed Youtube Coding Tutorials",
        href: "https://youtu.be/DNo3uW5USts",
      },
      {
        label: "Workshop Promo",
        href: "https://www.instagram.com/p/CNgGJClgVKG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
    ],
  },
  {
    title: "Community Leadership",
    subtitle: "hErVOLUTION Committee",
    description:
      "I joined hErVOLUTION to support young girls entering STEM, contributing to program planning and leading the Ambassador Committee to expand the organization’s impact.",
    achievements: [
      "Chaired Ambassador Committee, leading meetings and initiatives",
      "Contributed to STEMingUP planning and execution",
      "Cultivated partnerships to enhance program impact",
      "Mentored and supported young girls in STEM",
    ],
    links: [{ label: "hErVOLUTION Website", href: "https://hervolution.org" }],
  },
  {
    title: "Professional Impact",
    subtitle: "Shopify Dev Degree",
    description:
      "As a Dev Degree Intern at Shopify, I’ve contributed to merchant-facing features, improved user accessibility in Catalogs, and collaborated across multiple R&D teams while growing my full-stack skills.",
    achievements: [
      "Launched features in Markets Home",
      "Enhanced merchant-facing Catalogs components for accessibility",
      "Contributed to backend functionality for Plus Trial and Plus features",
      "Worked across multiple R&D teams, adapting to frontend and backend challenges",
      "Engaged in pair programming and team retrospectives to foster collaboration"
    ],
    links: [
      { label: "2024 Shopify Highlights", href: "https://www.linkedin.com/posts/girachawda_2024-career-wrapped-2024-was-such-a-crazy-activity-7282100876649893888-buwN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIULO8BhVfJzapEIjL3bBJn5aIGpIyLv4Q" },
      { label: "Vlog for York University", href: "https://www.instagram.com/reel/DDhdNm7RCkX/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA%3D%3D" }
    ],
  },  
];

const contentGallery = [
  {
    title: "Coding Workshop Highlights",
    thumbnail: "/images/workshop-thumbnail.jpg", // local image or URL
    href: "https://youtu.be/DNo3uW5USts",
  },
  {
    title: "Shopify Vlog for York University",
    thumbnail: "/images/york-vlog.jpg",
    href: "https://www.instagram.com/reel/DDhdNm7RCkX/?utm_source=ig_web_button_share_sheet",
  },
  {
    title: "Workshop Promo Reel",
    thumbnail: "/images/workshop-promo.jpg",
    href: "https://www.instagram.com/p/CNgGJClgVKG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
];


export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <><div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">My Story Constellation</h1>
      <p className="text-lg text-muted-foreground mb-12">
        A resume lists what I’ve done, but not <em>how</em> I got there. Each
        accomplishment has a story; late nights learning, first teaching
        moments, teamwork, and experiences that shaped me. This constellation
        lets you explore the journey behind each milestone, not just the
        outcome.
      </p>

      {/* Timeline */}
      <div className="relative flex flex-col gap-12">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-border/40 rounded-full" />

        {milestones.map((m, index) => (
          <div
            key={index}
            className="relative pl-12"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-0 top-1 w-6 h-6 rounded-full transition-all 
                ${activeIndex === index
                  ? "bg-primary shadow-lg scale-110"
                  : "bg-primary/60 group-hover:bg-primary/80"}
            `} />
            {/* Title + subtitle */}
            <h2 className="text-xl font-semibold cursor-pointer">{m.title}</h2>
            <p className="text-sm text-muted-foreground cursor-pointer">
              {m.subtitle}
            </p>

            {/* Expanded Card */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 p-6 rounded-xl border bg-card shadow-sm"
                >
                  <p className="text-muted-foreground">{m.description}</p>

                  <ul className="mt-4 list-disc list-inside space-y-1 text-sm">
                    {m.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>

                  {m.links && (
                    <div className="mt-4 flex gap-4">
                      {m.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          className="text-primary underline text-sm"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div><div className="mt-20">
        <h1 className="text-4xl font-bold mb-4">Content Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contentGallery.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">{item.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div></>
  
  );
}
