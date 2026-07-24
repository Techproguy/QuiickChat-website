import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Quiick Chat handles your data — plainly and precisely, with no protection implied that isn't actually delivered.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pb-24 pt-40">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted">Last updated: placeholder</p>

            <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted">
              <p>
                Quiick Chat is built on a simple principle: we never imply a
                protection we don&apos;t actually deliver. This page explains,
                in plain language, what we collect, how it&apos;s used, and
                the controls you have over it.
              </p>
              <p>
                This is placeholder legal copy for the website build — replace
                it with Quiick Chat&apos;s reviewed privacy policy before
                launch. It should accurately describe current data handling
                (including that end-to-end encryption is not yet enabled) and
                be kept in sync with the product as features ship.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
