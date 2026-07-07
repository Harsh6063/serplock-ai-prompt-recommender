import { BusinessProfile } from "@/types/business";

import { generatePrompts } from "./promptGenerator";

import { deduplicatePrompts } from "./deduplicate";

import { scorePrompts } from "./scorer";

export async function generateRecommendations(

    business:BusinessProfile

){

const generated=

await generatePrompts(business);

const unique=

deduplicatePrompts(generated);

const scored=

scorePrompts(

unique,

business

);

return scored.slice(0,20);

}