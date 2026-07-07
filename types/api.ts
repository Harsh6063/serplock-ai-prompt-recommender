import { BusinessProfile } from "./business";
import { PromptRecommendation } from "./prompt";

export interface AnalyzeResponse {
  success: boolean;

  business: BusinessProfile;

  recommendations: PromptRecommendation[];

  message?: string;
}