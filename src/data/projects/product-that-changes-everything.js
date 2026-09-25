// The Product That Changes Everything — cinematic AI smartwatch advertisement.

const productThatChangesEverything = {
  slug: 'product-that-changes-everything',
  title: 'The Product That Changes Everything',
  category: 'Animation',
  tagline: "Time doesn't wait. Stay ahead.",
  description:
    'A cinematic AI-generated smartwatch advertisement that transforms an everyday product into the hero of a fast-paced story. From a rushed morning to fitness, notifications, navigation and music, the film showcases how one device can keep up with every moment of the day.',
  cover: '/0901(2)-Cover.jpg',
  links: { video: 'https://www.youtube.com/embed/6NbtgnnsBJs' },
  meta: { role: 'Creative Director · AI Animator · Video Editor', year: 2026, status: 'Completed' },
  tags: ['AI', '3D', 'Animation', 'ProductAd', 'VideoEditing'],
  // Accent used by the Work listing cards.
  accent: 'text-amber-600 hover:text-amber-700',
  // Works page only — excluded from Home's Featured Projects (see Home2.jsx).
  featured: false,

  content: [
    {
      type: 'idea',
      text: 'One ordinary morning. One smartwatch. Everything changes.',
      subtext:
        "What if a smartwatch wasn't just something you wore, but the technology that kept you one step ahead of everything?",
    },
    {
      type: 'video',
      heading: 'Watch the Film',
      subheading: 'One device. Every moment of the day.',
      description:
        'A cinematic AI-generated advertisement built around product storytelling, camera movement, lighting and sound design.',
      videoUrl: 'https://www.youtube.com/embed/6NbtgnnsBJs',
      large: true,
    },
    {
      type: 'gallery',
      heading: 'From Sunrise to the Spotlight',
      images: [
        { label: '01 — The Wake-Up', caption: 'The protagonist wakes up late in a cinematic bedroom.', src: '' },
        { label: '02 — The Product', caption: 'Close-up of the smartwatch resting on the bedside table.', src: '' },
        { label: '03 — Technology Awakens', caption: 'The smartwatch activates and the camera dives into its futuristic interface.', src: '' },
        { label: '04 — Fitness', caption: 'The protagonist uses the smartwatch while moving through the city.', src: '' },
        { label: '05 — Connected', caption: 'A notification and navigation sequence showing the smartwatch keeping the user connected.', src: '' },
        { label: '06 — Control the Moment', caption: 'The music sequence where the character moves confidently through the city.', src: '' },
        { label: '07 — Hero Product', caption: 'The final premium smartwatch product reveal.', src: '' },
      ],
    },
    {
      type: 'techStack',
      heading: 'Tools Used',
      items: [
        { label: 'AI Image Generation', value: 'Character, environment and product visual development' },
        { label: 'AI Video Generation', value: 'Cinematic animation and motion' },
        { label: 'CapCut', value: 'Editing, pacing, transitions and final assembly' },
        { label: 'Sound Design', value: 'AI-assisted cinematic atmosphere and product effects' },
        { label: 'Prompt Engineering', value: 'Visual consistency, shot direction and continuity' },
      ],
    },
    {
      type: 'credits',
      heading: 'Project Credits',
      role: 'Creative Director · AI Animator · Video Editor',
      rows: [
        { label: 'Created by', value: 'Cornelius Samuel' },
        { label: 'Production', value: 'Woodie Concepts' },
      ],
    },
    {
      type: 'learned',
      points: [
        'Approaching AI animation as a complete production workflow rather than a collection of individual generated clips.',
        'The importance of visual references, start frames and continuity across a multi-scene AI-generated advertisement.',
        'Planning camera movement, lighting and product consistency before generation for a more cohesive cinematic result.',
        'Strengthened understanding of AI-assisted storytelling, product visualization, cinematic editing and commercial video direction.',
      ],
    },
    {
      type: 'cta',
      heading: 'Have a product that needs a story?',
      text: "Let's turn your idea into something people want to watch. Whether it's a product advertisement, AI animation or cinematic visual campaign, Woodie Concepts creates visuals designed to make ideas stand out.",
      buttonLabel: 'Start a Project →',
    },
  ],
}

export default productThatChangesEverything
