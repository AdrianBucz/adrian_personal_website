import Image from "next/image";

export function QuickIntroSection() {
  return (
    <section
      aria-labelledby="about-me-title"
      className="pt-4 pb-8 sm:pt-5 sm:pb-10"
    >
      <div className="grid items-start gap-6 md:grid-cols-[1.45fr_1fr]">
        <div>
          <h2
            id="about-me-title"
            className="text-2xl font-semibold tracking-tight text-zinc-900"
          >
            About Me
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Growing up in West Lafayette, around Purdue University, fostered an appreciation for
            engineering, curiosity, and continuous learning that has shaped both
            my academic and professional goals. Throughout my undergraduate and
            graduate studies, I have focused on digital design and computer
            architecture, building projects that range from processor design and
            memory systems to verification environments and software projects.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            I enjoy understanding how hardware works at every level, from
            individual logic elements to complete computing systems. Whether I
            am designing RTL, implementing verification environments, or
            exploring new architectural ideas, I am motivated by creating
            reliable and efficient solutions to challenging problems.
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Outside of engineering, I am also passionate about hiking, biking,
            and staying in shape. I value spending time outdoors and riding my bike around where I live. Staying active helps me maintain a
            healthy balance and keeps me energized day to day.
          </p>
        </div>

        <aside aria-label="About section supporting image" className="md:pt-2">
          <div className="w-full max-w-xs overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 md:ml-auto">
            <Image
              src="/images/IMG_0665.jpeg"
              alt="Adrian outdoors"
              width={900}
              height={1200}
              className="h-auto w-full object-cover"
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
