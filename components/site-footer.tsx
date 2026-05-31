import { Check } from 'lucide-react'
import { SiteLogo } from '@/components/site-logo'

const helps = [
  'Govern Better',
  'Operate Smarter',
  'Stay Compliant',
  'Manage Risk',
  'Strengthen Security',
  'Scale with Confidence',
]

const linkGroups = [
  {
    title: 'Platform',
    links: ['The RSF Platform', 'Product Ecosystem', 'Digital Trust', 'Industries'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Why Trust Us', 'Vision', 'Contact'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <SiteLogo variant="light" />
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-white/60">
              Building Digital Operating Systems for Modern Organizations. Built
              on experience. Designed for trust. Engineered for scale.
            </p>
            <ul className="mt-6 grid max-w-sm grid-cols-2 gap-2">
              {helps.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-white/80">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="text-sm text-white/60 transition-colors hover:text-teal-bright"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} RazorSharpFocus. All rights reserved.</p>
          <p className="font-semibold text-white/70">
            Built on Experience · Designed for Trust · Engineered for Scale
          </p>
        </div>
      </div>
    </footer>
  )
}
