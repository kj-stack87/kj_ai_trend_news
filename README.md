# AI TREND DROP

주요 AI 트렌드 포털을 모아서, 날짜 기준으로 오늘의 큐레이션이 보이도록 만든 정적 웹페이지입니다.

## 구성

- `index.html`: 메인 페이지
- `styles.css`: 트렌디하고 심플한 랜딩 UI
- `main.js`: JSON 데이터를 읽어 화면에 렌더링하는 스크립트
- `data/portals.json`: 고정 포털 목록
- `data/news.json`: 자동 갱신되는 뉴스 데이터
- `data/models.json`: 모델 성능 비교 데이터
- `scripts/update-news.mjs`: 매일 뉴스 JSON을 갱신하는 스크립트

## 매일 1개 발행하는 방법

1. 뉴스는 `data/news.json`에서 관리됩니다.
2. 포털 목록은 `data/portals.json`에서 관리됩니다.
3. 모델 비교는 `data/models.json`에서 관리됩니다.
4. 변경 사항이 `main`에 반영되면 GitHub Pages가 자동 배포합니다.

## 배포 추천

- GitHub Pages
- Vercel
- Netlify

정적 파일만으로 동작해서 어느 쪽이든 바로 배포할 수 있습니다.

## GitHub Pages 배포

이 저장소에는 GitHub Pages 자동 배포용 워크플로우가 포함되어 있습니다.

1. GitHub에 새 저장소를 만듭니다.
2. 현재 폴더 파일을 그 저장소에 업로드합니다.
3. 기본 브랜치를 `main`으로 둡니다.
4. GitHub 저장소에서 `Settings > Pages`로 이동합니다.
5. `Build and deployment`를 `GitHub Actions`로 선택합니다.
6. 이후 `main` 브랜치에 푸시할 때마다 자동 배포됩니다.

배포가 끝나면 보통 아래 형식의 링크가 생성됩니다.

`https://<github-username>.github.io/<repo-name>/`

## 매일 자동 업데이트

이 저장소에는 `Update Daily News` GitHub Actions 워크플로우가 포함되어 있습니다.

- GitHub 서버에서 매일 자동 실행됩니다.
- 내 컴퓨터를 켜둘 필요가 없습니다.
- `data/news.json`이 갱신되면 자동 커밋됩니다.
- 그 커밋으로 GitHub Pages가 다시 배포됩니다.

즉, 흐름은 아래와 같습니다.

1. GitHub Actions가 매일 뉴스 수집
2. `data/news.json` 업데이트
3. 자동 커밋 및 푸시
4. GitHub Pages 자동 재배포

참고:

- 자동 뉴스 수집은 Google News RSS 검색 결과를 기반으로 합니다.
- 사이트 구조나 검색 결과에 따라 기사 품질은 달라질 수 있습니다.
- 모델 성능 비교는 현재 자동 갱신이 아니라 `data/models.json` 기반입니다.
