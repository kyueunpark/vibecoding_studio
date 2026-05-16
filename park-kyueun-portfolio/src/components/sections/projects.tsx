import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge, toneFor } from "@/components/ui/badge";
import { portfolio } from "@/data/portfolio";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2
            className="text-5xl font-bold tracking-tight sm:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Projects
            <span className="text-blue">.</span>
          </h2>
          <p className="mt-3 max-w-xl text-lg text-ink-soft">
            취미와 실험이 가끔 진짜 제품이 됩니다. 최근에 만든 것들이에요.
          </p>
        </div>
        <span className="rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-sm font-semibold shadow-[3px_3px_0_0_var(--color-ink)]">
          총 {portfolio.projects.length}개
        </span>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.projects.map((p, i) => (
          <Card key={p.title} className="flex h-full flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <span
                  className="text-4xl"
                  aria-hidden
                  style={{ filter: "drop-shadow(2px 2px 0 var(--color-ink))" }}
                >
                  {p.emoji}
                </span>
                <span className="rounded-full border-2 border-ink bg-cream px-2 py-0.5 font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>

            <CardContent className="mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t, j) => (
                  <Badge key={t} tone={toneFor(t, j + i)}>
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-cream px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-cream"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              )}
              {p.links.demo && (
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-pink px-3 py-1.5 text-sm font-semibold text-cream transition-colors hover:bg-ink"
                >
                  Demo
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
