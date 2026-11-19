"use client";

import { portfolioConfig } from "@/data/portfolioConfig";
import { HeroSystemVisual } from "@/components/HeroSystemVisual";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Sparkles,
  GraduationCap,
  Briefcase,
  Layers,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function HeroSection() {
  const { personal, socials, stats } = portfolioConfig;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Background radial glows - subtle, elegant, charcoal/emerald/slate */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Personal Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open for SDE Roles & Summer 2026</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-mono">
                <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                <span>IIT Hyderabad · 2027</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-slate-300 text-xs font-mono">
                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                <span>SDE Intern @ TMRW Brands</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Engineering ideas into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                  impactful software.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                I'm <span className="text-white font-medium">{personal.name}</span> — a software engineer at the intersection of full-stack systems, applied AI, and algorithmic problem-solving. I build software that makes complex architectures feel simple, robust, and fast.
              </p>
            </div>

            {/* Quick Experience & Problem-Solving Metrics strip */}
            <div className="grid grid-cols-3 gap-3 py-2 max-w-lg border-y border-white/[0.08]">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                  {stats.totalProblemsSolved}+
                </div>
                <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                  Problems Solved
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                  {stats.productionBrands}
                </div>
                <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                  Production Brands
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-blue-400">
                  {stats.cgpa} / 10
                </div>
                <div className="text-[11px] text-slate-400 font-mono uppercase tracking-wider">
                  IIT Hyderabad CGPA
                </div>
              </div>
            </div>

            {/* CTA Buttons & Social Proof */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141924] hover:bg-[#1a2130] border border-white/[0.12] hover:border-emerald-500/40 text-slate-200 hover:text-white font-medium text-sm transition-all hover:-translate-y-0.5"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>

              <a
                href={personal.resumePath}
                download="Prajwal_Ramteke_Resume.pdf"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-transparent hover:bg-white/[0.05] border border-slate-700/80 text-slate-300 hover:text-white font-medium text-sm transition-all"
                title="Download verified 1-page PDF Resume"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Resume (PDF)</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive System Architecture Matrix Visual */}
          <div className="lg:col-span-5">
            <HeroSystemVisual />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="relative mt-12 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="group inline-flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Explore Story</span>
          <div className="w-5 h-8 rounded-full border border-slate-700 group-hover:border-emerald-500/50 flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-emerald-400 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
