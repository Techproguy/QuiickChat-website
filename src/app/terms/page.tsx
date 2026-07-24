import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Quiick Chat.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pb-24 pt-40">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
              Terms of Service
            </h1>
            <p className="mt-4 text-sm text-muted">Last updated: placeholder</p>

            <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-muted">
              <p>
                This is placeholder legal copy for the website build — replace
                it with Quiick Chat&apos;s reviewed terms of service before
                launch.
              </p>
            </div>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
