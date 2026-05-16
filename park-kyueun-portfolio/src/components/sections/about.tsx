import { Badge, toneFor } from "@/components/ui/badge";
import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6"
    >
      <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr]">
        <div>
          <h2
            className="text-5xl font-bold tracking-tight sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About
            <span className="text-pink">.</span>
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue px-3 py-1 text-sm font-semibold text-cream">
              {portfolio.role}
            </span>
            <span className="rounded-full bg-yellow px-3 py-1 text-sm font-semibold text-ink">
              Seoul, KR
            </span>
            <span className="rounded-full bg-lime px-3 py-1 text-sm font-semibold text-ink">
              구직 중
            </span>
          </div>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
          {portfolio.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="pt-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-ink">
              기술 스택
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {portfolio.skills.map((skill, i) => (
                <Badge key={skill} tone={toneFor(skill, i)}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
