"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/brand-icons";

const socials = [
  { icon: Github, href: profile.socials.github, label: "GitHub", color: "#e6edf3", bg: "rgba(255,255,255,0.12)" },
  { icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn", color: "#0A66C2", bg: "rgba(10,102,194,0.16)" },
  { icon: Instagram, href: profile.socials.instagram, label: "Instagram", color: "#E1306C", bg: "rgba(225,48,108,0.16)" },
  { icon: WhatsAppIcon, href: profile.socials.whatsapp, label: "WhatsApp", color: "#25D366", bg: "rgba(37,211,102,0.16)" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || "New project inquiry");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-primary/10 to-transparent" />
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="text-gradient">worth watching.</span>
            </>
          }
          description="Have a video, campaign, or AI product in mind? Let's talk."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-border/60 bg-card/50 p-7">
              <div>
                <h3 className="text-xl font-semibold">Get in touch</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  I usually reply within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </span>
                  {profile.email}
                </a>
                <a
                  href={profile.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[rgba(37,211,102,0.16)] text-[#25D366]">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  {profile.phone}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent">
                    <MapPin className="h-4 w-4" />
                  </span>
                  {profile.location}
                </div>
              </div>

              <div className="mt-auto">
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Find me online
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, href, label, color, bg }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      style={{ "--brand": color, "--brand-bg": bg } as React.CSSProperties}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-border/70 text-[color:var(--brand)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--brand)] hover:bg-[var(--brand-bg)]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border/60 bg-card/50 p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Your Name"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Jane Doe"
                  required
                />
                <Field
                  label="Your Email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="jane@email.com"
                  required
                />
              </div>
              <div className="mt-4">
                <Field
                  label="Subject"
                  value={form.subject}
                  onChange={set("subject")}
                  placeholder="Video edit / campaign / AI product"
                />
              </div>
              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] sm:w-auto"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Opening mail app
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: sent ? 1 : 0 }}
                className="mt-3 text-xs text-muted-foreground"
              >
                If nothing opens, email me directly at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-primary underline-offset-2 hover:underline"
                >
                  {profile.email}
                  <ArrowUpRight className="ml-0.5 inline h-3 w-3" />
                </a>
              </motion.p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border/70 bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
