export default function TechStackBlock({
  eyebrow = 'Tech Stack',
  heading,
  subheading,
  rows = [],
  items = [],
  tags = [],
}) {
  const list = rows.length > 0 ? rows : items
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}

      {list.length > 0 && (
        <div className="mt-6 border border-gray-800 rounded-lg overflow-hidden">
          {list.map((row, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-5 py-3 ${
                i % 2 === 0 ? 'bg-[#0e1219b8]' : 'bg-gray-800/10'
              }`}
            >
              <span className="sm:w-40 shrink-0 font-semibold text-sm text-gray-300">
                {row.label}
              </span>
              <span className="text-gray-400 text-sm">{row.value}</span>
            </div>
          ))}
        </div>
      )}

      {tags.length > 0 && (
        <div className="DpBtn flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      )}
    </section>
  )
}
