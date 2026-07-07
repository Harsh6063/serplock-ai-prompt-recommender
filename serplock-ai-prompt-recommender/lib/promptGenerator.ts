import { groq } from "./groq";

import { BusinessProfile } from "@/types/business";

import { GENERATE_PROMPTS } from "@/prompts/generatePrompts";

import { CandidatePrompt } from "@/types/prompt";

export async function generatePrompts(
  business: BusinessProfile
): Promise<CandidatePrompt[]> {

  const completion = await groq.chat.completions.create({

    model: "llama-3.3-70b-versatile",

    temperature: 0.5,

    response_format: {
      type: "json_object",
    },

    messages: [

      {
        role: "system",
        content: GENERATE_PROMPTS,
      },

      {
        role: "user",
        content: JSON.stringify(business),
      },

    ],

  });

  const response = completion.choices[0].message.content;

  if (!response) {

    throw new Error("Prompt generation failed.");

  }

  const parsed = JSON.parse(response);

  return parsed.prompts;
}