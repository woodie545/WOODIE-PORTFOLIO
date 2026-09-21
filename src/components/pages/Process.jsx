import React, { useState } from 'react'
import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  Settings2,
  Rocket,
  RotateCcw,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

// ---------------------------------------------------------------------------
// Execution lifecycle — edit step copy here without touching the layout.
// ---------------------------------------------------------------------------
const LIFECYCLE_STEPS = [
  {
    num: '01',
    icon: Search,
    iconStyle: 'text-blue-500 bg-blue-600/30',
    title: 'Discover',
    text: 'Goals, audience, and project requirements analysis.',
  },
  {
    num: '02',
    icon: Lightbulb,
    iconStyle: 'text-green-500 bg-green-600/30',
    title: 'Strategy',
    text: 'Features, user flows, tech stack selection, and scope.',
  },
  {
    num: '03',
    icon: PenTool,
    iconStyle: 'text-orange-500 bg-orange-600/30',
    title: 'Design',
    text: 'Wireframes, UI design, branding, and interactive prototypes.',
  },
  {
    num: '04',
    icon: Code2,
    iconStyle: 'text-teal-400 bg-teal-600/30',
    title: 'Build',
    text: 'Frontend, backend, API, and AI automation implementation.',
  },
  {
    num: '05',
    icon: Settings2,
    iconStyle: 'text-amber-500 bg-amber-600/30',
    title: 'Test & Refine',
    text: 'QA testing, performance, responsiveness, and user feedback.',
  },
  {
    num: '06',
    icon: Rocket,
    iconStyle: 'text-purple-500 bg-purple-600/30',
    title: 'Launch',
    text: 'Deployment, final domain setups, and project handover.',
  },
  {
    num: '07',
    icon: RotateCcw,
    iconStyle: 'text-pink-500 bg-pink-600/30',
    title: 'Improve',
    text: 'Continuous maintenance, optimization, and feature updates.',
  },
]

const PHILOSOPHY_FLOW = ['Think', 'Design', 'Build', 'Test', 'Launch', 'Improve']

// DRAFT: review before launch — edit these answers freely, they are placeholders.
const FAQS = [
  {
    question: 'What types of projects do you accept?',
    answer:
      'We take on websites, web applications, AI automation, chatbots and WhatsApp bots, UI/UX design, animation and video, and branding projects. If your idea mixes a few of these, even better — that combination is our sweet spot.',
  },
  {
    question: 'How long does a standard project take?',
    answer:
      'A simple website or brand package usually takes 1–2 weeks, while larger builds like web apps or automation systems run 1–3 months. You get an exact timeline after the discovery step, before any work starts.',
  },
  {
    question: 'Can I hire you for design or frontend development separately?',
    answer:
      'Yes. You can hire us for design-only work like UI/UX, wireframes, or brand visuals, or for frontend-only development if you already have designs. Each is scoped and priced on its own.',
  },
  {
    question: 'How are AI and WhatsApp automation integrated into a project?',
    answer:
      'During the strategy step we map which tasks are worth automating, then build chatbots, WhatsApp commerce bots, or workflow automations directly into your project. Everything is tested with your real use cases before launch.',
  },
]

export default function Process() {
  const [openFaq, setOpenFaq] = useState(0)

  function toggleFaq(index) {
    setOpenFaq((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="px-5 sm:px-8 lg:px-10">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center py-12 sm:py-16">
        <p className="text-blue-500 text-sm font-semibold mb-3">How We Work</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
          From Idea to <span className="text-blue-500">Impact.</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          A simple, transparent process that turns your idea into something real — no guesswork, no surprises.
        </p>
      </section>

      {/* 7-step execution lifecycle */}
      <section className="max-w-3xl mx-auto pb-14" aria-label="Project execution lifecycle">
        <h2 className="text-xl font-bold mb-6">
          <span className="pr-2 text-green-600">●</span>
          The 7-Step Process
        </h2>
        <ol className="relative border-l-2 border-gray-800 ml-3 sm:ml-5 space-y-4">
          {LIFECYCLE_STEPS.map((step) => (
            <li
              key={step.num}
              className="relative ml-6 sm:ml-8 bg-gray-800/10 border border-gray-600 rounded-xl p-5 sm:p-6 hover:border-slate-500 transition-colors"
            >
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className="absolute -left-[37px] sm:-left-[45px] top-6 w-5 h-5 rounded-full bg-blue-600 border-4 border-[#0B0E13]"
              />
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 shrink-0 rounded-lg ${step.iconStyle} flex items-center justify-center`}
                >
                  <step.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-blue-500 font-bold text-sm">{step.num}</p>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">{step.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Working philosophy banner */}
      <section className="max-w-5xl mx-auto pb-14" aria-label="Working philosophy">
        <div className="bg-gray-800/10 border border-gray-600 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-6 text-center sm:text-left">
            <span className="pr-2 text-green-600">●</span>
            Working Philosophy
          </h2>
          <ol className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {PHILOSOPHY_FLOW.map((word, i) => (
              <React.Fragment key={word}>
                <li className="bg-[#0B0E13] border border-gray-800 rounded-full px-4 py-2 text-sm font-semibold">
                  {word}
                </li>
                {i < PHILOSOPHY_FLOW.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="w-4 h-4 text-blue-500 shrink-0"
                  />
                )}
              </React.Fragment>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="max-w-3xl mx-auto pb-14" aria-label="Frequently asked questions">
        <h2 className="text-xl font-bold mb-6">
          <span className="pr-2 text-green-600">●</span>
          Common Questions
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const open = openFaq === i
            return (
              <div
                key={faq.question}
                className={`bg-gray-800/10 border rounded-xl transition-colors ${
                  open ? 'border-blue-600/60' : 'border-gray-600'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-xl"
                  >
                    {faq.question}
                    <ChevronDown
                      aria-hidden="true"
                      className={`w-5 h-5 shrink-0 text-blue-500 transition-transform duration-300 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Closing call-to-action */}
      <section className="max-w-5xl mx-auto pb-16">
        <div className="flex flex-col sm:flex-row bg-linear-to-r from-blue-400 via-blue-500 to-blue-800 rounded-xl p-8 gap-8 sm:gap-10 items-center justify-between">
          <div className="space-y-3">
            <h2 className="font-bold text-2xl sm:text-3xl">Ready to start?</h2>
            <p className="text-md w-full max-w-xl">
              Tell us about your project and let&apos;s turn your idea into something real.
            </p>
          </div>
          <div className="flex items-center gap-8 sm:gap-15">
            <NavLink
              to="/start-project"
              className="bg-white hover:bg-gray-50 text-blue-800 font-semibold rounded-sm w-40 sm:w-50 py-2 px-5 text-center"
            >
              Start a Project
            </NavLink>
            <img src="/arrow.png" alt="" className="hidden sm:block w-28 lg:w-40 invert" />
          </div>
        </div>
      </section>
    </div>
  )
}
