interface TechnologyTagProps {
  label: string;
}

export function TechnologyTag({ label }: TechnologyTagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-700">
      {label}
    </span>
  );
}
