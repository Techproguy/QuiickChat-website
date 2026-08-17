"use client";

import { useEffect, useRef, useState } from "react";
import { Apple, ArrowLeft, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo, LogoMark } from "@/components/ui/logo";
import { APP, deepLink, type InviteKind } from "@/lib/app-links";
import { cn } from "@/lib/utils";

const KIND_LABEL: Record<InviteKind, string> = {
  group: "group",
  space: "Space",
  channel: "channel",
};

const KIND_VERB: Record<InviteKind, string> = {
  group: "join",
  space: "join",
  channel: "follow",
};

export function InviteLanding({
  kind,
  id,
  title,
  subtitle,
  avatarInitial,
}: {
  kind: InviteKind;
  id: string;
  title: string;
  subtitle?: string;
  /** A letter to show in the avatar. Omit for a generic invite (shows the
   *  brand mark instead) — e.g. when the entity name isn't resolved. */
  avatarInitial?: string;
}) {
  const [triedOpen, setTriedOpen] = useState(false);
  const attempted = useRef(false);

  // Best-effort: on a phone, try to open the app once on load. If it isn't
  // installed nothing happens and the store fallbacks below remain visible.
  useEffect(() => {
    if (attempted.current) return;
    attempted.current = true;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      // Delay slightly so the page paints before the scheme handoff.
      const t = setTimeout(() => openApp(), 400);
      return () => clearTimeout(t);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function openApp() {
    setTriedOpen(true);
    window.location.href = deepLink(kind, id);
  }

  return (
    <main className="relative flex min-h-screen flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px]"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 0%, var(--aurora-a) 0%, transparent 65%)",
        }}
      />
      <header className="py-6">
        <Container>
          <Link href="/" aria-label="Quiick Chat home">
            <Logo />
          </Link>
        </Container>
      </header>

      <div className="flex flex-1 items-center justify-center px-5 pb-16">
        <div className="glass w-full max-w-md rounded-3xl p-8 text-center shadow-e2">
          {avatarInitial ? (
            <span className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-accent text-3xl font-extrabold text-on-accent">
              {avatarInitial}
            </span>
          ) : (
            <span className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-accent-soft">
              <LogoMark className="h-11 w-11" />
            </span>
          )}

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-accent-text">
            You&apos;re invited
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted">
            {subtitle ??
              `${KIND_VERB[kind] === "follow" ? "Follow" : "Join"} this ${KIND_LABEL[kind]} on ${APP.name}.`}
          </p>

          <div className="mt-8">
            <Button size="lg" className="w-full" onClick={openApp}>
              Open in {APP.name}
            </Button>
          </div>

          <div className="mt-6">
            <p className="text-xs text-subtle">
              {triedOpen
                ? "Didn't open? Get the app, then tap the link again."
                : "Don't have the app yet? Get it free —"}
            </p>
            <div className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href={APP.iosStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-auto")}
              >
                <Apple className="h-4 w-4" /> App Store
              </a>
              <a
                href={APP.androidStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "secondary" }), "w-full sm:w-auto")}
              >
                <PlayCircle className="h-4 w-4" /> Google Play
              </a>
            </div>
          </div>

          <p className="mt-8 text-[11px] leading-relaxed text-subtle">
            On your phone with {APP.name} installed, this link opens the app
            automatically.
          </p>
        </div>
      </div>

      <footer className="pb-8">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to {APP.name}
          </Link>
        </Container>
      </footer>
    </main>
  );
}
