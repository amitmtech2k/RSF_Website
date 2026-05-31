'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const interests = [
  'Mobility OS',
  'Governance OS',
  'Compliance OS',
  'Operations OS',
  'Financial Operations OS',
  'Workforce OS',
  'Risk OS',
  'Digital Trust & Security',
  'General Inquiry',
]

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-soft py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:pt-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
              Let&apos;s Talk
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Let&apos;s Build Stronger Organizations Together
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-steel">
              Whether you are looking to improve operational efficiency,
              strengthen governance, simplify compliance, manage risk, improve
              security, or accelerate digital transformation — RazorSharpFocus
              can help.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Govern Better',
                'Operate Smarter',
                'Stay Compliant',
                'Manage Risk',
                'Strengthen Security',
                'Scale with Confidence',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-navy">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-md lg:p-9">
            {submitted ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-teal" />
                <h3 className="mt-4 font-heading text-xl font-bold text-navy">
                  Thank you for reaching out
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-steel">
                  Our enterprise team will review your message and respond within
                  one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First Name" id="firstName" placeholder="Jane" />
                  <Field label="Last Name" id="lastName" placeholder="Doe" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Work Email"
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                  />
                  <Field
                    label="Company"
                    id="company"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-1.5 block text-sm font-semibold text-navy"
                  >
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    required
                    defaultValue=""
                    className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                  >
                    <option value="" disabled>
                      Select an operating system…
                    </option>
                    {interests.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-navy"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your priorities or challenges…"
                    className="w-full resize-y rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-navy outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-deep"
                >
                  Schedule a Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = 'text',
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-navy outline-none transition placeholder:text-steel/50 focus:border-teal focus:ring-2 focus:ring-teal/20"
      />
    </div>
  )
}
