import {
  Truck,
  CircleDollarSign,
  Globe2,
  Building2,
  Package,
  TrendingUp,
  Landmark,
  Cpu,
  HeartPulse,
  Factory,
  ShoppingBag,
  GraduationCap,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

// Primary focus industries (top 6 — per brief)
const primary = [
  {
    icon: Truck,
    label: 'Mobility & Transportation',
    desc: 'Fleet management, driver operations, vehicle lifecycle & compliance.',
    highlight: true,
  },
  {
    icon: CircleDollarSign,
    label: 'Financial Services',
    desc: 'Banking, lending, payments, and financial institution operations.',
    highlight: true,
  },
  {
    icon: Globe2,
    label: 'Digital Platforms',
    desc: 'High-velocity tech companies needing operational governance at scale.',
    highlight: true,
  },
  {
    icon: Building2,
    label: 'Enterprise Services',
    desc: 'Large organizations managing complex, multi-function operations.',
    highlight: true,
  },
  {
    icon: Package,
    label: 'Logistics & Supply Chain',
    desc: 'End-to-end supply chain visibility, compliance & partner risk.',
    highlight: true,
  },
  {
    icon: TrendingUp,
    label: 'High-Growth Organizations',
    desc: 'Startups and scale-ups building governance infrastructure early.',
    highlight: true,
  },
]

// Extended sectors
const extended = [
  { icon: Landmark, label: 'Banking & FinTech' },
  { icon: Cpu, label: 'Technology' },
  { icon: HeartPulse, label: 'Healthcare' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: ShoppingBag, label: 'Retail & D2C' },
  { icon: GraduationCap, label: 'Education' },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Where We Start. Where We Scale."
          description="Our Digital Operating Systems are purpose-built for industries where governance, compliance, operational complexity, and risk are not optional considerations — they are business-critical requirements."
        />

        {/* Primary 6 */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {primary.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm transition-all hover:border-teal/40 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/8 text-navy group-hover:bg-teal/10 group-hover:text-teal transition-colors">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-base font-bold text-navy">{item.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-steel">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider + extended */}
        <div className="mt-10 flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-steel/60">
            Also serving
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {extended.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 rounded-xl border border-border bg-soft px-4 py-3 transition-all hover:border-teal/40"
            >
              <item.icon className="h-4 w-4 shrink-0 text-navy/60" />
              <span className="text-xs font-semibold text-navy">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-steel text-center">
          Our operating systems model is <span className="font-semibold text-navy">industry-agnostic</span> by design — deployable wherever governance, compliance, and operational excellence matter.
        </p>
      </div>
    </section>
  )
}
