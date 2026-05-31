import { Lock, FileKey, Network, BrainCircuit } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const solutions = [
  {
    icon: Lock,
    name: 'Security Governance OS',
    description: 'Establish mature, accountable security governance frameworks.',
  },
  {
    icon: FileKey,
    name: 'Privacy & DPDP OS',
    description: 'Support privacy compliance and data protection obligations.',
  },
  {
    icon: Network,
    name: 'Vendor Risk OS',
    description: 'Manage third-party and ecosystem security risks end to end.',
  },
  {
    icon: BrainCircuit,
    name: 'AI Governance OS',
    description: 'Enable responsible, transparent, and governed AI adoption.',
  },
]

export function DigitalTrustSection() {
  return (
    <section id="trust" className="bg-navy py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          variant="light"
          eyebrow="Digital Trust & Security"
          title="Building Trust in a Digital World"
          description="Security, privacy, and trust have become strategic priorities for modern organizations. RazorSharpFocus is building the next generation of Digital Trust solutions."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item) => (
            <article
              key={item.name}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-teal/40 hover:bg-white/[0.07]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal/15 text-teal-bright">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-base font-bold text-white">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {item.description}
              </p>
              <span className="mt-4 inline-block rounded-full border border-white/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/55">
                Emerging Solution
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
