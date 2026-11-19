"use client";

import { portfolioConfig } from "@/data/portfolioConfig";
import {
  Users,
  Camera,
  Globe2,
  Video,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export function LeadershipSection() {
  const { leadership } = portfolioConfig;

  return (
    <section id="leadership" className="py-24 relative bg-[#0b0e14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Leadership & Team Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Communication & Visual{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Storytelling.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Bridging technical depth with creative media direction, cross-functional collaboration, and institutional representation.
          </p>
        </div>

        {/* Highlight Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#111622] to-[#161c2a] border border-white/[0.08] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 font-semibold">
                  Campus Leadership
                </span>
                <span className="text-xs font-mono text-slate-400 bg-white/[0.05] px-2.5 py-0.5 rounded-full">
                  {leadership.period}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {leadership.role}
              </h3>
              <div className="text-sm font-semibold text-emerald-300">
                {leadership.organization}
              </div>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed pt-1">
                {leadership.summary}
              </p>
            </div>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-black/40 border border-white/[0.06] text-xs font-mono text-slate-400 shrink-0">
              <Globe2 className="w-4 h-4 text-blue-400" />
              <span>International Delegations & Events</span>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            {leadership.highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0c0f16] border border-white/[0.06] hover:border-blue-500/30 transition-all space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                  <Camera className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

