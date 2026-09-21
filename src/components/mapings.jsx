export const links=[
    {
      path:"/",
      title: "Home"
    },
    {
      path:"/service",
      title:"Service"
    },
    {
      path:"/work",
      title:"Works"
    },
    {
      path:"/about",
      title: "About"
    },
    {
      path:"/process",
      title: "Process"
    }
    ];

    // ---------------------------------------------------------------------------
    // Sample slides — swap `src` for your own images. `label` / `caption` are
    // optional and just demonstrate how to sync text content to the active slide.
    // ---------------------------------------------------------------------------
    export const SLIDES = [
      {
        src: "/Layer 2.png",
        label: "01",
        caption: "Signal drift",
      },
      {
        src: "/Layer 1.png",
        label: "02",
        caption: "Static bloom",
      },
      {
        src: "/Layer 3.png",
        label: "03",
        caption: "Feedback loop",
      },
     
    ];

    export const RATINGS=[
      {
        id: 1,
        img: "/white.jpg",
        name: "Jane Smith",
        position: "Marketing Manager",
        review: "Woodie Concepts brought our idea to life with their innovative approach and attention to detail. The team delivered a product that exceeded our expectations.",
        ratings: 5,
        maxRate: 5,
      },

      {
        id: 2,
        img: "/suit.jpg",
        name: "John Doe",
        position: "Community Leader",
        review: "The team at Woodie Concepts is professional, creative, and delivers exceptional results. They truly understand their clients' needs and exceed expectations.",
        ratings: 3,
        maxRate: 5,
      },

      {
        id: 3,
        img: "/popcorn woman.png",
        name: "Adora K.",
        position: "Business Owner",
        review: "working with Woodie Concepts was a pleasure. Their team is knowledgeable, responsive, and dedicated to delivering high-quality work.",
        ratings: 4,
        maxRate: 5,
      },

      {
        id: 4,
        img: "/man .jpg",
        name: "Mr. Uche",
        position: "Content Creator",
        review: "Woodie Concepts has been an invaluable partner in bringing our vision to life. Their expertise and dedication have significantly contributed to our success.",
        ratings: 5,
        maxRate: 5,
      },
    ]

import { FaRobot, FaCode, FaPenNib } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { MdAutoAwesome, MdBrandingWatermark } from "react-icons/md";

    export const panel=[
      {
        icon: FaRobot,
        style: "text-purple-600 bg-purple-800/20 hover:bg-purple-800/40",
        header: "Al Animation & Video",
        content: "Al poevred animation and video that bring your ideas to life."
      },
      {
        icon: FaCode,
        style: "text-blue-600 bg-blue-800/20 hover:bg-blue-800/40",
        header: "Web Development",
        content: "Modern and responsive websites and mobile apps built to scale."
      },
      {
        icon: FaPenNib,
        style: "text-amber-600 bg-amber-800/20 hover:bg-amber-800/40",
        header: "UI/UX Design",
        content: "Beautiful, user-centered designs that communicate and convert."
      },
      {
        icon: RiRobot2Line,
        style: "text-green-600 bg-green-800/20 hover:bg-green-800/40",
        header: "Ai Automation",
        content: "Automate workflows and business processes with smart Al solutions."
      },
      {
        icon: MdAutoAwesome,
        style:"text-pink-600 bg-pink-800/20 hover:bg-pink-800/40",
        header: "Chatbot Development",
        content: "Create intelligent chatbots to enhance customer engagement and support."
      },
      {
        icon: MdBrandingWatermark,
        style: "text-yellow-600 bg-yellow-800/20 hover:bg-yellow-800/40",
        header: "Branding & Identity",
        content: "Develop a strong brand presence with cohesive visual identity and messaging."
      },
    ]

    export const whyWork=[
      {
        num: "10+",
        content: "Project Completed"
      },
      {
        num: "20+",
        content: "Happy Clients"
      },
      {
        num: "2+",
        content: "Years Experience"
      },
      {
        num: "100%",
        content: "Client Satisfaction"
      },
    ]

   
// SERVICES

import { Code2, PenTool, Clapperboard, Bot, Sparkles, Gem, Search, FileText, Wrench, SlidersHorizontal, Rocket, Check,  ArrowRight,  Zap,  RadioTower,  Users, Menu, } from "lucide-react";

export const SERVICES = [
  {
    icon: Code2,
    iconBg: "bg-blue-600",
    title: "Web Development",
    tagline: "Modern. Fast. Scalable.",
    description:
      "We build high-performance websites and web applications that are responsive, secure and designed for growth.",
    items: ["Business Websites", "Web Apps & Portals", "API Integrations"],
  },
  {
    icon: PenTool,
    iconBg: "bg-green-600",
    title: "Graphic & UI/UX Design",
    tagline: "Visuals that communicate.",
    description:
      "From brand graphics to user interfaces, we design experiences that are clean, modern and built for your audience.",
    items: ["Brand Identity", "Social Media Graphics", "UI/UX Design"],
  },
  {
    icon: Clapperboard,
    iconBg: "bg-orange-500",
    title: "Video Editing & Motion Graphics",
    tagline: "Ideas in motion.",
    description:
      "We turn raw footage into compelling videos, ads and motion graphics that capture attention and tell your story.",
    items: ["Ad Videos & Commercials", "Social Media Content", "Motion Graphics"],
  },
  {
    icon: Bot,
    iconBg: "bg-purple-600",
    title: "AI & Automation",
    tagline: "Work smarter, not harder.",
    description:
      "We build intelligent systems and chatbots to automate tasks, save time and boost productivity.",
    items: ["Chatbots & WhatsApp Bots", "Workflow Automation", "AI-Powered Solutions"],
  },
  {
    icon: Sparkles,
    iconBg: "bg-teal-600",
    title: "Animation & Creative Production",
    tagline: "Stories that move people.",
    description:
      "We create engaging animations and visual content that bring your ideas to life — from characters to campaigns.",
    items: ["AI Animation", "2D / 3D Animation", "Cinematic Ads"],
  },
  {
    icon: Gem,
    iconBg: "bg-amber-500",
    title: "Branding & Identity",
    tagline: "A brand that stands out.",
    description:
      "We help you build a strong brand identity with memorable logos, visual systems and strategic design.",
    items: ["Logo Design", "Brand Guidelines", "Social Media Kit"],
  },
];

export const PROCESS_STEPS = [
  {
    icon: Search,
    color: "bg-blue-600/40",
    step: "01",
    title: "Discover",
    description: "We learn about your goals, challenges and vision.",
  },
  {
    icon: FileText,
    color: "bg-green-500/40",
    step: "02",
    title: "Plan",
    description: "We create a strategy, outline and timeline.",
  },
  {
    icon: PenTool,
    color: "bg-purple-500/40",
    step: "03",
    title: "Create",
    description: "We design, develop and bring your ideas to life.",
  },
  {
    icon: SlidersHorizontal,
    color: "bg-orange-500/40",
    step: "04",
    title: "Refine",
    description: "We test, review and make it perfect.",
  },
  {
    icon: Rocket,
    color: "bg-green-500/40",
    step: "05",
    title: "Launch",
    description: "We deliver and support your success.",
  },
];

export const filter=["All", "Web", "Automation", "UI/UX", "Graphics", "Animation", "Branding"]

export const work=[
  {
    cat: "Web",
    img:'/cleanAbia.png',
    title:'CleanAbia',
    style:'text-green-600 hover:text-green-700',
    subTitle:'Civic Tech/Environmental Platform',
    content:'A platform that empowers residents to report waste, track sanitation efforts and earn rewards for a cleaner Aba.',
    button:<div className='DpBtn flex flex-wrap gap-1'><span>React</span><span>TailwindCss</span><span>Maps Api</span><span>NodeJs</span></div>,      
  },
  // UI/UX
  
  // Automation
  {
    cat: "Automation",
    img:'/databot.png',
    title:'Woodie Databot',
    style:'text-blue-600 hover:text-blue-700',
    subTitle:'WhatsApp Commerce Bot',
    content:'An intelligent WhatsApp bot for airtime & data sales with AI automation, referrals, and seamless payment integration.',
    button:<div className='DpBtn flex flex-wrap gap-1'><span>Node.js</span><span>MongoDB</span><span>Gemini AI</span><span>Railway</span></div>,
  },
  
  // Graphics
 
  // Animation
   {
    cat: "Animation",
    img:'/MAde for the MOVE-Cover.jpg',
    title:'Made for the Move',
    style:'text-amber-600 hover:text-amber-700',
    subTitle:'Cinematic AI Product Advertisement',
    content:'A cinematic sneaker advertisement that follows one runner through constantly changing worlds — while the sneaker remains built for every move.',
    button:<div className='DpBtn flex flex-wrap gap-1'> <span>AI</span>  <span>Capcut</span>  <span>3D</span>  <span>VideoEditing</span> </div>
  },
  
  // Branding
  
  
]