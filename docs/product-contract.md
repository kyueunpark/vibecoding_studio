# Product Contract — Developer Portfolio (박규은)

## 개요
- **목적**: 박규은의 개발자 포트폴리오를 보여주는 단일 페이지 웹사이트
- **타깃 사용자**: 채용 담당자, 동료 개발자, 협업 제안자
- **핵심 가치**: 한 페이지 안에서 "이 사람이 누구이고, 뭘 만들었고, 어떻게 연락할지"를 1분 안에 파악 가능

## 기술 스택
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4 (2025년 V4 사용법 준수)
- shadcn/ui (Button, Card, Badge 등 프리빌트 컴포넌트)
- 데이터베이스 없음 — 콘텐츠는 `src/data/portfolio.ts` 한 파일로 관리
- 배포 대상: Vercel

## 디자인 톤
- **Playful / Creative**
- 밝은 그라데이션 + 블롭 배경, 큼직한 타이포그래피, 호버 시 카드가 움직이는 마이크로 인터랙션
- 다크/라이트 어느 한쪽으로 치우치지 않고 컬러풀한 액센트가 핵심

## 핵심 기능 (Core Features)

### F1. Hero + About 섹션
- 이름, 직무, 한 줄 태그라인을 한눈에 보여줌
- 짧은 자기소개 문단
- 기술 스택 배지 리스트
- "프로젝트 보기" / "연락하기" CTA 버튼

### F2. Projects 섹션
- 2~4개의 프로젝트 카드를 그리드로 표시
- 각 카드: 제목, 한 줄 설명, 사용 기술 배지, GitHub/Demo 링크
- 카드 호버 시 살짝 떠오르는 인터랙션

### F3. Contact 섹션
- 이메일 / GitHub / LinkedIn 링크 버튼
- 이메일은 `mailto:` 링크로 동작
- 외부 링크는 새 탭에서 열림

### F4. 네비게이션
- 상단 고정(sticky) 네비게이션 바
- 섹션별 앵커 링크 (#about, #projects, #contact)
- 스무스 스크롤로 이동

### F5. 콘텐츠 편집 용이성
- 이름, 소개, 기술, 프로젝트, 연락처는 **단 하나의 파일** (`src/data/portfolio.ts`)에서 수정 가능
- 비개발자도 객체 리터럴만 수정해도 사이트 반영

## 주요 사용자 흐름 (Primary User Flows)

### Flow A. 채용 담당자가 포트폴리오를 빠르게 훑어봄
1. 사이트 진입 → Hero에서 이름/직무/태그라인 확인
2. 스크롤 또는 nav 클릭으로 Projects 섹션 이동
3. 관심 프로젝트의 GitHub/Demo 링크 클릭
4. Contact로 이동 → 이메일/LinkedIn으로 연락

### Flow B. 소유자(박규은)가 콘텐츠를 업데이트함
1. `src/data/portfolio.ts` 파일을 연다
2. 객체 필드 (예: projects 배열에 새 프로젝트 추가) 수정
3. 저장 → 핫 리로드로 즉시 확인
4. git commit & push → Vercel 자동 배포

## 수용 기준 (Acceptance Criteria)

### AC1. Hero 섹션
- [ ] "박규은" 이름이 가장 큰 텍스트로 표시됨
- [ ] 태그라인과 직무가 함께 노출됨
- [ ] 두 개의 CTA 버튼이 보임 (Projects, Contact)
- [ ] CTA 클릭 시 해당 섹션으로 스무스 스크롤

### AC2. About 섹션
- [ ] 자기소개 문단이 한 단락 이상 보임
- [ ] 기술 스택이 배지 형태로 5개 이상 표시됨

### AC3. Projects 섹션
- [ ] 최소 3개의 프로젝트 카드가 그리드로 렌더됨
- [ ] 각 카드에 제목/설명/기술 배지가 모두 표시됨
- [ ] GitHub/Demo 링크는 새 탭에서 열림
- [ ] 모바일에서 1열, 태블릿에서 2열, 데스크탑에서 3열로 반응형

### AC4. Contact 섹션
- [ ] 이메일 버튼 클릭 시 `mailto:` 동작
- [ ] GitHub / LinkedIn 버튼이 외부 탭으로 열림

### AC5. 반응형
- [ ] 모바일(<640px), 태블릿(768px), 데스크탑(>1024px) 모두 깨지지 않음
- [ ] 텍스트 가독성 확보 (최소 16px 본문)

### AC6. 성능 / 품질
- [ ] 첫 페이지 로드 시 콘솔 에러 없음
- [ ] Lighthouse Performance 점수 80 이상 (개발용 빌드 기준은 제외)
- [ ] `npm run build` 통과
- [ ] `npm run lint` 통과

## 핵심 E2E 시나리오 (Must-Pass)

### E2E-1. 홈 진입부터 연락까지
1. `/` 진입
2. Hero에서 이름 "박규은" 확인
3. nav의 "Projects" 클릭 → Projects 섹션으로 스크롤
4. 임의 프로젝트 카드의 GitHub 링크 클릭 → 새 탭 오픈
5. nav의 "Contact" 클릭 → Contact 섹션으로 스크롤
6. 이메일 버튼 클릭 → `mailto:` 다이얼로그 또는 메일 클라이언트 오픈

### E2E-2. 콘텐츠 편집
1. `src/data/portfolio.ts` 에서 `name` 값을 변경
2. 저장 → 브라우저에 핫 리로드 반영
3. Hero 텍스트가 변경된 이름으로 표시됨

## 비기능 요구사항
- 다국어 지원 없음 (한국어 우선)
- 인증 없음
- 백엔드/DB 없음
- 폼 제출 없음 (이메일은 mailto: 사용)

## 범위 외 (Out of Scope)
- 블로그
- 다국어
- 다크/라이트 토글 (디자인 톤이 이미 컬러풀)
- CMS 연동
- 분석/Analytics (초기 버전)
