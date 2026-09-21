// ---------------------------------------------------------------------------
// ALL service + package prices live here and ONLY here.
// Edit a price once below and it updates everywhere (cards, detail pages).
// `intl: 'Custom'` displays as "Custom quote".
// ---------------------------------------------------------------------------
import { Sparkles, Code2, PenTool, Bot, Clapperboard, Gem } from 'lucide-react'

export const SERVICES_DATA = [
  {
    slug: 'ai-creative-animation',
    icon: Sparkles,
    iconBg: 'bg-purple-600',
    title: 'AI Creative & Animation',
    tagline: 'Stories that move people.',
    description:
      'Scroll-stopping videos and visuals made with AI — promos, product ads, characters, and stories that bring your brand to life.',
    includes: [
      'AI promotional videos',
      'Product advertisements',
      'Event promotions',
      'Character animation',
      'Explainer animation',
      'Short storytelling',
      'AI visuals and social content',
    ],
    pricing: [
      { name: 'AI animation starter', ng: '₦15,000–₦30,000', intl: '$30–$50' },
      { name: 'AI content pack', ng: '₦50,000–₦100,000', intl: '$75–$150' },
      { name: 'AI campaign', ng: '₦120,000–₦250,000+', intl: '$150+' },
    ],
  },
  {
    slug: 'web-digital',
    icon: Code2,
    iconBg: 'bg-blue-600',
    title: 'Web & Digital',
    tagline: 'Modern. Fast. Scalable.',
    description:
      'Modern, fast websites and web applications — from simple landing pages to custom platforms built to grow with you.',
    includes: [
      'Business websites',
      'Landing pages',
      'Portfolio/creator sites',
      'Startup sites',
      'Web applications',
      'API integrations',
    ],
    pricing: [
      { name: 'Landing page', ng: '₦100,000–₦180,000', intl: '$100–$200' },
      { name: 'Business website', ng: '₦200,000–₦400,000+', intl: '$200–$500+' },
      { name: 'Custom web app', ng: '₦500,000+', intl: '$500+' },
    ],
  },
  {
    slug: 'brand-design',
    icon: PenTool,
    iconBg: 'bg-amber-500',
    title: 'Brand & Digital Design',
    tagline: 'A brand that stands out.',
    description:
      'Memorable logos, social graphics, and interfaces that give your brand a sharp, consistent look everywhere.',
    includes: [
      'Logo/identity systems',
      'Social graphics',
      'Promotional designs',
      'UI/UX',
      'Digital art',
    ],
    pricing: [
      { name: 'Social graphics', ng: '₦5,000–₦10,000 each; packs from ₦25,000', intl: 'Custom' },
      { name: 'Flyer/poster', ng: '₦7,000–₦15,000', intl: 'Custom' },
      { name: 'Logo', ng: '₦20,000–₦40,000+', intl: 'Custom' },
      { name: 'Brand identity', ng: '₦80,000–₦150,000+', intl: 'Custom' },
    ],
  },
  {
    slug: 'ai-automation',
    icon: Bot,
    iconBg: 'bg-green-600',
    title: 'AI & Automation',
    tagline: 'Work smarter, not harder.',
    description:
      'WhatsApp bots, AI assistants, and workflow automations that save time and handle the busywork for you.',
    includes: [
      'WhatsApp automation',
      'AI chatbots',
      'AI assistants',
      'Workflows',
      'API integrations',
      'AI-powered business tools',
    ],
    pricing: [
      { name: 'Automation starter', ng: '₦75,000–₦150,000+', intl: '$150+' },
      { name: 'Business automation', ng: '₦150,000–₦400,000+', intl: '$150–$500+' },
    ],
  },
  {
    slug: 'video-content',
    icon: Clapperboard,
    iconBg: 'bg-orange-500',
    title: 'Video & Content',
    tagline: 'Ideas in motion.',
    description:
      'Short-form edits, reels, promos, and motion graphics — polished content made for feeds that move fast.',
    includes: [
      'Short-form editing',
      'Reels',
      'TikTok content',
      'Promotional videos',
      'Motion graphics',
      'AI-assisted video production',
    ],
    // No fixed prices yet — page shows "Custom quote based on scope".
    pricing: [],
  },
  {
    slug: 'custom-technology',
    icon: Gem,
    iconBg: 'bg-teal-600',
    title: 'Custom Technology',
    tagline: 'Built for bigger ideas.',
    description:
      'Advanced builds for ambitious ideas — dashboards, data systems, blockchain apps, and custom AI tools.',
    includes: [
      'Advanced web apps',
      'Dashboards',
      'Database systems',
      'Blockchain applications',
      'Smart contracts',
      'Custom AI systems',
    ],
    // No fixed prices yet — page shows "Custom quote based on scope".
    pricing: [],
  },
]

export function getServiceBySlug(slug) {
  return SERVICES_DATA.find((s) => s.slug === slug)
}

// ---------------------------------------------------------------------------
// Flagship packages (Prices live here too — nowhere else).
// ---------------------------------------------------------------------------
export const PACKAGES = [
  {
    name: 'Starter Content',
    price: '₦30,000',
    tag: 'Easy first purchase',
    featured: false,
    items: [
      '2 social graphics',
      '1 short AI-assisted promotional animation',
      '1 promotional design',
      'Basic brand adaptation',
      '1 revision',
    ],
  },
  {
    name: 'Brand Growth',
    price: '₦100,000',
    tag: 'Most popular',
    featured: true,
    items: [
      '6 social graphics',
      '2 AI animations',
      '2 short-form videos',
      'Creative direction',
      'Brand-consistent design',
      '2 revisions',
    ],
  },
  {
    name: 'Digital Presence',
    price: 'from ₦200,000',
    tag: '',
    featured: false,
    items: [
      'Professional business website',
      'Responsive design',
      'WhatsApp integration',
      'Contact system',
      'Basic SEO',
      'Deployment',
      'Basic post-launch support',
    ],
  },
]
