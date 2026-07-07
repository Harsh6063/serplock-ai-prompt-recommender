export function preprocessWebsite(content: string): string {
  return content
    // Remove image markdown
    .replace(/!\[.*?\]\(.*?\)/g, "")

    // Remove markdown links
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")

    // Remove duplicate whitespace
    .replace(/\n{2,}/g, "\n")
    .replace(/\s+/g, " ")

    // Remove "Markdown Content:"
    .replace("Markdown Content:", "")

    .trim();
}