"use client";

import { motion } from "framer-motion";
import {
  AtSign,
  CircleUserRound,
  MonitorSmartphone,
  Palette,
  ScreenShare,
  Smartphone,
  Sticker,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { fadeUp } from "@/lib/motion";

const FEATURES = [
  {
    icon: CircleUserRound,
    name: "Video notes",
    desc: "Round, instant video messages — say it with a look, not just a line.",
  },
  {
    icon: AtSign,
    name: "@usernames",
    desc: "Claim your handle and be reachable on your terms — Everyone, Contacts, or Nobody.",
  },
  {
    icon: Palette,
    name: "Built-in media editor",
    desc: "Crop, trim, add text, stickers, filters, and draw — before you ever hit send.",
  },
  {
    icon: ScreenShare,
    name: "Screen sharing",
    desc: "Show, don't tell. Share your screen live inside any call.",
  },
  {
    icon: Sticker,
    name: "Expressive by default",
    desc: "GIFs, stickers, any-emoji reactions, and voice notes with a proper player.",
  },
  {
    icon: Zap,
    name: "Instant, local-first",
    desc: "Chats open from cache before the network even answers. Speed is a feature.",
  },
  {
    icon: MonitorSmartphone,
    name: "Rich, controllable notifications",
    desc: "Custom ringtones, quiet mode, and previews you decide the moment you get them.",
  },
  {
    icon: Smartphone,
    name: "iPhone and Android",
    desc: "A beautifully consistent experience, free on both platforms.",
  },
];

export function MoreFeatures() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
            The details matter
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Everything you&apos;d expect — done properly.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            The small things add up to an app that feels effortless. Here are a
            few of the reasons Quiick Chat feels a step ahead.
          </p>
        </Reveal>

        <RevealGroup
          staggerChildren={0.05}
          className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map(({ icon: Icon, name, desc }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-5 shadow-e1"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-bold text-foreground">
                {name}
              </h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                {desc}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
