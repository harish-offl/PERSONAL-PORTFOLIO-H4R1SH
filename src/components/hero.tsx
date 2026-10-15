"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Play,
} from "lucide-react";
import { profile } from "@/lib/data";
import { WhatsAppIcon } from "@/components/brand-icons";

const socials = [
  { icon: Github, href: profile.socials.github, label: "GitHub", color: "#e6edf3", bg: "rgba(255,255,255,0.12)" },
  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn", color: "#0A66C2", bg: "rgba(10,102,194,0.16)" },
  { icon: Instagram, href: profile.socials.instagram, label: "Instagram", color: "#E1306C", bg: "rgba(225,48,108,0.16)" },
  { icon: WhatsAppIcon, href: profile.socials.whatsapp, label: "WhatsApp", color: "#25D366", bg: "rgba(37,211,102,0.16)" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 glow-grid" />
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/25 blur-[120px] animate-pulse-glow" />
        <div className="absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#FF6B00]/25 blur-[120px] animate-pulse-glow" />
      </div>

      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={item} className="flex justify-center">
            <span className="chip">
              <span className="mr-2 inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient animate-gradient-pan bg-[length:200%_auto]">
              {profile.firstName}
            </span>
            <br />
            I build content & AI that converts.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {profile.heroDescription}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <Play className="h-4 w-4" />
              Explore Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center justify-center gap-3"
          >
            {socials.map(({ icon: Icon, href, label, color, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ "--brand": color, "--brand-bg": bg } as React.CSSProperties}
                className="grid h-10 w-10 place-items-center rounded-full border border-border/70 text-[color:var(--brand)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:bg-[var(--brand-bg)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
