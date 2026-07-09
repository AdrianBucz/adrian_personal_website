import { ImagePlaceholder } from "./image-placeholder";
import { TechnologyTag } from "./technology-tag";

interface ProjectSectionProps {
  id: string;
  title: string;
  whatItWas: string;
  whyItWasBuilt: string;
  responsibilities: string[];
  engineeringChallenges: string[];
  keyAccomplishments: string[];
  technologies: string[];
  imagePlaceholderLabel: string;
  reverse?: boolean;
}

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">{title}</h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="relative pl-4 text-base leading-7 text-zinc-700">
            <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-zinc-500" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectSection({
  id,
  title,
  whatItWas,
  whyItWasBuilt,
  responsibilities,
  engineeringChallenges,
  keyAccomplishments,
  technologies,
  imagePlaceholderLabel,
  reverse = false,
}: ProjectSectionProps) {
  return (
    <article
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 border-t border-zinc-300/70 pt-12"
    >
      <header>
        <h2 id={`${id}-title`} className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          {title}
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2.5" aria-label={`${title} technologies`}>
          {technologies.map((technology) => (
            <li key={technology}>
              <TechnologyTag label={technology} />
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <div className={reverse ? "lg:order-2" : ""}>
          <ImagePlaceholder label={imagePlaceholderLabel} size="large" />
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">Technical Description</h3>
            <p className="mt-3 text-lg leading-8 text-zinc-800">{whatItWas}</p>
            <p className="mt-4 text-base leading-7 text-zinc-700">{whyItWasBuilt}</p>
          </section>
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <BulletList title="Responsibilities" items={responsibilities} />
        <BulletList title="Engineering Challenges" items={engineeringChallenges} />
        <BulletList title="Key Accomplishments" items={keyAccomplishments} />
      </div>
    </article>
  );
}
