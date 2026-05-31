import { Check, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const current = [
  'Mobility OS',
  'Governance OS',
  'Compliance OS',
  'Operations OS',
  'Financial Operations OS',
  'Workforce OS',
  'Risk OS',
]

const future = [
  'Security Governance OS',
  'Privacy & DPDP OS',
  'Vendor Risk OS',
  'AI Governance OS',
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Roadmap"
          title="The Future We Are Building"
          description="We are building for the next decade. Our portfolio is expanding deliberately — extending the platform into the disciplines that will define enterprise trust and resilience."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Current */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <Check className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-xl font-bold text-navy">
                Available Today
              </h3>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-soft px-4 py-3 text-sm font-semibold text-navy"
                >
                  <Check className="h-4 w-4 shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Future */}
          <div className="rounded-2xl border border-navy bg-navy-ink p-8 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal/15 text-teal-bright">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-xl font-bold text-white">
                On the Horizon
              </h3>
            </div>
            <ul className="mt-6 grid gap-3">
              {future.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <Sparkles className="h-4 w-4 shrink-0 text-teal-bright" />
                    {item}
                  </span>
                  <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white/55">
                    In Development
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
