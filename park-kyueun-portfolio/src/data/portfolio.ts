// ──────────────────────────────────────────────────────────────────────────
// 📝 이 파일만 수정하면 사이트의 모든 콘텐츠가 바뀝니다.
//    이름 / 직무 / 소개 / 기술 스택 / 프로젝트 / 연락처를 자유롭게 편집하세요.
// ──────────────────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  description: string;
  tech: string[];
  emoji: string;
  links: {
    github?: string;
    demo?: string;
  };
};

export type Portfolio = {
  name: string;
  role: string;
  tagline: string;
  about: string[];
  skills: string[];
  marquee: string[];
  projects: Project[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
};

export const portfolio: Portfolio = {
  name: "박규은",
  role: "Frontend Developer",
  tagline: "재미있게 만들고, 단단하게 다듬는 개발자.",

  about: [
    "안녕하세요! 사용자가 한 번 더 클릭하고 싶어지는 인터페이스를 좋아하는 프론트엔드 개발자 박규은입니다.",
    "복잡한 문제를 작고 명료한 컴포넌트로 쪼개는 일에 시간을 많이 씁니다. React/Next.js 생태계에서 일하며, 디자인 시스템과 마이크로 인터랙션, 그리고 성능 최적화에 관심이 많습니다.",
    "사이드 프로젝트로는 작은 도구들을 만들어 직접 사용해보는 걸 좋아해요. 지금은 AI 도구를 일상 워크플로우에 녹이는 실험을 하고 있습니다.",
  ],

  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Figma",
    "Vercel",
  ],

  // Hero 하단 마키(흐르는 텍스트). 자유롭게 한 줄 키워드를 늘리거나 줄이세요.
  marquee: [
    "TypeScript",
    "React",
    "Next.js",
    "Design Systems",
    "Vibe Coding",
    "Micro Interactions",
    "Tailwind v4",
    "AI Tooling",
  ],

  projects: [
    {
      title: "Vibe Studio",
      description:
        "팀이 함께 무드보드를 만들고 컬러/타이포 토큰을 자동으로 추출하는 협업 도구.",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      emoji: "🎨",
      links: {
        github: "https://github.com/example/vibe-studio",
        demo: "https://example.com/vibe-studio",
      },
    },
    {
      title: "PomoPet",
      description:
        "포모도로 타이머를 돌릴수록 픽셀 펫이 성장하는 사이드 프로젝트. PWA로도 동작.",
      tech: ["React", "Vite", "IndexedDB", "PWA"],
      emoji: "🐣",
      links: {
        github: "https://github.com/example/pomopet",
      },
    },
    {
      title: "Recipe Roulette",
      description:
        "냉장고 재료를 입력하면 AI가 레시피를 추천해주는 미니 웹앱. 음성 입력 지원.",
      tech: ["Next.js", "OpenAI", "Web Speech API"],
      emoji: "🍳",
      links: {
        github: "https://github.com/example/recipe-roulette",
        demo: "https://example.com/recipe-roulette",
      },
    },
    {
      title: "Tiny Charts",
      description:
        "한 줄로 import 해서 쓰는 가벼운 React 차트 라이브러리. SVG 기반, 의존성 0.",
      tech: ["TypeScript", "SVG", "Rollup"],
      emoji: "📊",
      links: {
        github: "https://github.com/example/tiny-charts",
      },
    },
  ],

  contact: {
    email: "hello@example.com",
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/your-handle",
  },
};
