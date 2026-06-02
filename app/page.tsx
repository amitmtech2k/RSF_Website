import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { CredibilityBar } from '@/components/credibility-bar'
import { FounderCredibility } from '@/components/founder-credibility'
import { WhyWeExist } from '@/components/why-we-exist'
import { FounderNote } from '@/components/founder-note'
import { AboutSection } from '@/components/about-section'
import { WhyTrustSection } from '@/components/why-trust-section'
import { TrustLayer } from '@/components/trust-layer'
import { FrameworkSection } from '@/components/framework-section'
import { PlatformSection } from '@/components/platform-section'
import { PlatformEcosystem } from '@/components/platform-ecosystem'
import { RoadmapSection } from '@/components/roadmap-section'
import { ProductsSection } from '@/components/products-section'
import { IndustriesSection } from '@/components/industries-section'
import { DigitalTrustSection } from '@/components/digital-trust-section'
import { PersonasSection } from '@/components/personas-section'
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

        {/* 2. Credibility bar — Immediate trust signals */}
        <CredibilityBar />

        {/* 3. Founder Credibility — Built by practitioners, not theorists [NEW] */}
        <FounderCredibility />

        {/* 4. Why We Exist — The operating intelligence gap [NEW] */}
        <WhyWeExist />

        {/* 5. Founder Note — Personal narrative & philosophy */}
        <FounderNote />

        {/* 6. About — Story & credibility stats */}
        <AboutSection />

        {/* 7. Why Trust — Practitioner credibility detail */}
        <WhyTrustSection />

        {/* 8. Trust Layer — Designed around real enterprise challenges [NEW] */}
        <TrustLayer />

        {/* 9. Framework — Methodology */}
        <FrameworkSection />

        {/* 10. Platform — Technical architecture */}
        <PlatformSection />

        {/* 11. Platform Ecosystem — Full product map [NEW] */}
        <PlatformEcosystem />

        {/* 12. Roadmap — Current + emerging OS portfolio */}
        <RoadmapSection />

        {/* 13. Products — What we offer */}
        <ProductsSection />

        {/* 14. Industries — Where we start, where we scale [UPGRADED] */}
        <IndustriesSection />

        {/* 15. Digital Trust — Future pillar */}
        <DigitalTrustSection />

        {/* 16. Who we serve — Personas */}
        <PersonasSection />

        {/* 17. Insights — Thought leadership */}
        <InsightsSection />

        {/* 18. Vision — Long-term direction */}
        <VisionSection />

        {/* 19. Closing — Strong final statement */}
        <ClosingStatement />

        {/* 20. Contact — CTA form */}
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
