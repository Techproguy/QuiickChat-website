"use client";

import { motion } from "framer-motion";
import {
  AudioLines,
  Languages,
  Mic,
  NotebookPen,
  PenLine,
  Sparkles,
  Volume2,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { AIOrb } from "@/components/ui/ai-orb";
import { fadeUp } from "@/lib/motion";

const CAPABILITIES = [
  {
    icon: Mic,
    name: "Speech-to-Text",
    desc: "Voice notes and calls, transcribed the moment they happen.",
  },
  {
    icon: Volume2,
    name: "AI Voice Playback",
    desc: "Have any message — yours or translated — read aloud naturally.",
  },
  {
    icon: Languages,
    name: "Translation",
    desc: "Read any message in your language, right where it was sent.",
  },
  {
    icon: AudioLines,
    name: "Translate & Listen",
    desc: "Read it and hear it, together — for languages you're still learning.",
  },
  {
    icon: PenLine,
    name: "AI Writing",
    desc: "Smart replies and writing help that sound like you, not a bot.",
  },
  {
    icon: NotebookPen,
    name: "Conversation Summaries",
    desc: "Catch up on a long thread — or a whole Space — in seconds.",
  },
];

export function AISuite() {
  return (
    <section id="ai-suite" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 h-[600px]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, var(--aurora-a) 0%, transparent 70%)",
        }}
      />
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Pill>AI Communication Suite</Pill>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Intelligence that removes communication barriers.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Quiick AI isn&apos;t a chatbot living in its own tab — it&apos;s
            ambient infrastructure, woven through Chats, Calls, and
            Communities, grounded in what you&apos;re actually saying and
            never guessing when it doesn&apos;t know.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-16 flex justify-center" delay={0.1}>
          <div className="relative grid place-items-center">
            <AIOrb size="xl" rings />
            <span className="absolute text-xs font-bold uppercase tracking-widest text-on-accent mix-blend-difference">
              Quiick AI
            </span>
          </div>
        </Reveal>

        <RevealGroup
          staggerChildren={0.06}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CAPABILITIES.map(({ icon: Icon, name, desc }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-6 shadow-e1"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center" delay={0.1}>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-4 py-2 text-xs text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Call transcription &amp; in-call translation are rolling out next
            — and every AI surface is opt-in, and honest when it isn&apos;t
            available yet.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
