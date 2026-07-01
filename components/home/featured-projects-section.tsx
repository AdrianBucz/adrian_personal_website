import { featuredProjects } from "@/lib/home-content";

import { ProjectCard } from "./project-card";

export function FeaturedProjectsSection() {
  return (
    <section aria-labelledby="featured-projects-title" className="py-8 sm:py-10">
      <h2
        id="featured-projects-title"
        className="text-2xl font-semibold tracking-tight text-zinc-900"
      >
        Featured Projects
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
