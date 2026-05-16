import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { portfolio } from "@/data/portfolio";

const blocks = [
  {
    label: "Email",
    value: portfolio.contact.email,
    href: `mailto:${portfolio.contact.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "@" + portfolio.contact.github.replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, ""),
    href: portfolio.contact.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value:
      "in/" +
      (portfolio.contact.linkedin.split("/in/")[1]?.replace(/\/$/, "") || ""),
    href: portfolio.contact.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6"
    >
      <div className="relative overflow-hidden rounded-[40px] border-2 border-ink bg-ink p-8 text-cream shadow-[10px_10px_0_0_var(--color-pink)] sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-pink/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -bottom-20 size-72 rounded-full bg-blue/40 blur-3xl"
        />

        <div className="relative">
          <h2
            className="text-5xl font-bold tracking-tight sm:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            함께 만들어볼래요
            <span className="text-yellow">?</span>
          </h2>
          <p className="mt-4 max-w-xl text-lg text-cream/80">
            새로운 팀, 흥미로운 사이드 프로젝트, 그리고 좋은 커피 한 잔의 제안을 환영합니다.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {blocks.map((b) => {
              const Icon = b.icon;
              return (
                <a
                  key={b.label}
                  href={b.href}
                  target={b.external ? "_blank" : undefined}
                  rel={b.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col gap-2 rounded-3xl border-2 border-cream/20 bg-cream/5 p-5 text-cream transition-all hover:border-cream hover:bg-cream hover:text-ink"
                >
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest opacity-80">
                    <Icon className="size-4" />
                    {b.label}
                  </span>
                  <span className="break-all text-lg font-bold transition-colors group-hover:text-ink">
                    {b.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <footer className="mt-10 text-center text-sm text-ink-soft">
        © {new Date().getFullYear()} {portfolio.name}. Made with{" "}
        <span className="text-pink">♥</span> + Next.js + Tailwind.
      </footer>
    </section>
  );
}
