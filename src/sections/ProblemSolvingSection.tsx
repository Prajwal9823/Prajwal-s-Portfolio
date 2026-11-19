"use client";

import { portfolioConfig } from "@/data/portfolioConfig";
import {
  Terminal,
  ExternalLink,
  Flame,
  Award,
  Code2,
  TrendingUp,
  Brain,
  CheckCircle,
} from "lucide-react";

export function ProblemSolvingSection() {
  const { problemSolving, stats, socials } = portfolioConfig;

  return (
    <section id="problem-solving" className="py-24 relative bg-[#0b0e14] border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <Brain className="w-3.5 h-3.5" />
              <span>Algorithmic Discipline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {problemSolving.headline}
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            {problemSolving.subtext}
          </p>
        </div>

        {/* Big Prominent Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* LeetCode Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111622] border border-white/[0.08] hover:border-amber-500/40 transition-all shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                Platform 01
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
              {stats.leetcodeSolved}+
            </div>
            <div className="text-sm font-semibold text-amber-300 mt-1">
              LeetCode Problems Solved
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              Extensive focus on Dynamic Programming, Graph Traversals (Dijkstra, BFS/DFS), Trees, and Backtracking.
            </p>

            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <a
                href={socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-amber-300 transition-colors"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GeeksforGeeks Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#111622] border border-white/[0.08] hover:border-emerald-500/40 transition-all shadow-xl group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                Platform 02
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-white tracking-tight">
              {stats.geeksforgeeksSolved}+
            </div>
            <div className="text-sm font-semibold text-emerald-300 mt-1">
              GeeksforGeeks Problems Solved
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              Deep foundational work in data structures, STL containers, mathematical modeling, and algorithmic paradigms.
            </p>

            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <a
                href={socials.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-emerald-300 transition-colors"
              >
                <span>View GFG Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Cumulative Algorithmic Total */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#121824] to-[#172030] border border-white/[0.08] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Flame className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                  Cumulative Total
                </span>
              </div>

              <div className="text-4xl sm:text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 tracking-tight">
                {stats.totalProblemsSolved}+
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                Total Solved Challenges
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mt-2">
                Daily, deliberate practice sharpening algorithmic reasoning for engineering low-latency systems.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Active Contest & Practice Regimen</span>
            </div>
          </div>
        </div>

        {/* Topic Breakdown Distribution */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#11151f] border border-white/[0.08] shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.08]">
            <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Algorithmic Domain Focus & Practice Volume</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Categorical Breakdown
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemSolving.topicBreakdown.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#0c0f16] border border-white/[0.06] space-y-2 hover:border-white/[0.15] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">
                    {item.topic}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    {item.solvedEstimate}
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"
                    style={{ width: `${item.ratio * 2.5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#0e121a] border border-white/[0.06] text-xs text-slate-300 leading-relaxed font-mono">
            <span className="text-emerald-400 font-semibold">Engineering Takeaway: </span>
            Strong algorithmic intuition directly prevents accidental O(N²) bottlenecks in backend API services, improves cache locality, and ensures data structures fit the problem space cleanly.
          </div>
        </div>
      </div>
    </section>
  );
}

