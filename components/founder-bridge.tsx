const industries = [
  { label: 'Financial Services', icon: '◈' },
  { label: 'Mobility',           icon: '⬡' },
  { label: 'Logistics',          icon: '◎' },
  { label: 'Healthcare',         icon: '◇' },
  { label: 'Technology',         icon: '⬟' },
]

const silos = [
  { label: 'People',     color: 'border-navy/25 bg-navy/5 text-navy' },
  { label: 'Process',    color: 'border-navy/25 bg-navy/5 text-navy' },
  { label: 'Governance', color: 'border-teal/35 bg-teal/8 text-teal' },
  { label: 'Compliance', color: 'border-teal/35 bg-teal/8 text-teal' },
  { label: 'Risk',       color: 'border-steel/25 bg-steel/6 text-steel' },
]

export function FounderBridge() {
  return (
    <section className="bg-soft py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-teal">
            The Pattern We Observed
          </span>
          <span className="h-px flex-1 max-w-xs bg-border" />
        </div>

        <div className="grid gap-14 lg:grid-cols-[1fr_480px] items-center">

          {/* Left — narrative */}
          <div>
            {/* Stat headline */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-heading text-7xl font-extrabold text-navy leading-none tracking-tight">25<span className="text-teal">+</span></span>
              <div>
                <p className="font-heading text-lg font-bold text-navy">Years inside enterprise organizations</p>
                <p className="text-sm text-steel mt-0.5">across five industries</p>
              </div>
            </div>

            {/* Industry tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {industries.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-navy shadow-sm"
                >
                  <span className="text-teal text-xs">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>

            {/* The observation */}
            <div className="space-y-4">
              <p className="text-[1.05rem] leading-relaxed text-steel">
                Every organization we worked inside — regardless of industry, size, or technology stack — shared
                the same structural vulnerability.
              </p>

              {/* Pull-quote */}
              <blockquote className="relative rounded-2xl border-l-4 border-teal bg-white px-7 py-6 shadow-sm overflow-hidden">
                <span className="pointer-events-none absolute -top-2 -left-1 font-heading text-8xl font-black text-teal/8 leading-none select-none">"</span>
                <p className="relative font-heading text-lg font-bold text-navy leading-snug">
                  Organizations struggle when People, Process, Governance, Compliance, and Risk
                  operate independently — with no connective intelligence layer between them.
                </p>
                <p className="relative mt-3 text-sm text-steel leading-relaxed">
                  This is not a technology problem. Every organization had plenty of technology.
                  It is an <span className="font-semibold text-navy">operating model problem</span> — and it is exactly what
                  RazorSharpFocus was built to solve.
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right — visual diagram */}
          <div className="relative">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-0 rounded-3xl"
              style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(47,184,178,0.08) 0%, transparent 65%)' }} />

            <div className="relative z-10 rounded-3xl border border-border bg-card p-8 shadow-xl">

              {/* ── Before: Siloed ── */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-steel/40" />
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-steel/60">Before — Siloed Organization</p>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {silos.map((item) => (
                    <div
                      key={item.label}
                      className={`flex flex-col items-center justify-center rounded-xl border py-3 px-1 text-center ${item.color}`}
                    >
                      <span className="text-[0.6rem] font-bold leading-tight">{item.label}</span>
                    </div>
                  ))}
                </div>
                {/* Broken connectors */}
                <div className="mt-3 flex items-center justify-center gap-1 px-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i}
                      className="h-px flex-1 rounded-full"
                      style={{ background: i % 3 === 1 ? 'transparent' : 'rgba(0,0,0,0.08)' }}
                    />
                  ))}
                </div>
                <p className="mt-1.5 text-center text-[0.58rem] font-semibold uppercase tracking-widest text-steel/35">
                  No connective layer · Gaps everywhere
                </p>
              </div>

              {/* Divider arrow */}
              <div className="my-5 flex flex-col items-center gap-1">
                <div className="h-6 w-px bg-gradient-to-b from-border to-teal/50" />
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-teal/30 bg-teal/8">
                  <svg viewBox="0 0 12 12" fill="none" className="h-3.5 w-3.5">
                    <path d="M6 1v10M2 7l4 4 4-4" stroke="#2fb8b2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-teal/60 mt-1">RSF Operating Intelligence</p>
              </div>

              {/* ── After: Connected ── */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_6px_rgba(47,184,178,0.5)]" />
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-teal/70">After — Connected Organization</p>
                </div>
                <div className="rounded-2xl border-2 border-teal/35 bg-teal/5 p-4">
                  <div className="grid grid-cols-5 gap-2 mb-3">
                    {silos.map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col items-center justify-center rounded-lg border border-teal/25 bg-white py-3 px-1 text-center shadow-sm"
                      >
                        <span className="text-[0.6rem] font-bold text-navy leading-tight">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  {/* Connected bar */}
                  <div className="h-1 rounded-full bg-gradient-to-r from-teal/30 via-teal/70 to-teal/30" />
                  <p className="mt-1.5 text-center text-[0.58rem] font-bold uppercase tracking-[0.18em] text-teal/60">
                    Connected · Accountable · Governed
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
