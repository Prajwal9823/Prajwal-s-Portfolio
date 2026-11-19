"use client";

import { portfolioConfig } from "@/data/portfolioConfig";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export function EducationSection() {
  const { education, certifications } = portfolioConfig;

  return (
    <section id="education" className="py-24 relative bg-[#090b10] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Education & Verified{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Specializations.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Strong foundations in computational engineering and mathematical modeling alongside rigorous self-directed specializations in Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Formal Education Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-2 mb-2">
              Academic Degrees & Diplomas
            </div>

            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#11151f] border border-white/[0.08] hover:border-emerald-500/30 transition-all shadow-xl"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    {item.grade}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.degree}
                </h3>
                <div className="text-xs font-mono text-slate-300 mt-0.5">
                  {item.institution}
                </div>

                {item.description && (
                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                )}

                {item.coursework && (
                  <div className="mt-4 pt-3 border-t border-white/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Key Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded bg-[#18202e] border border-white/[0.06] text-[11px] text-slate-300 font-mono"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Certifications & Continuous Learning Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-2 mb-2">
              Verified Specializations & Training
            </div>

            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#11151f] border border-white/[0.08] hover:border-blue-500/30 transition-all shadow-xl"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.05]">
                    {cert.year}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white tracking-tight">
                  {cert.title}
                </h4>
                <div className="text-xs font-mono text-blue-300 mt-0.5">
                  {cert.issuer}
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {cert.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-[#141a26] text-[10px] text-slate-300 font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

