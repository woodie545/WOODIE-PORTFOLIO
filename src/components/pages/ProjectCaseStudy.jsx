import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import HeroBlock from '../blocks/HeroBlock'
import ProjectNavBlock from '../blocks/ProjectNavBlock'
import { blockRegistry } from '../../data/blockRegistry'
import { getProjectBySlug, getProjectNav } from '../../data/projects'

export default function ProjectCaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    // Unknown slug — fall back to the Work listing (which also serves as 404 recovery).
    return <Navigate to="/work" replace />
  }

  const { prev, next } = getProjectNav(slug)

  return (
    <div className="px-5 sm:px-8 lg:px-10 max-w-6xl mx-auto">
      <HeroBlock
        title={project.title}
        tagline={project.tagline}
        description={project.description}
        category={project.category}
        cover={project.cover}
        links={project.links}
        meta={project.meta}
      />

      {(project.content || []).map((block, i) => {
        const { type, ...data } = block
        const Component = blockRegistry[type]
        if (!Component) {
          if (import.meta.env.DEV) {
            console.warn(`[ProjectCaseStudy] Unknown block type: "${type}" — skipping.`)
          }
          return null
        }
        return <Component key={`${type}-${i}`} {...data} />
      })}

      <ProjectNavBlock prev={prev} next={next} />
    </div>
  )
}
