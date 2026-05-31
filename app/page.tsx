import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { CredibilityBar } from '@/components/credibility-bar'
import { FounderNote } from '@/components/founder-note'
import { ProblemSection } from '@/components/problem-section'
import { AboutSection } from '@/components/about-section'
import { FrameworkSection } from '@/components/framework-section'
import { WhyTrustSection } from '@/components/why-trust-section'
import { PlatformSection } from '@/components/platform-section'
import { ProductsSection } from '@/components/products-section'
import { RoadmapSection } from '@/components/roadmap-section'
import { DigitalTrustSection } from '@/components/digital-trust-section'
import { PersonasSection } from '@/components/personas-section'
import { IndustriesSection } from '@/components/industries-section'
import { InsightsSection } from '@/components/insights-section'
import { VisionSection } from '@/components/vision-section'
import { ClosingStatement } from '@/components/closing-statement'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1. Hero — What we do */}
        <HeroSection />

        {/* 2. Credibility bar — Why trust us (immediately after hero) */}
        <CredibilityBar />

        {/* 3. Founder — Who is behind this, establish authority */}
        <FounderNote />

        {/* 4. Problem — Why we exist */}
        <ProblemSection />

        {/* 5. About — Our story & credibility stats */}
        <AboutSection />

        {/* 6. Framework — Our methodology */}
        <FrameworkSection />

        {/* 7. Why Trust — Built by practitioners */}
        <WhyTrustSection />

        {/* 8. Platform — Technical architecture */}
        <PlatformSection />

        {/* 9. Products — What we offer */}
        <ProductsSection />

        {/* 10. Roadmap — Where we're going */}
        <RoadmapSection />

        {/* 11. Digital Trust — Future pillar */}
        <DigitalTrustSection />

        {/* 12. Who we serve — Personas */}
        <PersonasSection />

        {/* 13. Industries — Sectors we empower */}
        <IndustriesSection />

        {/* 14. Insights — Thought leadership */}
        <InsightsSection />

        {/* 15. Vision — Long-term direction */}
        <VisionSection />

        {/* 16. Closing — Strong final statement with checkmarks */}
        <ClosingStatement />

        {/* 17. Contact — CTA form */}
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
