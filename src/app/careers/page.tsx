import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { APP } from "@/lib/app-links";

export const metadata: Metadata = {
  title: `Careers — ${APP.name}`,
  description: `Help build ${APP.name} — a calmer, more private way for people to stay close.`,
};

const WHAT_WE_LOOK_FOR = [
  "You care about craft — the details others skip are the ones you sweat.",
  "You put users and their privacy first, always.",
  "You're honest about what's done, what's not, and what's hard.",
  "You do great work with a small team and a lot of ownership.",
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="relative pb-24 pt-36 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[440px]"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, var(--aurora-a) 0%, transparent 65%)",
          }}
        />
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
              Careers
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Build something people love.
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              We&apos;re building {APP.name} into the calmer, more capable way
              for people to stay close — private by design, and a joy to use.
              We&apos;re a small, focused team that values craft, honesty, and
              real ownership.
            </p>

            <h2 className="mt-12 text-lg font-bold text-foreground">
              What we look for
            </h2>
            <ul className="mt-4 space-y-3">
              {WHAT_WE_LOOK_FOR.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-[15px] leading-relaxed text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl border border-border bg-card p-6">
              <h2 className="text-base font-bold text-foreground">
                No open roles right now
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We&apos;re not actively hiring at the moment — but we&apos;re
                always glad to meet exceptional people. If that&apos;s you, tell
                us what you&apos;d want to build and why {APP.name}.
              </p>
              <a
                href="mailto:careers@quiickchat.com"
                className="mt-4 inline-flex text-sm font-semibold text-accent-text hover:text-accent-bright"
              >
                careers@quiickchat.com →
              </a>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
