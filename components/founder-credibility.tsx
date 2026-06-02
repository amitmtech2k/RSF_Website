import { CheckCircle2, Award, Cpu, ShieldCheck, Layers, Target } from 'lucide-react'

const credentials = [
  {
    icon: Award,
    stat: '25+',
    unit: 'Years',
    label: 'Enterprise Leadership',
    detail: 'CTO, transformation leader, and platform builder across technology, financial services, and operational ecosystems.',
  },
  {
    icon: Cpu,
    stat: '7+',
    unit: 'Platforms',
    label: 'Built & Scaled',
    detail: 'End-to-end platform architecture and delivery — from greenfield build to enterprise-scale operations.',
  },
  {
    icon: ShieldCheck,
    stat: '100%',
    unit: 'Practitioner',
    label: 'Governance & Compliance',
    detail: 'Led governance design, regulatory compliance programs, and risk frameworks inside operating organizations.',
  },
  {
    icon: Layers,
    stat: 'Full-Stack',
    unit: 'Expertise',
    label: 'Operations & Technology',
    detail: 'Rare combination of technology depth and operational breadth — from board-level governance to ground-level execution.',
  },
  {
    icon: Target,
    stat: 'Multi-Industry',
    unit: 'Experience',
    label: 'Operational Excellence',
    detail: 'Delivered measurable outcomes across FinTech, payments, mobility, logistics, and enterprise services.',
  },
]

const pillars = [
  '25+ Years Experience',
  'Enterprise Platforms',
  'Governance & Compliance',
  'Technology Leadership',
  'Operational Excellence',
]

export function FounderCredibility() {
  return (
    <section className="bg-navy-ink py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-bright">
            Who We Are
          </span>
          <span className="h-px flex-1 bg-white/10 max-w-xs" />
        </div>

        {/* Headline block */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl leading-[1.1]">
            Built by Practitioners.{' '}
            <span className="text-teal-bright">Not Theorists.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            RazorSharpFocus was founded by leaders who have spent more than 25 years{' '}
            <span className="font-semibold text-white">building, operating, and scaling</span>{' '}
            enterprise platforms across technology, operations, governance, compliance, and
            financial ecosystems. Every product we build reflects problems we have personally
            lived, solved, and documented — not theories from a whiteboard.
          </p>

          {/* Credential pillars */}
          <div className="mt-8 flex flex-wrap gap-3">
            {pillars.map((pillar) => (
              <span
                key={pillar}
                className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-sm font-semibold text-teal-bright"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                {pillar}
              </span>
            ))}
          </div>
        </div>

        {/* Credential cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {credentials.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:border-teal/40 hover:bg-white/[0.07]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal/15 text-teal-bright">
                <item.icon className="h-5 w-5" />
              </span>
              <div className="mt-4">
                <span className="font-heading text-2xl font-extrabold text-white leading-none">
                  {item.stat}
                </span>
                <span className="ml-1.5 text-xs font-bold uppercase tracking-wide text-teal-bright">
                  {item.unit}
                </span>
              </div>
              <p className="mt-1.5 text-sm font-bold text-white/90">{item.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/50">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-12 rounded-2xl border border-teal/20 bg-teal/5 px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white font-heading text-base font-extrabold">
            AT
          </div>
          <div>
            <p className="font-heading font-bold text-white">
              Amit Kumar Tyagi — Founder &amp; CEO
            </p>
            <p className="mt-1 text-sm text-white/55 leading-relaxed max-w-2xl">
              Former CTO. Platform builder. Governance architect. 25+ years transforming
              how organizations operate, comply, and scale. RazorSharpFocus is the
              culmination of everything I learned inside the enterprise — not outside it.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
