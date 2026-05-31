import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  variant?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  variant = 'dark',
  className,
}: SectionHeadingProps) {
  const isDark = variant === 'dark'
  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'text-xs font-bold uppercase tracking-[0.2em]',
            isDark ? 'text-teal' : 'text-teal-bright',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight md:text-4xl',
          isDark ? 'text-navy' : 'text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty text-lg leading-relaxed',
            isDark ? 'text-steel' : 'text-white/70',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
