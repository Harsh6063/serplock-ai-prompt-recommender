export function cleanContent(content: string): string {
  return (
    content
      .replace(/\n{2,}/g, "\n")
      .replace(/\s+/g, " ")
      .replace(/```/g, "")
      .trim()

      // Limit tokens
      .slice(0, 15000)
  );
}