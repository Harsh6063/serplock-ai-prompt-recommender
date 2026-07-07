export type PromptCategory =
  | "Brand Discovery"
  | "Commercial"
  | "Comparison"
  | "Alternatives"
  | "Problem Solving"
  | "Educational"
  | "Feature Discovery"
  | "Industry Specific";

export type BuyerJourney =
  | "Awareness"
  | "Consideration"
  | "Decision";

export interface CandidatePrompt {
  prompt: string;

  category: PromptCategory;

  buyerJourney: BuyerJourney;

  searchIntent: string;

  confidence: number;

  reason: string;
}

export interface PromptRecommendation
  extends CandidatePrompt {
  businessRelevance: number;

  commercialIntent: number;

  searchIntentScore: number;

  entityCoverage: number;

  uniqueness: number;

  score: number;

  priority: "P0" | "P1" | "P2";
}