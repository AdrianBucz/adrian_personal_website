import { PageIntro } from "@/components/page-intro";

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12">
      <PageIntro
        title="Resume"
        description="View my resume below or download the PDF directly."
      />

      <div className="mt-8 flex flex-wrap gap-3 px-0">
        <a
          href="/Adrian_Resume.pdf"
          download
          className="inline-flex items-center rounded-md border border-zinc-300 bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Download Resume
        </a>
        <a
          href="/Adrian_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
        >
          Open PDF
        </a>
      </div>

      <section className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="border-b border-zinc-200 px-4 py-3 text-sm font-medium text-zinc-700">
          Resume Preview
        </div>
        <iframe
          src="/Adrian_Resume.pdf"
          title="Adrian Resume PDF"
          className="h-[80vh] w-full"
        />
      </section>
    </div>
  );
}
