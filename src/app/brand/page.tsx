import type { Metadata } from "next";
import { Check, Download, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LogoMark } from "@/components/ui/logo";
import { APP } from "@/lib/app-links";

export const metadata: Metadata = {
  title: `Brand — ${APP.name}`,
  description: `${APP.name} logo, colors, and usage guidelines.`,
};

const PALETTE = [
  { name: "Brand Green", hex: "#16C55B", ink: "#FFFFFF" },
  { name: "Green (dark UI)", hex: "#33CE7C", ink: "#04160B" },
  { name: "Teal", hex: "#0EA5A5", ink: "#FFFFFF" },
  { name: "Ink", hex: "#0B0E11", ink: "#FFFFFF" },
];

const DOS = [
  "Use the mark and wordmark with clear space around them.",
  "Use the brand green as the primary accent.",
  "Keep the logo on a clean, high-contrast background.",
];

const DONTS = [
  "Don't recolor, stretch, or add effects to the logo.",
  "Don't place the logo on a busy or low-contrast background.",
  "Don't recreate the wordmark in a different typeface.",
];

export default function BrandPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pb-24 pt-36 sm:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
              Brand
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Brand assets
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
              Everything you need to represent {APP.name} correctly. Please keep
              our logo and colors consistent.
            </p>

            {/* Logo */}
            <section className="mt-14">
              <h2 className="text-lg font-bold text-foreground">Logo</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-10">
                  <LogoMark className="h-16 w-16" />
                  <a
                    href="/quiickchat-logo.svg"
                    download
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-accent-bright"
                  >
                    <Download className="h-3.5 w-3.5" /> Mark (SVG)
                  </a>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-10">
                  <div className="flex items-center gap-3">
                    <LogoMark className="h-9 w-9" />
                    <span className="text-2xl font-extrabold tracking-tight text-foreground">
                      Quiick<span className="font-medium text-muted">Chat</span>
                    </span>
                  </div>
                  <a
                    href="/quiickchat-wordmark.svg"
                    download
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-accent-bright"
                  >
                    <Download className="h-3.5 w-3.5" /> Wordmark (SVG)
                  </a>
                </div>
              </div>
            </section>

            {/* Colors */}
            <section className="mt-14">
              <h2 className="text-lg font-bold text-foreground">Colors</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {PALETTE.map((c) => (
                  <div
                    key={c.name}
                    className="overflow-hidden rounded-2xl border border-border"
                  >
                    <div
                      className="flex h-24 items-end p-3"
                      style={{ background: c.hex, color: c.ink }}
                    >
                      <span className="text-[11px] font-bold">{c.hex}</span>
                    </div>
                    <div className="bg-card p-3">
                      <p className="text-[13px] font-semibold text-foreground">
                        {c.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Usage */}
            <section className="mt-14">
              <h2 className="text-lg font-bold text-foreground">Usage</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-sm font-bold text-accent-text">Do</p>
                  <ul className="mt-3 space-y-2.5">
                    {DOS.map((d) => (
                      <li key={d} className="flex gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span className="text-sm text-muted">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-sm font-bold text-danger">Don&apos;t</p>
                  <ul className="mt-3 space-y-2.5">
                    {DONTS.map((d) => (
                      <li key={d} className="flex gap-2.5">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
                        <span className="text-sm text-muted">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <p className="mt-12 text-sm text-muted">
              Questions about using our brand? Email{" "}
              <a
                href="mailto:brand@quiickchat.com"
                className="font-semibold text-accent-text hover:text-accent-bright"
              >
                brand@quiickchat.com
              </a>
              .
            </p>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
