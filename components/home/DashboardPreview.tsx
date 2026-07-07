"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Brain,
  CheckCircle2,
  Loader2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { AnalyzeResponse } from "@/types/api";

interface DashboardPreviewProps {
  loading: boolean;
  result: AnalyzeResponse | null;
}

export default function DashboardPreview({
  loading,
  result,
}: DashboardPreviewProps) {
  /* ---------------- Loading ---------------- */
const [showAll, setShowAll] = useState(false);
  if (loading) {
    return (
      <div className="relative">

        <div className="absolute inset-0 rounded-3xl bg-[#2F6BFF]/10 blur-3xl" />

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

          <div className="flex items-center gap-2 border-b bg-slate-50 px-5 py-4">


            <div className="ml-5 rounded-lg border bg-white px-4 py-1 text-sm text-slate-500">
              AI Recommendation Engine
            </div>

          </div>

          <div className="flex flex-col items-center justify-center px-10 py-24">

            <Loader2 className="h-12 w-12 animate-spin text-[#2F6BFF]" />

            <h2 className="mt-8 text-2xl font-bold">
              Understanding Website
            </h2>

            <p className="mt-3 max-w-sm text-center text-slate-500">
              Crawling pages, understanding the business,
              generating prompts and ranking recommendations.
            </p>

            <div className="mt-10 w-full max-w-md space-y-4">

              {[
                "Crawling Website",
                "Understanding Business",
                "Generating Candidate Prompts",
                "Scoring Recommendations",
              ].map((item) => (
                <div key={item}>

                  <div className="mb-2 flex justify-between text-sm">

                    <span>{item}</span>

                    <span className="text-[#2F6BFF]">
                      Processing...
                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                    <div className="h-full w-2/3 animate-pulse rounded-full bg-[#2F6BFF]" />

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    );
  }

  /* ---------------- Empty ---------------- */

  if (!result) {
    return (
      <div className="relative">

        <div className="absolute inset-0 rounded-3xl bg-[#2F6BFF]/10 blur-3xl" />

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

          <div className="flex items-center gap-2 border-b bg-slate-50 px-5 py-4">

            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />

            <div className="ml-5 rounded-lg border bg-white px-4 py-1 text-sm text-slate-500">
              AI Recommendation Engine
            </div>

          </div>

          <div className="flex flex-col items-center justify-center px-12 py-24">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#2F6BFF]/10">

              <Brain className="h-10 w-10 text-[#2F6BFF]" />

            </div>

            <h2 className="mt-8 text-3xl font-bold">

              AI Prompt Recommendations

            </h2>

            <p className="mt-4 max-w-md text-center leading-7 text-slate-500">

              Enter any website and our AI will understand
              the business, generate high-quality AI Search
              prompts, score them and recommend the Top 20
              prompts worth tracking.

            </p>

            <div className="mt-10 grid w-full max-w-md gap-4">

              <div className="flex items-center gap-3 rounded-xl border p-4">

                <Sparkles className="text-[#2F6BFF]" />

                Website Understanding

              </div>

              <div className="flex items-center gap-3 rounded-xl border p-4">

                <Sparkles className="text-[#2F6BFF]" />

                AI Prompt Generation

              </div>

              <div className="flex items-center gap-3 rounded-xl border p-4">

                <Sparkles className="text-[#2F6BFF]" />

                Intelligent Recommendation Ranking

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }

  /* ---------------- Actual Dashboard ---------------- */

  return (
    <div className="relative">

      <div className="absolute inset-0 rounded-3xl bg-[#2F6BFF]/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

        <div className="flex items-center justify-between border-b px-6 py-5">

  <div>
    <h2 className="text-2xl font-bold">
      AI Prompt Recommendations
    </h2>

    <p className="text-sm text-slate-500">
      Generated for {result.business.company}
    </p>
  </div>

  <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
    ✓ Analysis Complete
  </div>

</div>

        <div className="space-y-6 p-6">

        <div className="grid gap-4 md:grid-cols-2">

  {/* Business */}

  <div className="rounded-2xl border border-slate-200 p-5">

    <div className="mb-3 flex items-center gap-2 text-slate-500">

      <Brain className="h-4 w-4" />

      <span className="text-sm font-medium">
        Business Summary
      </span>

    </div>

    <h2 className="text-2xl font-bold text-slate-900">

      {result.business.company}

    </h2>

    <p className="mt-1 text-[#2F6BFF] font-medium">

      {result.business.productCategory ||
        result.business.industry}

    </p>

    <p className="mt-4 text-sm leading-6 text-slate-500">

      {result.business.description}

    </p>

    <div className="mt-5 flex flex-wrap gap-2">

      {result.business.targetAudience
        ?.slice(0, 3)
        .map((audience) => (

          <span
            key={audience}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#2F6BFF]"
          >
            {audience}
          </span>

        ))}

    </div>

  </div>

  {/* AI Confidence */}

  <div className="rounded-2xl bg-[#2F6BFF] p-6 text-white shadow-lg">

    <div className="flex items-center gap-2">

      <Sparkles className="h-5 w-5" />

      <span className="font-semibold">

        AI Confidence

      </span>

    </div>

    <div className="mt-5 text-5xl font-black">

      {Math.round(result.business.confidence * 100)}%

    </div>

    <p className="mt-3 text-blue-100 leading-6">

      Based on website completeness,
      entity extraction,
      product understanding
      and AI confidence.

    </p>

  </div>

</div>

{/* ================= Stats ================= */}

<div className="grid grid-cols-2 gap-4 md:grid-cols-4">

  <div className="rounded-xl border border-slate-200 p-5">

    <div className="text-3xl font-bold text-slate-900">

      {result.recommendations.length}

    </div>

    <p className="mt-2 text-sm text-slate-500">

      Recommendations

    </p>

  </div>

  <div className="rounded-xl border border-slate-200 p-5">

    <div className="text-3xl font-bold text-slate-900">

      {result.business.features.length}

    </div>

    <p className="mt-2 text-sm text-slate-500">

      Features

    </p>

  </div>

  <div className="rounded-xl border border-slate-200 p-5">

    <div className="text-3xl font-bold text-slate-900">

      {result.business.keywords.length}

    </div>

    <p className="mt-2 text-sm text-slate-500">

      Keywords

    </p>

  </div>

  <div className="rounded-xl border border-slate-200 p-5">

    <div className="text-3xl font-bold text-slate-900">

      {result.business.useCases.length}

    </div>

    <p className="mt-2 text-sm text-slate-500">

      Use Cases

    </p>

  </div>

</div>

{/* ================= Section Title ================= */}

<div className="flex items-center justify-between">

  <div>

    <h3 className="text-xl font-bold">

      AI Recommended Prompts

    </h3>

    <p className="text-sm text-slate-500">

      Highest-value prompts worth tracking.

    </p>

  </div>

  <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#2F6BFF]">

    Top {Math.min(20, result.recommendations.length)}

  </div>

</div>

{/* ================= Recommendations ================= */}

{/* ================= Recommendations Table ================= */}

<div className="overflow-hidden rounded-2xl border border-slate-200">

  {/* Header */}

  <div className="grid grid-cols-[60px_2fr_170px_90px_50px] items-center border-b bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">

    <span>#</span>

    <span>Prompt</span>

    <span>Category</span>

    <span>Score</span>

    <span></span>

  </div>

  {(showAll
    ? result.recommendations
    : result.recommendations.slice(0, 5)
  ).map((item, index) => (

    <div
      key={item.prompt}
      className="grid grid-cols-[60px_1fr_140px_90px_60px] items-center border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50"
    >

      {/* Rank */}

      <div className="font-bold text-[#2F6BFF]">

        #{index + 1}

      </div>

      {/* Prompt */}

      <div>

        <h3 className="truncate font-semibold text-slate-900">

          {item.prompt}

        </h3>

        <p className="mt-1 text-xs text-slate-500">

          {item.priority} • {item.searchIntent}

        </p>

      </div>

      {/* Category */}

      <div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#2F6BFF]">

          {item.category}

        </span>

      </div>

      {/* Score */}

      <div>

        <div
          className={`inline-flex rounded-lg px-3 py-2 text-sm font-bold text-white

          ${
            item.score >= 85
              ? "bg-green-600"
              : item.score >= 70
              ? "bg-[#2F6BFF]"
              : "bg-orange-500"
          }`}
        >

          {item.score}

        </div>

      </div>

      {/* Arrow */}

      <button className="text-[#2F6BFF] transition hover:translate-x-1">

        <ArrowUpRight size={18} />

      </button>

    </div>

  ))}

</div>

{/* Show More */}

<div className="flex justify-center pt-2">

 <div className="mt-6 flex justify-center">

  <button
    onClick={() => setShowAll(!showAll)}
    className="rounded-xl border border-slate-200 px-6 py-3 font-medium transition hover:border-[#2F6BFF] hover:text-[#2F6BFF]"
  >
    {showAll
      ? "Show Less"
      : `View All ${result.recommendations.length} Recommendations`}
  </button>

</div>

</div>

{/* AI Footer */}

<div className="rounded-2xl border border-green-200 bg-green-50 p-5">

  <div className="flex items-start gap-3">

    <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />

    <div>

      <h4 className="font-semibold text-green-800">

        AI Analysis Complete

      </h4>

      <p className="mt-1 text-sm leading-6 text-green-700">

        Successfully analyzed{" "}
        <strong>{result.business.company}</strong> and
        generated{" "}
        <strong>{result.recommendations.length}</strong>{" "}
        high-value AI Search prompt recommendations.

      </p>

    </div>

  </div>

</div>

        </div>

      </div>

    </div>
    
  );

  
}


