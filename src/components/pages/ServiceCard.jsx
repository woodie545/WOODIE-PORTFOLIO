import React from 'react'
import { NavLink } from 'react-router-dom'
import { Check, ArrowRight } from "lucide-react";

export default function ServiceCard({ icon: Icon, iconBg, title, tagline, description, items, slug }) {
  return (
    <div className="bg-gray-800/10 border border-gray-600 rounded-xl p-6 flex flex-col h-full hover:border-slate-700 transition-colors">
      <div className={`w-11 h-11 rounded-lg ${iconBg} flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
      <p className="text-slate-400 text-sm mb-3">{tagline}</p>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
            <Check className="w-4 h-4 text-green-500 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      <NavLink
        to={`/services/${slug}`}
        className="mt-auto inline-flex items-center gap-1 text-blue-500 text-sm font-medium hover:text-blue-400 transition-colors"
      >
        Learn More <ArrowRight className="w-4 h-4" />
      </NavLink>
    </div>
  );
}
