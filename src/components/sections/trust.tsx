"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Fingerprint, Lock } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { fadeUp } from "@/lib/motion";

const TRUST_POINTS = [
  {
    icon: Lock,
    title: "End-to-end encrypted",
    desc: "Messages and calls are scrambled on your device and only unlocked on the other person's — no one in between can read them.",
  },
  {
    icon: Eye,
    title: "You control your audience",
    desc: "Decide who sees your status, who can find you, and who can reach you. Your choices are respected exactly as made.",
  },
  {
    icon: Fingerprint,
    title: "Locked down on your device",
    desc: "App Lock with a PIN or biometrics, plus block and report tools wherever you need them.",
  },
];

export function Trust() {
  return (
    <section id="security" className="relative py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Pill>
              <Lock className="h-3 w-3" /> Private &amp; secure by design
            </Pill>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            End-to-end encrypted. Private the way it should be.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Your conversations belong to you — encrypted end-to-end, with real
            controls over who can see and reach you.
          </p>
        </Reveal>

        <RevealGroup
          staggerChildren={0.06}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
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

        <Reveal className="mt-10 text-center">
          <Link
            href="/security"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-accent-bright"
          >
            See how we protect you <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
