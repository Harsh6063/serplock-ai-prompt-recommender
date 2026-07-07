export interface BusinessProfile {
  company: string;
  industry: string;
  productCategory: string;

  description: string;

  targetAudience: string[];

  personas: string[];

  painPoints: string[];

  jobsToBeDone: string[];

  features: string[];

  useCases: string[];

  competitors: string[];

  integrations: string[];

  aiPlatforms: string[];

  pricingTier: string;

  differentiators: string[];

  entities: string[];

  keywords: string[];

  confidence: number;
}