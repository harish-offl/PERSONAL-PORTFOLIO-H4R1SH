"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clapperboard, Rocket, Wand2 } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";

const pillars = [
  {
    icon: Clapperboard,
    title: "Story-first video",
    desc: "Edits engineered for retention — hooks, pacing, and sound that keep people watching.",
  },
  {
    icon: Rocket,
    title: "Growth-driven marketing",
    desc: "Funnels, paid ads, and SEO that turn attention into measurable revenue.",
  },
  {
    icon: Wand2,
    title: "AI-powered builds",
    desc: "Real-time automations and products that remove manual work from the loop.",
  },
  {
    icon: BadgeCheck,
    title: "End-to-end delivery",
    desc: "From raw concept to deployed product — one person, the whole pipeline.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Creative storytelling meets{" "}
              <span className="text-gradient">real-time engineering.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {profile.about}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/60 bg-card/50 p-4 text-center"
                >
                  <div className="text-2xl font-bold text-gradient sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-surface h-full p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
