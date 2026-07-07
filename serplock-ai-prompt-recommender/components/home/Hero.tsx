"use client";

import { useState } from "react";

import DashboardPreview from "./DashboardPreview";
import HeroStats from "./HeroStats";
import UrlInput from "./UrlInput";

import { AnalyzeResponse } from "@/types/api";

export default function Hero() {
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* ================= Hero ================= */}

      <section className="relative overflow-hidden">

        <div className="mx-auto max-w-5xl px-6 py-24 text-center">

          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#2F6BFF]">
            ✨ New AI Recommendation Feature
          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight text-[#111827] md:text-6xl lg:text-7xl">
            Discover the

            <span className="mx-3 inline-block rotate-[-2deg] bg-[#2F6BFF] px-4 py-2 text-white shadow-lg">
              AI Search Prompts
            </span>

            your customers actually ask.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-500">
            Analyze any website and instantly discover the
            highest-value prompts worth tracking across
            ChatGPT, Gemini, Claude and Perplexity.
          </p>

          <div className="mx-auto mt-10 max-w-3xl">
            <UrlInput
              loading={loading}
              setLoading={setLoading}
              setResult={setResult}
            />
          </div>

          <div className="mt-12">
            <HeroStats />
          </div>

        </div>

      </section>

      {/* ================= Dashboard ================= */}

      {result && (
        <section className="border-t border-slate-200 bg-slate-50 py-16">

          <div className="mx-auto max-w-[1400px] px-6">

            <DashboardPreview
              loading={loading}
              result={result}
            />

          </div>

        </section>
      )}
    </>
  );
}