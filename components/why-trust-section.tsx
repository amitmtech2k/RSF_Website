import {
  Briefcase,
  Building2,
  Scale,
  Target,
  ShieldCheck,
  Layers,
  Cpu,
  ClipboardCheck,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: Briefcase,
    title: 'CTO-Level Technology Depth',
    description:
      'Our founder served as CTO and technology leader across enterprise organizations — not as a consultant, but as the accountable executive.',
  },
  {
    icon: Building2,
    title: 'Platform Builder Background',
    description:
      '25+ years building and scaling enterprise platforms from the ground up across financial services, mobility, and enterprise ecosystems.',
  },
  {
    icon: Scale,
    title: 'Governance Architect',
    description:
      'Designed and implemented real governance frameworks that passed regulatory scrutiny — not theoretical models from a consulting deck.',
  },
  {
    icon: Target,
    title: 'Operational Excellence',
    description:
      'Led end-to-end operational transformation programs with measurable outcomes. We build for execution, not for presentations.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance From the Inside',
    description:
      'Managed compliance programs under live regulatory pressure — DPDP, GDPR, financial regulations, and sector-specific frameworks.',
  },
  {
    icon: Cpu,
    title: 'FinTech & Payments Expertise',
    description:
      'Deep domain experience in FinTech, digital payments, and financial infrastructure — the most compliance-intensive environment in enterprise technology.',
  },
  {
    icon: ClipboardCheck,
    title: 'Risk Management Practice',
    description:
      'Built risk frameworks that connected risk identification to control ownership to measurable mitigation — not risk registers that sit in a drawer.',
  },
  {
    icon: Layers,
    title: 'Future-Ready Architecture',
    description:
      'Designed to evolve with changing regulations, technology shifts, and organizational growth — not locked to one version of today.',
  },
]

export function WhyTrustSection() {
  return (
    <section className="bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Organizations Trust Us"
          title="Built by Practitioners. Not Theorists."
          description="RazorSharpFocus was founded by leaders who have spent more than 25 years building, operating, and scaling enterprise platforms — not advising from the outside. Every product reflects real experience from inside the enterprise."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-white">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-navy leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
