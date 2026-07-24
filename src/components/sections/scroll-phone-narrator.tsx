"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { ChatsScreen } from "@/components/phone/screens/chats-screen";
import { MemoriesScreen } from "@/components/phone/screens/memories-screen";
import { CommunitiesScreen } from "@/components/phone/screens/communities-screen";
import { CallsScreen } from "@/components/phone/screens/calls-screen";
import { AIScreen } from "@/components/phone/screens/ai-screen";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    key: "chats",
    eyebrow: "Chats",
    title: "Messages that actually matter.",
    description:
      "Text, voice notes, photos, polls, live location — with smart replies and in-place translation woven right into the composer.",
    points: ["Edit, react, and forward with full context", "Tap-to-translate any message instantly", "Summarize a long thread in one tap"],
    Screen: ChatsScreen,
  },
  {
    key: "memories",
    eyebrow: "Memories",
    title: "Share moments, not just messages.",
    description:
      "An immersive, vertical canvas for the things worth remembering — photos, video, voice, and music, shared with exactly who you choose.",
    points: ["Honest audiences — Close Friends means Close Friends", "A layered Creator Studio with music, filters, and effects", "Expires on your terms — nothing lingers by accident"],
    Screen: MemoriesScreen,
  },
  {
    key: "communities",
    eyebrow: "Communities",
    title: "Spaces and Channels that grow with you.",
    description:
      "Chats are people, groups are conversations, Spaces are communities — build a home for the people who share your interest.",
    points: ["Channels for focused, ongoing conversation", "Live rooms for real-time, walk-in audio and video", "\"Catch me up\" recaps what you missed"],
    Screen: CommunitiesScreen,
  },
  {
    key: "calls",
    eyebrow: "Calls",
    title: "Voice and video that stay out of your way.",
    description:
      "A calling surface built to feel alive — an organic waveform that breathes with every voice, and a floating orb so a call never stops your flow.",
    points: ["Seamless voice-to-video upgrade, mid-call", "Minimizable, draggable call orb", "Live captions and in-call translation"],
    Screen: CallsScreen,
  },
  {
    key: "ai",
    eyebrow: "Quiick AI",
    title: "Intelligence woven through every surface.",
    description:
      "Quiick AI isn't a chatbot bolted on — it's ambient. It shows up exactly where you need it, and stays out of the way when you don't.",
    points: ["One global orb, reachable from anywhere", "Grounded in your real conversations — never fabricated", "Fully opt-in, and always legible when it acts"],
    Screen: AIScreen,
  },
] as const;

export function ScrollPhoneNarrator() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(STEPS.length - 1, Math.floor(v * STEPS.length));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const ActiveScreen = STEPS[active].Screen;

  return (
    <section
      id="product"
      ref={sectionRef}
      className="relative"
      style={{ height: `${STEPS.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Container className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={STEPS[active].key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Pill>{STEPS[active].eyebrow}</Pill>
                <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                  {STEPS[active].title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                  {STEPS[active].description}
                </p>
                <ul className="mt-6 space-y-3">
                  {STEPS[active].points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                        <Check className="h-3 w-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-2">
              {STEPS.map((s, i) => (
                <span
                  key={s.key}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    i === active ? "w-8 bg-accent" : "w-4 bg-border"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <PhoneFrame>
              <AnimatePresence mode="wait">
                <motion.div
                  key={STEPS[active].key}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <ActiveScreen />
                </motion.div>
              </AnimatePresence>
            </PhoneFrame>
          </div>
        </Container>
      </div>
    </section>
  );
}
