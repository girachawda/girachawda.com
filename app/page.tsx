"use client";

import Image from "next/image";
import pfp from "../assets/pfp.jpg";
import article from "../assets/article.jpg";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tiktok.jpg";
import github from "../assets/github.png";
import intern_interview from "../assets/intern_interview.jpg";
import interview from "../assets/interview.png";
import Project from "../components/Project";
import Carousel from "@/components/Carousel";
import FadeIn from "@/components/FadeIn";
import instagram from "../assets/instagram.png";

export default function Home() {
  return (
    <section className="mt-6 flex flex-col items-center">
      {/* Intro Section with Profile Picture */}
      <FadeIn immediate>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          {/* Profile Picture */}
          <div className="flex flex-col items-center space-y-6">
            {/* Profile Picture */}
            <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden">
              <Image
                src={pfp}
                alt="Gira Chawda"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="https://github.com/girachawda"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition hover:shadow-lg hover:scale-[1.1]"
              >
                <Image src={github} alt="GitHub" width={28} height={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/girachawda/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition hover:shadow-lg hover:scale-[1.1]"
              >
                <Image src={linkedin} alt="LinkedIn" width={28} height={28} />
              </a>
              <a
                href="https://www.tiktok.com/@giraintech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition hover:shadow-lg hover:scale-[1.1]"
              >
                <Image src={tiktok} alt="TikTok" width={28} height={28} />
              </a>
              <a 
                href="https://www.instagram.com/giraintech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition hover:shadow-lg hover:scale-[1.1]"
              >
                <Image src={instagram} alt="Instagram" width={28} height={28} />
              </a>
            </div>
          </div>

          {/* Text + Buttons */}
          <div className="text-center sm:text-left space-y-6">
            <h1 className="text-5xl font-bold">Hi, I&apos;m Gira Chawda 👋</h1>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Software Engineering Intern @ Shopify & Digital Technologies
              Student @ York University. I love building scalable products,
              sharing knowledge, and empowering innovation through technology.
            </p>

            <div className="flex justify-center sm:justify-start gap-4 mt-10">
              <a
                href="/about"
                className="px-5 py-2 bg-primary text-primary-foreground rounded-md hover:text-white hover:bg-gray-600 transition"
              >
                Learn More
              </a>
              <a
                href="/projects"
                className="px-5 py-2 border border-border rounded-md hover:bg-muted transition"
              >
                See My Projects
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Featured Section */}
      <FadeIn delay={0.1}>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">Highlights ✨</h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
            <FadeIn delay={0.1} direction="up">
              <a
                href="https://www.yorku.ca/yfile/2025/03/28/award-winning-teen-trailblazer-talks-tech-transformative-learning/"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-border hover:shadow-lg hover:scale-[1.02] transition-transform bg-card"
              >
                <div className="w-full h-64 relative">
                  <Image
                    src={article}
                    alt="Gira Chawda featured in York University YFile article"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
                <div className="bg-background p-4 text-left">
                  <h3 className="text-lg font-semibold">
                    Award-winning teen trailblazer talks tech, transformative
                    learning
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    YFile · York University
                  </p>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.2} direction="up">
              <a
                href="https://www.youtube.com/watch?v=RPKe7xiDdtM"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-border hover:shadow-lg hover:scale-[1.02] transition-transform bg-card"
              >
                <div className="w-full h-64 relative">
                  <Image
                    src={intern_interview}
                    alt="Gira Chawda winning Student of the Year Ontario"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
                <div className="bg-background p-4 text-left">
                  <h3 className="text-lg font-semibold">
                    Gira Chawda: Intern Spotlight @ Shopify | &quot;I really
                    didn&apos;t think coding was for me&quot;
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Shopify · Julia Fedorin
                  </p>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.3} direction="up">
              <a
                href="https://youtu.be/R3H6mXRdWzQ?list=LL&t=63"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-border hover:shadow-lg hover:scale-[1.02] transition-transform bg-card"
              >
                <div className="w-full h-64 relative">
                  <Image
                    src={interview}
                    alt="Gira Chawda speaking about Work Integrated Learning with Dean Jane Goodyear"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "50% 20%" }}
                  />
                </div>
                <div className="bg-background p-4 text-left">
                  <h3 className="text-lg font-semibold">
                    The Power of Work-Integrated Learning: A Conversation with
                    Dean Jane Goodyear
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Youtube · York University x City of Markham
                  </p>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="my-18 max-w-4xl text-center px-6">
          <blockquote className="text-4xl sm:text-5xl font-semibold leading-tight">
            Making tech less intimidating, one video at a time.
          </blockquote>

          <p className="mt-6 text-lg text-muted-foreground">
            I show the real journey—not just the wins. The hard work, the mess,
            and yes, sometimes the glamorous parts too. Making programming
            accessible means proving you don&apos;t need to be perfect to begin.
          </p>
        </div>
        {/* <div className="my-18 max-w-4xl text-center px-6">
          <blockquote className="text-4xl sm:text-5xl font-semibold leading-tight">
            Shipping real, impactful features at Shopify.
          </blockquote>

          <p className="mt-6 text-lg text-muted-foreground">
            I&apos;ve helped ship Plus trials for Plus merchants, launched Catalogs in
            Markets for enterprise teams, and I&apos;m currently building AI-powered
            support tools as part of CX R&D.
          </p>
        </div> */}
      </FadeIn>

      <FadeIn delay={0.1}>
        <Carousel />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Project />
      </FadeIn>
    </section>
  );
}
