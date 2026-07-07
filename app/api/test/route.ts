import { crawlWebsite } from "@/lib/crawler";
import { cleanContent } from "@/lib/cleanContent";
import { analyzeWebsite } from "@/lib/analyzer";
import { preprocessWebsite } from "@/lib/preprocess";
import { generatePrompts } from "@/lib/promptGenerator";

export async function GET() {
  const website = await crawlWebsite("serplock.com");

const cleaned = preprocessWebsite(website);

const business = await analyzeWebsite(cleaned);

const prompts = await generatePrompts(business);

return Response.json({
    business,
    prompts
});

  return Response.json({
    length: cleaned.length,
    preview: cleaned.substring(0, 1500),
  });
}