"use client";

import Link from "next/link";
import { portfolioConfig } from "@/data/portfolioConfig";
import { ArrowUp, Code2, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#06070a] border-t border-white/[0.08] text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Note */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-semibold tracking-tight text-sm">
                {portfolioConfig.personal.name}
              </span>
              <span className="text-slate-500 pl-2">
                — IIT Hyderabad ('27)
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#problem-solving" className="hover:text-emerald-400 transition-colors">Problem Solving</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-400 hover:text-white hover:border-white/[0.2] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
          <div>
            Built with Next.js 15, TypeScript & Tailwind CSS. Hosted on Vercel.
          </div>
          <div>
            © {new Date().getFullYear()} Prajwal Ramteke. All verified credentials documented.
          </div>
        </div>
      </div>
    </footer>
  );
}

