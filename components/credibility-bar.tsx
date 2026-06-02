import { Clock3, Globe2, Layers, ShieldCheck, Cpu } from 'lucide-react'

const credentials = [
  {
    icon: Clock3,
    headline: '25+ Years',
    sub: 'Leadership Experience',
  },
  {
    icon: Globe2,
    headline: 'Enterprise',
    sub: 'Transformation Programs',
  },
  {
    icon: Cpu,
    headline: 'FinTech & Payments',
    sub: 'Deep Domain Expertise',
  },
  {
    icon: ShieldCheck,
    headline: 'Governance',
    sub: '& Compliance Focus',
  },
  {
    icon: Layers,
    headline: 'Platform',
    sub: 'Not Consulting',
  },
]

const domains = [
  'Technology',
  'Operations',
  'Governance',
  'Compliance',
  'Risk',
  'Security',
  'Transformation',
  'FinTech',
]

export function CredibilityBar() {
  return (
    <div className="border-y border-border bg-soft">
      {/* Primary credential strip */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0">
          {credentials.map((cred) => (
            <div
              key={cred.headline}
              className="flex flex-1 items-center gap-3 px-5 py-4 sm:justify-center sm:py-5"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/8 text-navy">
                <cred.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="font-heading text-sm font-extrabold text-navy leading-tight">
                  {cred.headline}
                </p>
                <p className="text-xs text-steel leading-tight mt-0.5">{cred.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Domain expertise tag strip */}
      <div className="border-t border-border/60 bg-navy/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="mr-2 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-steel/60">
              25+ Years across
            </span>
            {domains.map((d) => (
              <span
                key={d}
                className="rounded-full border border-navy/15 bg-white px-3 py-1 text-xs font-semibold text-navy shadow-sm"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
