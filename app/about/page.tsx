"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; 
import { StaticImageData } from "next/image";
import zoomcall from "../../assets/zoomcall.png";
import bfcm from "../../assets/bfcm.jpeg";
import shopify from "../../assets/shopify.png";

type Milestone = {
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  links?: { label: string; href: string }[];
  image?: StaticImageData;
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
    image: zoomcall,
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
      "Engaged in pair programming and team retrospectives to foster collaboration",
    ],
    links: [
      {
        label: "2024 Shopify Highlights",
        href: "https://www.linkedin.com/posts/girachawda_2024-career-wrapped-2024-was-such-a-crazy-activity-7282100876649893888-buwN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIULO8BhVfJzapEIjL3bBJn5aIGpIyLv4Q",
      },
      {
        label: "Vlog for York University",
        href: "https://www.instagram.com/reel/DDhdNm7RCkX/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA%3D%3D",
      },
    ],
    image: bfcm,
  },
  {
    title: "Social Media Impact",
    subtitle: "Continuing the Journey",
    description:
      "Throughout my coding journey, I’ve shared my growth and experiences across platforms, building a community that values authenticity and learning. I create relatable intern content, share the lessons I’ve learned, and highlight female representation in tech. My goal is to be real and transparent—showing both the challenges and successes to help demystify the tech world.",
    achievements: [
      "Grown a community of 2,000+ followers across TikTok and Instagram",
      "Built an authentic online presence as a developer and content creator",
      "Empowered others through transparent and relatable tech content",
      "Advocated for female representation and inclusivity in tech",
    ],
    links: [
      {
        label: "Represent Women in Tech",
        href: "https://www.tiktok.com/@giraintech/video/7527008355315977528",
      },
      {
        label: "Code with me",
        href: "https://www.tiktok.com/@giraintech/video/7532953660217625861",
      },
    ],
    image: shopify,
  }  
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-20">
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
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1 w-6 h-6 rounded-full transition-all 
                ${
                  activeIndex === index
                    ? "bg-primary shadow-lg scale-110"
                    : "bg-primary/60 group-hover:bg-primary/80"
                }
            `}
              />
              {/* Title + subtitle */}
              <h2 className="text-xl font-semibold cursor-pointer">
                {m.title}
              </h2>
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
                    {m.image && (
                      <div className="relative w-full h-96 mb-4">
                        <Image
                          src={m.image}
                          alt={m.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    )}
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
      </div>
    </>
  );
}
