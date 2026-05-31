import {
  TrendingUp,
  Settings2,
  Cpu,
  ShieldCheck,
  AlertTriangle,
  Lock,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const personas = [
  {
    icon: TrendingUp,
    role: 'CEOs',
    description: 'Driving growth, organizational performance, and accountability.',
  },
  {
    icon: Settings2,
    role: 'COOs',
    description: 'Improving operational efficiency and consistent execution.',
  },
  {
    icon: Cpu,
    role: 'CIOs & CTOs',
    description: 'Modernizing technology and digital operations.',
  },
  {
    icon: ShieldCheck,
    role: 'Compliance Leaders',
    description: 'Managing regulatory obligations and controls with confidence.',
  },
  {
    icon: AlertTriangle,
    role: 'Risk Leaders',
    description: 'Strengthening risk visibility, response, and resilience.',
  },
  {
    icon: Lock,
    role: 'Security Leaders',
    description: 'Protecting digital trust and organizational assets.',
  },
]

export function PersonasSection() {
  return (
    <section id="who-we-serve" className="bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Built for Leaders Responsible for Outcomes"
          description="RazorSharpFocus is designed for the people accountable for how organizations govern, operate, comply, and grow."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((persona) => (
            <article
              key={persona.role}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                <persona.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-navy">
                  {persona.role}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel">
                  {persona.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
