import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Being *found* by AI answer engines (ChatGPT, Perplexity, Claude, Google AI)
// means *allowing* their crawlers, not blocking them. We explicitly welcome the
// major AI and search bots so the site can be crawled, indexed and cited.
const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Bingbot",
  "DuckDuckBot",
  "GPTBot", // OpenAI training/crawl
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT live browsing
  "ClaudeBot", // Anthropic crawl
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity live fetch
  "Google-Extended", // Gemini / Vertex grounding
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "CCBot", // Common Crawl (feeds many LLMs)
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
