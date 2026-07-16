/* Shared portfolio catalog — single source of truth */
window.PORTFOLIOS = [
  { id: "batch", file: "pages/batch.html", label: "Batch IaC", group: "infra", desc: "두범 Batch 워크로드 IaC", icon: "batch" },
  { id: "structure", file: "pages/structure.html", label: "Automation Infra", group: "infra", desc: "Docker Compose 자동화 인프라", icon: "docker" },
  { id: "importer", file: "pages/importer.html", label: "Analysis Importer", group: "infra", desc: "두범비즈 통계 ETL 업로더", icon: "importer" },
  { id: "jenkins", file: "pages/jenkins.html", label: "Jenkins Pipeline", group: "ci", desc: "공유 파이프라인 라이브러리", icon: "jenkins" },
  { id: "github-actions", file: "pages/github-actions.html", label: "GitHub Actions", group: "ci", desc: "공용 Actions · 언어별 배포 플랫폼", icon: "actions" },
  { id: "playwright", file: "pages/playwright.html", label: "Playwright E2E", group: "qa", desc: "두범마켓 E2E 자동화 테스트", icon: "playwright" },
  { id: "db-biz-android", file: "pages/db-biz-android.html", label: "비즈 Android", group: "mobile", desc: "두범비즈 Android", icon: "android" },
  { id: "db-biz-ios", file: "pages/db-biz-ios.html", label: "비즈 iOS", group: "mobile", desc: "두범비즈 iOS", icon: "apple" },
  { id: "db-market-android", file: "pages/db-market-android.html", label: "마켓 Android", group: "mobile", desc: "두범마켓 Android", icon: "android" },
  { id: "db-market-ios", file: "pages/db-market-ios.html", label: "마켓 iOS", group: "mobile", desc: "두범마켓 iOS", icon: "apple" },
  { id: "review-scraper", file: "pages/app-review-scraper.html", label: "리뷰 스크래퍼", group: "mobile", desc: "앱 스토어 리뷰 수집", icon: "review" },
  { id: "ani-review", file: "pages/ani-review.html", label: "Ani Review", group: "frontend", desc: "Jikan · Supabase 애니 리뷰 웹앱", icon: "web" },
  { id: "cat-vs-dog", file: "pages/cat-vs-dog.html", label: "Cat vs Dog", group: "ml", desc: "CNN 이미지 이진 분류", icon: "ml" }
];
