"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioConfig } from "@/data/portfolioConfig";
import { Download, Menu, X, ArrowUpRight, Code2 } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "experience", "projects", "skills", "problem-solving", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Problem Solving", href: "#problem-solving", id: "problem-solving" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0c10]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-400/60 transition-all">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {portfolioConfig.personal.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
                IIT Hyderabad · 2027
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#121620]/70 border border-white/[0.07] px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={portfolioConfig.personal.resumePath}
              download="Prajwal_Ramteke_Resume.pdf"
              className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-slate-800 transition-all group"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-all shadow-sm shadow-emerald-500/20 hover:shadow-emerald-500/40"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-4">
          <div className="bg-[#121620] border border-white/[0.1] rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                    : "text-slate-300 hover:bg-white/[0.05]"
                }`}
              >
                <span>{link.name}</span>
                <span className="text-[10px] text-slate-500 font-mono">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-white/[0.08] flex flex-col gap-2">
              <a
                href={portfolioConfig.personal.resumePath}
                download="Prajwal_Ramteke_Resume.pdf"
                className="flex items-center justify-center gap-2 text-xs font-medium py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-200"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-lg bg-emerald-500 text-slate-950"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

