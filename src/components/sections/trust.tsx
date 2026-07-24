"use client";

import { motion } from "framer-motion";
import { Eye, Fingerprint, Gauge, Globe, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { fadeUp } from "@/lib/motion";

const TRUST_POINTS = [
  {
    icon: Fingerprint,
    title: "App lock, built for real life",
    desc: "PIN and biometric protection with escalating lockouts against brute-force attempts — and a safe way back in, always.",
  },
  {
    icon: Eye,
    title: "Audience controls that mean it",
    desc: "\"Close Friends\" is a real, honest audience. It never quietly widens to everyone — your choice is respected exactly as made.",
  },
  {
    icon: ShieldCheck,
    title: "Disappearing messages, actually gone",
    desc: "View-once and disappearing messages expire for real — not just hidden behind a tap.",
  },
  {
    icon: Globe,
    title: "Built on enterprise-grade infrastructure",
    desc: "Real-time messaging and calls run on global communications infrastructure engineered for millions of concurrent conversations.",
  },
  {
    icon: Zap,
    title: "Local-first, so it's instant",
    desc: "Chats open from cache before the network even responds — speed is a feature, not an afterthought.",
  },
  {
    icon: Gauge,
    title: "Honest, by design",
    desc: "If a feature isn't ready, we say so. No dead buttons, no fabricated answers, no theatre — trust is the product.",
  },
];

export function Trust() {
  return (
    <section id="security" className="relative py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Pill>Security &amp; Trust</Pill>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Never imply a protection we don&apos;t actually deliver.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            That&apos;s not a tagline — it&apos;s a rule we hold ourselves to.
            Here&apos;s what we can honestly say about how Quiick Chat
            protects you today.
          </p>
        </Reveal>

        <RevealGroup
          staggerChildren={0.06}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TRUST_POINTS.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-6 shadow-e1"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
