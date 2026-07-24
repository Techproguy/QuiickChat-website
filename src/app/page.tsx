import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { OverviewGrid } from "@/components/sections/overview-grid";
import { ScrollPhoneNarrator } from "@/components/sections/scroll-phone-narrator";
import { AISuite } from "@/components/sections/ai-suite";
import { Trust } from "@/components/sections/trust";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <OverviewGrid />
        <ScrollPhoneNarrator />
        <AISuite />
        <Trust />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
