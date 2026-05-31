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

export function LogoMark({
  className,
  variant = 'dark',
}: {
  className?: string
  variant?: 'light' | 'dark'
}) {
  // On dark backgrounds, render the mark on a translucent/teal-edged tile so it
  // stays crisp; on light backgrounds use the solid navy tile.
  const tileFill = variant === 'light' ? '#1d2c45' : '#16233a'

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="RazorSharpFocus"
      className={className}
    >
      <rect
        x="0.75"
        y="0.75"
        width="46.5"
        height="46.5"
        rx="11"
        fill={tileFill}
        stroke="#2f9e9a"
        strokeOpacity={variant === 'light' ? '0.55' : '0'}
        strokeWidth="1.5"
      />
      {/* Sharp "focus" chevron — a razor edge converging to a focal point */}
      <path
        d="M14 13L27 24L14 35"
        stroke="#2f9e9a"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 13L37 24L24 35"
        stroke="#ffffff"
        strokeOpacity="0.92"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* focal point */}
      <circle cx="37" cy="24" r="2.6" fill="#2f9e9a" />
    </svg>
  )
}
