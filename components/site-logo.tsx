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
            Operating Intelligence
          </span>
        </span>
      )}
    </span>
  )
}

/**
 * LogoMark — Convergence Point concept
 * Many streams → One Focus
 * Six lines (representing Governance, Operations, Compliance, Risk, Security, Intelligence)
 * converging into a single sharp focal point.
 */
export function LogoMark({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  const tileFill = variant === 'light' ? '#1a2e47' : '#111827'
  const tealColor = '#2f9e9a'
  const tealBright = '#3bbfba'
  const white = '#ffffff'
  const whiteAlpha = variant === 'light' ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.85)'

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
        stroke={tealColor}
        strokeOpacity={variant === 'light' ? '0.45' : '0.2'}
        strokeWidth="1.5"
      />

      {/*
        Convergence Point concept:
        Multiple streams — teal (governance/compliance lines) and white (ops/intelligence lines)
        — converging from the left/top/bottom into a single sharp focal point on the right.
      */}

      {/* Upper teal stream — converging from top-left */}
      <line x1="8" y1="10" x2="36" y2="24" stroke={tealColor} strokeWidth="2.2" strokeLinecap="round" />
      {/* Middle teal stream — converging from left-center */}
      <line x1="7" y1="20" x2="36" y2="24" stroke={tealBright} strokeWidth="2.6" strokeLinecap="round" />
      {/* Lower teal stream — converging from bottom-left */}
      <line x1="8" y1="38" x2="36" y2="24" stroke={tealColor} strokeWidth="2.2" strokeLinecap="round" />

      {/* Upper white stream — converging from upper area */}
      <line x1="14" y1="8" x2="36" y2="24" stroke={whiteAlpha} strokeWidth="1.6" strokeLinecap="round" />
      {/* Lower white stream — converging from lower area */}
      <line x1="14" y1="40" x2="36" y2="24" stroke={whiteAlpha} strokeWidth="1.6" strokeLinecap="round" />

      {/* Focal point — the sharp convergence */}
      <circle cx="36" cy="24" r="3.2" fill={tealBright} />
      {/* Inner highlight dot */}
      <circle cx="36" cy="24" r="1.4" fill={white} />

      {/* Subtle radial glow behind focal point */}
      <circle cx="36" cy="24" r="5.5" fill={tealColor} fillOpacity="0.12" />
    </svg>
  )
}
