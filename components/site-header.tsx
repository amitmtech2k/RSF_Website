'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SiteLogo } from '@/components/site-logo'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Framework', href: '#framework' },
  { label: 'Platform', href: '#platform' },
  { label: 'Products', href: '#products' },
  { label: 'Who We Serve', href: '#who-we-serve' },
  { label: 'Insights', href: '#insights' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-background/0',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#top" aria-label="RazorSharpFocus home">
          <SiteLogo variant={scrolled ? 'dark' : 'light'} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-semibold transition-colors',
                scrolled
                  ? 'text-steel hover:text-navy'
                  : 'text-white/75 hover:text-white',
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className={cn(
              'inline-flex items-center rounded-md px-5 py-2.5 text-sm font-semibold shadow-sm transition-colors',
              scrolled
                ? 'bg-navy text-primary-foreground hover:bg-navy-deep'
                : 'bg-teal text-accent-foreground hover:bg-teal-bright',
            )}
          >
            Schedule a Discussion
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'inline-flex items-center justify-center rounded-md p-2 lg:hidden',
            scrolled || open ? 'text-navy' : 'text-white',
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-semibold text-steel transition-colors hover:bg-soft hover:text-navy"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Schedule a Discussion
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
