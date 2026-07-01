export function QuickIntroSection() {
  return (
    <section aria-labelledby="about-me-title" className="py-8 sm:py-10">
      <div className="grid items-start gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <h2
            id="about-me-title"
            className="text-2xl font-semibold tracking-tight text-zinc-900"
          >
            About Me
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Growing up around Purdue University fostered an appreciation for
            engineering, curiosity, and continuous learning that has shaped both
            my academic and professional goals. Throughout my undergraduate and
            graduate studies, I have focused on digital design and computer
            architecture, building projects that range from processor design and
            memory systems to verification environments and network protocols.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            I enjoy understanding how hardware works at every level, from
            individual logic elements to complete computing systems. Whether I
            am designing RTL, implementing verification environments, or
            exploring new architectural ideas, I am motivated by creating
            reliable and efficient solutions to challenging problems.
          </p>
        </div>

        <aside aria-label="Optional supporting image" className="md:pt-2">
          <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 bg-zinc-50 text-sm font-medium text-zinc-500">
            Image Placeholder
          </div>
        </aside>
      </div>
    </section>
  );
}
