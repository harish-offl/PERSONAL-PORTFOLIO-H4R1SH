"use client";

import { ArrowUp } from "lucide-react";
import { marqueeWords, profile } from "@/lib/data";

export function Footer() {
  const words = [...marqueeWords, ...marqueeWords];

  return (
    <footer className="relative overflow-hidden border-t border-border/60 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 pb-12 md:flex-row md:items-center">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent font-mono text-sm font-bold text-white">
                H
              </span>
              <span className="font-mono text-sm font-semibold">
                {profile.name}
                <span className="text-primary">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {profile.tagline}
            </p>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative flex overflow-hidden border-y border-border/60 py-5">
        <div className="flex animate-marquee gap-8 whitespace-nowrap pr-8">
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              {word}
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>

      <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono">
          Built with Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
