import { ArrowUpRight, FlaskConical, Play } from 'lucide-react'
import { toWatchUrl } from './videoUtils'

export default function HeroBlock({
  title,
  tagline,
  description,
  category,
  cover,
  links = {},
  meta = {},
}) {
  const { demo, prototype, video } = links
  const { role, year, status } = meta

  return (
    <section className="py-8 sm:py-12">
      {category && (
        <p className="bg-gray-700/15 inline-flex px-3 py-1 text-xs border border-gray-400/30 rounded-2xl w-fit mb-5">
          <span className="text-green-500 px-1">◉</span> {category}
        </p>
      )}
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{title}</h1>
      {tagline && <p className="mt-3 text-lg sm:text-xl text-blue-500 font-medium">{tagline}</p>}
      {description && <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">{description}</p>}

      {(role || year || status) && (
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {role && (
            <span className="border border-gray-700 rounded-md px-3 py-1.5 text-gray-300">
              <span className="text-gray-500">Role:</span> {role}
            </span>
          )}
          {year && (
            <span className="border border-gray-700 rounded-md px-3 py-1.5 text-gray-300">
              <span className="text-gray-500">Year:</span> {year}
            </span>
          )}
          {status && (
            <span className="border border-green-800 bg-green-800/20 text-green-400 rounded-md px-3 py-1.5">
              {status}
            </span>
          )}
        </div>
      )}

      {(demo || prototype || video) && (
        <div className="mt-6 flex flex-wrap gap-4">
          {video && (
            <a
              href={toWatchUrl(video)}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-sm inline-flex items-center gap-2"
            >
              <Play className="w-4 h-4" /> Watch Video →
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-sm inline-flex items-center gap-2"
            >
              Live Demo <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          {prototype && (
            <a
              href={prototype}
              target="_blank"
              rel="noreferrer"
              className="hover:bg-gray-900 px-5 py-2 border border-gray-400 rounded-lg text-sm inline-flex items-center gap-2"
            >
              <FlaskConical className="w-4 h-4 text-green-500" /> Prototype
            </a>
          )}
        </div>
      )}

      {cover && (
        <div className="mt-8 border border-gray-800 bg-[#0e1219b8] rounded-xl overflow-hidden">
          <img src={cover} alt={`${title} cover`} className="w-full h-auto object-cover" />
        </div>
      )}
    </section>
  )
}
