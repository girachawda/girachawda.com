import Image from "next/image";
import pfp from "../assets/pfp.jpg";
import article from "../assets/article.jpg";
import linkedin from "../assets/linkedin.png";
import tiktok from "../assets/tiktok.jpg";
import github from "../assets/github.png";
import ewo from "../assets/ewo.jpg";
import interview from "../assets/interview.png";
import Project from "../components/Project";

export default function Home() {
  return (
    <section className="mt-20 flex flex-col items-center">
      {/* 🌟 Intro Section with Profile Picture */}
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
              className="hover:opacity-80 transition"
            >
              <Image src={github} alt="GitHub" width={28} height={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/girachawda/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <Image src={linkedin} alt="LinkedIn" width={28} height={28} />
            </a>
            <a
              href="https://www.tiktok.com/@giraintech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <Image src={tiktok} alt="TikTok" width={28} height={28} />
            </a>
          </div>
        </div>

        {/* Text + Buttons */}
        <div className="text-center sm:text-left space-y-6">
          <h1 className="text-5xl font-bold">Hi, I’m Gira Chawda 👋</h1>

          <p className="text-lg text-muted-foreground max-w-2xl">
            Software Engineering Intern @ Shopify & Digital Technologies Student
            @ York University. I love building scalable products, sharing
            knowledge, and empowering innovation through technology.
          </p>

          <div className="flex justify-center sm:justify-start gap-4 mt-10">
            <a
              href="/about"
              className="px-5 py-2 bg-primary text-primary-foreground rounded-md hover:bg-accent transition"
            >
              Learn More
            </a>
            <a
              href="/insights"
              className="px-5 py-2 border border-border rounded-md hover:bg-muted transition"
            >
              See My Insights
            </a>
          </div>
        </div>
      </div>

      {/* 🌟 Featured Section */}
      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">Highlights ✨</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
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

          {/* 3️⃣ Speaking Feature */}
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
                The Power of Work-Integrated Learning: A Conversation with Dean
                Jane Goodyear
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Youtube · York University x City of Markham
              </p>
            </div>
          </a>

          {/* 3️⃣ EWO Feature */}
          <a
            href="https://ewo.ca/awards/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden border border-border hover:shadow-lg hover:scale-[1.02] transition-transform bg-card"
          >
            <div className="w-full h-64 relative">
              <Image
                src={ewo}
                alt="Gira Chawda winning Student of the Year Ontario"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>
            <div className="bg-background p-4 text-left">
              <h3 className="text-lg font-semibold">
                Gira Chawda: 2024 Ontario Work-Integrated Learning Student of
                the Year
              </h3>
              <p className="text-sm text-muted-foreground mt-1">EWO</p>
            </div>
          </a>
        </div>
      </div>
      < Project />
    </section>
  );
}
