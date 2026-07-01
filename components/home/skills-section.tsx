import { skillCategories } from "@/lib/home-content";

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-snapshot-title" className="py-8 sm:py-10">
      <h2
        id="skills-snapshot-title"
        className="text-2xl font-semibold tracking-tight text-zinc-900"
      >
        Skills Snapshot
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-lg border border-zinc-200 bg-white p-5"
          >
            <h3 className="text-base font-semibold text-zinc-900">
              {category.title}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
