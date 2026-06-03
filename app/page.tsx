import { SiteHeader }          from '@/components/site-header'
import { HeroSection }         from '@/components/hero-section'
import { CredibilityBar }      from '@/components/credibility-bar'
import { FounderCredibility }  from '@/components/founder-credibility'
import { WhyWeExist }          from '@/components/why-we-exist'
import { FounderBridge }       from '@/components/founder-bridge'
import { FounderNote }         from '@/components/founder-note'
import { AboutSection }        from '@/components/about-section'
import { LearnedSection }      from '@/components/learned-section'
import { WhyTrustSection }     from '@/components/why-trust-section'
import { TrustLayer }          from '@/components/trust-layer'
import { FrameworkSection }    from '@/components/framework-section'
import { ArchitectureDiagram } from '@/components/architecture-diagram'
import { PlatformSection }     from '@/components/platform-section'
import { PlatformEcosystem }   from '@/components/platform-ecosystem'
import { RoadmapSection }      from '@/components/roadmap-section'
import { ProductsSection }     from '@/components/products-section'
import { IndustriesSection }   from '@/components/industries-section'
import { DigitalTrustSection } from '@/components/digital-trust-section'
import { PersonasSection }     from '@/components/personas-section'
import { InsightsSection }     from '@/components/insights-section'
import { VisionSection }       from '@/components/vision-section'
import { ClosingStatement }    from '@/components/closing-statement'
import { FinalCta }            from '@/components/final-cta'
import { SiteFooter }          from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Credibility bar */}
        <CredibilityBar />

        {/* 3. Founder Credibility — Built by practitioners */}
        <FounderCredibility />

        {/* 4. Why We Exist — The operating intelligence gap */}
        <WhyWeExist />

        {/* 5. [NEW] Founder Bridge — 25 yrs · 5 industries · one observation */}
        <FounderBridge />

        {/* 6. Founder Note */}
        <FounderNote />

        {/* 7. About */}
        <AboutSection />

        {/* 7b. What We Learned */}
        <LearnedSection />

        {/* 8. Why Trust */}
        <WhyTrustSection />

        {/* 9. Trust Layer */}
        <TrustLayer />

        {/* 10. Framework */}
        <FrameworkSection />

        {/* 11. [NEW] Architecture Diagram — 7-layer enterprise stack */}
        <ArchitectureDiagram />

        {/* 12. Platform */}
        <PlatformSection />

        {/* 13. Platform Ecosystem */}
        <PlatformEcosystem />

        {/* 14. Roadmap — Current Platform Initiatives (wording fixed) */}
        <RoadmapSection />

        {/* 15. Products */}
        <ProductsSection />

        {/* 16. Industries */}
        <IndustriesSection />

        {/* 17. Digital Trust */}
        <DigitalTrustSection />

        {/* 18. Personas */}
        <PersonasSection />

        {/* 19. Insights */}
        <InsightsSection />

        {/* 20. Vision */}
        <VisionSection />

        {/* 21. Closing */}
        <ClosingStatement />

        {/* 22. CTA */}
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
