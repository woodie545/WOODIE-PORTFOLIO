import { X } from 'lucide-react'

export default function ProblemBlock({ eyebrow = 'The Problem', heading, subheading, items = [] }) {
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-red-500">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {items.map((item, i) => {
          const title = typeof item === 'string' ? item : item.title
          const text = typeof item === 'string' ? null : item.text
          return (
            <div
              key={i}
              className="border border-gray-800 bg-[#0e1219b8] rounded-lg p-5 space-y-2"
            >
              <div className="w-9 h-9 rounded-lg bg-red-600/15 text-red-500 flex items-center justify-center">
                <X className="w-5 h-5" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              {text && <p className="text-gray-400 text-sm leading-relaxed">{text}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
