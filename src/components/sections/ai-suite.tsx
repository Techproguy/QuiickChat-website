"use client";

import { motion } from "framer-motion";
import {
  AudioLines,
  Captions,
  Globe,
  Languages,
  MessageSquareText,
  Mic,
  NotebookPen,
  PenLine,
  Sparkles,
  UsersRound,
  Volume2,
} from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { fadeUp } from "@/lib/motion";

const CAPABILITIES = [
  {
    icon: Mic,
    name: "Speech-to-Text",
    desc: "Voice notes transcribed the moment they arrive.",
  },
  {
    icon: Captions,
    name: "Live Call Captions",
    desc: "A running transcript on screen while you're on a call.",
  },
  {
    icon: Languages,
    name: "Translation",
    desc: "Read any message in your language, right where it was sent.",
  },
  {
    icon: Globe,
    name: "In-Call Translation",
    desc: "What's said gets translated, live, mid-conversation.",
  },
  {
    icon: UsersRound,
    name: "Per-Speaker Transcripts",
    desc: "Calls transcribed with who-said-what attribution.",
  },
  {
    icon: NotebookPen,
    name: "Post-Call Summary & Notes",
    desc: "The gist and action items, right after you hang up.",
  },
  {
    icon: Volume2,
    name: "AI Voice Playback",
    desc: "Have any message — yours or translated — read aloud naturally.",
  },
  {
    icon: AudioLines,
    name: "Translate & Listen",
    desc: "Read it and hear it together, for languages you're learning.",
  },
  {
    icon: PenLine,
    name: "AI Writing & Smart Replies",
    desc: "Fix grammar, rephrase a draft, or reply in a tap — it sounds like you.",
  },
  {
    icon: Mic,
    name: "Dictation",
    desc: "Speak your message and watch it type into the composer.",
  },
  {
    icon: MessageSquareText,
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

        <Reveal className="mx-auto mt-14 flex justify-center" delay={0.1}>
          <div className="relative h-56 w-56 sm:h-64 sm:w-64">
            <Image
              src="/quiick-ai-dark.png"
              alt="Quiick AI"
              fill
              sizes="256px"
              priority
              className="hidden object-contain dark:block"
            />
            <Image
              src="/quiick-ai-light.png"
              alt=""
              fill
              sizes="256px"
              className="object-contain dark:hidden"
            />
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

        <Reveal className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 text-center" delay={0.1}>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-elevated px-4 py-2 text-xs text-muted">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Every AI surface is opt-in — and honest when it isn&apos;t available
            yet.
          </p>
          <Link
            href="/features#ai"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-accent-bright"
          >
            See all Quiick AI features <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
