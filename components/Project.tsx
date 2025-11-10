"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import crackingthecode from "../assets/crackingthecode.png";
import mixify from "../assets/mixify.png";
import { mix } from "framer-motion";

export default function Project() {
  const [openCracking, setOpenCracking] = useState(false);
  const [openMixify, setOpenMixify] = useState(false);
  const [openNewProject, setOpenNewProject] = useState(false);

  return (
    <section className="mt-20 text-center">
      <h2 className="text-2xl font-semibold mb-6">Projects 📁</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {/* Cracking the Code */}
        <button
          onClick={() => setOpenCracking(true)}
          className="block w-full rounded-xl overflow-hidden border border-border hover:shadow-lg hover:scale-[1.02] transition-transform bg-card text-left"
        >
          <div className="w-full h-64 relative">
            <Image
              src={crackingthecode}
              alt="Cracking the Code project cover"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 20%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="bg-background p-4">
            <h3 className="text-lg font-semibold">Cracking the Code</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Teaching Youth to Code for Free (2020–2023)
            </p>
          </div>
        </button>

        {/* Mixify */}
        <button
          onClick={() => setOpenMixify(true)}
          className="block w-full rounded-xl overflow-hidden border border-border hover:shadow-lg hover:scale-[1.02] transition-transform bg-card text-left"
        >
          <div className="w-full h-64 relative">
            <Image
              src={mixify}
              alt="Mixify project preview"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 20%" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="bg-background p-4">
            <h3 className="text-lg font-semibold">Mixify</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Personalize Music Playlists with AI
            </p>
          </div>
        </button>

      {/* New Project Item */}
      <button
        onClick={() => setOpenNewProject(true)}
        className="block w-full rounded-xl overflow-hidden border border-border hover:shadow-lg hover:scale-[1.02] transition-transform bg-card text-left"
      >
        <div className="w-full h-64 relative">
          <Image
            src={mixify}
            alt="New Project cover"
            fill
            className="object-cover"
            style={{ objectPosition: "50% 20%" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="bg-background p-4">
          <h3 className="text-lg font-semibold">New Project Title</h3>
          <p className="text-sm text-muted-foreground mt-1">
            New Project Description
          </p>
        </div>
      </button>
      </div>


      {/* Cracking the Code Modal */}
      <Modal
        open={openCracking}
        onClose={() => setOpenCracking(false)}
        title="Cracking the Code"
      >
        <p className="text-sm text-muted-foreground">
          A youth-centered initiative making coding education free and
          accessible.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm leading-relaxed text-left">
          <li>Founded a platform offering free coding resources for youth.</li>
          <li>Organized bootcamps and workshops (2020–2023).</li>
          <li>Partnered with nonprofits to expand access to tech education.</li>
        </ul>
        <a
          href="https://www.yorku.ca/yfile/2025/03/28/award-winning-teen-trailblazer-talks-tech-transformative-learning/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-muted"
        >
          Related feature
        </a>
      </Modal>

      {/* Mixify Modal */}
      <Modal
        open={openMixify}
        onClose={() => setOpenMixify(false)}
        title="Mixify"
      >
        <p className="text-sm text-muted-foreground">
          A music personalization project that uses AI to curate playlists from
          user preferences.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm leading-relaxed text-left">
          <li>React frontend + Python backend for playlist generation.</li>
          <li>Spotify API integration for real-time recommendations.</li>
          <li>Responsive UI for smooth UX.</li>
        </ul>
        <a
          href="https://github.com/patricksilva-yu/2107"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-muted"
        >
          Related feature (GitHub)
        </a>
      </Modal>

      {/* New Project Modal */}
      <Modal
        open={openNewProject}
        onClose={() => setOpenNewProject(false)}
        title="New Project Title"
      >
        <p className="text-sm text-muted-foreground">New Project Description</p>
        <ul className="mt-4 list-disc pl-5 space-y-2 text-sm leading-relaxed text-left">
          {/* Add project details here */}
        </ul>
        <a
          href="/* Add your project link here */"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-lg border border-border px-3 py-2 text-sm font-medium hover:bg-muted"
        >
          Related feature
        </a>
      </Modal>
    </section>
  );
}
