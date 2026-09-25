import { BadgeCheck } from 'lucide-react'

export default function ImpactBlock({
  eyebrow = 'Impact',
  heading,
  subheading,
  items = [],
}) {
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-blue-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 items-start border border-blue-900/40 bg-blue-600/5 rounded-lg p-4"
          >
            <BadgeCheck className="w-5 h-5 shrink-0 text-blue-500 mt-0.5" />
            <span className="text-gray-200 text-sm sm:text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
