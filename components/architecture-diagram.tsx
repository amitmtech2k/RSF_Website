'use client'
import { useState } from 'react'

const layers = [
  {
    id: 'ai',
    label: 'AI & Intelligence Layer',
    tag: 'Emerging',
    tagStyle: 'bg-teal/15 text-teal-bright border-teal/30',
    capabilities: ['Predictive Insights', 'Anomaly Detection', 'Decision Support', 'NLP Processing'],
    barColor: 'bg-teal-bright',
    barWidth: '90%',
    rowBg: 'bg-gradient-to-r from-teal/12 to-teal/5 hover:from-teal/18 hover:to-teal/8',
    border: 'border-teal/25',
    labelColor: 'text-teal-bright',
    dot: 'bg-teal-bright shadow-[0_0_8px_rgba(61,213,207,0.6)]',
    indent: 0,
  },
  {
    id: 'governance',
    label: 'Governance Layer',
    tag: 'Core',
    tagStyle: 'bg-white/8 text-white/70 border-white/15',
    capabilities: ['Policy Management', 'Decision Accountability', 'Board Visibility', 'Audit Trails'],
    barColor: 'bg-white/60',
    barWidth: '100%',
    rowBg: 'bg-white/[0.04] hover:bg-white/[0.07]',
    border: 'border-white/10',
    labelColor: 'text-white',
    dot: 'bg-white/80',
    indent: 0,
  },
  {
    id: 'compliance',
    label: 'Compliance Layer',
    tag: 'Core',
    tagStyle: 'bg-white/8 text-white/70 border-white/15',
    capabilities: ['Regulatory Frameworks', 'Control Tracking', 'Evidence Generation', 'DPDP / GDPR'],
    barColor: 'bg-white/50',
    barWidth: '95%',
    rowBg: 'bg-white/[0.04] hover:bg-white/[0.07]',
    border: 'border-white/10',
    labelColor: 'text-white',
    dot: 'bg-white/70',
    indent: 1,
  },
  {
    id: 'risk',
    label: 'Risk Layer',
    tag: 'Core',
    tagStyle: 'bg-white/8 text-white/70 border-white/15',
    capabilities: ['Risk Identification', 'Control Mapping', 'Escalation Paths', 'Real-time Scoring'],
    barColor: 'bg-white/45',
    barWidth: '88%',
    rowBg: 'bg-white/[0.04] hover:bg-white/[0.07]',
    border: 'border-white/10',
    labelColor: 'text-white',
    dot: 'bg-white/60',
    indent: 2,
  },
  {
    id: 'security',
    label: 'Security Layer',
    tag: 'Core',
    tagStyle: 'bg-white/8 text-white/70 border-white/15',
    capabilities: ['Posture Management', 'Access Controls', 'Threat Intelligence', 'Security Governance'],
    barColor: 'bg-white/40',
    barWidth: '88%',
    rowBg: 'bg-white/[0.04] hover:bg-white/[0.07]',
    border: 'border-white/10',
    labelColor: 'text-white',
    dot: 'bg-white/55',
    indent: 2,
  },
  {
    id: 'operations',
    label: 'Operations Layer',
    tag: 'Core',
    tagStyle: 'bg-white/8 text-white/70 border-white/15',
    capabilities: ['Process Execution', 'Accountability Chains', 'Performance Metrics', 'SLA Management'],
    barColor: 'bg-white/35',
    barWidth: '95%',
    rowBg: 'bg-white/[0.04] hover:bg-white/[0.07]',
    border: 'border-white/10',
    labelColor: 'text-white',
    dot: 'bg-white/50',
    indent: 1,
  },
  {
    id: 'data',
    label: 'Data Layer',
    tag: 'Foundation',
    tagStyle: 'bg-white/5 text-white/45 border-white/10',
    capabilities: ['Unified Data Fabric', 'Structured Models', 'Reporting Engine', 'Analytics Foundation'],
    barColor: 'bg-white/25',
    barWidth: '100%',
    rowBg: 'bg-white/[0.025] hover:bg-white/[0.05]',
    border: 'border-white/8',
    labelColor: 'text-white/80',
    dot: 'bg-white/35',
    indent: 0,
  },
]

export function ArchitectureDiagram() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null)

  return (
    <section id="architecture" className="bg-navy-ink py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-teal-bright">
            Enterprise Architecture
          </span>
          <span className="h-px flex-1 max-w-xs bg-white/10" />
        </div>

        <div className="grid gap-16 lg:grid-cols-[380px_1fr] items-start">

          {/* Left column — heading + meta */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-[2.2rem]">
              How the RSF Platform
              <br />
              <span className="text-teal-bright">is Structured</span>
            </h2>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-white/55">
              Enterprise organizations carry distinct layers of obligation.
              The RSF platform maps directly to each — connected by a single
              operating intelligence layer beneath them all.
            </p>
            <p className="mt-4 text-[0.92rem] leading-relaxed text-white/55">
              Hover any layer to see its capabilities.
            </p>

            {/* Active layer detail panel */}
            <div className={`mt-8 rounded-2xl border transition-all duration-300 ${
              activeLayer
                ? 'border-teal/30 bg-teal/8 opacity-100'
                : 'border-white/8 bg-white/[0.02] opacity-60'
            } p-5`}>
              {activeLayer ? (() => {
                const l = layers.find(x => x.id === activeLayer)!
                return (
                  <>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-teal-bright mb-3">
                      {l.label} — Capabilities
                    </p>
                    <ul className="space-y-2">
                      {l.capabilities.map(c => (
                        <li key={c} className="flex items-center gap-2.5 text-sm text-white/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </>
                )
              })() : (
                <p className="text-[0.78rem] text-white/35 leading-relaxed">
                  Hover a layer in the diagram to explore its capabilities.
                </p>
              )}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-col gap-2">
              {[
                { dot: 'bg-teal-bright shadow-[0_0_6px_rgba(61,213,207,0.5)]', label: 'AI Layer', sub: 'Emerging' },
                { dot: 'bg-white/70', label: 'Core Layers', sub: 'Governance → Operations' },
                { dot: 'bg-white/30', label: 'Data Foundation', sub: 'Infrastructure' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${item.dot}`} />
                  <span className="text-xs font-semibold text-white/65">{item.label}</span>
                  <span className="text-[0.65rem] text-white/35">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — stacked layer diagram */}
          <div className="relative">

            {/* Vertical connector spine */}
            <div className="absolute left-4 top-2 bottom-[108px] w-px bg-gradient-to-b from-teal/70 via-white/20 to-transparent pointer-events-none" />

            {/* Layer rows */}
            <div className="space-y-1.5">
              {layers.map((layer) => (
                <div
                  key={layer.id}
                  className="relative flex items-stretch cursor-default group"
                  style={{ paddingLeft: `${layer.indent * 12 + 28}px` }}
                  onMouseEnter={() => setActiveLayer(layer.id)}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  {/* Spine dot */}
                  <span className={`absolute left-[12px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full ring-[3px] ring-navy-ink z-10 transition-transform group-hover:scale-125 ${layer.dot}`} />

                  {/* Horizontal connector to spine */}
                  <span className="absolute left-[18px] top-1/2 -translate-y-px h-px bg-white/10"
                    style={{ width: `${layer.indent * 12 + 10}px` }} />

                  {/* Row card */}
                  <div className={`flex-1 rounded-xl border transition-all duration-200 px-5 py-3.5 ${layer.rowBg} ${layer.border} ${activeLayer === layer.id ? 'ring-1 ring-teal/30 shadow-lg shadow-teal/10 -translate-y-px' : ''}`}>
                    <div className="flex items-center justify-between gap-4">
                      <p className={`font-heading text-[0.82rem] font-bold leading-tight ${layer.labelColor}`}>
                        {layer.label}
                      </p>
                      <div className="flex items-center gap-3 shrink-0">
                        {/* Progress bar */}
                        <div className="hidden sm:block w-20 h-1 rounded-full bg-white/8">
                          <div className={`h-full rounded-full transition-all ${layer.barColor}`}
                            style={{ width: activeLayer === layer.id ? layer.barWidth : '60%' }} />
                        </div>
                        {/* Tag */}
                        <span className={`rounded-full border px-2.5 py-0.5 text-[0.55rem] font-bold uppercase tracking-[0.15em] ${layer.tagStyle}`}>
                          {layer.tag}
                        </span>
                      </div>
                    </div>
                    {/* Capability pills — shown on hover */}
                    <div className={`mt-2 flex flex-wrap gap-1.5 overflow-hidden transition-all duration-300 ${activeLayer === layer.id ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {layer.capabilities.map(c => (
                        <span key={c} className="rounded-full bg-white/8 px-2.5 py-0.5 text-[0.62rem] font-semibold text-white/60">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RSF Intelligence Layer — spanning foundation bar */}
            <div className="relative mt-3 ml-[28px]">
              {/* Convergence lines from spine to bar */}
              <svg className="absolute -top-3 left-0 w-full h-4 pointer-events-none" viewBox="0 0 400 14" preserveAspectRatio="none">
                <path d="M 4 0 L 4 14" stroke="rgba(61,213,207,0.3)" strokeWidth="1" />
                <path d="M 4 14 L 400 14" stroke="rgba(61,213,207,0.15)" strokeWidth="1" />
              </svg>

              <div className="rounded-2xl border-2 border-teal/45 bg-gradient-to-r from-teal/12 to-teal/6 px-6 py-5 shadow-xl shadow-teal/10">
                {/* Label */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-teal/20 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                      <path d="M2 4 L8 10 L14 4" stroke="#3dd5cf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-heading text-sm font-extrabold text-teal-bright">RSF Operating Intelligence Layer</p>
                    <p className="text-[0.65rem] text-white/50 mt-0.5">The connective fabric — unifying all layers into one governed operating system</p>
                  </div>
                </div>

                {/* Layer coverage indicators */}
                <div className="flex gap-1.5">
                  {layers.map((l, i) => (
                    <div
                      key={l.id}
                      className="flex-1 h-1.5 rounded-full bg-teal/40"
                      style={{ opacity: 0.4 + (i / layers.length) * 0.6 }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-teal/50">Data</span>
                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-teal/50">Spans all layers</span>
                  <span className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-teal/70">AI ↑</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
