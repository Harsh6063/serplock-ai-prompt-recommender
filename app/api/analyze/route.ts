import { NextRequest, NextResponse } from "next/server";

import { crawlWebsite } from "@/lib/crawler";
import { preprocessWebsite } from "@/lib/preprocess";
import { analyzeWebsite } from "@/lib/analyzer";
import { generateRecommendations } from "@/lib/recommendations";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json(
        {
          success: false,
          message: "Website URL is required.",
        },
        { status: 400 }
      );
    }

    console.log("🌐 Crawling website...");

    const website = await crawlWebsite(url);

    console.log("🧹 Cleaning content...");

    const cleaned = preprocessWebsite(website);

    console.log("🧠 Understanding business...");

    const business = await analyzeWebsite(cleaned);

    console.log("🚀 Generating recommendations...");

    const recommendations =
      await generateRecommendations(business);

    return NextResponse.json({
      success: true,

      business,

      recommendations,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Analysis failed.",
      },
      {
        status: 500,
      }
    );
  }
}