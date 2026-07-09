interface ProjectNavigationItem {
  id: string;
  label: string;
}

interface ProjectNavigationProps {
  items: ProjectNavigationItem[];
}

export function ProjectNavigation({ items }: ProjectNavigationProps) {
  return (
    <aside className="xl:sticky xl:top-24 xl:self-start">
      <nav
        aria-label="Projects quick navigation"
        className="rounded-2xl border border-zinc-300/80 bg-white/90 p-5 backdrop-blur-sm"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-600">Projects</p>
        <ul className="mt-4 space-y-1.5">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-flex rounded px-2 py-1 text-sm text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
