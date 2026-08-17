import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { APP } from "@/lib/app-links";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `About — ${APP.name}`,
  description: `Why we're building ${APP.name}: a calmer, more capable way to stay close.`,
};

const VALUES = [
  {
    title: "People first",
    desc: "We build for real conversations between real people — not for engagement metrics or ad targeting.",
  },
  {
    title: "Private by default",
    desc: "Privacy shouldn't be a setting you dig for. It's the starting point, with end-to-end encryption and honest controls.",
  },
  {
    title: "Calm, not cluttered",
    desc: "Powerful doesn't have to mean noisy. We sweat the details so the app feels effortless.",
  },
  {
    title: "Honest by design",
    desc: "If something isn't ready, we say so. No dead ends, no theatre — trust is the product.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="relative pb-24 pt-36 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, var(--aurora-a) 0%, transparent 65%)",
          }}
        />
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
              About us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              A calmer way to stay close.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
              <p>
                {APP.name} started from a simple frustration: the way we talk to
                the people we care about is scattered across too many apps — one
                for messaging, another for calls, a third for communities — and
                none of them really understand what we&apos;re saying.
              </p>
              <p>
                So we set out to build one place that does it all, beautifully:
                fast, private messaging; crystal-clear voice and video calls;
                Memories that fade when they should; and Communities where your
                people belong — with helpful AI woven through, not bolted on.
              </p>
              <p>
                We&apos;re a small team that believes communication should feel
                calm, respect your privacy, and get out of your way. That belief
                shapes every decision we make.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-e1"
              >
                <h2 className="text-base font-bold text-foreground">{v.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <Link
              href="/download"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Get {APP.name} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
