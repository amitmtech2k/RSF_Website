import { Check, Sparkles, ArrowRight, Layers2, Cpu } from 'lucide-react'
import { LogoMark } from '@/components/site-logo'

const current = [
  { name: 'RSF Core Platform', desc: 'The intelligence layer connecting all OS modules', core: true },
  { name: 'Operations OS', desc: 'End-to-end operational execution & accountability' },
  { name: 'Compliance OS', desc: 'Continuous regulatory readiness & control tracking' },
  { name: 'Governance OS', desc: 'Decision governance & accountability frameworks' },
  { name: 'Risk OS', desc: 'Proactive risk visibility, controls & escalation' },
  { name: 'Security OS', desc: 'Unified security governance & posture management' },
  { name: 'Mobility OS', desc: 'Fleet, driver & vehicle lifecycle management' },
  { name: 'Financial Operations OS', desc: 'Collections, settlements & reconciliation' },
]

const emerging = [
  { name: 'Industry Operating Systems', badge: 'In Design', desc: 'Purpose-built OS for verticals: FinTech, Healthcare, Logistics' },
  { name: 'AI Governance OS', badge: 'Planned', desc: 'Responsible AI deployment & oversight' },
  { name: 'Privacy & DPDP OS', badge: 'In Development', desc: 'Data protection & privacy compliance' },
  { name: 'Vendor Risk OS', badge: 'Planned', desc: 'Third-party risk & supply chain governance' },
  { name: 'Digital Trust OS', badge: 'Coming Soon', desc: 'Trust infrastructure for digital organizations' },
]

const badgeColors: Record<string, string> = {
  'Coming Soon': 'border-teal/40 text-teal-bright bg-teal/10',
  'In Development': 'border-amber-400/40 text-amber-300 bg-amber-400/10',
  'In Design': 'border-white/25 text-white/60 bg-white/5',
  'Planned': 'border-white/10 text-white/40 bg-transparent',
}

export function PlatformEcosystem() {
  return (
    <section id="ecosystem" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
            Platform Ecosystem
          </span>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-4">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy md:text-4xl leading-[1.1]">
            The RazorSharpFocus Platform Ecosystem
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            We are not a consultancy. We are not a single-product tool. We are a{' '}
            <span className="font-semibold text-navy">multi-product platform company</span>{' '}
            building a suite of Digital Operating Systems that each address a complete
            enterprise discipline — connected by a single intelligence layer.
          </p>
        </div>

        {/* Core platform badge */}
        <div className="mb-10 inline-flex items-center gap-3 rounded-2xl border border-teal/25 bg-teal/5 px-5 py-3">
          <LogoMark variant="dark" className="h-8 w-8 shrink-0" />
          <div>
            <p className="font-heading text-sm font-bold text-navy">RSF Core Platform</p>
            <p className="text-xs text-steel">The operating intelligence layer connecting every OS</p>
          </div>
          <ArrowRight className="h-4 w-4 text-teal ml-2 shrink-0" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Current */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-navy">Current</h3>
                <p className="text-xs text-steel mt-0.5">Available & deployable today</p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {current.filter(i => !i.core).map((item) => (
                <li
                  key={item.name}
                  className="flex items-start gap-3 rounded-xl border border-border bg-soft px-4 py-3 transition-all hover:border-teal/40"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <div>
                    <p className="text-sm font-bold text-navy leading-tight">{item.name}</p>
                    <p className="text-xs text-steel leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Emerging */}
          <div className="rounded-2xl border border-navy bg-navy-ink p-8 text-white shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal/15 text-teal-bright">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Emerging</h3>
                <p className="text-xs text-white/45 mt-0.5">The next frontier of the RSF ecosystem</p>
              </div>
            </div>
            <ul className="space-y-2.5">
              {emerging.map((item) => (
                <li
                  key={item.name}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-all hover:border-teal/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
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

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-2">
              <p className="text-xs font-semibold text-white/45">
                This is what a platform company looks like.
              </p>
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-teal" />
            </div>
          </div>

        </div>

        {/* Bottom signal */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { icon: Layers2, title: 'Each OS is complete', sub: 'Not a feature. Not a module. A full operating system for one discipline.' },
            { icon: Cpu, title: 'All OS share one layer', sub: 'Every product connects to the RSF Core Platform intelligence layer.' },
            { icon: Check, title: 'Built for enterprise scale', sub: 'Designed for organizations with real governance, compliance and risk obligations.' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-xl border border-border bg-soft px-5 py-4">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/8 text-navy">
                <item.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-navy">{item.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-steel">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
