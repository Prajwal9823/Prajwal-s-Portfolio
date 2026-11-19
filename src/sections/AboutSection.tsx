"use client";

import { portfolioConfig } from "@/data/portfolioConfig";
import {
  Compass,
  Code,
  Briefcase,
  Terminal,
  Camera,
  CheckCircle2,
  Calendar,
  Building,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  const { personal, leadership } = portfolioConfig;

  const milestones = [
    {
      period: "2023 — 2027",
      title: "IIT Hyderabad — Chemical Engineering & Systems",
      detail:
        "Building a rigorous foundational base in numerical methods, computational modeling, and algorithms. Cultivated a disciplined engineering mindset for solving multi-variable, constrained optimization problems.",
      badge: "CGPA 8.2 / 10",
      icon: GraduationCap,
    },
    {
      period: "2024 — Present",
      title: "Algorithmic Rigor & Continuous Problem-Solving",
      detail:
        "Surpassed 700+ LeetCode and 450+ GeeksforGeeks problems. Daily practice focused on time-space complexity optimization, dynamic programming, and robust edge-case handling.",
      badge: "1,150+ Solved",
      icon: Terminal,
    },
    {
      period: "2024 — 2025",
      title: "Full-Stack AI & Analytical Systems",
      detail:
        "Engineered agentic systems (Financial AI Agent combining yFinance, SEC EDGAR, Gemini LLM, and Docker) and data-intensive platforms (CodeCompass LeetCode analytics).",
      badge: "Full-Stack + AI/ML",
      icon: Code,
    },
    {
      period: "Dec 2025 — June 2026",
      title: "SDE Intern — ABFRL (TMRW House of Brands)",
      detail:
        "Shipped production storefront features and internal cloud tooling across national apparel brands including TIGC, UBRANO, and Bewakoof in Bengaluru.",
      badge: "Production Engineering",
      icon: Briefcase,
    },
  ];

  const engineeringPrinciples = [
    {
      title: "Pragmatic Architecture",
      desc: "I believe technology choices should solve specific user and business bottlenecks, not just follow trends.",
    },
    {
      title: "Deterministic Math Over Hallucination",
      desc: "In AI applications, quantitative indicators belong in Python/pandas; LLMs excel at synthesis, not arithmetic.",
    },
    {
      title: "Performance by Design",
      desc: "From client render cycles to API latency, measuring critical paths and eliminating waterfalls yields real conversion impact.",
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/[0.06] bg-[#0c0e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Identity & Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Curious by nature.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              Engineer by mindset.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Personal Narrative & Principles */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {personal.aboutStory.map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Engineering Principles */}
            <div className="p-6 rounded-2xl bg-[#121620]/90 border border-white/[0.08] space-y-4 shadow-xl">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>How I Approach Engineering Problems</span>
              </h3>

              <div className="grid grid-cols-1 gap-3.5">
                {engineeringPrinciples.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-white">
                        {item.title}:{" "}
                      </span>
                      <span className="text-sm text-slate-400">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond the Screen Section */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121620] to-[#181f2c] border border-white/[0.08] shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-white font-semibold text-base">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Camera className="w-4 h-4" />
                  </div>
                  <span>Beyond the Screen</span>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-white/[0.05] px-2.5 py-1 rounded-full border border-white/[0.06]">
                  {leadership.period}
                </span>
              </div>

              <div className="text-sm text-slate-300 leading-relaxed space-y-2">
                <p>
                  As <strong className="text-white font-medium">{leadership.role}</strong> at the{" "}
                  <strong className="text-white font-medium">{leadership.organization}</strong>, I led visual documentation, social media reels, and event storytelling for key campus initiatives like <span className="text-emerald-300 font-medium">Japan Day</span> and international <span className="text-emerald-300 font-medium">Project-Based Learning (PBL)</span> workshops.
                </p>
                <p className="text-slate-400 text-xs">
                  Working with cross-functional teams, international delegates, and tight event deadlines honed my visual communication, creative direction, and collaborative instincts.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Journey Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-28 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Engineering Timeline</span>
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Continuous Trajectory
                </span>
              </div>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-emerald-500 before:via-blue-500 before:to-slate-700">
                {milestones.map((m, idx) => {
                  const Icon = m.icon;
                  return (
                    <div key={idx} className="relative group">
                      {/* Timeline dot */}
                      <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-[#0c0e14] border-2 border-emerald-400 flex items-center justify-center group-hover:scale-125 transition-transform">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>

                      <div className="p-4 rounded-xl bg-[#121620] border border-white/[0.08] hover:border-emerald-500/30 transition-all">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-mono text-emerald-400 font-medium">
                            {m.period}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                            {m.badge}
                          </span>
                        </div>

                        <h4 className="text-sm font-semibold text-white tracking-tight">
                          {m.title}
                        </h4>

                        <p className="text-xs text-slate-400 leading-relaxed mt-1">
                          {m.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

