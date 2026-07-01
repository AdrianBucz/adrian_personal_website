import Link from "next/link";

import { mainNavigation } from "@/lib/navigation";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap gap-2 px-6 py-4">
        {mainNavigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
