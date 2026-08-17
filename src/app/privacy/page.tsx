import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LEGAL_META, PRIVACY_POLICY } from "@/content/legal";
import { APP } from "@/lib/app-links";

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP.name}`,
  description: `How ${APP.name} collects, uses, and protects your information — in plain language.`,
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pb-24 pt-36 sm:pt-40">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-text">
              Legal
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted">{LEGAL_META.effectiveDate}</p>

            <div className="mt-10 space-y-10">
              {PRIVACY_POLICY.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-lg font-bold text-foreground">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-[15px] leading-relaxed text-muted"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
