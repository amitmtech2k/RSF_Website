import {
  Car,
  Scale,
  ShieldCheck,
  Activity,
  Wallet,
  Users,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const products = [
  {
    icon: Car,
    name: 'Mobility OS',
    tagline: 'End-to-end operational control for fleet and mobility businesses',
    description:
      'Managing the full lifecycle of drivers, vehicles, contracts, collections, settlements, compliance, and performance for mobility-first organizations.',
    points: [
      'Driver onboarding & lifecycle management',
      'Vehicle tracking & maintenance compliance',
      'Contract management & renewals',
      'Collections, ledger & settlements engine',
      'Regulatory compliance & reporting',
      'Operational performance analytics',
    ],
    accent: 'bg-blue-50 border-blue-100',
  },
  {
    icon: Scale,
    name: 'Governance OS',
    tagline: 'Accountability, transparency, and decision governance at scale',
    description:
      'Improving organizational accountability, ownership clarity, transparency, and decision-making across every layer of the business.',
    points: [
      'Organizational accountability mapping',
      'Policy administration & version control',
      'Decision registers & approvals workflow',
      'Ownership & delegation frameworks',
      'Board & leadership reporting',
      'Governance health monitoring',
    ],
    accent: 'bg-teal-50 border-teal-100',
  },
  {
    icon: ShieldCheck,
    name: 'Compliance OS',
    tagline: 'From reactive compliance to continuous, operational readiness',
    description:
      'Automating compliance monitoring, audits, controls, and regulatory obligations so organizations stay audit-ready every day.',
    points: [
      'Regulatory obligation management',
      'Continuous compliance monitoring',
      'Audit scheduling & evidence management',
      'Control testing & gap assessments',
      'DPDP, GDPR & sector-specific frameworks',
      'Compliance reporting & dashboards',
    ],
    accent: 'bg-green-50 border-green-100',
  },
  {
    icon: Activity,
    name: 'Operations OS',
    tagline: 'Operational visibility and execution excellence at every level',
    description:
      'Driving operational visibility, process consistency, and execution excellence across distributed teams and complex workflows.',
    points: [
      'SOP creation, distribution & monitoring',
      'Process workflow automation',
      'Cross-functional operational visibility',
      'Task execution tracking & escalation',
      'Process performance analytics',
      'Operational health dashboards',
    ],
    accent: 'bg-orange-50 border-orange-100',
  },
  {
    icon: Wallet,
    name: 'Financial Operations OS',
    tagline: 'Financial accountability, precision, and operational control',
    description:
      'Managing collections, settlements, reconciliations, and financial accountability with the precision that modern organizations require.',
    points: [
      'Collections pipeline management',
      'Settlement processing & disbursement',
      'Automated reconciliation engine',
      'Financial controls & exception handling',
      'Ledger management & audit trails',
      'Financial performance reporting',
    ],
    accent: 'bg-yellow-50 border-yellow-100',
  },
  {
    icon: Users,
    name: 'Workforce OS',
    tagline: 'Distributed team management with accountability built in',
    description:
      'Managing distributed teams, field operations, productivity, and performance with clarity, fairness, and operational discipline.',
    points: [
      'Distributed team management',
      'Field operations tracking',
      'Task assignment & completion monitoring',
      'Productivity visibility & measurement',
      'Performance evaluation frameworks',
      'Team accountability dashboards',
    ],
    accent: 'bg-purple-50 border-purple-100',
  },
  {
    icon: AlertTriangle,
    name: 'Risk OS',
    tagline: 'Proactive risk visibility before incidents become crises',
    description:
      'Identifying, assessing, monitoring, and mitigating business risks proactively — connected to controls and accountable owners.',
    points: [
      'Enterprise risk register management',
      'Risk assessment & scoring frameworks',
      'Control mapping & effectiveness testing',
      'Incident tracking & response workflows',
      'Key Risk Indicator (KRI) monitoring',
      'Risk reporting for leadership & boards',
    ],
    accent: 'bg-red-50 border-red-100',
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Product Ecosystem"
          title="Purpose-Built Operating Systems"
          description="Each operating system is a complete discipline — built from first principles, designed for enterprise-scale organizations, and governed by the RSF framework."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group flex flex-col rounded-xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <product.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy">
                    {product.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-teal leading-snug">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-steel">
                {product.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {product.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-sm font-medium text-navy"
                  >
                    <ChevronRight className="h-3.5 w-3.5 shrink-0 text-teal" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-teal"
                >
                  Learn more about {product.name}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
