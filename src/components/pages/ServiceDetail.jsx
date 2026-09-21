import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Check, ArrowRight, ArrowLeft } from 'lucide-react'
import { getServiceBySlug } from '../../data/services'

const CURRENCIES = [
  { id: 'ng', label: 'Nigeria ₦' },
  { id: 'intl', label: 'International $' },
]

export default function ServiceDetail() {
  const { slug } = useParams()
  const [currency, setCurrency] = useState('ng')
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <div className="px-5 sm:px-8 lg:px-10">
        <section className="max-w-3xl mx-auto text-center py-16 sm:py-20">
          <p className="text-blue-500 text-sm font-semibold mb-3">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Service not found.
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
            The service you&apos;re looking for doesn&apos;t exist or was moved.
          </p>
          <NavLink
            to="/service"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Services
          </NavLink>
        </section>
      </div>
    )
  }

  const Icon = service.icon

  function priceFor(tier) {
    const raw = currency === 'ng' ? tier.ng : tier.intl
    return raw === 'Custom' ? 'Custom quote' : raw
  }

  return (
    <div className="px-5 sm:px-8 lg:px-10">
      {/* Header */}
      <section className="max-w-3xl mx-auto py-10 sm:py-14">
        <NavLink
          to="/service"
          className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium hover:text-blue-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </NavLink>
        <div className={`w-12 h-12 rounded-lg ${service.iconBg} flex items-center justify-center mb-5`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <p className="text-blue-500 text-sm font-semibold mb-2">Services / {service.title}</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">{service.title}</h1>
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{service.description}</p>
      </section>

      {/* What's included */}
      <section className="max-w-3xl mx-auto pb-12" aria-label="What's included">
        <div className="bg-gray-800/10 border border-gray-600 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold mb-5">
            <span className="pr-2 text-green-600">●</span>
            What&apos;s included
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.includes.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                <Check className="w-4 h-4 text-green-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-3xl mx-auto pb-12" aria-label="Pricing">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
          <h2 className="text-xl font-bold">
            <span className="pr-2 text-green-600">●</span>
            Pricing
          </h2>
          {/* Currency toggle */}
          <div
            role="group"
            aria-label="Currency"
            className="inline-flex w-fit border border-gray-700 rounded-full p-1 gap-1"
          >
            {CURRENCIES.map((c) => {
              const active = currency === c.id
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCurrency(c.id)}
                  className={`py-1.5 px-4 rounded-full text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    active
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'text-gray-300 hover:bg-gray-900'
                  }`}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </div>

        {service.pricing.length === 0 ? (
          <div className="bg-gray-800/10 border border-gray-600 rounded-xl p-6 text-center">
            <p className="font-semibold text-lg mb-1">Custom quote</p>
            <p className="text-gray-400 text-sm">Pricing is based on scope — tell us about your project.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.pricing.map((tier) => (
              <div
                key={tier.name}
                className="bg-gray-800/10 border border-gray-600 rounded-xl p-6 flex flex-col hover:border-slate-500 transition-colors"
              >
                <h3 className="font-semibold mb-2">{tier.name}</h3>
                <p className="text-blue-500 font-bold text-xl mt-auto">{priceFor(tier)}</p>
              </div>
            ))}
          </div>
        )}

        <p className="text-gray-500 text-xs mt-4">
          All prices are starting ranges. Final quotes depend on project scope.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-700 to-green-600 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Like what you see?
            </h2>
            <p className="text-blue-100 text-sm">
              Tell us about your project and get an exact quote.
            </p>
          </div>
          <NavLink
            to="/start-project"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors shrink-0"
          >
            Get a Custom Quote <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>
      </section>
    </div>
  )
}
