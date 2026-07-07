export async function crawlWebsite(url: string): Promise<string> {
  // Normalize URL
  let normalized = url.trim();

  if (!normalized.startsWith("http")) {
    normalized = `https://${normalized}`;
  }

  // Jina Reader URL
  const jinaUrl = `https://r.jina.ai/http://${normalized
    .replace("https://", "")
    .replace("http://", "")}`;

  const response = await fetch(jinaUrl);

  if (!response.ok) {
    throw new Error("Unable to fetch website content.");
  }

  const content = await response.text();

  return content;
}