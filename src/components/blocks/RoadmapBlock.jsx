export default function RoadmapBlock({
  eyebrow = "What's Next",
  heading,
  subheading,
  phases = [],
}) {
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {phases.map((phase, i) => (
          <div key={i} className="border border-gray-800 bg-[#0e1219b8] rounded-lg p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-500">
              {phase.phase || `Phase ${i + 1}`}
            </p>
            {phase.title && <h3 className="font-bold mt-1">{phase.title}</h3>}
            {phase.status && (
              <span className="inline-block mt-2 text-xs border border-gray-700 rounded-sm px-2 py-0.5 text-gray-400">
                {phase.status}
              </span>
            )}
            {phase.items && (
              <ul className="mt-3 space-y-2 text-sm text-gray-400 list-disc list-inside">
                {phase.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
