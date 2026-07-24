"use client";

import { motion } from "framer-motion";
import { ArrowRight, Languages, MessagesSquare, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { ChatsScreen } from "@/components/phone/screens/chats-screen";
import { fadeUp, stagger } from "@/lib/motion";

const FLOATING_CHIPS = [
  {
    icon: Languages,
    label: "Real-time translation",
    className: "left-[-8%] top-[14%] lg:left-[-14%]",
    delay: 0,
  },
  {
    icon: Sparkles,
    label: "Quiick AI, everywhere",
    className: "right-[-6%] top-[6%] lg:right-[-12%]",
    delay: 0.4,
  },
  {
    icon: Users,
    label: "Communities that feel alive",
    className: "left-[-10%] bottom-[22%] lg:left-[-16%]",
    delay: 0.8,
  },
  {
    icon: MessagesSquare,
    label: "Memories that don't linger",
    className: "right-[-8%] bottom-[14%] lg:right-[-14%]",
    delay: 1.2,
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--aurora-a) 0%, transparent 60%), radial-gradient(40% 40% at 85% 20%, var(--aurora-b) 0%, transparent 60%)",
        }}
      />

      <Container>
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.12)}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <Pill>
              <Sparkles className="h-3 w-3" /> AI-powered communication
            </Pill>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-balance text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Every conversation.
            <br />
            <span className="text-gradient">Finally understood.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted"
          >
            Quiick Chat brings your messages, calls, Memories, and communities
            into one AI-first platform — so nothing gets lost, and nothing
            gets lost in translation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button size="lg" className="w-full sm:w-auto">
              Get Quiick Chat <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="#product"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full sm:w-auto")}
            >
              Explore the product
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 text-xs text-muted">
            Free on Android and iOS. No credit card required.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="animate-float"
          >
            <PhoneFrame>
              <ChatsScreen />
            </PhoneFrame>
          </motion.div>

          {FLOATING_CHIPS.map(({ icon: Icon, label, className, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + delay * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`glass absolute hidden w-44 items-center gap-2.5 rounded-2xl px-3.5 py-3 shadow-e2 sm:flex ${className}`}
              style={{ animation: `float 6s ease-in-out ${delay}s infinite` }}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-foreground">{label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
