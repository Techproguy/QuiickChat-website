import type { Metadata } from "next";
import { Apple, Check, Clock, PlayCircle, QrCode, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { APP, inviteUrl } from "@/lib/app-links";
import { qrSvg } from "@/lib/qr";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Download ${APP.name}`,
  description: `Get ${APP.name} free on iPhone and Android — chat, call, and share, beautifully.`,
};

const HIGHLIGHTS = [
  "Free — no subscription, no ads in your chats",
  "End-to-end encrypted messages and calls",
  "Works on iPhone and Android",
];

const PLATFORMS = [
  {
    icon: Apple,
    name: "iPhone",
    detail: "iOS 14 and later",
    href: APP.iosStoreUrl,
    cta: "Download on the App Store",
    available: true,
  },
  {
    icon: PlayCircle,
    name: "Android",
    detail: "Android 8.0 and later",
    href: APP.androidStoreUrl,
    cta: "Get it on Google Play",
    available: true,
  },
  {
    icon: Smartphone,
    name: "Web & Desktop",
    detail: "Mac, Windows & browser",
    href: null,
    cta: "Coming soon",
    available: false,
  },
];

export default async function DownloadPage() {
  const qr = await qrSvg(inviteUrl("/download"));

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
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              {/* Left: pitch + store buttons */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
                  Download
                </p>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  Get {APP.name}.
                </h1>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                  Chat, call, and share — beautifully simple, private, and fast.
                  Free on iPhone and Android.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-center gap-2.5">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm text-foreground/90">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={APP.iosStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
                  >
                    <Apple className="h-4 w-4" /> App Store
                  </a>
                  <a
                    href={APP.androidStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "w-full sm:w-auto")}
                  >
                    <PlayCircle className="h-4 w-4" /> Google Play
                  </a>
                </div>
              </div>

              {/* Right: scan-to-download QR */}
              <div className="flex justify-center lg:justify-end">
                <div className="glass w-full max-w-xs rounded-3xl p-8 text-center shadow-e2">
                  <div
                    className="mx-auto grid h-48 w-48 place-items-center overflow-hidden rounded-2xl bg-white p-3 [&>svg]:h-full [&>svg]:w-full"
                    // Server-rendered inline SVG QR — safe, static markup. The
                    // arbitrary variant forces the SVG to fit the tile (its
                    // intrinsic width would otherwise overflow onto the label).
                    dangerouslySetInnerHTML={{ __html: qr }}
                  />
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    <QrCode className="h-4 w-4 text-accent" /> Scan to download
                  </p>
                  <p className="mt-1.5 text-xs text-muted">
                    Point your phone camera here to get {APP.name}.
                  </p>
                </div>
              </div>
            </div>

            {/* Platforms grid */}
            <div className="mt-20">
              <h2 className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                Every platform
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {PLATFORMS.map(({ icon: Icon, name, detail, href, cta, available }) => (
                  <div
                    key={name}
                    className="flex flex-col rounded-2xl border border-border bg-card p-6"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-bold text-foreground">
                      {name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{detail}</p>
                    {available && href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-sm font-semibold text-accent-text hover:text-accent-bright"
                      >
                        {cta} →
                      </a>
                    ) : (
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-subtle">
                        <Clock className="h-3.5 w-3.5" /> {cta}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
