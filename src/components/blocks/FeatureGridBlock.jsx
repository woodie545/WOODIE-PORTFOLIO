import {
  Sparkles,
  Bell,
  MapPin,
  Trophy,
  LayoutDashboard,
  MessagesSquare,
  Zap,
  ShieldCheck,
} from 'lucide-react'

const ICONS = {
  sparkles: Sparkles,
  notify: Bell,
  map: MapPin,
  trophy: Trophy,
  dashboard: LayoutDashboard,
  chat: MessagesSquare,
  zap: Zap,
  shield: ShieldCheck,
}

export default function FeatureGridBlock({
  eyebrow = 'Features',
  heading,
  subheading,
  features = [],
}) {
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {features.map((f, i) => {
          const Icon = (f.icon && ICONS[f.icon]) || Sparkles
          return (
            <div
              key={i}
              className="border border-gray-600 rounded-lg p-5 space-y-2 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg text-2xl bg-blue-800/20 text-blue-500 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold">{f.title}</h3>
              {f.text && <p className="text-gray-400 text-sm leading-relaxed">{f.text}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
