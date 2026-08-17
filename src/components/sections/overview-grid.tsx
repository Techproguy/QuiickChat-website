"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Heart, MessageCircle, Phone, Users } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { fadeUp } from "@/lib/motion";

const PILLARS = [
  {
    icon: MessageCircle,
    name: "Chats",
    desc: "1:1 and group messaging that opens instantly — photos, voice notes, round video notes, reactions, replies, edits, and AI right in the composer.",
  },
  {
    icon: Phone,
    name: "Calls",
    desc: "Crystal-clear voice and video, solo or group. Screen share, one-tap speaker, and live captions & translation that keep the conversation flowing.",
  },
  {
    icon: Heart,
    name: "Memories",
    desc: "Share your day in photos and videos with music and effects — seen by exactly who you choose, gone when they should be.",
  },
  {
    icon: Users,
    name: "Communities",
    desc: "A home for the people and audiences you belong with — organized Spaces and broadcast Channels, all in one place.",
  },
  {
    icon: Bot,
    name: "Quiick AI",
    desc: "Transcription, translation, smart replies, and summaries woven through everything you do — helpful, ambient, never a bolted-on chatbot.",
  },
];

export function OverviewGrid() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
            One platform. Every way to communicate.
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Everything you need. All in one place.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Quiick Chat brings messaging, calls, communities, and AI together
            — so you stay connected, express yourself, and get things done
            without switching apps.
          </p>
        </Reveal>

        <RevealGroup
          staggerChildren={0.07}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PILLARS.map(({ icon: Icon, name, desc }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass group rounded-2xl p-6 transition-shadow duration-300 hover:shadow-e2"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-accent-bright"
          >
            See all features <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
