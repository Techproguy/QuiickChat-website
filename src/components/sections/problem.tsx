"use client";

import { Globe2, MessagesSquare, Mic, Sparkles, Users2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";

const FRAGMENTS = [
  { icon: MessagesSquare, label: "One app for messaging" },
  { icon: Mic, label: "Another for calls" },
  { icon: Users2, label: "A third for communities" },
  { icon: Globe2, label: "A fourth to translate" },
  { icon: Sparkles, label: "And AI, bolted on nowhere in particular" },
];

export function ProblemSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            The problem
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Communication today is scattered across five apps that don&apos;t
            talk to each other.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Messaging apps got fast, then stopped. They move your words
            perfectly and understand them not at all — leaving you to
            juggle separate apps for every kind of conversation.
          </p>
        </Reveal>

        <RevealGroup
          staggerChildren={0.08}
          className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-3"
        >
          {FRAGMENTS.map(({ icon: Icon, label }, i) => (
            <motion.div key={label} variants={fadeUp} className="flex items-center gap-3">
              <div className="glass flex items-center gap-2.5 rounded-2xl px-4 py-3 opacity-80">
                <Icon className="h-4 w-4 text-subtle" />
                <span className="text-sm text-muted">{label}</span>
              </div>
              {i < FRAGMENTS.length - 1 && (
                <span className="hidden text-subtle sm:inline">+</span>
              )}
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
