import { StaticImageData } from "next/image";
import snapchatmems from "../assets/snapchatmems.png";
import crackingthecode from "../assets/crackingthecode.png";
import mixify from "../assets/mixify.png";
import climbing from "../assets/climbing.png";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  link: string;
  linkText: string;
  links?: { label: string; href: string }[];
  image: StaticImageData;
  imageAlt: string;
  tags: string[];
  year: string;
}

export const projects: Project[] = [
  {
    slug: "cracking-the-code",
    title: "Cracking the Code",
    subtitle: "Teaching Youth to Code for Free (2020–2023)",
    description:
      "A youth-centered initiative making coding education free and accessible.",
    bullets: [
      "Founded a platform offering free coding resources for youth.",
      "Organized bootcamps and workshops (2020–2023).",
      "Partnered with nonprofits to expand access to tech education.",
    ],
    link: "https://www.yorku.ca/yfile/2025/03/28/award-winning-teen-trailblazer-talks-tech-transformative-learning/",
    linkText: "Related feature",
    image: crackingthecode,
    imageAlt: "Cracking the Code project cover",
    tags: ["Education", "Community", "Teaching"],
    year: "2020-2023",
  },
  {
    slug: "snapchat-memory-downloader",
    title: "Snapchat Memory Downloader",
    subtitle: "Python Tool to Bypass Snapchat's 5GB Storage Limit",
    description:
      "After my TikTok video about Snapchat deleting memories went viral, I built a Python tool to help people save their memories before they're gone forever. Created both a coder-friendly version and a beginner-friendly version with a full YouTube tutorial.",
    bullets: [
      "Viral TikTok video sparked the need for this tool",
      "Downloads complete Snapchat memories collection to local storage",
      "Built two versions: technical and non-coder friendly",
      "Created comprehensive YouTube tutorial for accessibility",
      "Helped thousands preserve their memories before deletion",
    ],
    link: "https://github.com/girachawda/SnapchatMemoryDownloader",
    linkText: "View on GitHub",
    links: [
      {
        label: "Technical Version (GitHub)",
        href: "https://github.com/girachawda/SnapchatMemoryDownloader",
      },
      {
        label: "Non-Coder Friendly Version",
        href: "https://github.com/girachawda/SnapchatMemoryDownloaderNonCoderFriendly",
      },
      {
        label: "Watch YouTube Tutorial",
        href: "https://www.youtube.com/watch?v=7MIjmBvyTQE",
      },
    ],
    image: snapchatmems,
    imageAlt: "Snapchat Memory Downloader project",
    tags: ["Python", "Viral Impact", "Open Source"],
    year: "2025",
  },
  {
    slug: "mixify",
    title: "Mixify",
    subtitle: "Personalize Music Playlists with AI",
    description:
      "A music personalization project that uses AI to curate playlists from user preferences.",
    bullets: [
      "React frontend + Python backend for playlist generation.",
      "Spotify API integration for real-time recommendations.",
      "Responsive UI for smooth UX.",
    ],
    link: "https://github.com/patricksilva-yu/2107",
    linkText: "View on GitHub",
    image: mixify,
    imageAlt: "Mixify project preview",
    tags: ["AI", "Full-Stack", "Music"],
    year: "2024",
  },
  {
    slug: "cticl",
    title: "Climbing the Intern Corporate Ladder",
    subtitle: "TikTok Series",
    description:
      "In this series, I share valuable tips I've learned from my journey as an intern.",
    bullets: [
      "Help others increase their visibility",
      "Share tips about being active learners",
      "Explore strategies to navigate the corporate landscape effectively",
    ],
    link: "https://www.tiktok.com/@giraintech/collection/CTICL%20%F0%9F%AA%9C%E2%9C%A8-7513937692746091270",
    linkText: "Watch on TikTok",
    image: climbing,
    imageAlt: "Climbing the Intern Corporate Ladder cover",
    tags: ["Content Creation", "Career Advice", "Social Media"],
    year: "2024",
  },
];
