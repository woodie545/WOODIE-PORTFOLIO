export default function DesignSystemBlock({
  eyebrow = 'Design System',
  heading,
  subheading,
  colors = [],
  typography = null,
  components = [],
}) {
  return (
    <section className="py-10 border-t border-gray-800">
      <h2 className="text-xl sm:text-2xl font-bold">
        <span className="pr-2 text-green-600">●</span>
        {heading || eyebrow}
      </h2>
      {subheading && <p className="text-gray-400 mt-2 max-w-2xl">{subheading}</p>}

      {colors.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-sm text-gray-300 mb-3">Colors</h3>
          <div className="flex flex-wrap gap-4">
            {colors.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="w-12 h-12 rounded-lg border border-gray-700"
                  style={{ backgroundColor: c.hex }}
                />
                <div>
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-gray-500 font-mono">{c.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {typography && (
        <div className="mt-6 border border-gray-800 bg-[#0e1219b8] rounded-lg p-5">
          <h3 className="font-semibold text-sm text-gray-300 mb-3">Typography</h3>
          <p className="text-2xl font-bold">{typography.headingSample || 'Aa — Headings'}</p>
          <p className="text-gray-400 mt-1">
            {typography.bodySample || 'Aa — Body text for readable, friendly interfaces.'}
          </p>
          {(typography.headingFont || typography.bodyFont) && (
            <p className="text-xs text-gray-500 mt-3 font-mono">
              {[typography.headingFont, typography.bodyFont].filter(Boolean).join(' · ')}
            </p>
          )}
        </div>
      )}

      {components.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-sm text-gray-300 mb-3">Components</h3>
          <div className="flex flex-wrap gap-3 items-center border border-gray-800 bg-gray-800/10 rounded-lg p-5">
            {components.map((c, i) =>
              typeof c === 'string' ? (
                <span
                  key={i}
                  className="border border-gray-600 rounded-md px-3 py-1.5 text-sm text-gray-300"
                >
                  {c}
                </span>
              ) : (
                <span
                  key={i}
                  className={`${c.style || 'bg-blue-600'} text-white rounded-md px-3 py-1.5 text-sm`}
                >
                  {c.label}
                </span>
              ),
            )}
          </div>
        </div>
      )}
    </section>
  )
}
