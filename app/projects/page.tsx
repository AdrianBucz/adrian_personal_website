import { ImagePlaceholder } from "@/components/projects/image-placeholder";
import { ProjectHeader } from "@/components/projects/project-header";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { ProjectSection } from "@/components/projects/project-section";
import { TechnologyTag } from "@/components/projects/technology-tag";
import { featuredProjects, projectNavigationItems, starsProjects } from "@/lib/projects-data";

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(240,249,255,0.85),_transparent_55%),radial-gradient(circle_at_20%_30%,_rgba(254,249,195,0.55),_transparent_40%)]" />

      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-12 sm:pt-16 lg:px-10">
        <ProjectHeader />

        <section
          aria-labelledby="projects-introduction"
          className="scroll-mt-28 border-l-2 border-zinc-300/80 pl-5 sm:pl-7"
        >
          <h2 id="projects-introduction" className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Introduction
          </h2>
          <p className="mt-4 max-w-4xl text-lg leading-8 text-zinc-700">
            
          </p>
        </section>

        <div className="mt-12 grid gap-10 xl:grid-cols-[18rem_minmax(0,1fr)]">
          <ProjectNavigation items={projectNavigationItems} />

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <ProjectSection
                key={project.id}
                id={project.id}
                title={project.title}
                whatItWas={project.whatItWas}
                whyItWasBuilt={project.whyItWasBuilt}
                responsibilities={project.responsibilities}
                engineeringChallenges={project.engineeringChallenges}
                keyAccomplishments={project.keyAccomplishments}
                technologies={project.technologies}
                imagePlaceholderLabel={project.imagePlaceholderLabel}
                reverse={index % 2 === 1}
              />
            ))}

            <section id="stars-projects" aria-labelledby="stars-projects-title" className="scroll-mt-28 border-t border-zinc-300/70 pt-12">
              <h2 id="stars-projects-title" className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                STARS Projects
              </h2>
              <p className="mt-4 max-w-4xl text-base leading-7 text-zinc-700">
                Throughout my undergraduate career at Purdue University, I participated in the STARS (Summer Training for Awareness and Readiness for Semiconductors) program, completing a variety of hardware and software projects that greatly deepened my computer engineering skills. The first summer I was a student in the program, then I was a peer mentor and project leader for the next two summers. Through STARS I was able to experience the the full chip design process four times. The program covers everything from idea generation to tapeout. I believe it is accurate to say that STARS was a transformative experience for me.
              </p>
              <p className="mt-4 max-w-4xl text-base leading-7 text-zinc-700">
                The projects below represent a selection of the work completed through the program and illustrate the progression of my technical skills over time.
              </p>
              <section aria-labelledby="stars-projects-additional-context" className="mt-6 max-w-4xl border-l-2 border-zinc-300/80 pl-4">
                <h3
                  id="stars-projects-additional-context"
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500"
                >
                  Additional Context
                </h3>
                <p className="mt-3 text-base leading-7 text-zinc-700">
                  For those interested in the technical details of the program as a whole, when I was in STARS we worked with a company called Efabless. Efabless provided a codebase with their IP for the projects. Every summer, student designs are hardened and placed in an empty space on the Efabless IP. The designs are then sent to SkyWater to be manufactured and returned to participating students. As a mentor, I had a part of the responsibility of integrating student projects into the larger system. This invloved hardening student projects with Cadence tools, fixing manufacturability issues, and designing an inter-project bus for communication with the Efabless IP. I was also directly responsible for three teams totaling 13 students. 
                </p>
              </section>

              <div className="mt-10 space-y-12">
                {starsProjects.map((project, index) => (
                  <article
                    key={project.id}
                    id={project.id}
                    aria-labelledby={`${project.id}-title`}
                    className="scroll-mt-28 border-t border-zinc-300/70 pt-10"
                  >
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-start">
                      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                        <ImagePlaceholder label={project.imagePlaceholderLabel} size="small" />
                      </div>

                      <div className={`max-w-3xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                        <h3 id={`${project.id}-title`} className="text-2xl font-semibold tracking-tight text-zinc-900">
                          {project.title}
                        </h3>
                        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-700">{project.summary}</p>

                        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                          {project.technologies.map((technology) => (
                            <li key={technology}>
                              <TechnologyTag label={technology} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <footer className="border-t border-zinc-300/70 pt-10 text-sm text-zinc-600">
              <p>End of portfolio. Additional implementation details and artifacts are available upon request.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
