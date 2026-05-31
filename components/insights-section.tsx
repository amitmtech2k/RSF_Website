import { ArrowUpRight, Clock, BookOpen } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const insights = [
  {
    topic: 'Governance',
    title: 'Why Governance Is an Operating Discipline, Not a Document',
    excerpt:
      'Most governance frameworks fail not because they are poorly designed, but because they are never operationalized. Governance must become a daily discipline — woven into decision rights, approval chains, and accountability structures.',
    readTime: '6 min read',
    featured: true,
  },
  {
    topic: 'DPDP & Privacy',
    title: 'Preparing for DPDP: From Policy to Operational Reality',
    excerpt:
      'India\'s Digital Personal Data Protection Act demands more than updated privacy policies. Organizations need operational systems that track data flows, manage consent, handle breach response, and evidence compliance continuously.',
    readTime: '5 min read',
    featured: false,
  },
  {
    topic: 'Compliance',
    title: 'Moving From Reactive Compliance to Continuous Readiness',
    excerpt:
      'Reactive compliance — scrambling before audits — is expensive, risky, and unsustainable. Organizations that build continuous readiness into their operations treat compliance as infrastructure, not as an event.',
    readTime: '7 min read',
    featured: false,
  },
  {
    topic: 'Operational Excellence',
    title: 'The Hidden Cost of Fragmented Operations',
    excerpt:
      'Disconnected systems, siloed data, and manual reconciliations carry costs that rarely appear on a balance sheet. Yet they slow organizations down, introduce risk, and erode the quality of decisions at every level.',
    readTime: '5 min read',
    featured: false,
  },
  {
    topic: 'Risk Management',
    title: 'Making Risk Visible Before It Becomes an Incident',
    excerpt:
      'Risk management fails when it exists only in spreadsheets and committee reports. Making risk visible means connecting risk registers to controls, signals, and the people accountable for response.',
    readTime: '6 min read',
    featured: false,
  },
  {
    topic: 'Digital Trust',
    title: 'Digital Trust Is Becoming a Board-Level Priority',
    excerpt:
      'Security, privacy, and resilience are no longer IT concerns — they are organizational strategy. Boards that treat digital trust as infrastructure rather than insurance are building durable competitive advantage.',
    readTime: '5 min read',
    featured: false,
  },
]

export function InsightsSection() {
  return (
    <section id="insights" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="Perspectives From the Field"
          description="Practical thinking on governance, compliance, risk, operations, and digital trust — drawn from decades of building and leading at enterprise scale."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, index) => (
            <article
              key={item.title}
              className={`group flex flex-col rounded-xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
                item.featured
                  ? 'border-teal/40 bg-navy/[0.02]'
                  : 'border-border hover:border-teal/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-teal">
                  {item.topic}
                </span>
                {item.featured && (
                  <span className="rounded-full bg-teal/10 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-teal">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-navy">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-steel line-clamp-4">
                {item.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                <span className="flex items-center gap-1.5 text-xs font-medium text-steel/70">
                  <Clock className="h-3.5 w-3.5" />
                  {item.readTime}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-teal">
                  Read more
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 rounded-2xl border border-border bg-soft p-7">
          <BookOpen className="h-5 w-5 text-teal shrink-0" />
          <p className="text-sm text-steel">
            A comprehensive insights library is in development.{' '}
            <a href="#contact" className="font-semibold text-navy underline-offset-4 hover:underline hover:text-teal">
              Join our early access list →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
