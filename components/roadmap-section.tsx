import { Check, Sparkles, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const current = [
  { name: 'Operations OS', desc: 'End-to-end operational execution' },
  { name: 'Mobility OS', desc: 'Fleet, driver & vehicle lifecycle' },
  { name: 'Compliance OS', desc: 'Continuous regulatory readiness' },
  { name: 'Governance OS', desc: 'Accountability & decision governance' },
  { name: 'Risk OS', desc: 'Proactive risk visibility & controls' },
  { name: 'Financial Operations OS', desc: 'Collections, settlements & reconciliation' },
  { name: 'Workforce OS', desc: 'Distributed team accountability' },
]

const emerging = [
  { name: 'Digital Trust OS', desc: 'Trust infrastructure for digital organizations', badge: 'Coming Soon' },
  { name: 'Security Governance OS', desc: 'Unified security control & oversight', badge: 'In Development' },
  { name: 'Privacy & DPDP OS', desc: 'Data protection & privacy compliance', badge: 'In Development' },
  { name: 'Vendor Risk OS', desc: 'Third-party risk & supply chain governance', badge: 'Planned' },
  { name: 'AI Governance OS', desc: 'Responsible AI deployment & oversight', badge: 'Planned' },
]

const badgeColors: Record<string, string> = {
  'Coming Soon': 'border-teal/40 text-teal-bright bg-teal/10',
  'In Development': 'border-white/20 text-white/60 bg-white/5',
  'Planned': 'border-white/10 text-white/40 bg-transparent',
}

export function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Current & Emerging Platforms"
          title="A Multi-Product Platform Company"
          description="We are building for the next decade. Our portfolio is expanding deliberately — extending the operating system model into every discipline that defines enterprise trust, resilience, and performance."
        />

        {/* Platform company signal */}
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-navy/10 bg-navy/[0.03] px-6 py-4 text-center">
          <p className="text-sm font-semibold text-steel">
            <span className="text-navy">Each OS is a complete, independent discipline</span>{' '}
            — not a feature, not a module, not a report. A full operating system purpose-built
            for one domain.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Available Today */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-navy">
                  Available Today
                </h3>
                <p className="text-xs text-steel mt-0.5">Live & deployable right now</p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {current.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-soft px-4 py-3"
                >
                  <div className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 shrink-0 text-teal" />
                    <div>
                      <p className="text-sm font-bold text-navy leading-tight">{item.name}</p>
                      <p className="text-xs text-steel leading-tight mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Emerging Platforms */}
          <div className="rounded-2xl border border-navy bg-navy-ink p-8 text-white shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal/15 text-teal-bright">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Emerging Platforms
                </h3>
                <p className="text-xs text-white/45 mt-0.5">Next frontier of the RSF ecosystem</p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {emerging.map((item) => (
                <li
                  key={item.name}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="h-4 w-4 shrink-0 text-teal-bright" />
                      <div>
                        <p className="text-sm font-bold text-white leading-tight">{item.name}</p>
                        <p className="text-xs text-white/45 leading-tight mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] ${badgeColors[item.badge]}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
              <p className="text-xs font-semibold text-white/50">
                This is what a platform company looks like.
              </p>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-teal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
