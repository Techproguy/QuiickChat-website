"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Lock,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Pill } from "@/components/ui/pill";
import { buttonVariants } from "@/components/ui/button";
import { StoreBadges } from "@/components/ui/store-badges";
import { cn } from "@/lib/utils";
import { PhoneFrame } from "@/components/phone/phone-frame";
import { ChatsScreen } from "@/components/phone/screens/chats-screen";
import { ChatConversationScreen } from "@/components/phone/screens/chat-conversation-screen";
import { fadeUp, stagger } from "@/lib/motion";

const CHIPS = [
  {
    icon: Lock,
    title: "End-to-end",
    sub: "Encrypted",
    className: "right-[-4%] top-[8%]",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "Lightning",
    sub: "Fast",
    className: "left-[-6%] top-[38%]",
    delay: 0.6,
  },
  {
    icon: Users,
    title: "HD Calls &",
    sub: "Group Chats",
    className: "right-[-2%] bottom-[16%]",
    delay: 1,
  },
];

const TRUST = [
  { icon: Lock, stat: "Private", label: "End-to-end encrypted" },
  { icon: Zap, stat: "Instant", label: "Local-first, always fast" },
  { icon: Sparkles, stat: "Free", label: "on iPhone & Android" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--aurora-a) 0%, transparent 60%), radial-gradient(40% 40% at 85% 20%, var(--aurora-b) 0%, transparent 60%)",
        }}
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
          {/* ── Copy ─────────────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger(0.12)}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
              <Pill>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Fast. Secure. Reliable.
              </Pill>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-balance text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl"
            >
              Connect Instantly.
              <br />
              Chat <span className="text-gradient">Limitlessly.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-md text-balance text-[15px] leading-relaxed text-muted lg:mx-0"
            >
              Quiick Chat is a fast, secure, and smart messaging app that keeps
              you connected with the people who matter most.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Link href="/download" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                <Download className="h-4 w-4" /> Download for Free
              </Link>
              <Link
                href="/features"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full sm:w-auto")}
              >
                Explore Features <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex justify-center lg:justify-start">
              <StoreBadges />
            </motion.div>
          </motion.div>

          {/* ── Dual-phone composition ───────────────────────────────── */}
          <div className="relative mx-auto mt-4 h-[520px] w-full max-w-[440px] lg:mt-0 lg:h-[560px]">
            {/* big phone — chat list */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-1/2 top-0 w-[230px] -translate-x-[58%] sm:w-[250px]"
            >
              <div className="animate-float">
                <PhoneFrame className="!w-full">
                  <ChatsScreen />
                </PhoneFrame>
              </div>
            </motion.div>

            {/* small phone — conversation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 right-0 hidden w-[190px] sm:block"
              style={{ animation: "float 7s ease-in-out 0.5s infinite" }}
            >
              <PhoneFrame className="!w-full" frameClassName="!border-[5px]">
                <ChatConversationScreen />
              </PhoneFrame>
            </motion.div>

            {/* floating chips */}
            {CHIPS.map(({ icon: Icon, title, sub, className, delay }) => (
              <motion.div
                key={sub}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + delay, ease: [0.16, 1, 0.3, 1] }}
                className={`glass absolute z-10 hidden items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-e2 sm:flex ${className}`}
                style={{ animation: `float 6s ease-in-out ${delay}s infinite` }}
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[11px] font-semibold text-foreground">{title}</span>
                  <span className="text-[11px] font-semibold text-foreground">{sub}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Trust strip ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-card/60 px-6 py-5 sm:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {["A", "J", "N", "P", "T"].map((c, i) => (
                <span
                  key={c}
                  className="grid h-8 w-8 place-items-center rounded-full border-2 border-card text-[11px] font-bold text-on-accent"
                  style={{
                    background: ["#33CE7C", "#64FFDA", "#6FE6A8", "#33CE7C", "#0EA5A5"][i],
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
            <div>
              <p className="text-[13px] font-semibold text-foreground">
                Built for real conversations
              </p>
              <p className="text-[12px] text-muted">
                Private, fast, and beautifully simple.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {TRUST.map(({ icon: Icon, stat, label }) => (
              <div key={stat} className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-soft text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-bold text-foreground">{stat}</p>
                  <p className="text-[11px] text-muted">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
