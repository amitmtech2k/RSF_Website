import { Award, Quote } from 'lucide-react'

const expertise = [
  'Enterprise Technology Leadership',
  'FinTech & Payments Infrastructure',
  'Digital Transformation Programs',
  'Governance & Compliance Management',
  'Operations & Execution Excellence',
  'Financial Systems & Controls',
  'Risk Management Frameworks',
]

export function FounderNote() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal">
            Why RazorSharpFocus Exists
          </span>
          <span className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Identity column */}
          <div>
            <div className="sticky top-28">
              {/* Monogram */}
              <div className="relative inline-flex">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-navy shadow-xl shadow-navy/20">
                  <span className="font-heading text-3xl font-extrabold tracking-tight text-white">
                    AT
                  </span>
                </div>
                <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-teal text-white shadow">
                  <Award className="h-3.5 w-3.5" />
                </span>
              </div>

              <div className="mt-6">
                <p className="font-heading text-2xl font-extrabold text-navy">
                  Amit Kumar Tyagi
                </p>
                <p className="mt-1 font-semibold text-teal">Founder &amp; CEO</p>
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  25+ years at the intersection of enterprise technology, financial
                  services, operations, and organizational transformation.
                </p>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-steel/70">
                  Domain Expertise
                </p>
                <ul className="space-y-2.5">
                  {expertise.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-navy">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Philosophy column */}
          <div>
            <Quote className="h-9 w-9 text-teal mb-6" />

            <div className="space-y-6">
              <p className="text-xl leading-relaxed font-medium text-navy">
                After 25 years inside enterprise organizations — not advising them,
                but leading transformation programs, rebuilding financial infrastructure,
                designing governance frameworks, and navigating regulatory scrutiny —
                I observed something that never changed, regardless of industry, scale,
                or geography.
              </p>

              <p className="leading-relaxed text-steel">
                Organizations buy more software every year. Yet they still struggle with the
                same problems: compliance failures, accountability gaps, governance breakdowns,
                risk surprises, and operational fragmentation. The software existed.
                The processes existed. The consultants were hired and departed.
              </p>

              <p className="leading-relaxed text-steel">
                The missing piece was never more software. It was the absence of a{' '}
                <span className="font-semibold text-navy">
                  connected, accountable, governed operating system
                </span>{' '}
                — one that tied people to processes, data to decisions, and obligations
                to measurable outcomes. Infrastructure, not tooling.
              </p>

              <div className="relative my-8 rounded-2xl border-l-4 border-teal bg-soft px-7 py-6">
                <p className="text-pretty font-heading text-lg font-bold leading-snug text-navy">
                  Technology existed. Processes existed. Software existed.
                </p>
                <p className="mt-2 text-pretty font-heading text-lg font-bold leading-snug text-teal">
                  The operating system that connected them did not.
                </p>
              </div>

              <p className="leading-relaxed text-steel">
                RazorSharpFocus was founded to build exactly that — not a consulting firm,
                not another point solution, but a{' '}
                <span className="font-semibold text-navy">
                  platform company
                </span>{' '}
                that delivers Digital Operating Systems. Each OS is a complete discipline.
                Together, they form the Intelligence Layer of the modern enterprise.
              </p>

              <p className="font-semibold text-navy leading-relaxed">
                We are building the infrastructure of operational excellence —
                the same way ServiceNow built workflow infrastructure,
                Datadog built observability infrastructure,
                and Palantir built decision intelligence infrastructure.{' '}
                <span className="text-teal">
                  This is our category.
                </span>
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white font-heading text-base font-extrabold shrink-0">
                AT
              </div>
              <div>
                <p className="font-heading font-bold text-navy">Amit Kumar Tyagi</p>
                <p className="text-sm text-steel">Founder &amp; CEO, RazorSharpFocus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
