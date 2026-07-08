import * as cheerio from "cheerio";

export async function crawlWebsite(url: string): Promise<string> {
  let normalized = url.trim();

  if (!normalized.startsWith("http")) {
    normalized = `https://${normalized}`;
  }

  const response = await fetch(normalized, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      Accept: "text/html",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Website returned ${response.status}`);
  }

  const html = await response.text();

  const $ = cheerio.load(html);

  // Remove unwanted elements
  $("script").remove();
  $("style").remove();
  $("noscript").remove();
  $("svg").remove();
  $("header").remove();
  $("footer").remove();
  $("nav").remove();

  const title = $("title").text();

  const metaDescription =
    $('meta[name="description"]').attr("content") || "";

  const headings = $("h1,h2,h3")
    .map((_, el) => $(el).text())
    .get()
    .join("\n");

  const paragraphs = $("p")
    .map((_, el) => $(el).text())
    .get()
    .join("\n");

  return `
Title:
${title}

Description:
${metaDescription}

Headings:
${headings}

Content:
${paragraphs}
`;
}