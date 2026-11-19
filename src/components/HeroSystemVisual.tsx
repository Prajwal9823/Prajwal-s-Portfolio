"use client";

import { useState } from "react";
import { Server, Cpu, Database, Cloud, Sparkles, Terminal, Activity, Layers, ShieldCheck } from "lucide-react";

interface SystemNode {
  id: string;
  label: string;
  category: "frontend" | "backend" | "ai" | "cloud" | "core";
  role: string;
  detail: string;
  metric: string;
  icon: typeof Server;
  activeColor: string;
}

export function HeroSystemVisual() {
  const [activeNodeId, setActiveNodeId] = useState<string>("gemini");
  const [filterMode, setFilterMode] = useState<"all" | "ecommerce" | "ai">("all");

  const nodes: SystemNode[] = [
    {
      id: "nextjs",
      label: "Next.js / Liquid",
      category: "frontend",
      role: "Client Storefront & Hydration",
      detail: "Multi-brand storefront rendering (TIGC, UBRANO) with dynamic Shopify Metaobjects",
      metric: "98/100 Core Web Vitals target",
      icon: Layers,
      activeColor: "border-emerald-500/80 text-emerald-300 shadow-emerald-500/20",
    },
    {
      id: "fastapi",
      label: "FastAPI Engine",
      category: "backend",
      role: "High-Throughput Microservice",
      detail: "Deterministic indicator computation (16+ metrics) & asynchronous data aggregation",
      metric: "Sub-50ms API response",
      icon: Server,
      activeColor: "border-blue-500/80 text-blue-300 shadow-blue-500/20",
    },
    {
      id: "gemini",
      label: "Gemini / NLP Node",
      category: "ai",
      role: "Reasoning & Report Synthesis",
      detail: "Synthesizes Python-grounded financial metrics and DistilBERT sentiment polarity",
      metric: "Grounded context synthesis",
      icon: Sparkles,
      activeColor: "border-amber-400/80 text-amber-300 shadow-amber-500/20",
    },
    {
      id: "s3cloud",
      label: "AWS S3 & Docker",
      category: "cloud",
      role: "Secure Cloud Object Infrastructure",
      detail: "Presigned URL client-to-cloud uploads & containerized Render/Vercel pipelines",
      metric: "Direct-to-S3 transfers",
      icon: Cloud,
      activeColor: "border-purple-400/80 text-purple-300 shadow-purple-500/20",
    },
    {
      id: "algo",
      label: "Algorithmic Engine",
      category: "core",
      role: "C++ Foundations & Optimization",
      detail: "Time & space complexity pruning applied across 1,150+ solved challenges",
      metric: "700+ LC · 450+ GFG",
      icon: Cpu,
      activeColor: "border-emerald-400/80 text-emerald-200 shadow-emerald-500/20",
    },
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div className="relative w-full rounded-2xl bg-[#0f131a]/95 border border-white/[0.1] shadow-2xl p-5 overflow-hidden">
      {/* Background technical grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Top Header bar with terminal dots */}
      <div className="relative flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 pl-2">
            system_architecture.prajwal.io
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">
            Node Mesh Online
          </span>
        </div>
      </div>

      {/* System Filter Toggles */}
      <div className="relative my-3 flex items-center justify-between gap-1 text-[11px] font-mono">
        <span className="text-slate-400 flex items-center gap-1">
          <Activity className="w-3 h-3 text-slate-400" />
          Topology View:
        </span>
        <div className="flex gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-white/[0.06]">
          <button
            onClick={() => setFilterMode("all")}
            className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
              filterMode === "all" ? "bg-emerald-500/20 text-emerald-300 font-semibold" : "text-slate-400 hover:text-white"
            }`}
          >
            All Nodes
          </button>
          <button
            onClick={() => setFilterMode("ecommerce")}
            className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
              filterMode === "ecommerce" ? "bg-emerald-500/20 text-emerald-300 font-semibold" : "text-slate-400 hover:text-white"
            }`}
          >
            E-Commerce
          </button>
          <button
            onClick={() => setFilterMode("ai")}
            className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
              filterMode === "ai" ? "bg-emerald-500/20 text-emerald-300 font-semibold" : "text-slate-400 hover:text-white"
            }`}
          >
            AI Pipeline
          </button>
        </div>
      </div>

      {/* Interactive Visual Node Diagram */}
      <div className="relative py-2 space-y-2">
        <div className="grid grid-cols-2 gap-2.5">
          {nodes.map((node) => {
            const isSelected = activeNodeId === node.id;
            const IconComponent = node.icon;
            const isDimmed =
              (filterMode === "ecommerce" && !["nextjs", "s3cloud", "algo"].includes(node.id)) ||
              (filterMode === "ai" && !["fastapi", "gemini", "algo"].includes(node.id));

            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`text-left p-3 rounded-xl border transition-all duration-200 relative group overflow-hidden ${
                  isSelected
                    ? `bg-[#18202d] ${node.activeColor} shadow-lg ring-1 ring-emerald-500/30`
                    : "bg-[#121620]/80 border-white/[0.08] hover:border-white/[0.2] hover:bg-[#161b26]"
                } ${isDimmed ? "opacity-35 grayscale" : "opacity-100"}`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-white/[0.05] text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {node.category}
                  </span>
                </div>

                <div className="font-semibold text-xs text-white tracking-tight">
                  {node.label}
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                  {node.role}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Data Flow Bar between nodes */}
        <div className="relative py-2 px-3 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Data Channel:</span>
            <span className="text-emerald-400 font-semibold">{activeNode.label}</span>
          </div>
          <span className="text-[10px] text-slate-400">Telemetry: {activeNode.metric}</span>
        </div>
      </div>

      {/* Active Node Detail Inspector Card */}
      <div className="relative mt-2 p-3.5 rounded-xl bg-[#141924] border border-white/[0.08]">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-semibold text-white tracking-tight">
              {activeNode.role}
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            {activeNode.metric}
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mt-1">
          {activeNode.detail}
        </p>

        {/* Live system parameters indicator */}
        <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-1">
            <Terminal className="w-3 h-3 text-slate-400" />
            <span>Target: Multi-platform production</span>
          </div>
          <span className="text-emerald-400/90">Validated in Production</span>
        </div>
      </div>
    </div>
  );
}

