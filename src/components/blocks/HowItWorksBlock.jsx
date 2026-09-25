import { MessageCircle, Cpu, CreditCard, Truck, Bell, LayoutDashboard } from 'lucide-react'

const ICONS = {
  chat: MessageCircle,
  ai: Cpu,
  payment: CreditCard,
  delivery: Truck,
  notify: Bell,
  dashboard: LayoutDashboard,
}

export default function HowItWorksBlock({
  eyebrow = 'How It Works',
  heading,
  subheading,
  steps = [],
}) {
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {steps.map((step, i) => {
          const Icon = (step.icon && ICONS[step.icon]) || null
          return (
            <div
              key={i}
              className="border border-gray-800 bg-[#0e1219b8] rounded-lg p-5 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-blue-600 font-bold text-lg">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {Icon && (
                  <span className="w-10 h-10 rounded-lg bg-blue-600/15 text-blue-500 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                )}
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              {step.text && <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
