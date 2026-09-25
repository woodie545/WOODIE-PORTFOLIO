// Woodie DataBot — WhatsApp AI commerce bot for airtime & data sales.
// NOTE: Section copy below is realistic scaffolding so the block system
// renders end to end. Swap in final real copy section by section.

const woodieDatabot = {
  slug: 'woodie-databot',
  title: 'Woodie DataBot',
  category: 'Automation',
  tagline: 'WhatsApp Commerce Bot',
  description:
    'An intelligent WhatsApp bot for airtime & data sales with AI automation, referrals, and seamless payment integration.',
  cover: '/databot.png',
  links: {
    demo: '#',
    prototype: '#',
  },
  meta: {
    role: 'Design & Automation',
    year: '2025',
    status: 'Live',
  },
  // Fields used by the Home Featured Projects cards (single source of truth).
  tags: ['Node.js', 'MongoDB', 'Gemini AI', 'Railway'],
  accent: 'text-blue-600 hover:text-blue-700',
  content: [
    {
      type: 'problem',
      heading: 'The Problem',
      subheading: 'Selling airtime and data manually over chat is slow, error-prone and impossible to scale.',
      items: [
        {
          title: 'Manual order taking',
          text: 'Every sale means back-and-forth chats to confirm network, amount and payment — hours lost daily.',
        },
        {
          title: 'Payment confusion',
          text: 'Unmatched transfers and missing receipts cause disputes and delayed delivery.',
        },
        {
          title: 'No repeat engine',
          text: 'Happy buyers drift away because there is no referral or loyalty system keeping them coming back.',
        },
      ],
    },
    {
      type: 'idea',
      heading: 'The Idea',
      statement:
        'Meet customers where they already chat: a WhatsApp bot that takes orders, confirms payment and delivers airtime or data in seconds — with AI handling the conversation.',
      icons: ['Order in chat', 'Auto payment match', 'Instant delivery'],
    },
    {
      type: 'howItWorks',
      heading: 'How It Works',
      subheading: 'From first message to delivered data in under a minute.',
      steps: [
        {
          icon: 'chat',
          title: 'Say hello',
          text: 'The customer messages the bot; AI greets them and shows available networks and offers.',
        },
        {
          icon: 'ai',
          title: 'AI takes the order',
          text: 'Gemini-powered conversation captures network, phone number and amount — no forms.',
        },
        {
          icon: 'payment',
          title: 'Pay & verify',
          text: 'Payment links and transfer confirmation are matched automatically to the order.',
        },
        {
          icon: 'zap',
          title: 'Instant delivery',
          text: 'Airtime or data is dispensed immediately, with receipts and referral bonuses applied.',
        },
      ],
    },
    {
      type: 'features',
      heading: 'Key Features',
      subheading: 'A full storefront compressed into a chat thread.',
      features: [
        {
          icon: 'chat',
          title: 'Conversational ordering',
          text: 'Natural-language ordering for airtime, data bundles and bulk purchases.',
        },
        {
          icon: 'payment',
          title: 'Seamless payments',
          text: 'Paystack integration with automatic transfer matching and receipts.',
        },
        {
          icon: 'zap',
          title: 'Instant fulfillment',
          text: 'Vendor API dispenses value in seconds, 24/7, with retry on failure.',
        },
        {
          icon: 'trophy',
          title: 'Referrals & loyalty',
          text: 'Unique referral codes and wallet bonuses turn buyers into promoters.',
        },
        {
          icon: 'dashboard',
          title: 'Admin dashboard',
          text: 'Track orders, revenue, stock and customer growth from one control room.',
        },
        {
          icon: 'shield',
          title: 'Fraud guards',
          text: 'Rate limits, duplicate detection and manual review queues protect margins.',
        },
      ],
    },
    {
      type: 'stats',
      heading: 'Admin Dashboard',
      subheading: 'The metrics the owner watches every morning.',
      stats: [
        { value: '2.4k', label: 'Total Users', sub: 'unique WhatsApp customers' },
        { value: '₦1.8M', label: 'Revenue', sub: 'processed this quarter' },
        { value: '9.6k', label: 'Orders', sub: 'fulfilled automatically' },
        { value: '98%', label: 'Auto Rate', sub: 'no human touch needed' },
      ],
    },
    {
      type: 'gallery',
      heading: 'In The Chat',
      subheading: 'Real conversation flows — ordering, payment and delivery.',
      images: [
        { src: '/databot.png', caption: 'Order flow — network, number and amount in chat' },
        { src: '/databot.png', caption: 'Payment confirmation and instant receipt' },
        { src: '/databot.png', caption: 'Referral bonuses and wallet balance' },
      ],
    },
    {
      type: 'techStack',
      heading: 'Tech Stack',
      subheading: 'Built for uptime — the bot sells while you sleep.',
      rows: [
        { label: 'Runtime', value: 'Node.js bot service on Railway' },
        { label: 'AI', value: 'Gemini AI for conversation understanding' },
        { label: 'Database', value: 'MongoDB for orders, wallets and referrals' },
        { label: 'Payments', value: 'Paystack for collection and verification' },
        { label: 'Delivery', value: 'VTU vendor API for airtime & data' },
      ],
      tags: ['Node.js', 'MongoDB', 'Gemini AI', 'Railway'],
    },
    {
      type: 'learned',
      heading: 'What I Learned',
      items: [
        'Chat UX is unforgiving — every extra question costs you completed orders.',
        'Idempotent fulfillment is non-negotiable when money and mobile networks mix.',
        'Referral loops beat ads for this audience; the wallet balance is the marketing.',
      ],
    },
    {
      type: 'roadmap',
      heading: "What's Next",
      phases: [
        {
          phase: 'Phase 1',
          title: 'Harden the core',
          status: 'Live',
          items: ['Auto-retry on failed dispenses', 'Daily sales reports', 'Support handoff to human'],
        },
        {
          phase: 'Phase 2',
          title: 'Grow revenue',
          status: 'In progress',
          items: ['Cable TV & electricity bills', 'Scheduled auto-renew', 'Reseller accounts'],
        },
        {
          phase: 'Phase 3',
          title: 'Scale out',
          status: 'Planned',
          items: ['Multi-number bot fleet', 'Voice-note ordering', 'Franchise dashboard'],
        },
      ],
    },
    {
      type: 'impact',
      heading: 'Impact',
      items: [
        'Cuts order handling time from minutes of chatting to seconds of tapping.',
        'Runs 24/7 — night and weekend sales no longer need a human online.',
        'Referral-driven growth compounds without ad spend.',
      ],
    },
    {
      type: 'cta',
    },
  ],
}

export default woodieDatabot
