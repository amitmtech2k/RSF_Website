import { TrendingDown, AlertTriangle, Eye, Layers } from 'lucide-react'

const signals = [
  {
    icon: TrendingDown,
    label: 'Visibility Decreases',
    text: 'More data, more dashboards — yet decision-makers see less of what matters.',
  },
  {
    icon: AlertTriangle,
    label: 'Compliance Gets Harder',
    text: 'Regulations multiply. Every new tool adds another compliance surface to manage.',
  },
  {
    icon: Eye,
    label: 'Risk Stays Hidden',
    text: 'Point solutions create blind spots. Risk lives in the gaps between systems.',
  },
  {
    icon: Layers,
    label: 'Decisions Slow Down',
    text: 'Leaders wait for reports instead of acting on live intelligence.',
  },
]

export function WhyWeExist() {
  return (
    <section id="why-we-exist" className="bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
            Why RazorSharpFocus Exists
          </span>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20 items-start">

          {/* Left: the observation */}
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy md:text-4xl leading-[1.15]">
              Organizations buy more software{' '}
              <span className="text-teal">every year.</span>
              <br />
              Yet the problems{' '}
              <span className="relative inline-block">
                <span className="relative z-10">get worse.</span>
                <span className="absolute bottom-1 left-0 right-0 h-[6px] bg-teal/20 -z-0 rounded" />
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-steel">
              We have watched this pattern repeat for 25 years across financial services,
              mobility, logistics, healthcare, and enterprise technology. The software budgets
              grow. The vendor count rises. And the organization still struggles with the
              same operational, compliance, and governance failures.
            </p>

            <div className="mt-8 rounded-2xl border-l-4 border-teal bg-white px-7 py-6 shadow-sm">
              <p className="font-heading text-lg font-bold text-navy leading-snug">
                The problem is not a lack of systems.
              </p>
              <p className="mt-2 font-heading text-lg font-bold text-teal leading-snug">
                The problem is the absence of an{' '}
                <span className="underline decoration-teal/40 underline-offset-4">
                  operating intelligence layer
                </span>
                {' '}that connects them.
              </p>
            </div>

            <p className="mt-6 leading-relaxed text-steel">
              That is the gap RazorSharpFocus was founded to close — not with another
              point solution, but with Digital Operating Systems that provide the
              connective intelligence layer every modern organization is missing.
            </p>
          </div>

          {/* Right: the four signals */}
          <div className="grid gap-4">
            {signals.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-sm transition-all hover:border-teal/40 hover:shadow-md"
              >
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/8 text-navy">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-navy">{item.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-steel">{item.text}</p>
                </div>
              </div>
            ))}

            {/* Insight callout */}
            <div className="rounded-2xl border border-navy bg-navy px-6 py-5 text-white">
              <p className="text-sm font-semibold text-white/70 leading-relaxed">
                The solution is not another dashboard or another vendor. It is a{' '}
                <span className="font-bold text-white">
                  unified operating intelligence layer
                </span>{' '}
                — one that turns fragmented data into governed, accountable, real-time
                organizational clarity.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
