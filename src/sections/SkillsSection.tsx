"use client";

import { useState } from "react";
import { portfolioConfig } from "@/data/portfolioConfig";
import {
  Code2,
  Cpu,
  Layers,
  Cloud,
  Database,
  Terminal,
  Server,
  Sparkles,
} from "lucide-react";

export function SkillsSection() {
  const { skills } = portfolioConfig;
  const [activeTab, setActiveTab] = useState<"languages" | "frameworks" | "tools" | "foundations">("languages");

  const categories = [
    { id: "languages", label: "Languages", icon: Code2, count: skills.languages.length },
    { id: "frameworks", label: "Frameworks & Libraries", icon: Layers, count: skills.frameworks.length },
    { id: "tools", label: "Cloud, Tools & Infra", icon: Cloud, count: skills.toolsAndCloud.length },
    { id: "foundations", label: "Core CS & AI Foundations", icon: Cpu, count: skills.coreFoundations.length },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#090b10] border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Skills Grounded in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-300 to-teal-200">
                Real Application.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Organized by functional architecture. Every skill listed reflects hands-on code shipped in production or verified in open-source systems.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/[0.08]">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20"
                    : "bg-[#121620] text-slate-300 hover:text-white border border-white/[0.06] hover:border-white/[0.15]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white/[0.1]">
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeTab === "languages" &&
            skills.languages.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#11151f] border border-white/[0.06] hover:border-blue-500/40 hover:bg-[#151b27] transition-all group shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.name}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Core</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}

          {activeTab === "frameworks" &&
            skills.frameworks.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#11151f] border border-white/[0.06] hover:border-emerald-500/40 hover:bg-[#151b27] transition-all group shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.name}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Production</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}

          {activeTab === "tools" &&
            skills.toolsAndCloud.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#11151f] border border-white/[0.06] hover:border-purple-500/40 hover:bg-[#151b27] transition-all group shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.name}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Infra / Tool</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}

          {activeTab === "foundations" &&
            skills.coreFoundations.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#11151f] border border-white/[0.06] hover:border-amber-500/40 hover:bg-[#151b27] transition-all group shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.name}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">CS Foundation</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.note}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

