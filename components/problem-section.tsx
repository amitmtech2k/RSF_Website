import { ArrowDownRight } from 'lucide-react'

const rootCauses = [
  'Processes become fragmented',
  'Accountability becomes unclear',
  'Compliance becomes reactive',
  'Risks remain hidden',
  'Data remains disconnected',
  'Decision-making slows down',
]

export function ProblemSection() {
  return (
    <section id="why-we-exist" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
              Why We Exist
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              The Problem We Are Solving
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-steel">
              For over two decades, we have observed a common pattern across
              organizations of all sizes and industries.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-steel">
              The challenges may appear different, but the root causes are often
              the same.
            </p>
          </div>

          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {rootCauses.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-soft px-5 py-4 text-sm font-semibold text-navy"
                >
                  <ArrowDownRight className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-navy bg-navy p-8 text-white lg:p-10">
              <p className="font-heading text-2xl font-extrabold leading-snug text-white md:text-3xl">
                Organizations do not need more software.
              </p>
              <p className="mt-2 font-heading text-2xl font-extrabold leading-snug text-teal-bright md:text-3xl">
                They need better operating systems.
              </p>
              <p className="mt-5 text-pretty leading-relaxed text-white/70">
                That is why RazorSharpFocus exists — to give organizations the
                Digital Operating Systems that connect people, processes,
                controls, data, and decisions into one coherent whole.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
