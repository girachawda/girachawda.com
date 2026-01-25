"use client";

import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import wit from "../assets/wit.png";
import snap from "../assets/snapchatmems.png";
import landingpage from "../assets/landing-page.png";
import internladder from "../assets/intern-ladder.png";
import duallife from "../assets/dual-life.png";

const videos = [
  {
    title: "Python script to save Snapchat memories",
    description:
      "Snapchat announced deletion of memories, I built a Python script to help people back up their data.",
    url: "https://www.tiktok.com/@giraintech/video/7583879890265558280",
    thumbnail: snap,
    tag: "Python • Real-world problem",
  },
  {
    title: "Repping women in tech",
    description:
      "Repping the ~17% of female software engineers in the world. Women in STEM space.",
    url: "https://www.tiktok.com/@giraintech/video/7527008355315977528",
    thumbnail: wit,
    tag: "Representation • STEM",
  },
  {
    title: "Balancing school and Shopify",
    description:
      "From 5-9 as a student and 9-5 as a Dev Degree intern at Shopify — here’s how I manage it all.",
    url: "https://www.tiktok.com/@giraintech/video/7530344160620973368",
    thumbnail: duallife,
    tag: "Student Life • Dev Degree",
  },
  {
    title: "My process coding my landing page",
    description:
      "Sharing the step-by-step process behind building my personal landing page as a Dev Degree intern.",
    url: "https://www.tiktok.com/@giraintech/video/7532953660217625861",
    thumbnail: landingpage,
    tag: "Web Dev • Process",
  },
  {
    title: "Tips to be an effective intern",
    description:
      "Sharing strategies like brag docs and visibility tips to thrive as an intern at a tech company.",
    url: "https://www.tiktok.com/@giraintech/video/7522503205805149445",
    thumbnail: internladder,
    tag: "Career Advice • Interning",
  },
];

export default function VideoCarousel() {
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );

  const handleApiChange = (api: CarouselApi) => {
    if (!api) return;

    api.on("select", () => {
      autoplayRef.current.stop();
    });
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 py-4 relative">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[autoplayRef.current]}
        setApi={handleApiChange}
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {videos.map((video, index) => (
            <CarouselItem
              key={index}
              className="pl-2 sm:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden border border-border bg-card hover:scale-[1.02] transition w-full aspect-[9/16]"
              >
                <div className="relative h-3/4 w-full">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2 sm:p-3 h-1/4 flex flex-col justify-center">
                  <span className="inline-block mb-1 text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground w-fit">
                    {video.tag}
                  </span>
                  <p className="font-medium text-xs sm:text-sm line-clamp-1">{video.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 hidden sm:block">
                    {video.description}
                  </p>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
