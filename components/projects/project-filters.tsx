export function ProjectFilters() {
  return (
    <section aria-labelledby="project-filters-title" className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 sm:p-5">
      <h2 id="project-filters-title" className="text-base font-semibold text-zinc-900">
        Filters (Coming Soon)
      </h2>
      <p className="mt-2 text-sm text-zinc-600">
        This placeholder reserves space for future filtering by domain, technology, and project type.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {[
          "Computer Architecture",
          "Digital Design",
          "Verification",
          "FPGA",
          "Systems",
        ].map((label) => (
          <span
            key={label}
            className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-500"
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
