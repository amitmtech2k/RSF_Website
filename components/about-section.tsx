import { Check } from 'lucide-react'

const challenges = [
  'Fragmented operations',
  'Limited visibility',
  'Compliance complexity',
  'Operational risks',
  'Financial control gaps',
  'Security concerns',
  'Disconnected decision-making',
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
            About Us
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Built on Experience. Driven by Purpose.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-steel">
            RazorSharpFocus was founded on a simple belief: technology should
            help organizations operate better.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-steel">
            Our leadership team brings together decades of experience across
            enterprise technology, financial services, fintech, operations,
            governance, compliance, security, and business transformation.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
            <Stat value="25+" label="Years of leadership" />
            <Stat value="7" label="Operating systems" />
            <Stat value="12+" label="Industries served" />
          </div>
        </div>

        <div>
          <p className="text-pretty leading-relaxed text-steel">
            Throughout our careers, we have worked with organizations navigating
            growth, modernization, regulatory scrutiny, operational complexity,
            and digital transformation. Across industries and geographies, one
            reality remained consistent — organizations often struggle with the
            same core challenges:
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {challenges.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg border border-border bg-soft px-4 py-3 text-sm font-semibold text-navy"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal/15 text-teal">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-xl border-l-4 border-teal bg-soft px-6 py-5 text-pretty leading-relaxed text-navy">
            RazorSharpFocus was created to address these challenges through
            intelligent Digital Operating Systems that transform complexity into
            clarity. We are not a software company. We are not a consulting
            company. We build the Digital Operating Systems that modern
            organizations need to operate effectively.
          </p>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-heading text-3xl font-extrabold text-navy">{value}</div>
      <div className="mt-1 text-xs font-medium leading-snug text-steel">{label}</div>
    </div>
  )
}
