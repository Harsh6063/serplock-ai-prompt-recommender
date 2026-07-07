import { CandidatePrompt } from "@/types/prompt";

export function deduplicatePrompts(
  prompts: CandidatePrompt[]
): CandidatePrompt[] {

  const seen = new Set<string>();

  return prompts.filter((prompt) => {

    const normalized = prompt.prompt
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .trim();

    if (seen.has(normalized))

      return false;

    seen.add(normalized);

    return true;

  });

}