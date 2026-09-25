import HeroBlock from '../components/blocks/HeroBlock'
import ProblemBlock from '../components/blocks/ProblemBlock'
import IdeaBlock from '../components/blocks/IdeaBlock'
import HowItWorksBlock from '../components/blocks/HowItWorksBlock'
import FeatureGridBlock from '../components/blocks/FeatureGridBlock'
import GalleryBlock from '../components/blocks/GalleryBlock'
import TechStackBlock from '../components/blocks/TechStackBlock'
import StatsBlock from '../components/blocks/StatsBlock'
import DesignSystemBlock from '../components/blocks/DesignSystemBlock'
import LearnedBlock from '../components/blocks/LearnedBlock'
import RoadmapBlock from '../components/blocks/RoadmapBlock'
import ImpactBlock from '../components/blocks/ImpactBlock'
import CreditsBlock from '../components/blocks/CreditsBlock'
import VideoBlock from '../components/blocks/VideoBlock'
import CTABlock from '../components/blocks/CTABlock'
import ProjectNavBlock from '../components/blocks/ProjectNavBlock'

// Maps a content item's `type` string to the component that renders it.
// ProjectCaseStudy looks up each `project.content` entry here dynamically.
export const blockRegistry = {
  hero: HeroBlock,
  problem: ProblemBlock,
  idea: IdeaBlock,
  howItWorks: HowItWorksBlock,
  features: FeatureGridBlock,
  featureGrid: FeatureGridBlock,
  gallery: GalleryBlock,
  techStack: TechStackBlock,
  stats: StatsBlock,
  designSystem: DesignSystemBlock,
  learned: LearnedBlock,
  roadmap: RoadmapBlock,
  impact: ImpactBlock,
  credits: CreditsBlock,
  video: VideoBlock,
  cta: CTABlock,
  projectNav: ProjectNavBlock,
}

export default blockRegistry
