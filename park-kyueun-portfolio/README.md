# 박규은 — Developer Portfolio

Next.js 16 + Tailwind CSS v4로 만든 단일 페이지 개발자 포트폴리오.
DB 없음 · 프론트엔드 전용 · 콘텐츠는 파일 한 개로 관리.

## 빠르게 보기

```bash
cd park-kyueun-portfolio
npm install
npm run dev
```

→ http://localhost:3000

## 구성

| 섹션 | 위치 |
| --- | --- |
| Hero + 마키(흐르는 텍스트) | `src/components/sections/hero.tsx` |
| About + 기술 스택 배지 | `src/components/sections/about.tsx` |
| Projects 그리드 | `src/components/sections/projects.tsx` |
| Contact (이메일/GitHub/LinkedIn) | `src/components/sections/contact.tsx` |
| 상단 네비게이션 | `src/components/nav.tsx` |
| UI 프리미티브 (Button/Card/Badge) | `src/components/ui/` |

## ✏️ 콘텐츠 수정하기

**`src/data/portfolio.ts` 한 파일만** 수정하면 사이트의 모든 텍스트가 바뀝니다.

```ts
export const portfolio: Portfolio = {
  name: "박규은",
  role: "Frontend Developer",
  tagline: "재미있게 만들고, 단단하게 다듬는 개발자.",
  about: ["...", "..."],
  skills: ["TypeScript", "React", ...],
  marquee: ["TypeScript", "React", ...],
  projects: [
    {
      title: "Vibe Studio",
      description: "...",
      tech: ["Next.js", "TypeScript"],
      emoji: "🎨",
      links: { github: "...", demo: "..." },
    },
    // ...
  ],
  contact: {
    email: "hello@example.com",
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle",
  },
};
```

저장하면 `npm run dev` 핫 리로드로 즉시 반영됩니다.

## 🎨 디자인 토큰 바꾸기

`src/app/globals.css`의 `@theme` 블록에서 색상/폰트를 조정할 수 있습니다.

```css
@theme {
  --color-cream:  #fff8ec; /* 배경 */
  --color-ink:    #14110f; /* 텍스트/테두리 */
  --color-pink:   #ff5fa2; /* 주 액센트 */
  --color-blue:   #4d6dff;
  --color-yellow: #ffd84d;
  --color-lime:   #c5f04a;
  /* ... */
}
```

색을 바꾸면 Hero 블롭, 배지, 카드 hover 그림자가 모두 함께 바뀝니다.

## 스택

- **Next.js 16** (App Router · Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (`@theme` CSS 변수 기반)
- **shadcn 스타일 컴포넌트** (Button / Card / Badge 수동 구현)
- **lucide-react** + 인라인 SVG 브랜드 아이콘
- **DB / API / 인증 없음** — 100% 정적 페이지로 빌드됨

## 배포

Vercel에 그대로 배포 가능합니다.

```bash
npm run build   # ✅ ○ (Static) 라우트로 빌드 확인
```

Vercel 프로젝트의 Root Directory를 `park-kyueun-portfolio`로 지정하세요.

## 수용 기준 (Acceptance Criteria)

자세한 사양과 E2E 시나리오는 저장소 루트의 [`docs/product-contract.md`](../docs/product-contract.md)에서 확인할 수 있습니다.
