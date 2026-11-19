"use client";

import { useState } from "react";
import { portfolioConfig } from "@/data/portfolioConfig";
import {
  Mail,
  Copy,
  Check,
  Phone,
  Download,
  ArrowUpRight,
  Terminal,
  Sparkles,
  MapPin,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export function ContactSection() {
  const { personal, socials } = portfolioConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#08090d] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Direct Contact Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Let's Build Together</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Have an interesting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                  problem to solve?
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                I'm always interested in building meaningful products, exploring new technologies, and collaborating with people who enjoy solving challenging engineering problems.
              </p>
            </div>

            {/* Email Action Bar with Direct Copy */}
            <div className="p-4 rounded-2xl bg-[#11151f] border border-white/[0.08] shadow-xl space-y-3 max-w-xl">
              <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Primary Engineering Inquiries:</span>
                <span className="text-emerald-400">Direct Delivery</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 px-4 py-3 rounded-xl bg-[#171d2a] border border-white/[0.08] text-sm font-mono text-white hover:text-emerald-300 hover:border-emerald-500/40 transition-colors truncate"
                  title="Click to compose email"
                >
                  {personal.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-all shadow-md shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${personal.phone}`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#121620] hover:bg-[#18202d] border border-white/[0.08] hover:border-blue-500/40 text-xs font-medium text-slate-200 transition-all"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>{personal.phoneDisplay}</span>
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#121620] hover:bg-[#18202d] border border-white/[0.08] hover:border-blue-500/40 text-xs font-medium text-slate-200 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#121620] hover:bg-[#18202d] border border-white/[0.08] hover:border-emerald-500/40 text-xs font-medium text-slate-200 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={personal.resumePath}
                download="Prajwal_Ramteke_Resume.pdf"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#121620] hover:bg-[#18202d] border border-white/[0.08] hover:border-emerald-500/40 text-xs font-medium text-slate-200 transition-all"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive System Terminal Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0f131a] border border-white/[0.08] p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono text-white">prajwal@terminal:~$</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STATUS: ONLINE
                </span>
              </div>

              {/* Console logs */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="text-slate-400">
                  <span className="text-emerald-400">$</span> fetch_candidate_profile --name "Prajwal Ramteke"
                </div>

                <div className="p-3 rounded-xl bg-[#0a0c10] border border-white/[0.05] space-y-1.5 text-slate-300 text-[11px]">
                  <div>
                    <span className="text-slate-500">Degree:</span> B.Tech Chemical Engineering (IIT Hyderabad, '27)
                  </div>
                  <div>
                    <span className="text-slate-500">CGPA:</span> 8.2 / 10
                  </div>
                  <div>
                    <span className="text-slate-500">Industry Experience:</span> SDE Intern @ TMRW House of Brands (ABFRL)
                  </div>
                  <div>
                    <span className="text-slate-500">Platforms Deployed:</span> TIGC, UBRANO, Bewakoof
                  </div>
                  <div>
                    <span className="text-slate-500">Algorithmic Base:</span> 700+ LeetCode · 450+ GeeksforGeeks
                  </div>
                  <div>
                    <span className="text-slate-500">Primary Core:</span> Next.js · FastAPI · Python · TypeScript · Docker
                  </div>
                </div>

                <div className="text-slate-400">
                  <span className="text-emerald-400">$</span> echo $STATUS
                </div>
                <div className="text-emerald-300 text-[11px]">
                  &gt; Ready for Software Engineering Roles & Summer 2026 Opportunities.
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>India (IST / UTC+5:30)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Prompt Response Rate: High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
