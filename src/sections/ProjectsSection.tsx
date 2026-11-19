"use client";

import { useState } from "react";
import { portfolioConfig } from "@/data/portfolioConfig";
import {
  FinancialAgentPreview,
  CodeCompassPreview,
  BertSentimentPreview,
  DcganInteractivePreview,
} from "@/components/ProjectPreviews";
import {
  Code,
  ExternalLink,
  Layers,
  ArrowRight,
  Sparkles,
  Cpu,
  BarChart2,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export function ProjectsSection() {
  const { projects } = portfolioConfig;
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id);

  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section id="projects" className="py-24 relative bg-[#0b0e14] border-t border-white/[0.06]">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <Code className="w-3.5 h-3.5" />
              <span>Architected & Built</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Featured Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                Showcase.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Full-stack platforms and AI/ML architectures designed for grounded reliability, deterministic computing, and responsive user experiences.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-white/[0.08]">
          {projects.map((proj, idx) => {
            const isSelected = selectedProjectId === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20"
                    : "bg-[#121620] text-slate-300 hover:text-white border border-white/[0.06] hover:border-white/[0.15]"
                }`}
              >
                <span className="font-mono text-[10px] opacity-70">0{idx + 1}.</span>
                <span>{proj.title.split("—")[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Comprehensive Showcase Card */}
        <div className="rounded-3xl bg-[#10141d] border border-white/[0.08] shadow-2xl p-6 sm:p-10 space-y-10">
          {/* Top Title & Links Header */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {activeProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400 bg-white/[0.05] px-2.5 py-0.5 rounded-full border border-white/[0.06]">
                  {activeProject.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                {activeProject.tagline}
              </p>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-xs font-medium text-slate-200 hover:text-white hover:border-emerald-500/40 transition-all group"
                >
                  <GithubIcon className="w-4 h-4 text-emerald-400" />
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
                </a>
              )}
            </div>
          </div>

          {/* Interactive Simulation / Live Preview Component */}
          <div>
            <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Interactive System Preview
              </span>
              <span>Live Demonstration</span>
            </div>

            {activeProject.previewType === "financial" && <FinancialAgentPreview />}
            {activeProject.previewType === "codecompass" && <CodeCompassPreview />}
            {activeProject.previewType === "bert" && <BertSentimentPreview />}
            {activeProject.previewType === "gan" && <DcganInteractivePreview />}
          </div>

          {/* Architecture Pipeline Flow Diagram */}
          <div className="p-6 rounded-2xl bg-[#0c0f16] border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Workflow className="w-4 h-4 text-blue-400" />
              <span>Dataflow & Architectural Pipeline</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {activeProject.architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#131722] border border-white/[0.06] relative group hover:border-emerald-500/30 transition-colors"
                >
                  <div className="text-[11px] font-mono text-emerald-400 font-semibold mb-1">
                    {step.label}
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#0e121a] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                The Problem
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeProject.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e121a] border border-white/[0.06] space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Engineering Solution
              </span>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeProject.solution}
              </p>
            </div>
          </div>

          {/* Technical Highlights & Key Decisions */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
              Key Engineering Decisions & Implementations:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeProject.technicalHighlights.map((hl, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#121620] border border-white/[0.05]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span className="text-xs text-slate-300 leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-2">
              Technology Stack:
            </span>
            {activeProject.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-lg bg-[#151b27] border border-white/[0.08] text-xs font-mono text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
