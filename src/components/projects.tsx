"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, Zap } from "lucide-react";
import { aiProjects, marketingProjects, type Project } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";
import { Icon } from "@/components/icon";

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  return (
    <Reveal delay={index * 0.07} className={featured ? "sm:col-span-2" : ""}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="card-surface group h-full p-6"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="flex items-start justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary ring-1 ring-inset ring-primary/20">
            <Icon name={project.icon} className="h-6 w-6" />
          </span>
          <div className="flex items-center gap-2">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                aria-label={`Open ${project.title}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            ) : null}
            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                aria-label={`Source code for ${project.title}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <h3 className="mt-5 text-lg font-semibold tracking-tight sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.highlight ? (
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <Zap className="h-3.5 w-3.5" />
            {project.highlight}
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Work that <span className="text-gradient">performs.</span>
            </>
          }
          description="Two sides of what I do — content & growth, and the AI products that scale them."
        />

        <div className="mt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-accent">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Video Editing & Digital Marketing</h3>
                <p className="text-sm text-muted-foreground">
                  Content engines built for reach and revenue
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {marketingProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                featured={project.featured}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary">
                <Zap className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Real-Time AI & Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Products that think, automate, and respond instantly
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
