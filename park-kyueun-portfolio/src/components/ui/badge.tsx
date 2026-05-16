import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border-2 border-ink px-3 py-1 text-sm font-semibold transition-transform duration-150 hover:-translate-y-0.5 hover:rotate-[-1deg]",
  {
    variants: {
      tone: {
        pink: "bg-pink text-cream",
        blue: "bg-blue text-cream",
        yellow: "bg-yellow text-ink",
        lime: "bg-lime text-ink",
        lavender: "bg-lavender text-ink",
        cream: "bg-cream text-ink",
      },
    },
    defaultVariants: { tone: "cream" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone, className }))} {...props} />;
}

const TONES: NonNullable<BadgeProps["tone"]>[] = [
  "pink",
  "blue",
  "yellow",
  "lime",
  "lavender",
];

export function toneFor(seed: string | number, offset = 0): BadgeProps["tone"] {
  const s =
    typeof seed === "number"
      ? seed
      : Array.from(seed).reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return TONES[(s + offset) % TONES.length];
}
