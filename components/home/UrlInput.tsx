"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Globe, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AnalyzeResponse } from "@/types/api";

interface UrlInputProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setResult: Dispatch<SetStateAction<AnalyzeResponse | null>>;
}

export default function UrlInput({
  loading,
  setLoading,
  setResult,
}: UrlInputProps) {
  const [url, setUrl] = useState("");

  const [error, setError] = useState("");

  async function handleAnalyze() {
    if (!url.trim()) {
      setError("Please enter a website URL.");
      return;
    }

    setError("");

    try {
      setLoading(true);

      const response = await fetch("/api/analyze", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          url,
        }),
      });

      const data: AnalyzeResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Analysis failed.");
      }

      setResult(data);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl">

      <div className="rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">

        <div className="flex flex-col gap-3 sm:flex-row">

          <div className="relative flex-1">

            <Globe
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <Input
              placeholder="https://www.serplock.com/"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="h-14 border-0 pl-11 text-base shadow-none focus-visible:ring-0"
            />

          </div>

          <Button
            onClick={handleAnalyze}
            disabled={loading}
            className="h-14 rounded-xl bg-[#2F6BFF] px-8 text-base font-semibold hover:bg-[#1D4ED8]"
          >
            {loading ? (
              <>
                <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Website"
            )}
          </Button>

        </div>

      </div>

      {error && (
        <p className="mt-3 text-sm text-red-500">
          {error}
        </p>
      )}

      <p className="mt-4 text-sm text-slate-500">
        Try{" "}
        <button
          onClick={() => setUrl("https://www.serplock.com")}
          className="font-medium text-[#2F6BFF] hover:underline"
        >
          https://www.serplock.com
        </button>
      </p>

    </div>
  );
}