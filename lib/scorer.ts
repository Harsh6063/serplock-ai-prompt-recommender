import {
  CandidatePrompt,
  PromptRecommendation,
} from "@/types/prompt";

import { BusinessProfile } from "@/types/business";

function clamp(value: number, min = 0, max = 10) {
  return Math.max(min, Math.min(max, value));
}

function getPriority(score: number): "P0" | "P1" | "P2" {
  if (score >= 90) return "P0";
  if (score >= 75) return "P1";
  return "P2";
}

export function scorePrompts(
  prompts: CandidatePrompt[],
  business: BusinessProfile
): PromptRecommendation[] {
  return prompts
    .map((prompt) => {
      const text = prompt.prompt.toLowerCase();

      /* ---------------- Business Relevance ---------------- */

      let businessRelevance = 0;

      business.keywords.forEach((keyword) => {
        if (text.includes(keyword.toLowerCase())) {
          businessRelevance += 2;
        }
      });

      business.features.forEach((feature) => {
        if (text.includes(feature.toLowerCase())) {
          businessRelevance += 2;
        }
      });

      business.useCases.forEach((useCase) => {
        if (text.includes(useCase.toLowerCase())) {
          businessRelevance += 1;
        }
      });

      businessRelevance = clamp(businessRelevance);

      /* ---------------- Commercial Intent ---------------- */

      let commercialIntent = 2;

      switch (prompt.category) {
        case "Commercial":
          commercialIntent = 10;
          break;

        case "Comparison":
          commercialIntent = 9;
          break;

        case "Alternatives":
          commercialIntent = 9;
          break;

        case "Feature Discovery":
          commercialIntent = 7;
          break;

        case "Problem Solving":
          commercialIntent = 7;
          break;

        case "Industry Specific":
          commercialIntent = 6;
          break;

        case "Brand Discovery":
          commercialIntent = 5;
          break;

        default:
          commercialIntent = 4;
      }

      /* ---------------- Search Intent ---------------- */

      let searchIntentScore = 5;

      switch (prompt.buyerJourney) {
        case "Decision":
          searchIntentScore = 10;
          break;

        case "Consideration":
          searchIntentScore = 8;
          break;

        case "Awareness":
          searchIntentScore = 5;
          break;
      }

      /* ---------------- Entity Coverage ---------------- */

      let entityCoverage = 0;

      business.entities.forEach((entity) => {
        if (text.includes(entity.toLowerCase())) {
          entityCoverage += 2;
        }
      });

      entityCoverage = clamp(entityCoverage);

      /* ---------------- Prompt Quality ---------------- */

      let promptQuality = 8;

      if (text.length < 15) promptQuality = 5;

      if (text.length > 80) promptQuality = 6;

      if (text.includes("?")) promptQuality += 1;

      promptQuality = clamp(promptQuality);

      /* ---------------- Uniqueness ---------------- */

      // Later this will come from embeddings.
      const uniqueness = 8;

      /* ---------------- Final Weighted Score ---------------- */

      const weightedScore =
        businessRelevance * 0.35 +
        commercialIntent * 0.25 +
        searchIntentScore * 0.15 +
        entityCoverage * 0.10 +
        promptQuality * 0.10 +
        uniqueness * 0.10;
        
      const score = Math.round(weightedScore * 10);

      return {
        ...prompt,

        businessRelevance,

        commercialIntent,

        searchIntentScore,

        entityCoverage,

        uniqueness,

        score,

        priority: getPriority(score),
      };
    })
    .sort((a, b) => b.score - a.score);
}