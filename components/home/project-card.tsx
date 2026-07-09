import Link from "next/link";
import Image from "next/image";

import type { FeaturedProject } from "@/types/home";

interface ProjectCardProps {
  project: FeaturedProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      {project.imageSrc ? (
        <div className="mb-4 aspect-[16/9] overflow-hidden rounded-md border border-zinc-200 bg-zinc-50">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt ?? project.imagePlaceholderLabel}
            width={1280}
            height={720}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="mb-4 flex aspect-[16/9] items-center justify-center rounded-md border-2 border-dashed border-zinc-300 bg-zinc-50 text-sm font-medium text-zinc-500">
          {project.imagePlaceholderLabel}
        </div>
      )}
      <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{project.description}</p>
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-zinc-800">Technologies</h4>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={project.href}
        className="mt-5 inline-flex rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
      >
        Learn More
      </Link>
    </article>
  );
}
