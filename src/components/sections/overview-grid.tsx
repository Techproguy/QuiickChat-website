"use client";

import { motion } from "framer-motion";
import { Bot, Hash, Heart, MessageCircle, Phone, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { fadeUp } from "@/lib/motion";

const PILLARS = [
  {
    icon: MessageCircle,
    name: "Chats",
    desc: "Messages that matter, with AI right in the composer.",
  },
  {
    icon: Heart,
    name: "Memories",
    desc: "Moments that live, then let go.",
  },
  {
    icon: Users,
    name: "Communities",
    desc: "Spaces built around who you belong with.",
  },
  {
    icon: Hash,
    name: "Channels",
    desc: "Focused conversation inside every Space.",
  },
  {
    icon: Phone,
    name: "Calls",
    desc: "Voice and video, alive with every word.",
  },
  {
    icon: Bot,
    name: "Quiick AI",
    desc: "Ambient intelligence, everywhere you need it.",
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
      </Container>
    </section>
  );
}
