import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function NavCard({ project, direction }) {
  if (!project) return <div />
  const isNext = direction === 'next'
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group border border-gray-800 bg-[#0e1219b8] hover:bg-gray-800/20 rounded-lg p-5 flex items-center gap-4 transition-colors"
    >
      {!isNext && <ArrowLeft className="w-5 h-5 shrink-0 text-gray-500 group-hover:text-white" />}
      <div className={isNext ? 'text-right flex-1' : 'flex-1'}>
        <p className="text-xs uppercase tracking-wider text-gray-500">
          {isNext ? 'Next Project' : 'Previous Project'}
        </p>
        <p className="font-bold mt-1 group-hover:text-blue-500">{project.title}</p>
        {project.category && <p className="text-sm text-gray-500">{project.category}</p>}
      </div>
      {isNext && <ArrowRight className="w-5 h-5 shrink-0 text-gray-500 group-hover:text-white" />}
    </Link>
  )
}

export default function ProjectNavBlock({ prev, next }) {
  if (!prev && !next) return null
  return (
    <section className="py-10 border-t border-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <NavCard project={prev} direction="prev" />
        <NavCard project={next} direction="next" />
      </div>
    </section>
  )
}
