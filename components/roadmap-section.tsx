import { Layers2, Sparkles, ArrowRight, Target } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const current = [
  { name: 'Operations OS',          desc: 'End-to-end operational execution & accountability' },
  { name: 'Compliance OS',          desc: 'Continuous regulatory readiness & audit-readiness' },
  { name: 'Governance OS',          desc: 'Decision governance, policy & accountability' },
  { name: 'Risk OS',                desc: 'Proactive risk visibility, controls & escalation' },
  { name: 'Security OS',            desc: 'Security governance & unified posture management' },
  { name: 'Mobility OS',            desc: 'Fleet, driver & vehicle lifecycle management' },
  { name: 'Financial Operations OS',desc: 'Collections, settlements & reconciliation' },
]

const emerging = [
  { name: 'Industry Operating Systems', badge: 'In Design',      desc: 'Vertical-specific OS: FinTech, Healthcare, Logistics' },
  { name: 'Digital Trust OS',           badge: 'Coming Soon',    desc: 'Trust infrastructure for digital organizations' },
  { name: 'AI Governance OS',           badge: 'Planned',        desc: 'Responsible AI deployment, oversight & accountability' },
  { name: 'Privacy & DPDP OS',          badge: 'In Development', desc: 'Data protection, privacy compliance & DPDP readiness' },
  { name: 'Vendor Risk OS',             badge: 'Planned',        desc: 'Third-party risk & supply chain governance' },
]

const badgeColors: Record<string, string> = {
  'Coming Soon':    'border-teal/40 text-teal-bright bg-teal/10',
  'In Development': 'border-amber-400/40 text-amber-300 bg-amber-400/10',
  'In Design':      'border-white/25 text-white/60 bg-white/5',
  'Planned':        'border-white/10 text-white/35 bg-transparent',
}

export function RoadmapSection() {
  return (
    <section id="roadmap" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Roadmap"
          title="A Multi-Product Platform Company"
          description="Each OS is a complete, independent discipline — not a feature, not a module. Together they form the RSF Platform Ecosystem: the operating intelligence layer for the modern enterprise."
        />

        {/* Wording context note */}
        <div className="mt-6 mx-auto max-w-2xl rounded-2xl border border-navy/10 bg-navy/[0.03] px-6 py-4">
          <p className="text-sm text-steel leading-relaxed text-center">
            <span className="font-semibold text-navy">Built for enterprise scale.</span>{' '}
            We engage with early adopters and design partners as platform capabilities mature.
            Each Operating System addresses a complete enterprise discipline — connected through
            the RSF Core Platform.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* Current Platform Initiatives */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy/8 text-navy">
                <Target className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-navy">Current Platform Initiatives</h3>
                <p className="text-xs text-steel mt-0.5">Active development focus areas</p>
              </div>
            </div>
            <ul className="space-y-2">
              {current.map((item, i) => (
                <li
                  key={item.name}
                  className="flex items-start gap-3 rounded-xl border border-border bg-soft px-4 py-3 transition-all hover:border-teal/40 hover:-translate-y-px hover:shadow-sm"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy/8 text-[0.6rem] font-bold text-navy tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-navy leading-tight">{item.name}</p>
                    <p className="text-xs text-steel leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Emerging Initiatives */}
          <div className="rounded-2xl border border-navy bg-navy-ink p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal/15 text-teal-bright">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Emerging Initiatives</h3>
                <p className="text-xs text-white/40 mt-0.5">Next frontier of the RSF ecosystem</p>
              </div>
            </div>
            <ul className="space-y-2">
              {emerging.map((item) => (
                <li
                  key={item.name}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-all hover:border-teal/30 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <Layers2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright/70" />
                      <div>
                        <p className="text-sm font-bold text-white leading-tight">{item.name}</p>
                        <p className="text-xs text-white/40 leading-tight mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <span className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] ${badgeColors[item.badge]}`}>
                      {item.badge}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-white/8 flex items-center gap-2">
              <p className="text-xs font-semibold text-white/35">This is what a platform company looks like.</p>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-teal/60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
