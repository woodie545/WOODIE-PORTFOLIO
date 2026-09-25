export default function StatsBlock({
  eyebrow = 'By The Numbers',
  heading,
  subheading,
  stats = [],
}) {
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="text-center border border-gray-800 bg-[#0e1219b8] rounded-lg p-6"
          >
            <p className="font-bold text-3xl sm:text-4xl text-blue-600">{s.value}</p>
            <p className="mt-1 font-medium text-sm">{s.label}</p>
            {s.sub && <p className="text-gray-500 text-xs mt-1">{s.sub}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
