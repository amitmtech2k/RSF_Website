import {
  KeyRound,
  Workflow,
  Scale,
  Wallet,
  ShieldAlert,
  LineChart,
  Plug,
  Bell,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { LogoMark } from '@/components/site-logo'

const capabilities = [
  { icon: KeyRound, label: 'Identity & Access Management' },
  { icon: Workflow, label: 'Workflow & Process Automation' },
  { icon: Scale, label: 'Governance & Compliance Engine' },
  { icon: Wallet, label: 'Financial Controls & Accountability' },
  { icon: ShieldAlert, label: 'Risk & Security Management' },
  { icon: LineChart, label: 'Analytics & Intelligence' },
  { icon: Bell, label: 'Notifications & Alerting' },
  { icon: Plug, label: 'Enterprise Integrations & APIs' },
]

const operatingSystems = [
  'Mobility OS',
  'Governance OS',
  'Compliance OS',
  'Operations OS',
  'Financial Ops OS',
  'Workforce OS',
  'Risk OS',
]

const principles = [
  'Enterprise-Grade Security',
  'Role-Based Access Control',
  'Audit Trail & Immutability',
  'Multi-Tenant Architecture',
  'Regulatory Compliance Ready',
  'Horizontal Scalability',
]

export function PlatformSection() {
  return (
    <section id="platform" className="bg-navy-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          variant="light"
          eyebrow="The RSF Platform"
          title="One Platform. Multiple Operating Systems."
          description="The RSF Platform is the enterprise foundation that powers every RazorSharpFocus solution — engineered for scalability, governance, security, and operational resilience."
        />

        <div className="mx-auto mt-14 max-w-5xl">
          {/* Architecture diagram */}
          <div className="space-y-3">
            {/* Operating systems layer */}
            <LayerLabel>Layer 3 — Operating Systems</LayerLabel>
            <div className="flex flex-wrap justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              {operatingSystems.map((os) => (
                <span
                  key={os}
                  className="rounded-lg border border-teal/30 bg-teal/10 px-4 py-2 text-sm font-semibold text-white hover:border-teal/60 hover:bg-teal/15 transition-colors cursor-default"
                >
                  {os}
                </span>
              ))}
            </div>

            <Connector label="Powers domain-specific solutions" />

            {/* Platform core layer */}
            <LayerLabel>Layer 2 — Platform Capabilities</LayerLabel>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-5 flex items-center justify-center gap-3">
                <LogoMark variant="light" className="h-9 w-9" />
                <span className="font-heading text-lg font-bold text-white">
                  RSF Platform Core
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {capabilities.map((cap) => (
                  <div
                    key={cap.label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 hover:border-teal/30 hover:bg-white/[0.06] transition-colors"
                  >
                    <cap.icon className="h-5 w-5 shrink-0 text-teal-bright" />
                    <span className="text-sm font-medium text-white/85">
                      {cap.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Connector label="Built on a governed enterprise foundation" />

            {/* Foundation layer */}
            <LayerLabel>Layer 1 — Secure Enterprise Foundation</LayerLabel>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-navy to-navy-deep p-5">
              <div className="flex flex-wrap justify-center gap-3">
                {principles.map((p) => (
                  <span
                    key={p}
                    className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold text-white/70"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Platform value prop */}
          <div className="mt-10 rounded-2xl border border-teal/20 bg-teal/5 p-7">
            <p className="text-center text-sm leading-relaxed text-white/70">
              The RSF Platform is not a collection of tools. It is a{' '}
              <span className="font-semibold text-white">
                unified enterprise operating foundation
              </span>{' '}
              — shared identity, shared workflow, shared governance, shared data — so every
              operating system speaks the same language and enforces the same standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function LayerLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-teal">
      {children}
    </p>
  )
}

function Connector({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 py-1" aria-hidden="true">
      <span className="h-6 w-px bg-gradient-to-b from-teal/50 to-white/10" />
      <span className="text-[0.6rem] font-medium uppercase tracking-[0.12em] text-white/30">
        {label}
      </span>
      <span className="h-2 w-px bg-gradient-to-b from-white/10 to-teal/30" />
    </div>
  )
}
