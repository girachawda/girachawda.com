"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import pfp from "../assets/pfp.jpg";
import ontheotherside from "../assets/ontheotherside.png";
import intern_interview from "../assets/intern_interview.jpg";
import article from "../assets/article.jpg";
import interview from "../assets/interview.png";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tiktok.jpg";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import Carousel from "@/components/Carousel";
import FadeIn from "@/components/FadeIn";

const pillars = [
  {
    label: "Build",
    description:
      "I ship real features at Shopify, from merchant-facing Catalogs to AI-powered CX tools.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Speak",
    description:
      "Taking the stage at York University events, donor galas, and tech panels to advocate for inclusion in tech.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="9" y="2" width="6" height="11" rx="3" />
        <path d="M5 10a7 7 0 0 0 14 0" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    label: "Teach",
    description:
      "I make tech less intimidating through TikToks, YouTube tutorials, and free coding workshops.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2a7 7 0 0 1 7 7c0 3-1.8 5.4-4.5 6.5V17H9.5v-1.5C6.8 14.4 5 12 5 9a7 7 0 0 1 7-7z" />
        <line x1="9.5" y1="20" x2="14.5" y2="20" />
        <line x1="10.5" y1="22" x2="13.5" y2="22" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* ── HERO ── */}
      <section className="relative w-full min-h-[70vh] flex items-start overflow-hidden bg-background">
        {/* Giant background text */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        >
          <span className="text-[clamp(5rem,18vw,16rem)] font-black leading-none tracking-tighter text-foreground/[0.04] whitespace-nowrap">
            GIRA CHAWDA
          </span>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-8 pb-16 flex flex-col lg:flex-row items-center gap-12">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative shrink-0"
          >
            <div className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={pfp}
                alt="Gira Chawda"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Social icons pinned below photo */}
            <div className="mt-5 flex justify-center gap-5">
              <a href="https://github.com/girachawda" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:scale-110 transition">
                <Image src={github} alt="GitHub" width={26} height={26} />
              </a>
              <a href="https://www.linkedin.com/in/girachawda/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:scale-110 transition">
                <Image src={linkedin} alt="LinkedIn" width={26} height={26} />
              </a>
              <a href="https://www.tiktok.com/@giraintech" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:scale-110 transition">
                <Image src={tiktok} alt="TikTok" width={26} height={26} />
              </a>
              <a href="https://www.instagram.com/giraintech" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:scale-110 transition">
                <Image src={instagram} alt="Instagram" width={26} height={26} />
              </a>
            </div>
          </motion.div>

          {/* Text block */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-semibold tracking-widest text-primary uppercase mb-4"
            >
              Builder · Speaker · Creator
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(2.8rem,6vw,5rem)] font-black leading-[1.05] tracking-tight mb-6"
            >
              Hi, I&apos;m<br />Gira Chawda.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
            >
              I code at Shopify, share on TikTok, and speak on stages.
              I thrive at the intersection of technical craft and sharing knowledge.
              I want to make tech feel possible for the next person.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="/about"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/80 transition"
              >
                My Story
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border border-border rounded-full font-semibold hover:bg-muted transition"
              >
                See My Work
              </a>
            </motion.div>
          </div>

          {/* Floating highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="hidden xl:flex shrink-0 flex-col gap-3 w-48"
          >
            {[
              {
                href: "https://www.yorku.ca/yfile/2025/03/28/award-winning-teen-trailblazer-talks-tech-transformative-learning/",
                image: article,
                label: "Article",
                title: "Award-winning teen trailblazer talks tech",
                isVideo: false,
              },
              {
                href: "https://www.youtube.com/watch?v=RPKe7xiDdtM",
                image: intern_interview,
                label: "Video",
                title: "Intern Spotlight @ Shopify",
                isVideo: true,
              },
              {
                href: "https://youtu.be/R3H6mXRdWzQ?list=LL&t=63",
                image: interview,
                label: "Video",
                title: "The Power of Work-Integrated Learning",
                isVideo: true,
              },
            ].map((card) => (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 flex-col rounded-xl overflow-hidden border border-border shadow-md hover:shadow-xl hover:scale-[1.03] transition-all group bg-card"
              >
                <div className="relative w-full h-28 bg-muted">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {card.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-2.5">
                  <p className="text-[9px] font-semibold text-primary uppercase tracking-wider mb-0.5">{card.label}</p>
                  <p className="text-[11px] font-medium leading-snug">{card.title}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Curved divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" className="w-full fill-muted/40" preserveAspectRatio="none">
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="w-full bg-muted/40 py-20 px-6 -mt-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-center text-sm font-semibold tracking-widest text-primary uppercase mb-12">
              What I Do
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {pillars.map((p, i) => (
              <FadeIn key={p.label} delay={i * 0.12} direction="up">
                <motion.div
                  className="text-center group cursor-default"
                  whileHover="hovered"
                  initial="rest"
                  animate="rest"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 border border-border text-foreground"
                    variants={{
                      rest: { backgroundColor: "transparent", scale: 1, rotate: 0 },
                      hovered: { backgroundColor: "oklch(0.205 0 0)", scale: 1.08, rotate: -3, color: "oklch(0.985 0 0)" },
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                  >
                    {p.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{p.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECT ── */}
      <FadeIn delay={0.1} className="w-full max-w-6xl mx-auto px-6 pt-12 pb-4">
        <div className="flex items-center gap-3 mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Featured Project</p>
        </div>

        <a
          href="https://ontheotherside.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="grid lg:grid-cols-[1fr_420px] gap-0 rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Image */}
            <div className="relative aspect-video lg:aspect-auto min-h-[280px] overflow-hidden">
              <Image
                src={ontheotherside}
                alt="On the Other Side app"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Editorial text panel */}
            <div className="bg-card p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Social Impact", "Full-Stack", "Accessibility"].map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">2025</p>

                <h2 className="text-3xl lg:text-4xl font-black leading-tight mb-4 group-hover:text-primary transition-colors">
                  On the Other Side
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  An online wall where survivors of domestic violence share their visions of peace.
                  Built by survivors, for survivors. Fully anonymous with no tracking.
                </p>

                <blockquote className="border-l-2 border-primary pl-4 text-sm italic text-muted-foreground">
                  &ldquo;There&apos;s always light at the end of the tunnel. Let us be that light for you.&rdquo;
                </blockquote>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                  Visit ontheotherside.app
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </a>

        <div className="mt-8 text-center">
          <a
            href="/projects"
            className="px-6 py-3 border border-border rounded-full font-semibold hover:bg-muted transition text-sm"
          >
            View All Projects
          </a>
        </div>
      </FadeIn>

      {/* ── QUOTE ── */}
      <FadeIn className="w-full max-w-3xl mx-auto px-6 py-20 text-center">
        <blockquote className="text-4xl sm:text-5xl font-black leading-tight mb-6">
          Making tech less intimidating, one video at a time.
        </blockquote>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I show the real journey, not just the wins. The hard work, the mess, and yes, sometimes the glamorous parts too. Making programming accessible means proving you don&apos;t need to be perfect to begin.
        </p>
      </FadeIn>

      {/* ── CONTENT CAROUSEL ── */}
      <FadeIn delay={0.1} className="w-full">
        <Carousel />
      </FadeIn>
    </div>
  );
}
