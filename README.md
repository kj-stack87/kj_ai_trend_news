# AI TREND DROP

주요 AI 트렌드 포털을 모아서, 날짜 기준으로 오늘의 큐레이션이 보이도록 만든 정적 웹페이지입니다.

## 구성

- `index.html`: 메인 페이지
- `styles.css`: 트렌디하고 심플한 랜딩 UI
- `app.js`: 포털 데이터와 오늘의 드롭 로직

## 매일 1개 발행하는 방법

1. `app.js`의 `dailyDrops` 배열에 오늘 다룰 주제를 추가합니다.
2. 필요한 경우 `portals` 배열에 새 소스를 추가합니다.
3. 정적 호스팅에 배포합니다.

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
