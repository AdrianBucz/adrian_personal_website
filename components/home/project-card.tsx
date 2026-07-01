import Link from "next/link";

import type { FeaturedProject } from "@/types/home";

interface ProjectCardProps {
  project: FeaturedProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex aspect-[16/9] items-center justify-center rounded-md border-2 border-dashed border-zinc-300 bg-zinc-50 text-sm font-medium text-zinc-500">
        Project Image
      </div>
      <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{project.description}</p>
      <Link
        href={project.href}
        className="mt-5 inline-flex rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
      >
        Learn More
      </Link>
    </article>
  );
}
