import { groq } from "./groq";
import { analyzeWebsitePrompt } from "@/prompts/analyzeWebsite";
import { BusinessProfile } from "@/types/business";

export async function analyzeWebsite(
  websiteContent: string
): Promise<BusinessProfile> {
  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",

    temperature: 0.1,

    response_format: {
      type: "json_object",
    },

    messages: [
      {
        role: "system",
        content: analyzeWebsitePrompt,
      },
      {
        role: "user",
        content: websiteContent,
      },
    ],
  });

  const response = completion.choices[0].message.content;

  if (!response) {
    throw new Error("No response received from Groq.");
  }

  try {
    return JSON.parse(response) as BusinessProfile;
  } catch (error) {
    console.error(response);
    throw new Error("Failed to parse Business Profile JSON.");
  }
}