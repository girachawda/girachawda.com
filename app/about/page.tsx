"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Polaroid from "../../components/Polaroid";
import zoomcall from "../../assets/zoomcall.png";
import bfcm from "../../assets/bfcm.jpeg";
import shopify from "../../assets/shopify.png";
import pfp from "../../assets/pfp.jpg";
import wit from "../../assets/wit.png";
import crackingthecode from "../../assets/crackingthecode.png";
import gem from "../../assets/gem-speech.jpg";
import railsworld from "../../assets/railsworld.png";
import speaking from "../../assets/speaking.png";

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
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* 3-Column Scrapbook Layout - Desktop Only */}
      <div className="hidden lg:grid lg:grid-cols-[220px_1fr_220px] gap-8 max-w-7xl mx-auto px-6 py-10">
        {/* Left Column - Polaroids */}
        <div className="flex flex-col gap-12 pt-20">
          <div className="mt-0">
            <Polaroid
              image={pfp}
              caption="Winning student of the year for Ontario ✨"
              rotation={-3}
              delay={0}
            />
          </div>
          <div className="mt-32">
            <Polaroid
              image={gem}
              caption="Speech about mentorship at GEM donor event"
              rotation={-2}
              delay={0.2}
            />
          </div>
          <div className="mt-20">
            <Polaroid
              image={wit}
              caption="Because representation matters 💜"
              rotation={-4}
              delay={0.4}
            />
          </div>
        </div>

        {/* Center Column - Main Content */}
        <div>
          {/* Hero Introduction */}
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Beyond the Code</h1>
            <div className="text-lg text-muted-foreground space-y-4 max-w-2xl mx-auto">
              <p>
                I&apos;m Gira Chawda—a developer, content creator, and firm believer
                that tech should be for everyone. By day, I&apos;m shipping features at
                Shopify. By evenings, I&apos;m studying for my Digital
                Technologies degree at York University. By night (and weekends),
                I&apos;m making TikToks to prove that you don&apos;t need to be
                perfect to be a programmer.
              </p>
              <p>
                I&apos;ve been coding since I was 14, not because I was a
                &quot;natural,&quot; but because I was stubborn enough to keep
                going when it got hard. Now, I want to make that journey easier
                for the next person.
              </p>
            </div>
          </div>

          {/* Story Constellation */}
          <div className="py-12 pb-0">
            <h1 className="text-4xl font-bold mb-4 text-center">
              My Story Constellation
            </h1>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              A resume lists what I&apos;ve done, but not <em>how</em> I got there.
              Each accomplishment has a story; late nights learning, first
              teaching moments, teamwork, and experiences that shaped me. This
              constellation lets you explore the journey behind each milestone,
              not just the outcome.
            </p>

            {/* Timeline */}
            <div className="relative flex flex-col gap-12">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-border/40 rounded-full" />

              {milestones.map((m, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary shadow-lg" />

                  {/* Milestone Card */}
                  <div className="p-6 rounded-xl border bg-card shadow-sm">
                    {/* Title + subtitle */}
                    <h2 className="text-xl font-semibold">{m.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {m.subtitle}
                    </p>

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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Polaroids */}
        <div className="flex flex-col gap-12 pt-40">
          <div className="mt-16">
            <Polaroid
              image={shopify}
              caption="Late nights at Shopify HQ ☕"
              rotation={2}
              delay={0.1}
            />
          </div>
          <div className="mt-24">
            <Polaroid
              image={railsworld}
              caption="Creating content for @ShopifyEng on X at Rails World"
              rotation={3}
              delay={0.3}
            />
          </div>
          <div className="mt-32">
            <Polaroid
              image={speaking}
              caption="Hosting the lightning talks at the Shopify office"
              rotation={1}
              delay={0.5}
            />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        {/* Hero Introduction */}
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Beyond the Code</h1>
          <div className="text-lg text-muted-foreground space-y-4 max-w-3xl mx-auto">
            <p>
              I&apos;m Gira Chawda—a developer, content creator, and firm believer that
              tech should be for everyone. By day, I&apos;m shipping features at
              Shopify. By evenings, I&apos;m studying for my Digital
              Technologies degree at York University. By night (and weekends),
              I&apos;m making TikToks to prove that you don&apos;t need to be
              perfect to be a programmer.
            </p>
            <p>
              I&apos;ve been coding since I was 14, not because I was a
              &quot;natural,&quot; but because I was stubborn enough to keep
              going when it got hard. Now, I want to make that journey easier
              for the next person.
            </p>
          </div>
        </div>

        {/* Polaroid Gallery */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Polaroid
              image={pfp}
              caption="Just me being me ✨"
              rotation={-3}
              delay={0}
            />
            <Polaroid
              image={shopify}
              caption="Late nights at Shopify HQ ☕"
              rotation={2}
              delay={0.1}
            />
            <Polaroid
              image={zoomcall}
              caption="Teaching my first coding workshop"
              rotation={-2}
              delay={0.2}
            />
            <Polaroid
              image={bfcm}
              caption="Day 1 as a Dev Degree intern"
              rotation={3}
              delay={0.3}
            />
            <Polaroid
              image={wit}
              caption="Because representation matters 💜"
              rotation={-4}
              delay={0.4}
            />
            <Polaroid
              image={crackingthecode}
              caption="Making tech less scary, one TikTok at a time"
              rotation={1}
              delay={0.5}
            />
          </div>
        </div>

        {/* Story Constellation */}
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold mb-4">My Story Constellation</h1>
          <p className="text-lg text-muted-foreground mb-12">
            A resume lists what I&apos;ve done, but not <em>how</em> I got there.
            Each accomplishment has a story; late nights learning, first
            teaching moments, teamwork, and experiences that shaped me. This
            constellation lets you explore the journey behind each milestone,
            not just the outcome.
          </p>

          {/* Timeline */}
          <div className="relative flex flex-col gap-12">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-border/40 rounded-full" />

            {milestones.map((m, index) => (
              <motion.div
                key={index}
                className="relative pl-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary shadow-lg" />

                {/* Milestone Card */}
                <div className="p-6 rounded-xl border bg-card shadow-sm">
                  {/* Title + subtitle */}
                  <h2 className="text-xl font-semibold">{m.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {m.subtitle}
                  </p>

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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
