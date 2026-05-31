import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const chain = [
  'Governance',
  'Compliance',
  'Operations',
  'Risk',
  'Security',
  'Trust',
  'Growth',
]

export function VisionSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Vision"
          title="The Future We Are Building"
          description="The challenges organizations face are becoming increasingly interconnected. We believe organizations need integrated systems that bring these disciplines together rather than managing them in isolation."
        />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {chain.map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              <span className="rounded-lg border border-border bg-soft px-5 py-2.5 text-sm font-semibold text-navy">
                {item}
              </span>
              {i < chain.length - 1 && (
                <ArrowRight className="h-4 w-4 text-teal" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-pretty text-center text-lg leading-relaxed text-steel">
          Our long-term vision is to create a portfolio of Digital Operating
          Systems that become the operational foundation for modern
          organizations across industries and geographies.
        </p>
      </div>
    </section>
  )
}
