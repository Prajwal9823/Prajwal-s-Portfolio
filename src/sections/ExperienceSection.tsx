"use client";

import { useState } from "react";
import { portfolioConfig } from "@/data/portfolioConfig";
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  ExternalLink,
  Filter,
  Zap,
  CloudUpload,
  ShoppingBag,
  CreditCard,
  ChevronRight,
  Layers,
  ArrowRight,
  Code2,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export function ExperienceSection() {
  const { experience } = portfolioConfig;
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);

  const activeCase = experience.coreContributions[selectedCaseIndex];

  // Icons mapped to core contributions
  const contributionIcons = [Filter, Zap, CloudUpload, ShoppingBag, CreditCard];

  return (
    <section id="experience" className="py-24 relative bg-[#090b10] border-t border-white/[0.06]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Production Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Engineering at Scale:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-300">
                TMRW House of Brands
              </span>
            </h2>
          </div>

          <div className="text-sm font-mono text-slate-400">
            Aditya Birla Fashion and Retail Ltd. (ABFRL)
          </div>
        </div>

        {/* Company Overview & Brand Portfolio Bar */}
        <div className="p-6 rounded-2xl bg-[#11151f] border border-white/[0.08] mb-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xl font-bold text-white tracking-tight">
                  {experience.company}
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {experience.role}
                </span>
              </div>
              <p className="text-sm text-slate-300">
                {experience.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Active Brands Showcase */}
          <div className="pt-5 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Deployed Across:
            </span>
            {experience.brands.map((brand, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-[#18202e] border border-white/[0.08] text-xs font-medium text-slate-200"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Deep Dive Case Study: Interactive Architectural Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Navigation Sidebar for Contributions */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-2 mb-2 flex items-center justify-between">
              <span>Core Engineering Initiatives</span>
              <span className="text-emerald-400 font-semibold">05 Modules</span>
            </div>

            {experience.coreContributions.map((item, index) => {
              const Icon = contributionIcons[index % contributionIcons.length];
              const isSelected = selectedCaseIndex === index;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedCaseIndex(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start justify-between gap-3 group ${
                    isSelected
                      ? "bg-[#161d2a] border-emerald-500/50 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/20"
                      : "bg-[#0e121a] border-white/[0.06] hover:bg-[#141a25] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-white/[0.05] text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-emerald-400 tracking-tight">
                        {item.tag}
                      </div>
                      <div className="text-sm font-semibold text-white mt-0.5">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 mt-2 transition-transform ${
                      isSelected
                        ? "text-emerald-400 translate-x-1"
                        : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Case Study Detail Panel */}
          <div className="lg:col-span-8 bg-[#111622] rounded-2xl border border-white/[0.08] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    {activeCase.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
                    {activeCase.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-white/[0.05] px-2.5 py-1 rounded-md border border-white/[0.06]">
                  Case Study 0{selectedCaseIndex + 1}
                </span>
              </div>

              {/* Problem, Implementation, Outcome Grid */}
              <div className="space-y-4">
                {/* Problem Statement */}
                <div className="p-4 rounded-xl bg-[#0b0e14] border border-white/[0.06] space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    The Engineering Challenge
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeCase.problem}
                  </p>
                </div>

                {/* Technical Implementation */}
                <div className="p-4 rounded-xl bg-[#0b0e14] border border-white/[0.06] space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Architectural Solution & Implementation
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeCase.implementation}
                  </p>
                </div>

                {/* Engineering Outcome */}
                <div className="p-4 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Production Outcome
                  </span>
                  <p className="text-sm text-emerald-100/90 leading-relaxed">
                    {activeCase.outcome}
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Technologies Applied:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCase.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#182130] border border-white/[0.08] text-xs font-mono text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Production Contributions Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Additional Storefront & Operational Enhancements</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Across TIGC, UBRANO & Bewakoof
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experience.compactContributions.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0e121a] border border-white/[0.06] hover:border-white/[0.15] transition-all group"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {item.impactArea}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">#{idx + 1}</span>
                </div>

                <h4 className="text-sm font-semibold text-white tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

