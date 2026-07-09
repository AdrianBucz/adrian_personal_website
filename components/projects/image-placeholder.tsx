interface ImagePlaceholderProps {
  label: string;
  size?: "large" | "small";
}

export function ImagePlaceholder({ label, size = "large" }: ImagePlaceholderProps) {
  const sizeClass = size === "large" ? "aspect-[16/10]" : "aspect-[16/9]";

  return (
    <div
      className={`relative ${sizeClass} overflow-hidden rounded-2xl border border-zinc-300/80 bg-[linear-gradient(145deg,#f8fafc_0%,#f1f5f9_45%,#e2e8f0_100%)] p-6`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.9),transparent_40%)]" />
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-40">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} className="border border-zinc-300/50" />
        ))}
      </div>
      <div className="relative z-10 flex h-full items-end">
        <span className="rounded-md bg-white/90 px-3 py-1.5 text-sm font-semibold text-zinc-700">{label}</span>
      </div>
    </div>
  );
}
