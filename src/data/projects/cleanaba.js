// CleanAba — civic tech / environmental sanitation platform for Aba.
// NOTE: Section copy below is realistic scaffolding so the block system
// renders end to end. Swap in final real copy section by section.

const cleanaba = {
  slug: 'cleanaba',
  title: 'CleanAba',
  category: 'Web',
  tagline: 'Civic Tech / Environmental Platform',
  description:
    'A platform that empowers residents to report waste, track sanitation efforts and earn rewards for a cleaner Aba.',
  cover: '/cleanAbia.png',
  links: {
    demo: '#',
    prototype: '#',
  },
  meta: {
    role: 'Design & Development',
    year: '2025',
    status: 'In Progress',
  },
  // Fields used by the Home Featured Projects cards (single source of truth).
  tags: ['React', 'TailwindCss', 'Maps Api', 'NodeJs'],
  accent: 'text-green-600 hover:text-green-700',
  content: [
    {
      type: 'problem',
      heading: 'The Problem',
      subheading: 'Waste piles up faster than anyone can track it — reporting is informal and follow-through is invisible.',
      items: [
        {
          title: 'No clear reporting channel',
          text: 'Residents spot illegal dumps but have nowhere structured to report them with a location and photo.',
        },
        {
          title: 'No visibility on cleanup',
          text: 'Once waste is reported by word of mouth, nobody can see whether it was acknowledged or cleared.',
        },
        {
          title: 'No incentive to participate',
          text: 'Keeping the city clean feels thankless — good behaviour by residents and businesses goes unrewarded.',
        },
      ],
    },
    {
      type: 'idea',
      heading: 'The Idea',
      statement:
        'Give every resident a one-tap way to report waste, watch their report move from flagged to cleared, and earn rewards for keeping Aba clean.',
      icons: ['Report in seconds', 'Track transparently', 'Earn rewards'],
    },
    {
      type: 'howItWorks',
      heading: 'How It Works',
      subheading: 'From street-side report to verified cleanup in four steps.',
      steps: [
        {
          icon: 'map',
          title: 'Report waste',
          text: 'Snap a photo, pin the location on the map and submit a report in under a minute.',
        },
        {
          icon: 'notify',
          title: 'Get routed',
          text: 'Reports are triaged and routed to the responsible sanitation team automatically.',
        },
        {
          icon: 'dashboard',
          title: 'Track progress',
          text: 'Reporters follow live status — flagged, acknowledged, in cleanup, cleared.',
        },
        {
          icon: 'trophy',
          title: 'Earn rewards',
          text: 'Verified reports and clean-street streaks earn points redeemable with partners.',
        },
      ],
    },
    {
      type: 'features',
      heading: 'Key Features',
      subheading: 'Everything a resident needs to take part — and everything a city team needs to respond.',
      features: [
        {
          icon: 'map',
          title: 'Map-based reporting',
          text: 'GPS-pinned reports with photos make every dumpsite findable and verifiable.',
        },
        {
          icon: 'dashboard',
          title: 'Public cleanup tracker',
          text: 'A live dashboard shows reported, in-progress and cleared sites across the city.',
        },
        {
          icon: 'trophy',
          title: 'Rewards program',
          text: 'Points for reporting and verifying cleanups, redeemable with local partners.',
        },
        {
          icon: 'notify',
          title: 'Status notifications',
          text: 'Reporters get updates the moment their report is acknowledged or cleared.',
        },
        {
          icon: 'shield',
          title: 'Verified cleanups',
          text: 'Photo evidence and community confirmation close the loop on every report.',
        },
        {
          icon: 'chat',
          title: 'Community feed',
          text: 'Wards celebrate clean streets and rally volunteers for monthly cleanups.',
        },
      ],
    },
    {
      type: 'gallery',
      heading: 'Product Screens',
      subheading: 'Reporting flow, live map and the public cleanup dashboard.',
      images: [
        { src: '/cleanAbia.png', caption: 'CleanAba home — report waste in one tap' },
        { src: '/cleanAbia.png', caption: 'Live sanitation map of reported sites' },
        { src: '/cleanAbia.png', caption: 'Rewards and community leaderboard' },
      ],
    },
    {
      type: 'techStack',
      heading: 'Tech Stack',
      subheading: 'A modern, map-first web platform built to scale ward by ward.',
      rows: [
        { label: 'Frontend', value: 'React + TailwindCSS' },
        { label: 'Maps', value: 'Maps API for pinning and live site tracking' },
        { label: 'Backend', value: 'Node.js API for reports, status and rewards' },
        { label: 'Realtime', value: 'Live status updates on every report' },
      ],
      tags: ['React', 'TailwindCss', 'Maps Api', 'NodeJs'],
    },
    {
      type: 'stats',
      heading: 'Early Traction',
      subheading: 'Targets for the pilot rollout across the first wards.',
      stats: [
        { value: '500+', label: 'Pilot Users', sub: 'across 3 wards' },
        { value: '1.2k', label: 'Reports Filed', sub: 'in the first quarter' },
        { value: '85%', label: 'Clearance Rate', sub: 'verified cleanups' },
        { value: '40+', label: 'Reward Partners', sub: 'local businesses' },
      ],
    },
    {
      type: 'designSystem',
      heading: 'Design System',
      subheading: 'Fresh greens and earthy neutrals — a civic identity that feels clean and trustworthy.',
      colors: [
        { name: 'Leaf Green', hex: '#16A34A' },
        { name: 'Deep Forest', hex: '#14532D' },
        { name: 'Sand', hex: '#F5F0E6' },
        { name: 'Ink', hex: '#0B0E13' },
      ],
      typography: {
        headingFont: 'Headings — bold, geometric sans',
        bodyFont: 'Body — neutral grotesque for readability',
        headingSample: 'A cleaner Aba starts with you.',
        bodySample: 'Report waste, track cleanups and earn rewards — all in one place.',
      },
      components: ['Report card', 'Status pill', 'Leaderboard row', 'Map pin'],
    },
    {
      type: 'learned',
      heading: 'What I Learned',
      items: [
        'Civic products live or die on trust — visible status changes matter more than features.',
        'Designing for low-bandwidth phones shaped every image and map decision.',
        'Reward mechanics need local partners early, not as an afterthought.',
      ],
    },
    {
      type: 'roadmap',
      heading: "What's Next",
      phases: [
        {
          phase: 'Phase 1',
          title: 'Pilot launch',
          status: 'In progress',
          items: ['Ward onboarding', 'Report triage flow', 'First reward partners'],
        },
        {
          phase: 'Phase 2',
          title: 'City scale',
          status: 'Planned',
          items: ['USSD reporting for feature phones', 'Sanitation team app', 'Public API'],
        },
        {
          phase: 'Phase 3',
          title: 'Sustain',
          status: 'Planned',
          items: ['Subscription for estates', 'Sponsor dashboards', 'City-wide challenges'],
        },
      ],
    },
    {
      type: 'impact',
      heading: 'Impact',
      items: [
        'Turns informal complaints into trackable, actionable sanitation data.',
        'Gives residents visible proof that reporting leads to real cleanups.',
        'Creates a reward loop that keeps streets clean long after launch day.',
      ],
    },
    {
      type: 'cta',
    },
  ],
}

export default cleanaba
