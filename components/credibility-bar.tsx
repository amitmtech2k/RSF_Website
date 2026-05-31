import { Clock3, Building2, CreditCard, Scale, Lightbulb } from 'lucide-react'

const credentials = [
  {
    icon: Clock3,
    headline: '25+ Years',
    sub: 'Leadership Experience',
  },
  {
    icon: Building2,
    headline: 'Enterprise',
    sub: 'Transformation Programs',
  },
  {
    icon: CreditCard,
    headline: 'FinTech & Payments',
    sub: 'Deep Domain Expertise',
  },
  {
    icon: Scale,
    headline: 'Governance',
    sub: '& Compliance Focus',
  },
  {
    icon: Lightbulb,
    headline: 'Product Innovation',
    sub: 'Purpose-Built Systems',
  },
]

export function CredibilityBar() {
  return (
    <div className="border-y border-border bg-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col divide-y divide-border sm:flex-row sm:divide-x sm:divide-y-0">
          {credentials.map((cred) => (
            <div
              key={cred.headline}
              className="flex flex-1 items-center gap-3 px-5 py-4 sm:justify-center sm:py-5"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy/8 text-navy">
                <cred.icon className="h-4.5 w-4.5" />
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
    </div>
  )
}
