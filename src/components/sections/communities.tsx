"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Hash,
  HelpCircle,
  ListChecks,
  Music,
  Radio,
  ShieldCheck,
  Trophy,
  UserCog,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { fadeUp } from "@/lib/motion";

const SPACE_POINTS = [
  { icon: Hash, label: "Organized into channels" },
  { icon: UserCog, label: "Roles & permissions" },
  { icon: ShieldCheck, label: "Invites & moderation" },
];

const POST_TYPES = [
  { icon: ListChecks, label: "Polls" },
  { icon: Trophy, label: "Quizzes" },
  { icon: HelpCircle, label: "Questions" },
  { icon: Music, label: "Music" },
];

const INSIGHTS = [
  { value: "78K", label: "Total followers", sub: "+3,249% over 30 days" },
  { value: "109K", label: "Accounts reached", sub: "Followers vs non-followers" },
  { value: "12", label: "Top regions", sub: "See where your audience is" },
];

export function Communities() {
  return (
    <section id="communities" className="relative py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Pill>
              <Users className="h-3 w-3" /> Communities
            </Pill>
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            A home for the people you belong with.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            A community is where your world lives on Quiick Chat. Inside it,
            <span className="text-foreground font-semibold"> Spaces </span>
            organize your people into channels, and
            <span className="text-foreground font-semibold"> Channels </span>
            broadcast to everyone who follows you.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* SPACES — organized group hubs */}
          <Reveal>
            <div className="glass flex h-full flex-col rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-accent-text">
                    Under Communities
                  </p>
                  <h3 className="text-xl font-bold text-foreground">Spaces</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Bring your group together in a Space — a hub you organize into
                focused channels, with the roles and controls to keep it healthy
                as it grows.
              </p>
              <div className="mt-6 space-y-3">
                {SPACE_POINTS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-auto pt-6 text-xs leading-relaxed text-subtle">
                Add members by contact or @username, invite by link, and grow a
                community that actually feels like one.
              </p>
            </div>
          </Reveal>

          {/* CHANNELS — broadcast + insights */}
          <Reveal delay={0.1}>
            <div className="glass flex h-full flex-col rounded-3xl p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Radio className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-accent-text">
                    Under Communities
                  </p>
                  <h3 className="text-xl font-bold text-foreground">Channels</h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Reach everyone who follows you with a single post — and make it
                interactive, not just a broadcast.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {POST_TYPES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-[13px] font-semibold text-foreground">
                <BarChart3 className="h-4 w-4 text-accent" />
                Creator insights
              </div>
              <RevealGroup staggerChildren={0.07} className="mt-3 space-y-2.5">
                {INSIGHTS.map(({ value, label, sub }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="flex items-baseline gap-4 rounded-2xl border border-border bg-card px-4 py-3"
                  >
                    <span className="text-2xl font-extrabold tracking-tight text-accent-text">
                      {value}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-foreground">
                        {label}
                      </span>
                      <span className="text-xs text-subtle">{sub}</span>
                    </span>
                  </motion.div>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
