const portals = [
  {
    name: "AI Times",
    category: "Domestic",
    cadence: "국내 AI 뉴스 / 해설",
    description:
      "한국어로 AI 이슈를 읽기 쉬워서, 처음 AI 뉴스를 따라가는 사람에게 가장 부담이 적은 채널입니다.",
    url: "https://www.aitimes.kr",
    reason: "국내 흐름을 쉽게 이해하기 좋음",
  },
  {
    name: "ZDNet Korea",
    category: "Domestic",
    cadence: "IT / AI 산업 뉴스",
    description:
      "기술 산업 뉴스 중심이라 AI 기업, 제품, 행사 흐름을 빠르게 파악하기 좋습니다.",
    url: "https://zdnet.co.kr",
    reason: "산업 관점의 AI 뉴스를 보기 좋음",
  },
  {
    name: "전자신문",
    category: "Domestic",
    cadence: "기업 / 기술 / 산업 뉴스",
    description:
      "국내 기업과 산업 현장에서 AI가 어떻게 움직이는지 보기 좋은 대표 테크 미디어입니다.",
    url: "https://www.etnews.com",
    reason: "국내 기업 동향 파악에 유리",
  },
  {
    name: "The Korea Times",
    category: "Domestic",
    cadence: "영문 한국 뉴스 / 테크",
    description:
      "한국의 AI 이슈를 영어 시각으로도 읽어볼 수 있어 해외 감각까지 함께 익히기 좋습니다.",
    url: "https://www.koreatimes.co.kr",
    reason: "국내 이슈를 글로벌 톤으로 보기 좋음",
  },
  {
    name: "MIT Technology Review (AI)",
    category: "Global",
    cadence: "심층 해설 / AI 분석",
    description:
      "단순 속보보다 왜 중요한지까지 설명해줘서, 초심자가 큰 흐름을 이해하기 좋습니다.",
    url: "https://www.technologyreview.com/topic/artificial-intelligence/",
    reason: "맥락 이해에 강함",
  },
  {
    name: "VentureBeat AI",
    category: "Global",
    cadence: "비즈니스 / 엔터프라이즈 AI",
    description:
      "기업이 AI를 어떻게 실제 도입하는지 비즈니스 시점에서 보기 좋은 미디어입니다.",
    url: "https://venturebeat.com/ai/",
    reason: "실무형 AI 뉴스 파악에 유리",
  },
  {
    name: "AI News",
    category: "Global",
    cadence: "글로벌 AI 뉴스 / 해설",
    description:
      "AI 산업과 기업 움직임을 기사와 해설 형태로 가볍게 따라가기 좋은 해외 뉴스 사이트입니다.",
    url: "https://www.artificialintelligence-news.com/",
    reason: "해외 AI 뉴스 흐름을 폭넓게 보기 좋음",
  },
  {
    name: "WIRED AI",
    category: "Global",
    cadence: "AI 문화 / 산업 / 심층 기사",
    description:
      "AI를 기술만이 아니라 문화, 미디어, 비즈니스까지 넓게 다루는 매체라 시야를 넓히기 좋습니다.",
    url: "https://www.wired.com/tag/artificial-intelligence/",
    reason: "AI의 사회적 영향까지 함께 보기 좋음",
  },
  {
    name: "Reuters AI",
    category: "Global",
    cadence: "국제 속보 / 산업 뉴스",
    description:
      "빠르고 간결한 국제 뉴스 톤으로 AI 관련 핵심 속보를 확인하기 좋은 통신사 채널입니다.",
    url: "https://www.reuters.com/technology/artificial-intelligence/",
    reason: "짧고 명확한 국제 AI 뉴스 확인에 유리",
  },
  {
    name: "TechCrunch AI",
    category: "Global",
    cadence: "스타트업 / 투자 / 제품 뉴스",
    description:
      "AI 스타트업, 투자, 서비스 출시 흐름을 가장 빠르게 보기 좋은 테크 미디어입니다.",
    url: "https://techcrunch.com/category/artificial-intelligence/",
    reason: "스타트업과 시장 흐름 파악에 좋음",
  },
];

const dailyDrops = [
  {
    title: "오늘의 국내 AI 뉴스",
    summary:
      "국내 매체를 먼저 읽으면서 AI 이슈를 쉽게 따라가는 조합입니다. 용어가 낯설더라도 접근이 가장 편한 편입니다.",
    focus: "관심 포인트: 국내 기업, 행사, 정책, 서비스 변화",
    portals: ["AI Times", "ZDNet Korea", "전자신문"],
  },
  {
    title: "오늘의 글로벌 공식 발표",
    summary:
      "해외 뉴스 사이트를 중심으로 AI 기업과 시장의 움직임을 읽는 조합입니다. 투자, 서비스, 정책 변화를 빠르게 따라가기 좋습니다.",
    focus: "관심 포인트: 글로벌 뉴스, 투자, 시장 변화",
    portals: ["Reuters AI", "TechCrunch AI", "VentureBeat AI"],
  },
  {
    title: "오늘의 AI 큰 흐름",
    summary:
      "속보보다 큰 방향성을 읽고 싶을 때 보는 조합입니다. 왜 중요한지, 앞으로 어디로 가는지 이해하는 데 초점을 둡니다.",
    focus: "관심 포인트: 맥락, 해설, 장기 흐름",
    portals: ["MIT Technology Review (AI)", "WIRED AI", "The Korea Times"],
  },
  {
    title: "오늘의 실무형 AI 뉴스",
    summary:
      "AI가 실제 서비스와 기업 도입으로 이어지는 흐름을 보는 날입니다. 현업에서 체감되는 변화에 집중합니다.",
    focus: "관심 포인트: 도입 사례, 비즈니스, 생산성",
    portals: ["VentureBeat AI", "ZDNet Korea", "AI News"],
  },
];

const newsCategories = [
  {
    name: "모델",
    hashtag: "#모델",
    description: "새 모델, 칩, 성능 경쟁처럼 AI 기술 자체를 보는 관점",
    items: [
      {
        title: "컴퓨텍스 2026이 AI 중심 행사로 굳어지며 반도체 기업들의 경쟁 구도도 더 선명해지고 있다",
        summary:
          "AI 모델 경쟁은 이제 칩과 인프라 경쟁과 함께 읽어야 한다는 점을 보여주는 기사입니다.",
        url: "https://zdnet.co.kr/view/?no=20260403065246",
        source: "ZDNet Korea",
        publishedAt: "2026-04-03",
        views: "12.4K",
      },
      {
        title: "알리바바가 오픈소스 추론 모델 R1-Omni를 공개하며 멀티모달 경쟁도 더 빨라지고 있다",
        summary:
          "텍스트를 넘어서 음성과 이미지까지 다루는 모델 경쟁이 가속화되는 흐름을 보여줍니다.",
        url: "https://www.artificialintelligence-news.com/news/alibaba-unveils-r1-omni-open-source-multimodal-reasoning-model/",
        source: "AI News",
        publishedAt: "2026-03-31",
        views: "7.6K",
      },
      {
        title: "AI 연구의 다음 파도는 더 똑똑한 모델보다 더 잘 쓰이는 모델로 이동하고 있다",
        summary:
          "MIT Technology Review의 AI 섹션은 모델 경쟁을 성능 수치가 아닌 실제 영향 중심으로 읽게 도와줍니다.",
        url: "https://www.technologyreview.com/topic/artificial-intelligence/",
        source: "MIT Technology Review (AI)",
        publishedAt: "2026-04-05",
        views: "9.4K",
      },
    ],
  },
  {
    name: "활용사례",
    hashtag: "#활용사례",
    description: "AI가 실제 업무와 서비스에 어떻게 들어가는지 보는 관점",
    items: [
      {
        title: "기자들도 AI를 취재 도구와 편집 보조로 쓰기 시작하면서 콘텐츠 제작 방식이 빠르게 바뀌고 있다",
        summary:
          "AI가 미디어 현장에 실제로 어떻게 쓰이는지 보여주는 대표적인 활용 사례입니다.",
        url: "https://www.wired.com/story/tech-reporters-using-ai-write-edit-stories/",
        source: "WIRED AI",
        publishedAt: "2026-03-26",
        views: "8.1K",
      },
      {
        title: "기업 AI는 이제 답변형을 넘어 실제 업무를 처리하는 에이전트형으로 이동하고 있다",
        summary:
          "VentureBeat는 현업에서 AI를 도구가 아니라 행동 주체처럼 쓰는 흐름을 짚고 있습니다.",
        url: "https://venturebeat.com/ai/enterprise-ai-enters-the-age-of-agency-but-autonomy-must-be-governed//",
        source: "VentureBeat AI",
        publishedAt: "2025-09-17",
        views: "10.1K",
      },
      {
        title: "통신사와 대기업들도 AI 네이티브 업무 구조를 만들기 시작하며 적용 범위를 넓히고 있다",
        summary:
          "AI News의 기업 사례 기사들은 실제 서비스 운영에 AI를 어떻게 녹이는지 따라가기 좋습니다.",
        url: "https://www.artificialintelligence-news.com/",
        source: "AI News",
        publishedAt: "2026-04-05",
        views: "6.9K",
      },
    ],
  },
  {
    name: "윤리",
    hashtag: "#윤리",
    description: "규제, 책임, 신뢰, 저작권 같은 문제를 보는 관점",
    items: [
      {
        title: "AI 규제와 안전성 논의가 기술 경쟁만큼 중요해지며 기업들도 책임 있는 사용을 더 강조하고 있다",
        summary:
          "Reuters AI 섹션은 규제와 안전성 이슈를 빠르게 다뤄 기술 뉴스만 보면 놓치기 쉬운 부분을 채워줍니다.",
        url: "https://www.reuters.com/technology/artificial-intelligence/",
        source: "Reuters AI",
        publishedAt: "2026-04-05",
        views: "10.6K",
      },
      {
        title: "AI 시대엔 창작과 저작권의 경계가 더 복잡해지면서 콘텐츠 산업도 새로운 기준을 요구받고 있다",
        summary:
          "WIRED의 AI 태그 페이지는 기술과 문화, 저작권 충돌 지점을 함께 읽기에 좋습니다.",
        url: "https://www.wired.com/tag/artificial-intelligence/",
        source: "WIRED AI",
        publishedAt: "2026-04-05",
        views: "7.3K",
      },
      {
        title: "정책과 제도 논의는 AI 혁신 속도를 늦추는 게 아니라 신뢰를 만드는 기반으로 읽혀야 한다",
        summary:
          "The Korea Times는 한국과 글로벌 규제 흐름을 비교적 차분하게 따라가기 좋은 매체입니다.",
        url: "https://www.koreatimes.co.kr",
        source: "The Korea Times",
        publishedAt: "2026-04-05",
        views: "5.7K",
      },
    ],
  },
  {
    name: "경제",
    hashtag: "#경제",
    description: "투자, 고용, 생산성, 산업 구조 변화를 보는 관점",
    items: [
      {
        title: "2026년 미국 AI 스타트업 대형 투자 라운드가 급증하며 시장 과열과 기대가 함께 커지고 있다",
        summary:
          "TechCrunch는 올해 들어 1억 달러 이상을 유치한 미국 AI 스타트업이 크게 늘었다고 정리했습니다.",
        url: "https://techcrunch.com/2026/02/17/here-are-the-17-us-based-ai-companies-that-have-raised-100m-or-more-in-2026/",
        source: "TechCrunch AI",
        publishedAt: "2026-02-17",
        views: "9.8K",
      },
      {
        title: "기업들의 AI 예산은 더 커지지만 공급업체는 오히려 몇 곳으로 압축될 가능성이 커지고 있다",
        summary:
          "AI가 커질수록 모든 회사가 이익을 보는 게 아니라 몇몇 강자에게 집중될 수 있다는 관점을 보여줍니다.",
        url: "https://techcrunch.com/2025/12/30/vcs-predict-enterprises-will-spend-more-on-ai-in-2026-through-fewer-vendors/",
        source: "TechCrunch AI",
        publishedAt: "2025-12-30",
        views: "8.7K",
      },
      {
        title: "AI는 이제 개별 서비스 경쟁을 넘어 세계 산업 구조와 생산성에 영향을 주는 경제 변수로 받아들여지고 있다",
        summary:
          "MIT Technology Review의 AI 섹션은 AI를 경제와 사회 전체의 변화 관점으로 읽게 도와줍니다.",
        url: "https://www.technologyreview.com/topic/artificial-intelligence/",
        source: "MIT Technology Review (AI)",
        publishedAt: "2026-04-05",
        views: "11.2K",
      },
    ],
  },
  {
    name: "산업전략",
    hashtag: "#산업전략",
    description: "어떤 산업이 AI를 먼저 가져가고 있는지 보는 관점",
    items: [
      {
        title: "국내 언론과 기업들이 AI를 업무 흐름에 붙이기 시작하면서 산업별 속도 차이도 더 뚜렷해지고 있다",
        summary:
          "AI Times는 한국 산업 현장에서 어떤 분야가 빠르게 움직이는지 따라가기 좋은 출발점입니다.",
        url: "https://www.aitimes.kr",
        source: "AI Times",
        publishedAt: "2026-04-05",
        views: "6.4K",
      },
      {
        title: "기업형 AI 시장은 이제 파일럿보다 도입 전략과 운영 구조의 경쟁으로 넘어가고 있다",
        summary:
          "VentureBeat AI는 현업 도입과 운영 전략 관점에서 AI 산업 흐름을 읽기 좋은 소스입니다.",
        url: "https://venturebeat.com/ai/",
        source: "VentureBeat AI",
        publishedAt: "2026-04-05",
        views: "7.9K",
      },
      {
        title: "국내 산업 기사들을 보면 AI는 기술팀 이슈를 넘어 제조, 통신, 서비스 전반으로 번지고 있다",
        summary:
          "전자신문은 한국 기업과 산업 단위에서 AI가 어떻게 확산되는지 보기 좋은 매체입니다.",
        url: "https://www.etnews.com",
        source: "전자신문",
        publishedAt: "2026-04-05",
        views: "5.9K",
      },
    ],
  },
];

const portalGrid = document.getElementById("portal-grid-list");
const categoryTabs = document.getElementById("category-tabs");
const todayCard = document.getElementById("today-card");
const shuffleButton = document.getElementById("shuffle-button");
const todaySourceCount = document.getElementById("today-source-count");
const todayDate = document.getElementById("today-date");
const topCategoryList = document.getElementById("top-category-list");
const sourceList = document.getElementById("source-list");
const benchmarkChartList = document.getElementById("benchmark-chart-list");

const modelBenchmarks = [
  {
    model: "Gemini 3 Pro",
    provider: "Google",
    country: "미국",
    launch: "2025",
    rank: 1,
    chartValue: 100,
  },
  {
    model: "Grok 4.1 Thinking",
    provider: "xAI",
    country: "미국",
    launch: "2025",
    rank: 2,
    chartValue: 96,
  },
  {
    model: "Gemini 3 Flash",
    provider: "Google",
    country: "미국",
    launch: "2025",
    rank: 3,
    chartValue: 94,
  },
  {
    model: "Claude Opus 4.5 Thinking",
    provider: "Anthropic",
    country: "미국",
    launch: "2025",
    rank: 4,
    chartValue: 92,
  },
  {
    model: "Claude Opus 4.5",
    provider: "Anthropic",
    country: "미국",
    launch: "2025",
    rank: 5,
    chartValue: 90,
  },
  {
    model: "Grok 4.1",
    provider: "xAI",
    country: "미국",
    launch: "2025",
    rank: 6,
    chartValue: 88,
  },
  {
    model: "Gemini 3 Flash Minimal",
    provider: "Google",
    country: "미국",
    launch: "2025",
    rank: 7,
    chartValue: 86,
  },
  {
    model: "GPT-5.4",
    provider: "OpenAI",
    country: "미국",
    launch: "2026",
    rank: 8,
    chartValue: 84,
  },
  {
    model: "GPT-5.1 High",
    provider: "OpenAI",
    country: "미국",
    launch: "2025",
    rank: 9,
    chartValue: 82,
  },
  {
    model: "Claude Sonnet 4.5 Thinking",
    provider: "Anthropic",
    country: "미국",
    launch: "2025",
    rank: 10,
    chartValue: 80,
  },
  {
    model: "Claude Opus 4.1 Thinking",
    provider: "Anthropic",
    country: "미국",
    launch: "2025",
    rank: 11,
    chartValue: 78,
  },
  {
    model: "Claude Sonnet 4.5",
    provider: "Anthropic",
    country: "미국",
    launch: "2025",
    rank: 12,
    chartValue: 76,
  },
  {
    model: "ERNIE 5.0 Preview",
    provider: "Baidu",
    country: "중국",
    launch: "2025",
    rank: 13,
    chartValue: 74,
  },
  {
    model: "GLM-4.7",
    provider: "Zhipu AI",
    country: "중국",
    launch: "2025",
    rank: 16,
    chartValue: 72,
  },
  {
    model: "GPT-5 High",
    provider: "OpenAI",
    country: "미국",
    launch: "2025",
    rank: 18,
    chartValue: 68,
  },
  {
    model: "GPT-5.1",
    provider: "OpenAI",
    country: "미국",
    launch: "2025",
    rank: 19,
    chartValue: 66,
  },
  {
    model: "GPT-5.2 High",
    provider: "OpenAI",
    country: "미국",
    launch: "2025",
    rank: 20,
    chartValue: 64,
  },
  {
    model: "Qwen3 Max Preview",
    provider: "Alibaba",
    country: "중국",
    launch: "2025",
    rank: 21,
    chartValue: 60,
  },
  {
    model: "Kimi K2 Thinking Turbo",
    provider: "Moonshot AI",
    country: "중국",
    launch: "2025",
    rank: 24,
    chartValue: 56,
  },
  {
    model: "GPT-5.2",
    provider: "OpenAI",
    country: "미국",
    launch: "2025",
    rank: 26,
    chartValue: 52,
  },
];

const categories = ["All", ...new Set(portals.map((portal) => portal.category))];

let activeCategory = "All";
let currentDropIndex = getDayIndex();

function getDayIndex() {
  const now = new Date();
  const daySeed = Math.floor(now.getTime() / 86400000);
  return daySeed % dailyDrops.length;
}

function formatToday() {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

function renderTabs() {
  categoryTabs.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `category-tab${category === activeCategory ? " active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      renderTabs();
      renderPortals();
    });
    categoryTabs.appendChild(button);
  });
}

function renderTopCategories() {
  topCategoryList.innerHTML = "";

  newsCategories.forEach((group) => {
    const section = document.createElement("section");
    section.className = "news-category-group";

    const itemsMarkup = group.items
      .map(
        (item, index) => `
          <a class="top-three-card" href="${item.url}" target="_blank" rel="noreferrer">
            <div class="card-topline">
              <div class="card-topline-left">
                <span class="top-three-rank">0${index + 1}</span>
                <span class="hashtag-pill">${group.hashtag}</span>
              </div>
              <span class="view-pill">조회수 ${item.views}</span>
            </div>
            <div>
              <h3>${item.title}</h3>
              <p>${item.summary}</p>
            </div>
            <div class="top-meta-row">
              <p class="portal-meta">${item.source} · ${item.publishedAt}</p>
            </div>
          </a>
        `
      )
      .join("");

    section.innerHTML = `
      <div class="news-category-head">
        <div>
          <p class="section-kicker">Category</p>
          <h3>${group.name}</h3>
        </div>
        <p class="news-category-description">${group.description}</p>
      </div>
      <div class="top-three-grid">
        ${itemsMarkup}
      </div>
    `;

    topCategoryList.appendChild(section);
  });
}

function renderPortals() {
  portalGrid.innerHTML = "";

  const filtered = activeCategory === "All"
    ? portals
    : portals.filter((portal) => portal.category === activeCategory);

  filtered.forEach((portal, index) => {
    const article = document.createElement("article");
    article.className = "portal-card";
    article.style.animationDelay = `${index * 70}ms`;
    article.innerHTML = `
      <span class="portal-tag">${portal.category}</span>
      <div>
        <h3>${portal.name}</h3>
        <p class="portal-meta">${portal.cadence}</p>
      </div>
      <p class="portal-description">${portal.description}</p>
      <p class="portal-meta">${portal.reason}</p>
      <div class="portal-actions">
        <a class="portal-link" href="${portal.url}" target="_blank" rel="noreferrer">사이트 보기</a>
      </div>
    `;
    portalGrid.appendChild(article);
  });
}

function renderSources() {
  sourceList.innerHTML = "";

  portals.forEach((portal) => {
    const article = document.createElement("article");
    article.className = "source-card";
    article.innerHTML = `
      <strong>${portal.name}</strong>
      <p>${portal.category} · ${portal.cadence}</p>
      <a href="${portal.url}" target="_blank" rel="noreferrer">${portal.url}</a>
    `;
    sourceList.appendChild(article);
  });
}

function renderBenchmarks() {
  benchmarkChartList.innerHTML = "";

  [...modelBenchmarks]
    .sort((a, b) => b.chartValue - a.chartValue)
    .forEach((item) => {
    const chart = document.createElement("article");
    chart.className = "benchmark-chart-card";
    chart.innerHTML = `
      <div class="benchmark-bar-wrap">
        <div class="benchmark-bar-track vertical">
          <div class="benchmark-bar-fill vertical" style="height: ${Math.min(item.chartValue, 100)}%"></div>
        </div>
      </div>
      <div class="benchmark-chart-meta">
        <strong>${item.chartValue}</strong>
        <span class="hashtag-pill">#${item.country}</span>
      </div>
      <div class="benchmark-chart-labels">
        <h3>${item.model}</h3>
        <p class="portal-meta">${item.provider} · ${item.launch} 출시 · Overall rank #${item.rank}</p>
      </div>
    `;
    benchmarkChartList.appendChild(chart);
    });
}

function renderTodayCard() {
  const drop = dailyDrops[currentDropIndex];
  const linkedPortals = drop.portals
    .map((name) => portals.find((portal) => portal.name === name))
    .filter(Boolean);

  todaySourceCount.textContent = linkedPortals.length;
  todayDate.textContent = formatToday();

  todayCard.innerHTML = `
    <div class="today-main">
      <span class="today-label">TODAY NEWS MIX</span>
      <h3>${drop.title}</h3>
      <p class="today-summary">${drop.summary}</p>
      <p class="today-note">${drop.focus}</p>
      <div class="today-links">
        ${linkedPortals
          .map(
            (portal) =>
              `<a class="portal-link" href="${portal.url}" target="_blank" rel="noreferrer">${portal.name}</a>`
          )
          .join("")}
      </div>
    </div>
    <div class="today-side">
      ${linkedPortals
        .map(
          (portal) => `
            <div class="today-side-card">
              <strong>${portal.name}</strong>
              <p>${portal.description}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

shuffleButton.addEventListener("click", () => {
  currentDropIndex = (currentDropIndex + 1) % dailyDrops.length;
  renderTodayCard();
});

renderTopCategories();
renderTabs();
renderPortals();
renderSources();
renderBenchmarks();
renderTodayCard();
