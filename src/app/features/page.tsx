import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { HelpIcon } from "@/components/help/help-icon";
import { FEATURE_GROUPS } from "@/content/features";
import { APP } from "@/lib/app-links";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Features — ${APP.name}`,
  description: `Everything ${APP.name} can do: messaging, calls, Memories, communities, Quiick AI, privacy, and more.`,
};

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="relative pb-24 pt-36 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
          style={{
            background:
              "radial-gradient(55% 45% at 50% 0%, var(--aurora-a) 0%, transparent 65%)",
          }}
        />
        <Container>
          {/* Hero */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
              Features
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Everything {APP.name} can do.
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              One app for the way you actually communicate — down to the detail.
              Here&apos;s the full picture.
            </p>
          </div>

          {/* Quick nav */}
          <nav
            aria-label="Feature areas"
            className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2"
          >
            {FEATURE_GROUPS.map((g) => (
              <a
                key={g.slug}
                href={`#${g.slug}`}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[12.5px] font-semibold text-muted transition-colors hover:border-accent/40 hover:text-accent-text"
              >
                {g.title}
              </a>
            ))}
          </nav>

          {/* Groups */}
          <div className="mx-auto mt-16 max-w-5xl space-y-20">
            {FEATURE_GROUPS.map((g) => (
              <section key={g.slug} id={g.slug} className="scroll-mt-28">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
                    <HelpIcon name={g.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
                      {g.title}
                    </h2>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">
                      {g.tagline}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {g.features.map((f) => (
                    <div
                      key={f.name}
                      className="rounded-2xl border border-border bg-card p-5"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 shrink-0 text-accent" />
                        <h3 className="text-[14px] font-bold text-foreground">
                          {f.name}
                        </h3>
                      </div>
                      <p className="mt-1.5 pl-6 text-[13px] leading-relaxed text-muted">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mx-auto mt-20 max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
              Ready to try it all?
            </h2>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/download" className={cn(buttonVariants({ size: "lg" }))}>
                Get {APP.name} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/help"
                className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              >
                Visit the Help Center
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
