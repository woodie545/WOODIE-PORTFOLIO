import { Clapperboard, Wrench } from 'lucide-react'

export default function CreditsBlock({
  eyebrow = 'Credits',
  heading,
  subheading,
  role,
  tools = [],
  credits = [],
  rows = [],
}) {
  const list = credits.length > 0 ? credits : rows
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="border border-gray-800 bg-[#0e1219b8] rounded-lg p-5">
          <h3 className="font-semibold text-sm text-gray-300 flex items-center gap-2">
            <Clapperboard className="w-4 h-4 text-blue-500" /> Role
          </h3>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">{role}</p>
          {list.length > 0 && (
            <dl className="mt-4 space-y-2 text-sm">
              {list.map((c, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <dt className="text-gray-500">{c.label}</dt>
                  <dd className="text-gray-200 text-right">{c.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <div className="border border-gray-800 bg-[#0e1219b8] rounded-lg p-5">
          <h3 className="font-semibold text-sm text-gray-300 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-green-500" /> Tools Used
          </h3>
          <div className="DpBtn flex flex-wrap gap-2 mt-3">
            {tools.map((tool, i) => (
              <span key={i}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
