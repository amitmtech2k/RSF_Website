import {
  Users,
  Workflow,
  Scale,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Brain,
  Car,
  FileText,
  Activity,
  Wallet,
  UserSquare,
  ArrowRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const pillars = [
  {
    icon: Users,
    title: 'People',
    description: 'Creating accountability and ownership across the organization.',
    products: ['Workforce OS', 'Governance OS'],
  },
  {
    icon: Workflow,
    title: 'Process',
    description: 'Driving consistency and operational discipline at scale.',
    products: ['Operations OS', 'Mobility OS'],
  },
  {
    icon: Scale,
    title: 'Governance',
    description: 'Improving decision-making, oversight, and transparency.',
    products: ['Governance OS'],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    description: 'Ensuring continuous, proactive regulatory readiness.',
    products: ['Compliance OS', 'Mobility OS'],
  },
  {
    icon: AlertTriangle,
    title: 'Risk',
    description: 'Identifying, monitoring, and managing uncertainties.',
    products: ['Risk OS'],
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Protecting business continuity and customer trust.',
    products: ['Risk OS'],
  },
  {
    icon: Brain,
    title: 'Intelligence',
    description: 'Transforming connected data into confident decisions.',
    products: ['Financial Ops OS', 'Operations OS'],
  },
]

const chain = ['People', 'Process', 'Governance', 'Compliance', 'Risk', 'Security', 'Intelligence']

export function FrameworkSection() {
  return (
    <section id="framework" className="bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Methodology"
          title="The RSF Operating Excellence Framework"
          description="Every operating system we build connects to seven interdependent dimensions of organizational performance. It is the lens through which we design, govern, and measure operational excellence."
        />

        {/* Connected chain flow */}
        <div className="mt-12 overflow-x-auto">
          <div className="flex min-w-max items-center justify-center gap-0 rounded-2xl border border-border bg-card p-5 shadow-sm mx-auto">
            {chain.map((item, i) => (
              <div key={item} className="flex items-center">
                <div className="flex flex-col items-center gap-1.5 px-4 py-2">
                  <span className="font-heading text-xs font-bold text-navy/40 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-lg border border-teal/30 bg-teal/8 px-4 py-2 font-heading text-sm font-bold text-navy">
                    {item}
                  </span>
                </div>
                {i < chain.length - 1 && (
                  <ArrowRight className="h-4 w-4 shrink-0 text-teal/50" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs font-medium text-steel/70 uppercase tracking-[0.16em]">
            Seven interconnected dimensions — each builds on the last
          </p>
        </div>

        {/* Pillar cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="group relative rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-md"
            >
              <span className="absolute right-5 top-5 font-heading text-sm font-bold text-border">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-teal/10 group-hover:text-teal">
                <pillar.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {pillar.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border pt-4">
                {pillar.products.map((p) => (
                  <span
                    key={p}
                    className="rounded-full bg-navy/6 px-2.5 py-1 text-[0.65rem] font-semibold text-navy"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-center rounded-xl border border-teal/30 bg-navy p-6 text-white shadow-sm">
            <h3 className="font-heading text-lg font-bold text-white">
              One connected framework
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Everything RazorSharpFocus builds maps back to these seven
              dimensions — by design, not by accident.
            </p>
          </article>
        </div>

        {/* Product-to-framework callout */}
        <div className="mt-10 rounded-2xl border border-border bg-card p-7 shadow-sm">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-teal mb-6">
            Every RSF product solves one or more layers of this framework
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {[
              { name: 'Mobility OS', layers: 'Process · Compliance' },
              { name: 'Governance OS', layers: 'People · Governance' },
              { name: 'Compliance OS', layers: 'Compliance' },
              { name: 'Operations OS', layers: 'Process · Intelligence' },
              { name: 'Financial Ops OS', layers: 'Intelligence' },
              { name: 'Workforce OS', layers: 'People' },
              { name: 'Risk OS', layers: 'Risk · Security' },
            ].map((item) => (
              <div key={item.name} className="rounded-xl border border-border bg-soft p-4 text-center">
                <p className="font-heading text-xs font-bold text-navy leading-tight">{item.name}</p>
                <p className="mt-1.5 text-[0.6rem] font-medium text-steel leading-tight">{item.layers}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
