import Link from "next/link";
import { portfolio } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border-2 border-ink bg-cream/85 px-4 py-2 shadow-[4px_4px_0_0_var(--color-ink)] backdrop-blur sm:px-6">
        <Link
          href="#top"
          className="flex items-center gap-2 font-bold tracking-tight"
        >
          <span className="inline-block size-3 rounded-full bg-pink" />
          <span className="text-base sm:text-lg">{portfolio.name}</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-ink/80 transition-colors hover:bg-ink hover:text-cream sm:px-4 sm:text-base"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
