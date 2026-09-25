import cleanaba from './cleanaba'
import woodieDatabot from './woodie-databot'
import madeForTheMove from './made-for-the-move'
import productThatChangesEverything from './product-that-changes-everything'

// Central index — Home's Featured Projects, the Work listing and
// ProjectCaseStudy all pull from this array instead of hardcoding.
// NOTE: Home only shows projects with `featured !== false`; the Work page
// shows everything, filtered by category.
export const projects = [cleanaba, woodieDatabot, madeForTheMove, productThatChangesEverything]

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug)
}

export function getProjectNav(slug) {
  const idx = projects.findIndex((p) => p.slug === slug)
  if (idx === -1) return { prev: null, next: null, index: -1 }
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
    index: idx,
  }
}

export default projects
