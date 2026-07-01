import Link from "next/link";

export function CTASection() {
  return (
    <section
      aria-labelledby="home-cta-title"
      className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 sm:p-8"
    >
      <h2
        id="home-cta-title"
        className="text-2xl font-semibold tracking-tight text-zinc-900"
      >
        Let&apos;s Build Something Great
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
        I&apos;m always interested in opportunities involving digital design,
        FPGA development, computer architecture, and hardware verification.
        Feel free to explore my projects, download my resume, or reach out if
        you&apos;d like to connect.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/resume"
          className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
        >
          View Resume
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
