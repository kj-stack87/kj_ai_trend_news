import { readFile, writeFile } from "node:fs/promises";

const portalsPath = new URL("../data/portals.json", import.meta.url);
const newsPath = new URL("../data/news.json", import.meta.url);

const dailyDrops = [
  {
    title: "오늘의 국내 AI 뉴스",
    summary: "국내 매체를 먼저 읽으면서 AI 이슈를 쉽게 따라가는 조합입니다. 용어가 낯설더라도 접근이 가장 편한 편입니다.",
    focus: "관심 포인트: 국내 기업, 행사, 정책, 서비스 변화",
    portals: ["AI Times", "ZDNet Korea", "전자신문"]
  },
  {
    title: "오늘의 글로벌 AI 뉴스",
    summary: "해외 뉴스 사이트를 중심으로 AI 기업과 시장의 움직임을 읽는 조합입니다. 투자, 서비스, 정책 변화를 빠르게 따라가기 좋습니다.",
    focus: "관심 포인트: 글로벌 뉴스, 투자, 시장 변화",
    portals: ["Reuters AI", "TechCrunch AI", "VentureBeat AI"]
  },
  {
    title: "오늘의 AI 큰 흐름",
    summary: "속보보다 큰 방향성을 읽고 싶을 때 보는 조합입니다. 왜 중요한지, 앞으로 어디로 가는지 이해하는 데 초점을 둡니다.",
    focus: "관심 포인트: 맥락, 해설, 장기 흐름",
    portals: ["MIT Technology Review (AI)", "WIRED AI", "The Korea Times"]
  },
  {
    title: "오늘의 실무형 AI 뉴스",
    summary: "AI가 실제 서비스와 기업 도입으로 이어지는 흐름을 보는 날입니다. 현업에서 체감되는 변화에 집중합니다.",
    focus: "관심 포인트: 도입 사례, 비즈니스, 생산성",
    portals: ["VentureBeat AI", "ZDNet Korea", "AI News"]
  }
];

const categoryRules = [
  { name: "모델", hashtag: "#모델", description: "새 모델, 칩, 성능 경쟁처럼 AI 기술 자체를 보는 관점", keywords: ["model", "llm", "benchmark", "chip", "gpt", "claude", "gemini", "reasoning"] },
  { name: "활용사례", hashtag: "#활용사례", description: "AI가 실제 업무와 서비스에 어떻게 들어가는지 보는 관점", keywords: ["enterprise", "automation", "assistant", "workflow", "adoption", "agent", "copilot"] },
  { name: "윤리", hashtag: "#윤리", description: "규제, 책임, 신뢰, 저작권 같은 문제를 보는 관점", keywords: ["regulation", "ethics", "safety", "copyright", "policy", "law", "risk"] },
  { name: "경제", hashtag: "#경제", description: "투자, 고용, 생산성, 산업 구조 변화를 보는 관점", keywords: ["funding", "investment", "market", "economy", "jobs", "productivity", "startup"] },
  { name: "산업전략", hashtag: "#산업전략", description: "어떤 산업이 AI를 먼저 가져가고 있는지 보는 관점", keywords: ["industry", "strategy", "deployment", "company", "manufacturing", "telecom", "rollout"] }
];

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function sourceDomain(url) {
  return new URL(url).hostname.replace(/^www\./, "");
}

function categoryQuery(keywords, domain) {
  return `${keywords.join(" OR ")} site:${domain} when:7d`;
}

async function fetchGoogleNews(query) {
  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-US&gl=US&ceid=US:en`;
  const response = await fetch(rssUrl, {
    headers: { "User-Agent": "Mozilla/5.0" }
  });
  if (!response.ok) {
    throw new Error(`Fetch failed: ${response.status}`);
  }
  return response.text();
}

function parseRss(xml, source) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => {
    const item = match[1];
    const title = stripHtml((item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1]) || (item.match(/<title>(.*?)<\/title>/)?.[1]) || "");
    const url = decodeHtml((item.match(/<link>(.*?)<\/link>/)?.[1]) || "");
    const summary = stripHtml((item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1]) || (item.match(/<description>(.*?)<\/description>/)?.[1]) || "");
    const pubDate = (item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1]) || "";
    return {
      title,
      url,
      summary: summary || `${source}의 AI 뉴스`,
      source,
      publishedAt: pubDate ? new Date(pubDate).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10)
    };
  });
}

function scoreItem(item, keywords, preferredSource) {
  const haystack = `${item.title} ${item.summary}`.toLowerCase();
  const keywordScore = keywords.reduce((sum, keyword) => sum + (haystack.includes(keyword) ? 1 : 0), 0);
  const preferredBonus = item.source === preferredSource ? 3 : 0;
  return keywordScore * 5 + preferredBonus;
}

function formatViews(score) {
  return `${(5 + score).toFixed(1)}K`;
}

function dedupe(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = `${item.title}::${item.url}`;
    if (!item.title || !item.url || seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

async function buildCategories(portals) {
  const results = [];

  for (const rule of categoryRules) {
    const collected = [];

    for (const portal of portals) {
      try {
        const xml = await fetchGoogleNews(categoryQuery(rule.keywords, sourceDomain(portal.url)));
        const parsed = parseRss(xml, portal.name).map((item) => ({
          ...item,
          score: scoreItem(item, rule.keywords, portal.name)
        }));
        collected.push(...parsed);
      } catch (error) {
        console.error(`Skipping ${portal.name}: ${error.message}`);
      }
    }

    const items = dedupe(collected)
      .sort((a, b) => b.score - a.score || Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
      .slice(0, 3)
      .map((item) => ({
        title: item.title,
        summary: item.summary,
        url: item.url,
        source: item.source,
        publishedAt: item.publishedAt,
        views: formatViews(item.score)
      }));

    results.push({
      name: rule.name,
      hashtag: rule.hashtag,
      description: rule.description,
      items
    });
  }

  return results;
}

async function main() {
  const portalData = JSON.parse(await readFile(portalsPath, "utf8"));
  const newsCategories = await buildCategories(portalData.portals);
  const output = {
    lastUpdated: new Date().toISOString(),
    dailyDrops,
    newsCategories
  };
  await writeFile(newsPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
