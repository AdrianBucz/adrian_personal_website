import type { PortfolioProject } from "@/types/projects";

import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  title: string;
  projects: PortfolioProject[];
  variant?: "featured" | "standard";
  description?: string;
}

export function ProjectGrid({
  title,
  projects,
  variant = "standard",
  description,
}: ProjectGridProps) {
  const isFeatured = variant === "featured";

  return (
    <section aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}>
      <div className="mb-5">
        <h2
          id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
          className="text-2xl font-semibold tracking-tight text-zinc-900"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-2 max-w-3xl text-base leading-7 text-zinc-600">{description}</p>
        ) : null}
      </div>

      <div className={isFeatured ? "grid gap-6 lg:grid-cols-3" : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} variant={variant} />
        ))}
      </div>
    </section>
  );
}
