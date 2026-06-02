import { cn } from '@/lib/utils'

interface SiteLogoProps {
  className?: string
  /** "light" for dark backgrounds, "dark" for light backgrounds */
  variant?: 'light' | 'dark'
  showWordmark?: boolean
}

export function SiteLogo({
  className,
  variant = 'dark',
  showWordmark = true,
}: SiteLogoProps) {
  const razorColor = variant === 'light' ? 'text-white' : 'text-navy'
  const focusColor = variant === 'light' ? 'text-teal-bright' : 'text-teal'
  const subColor = variant === 'light' ? 'text-white/60' : 'text-steel'

  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark variant={variant} className="h-10 w-10 shrink-0" />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-xl font-extrabold tracking-tight">
            <span className={razorColor}>RazorSharp</span>
            <span className={focusColor}>Focus</span>
          </span>
          <span
            className={cn(
              'mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.28em]',
              subColor,
            )}
          >
            Digital Operating Systems
          </span>
        </span>
      )}
    </span>
  )
}

/**
 * Focus Point Logo Mark
 * Multiple streams (Governance · Compliance · Risk · Security · Operations · Intelligence)
 * converging into a single focal point — the RSF philosophy made visual.
 */
export function LogoMark({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  const tileFill = variant === 'light' ? '#1d2c45' : '#16233a'
  const teal = '#2f9e9a'
  const white = '#ffffff'

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RazorSharpFocus"
      className={className}
    >
      {/* Tile background */}
      <rect
        x="0.75"
        y="0.75"
        width="46.5"
        height="46.5"
        rx="11"
        fill={tileFill}
        stroke={teal}
        strokeOpacity={variant === 'light' ? '0.45' : '0'}
        strokeWidth="1.5"
      />

      {/* ── Focus Point Symbol ──────────────────────────────────────────
          Six convergence rays flowing into a central focal dot.
          Top-left, top-right, left, right, bottom-left, bottom-right
          all terminate at the centre point (24, 26).
          The dot glows in teal; rays alternate teal / white for depth.
      ──────────────────────────────────────────────────────────────── */}

      {/* Top-left ray */}
      <line x1="10" y1="11" x2="22.5" y2="24.5" stroke={teal} strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.85" />
      {/* Top ray */}
      <line x1="24" y1="9"  x2="24"  y2="22.5" stroke={white} strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.70" />
      {/* Top-right ray */}
      <line x1="38" y1="11" x2="25.5" y2="24.5" stroke={teal} strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.85" />
      {/* Right ray */}
      <line x1="40" y1="26" x2="26.5" y2="26"   stroke={white} strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.55" />
      {/* Bottom-right ray */}
      <line x1="36" y1="39" x2="25.2" y2="27.5" stroke={teal} strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.75" />
      {/* Bottom-left ray */}
      <line x1="12" y1="39" x2="22.8" y2="27.5" stroke={white} strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.55" />

      {/* Focal point — glowing dot */}
      <circle cx="24" cy="26" r="3.8" fill={teal} />
      <circle cx="24" cy="26" r="2.0" fill={white} fillOpacity="0.9" />
    </svg>
  )
}
