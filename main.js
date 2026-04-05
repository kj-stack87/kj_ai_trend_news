const portalGrid = document.getElementById("portal-grid-list");
const categoryTabs = document.getElementById("category-tabs");
const todayCard = document.getElementById("today-card");
const shuffleButton = document.getElementById("shuffle-button");
const todaySourceCount = document.getElementById("today-source-count");
const todayDate = document.getElementById("today-date");
const topCategoryList = document.getElementById("top-category-list");
const sourceList = document.getElementById("source-list");
const benchmarkChartList = document.getElementById("benchmark-chart-list");

let portals = [];
let dailyDrops = [];
let newsCategories = [];
let modelBenchmarks = [];
let activeCategory = "All";
let currentDropIndex = 0;

async function loadJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`);
  }
  return response.json();
}

function getDayIndex(length) {
  const now = new Date();
  const daySeed = Math.floor(now.getTime() / 86400000);
  return daySeed % Math.max(length, 1);
}

function formatToday() {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date());
}

function getCategories() {
  return ["All", ...new Set(portals.map((portal) => portal.category))];
}

function renderTabs() {
  categoryTabs.innerHTML = "";

  getCategories().forEach((category) => {
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
      .slice(0, 3)
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

  const filtered =
    activeCategory === "All"
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
  if (!drop) {
    todayCard.innerHTML = "";
    return;
  }

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

async function initialize() {
  try {
    const [portalData, newsData, modelData] = await Promise.all([
      loadJson("./data/portals.json"),
      loadJson("./data/news.json"),
      loadJson("./data/models.json")
    ]);

    portals = portalData.portals;
    dailyDrops = newsData.dailyDrops;
    newsCategories = newsData.newsCategories;
    modelBenchmarks = modelData.modelBenchmarks;
    currentDropIndex = getDayIndex(dailyDrops.length);

    renderTopCategories();
    renderTabs();
    renderPortals();
    renderSources();
    renderBenchmarks();
    renderTodayCard();
  } catch (error) {
    console.error(error);
    topCategoryList.innerHTML =
      '<p class="portal-meta">데이터를 불러오지 못했습니다. Live Server 또는 배포 링크에서 다시 확인해 주세요.</p>';
  }
}

shuffleButton.addEventListener("click", () => {
  currentDropIndex = (currentDropIndex + 1) % Math.max(dailyDrops.length, 1);
  renderTodayCard();
});

initialize();
