import React from "react";
import { NavLink } from "react-router-dom";
import { Code2, PenTool, Clapperboard, Bot, Sparkles, Gem, Search, FileText, Wrench, SlidersHorizontal, Rocket, Check,  ArrowRight,  Zap,  RadioTower,  Users, Menu, } from "lucide-react";
import { PROCESS_STEPS } from "../mapings";
import { SERVICES_DATA, PACKAGES } from "../../data/services";
import ServiceCard from "./ServiceCard";

const NAV_LINKS = ["Home", "Services", "Work", "About", "Process", "Blog"];



export default function Service() {
  return (
    <div className="min-h-screen  text-white">

      {/* Hero */}
      <section className="border-b border-slate-800 relative overflow-hidden">
        {/* <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-xs text-slate-500 mb-6">Home &nbsp;→&nbsp; Services</div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-500 text-sm font-semibold mb-3">What We Do</p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
                Creative Solutions for a{" "}
                <span className="text-blue-500">Smarter,</span>{" "}
                <span className="text-green-500">Brighter</span> Future.
              </h1>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                We help businesses, creators and organizations turn their ideas
                into powerful digital experiences. From design to development,
                AI to automation — we build solutions that make an impact.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Zap className="w-4 h-4 text-blue-500" />
                  Creative Expertise
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <RadioTower className="w-4 h-4 text-blue-500" />
                  Modern Technology
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Users className="w-4 h-4 text-blue-500" />
                  Client-Focused
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 aspect-[4/3] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-slate-800 flex items-center justify-center mb-4">
                  <span className="text-blue-500 font-black text-2xl">W</span>
                </div>
                <p className="text-white font-bold tracking-wide">WOODIE CONCEPTS</p>
                <p className="text-slate-400 text-sm mt-1">Imagine. Create. Build.</p>
              </div>
            </div>

          </div>
        </div> */}

       <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden">
            <img
              src="/servicesHero.png"
              alt="services hero"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-[#0b0e13c3] to-[#0B0E13]" />
            

               <div className="absolute inset-0 flex flex-col items-center justify-center max-w-xl text-center mx-auto px-6 py-16">
              <p className="text-blue-500 text-sm font-semibold mb-3">What We Do</p>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
                Creative <span className="text-blue-500">Technology </span> for <span className="text-green-500">Ideas</span>  That Matter.
                
              </h1>
              <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
                We help businesses, creators and organizations turn their ideas
                into powerful digital experiences. From design to development,
                AI to automation — we build solutions that make an impact.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Zap className="w-4 h-4 text-blue-500" />
                  Creative Expertise
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <RadioTower className="w-4 h-4 text-blue-500" />
                  Modern Technology
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Users className="w-4 h-4 text-blue-500" />
                  Client-Focused
                </div>
              </div>
            </div>
       </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-blue-500 text-sm font-semibold mb-2">Our Services</p>
            <h2 className="text-3xl font-bold">Explore Our Core Services</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-sm">
            We offer a range of creative and technical services to help you
            build, grow and stand out in the digital world.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              iconBg={service.iconBg}
              title={service.title}
              tagline={service.tagline}
              description={service.description}
              items={service.includes}
              slug={service.slug}
            />
          ))}
        </div>
      </section>

      {/* Popular packages */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="mb-10">
          <p className="text-blue-500 text-sm font-semibold mb-2">Flagship Packages</p>
          <h2 className="text-3xl font-bold">Popular Packages</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-gray-800/10 border rounded-xl p-6 flex flex-col h-full transition-colors ${
                pkg.featured ? 'border-blue-500' : 'border-gray-600 hover:border-slate-700'
              }`}
            >
              {pkg.tag && (
                <span
                  className={`w-fit text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                    pkg.featured ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 border border-gray-700'
                  }`}
                >
                  {pkg.tag}
                </span>
              )}
              <h3 className="text-white font-semibold text-lg">{pkg.name}</h3>
              <p className="text-blue-500 font-bold text-2xl my-2">{pkg.price}</p>
              <ul className="space-y-2 my-4">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <NavLink
                to="/start-project"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-gray-800/10 border border-gray-600 rounded-2xl p-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-center">
            <div>
              <p className="text-blue-500 text-sm font-semibold mb-2">Our Process</p>
              <h2 className="text-2xl font-bold mb-3">From Idea to Impact</h2>
              <p className="text-slate-400 text-sm mb-6">
                We keep things simple, clear and collaborative. Here's how we
                turn your ideas into reality.
              </p>
              <button className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 transition-colors text-white text-sm font-medium px-4 py-2 rounded-lg">
                Learn More About Our Process <ArrowRight className="w-4 h-4" />
              </button>
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

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-blue-700 via-blue-700 to-green-600 p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-blue-200 text-sm font-semibold mb-2">
              Ready to Get Started?
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Let's Build Something Amazing Together.
            </h2>
            <p className="text-blue-100 text-sm">
              Have a project in mind? Let's turn your ideas into reality.
            </p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
            <NavLink to="/start-project" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors">
              Start a Project <ArrowRight className="w-4 h-4" />
            </NavLink>
            <span className="text-blue-100 text-xs">or contact us on WhatsApp</span>
          </div>
        </div>
      </section>

     
    </div>
  );
}
