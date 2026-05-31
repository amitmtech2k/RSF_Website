import {
  Briefcase,
  Building2,
  Scale,
  Target,
  ShieldCheck,
  Layers,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const reasons = [
  {
    icon: Briefcase,
    title: 'Business-First Thinking',
    description:
      'We solve business problems before implementing technology solutions.',
  },
  {
    icon: Building2,
    title: 'Enterprise Experience',
    description:
      'Built on decades of leadership experience across multiple industries.',
  },
  {
    icon: Scale,
    title: 'Governance Focus',
    description:
      'Designed with accountability, transparency, and compliance at the core.',
  },
  {
    icon: Target,
    title: 'Operational Excellence',
    description:
      'Focused on measurable outcomes and execution excellence.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Trust',
    description:
      'Security, privacy, and resilience are built into every solution.',
  },
  {
    icon: Layers,
    title: 'Future-Ready Architecture',
    description:
      'Designed to evolve with changing regulations, technologies, and business environments.',
  },
]

export function WhyTrustSection() {
  return (
    <section className="bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Organizations Trust Us"
          title="Built by Practitioners. Designed for Leaders."
          description="Our products are shaped by practical experience gained through years of leadership, transformation, compliance management, operational execution, risk management, and technology delivery."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-navy">
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
