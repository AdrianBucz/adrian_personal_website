import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="pt-12 pb-7 sm:pt-16 sm:pb-9"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">
            Home
          </p>
          <h1
            id="home-hero-title"
            className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl"
          >
            Adrian Buczkowski
          </h1>
          <h2 className="mt-4 text-lg font-medium text-zinc-700 sm:text-xl">
            B.S. Computer Engineering - Purdue University
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600">
            I hold a B.S. in Computer Engineering from Purdue University with a
            passion for designing efficient digital systems. My interests span
            computer architecture, RTL design, hardware-software interface,
            FPGA development, hardware verification, and high-performance
            computing. I enjoy solving complex engineering problems and building
            systems that bridge theory and real-world hardware. The purpose of
            this site is to highlight accomplishments I am proud of.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            >
              Download Resume
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50">
            <Image
              src="/images/profile/profile-photo.jpg"
              alt="Portrait of Adrian Buczkowski"
              width={800}
              height={1000}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
