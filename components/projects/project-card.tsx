import Link from "next/link";

import type { PortfolioProject } from "@/types/projects";

import { TechnologyTag } from "./technology-tag";

interface ProjectCardProps {
  project: PortfolioProject;
  variant?: "featured" | "standard";
}

export function ProjectCard({ project, variant = "standard" }: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ${
        isFeatured ? "sm:p-6" : ""
      }`}
    >
      <div
        className={`mb-4 flex items-center justify-center rounded-md border-2 border-dashed border-zinc-300 bg-zinc-50 text-center font-medium text-zinc-500 ${
          isFeatured ? "aspect-[16/9] text-sm" : "aspect-[16/10] text-xs"
        }`}
      >
        {project.imagePlaceholderLabel}
      </div>

      <h3 className={`${isFeatured ? "text-xl" : "text-lg"} font-semibold text-zinc-900`}>
        {project.title}
      </h3>
      <p className={`mt-3 ${isFeatured ? "text-base" : "text-sm"} leading-6 text-zinc-600`}>
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology}>
            <TechnologyTag label={technology} />
          </li>
        ))}
      </ul>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-5 inline-flex rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
      >
        Learn More
      </Link>
    </article>
  );
}
