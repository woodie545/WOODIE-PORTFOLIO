import { Lightbulb } from 'lucide-react'

export default function IdeaBlock({ eyebrow = 'The Idea', heading, statement, text, subtext, icons = [] }) {
  const main = statement || text
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      <div className="mt-6 border border-gray-800 bg-gray-800/10 rounded-xl p-6 sm:p-8 flex gap-4">
        <div className="w-12 h-12 shrink-0 rounded-lg bg-green-600/20 text-green-500 flex items-center justify-center text-2xl">
          <Lightbulb className="w-6 h-6" />
        </div>
        <div>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-200">{main}</p>
          {subtext && <p className="text-gray-400 mt-3 leading-relaxed">{subtext}</p>}
        </div>
      </div>
      {icons.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {icons.map((icon, i) => (
            <span
              key={i}
              className="border rounded-sm px-2 py-1 text-sm border-gray-700 text-gray-300"
            >
              {icon}
            </span>
          ))}
        </div>
      )}
    </section>
  )
}
