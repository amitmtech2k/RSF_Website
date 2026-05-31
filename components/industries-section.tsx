import {
  Landmark,
  Building2,
  CircleDollarSign,
  Umbrella,
  Truck,
  Package,
  HeartPulse,
  Factory,
  ShoppingBag,
  GraduationCap,
  Cpu,
  Building,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const industries = [
  { icon: CircleDollarSign, label: 'Financial Services' },
  { icon: Landmark, label: 'Banking' },
  { icon: Cpu, label: 'FinTech' },
  { icon: Umbrella, label: 'Insurance' },
  { icon: Truck, label: 'Mobility & Transportation' },
  { icon: Package, label: 'Logistics & Supply Chain' },
  { icon: HeartPulse, label: 'Healthcare' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: ShoppingBag, label: 'Retail' },
  { icon: GraduationCap, label: 'Education' },
  { icon: Building2, label: 'Technology' },
  { icon: Building, label: 'Government & Public Sector' },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Empower"
          description="Our Digital Operating Systems support organizations across regulated, operationally complex, and high-growth sectors."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition-all hover:border-teal/40 hover:shadow-md"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-soft text-navy">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-navy">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
