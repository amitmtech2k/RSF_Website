import { CheckCircle2 } from 'lucide-react'

const outcomes = [
  'Govern Better',
  'Operate Smarter',
  'Stay Compliant',
  'Manage Risk',
  'Strengthen Security',
  'Scale with Confidence',
]

export function ClosingStatement() {
  return (
    <section className="bg-navy-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <h2 className="text-balance font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          Organizations do not need more software.
          <span className="block text-teal-bright mt-2">
            They need better operating systems.
          </span>
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
          RazorSharpFocus is building the digital infrastructure that helps
          organizations govern, operate, comply, and grow — with confidence,
          consistency, and control.
        </p>

        <div className="mt-12 mx-auto max-w-xl">
          <div className="grid grid-cols-2 gap-4">
            {outcomes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-left"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-bright" />
                <span className="font-heading font-bold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-teal px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-teal/20 transition-colors hover:bg-teal-bright"
          >
            Schedule a Discussion
          </a>
          <a
            href="#platform"
            className="inline-flex items-center justify-center rounded-md border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore the Platform
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-sm text-white/40">
          <span>Built on Experience</span>
          <span className="h-1 w-1 rounded-full bg-white/25" />
          <span>Designed for Trust</span>
          <span className="h-1 w-1 rounded-full bg-white/25" />
          <span>Engineered for Scale</span>
        </div>
      </div>
    </section>
  )
}
