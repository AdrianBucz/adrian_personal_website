import { PageIntro } from "@/components/page-intro";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12">
      <PageIntro
        title="Contact"
        description="Reach out by email or connect with me on LinkedIn."
      />

      <div className="mt-8 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <a
          href="mailto:buczkowskiadrian3@gmail.com"
          className="block rounded-lg border border-zinc-200 px-4 py-4 text-base font-medium text-zinc-900 transition hover:bg-zinc-50"
        >
          buczkowskiadrian3@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/adrian-buczkowski-72676527a"
          target="_blank"
          rel="noreferrer"
          className="block rounded-lg border border-zinc-200 px-4 py-4 text-base font-medium text-zinc-900 transition hover:bg-zinc-50"
        >
          linkedin.com/in/adrian-buczkowski-72676527a
        </a>
      </div>
    </div>
  );
}
