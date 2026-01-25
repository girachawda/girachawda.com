import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/projects";

export default function Project() {
  return (
    <section className="mt-20 text-center w-full">
      <h2 className="text-2xl font-semibold mb-6">Projects 📁</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
        {projects.slice(0, 3).map((project) => (
          <Link
            key={project.slug}
            href={`/projects#${project.slug}`}
            className="block w-full rounded-xl overflow-hidden border border-border hover:shadow-lg hover:scale-[1.02] transition-transform bg-card text-left"
          >
            <div className="w-full h-68 relative">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition: "50% 20%" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="bg-background p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {project.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
