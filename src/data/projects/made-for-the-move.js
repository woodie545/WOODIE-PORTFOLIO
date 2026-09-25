// Made for the Move — cinematic AI sneaker advertisement.

const madeForTheMove = {
  slug: 'made-for-the-move',
  title: 'Made for the Move',
  category: 'Animation',
  tagline: 'Wherever You Go. Keep Moving.',
  description:
    'A cinematic sneaker advertisement following a runner through constantly changing environments — from city streets and rain-soaked asphalt to desert landscapes and a futuristic city — while the sneaker remains unchanged.',
  cover: '/made-for-the-move-cover.jpg',
  links: { video: 'https://www.youtube.com/embed/NjoYhIMXkbc' },
  meta: { role: 'Creative Director · AI Animator · Video Editor', year: 2026, status: 'Completed' },
  tags: ['AI', 'Capcut', '3D', 'VideoEditing'],
  // Accent used by the Home Featured Projects and Work listing cards.
  accent: 'text-amber-600 hover:text-amber-700',

  content: [
    {
      type: 'idea',
      text: 'One shoe. Every world.',
      subtext:
        'A runner never stops moving, even as the world around him constantly changes — city, rain, desert, future. The sneaker stays the same. The world changes with every step.',
    },
    {
      type: 'video',
      heading: 'Watch the Journey',
      subheading: 'One runner. One sneaker. Multiple worlds.',
      description:
        'A cinematic AI-generated product advertisement built around movement, environmental transformation and premium sneaker cinematography.',
      videoUrl: 'https://www.youtube.com/embed/NjoYhIMXkbc',
      large: true,
    },
    {
      type: 'gallery',
      heading: 'From One Step to Another',
      images: [
        { label: '01 — City Impact', caption: 'The sneaker hits the pavement as the journey begins.', src: '' },
        { label: '02 — Rain Run', caption: 'The runner moves through a rain-soaked city.', src: '' },
        { label: '03 — Desert Run', caption: 'The environment shifts from wet asphalt to golden desert sand.', src: '' },
        { label: '04 — Futuristic City', caption: 'The runner enters a futuristic world without ever changing his shoes.', src: '' },
        { label: '05 — Hero Reveal', caption: 'The journey ends with the sneaker becoming the focus.', src: '' },
      ],
    },
    {
      type: 'techStack',
      heading: 'Tools Used',
      items: [
        { label: 'AI Generation', value: 'AI image and video generation' },
        { label: '3D / Product Visualization', value: '3D product development and visualization' },
        { label: 'Video Editing', value: 'Shot assembly, pacing and final edit' },
        { label: 'Sound Design', value: 'Music, footsteps, environmental sounds and product impacts' },
        { label: 'Creative Direction', value: 'Concept development, visual direction and storytelling' },
        { label: 'Prompt Design', value: 'Character, product and environment consistency' },
      ],
    },
    {
      type: 'credits',
      heading: 'Project Credits',
      role: 'Creative Director · AI Animator · Video Editor',
      rows: [
        { label: 'Concept & Creative Direction', value: 'Woodie Concepts' },
        { label: 'AI Generation', value: 'Woodie Concepts' },
        { label: '3D / Product Visualization', value: 'Woodie Concepts' },
        { label: 'Video Editing', value: 'Woodie Concepts' },
        { label: 'Sound Design', value: 'Woodie Concepts' },
        { label: 'Prompt Design', value: 'Woodie Concepts' },
      ],
    },
    {
      type: 'learned',
      points: [
        'Maintaining the same product design across multiple AI-generated shots.',
        'Creating visual continuity between independently generated scenes.',
        'Using camera direction to make separate clips feel like one continuous journey.',
        'Designing environmental transformations around a fixed product.',
        'Balancing action shots with premium product cinematography.',
        'Using pacing and sound to make a short advertisement feel cinematic.',
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

export default madeForTheMove
