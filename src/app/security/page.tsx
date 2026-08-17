import type { Metadata } from "next";
import Link from "next/link";
import {
  Ban,
  Eye,
  Fingerprint,
  Flag,
  KeyRound,
  Lock,
  LockKeyhole,
  ShieldCheck,
  Trash2,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { APP } from "@/lib/app-links";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Security & Privacy — ${APP.name}`,
  description: `How ${APP.name} protects you: end-to-end encryption, privacy controls, safety tools, and account security.`,
};

const HOW_ENCRYPTION_WORKS = [
  {
    icon: LockKeyhole,
    title: "Locked on your device",
    desc: "Your message is scrambled on your phone before it ever leaves — into a form only the recipient can unlock.",
  },
  {
    icon: KeyRound,
    title: "Travels sealed",
    desc: "It stays encrypted the entire way. No one in between — not networks, not us — can read what's inside.",
  },
  {
    icon: ShieldCheck,
    title: "Only they can open it",
    desc: "It's unlocked only on the recipient's device. End-to-end encryption keeps your conversation between you.",
  },
];

const PRIVACY_CONTROLS = [
  {
    icon: Eye,
    title: "Audience controls that mean it",
    desc: "Decide who can see your status, last seen, and profile — and “Close Friends” stays exactly that.",
  },
  {
    icon: UserCheck,
    title: "Who can find and reach you",
    desc: "Choose whether people can find you by @username: Everyone, Contacts, or Nobody.",
  },
  {
    icon: Lock,
    title: "Private previews",
    desc: "Hide message content on your lock screen so notifications never say too much.",
  },
];

const SAFETY = [
  {
    icon: Ban,
    title: "Block anyone, instantly",
    desc: "Blocking stops their calls and messages — cleanly, with no notification to them.",
  },
  {
    icon: Flag,
    title: "Report what doesn't belong",
    desc: "Report a chat, contact, channel, or post and it goes straight to our team.",
  },
  {
    icon: Fingerprint,
    title: "App Lock",
    desc: "Add a PIN or biometrics, with escalating lockouts against brute-force attempts.",
  },
  {
    icon: Trash2,
    title: "Delete on your terms",
    desc: "Remove messages, and permanently delete your account and its data whenever you choose.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="relative pb-24 pt-36 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, var(--aurora-a) 0%, transparent 65%)",
          }}
        />
        <Container>
          {/* Hero */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-accent-soft text-accent">
              <Lock className="h-8 w-8" />
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Your privacy is built in.
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              {APP.name} protects your conversations with end-to-end encryption,
              real privacy controls, and safety tools throughout — so you can
              talk freely, knowing it stays between you.
            </p>
          </div>

          {/* How encryption works */}
          <section className="mx-auto mt-20 max-w-5xl">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              End-to-end encrypted, by default.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-[15px] leading-relaxed text-muted">
              Personal messages and calls are secured end-to-end. Here&apos;s
              what that means, simply.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {HOW_ENCRYPTION_WORKS.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="relative rounded-2xl border border-border bg-card p-6 shadow-e1"
                >
                  <span className="absolute right-5 top-5 text-sm font-bold text-subtle">
                    0{i + 1}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Privacy controls */}
          <section className="mx-auto mt-24 max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              You&apos;re in control.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              Privacy isn&apos;t a setting you dig for — it&apos;s the default,
              and it&apos;s yours to shape.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {PRIVACY_CONTROLS.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="glass rounded-2xl p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Safety & account */}
          <section className="mx-auto mt-24 max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Safety tools, everywhere you need them.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SAFETY.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-e1"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mx-auto mt-24 max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
              Private conversations, in your pocket.
            </h2>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/download" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                Get {APP.name}
              </Link>
              <Link
                href="/help/privacy-safety"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full sm:w-auto")}
              >
                Privacy &amp; Safety help
              </Link>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
