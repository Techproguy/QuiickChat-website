"use client";

import { ArrowRight, Apple, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AIOrb } from "@/components/ui/ai-orb";
import { Reveal } from "@/components/ui/reveal";

const ROADMAP = [
  { tag: "Now", label: "AI woven through Chats, Memories, and Communities" },
  { tag: "Next", label: "In-call transcripts, live translation, and deeper smart replies" },
  { tag: "Later", label: "Communities with paid Spaces, tickets, and creator tools" },
];

export function FinalCTA() {
  return (
    <section id="join" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full"
        style={{
          background:
            "radial-gradient(55% 55% at 50% 30%, var(--aurora-a) 0%, transparent 65%)",
        }}
      />
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <AIOrb size="lg" />
          <h2 className="mt-8 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Communication, understood.
            <br />
            Ready when you are.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Join the people already chatting, calling, and building
            communities on Quiick Chat — free on Android and iOS.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button size="lg">
              <Apple className="h-4 w-4" /> Download for iOS
            </Button>
            <Button variant="secondary" size="lg">
              <PlayCircle className="h-4 w-4" /> Get it on Android
            </Button>
          </div>

          <a
            href="/#communities"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-accent-bright"
          >
            Explore Communities on Quiick Chat <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-20 max-w-3xl">
          <div className="glass grid grid-cols-1 gap-6 rounded-3xl p-8 sm:grid-cols-3">
            {ROADMAP.map((item) => (
              <div key={item.tag}>
                <span className="text-xs font-bold uppercase tracking-widest text-accent-text">
                  {item.tag}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
