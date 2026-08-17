import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HelpSearch } from "@/components/help/help-search";
import { HelpIcon } from "@/components/help/help-icon";
import { HELP_CATEGORIES, buildHelpIndex } from "@/content/help";
import { APP } from "@/lib/app-links";

export const metadata: Metadata = {
  title: `Help Center — ${APP.name}`,
  description: `Get answers about ${APP.name}: chats, calls, communities, privacy, your account, and more.`,
};

export default function HelpHome() {
  const index = buildHelpIndex();
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
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
              Help Center
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              How can we help?
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Search our guides, or browse by topic to get the most out of{" "}
              {APP.name}.
            </p>
            <div className="mt-8">
              <HelpSearch index={index} />
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HELP_CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/help/${c.slug}`}
                className="glass group rounded-2xl p-6 transition-shadow duration-300 hover:shadow-e2"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-on-accent">
                  <HelpIcon name={c.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-4 flex items-center gap-1 text-base font-bold text-foreground">
                  {c.title}
                  <ChevronRight className="h-4 w-4 text-subtle transition-transform group-hover:translate-x-0.5" />
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {c.description}
                </p>
                <p className="mt-3 text-xs font-semibold text-accent-text">
                  {c.articles.length} article
                  {c.articles.length === 1 ? "" : "s"}
                </p>
              </Link>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-border bg-card p-6 text-center">
            <p className="text-sm font-semibold text-foreground">
              Still need a hand?
            </p>
            <p className="mt-1.5 text-sm text-muted">
              Reach our team from inside the app: Settings → Help → Contact us.
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
