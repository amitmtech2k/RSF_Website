import { cn } from '@/lib/utils'

interface SiteLogoProps {
  className?: string
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
  const subColor   = variant === 'light' ? 'text-white/50' : 'text-steel'

  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark variant={variant} className="h-10 w-10 shrink-0" />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-[1.18rem] font-extrabold tracking-[-0.02em]">
            <span className={razorColor}>RazorSharp</span>
            <span className={focusColor}>Focus</span>
          </span>
          <span className={cn('mt-1 text-[0.56rem] font-bold uppercase tracking-[0.3em]', subColor)}>
            Operating Intelligence
          </span>
        </span>
      )}
    </span>
  )
}

/**
 * LogoMark v4 — Precision Convergence
 *
 * Concept: Six discipline-streams (Governance, Operations, Compliance,
 * Risk, Security, Intelligence) drawn as clean parallel rays fanning
 * from the left edge, converging to a razor-sharp focal point on the right.
 *
 * Key improvements over v3:
 * - Rays are evenly fanned from a true vanishing arc — more geometric precision
 * - Stroke weights taper: thicker in centre, thinner at extremes — creates "lens" feel
 * - Focal point is now a diamond (◆) not a circle — sharper, more iconic
 * - Subtle grid of tiny dots in background — adds depth without noise
 * - Teal gradient: rays shift from muted to bright as they converge
 */
export function LogoMark({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  // Palette
  const bg      = variant === 'light' ? '#0f1f33' : '#0d1824'
  const border  = variant === 'light' ? 'rgba(47,185,178,0.55)' : 'rgba(47,185,178,0.35)'
  const tealDim = '#1e8c88'
  const teal    = '#2fb8b2'
  const tealHi  = '#3dd5cf'
  const white   = '#ffffff'

  // Six rays fanning from origin point O (left-centre) to focal point F (right-centre)
  // O is off-canvas-left; rays spread to 6 evenly-spaced start points on the left wall
  // F is the sharp convergence dot at (38, 24)
  const Fx = 38, Fy = 24  // focal point
  const Ox = 2             // origin x (left wall)
  // Six y-positions along left wall, evenly spread
  const ys = [7, 11.5, 16, 24, 32, 36.5, 41]   // 7 points for 6 intervals → 6 rays

  // Ray config: [startY, strokeWidth, stroke color, opacity]
  const rays: [number, number, string, number][] = [
    [ys[0], 1.2, tealDim,  0.55],
    [ys[1], 1.5, teal,     0.70],
    [ys[2], 1.8, teal,     0.85],
    [ys[3], 2.4, tealHi,   1.00],  // centre ray — brightest, thickest
    [ys[4], 1.8, teal,     0.85],
    [ys[5], 1.5, teal,     0.70],
    [ys[6], 1.2, tealDim,  0.55],
  ]

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RazorSharpFocus logo"
      className={className}
    >
      <defs>
        {/* Focal glow gradient */}
        <radialGradient id="focalGlow" cx="79%" cy="50%" r="22%">
          <stop offset="0%"   stopColor={tealHi} stopOpacity="0.35" />
          <stop offset="100%" stopColor={tealHi} stopOpacity="0" />
        </radialGradient>
        {/* Ray fade: muted near origin, bright near focal */}
        <linearGradient id="rayFade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor={tealDim} stopOpacity="0.4" />
          <stop offset="100%" stopColor={tealHi}  stopOpacity="1" />
        </linearGradient>
        <clipPath id="logoClip">
          <rect x="0" y="0" width="48" height="48" rx="11" />
        </clipPath>
      </defs>

      {/* Background tile */}
      <rect x="0" y="0" width="48" height="48" rx="11" fill={bg} />

      {/* Subtle border */}
      <rect
        x="0.75" y="0.75" width="46.5" height="46.5" rx="10.5"
        fill="none" stroke={border} strokeWidth="1.5"
      />

      {/* Content clip */}
      <g clipPath="url(#logoClip)">

        {/* Background dot grid — very subtle depth */}
        {[8,16,24,32,40].map(gx =>
          [8,16,24,32,40].map(gy => (
            <circle
              key={`${gx}-${gy}`}
              cx={gx} cy={gy} r="0.5"
              fill={white} fillOpacity="0.04"
            />
          ))
        )}

        {/* Focal area glow */}
        <rect x="0" y="0" width="48" height="48" fill="url(#focalGlow)" />

        {/* The six convergence rays */}
        {rays.map(([sy, sw, sc, op], i) => (
          <line
            key={i}
            x1={Ox} y1={sy}
            x2={Fx} y2={Fy}
            stroke={sc}
            strokeWidth={sw}
            strokeLinecap="round"
            opacity={op}
          />
        ))}

        {/* Focal point: layered rings + diamond */}
        {/* Outer soft glow ring */}
        <circle cx={Fx} cy={Fy} r="5.5" fill={teal} fillOpacity="0.12" />
        {/* Mid ring */}
        <circle cx={Fx} cy={Fy} r="3.5" fill={teal} fillOpacity="0.22" />
        {/* Solid teal circle */}
        <circle cx={Fx} cy={Fy} r="2.4" fill={tealHi} />
        {/* Diamond overlay — the "razor" sharpness */}
        <path
          d={`M${Fx} ${Fy - 2.6} L${Fx + 2.0} ${Fy} L${Fx} ${Fy + 2.6} L${Fx - 2.0} ${Fy} Z`}
          fill={tealHi}
        />
        {/* Bright white centre point */}
        <circle cx={Fx} cy={Fy} r="1.1" fill={white} fillOpacity="0.95" />

        {/* Small "F" letterform hint — right side mark */}
        <rect x="41" y="18" width="4" height="1.2" rx="0.6" fill={white} fillOpacity="0.18" />
        <rect x="41" y="21" width="2.8" height="1.0" rx="0.5" fill={white} fillOpacity="0.12" />
        <rect x="41" y="24" width="4" height="1.2" rx="0.6" fill={white} fillOpacity="0.18" />

      </g>
    </svg>
  )
}
