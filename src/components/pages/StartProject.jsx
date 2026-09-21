import React, { useState } from 'react'
import { ArrowRight, Check, Send } from 'lucide-react'
import { NavLink } from 'react-router-dom'

// ---------------------------------------------------------------------------
// EMAIL SETUP (Web3Forms — no backend needed).
// 1. Sign up at https://web3forms.com with woodieconcepts545@gmail.com.
// 2. Copy your Access Key from the dashboard.
// 3. Paste it below in place of PASTE_YOUR_WEB3FORMS_KEY_HERE.
// Submissions are emailed to whatever address owns that key.
// ---------------------------------------------------------------------------
const WEB3FORMS_ACCESS_KEY = '92bef5d6-f67c-4c2b-838f-2c7236765de1'

// ---------------------------------------------------------------------------
// Project intake options — edit labels here without touching the form logic.
// ---------------------------------------------------------------------------
const PROJECT_TYPES = [
  { id: 'website', emoji: '🌐', label: 'Website' },
  { id: 'ai-automation', emoji: '🤖', label: 'AI Automation' },
  { id: 'chatbot', emoji: '💬', label: 'Chatbot' },
  { id: 'ui-ux', emoji: '🎨', label: 'UI/UX Design' },
  { id: 'animation', emoji: '🎬', label: 'Animation' },
  { id: 'branding', emoji: '🏷️', label: 'Branding' },
  { id: 'web-app', emoji: '📱', label: 'Web Application' },
  { id: 'something-else', emoji: '💡', label: 'Something Else' },
]

const BUDGET_TIERS = [
  'Under $100',
  '$100 – $300',
  '$300 – $750',
  '$750 – $1.5k',
  '$1.5k+',
  'Not sure yet / Flexible',
]

const TIMELINES = ['ASAP', '1–2 Weeks', '1 Month', '1–3 Months', 'Flexible']

const DISCOVERY_SOURCES = ['Socials', 'Search', 'Referral']

const CONTACT_METHODS = ['WhatsApp', 'Email', 'Phone']

const ONBOARDING_STEPS = [
  { num: '01', title: 'Submit Idea', text: 'Tell us about your project with the form below.' },
  { num: '02', title: 'Project Review', text: 'We review your goals, scope and budget.' },
  { num: '03', title: 'Discovery Consultation', text: 'We meet to plan timeline, deliverables and next steps.' },
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectTypes: [],
  description: '',
  goals: '',
  features: '',
  budget: '',
  timeline: '',
  source: '',
  contactMethod: 'WhatsApp',
}

export default function StartProject() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submittedInfo, setSubmittedInfo] = useState({ name: '', contactMethod: 'WhatsApp' })
  const [honeypot, setHoneypot] = useState('')

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    // Clear the inline error for this field as soon as the user fixes it.
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
    if (submitError) setSubmitError('')
  }

  function toggleProjectType(id) {
    const hasType = form.projectTypes.includes(id)
    const nextTypes = hasType
      ? form.projectTypes.filter((t) => t !== id)
      : [...form.projectTypes, id]
    updateField('projectTypes', nextTypes)
  }

  function validate() {
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (form.projectTypes.length === 0) nextErrors.projectTypes = 'Select at least one project type.'
    if (!form.description.trim()) nextErrors.description = 'Please describe your project.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  // -------------------------------------------------------------------------
  // SUBMIT LOGIC — sends the intake form via Web3Forms (no backend).
  // The email goes to the address that owns WEB3FORMS_ACCESS_KEY above.
  // Reply-To is set to the client's email so you can reply directly.
  // To switch provider later, replace only the fetch block below.
  // -------------------------------------------------------------------------
  async function handleProjectSubmit(e) {
    e.preventDefault()
    if (submitting) return
    if (!validate()) return

    // Honeypot: bots fill hidden fields, humans never do. Fake success.
    if (honeypot) {
      setSubmittedInfo({ name: form.name, contactMethod: form.contactMethod })
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setSubmitting(true)
    setSubmitError('')

    // One labeled line per field so the email is easy to scan.
    const projectTypeLabels = form.projectTypes
      .map((id) => PROJECT_TYPES.find((t) => t.id === id)?.label || id)
      .join(', ')
    const emailBody = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `WhatsApp / Phone: ${form.phone.trim() || '-'}`,
      `Company / Brand: ${form.company.trim() || '-'}`,
      `Project Types: ${projectTypeLabels || '-'}`,
      `Description: ${form.description.trim()}`,
      `Goals: ${form.goals.trim() || '-'}`,
      `Specific Features: ${form.features.trim() || '-'}`,
      `Budget: ${form.budget || '-'}`,
      `Timeline: ${form.timeline || '-'}`,
      `Found us via: ${form.source || '-'}`,
      `Preferred contact: ${form.contactMethod}`,
    ].join('\n')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Project Inquiry from ${form.name.trim()}`,
          from_name: form.name.trim(),
          replyto: form.email.trim(),
          message: emailBody,
          // Individual fields included too (also appear in the email + dashboard).
          Name: form.name.trim(),
          Email: form.email.trim(),
          'WhatsApp / Phone': form.phone.trim() || '-',
          'Company / Brand': form.company.trim() || '-',
          'Project Types': projectTypeLabels || '-',
          Description: form.description.trim(),
          Goals: form.goals.trim() || '-',
          'Specific Features': form.features.trim() || '-',
          Budget: form.budget || '-',
          Timeline: form.timeline || '-',
          'Found us via': form.source || '-',
          'Preferred contact': form.contactMethod,
          botcheck: false,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message || 'Email service rejected the submission.')

      // Success: snapshot the greeting, then reset the form.
      setSubmittedInfo({ name: form.name.trim(), contactMethod: form.contactMethod })
      setForm(initialForm)
      setErrors({})
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      // Failure: keep everything the user typed so nothing is lost.
      setSubmitError(
        'Something went wrong sending your idea. Please check your connection and try again — your answers are still here.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  function handleReset() {
    setForm(initialForm)
    setErrors({})
    setSubmitError('')
    setSubmitted(false)
  }

  const inputClass =
    'w-full bg-gray-900/50 border border-gray-700 rounded-lg p-3 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 disabled:opacity-60'
  const labelClass = 'text-sm text-gray-400 block mb-1'

  return (
    <div className="px-5 sm:px-8 lg:px-10">
      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center py-12 sm:py-16">
        <p className="text-blue-500 text-sm font-semibold mb-3">Start a Project</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
          Let&apos;s Build Something <span className="text-blue-500">Great.</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          Tell us about your idea and we&apos;ll get back to you with next steps.
          It takes less than two minutes.
        </p>
      </section>

      {/* Onboarding lifecycle */}
      <section className="max-w-5xl mx-auto pb-10" aria-label="How onboarding works">
        <div className="bg-gray-800/10 border border-gray-600 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-6 text-center sm:text-left">
            <span className="pr-2 text-green-600">●</span>
            How it works
          </h2>
          <ol className="flex flex-col sm:flex-row items-stretch gap-4">
            {ONBOARDING_STEPS.map((step, i) => (
              <React.Fragment key={step.num}>
                <li className="flex-1 text-center bg-[#0B0E13] border border-gray-800 rounded-xl p-5">
                  <p className="text-blue-500 font-bold text-sm mb-1">{step.num}</p>
                  <p className="font-semibold mb-1">{step.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.text}</p>
                </li>
                {i < ONBOARDING_STEPS.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="hidden sm:block w-4 h-4 text-slate-600 self-center shrink-0"
                  />
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </section>

      {/* Form / success */}
      <section className="max-w-3xl mx-auto pb-16">
        {submitted ? (
          <div
            role="status"
            className="bg-gray-800/10 border border-green-600/50 rounded-2xl p-8 text-center space-y-4"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-green-600/20 flex items-center justify-center">
              <Check className="w-6 h-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold">Thanks, {submittedInfo.name.split(' ')[0] || 'there'}!</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
              Your project idea has been received. We&apos;ll review it and reach out
              via {submittedInfo.contactMethod.toLowerCase()} shortly for your discovery consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="border border-gray-600 hover:border-gray-400 hover:bg-gray-900 px-5 py-2 rounded-lg text-sm transition-colors"
              >
                Submit another idea
              </button>
              <NavLink
                to="/work"
                className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                View Our Work
              </NavLink>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleProjectSubmit}
            noValidate
            className="bg-gray-800/10 border border-gray-600 rounded-2xl p-6 sm:p-8 space-y-8"
          >
            {/* Honeypot anti-spam field — invisible to humans, bots fill it in. */}
            <input
              type="text"
              name="company_website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute opacity-0 h-0 w-0 pointer-events-none"
              placeholder="Leave blank"
            />
            {/* Project type — multi-select cards */}
            <fieldset>
              <legend className="font-semibold mb-1">
                Project type <span className="text-red-400" aria-hidden="true">*</span>
              </legend>
              <p className="text-gray-400 text-sm mb-4">Select all that apply.</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="group" aria-label="Project type">
                {PROJECT_TYPES.map((type) => {
                  const active = form.projectTypes.includes(type.id)
                  return (
                    <button
                      key={type.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleProjectType(type.id)}
                      className={`rounded-lg border p-4 text-center space-y-1 transition-all duration-300 hover:scale-102 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        active
                          ? 'border-blue-500 bg-blue-600/15 text-white'
                          : 'border-gray-700 bg-[#0B0E13] text-gray-300 hover:border-gray-500'
                      }`}
                    >
                      <span className="text-2xl block" aria-hidden="true">
                        {type.emoji}
                      </span>
                      <span className="text-sm font-medium block">{type.label}</span>
                      {active && (
                        <span className="text-blue-400 text-xs font-semibold flex items-center justify-center gap-1">
                          <Check className="w-3 h-3" /> Selected
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
              {errors.projectTypes && (
                <p role="alert" className="text-sm text-red-400 mt-2">
                  {errors.projectTypes}
                </p>
              )}
            </fieldset>

            {/* Contact details */}
            <div>
              <h2 className="font-semibold mb-4">
                <span className="pr-2 text-green-600">●</span>
                Your details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="intake-name">
                    Name <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="intake-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'intake-name-error' : undefined}
                    className={inputClass}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p role="alert" id="intake-name-error" className="text-sm text-red-400 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="intake-email">
                    Email <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="intake-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'intake-email-error' : undefined}
                    className={inputClass}
                    placeholder="jane@example.com"
                  />
                  {errors.email && (
                    <p role="alert" id="intake-email-error" className="text-sm text-red-400 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="intake-phone">
                    WhatsApp / Phone
                  </label>
                  <input
                    id="intake-phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={inputClass}
                    placeholder="+234 ..."
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="intake-company">
                    Company / Brand Name
                  </label>
                  <input
                    id="intake-company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    className={inputClass}
                    placeholder="Acme Co."
                  />
                </div>
              </div>
            </div>

            {/* Project details */}
            <div className="space-y-4">
              <h2 className="font-semibold">
                <span className="pr-2 text-green-600">●</span>
                About your project
              </h2>
              <div>
                <label className={labelClass} htmlFor="intake-description">
                  Project Description <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="intake-description"
                  rows={4}
                  value={form.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? 'intake-description-error' : undefined}
                  className={`${inputClass} resize-none`}
                  placeholder="What do you want to build? Who is it for?"
                />
                {errors.description && (
                  <p role="alert" id="intake-description-error" className="text-sm text-red-400 mt-1">
                    {errors.description}
                  </p>
                )}
              </div>
              <div>
                <label className={labelClass} htmlFor="intake-goals">
                  Goals
                </label>
                <textarea
                  id="intake-goals"
                  rows={3}
                  value={form.goals}
                  onChange={(e) => updateField('goals', e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder="What should this project achieve? (e.g. more sales, automate tasks)"
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="intake-features">
                  Specific Features
                </label>
                <textarea
                  id="intake-features"
                  rows={3}
                  value={form.features}
                  onChange={(e) => updateField('features', e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder="Any must-have pages, integrations or features?"
                />
              </div>
            </div>

            {/* Budget — single-select tiers */}
            <fieldset>
              <legend className="font-semibold mb-1">Budget Range</legend>
              <p className="text-gray-400 text-sm mb-4">Pick the closest fit — flexible is fine.</p>
              <div className="flex flex-wrap gap-2">
                {BUDGET_TIERS.map((tier) => {
                  const active = form.budget === tier
                  return (
                    <button
                      key={tier}
                      type="button"
                      aria-pressed={active}
                      onClick={() => updateField('budget', active ? '' : tier)}
                      className={`border py-1.5 px-4 rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        active
                          ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-500'
                          : 'border-gray-700 text-gray-300 hover:bg-gray-900 hover:border-gray-500'
                      }`}
                    >
                      {tier}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            {/* Timeline — single-select pills */}
            <fieldset>
              <legend className="font-semibold mb-1">Timeline</legend>
              <p className="text-gray-400 text-sm mb-4">When do you want to start?</p>
              <div className="flex flex-wrap gap-2">
                {TIMELINES.map((t) => {
                  const active = form.timeline === t
                  return (
                    <button
                      key={t}
                      type="button"
                      aria-pressed={active}
                      onClick={() => updateField('timeline', t)}
                      className={`border py-1.5 px-4 rounded-full text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        active
                          ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-500'
                          : 'border-gray-700 text-gray-300 hover:bg-gray-900 hover:border-gray-500'
                      }`}
                    >
                      {t}
                    </button>
                  )
                })}
              </div>
            </fieldset>

            {/* Source + contact method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <fieldset>
                <legend className="font-semibold mb-3">How did you find us?</legend>
                <div className="flex flex-wrap gap-2">
                  {DISCOVERY_SOURCES.map((s) => {
                    const active = form.source === s
                    return (
                      <button
                        key={s}
                        type="button"
                        aria-pressed={active}
                        onClick={() => updateField('source', active ? '' : s)}
                        className={`border py-1.5 px-4 rounded-full text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                          active
                            ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-500'
                            : 'border-gray-700 text-gray-300 hover:bg-gray-900 hover:border-gray-500'
                        }`}
                      >
                        {s}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
              <fieldset>
                <legend className="font-semibold mb-3">Preferred contact method</legend>
                <div className="flex flex-wrap gap-2">
                  {CONTACT_METHODS.map((m) => {
                    const active = form.contactMethod === m
                    return (
                      <button
                        key={m}
                        type="button"
                        aria-pressed={active}
                        onClick={() => updateField('contactMethod', m)}
                        className={`border py-1.5 px-4 rounded-full text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                          active
                            ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-500'
                            : 'border-gray-700 text-gray-300 hover:bg-gray-900 hover:border-gray-500'
                        }`}
                      >
                        {m}
                      </button>
                    )
                  })}
                </div>
              </fieldset>
            </div>

            {submitError && (
              <p role="alert" className="text-sm text-red-400 bg-red-500/10 border border-red-500/40 rounded-lg p-3">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg py-3 text-sm font-semibold transition-colors"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              {submitting ? 'Sending…' : 'Submit Project Idea'}
            </button>
            <p className="text-gray-500 text-xs text-center">
              No spam, ever. Your details are only used to discuss your project.
            </p>
          </form>
        )}
      </section>
    </div>
  )
}
