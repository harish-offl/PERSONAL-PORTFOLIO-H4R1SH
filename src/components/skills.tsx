"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Icon } from "@/components/icon";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              The full <span className="text-gradient">stack</span> of what I do.
            </>
          }
          description="Creative tools on one side, engineering tools on the other — used together."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="card-surface h-full p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary ring-1 ring-inset ring-primary/20">
                    <Icon name={group.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border/70 bg-muted/50 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
