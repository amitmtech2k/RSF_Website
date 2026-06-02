import {
  Landmark,
  Workflow,
  ShieldCheck,
  AlertTriangle,
  Lock,
  BarChart3,
} from 'lucide-react'
import { LogoMark } from '@/components/site-logo'

const nodes = [
  { label: 'Governance', icon: Landmark },
  { label: 'Operations', icon: Workflow },
  { label: 'Compliance', icon: ShieldCheck },
  { label: 'Risk', icon: AlertTriangle },
  { label: 'Security', icon: Lock },
  { label: 'Intelligence', icon: BarChart3 },
]

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-ink text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 10%, rgba(47,158,154,0.18) 0%, transparent 45%), radial-gradient(circle at 0% 90%, rgba(255,255,255,0.06) 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-40">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-teal-bright">
            Digital Operating Systems Company
          </span>
          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.4rem]">
            Building Digital Operating Systems for Modern Organizations
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            Built on more than two decades of delivering large-scale technology,
            operations, governance, compliance, and transformation programs,
            RazorSharpFocus builds intelligent Digital Operating Systems that
            simplify complexity, improve visibility, strengthen accountability,
            and scale with confidence.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#platform"
              className="inline-flex items-center justify-center rounded-md bg-teal px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-teal/20 transition-colors hover:bg-teal-bright"
            >
              Explore Our Platform
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Schedule a Discussion
            </a>
          </div>
        </div>

        <EcosystemDiagram />
      </div>
    </section>
  )
}

function EcosystemDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
        <div className="grid grid-cols-3 gap-3">
          {nodes.slice(0, 3).map((node) => (
            <NodeCard key={node.label} {...node} />
          ))}
        </div>

        <div className="my-4 flex items-center justify-center">
          <div className="flex w-full items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-teal/40" />
            <div className="flex items-center gap-2.5 rounded-xl border border-teal/30 bg-teal/10 px-4 py-3">
              <LogoMark variant="light" className="h-7 w-7" />
              <span className="font-heading text-sm font-bold text-white">
                RSF Platform
              </span>
            </div>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-teal/40" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {nodes.slice(3).map((node) => (
            <NodeCard key={node.label} {...node} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs font-medium uppercase tracking-[0.16em] text-white/45">
          One Unified Operating Intelligence Layer
        </p>
      </div>
    </div>
  )
}

function NodeCard({
  label,
  icon: Icon,
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-4 text-center transition-colors hover:border-teal/40 hover:bg-white/[0.07]">
      <Icon className="h-5 w-5 text-teal-bright" />
      <span className="text-xs font-semibold text-white/80">{label}</span>
    </div>
  )
}
