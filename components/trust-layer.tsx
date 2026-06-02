import {
  ShieldCheck,
  Scale,
  Workflow,
  Lock,
  AlertTriangle,
  BarChart3,
} from 'lucide-react'

const domains = [
  {
    icon: Scale,
    title: 'Governance',
    description:
      'Board-level visibility, decision accountability, and policy enforcement built into every workflow — not bolted on after the fact.',
    accent: 'border-l-4 border-teal',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    description:
      'Continuous regulatory readiness across multiple frameworks. Real-time control tracking, audit trails, and evidence generation.',
    accent: 'border-l-4 border-teal',
  },
  {
    icon: Workflow,
    title: 'Operations',
    description:
      'End-to-end operational execution with accountability chains, escalation paths, and measurable performance visibility.',
    accent: 'border-l-4 border-teal',
  },
  {
    icon: Lock,
    title: 'Security',
    description:
      'Security posture management, control ownership, and unified oversight across distributed and cloud-native environments.',
    accent: 'border-l-4 border-teal',
  },
  {
    icon: AlertTriangle,
    title: 'Risk',
    description:
      'Proactive risk identification, control mapping, and real-time risk scoring — not reactive incident response.',
    accent: 'border-l-4 border-teal',
  },
  {
    icon: BarChart3,
    title: 'Decision Intelligence',
    description:
      'Structured decision frameworks, data-driven insights, and organizational memory — so every decision is informed and traceable.',
    accent: 'border-l-4 border-teal',
  },
]

export function TrustLayer() {
  return (
    <section className="bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
            Trust Layer
          </span>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy md:text-4xl leading-[1.1]">
            Designed Around Real{' '}
            <span className="text-teal">Enterprise Challenges</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            Every dimension of the RazorSharpFocus platform was shaped by real
            enterprise problems — not product roadmap assumptions. These are the six
            domains where organizations consistently face operational, regulatory, and
            strategic exposure.
          </p>
        </div>

        {/* Domain cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((item) => (
            <article
              key={item.title}
              className={`rounded-xl bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${item.accent}`}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer statement */}
        <div className="mt-12 rounded-2xl border border-navy/10 bg-navy/[0.03] px-8 py-6 text-center">
          <p className="font-heading text-lg font-bold text-navy">
            No customer logos yet.{' '}
            <span className="text-teal">Just 25 years of solving these exact problems.</span>
          </p>
          <p className="mt-2 text-sm text-steel max-w-2xl mx-auto">
            When you work with RazorSharpFocus, you are not getting a vendor who
            read about your challenges. You are getting practitioners who led
            organizations through them.
          </p>
        </div>

      </div>
    </section>
  )
}
