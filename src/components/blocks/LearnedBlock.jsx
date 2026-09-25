import { Check } from 'lucide-react'

export default function LearnedBlock({
  eyebrow = 'What I Learned',
  heading,
  subheading,
  items = [],
  points = [],
}) {
  const list = items.length > 0 ? items : points
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}
      <ul className="mt-6 space-y-3">
        {list.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 items-start border border-gray-800 bg-[#0e1219b8] rounded-lg p-4"
          >
            <span className="w-7 h-7 shrink-0 rounded-full bg-green-600/20 text-green-500 flex items-center justify-center">
              <Check className="w-4 h-4" />
            </span>
            <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
