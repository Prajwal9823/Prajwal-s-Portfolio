"use client";

import { useState } from "react";
import {
  TrendingUp,
  BarChart3,
  Search,
  Cpu,
  Sparkles,
  ArrowRight,
  Database,
  CheckCircle,
  Clock,
  Layers,
  Sliders,
  FileText,
} from "lucide-react";
import { TwitterIcon } from "@/components/SocialIcons";

/* -------------------------------------------------------------
   1. Financial AI Agent Preview Component
------------------------------------------------------------- */
export function FinancialAgentPreview() {
  const [selectedQuery, setSelectedQuery] = useState<"aapl" | "nvda" | "sec">("aapl");

  const queryData = {
    aapl: {
      ticker: "AAPL",
      price: "$224.23",
      change: "+1.42%",
      sentiment: "Bullish (VADER: +0.68)",
      indicators: {
        sma50: "Above 50-day SMA ($218.40)",
        rsi14: "58.2 (Neutral-Positive)",
        macd: "Bullish Crossover",
        volatility: "18.4% (Low-Mid)",
      },
      secInsight: "10-K Section 1A highlights hardware supply diversification and services margin growth.",
      llmSummary:
        "Deterministic indicators reflect healthy momentum above key moving averages with subdued volatility. News sentiment is reinforced by record Services revenue.",
    },
    nvda: {
      ticker: "NVDA",
      price: "$128.50",
      change: "+3.18%",
      sentiment: "Strong Bullish (VADER: +0.82)",
      indicators: {
        sma50: "Above 50-day SMA ($119.80)",
        rsi14: "66.4 (Approaching Overbought)",
        macd: "Strong Upward Expansion",
        volatility: "42.1% (High Beta)",
      },
      secInsight: "Filing notes hyperscaler AI infrastructure commitments and datacenter demand backlog.",
      llmSummary:
        "Elevated momentum accompanied by higher annualized volatility. Technicals confirm institutional accumulation post-datacenter guidance.",
    },
    sec: {
      ticker: "MSFT",
      price: "$415.80",
      change: "+0.85%",
      sentiment: "Neutral-Bullish (VADER: +0.54)",
      indicators: {
        sma50: "Consolidating near 50-day SMA",
        rsi14: "51.0 (Neutral)",
        macd: "Flattening convergence",
        volatility: "19.8% (Stable)",
      },
      secInsight: "10-K extracts emphasize capital expenditures in Azure cloud capacity and OpenAI compute infrastructure.",
      llmSummary:
        "Fundamental filings indicate long-term enterprise AI lock-in. Technical consolidation provides range-bound stability.",
    },
  };

  const active = queryData[selectedQuery];

  return (
    <div className="rounded-2xl bg-[#0d1017] border border-white/[0.08] p-5 space-y-4 shadow-xl">
      {/* Simulation query selector */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs font-mono text-slate-300">Live Query Sandbox:</span>
        </div>
        <div className="flex gap-1 bg-[#141924] p-1 rounded-lg border border-white/[0.06]">
          <button
            onClick={() => setSelectedQuery("aapl")}
            className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
              selectedQuery === "aapl" ? "bg-emerald-500/20 text-emerald-300 font-semibold" : "text-slate-400 hover:text-white"
            }`}
          >
            Analyze AAPL
          </button>
          <button
            onClick={() => setSelectedQuery("nvda")}
            className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
              selectedQuery === "nvda" ? "bg-emerald-500/20 text-emerald-300 font-semibold" : "text-slate-400 hover:text-white"
            }`}
          >
            NVDA Indicators
          </button>
          <button
            onClick={() => setSelectedQuery("sec")}
            className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
              selectedQuery === "sec" ? "bg-emerald-500/20 text-emerald-300 font-semibold" : "text-slate-400 hover:text-white"
            }`}
          >
            MSFT 10-K Risks
          </button>
        </div>
      </div>

      {/* Structured Output Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="p-3 rounded-xl bg-[#121622] border border-white/[0.06]">
          <div className="text-[10px] font-mono text-slate-400 uppercase">Ticker / Price</div>
          <div className="text-base font-bold font-mono text-white mt-0.5">
            {active.ticker} <span className="text-xs text-emerald-400 font-normal">{active.price}</span>
          </div>
          <div className="text-[10px] text-emerald-400 font-mono mt-0.5">{active.change} 24h</div>
        </div>

        <div className="p-3 rounded-xl bg-[#121622] border border-white/[0.06]">
          <div className="text-[10px] font-mono text-slate-400 uppercase">News Sentiment</div>
          <div className="text-xs font-semibold text-white mt-1 line-clamp-1">{active.sentiment}</div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">VADER Scored</div>
        </div>

        <div className="p-3 rounded-xl bg-[#121622] border border-white/[0.06]">
          <div className="text-[10px] font-mono text-slate-400 uppercase">RSI (14) Indicator</div>
          <div className="text-xs font-semibold font-mono text-emerald-300 mt-1">{active.indicators.rsi14}</div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">Python / Pandas</div>
        </div>

        <div className="p-3 rounded-xl bg-[#121622] border border-white/[0.06]">
          <div className="text-[10px] font-mono text-slate-400 uppercase">MACD Trend</div>
          <div className="text-xs font-semibold text-blue-300 mt-1">{active.indicators.macd}</div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">Deterministic Math</div>
        </div>
      </div>

      {/* SEC Filing & LLM Synthesized Brief */}
      <div className="p-3.5 rounded-xl bg-[#131824] border border-white/[0.06] space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300">
          <FileText className="w-3.5 h-3.5" />
          <span>SEC EDGAR Ingestion:</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed italic">
          "{active.secInsight}"
        </p>
      </div>

      <div className="p-3.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Gemini LLM Synthesized Executive Brief:</span>
        </div>
        <p className="text-xs text-emerald-100/90 leading-relaxed">
          {active.llmSummary}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   2. CodeCompass Preview Component
------------------------------------------------------------- */
export function CodeCompassPreview() {
  return (
    <div className="rounded-2xl bg-[#0d1017] border border-white/[0.08] p-5 space-y-4 shadow-xl">
      {/* Top Profile Summary Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-xs text-emerald-300">
            PR
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Prajwal9823</div>
            <div className="text-[10px] text-slate-400 font-mono">LeetCode Profile Analytics</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">
            Archetype: Contest Grinder
          </span>
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            Readiness: 91/100
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="p-3 rounded-xl bg-[#121622] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Solved Count</span>
          <div className="text-lg font-bold font-mono text-white mt-0.5">700+</div>
          <span className="text-[10px] font-mono text-emerald-400">Total Solved</span>
        </div>

        <div className="p-3 rounded-xl bg-[#121622] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Hard / Med Mix</span>
          <div className="text-lg font-bold font-mono text-amber-300 mt-0.5">68%</div>
          <span className="text-[10px] font-mono text-slate-400">Med & Hard Ratio</span>
        </div>

        <div className="p-3 rounded-xl bg-[#121622] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Active Streak</span>
          <div className="text-lg font-bold font-mono text-blue-400 mt-0.5">Consistent</div>
          <span className="text-[10px] font-mono text-slate-400">High Discipline</span>
        </div>
      </div>

      {/* Topic Distribution Progress Bars */}
      <div className="p-3.5 rounded-xl bg-[#121622] border border-white/[0.06] space-y-2.5">
        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
          <span>Difficulty Distribution</span>
          <span className="text-[10px] text-slate-400">Easy / Medium / Hard</span>
        </div>

        <div className="w-full h-2.5 rounded-full bg-slate-800 flex overflow-hidden">
          <div className="bg-emerald-400 h-full w-[35%]" title="Easy 35%" />
          <div className="bg-amber-400 h-full w-[48%]" title="Medium 48%" />
          <div className="bg-rose-500 h-full w-[17%]" title="Hard 17%" />
        </div>

        <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Easy (240+)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-400" /> Medium (380+)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500" /> Hard (80+)
          </span>
        </div>
      </div>

      {/* Actionable Recommendation Insight */}
      <div className="p-3 rounded-xl bg-[#141924] border border-white/[0.06] flex items-center justify-between text-xs">
        <span className="text-slate-300 font-mono text-[11px]">
          Recommendation Engine: Next focus on Advanced Dynamic Programming on Trees.
        </span>
        <span className="text-emerald-400 text-[10px] font-mono uppercase tracking-wider shrink-0 pl-2">
          Rule-Based
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   3. BERT Sentiment Analyzer Preview Component
------------------------------------------------------------- */
export function BertSentimentPreview() {
  const [activeTweetIndex, setActiveTweetIndex] = useState(0);

  const sampleTweets = [
    {
      text: "The new engineering update resolved the latency bottleneck completely. Super clean architecture!",
      sentiment: "Positive",
      confidence: "94.6%",
      distribution: { positive: 94.6, neutral: 4.2, negative: 1.2 },
    },
    {
      text: "The deployment pipeline scheduled maintenance at midnight UTC without downtime.",
      sentiment: "Neutral",
      confidence: "88.3%",
      distribution: { positive: 8.1, neutral: 88.3, negative: 3.6 },
    },
    {
      text: "Production outage on the checkout flow due to unhandled third-party gateway timeout.",
      sentiment: "Negative",
      confidence: "92.1%",
      distribution: { positive: 1.5, neutral: 6.4, negative: 92.1 },
    },
  ];

  const current = sampleTweets[activeTweetIndex];

  return (
    <div className="rounded-2xl bg-[#0d1017] border border-white/[0.08] p-5 space-y-4 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <TwitterIcon className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-xs font-mono text-slate-300">Live Ingestion & Inference Stream</span>
        </div>
        <div className="flex gap-1 bg-[#141924] p-1 rounded-lg border border-white/[0.06]">
          {sampleTweets.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTweetIndex(idx)}
              className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                activeTweetIndex === idx ? "bg-blue-500/20 text-blue-300 font-semibold" : "text-slate-400 hover:text-white"
              }`}
            >
              Sample 0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Tweet Quote Box */}
      <div className="p-3.5 rounded-xl bg-[#121622] border border-white/[0.06]">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
          Input Tweet Stream:
        </span>
        <p className="text-xs text-white leading-relaxed">
          "{current.text}"
        </p>
      </div>

      {/* DistilBERT Classification Result */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="p-3 rounded-xl bg-[#121622] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Predicted Class</span>
          <div
            className={`text-sm font-bold font-mono mt-1 ${
              current.sentiment === "Positive"
                ? "text-emerald-400"
                : current.sentiment === "Negative"
                ? "text-rose-400"
                : "text-amber-300"
            }`}
          >
            {current.sentiment}
          </div>
        </div>

        <div className="p-3 rounded-xl bg-[#121622] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Logit Confidence</span>
          <div className="text-sm font-bold font-mono text-white mt-1">{current.confidence}</div>
        </div>

        <div className="p-3 rounded-xl bg-[#121622] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-slate-400 uppercase">NLP Model</span>
          <div className="text-xs font-semibold text-blue-300 mt-1">DistilBERT</div>
        </div>
      </div>

      {/* Probability Distribution Curves */}
      <div className="space-y-2 pt-1 text-xs font-mono">
        <div className="space-y-1">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-400">Positive:</span>
            <span className="text-emerald-400">{current.distribution.positive}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full transition-all duration-300" style={{ width: `${current.distribution.positive}%` }} />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-400">Neutral:</span>
            <span className="text-amber-400">{current.distribution.neutral}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="bg-amber-400 h-full rounded-full transition-all duration-300" style={{ width: `${current.distribution.neutral}%` }} />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-[11px]">
            <span className="text-slate-400">Negative:</span>
            <span className="text-rose-400">{current.distribution.negative}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="bg-rose-500 h-full rounded-full transition-all duration-300" style={{ width: `${current.distribution.negative}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   4. DCGAN Digit Generation Interactive Slider
------------------------------------------------------------- */
export function DcganInteractivePreview() {
  const epochs = [
    { num: 1, label: "Epoch 01", desc: "Initial random Gaussian noise; no recognizable geometric patterns.", file: "/projects/gan/image_at_epoch_0001.png" },
    { num: 21, label: "Epoch 21", desc: "Emergence of localized stroke intensity and primitive digit contours.", file: "/projects/gan/image_at_epoch_0021.png" },
    { num: 41, label: "Epoch 41", desc: "Recognizable loops and structural curves resembling numerals 0, 1, 7.", file: "/projects/gan/image_at_epoch_0041.png" },
    { num: 61, label: "Epoch 61", desc: "Sharpening boundaries; discriminator forcing finer stroke distinctions.", file: "/projects/gan/image_at_epoch_0061.png" },
    { num: 81, label: "Epoch 81", desc: "Coherent handwritten digits with high structural fidelity and variation.", file: "/projects/gan/image_at_epoch_0081.png" },
    { num: 100, label: "Epoch 100", desc: "Trained generator produces clean, diverse handwritten digits evaluated against CNN classifier.", file: "/projects/gan/image_at_epoch_0100.png" },
  ];

  const [epochIndex, setEpochIndex] = useState(5);
  const activeEpoch = epochs[epochIndex];

  return (
    <div className="rounded-2xl bg-[#0d1017] border border-white/[0.08] p-5 space-y-4 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Sliders className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-xs font-mono text-slate-300">
            Training Progression Checkpoints (Actual Outputs):
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 font-semibold">
          {activeEpoch.label} / 100
        </span>
      </div>

      {/* Real Checkpoint Image Display */}
      <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-xl bg-[#121622] border border-white/[0.06]">
        <div className="w-44 h-44 shrink-0 rounded-lg overflow-hidden border border-white/[0.1] bg-black/60 flex items-center justify-center relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={activeEpoch.file}
            alt={`DCGAN training checkpoint at ${activeEpoch.label}`}
            className="w-full h-full object-contain filter contrast-125"
          />
          <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-mono text-emerald-400">
            {activeEpoch.label}
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Checkpoint Evolution
            </span>
            <h4 className="text-sm font-semibold text-white mt-0.5">
              Adversarial Loss Optimization
            </h4>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {activeEpoch.desc}
          </p>

          <div className="text-[10px] font-mono text-slate-400 pt-1">
            Conv2DTranspose layers mapping 100-dim latent vector z ~ N(0, 1) to 28x28 grayscale space.
          </div>
        </div>
      </div>

      {/* Epoch Step Selector */}
      <div className="space-y-2 pt-1">
        <div className="flex justify-between items-center text-xs font-mono text-slate-400">
          <span>Gaussian Noise (Epoch 1)</span>
          <span className="text-purple-300 font-semibold">Slide Checkpoints</span>
          <span>Synthesized Digits (Epoch 100)</span>
        </div>

        <div className="grid grid-cols-6 gap-1.5">
          {epochs.map((ep, idx) => (
            <button
              key={ep.num}
              onClick={() => setEpochIndex(idx)}
              className={`py-1.5 px-1 rounded-lg text-center text-xs font-mono transition-all ${
                epochIndex === idx
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold"
                  : "bg-[#141924] text-slate-400 border border-white/[0.05] hover:bg-[#1a202e] hover:text-white"
              }`}
            >
              Ep {ep.num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
