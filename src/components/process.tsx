"use client";

import { motion } from "framer-motion";
import { devProcess } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Icon } from "@/components/icon";

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      <div className="container">
        <SectionHeading
          eyebrow="Website Development Process"
          title={
            <>
              From blank page to{" "}
              <span className="text-gradient">live product.</span>
            </>
          }
          description="A repeatable process I follow to design, build, and ship websites that load fast and convert."
        />

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-accent/40 to-transparent md:block" />

          <div className="space-y-6">
            {devProcess.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-surface group relative flex flex-col gap-4 p-6 md:flex-row md:items-start md:gap-6 md:pl-20"
                >
                  <span className="absolute left-0 top-6 hidden h-12 w-12 -translate-x-1/2 place-items-center rounded-2xl border border-border/60 bg-background font-mono text-sm font-bold text-primary shadow-lg md:grid md:left-6">
                    {step.step}
                  </span>

                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary ring-1 ring-inset ring-primary/20 md:hidden">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>

                  <div className="hidden shrink-0 md:block">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary ring-1 ring-inset ring-primary/20">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-muted-foreground md:hidden">
                        STEP {step.step}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span key={tool} className="chip">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
