import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-12 -z-10 size-72 rounded-full bg-pink/70 blur-3xl [animation:var(--animate-float)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-40 -z-10 size-80 rounded-full bg-blue/50 blur-3xl [animation:var(--animate-float)] [animation-delay:-3s]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/3 -bottom-16 -z-10 size-64 rounded-full bg-yellow/70 blur-3xl [animation:var(--animate-float)] [animation-delay:-6s]"
      />

      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-4 py-1.5 text-sm font-semibold shadow-[3px_3px_0_0_var(--color-ink)]">
          <span className="size-2 rounded-full bg-lime [animation:var(--animate-wiggle)]" />
          {portfolio.role} · 지금 새로운 기회를 찾고 있어요
        </span>

        <h1
          className="mt-8 font-bold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="block text-5xl leading-[0.95] sm:text-7xl md:text-8xl">
            안녕하세요,
          </span>
          <span className="mt-2 block text-6xl leading-[0.95] sm:text-8xl md:text-9xl">
            <span className="relative inline-block">
              <span className="relative z-10">{portfolio.name}</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-yellow sm:h-6 md:h-8"
              />
            </span>
            <span className="text-pink"> 이에요.</span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-ink-soft sm:text-xl">
          {portfolio.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects">
            <Button size="lg" variant="primary">
              프로젝트 보기 →
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline">
              연락하기
            </Button>
          </a>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y-2 border-ink bg-ink py-4">
        <div className="flex w-max gap-10 [animation:var(--animate-marquee)] whitespace-nowrap text-cream">
          {[...portfolio.marquee, ...portfolio.marquee].map((word, i) => (
            <span
              key={i}
              className="flex items-center gap-10 text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {word}
              <span className="text-pink">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
