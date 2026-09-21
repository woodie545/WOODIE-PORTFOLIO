import React from "react";
import { NavLink } from "react-router-dom";
import {
  Play,
  Code2,
  PenTool,
  Bot,
  Lightbulb,
  Search,
  Settings2,
  Rocket,
  Sparkles,
  Users,
  RotateCcw,
  ArrowRight,
  X,
  Menu,
} from "lucide-react";
import { PROCESS_STEPS } from "../mapings";

const NAV_LINKS = ["Home", "Services", "Work", "About", "Process"];

const WHAT_WE_DO = [
  {
    icon: Play,
    color: "text-blue-500 bg-blue-600/30",
    title: "AI Animation & Video",
    description:
      "AI-powered animation, cinematic videos, and visual storytelling that brings ideas to life.",
  },
  {
    icon: Code2,
    color: "text-green-500 bg-green-600/30",
    title: "Web Development",
    description:
      "Modern, fast, and scalable websites and web applications for your business or brand.",
  },
  {
    icon: PenTool,
    color: "text-orange-500 bg-orange-600/30",
    title: "UI/UX & Graphic Design",
    description:
      "Clean, intuitive interfaces and bold visuals that make your brand stand out.",
  },
  {
    icon: Bot,
    color: "text-purple-500 bg-purple-600/30",
    title: "AI Automation & Chatbots",
    description:
      "Smart AI solutions to save time, improve workflow, and engage your audience.",
  },
];

const APPROACH_STEPS = [
  {
    icon: Search,
    color: "bg-blue-600/30 text-blue-500",
    title: "Discover",
    description: "We learn about your needs, goals, and ideas.",
  },
  {
    icon: Lightbulb,
    color: "bg-green600/30  text-green-500",
    title: "Design",
    description: "We turn ideas into visual concepts and blueprints.",
  },
  {
    icon: Code2,
    color: "bg-teal-600/30 text-teal-400",
    title: "Build",
    description: "We bring the design to life with clean, scalable code.",
  },
  {
    icon: Settings2,
    color: "bg-amber600/30  text-amber-500",
    title: "Integrate",
    description: "We add AI, automation and the right tools to make it work better.",
  },
  {
    icon: Rocket,
    color: "bg-purple-600/30 text-purple-500",
    title: "Deliver",
    description: "You get a polished, ready-to-use product — and ongoing support if needed.",
  },
];

const BELIEFS = [
  {
    icon: Lightbulb,
    color: "bg-green-600",
    title: "Ideas should be useful.",
    description: "Creativity should solve real problems.",
  },
  {
    icon: Users,
    color: "bg-blue-600",
    title: "Technology should feel human.",
    description: "Complex technology doesn't have to create a complicated experience.",
  },
  {
    icon: PenTool,
    color: "bg-orange-500",
    title: "Design should have purpose.",
    description: "Good visuals are important, but they should support the bigger idea.",
  },
  {
    icon: RotateCcw,
    color: "bg-purple-600",
    title: "Keep experimenting.",
    description: "We're constantly exploring new tools, technologies, and creative possibilities.",
  },
];

const TAGS = [
  { label: "Designer", color: "bg-blue-500" },
  { label: "Developer", color: "bg-orange-500" },
  { label: "Animator", color: "bg-green-500" },
  { label: "Creator", color: "bg-pink-500" },
];

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
        <span className="text-blue-500 font-black text-lg">W</span>
      </div>
      <div className="leading-tight">
        <div className="text-white font-bold text-sm tracking-wide">WOODIE</div>
        <div className="text-slate-400 text-[10px] tracking-widest">CONCEPTS</div>
      </div>
    </div>
  );
}

function Eyebrow({ number, label }) {
  return (
    <p className="text-slate-500 text-xs font-semibold tracking-wider mb-3">
      {number} — {label}
    </p>
  );
}

export default function About() {
  return (
    <div className="min-h-screen">
      

      {/* 01 — Hero */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-1 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* blob */}
            <div className="absolute -right-90 top-[-90%] w-80 h-80 bg-blue-600 mix-blend-screen rounded-full blur-[150px] opacity-50" />

            <div className="absolute right-90 bottom-[-90%] w-80 h-80 bg-blue-600 mix-blend-screen rounded-full blur-[150px] opacity-50" />
            
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              We turn ideas into <span className="text-blue-500">digital experiences.</span>
            </h1>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
              Woodie Concepts is a Creative Technology & AI Studio combining
              design, development, animation, and AI to build digital
              experiences that are useful, engaging, and built to move ideas
              forward.
            </p>
            <div className="flex items-center gap-6">
              <NavLink to="/start-project" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-medium px-5 py-3 rounded-lg">
                Start a Project <ArrowRight className="w-4 h-4" />
              </NavLink>
              <button className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <span className="w-9 h-9 rounded-full border border-slate-600 flex items-center justify-center">
                  <Play className="w-4 h-4" />
                </span>
                Watch Intro
              </button>
            </div>
          </div>

          <div className="relative  flex items-center justify-center mr-6">
          <img src="/aboutImg.png" alt="" />
            {/* <p
              className="absolute top-6 right-6 text-blue-400 text-lg italic leading-relaxed text-right"
              style={{ fontFamily: "cursive" }}
            >
              Ideas<br />Design<br />Code<br />Animate<br />Automate
            </p> */}
           
          </div>
        </div>
      </section>

      {/* 02 — Who we are */}
      <section className="border-b border-slate-800 bg-slate-900/40 z-5">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_1.1fr_0.6fr] gap-8 items-center">
          <div>
            <Eyebrow number="02" label="Who We Are" />
            <h2 className="text-3xl font-bold leading-tight mb-4">
              Built from creativity.<br />
              <span className="text-blue-500">Driven by technology.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Woodie Concepts started as a creative outlet and has evolved
              into a multidisciplinary studio working across digital design,
              web development, animation, and AI-powered solutions.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              We combine creative thinking with technology to help businesses
              and creators turn ideas into things people can actually see,
              use, and experience.
            </p>
            <div className="w-8 h-0.5 bg-blue-500" />
          </div>
          <div className="rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 aspect-[4/3] flex items-center justify-center">
            <span className="text-slate-600 text-sm">Workspace image</span>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-blue-800/20 flex items-center justify-center">
              <img src="/woodieLogo.png" alt="" className="w-9" />
            </div>
            <div>
              <p className="text-white font-bold text-sm tracking-wide">WOODIE</p>
              <p className="text-slate-400 text-[10px] tracking-widest">CONCEPTS</p>
            </div>
            <p className="text-slate-500 text-[10px] tracking-wider">
              CREATIVE TECHNOLOGY & AI STUDIO
            </p>
          </div>
        </div>
      </section>

      {/* 03 — What we do */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[1fr_1.6fr] gap-10 items-start">
          <div>
            <Eyebrow number="03" label="What We Do" />
            <h2 className="text-3xl font-bold leading-tight mb-4">
              We turn creativity into <span className="text-blue-500">real solutions.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              We offer a range of creative and technical services to help
              businesses and creators bring their ideas to life — in the most
              effective and innovative ways.
            </p>
            <div className="w-8 h-0.5 bg-blue-500" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {WHAT_WE_DO.map(({ icon: Icon, color, title, description }) => (
              <div
                key={title}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5"
              >
                <div
                  className={`w-10 h-10 rounded-lg  flex items-center justify-center mb-4 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Our approach */}
      <section className="border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6 py-16 ">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-center">
            <div>
              <Eyebrow number="04" label="Our Approach" />
              <h2 className="text-3xl font-bold leading-tight mb-4">
                More than just good looks.<br />
                <span className="text-blue-500">Real results.</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                We don't just make things look good — we think about how the
                final product works and how people interact with it. Our
                process keeps things simple, collaborative, and focused on
                your goals.
              </p>
            </div>
           <div className="flex flex-wrap lg:flex-nowrap items-start gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <React.Fragment key={step.step}>
                  <div className="flex-1 min-w-[110px] text-center">
                    <div
                      className={`w-12 h-12 mx-auto rounded-full ${step.color} flex items-center justify-center mb-3`}
                    >
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-semibold mb-1">
                      {step.step}. {step.title}
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-slate-600 mt-4 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 & 06 — Founder + Beliefs */}
      <section className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-[0.8fr_1.2fr_1fr] gap-10">
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 aspect-[3/4] flex items-center justify-center">
            <p
              className="absolute top-6 left-6 text-blue-400 text-lg italic leading-relaxed"
              style={{ fontFamily: "cursive" }}
            >
              Create<br />Build<br />Improve<br />Repeat
            </p>
            <span className="text-slate-600 text-sm">Portrait image</span>
          </div>

          <div>
            <Eyebrow number="05" label="The Person Behind Woodie Concepts" />
            <h2 className="text-2xl font-bold mb-4">Hi, I'm Cornelius.</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              I'm a digital artist, designer, developer, animator, and
              creative technologist behind Woodie Concepts.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              I enjoy working at the intersection of creativity and
              technology — whether that's designing an interface, building a
              website, creating an animated story, or using AI to solve a
              problem.
            </p>
            <div className="flex flex-wrap gap-2">
              {TAGS.map(({ label, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-300"
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow number="06" label="What We Believe" />
            <div className="space-y-5 mt-2">
              {BELIEFS.map(({ icon: Icon, color, title, description }) => (
                <div key={title} className="flex gap-3">
                  <div
                    className={`w-9 h-9 shrink-0 rounded-lg ${color} flex items-center justify-center`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{title}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07 — CTA */}
      {/* <section className="relative border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 -z-10" />
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <Eyebrow number="07" label="Let's Work Together" />
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
            Have an idea <span className="text-blue-400">worth building?</span>
          </h2>
          <p className="text-slate-300 text-sm mb-6">Let's turn it into something real.</p>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-medium px-5 py-3 rounded-full">
            Start a Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section> */}

      <section className='flex flex-col sm:flex-row bg-linear-to-r from-blue-400 via-blue-500 to-blue-800 rounded-xl p-2 gap-8 sm:gap-10 items-center justify-between mx-6 mt-9'>
        <div className="relative max-w-7xl  px-6 py-10">
          <Eyebrow number="07" label="Let's Work Together" />
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
            Have an idea <span className="text-blue-800">worth building?</span>
          </h2>
          <p className="text-gray-200 text-sm mb-6">Let's turn it into something real.</p>
          
        </div>
        <div className='flex items-center gap-8 sm:gap-15'>
          <NavLink to="/start-project" className='bg-white hover:bg-gray-50 text-blue-800 font-semibold rounded-sm w-40 sm:w-50 py-2 px-5 text-center'>
            Let's Talk
          </NavLink>
          <img src='/arrow.png' alt='' className='hidden sm:block w-28 lg:w-40 invert' />
        </div>
      </section>

      
    </div>
  );
}
