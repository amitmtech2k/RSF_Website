import {
  EyeOff,
  Repeat,
  FileWarning,
  Gauge,
  UserX,
  Boxes,
  Brain,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const challenges = [
  {
    icon: EyeOff,
    title: 'Lack of Process Visibility',
    description:
      'Leaders cannot see how work actually flows across teams, systems, and business units.',
  },
  {
    icon: Repeat,
    title: 'Inconsistent Execution',
    description:
      'Processes are followed differently across locations, resulting in unpredictable outcomes.',
  },
  {
    icon: FileWarning,
    title: 'Compliance Gaps',
    description:
      'Controls and obligations are managed reactively, exposing organizations to regulatory risk.',
  },
  {
    icon: Gauge,
    title: 'Operational Inefficiencies',
    description:
      'Manual handoffs and disconnected tools slow execution and inflate operating costs.',
  },
  {
    icon: UserX,
    title: 'Weak Accountability',
    description:
      'Ownership of decisions, actions, and outcomes is unclear across the organization.',
  },
  {
    icon: Boxes,
    title: 'Fragmented Systems',
    description:
      'Critical information is scattered across siloed applications that do not talk to each other.',
  },
  {
    icon: Brain,
    title: 'Limited Decision Intelligence',
    description:
      'Decisions are made without the connected, real-time intelligence leaders need.',
  },
]

export function LearnedSection() {
  return (
    <section className="bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Have Learned"
          title="Decades of Building and Leading Organizations"
          description="Across industries, technologies, and business models, most organizational challenges trace back to a few common areas. Technology alone does not solve them — organizations need operating systems that connect people, processes, controls, data, and decisions."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((item) => (
            <article
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-teal/10 group-hover:text-teal">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {item.description}
              </p>
            </article>
          ))}
          <article className="flex flex-col justify-center rounded-xl border border-navy bg-navy p-6 text-white shadow-sm">
            <h3 className="font-heading text-lg font-bold text-white">
              That is what RazorSharpFocus is building.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Operating systems that turn organizational complexity into clarity,
              accountability, and confident decisions.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
