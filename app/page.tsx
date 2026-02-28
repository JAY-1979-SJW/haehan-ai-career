const BG = "#1B2838";
const DARK = "#141E2A";
const CARD = "#243144";
const BORDER = "rgba(91,164,217,0.2)";
const ORANGE = "#F47920";
const BLUE = "#5BA4D9";
const MUTED = "#A0AEC0";
const GREEN = "#48BB78";

const values = [
  { icon: "🤖", title: "AI 퍼스트", desc: "모든 의사결정의 중심에 AI 기술을 둡니다. 반복 업무는 자동화하고, 사람은 창의적인 일에 집중합니다." },
  { icon: "🏗️", title: "현장 중심", desc: "건설 현장의 실제 문제를 이해하고 해결합니다. 실무자가 진짜 쓰는 도구를 만듭니다." },
  { icon: "🚀", title: "빠른 실행", desc: "완벽한 계획보다 빠른 실행을 중시합니다. 배포하고, 피드백 받고, 개선합니다." },
  { icon: "🌐", title: "산업 확장", desc: "건설업을 시작으로 모든 산업으로 AI를 확장합니다. 큰 그림을 함께 그립니다." },
];

const talents = [
  { icon: "💡", title: "문제 해결사", desc: "복잡한 현장 문제를 기술로 풀어내는 것을 즐기는 분" },
  { icon: "⚡", title: "자기 주도형", desc: "지시를 기다리기보다 스스로 과제를 찾고 실행하는 분" },
  { icon: "🔗", title: "도메인 + 기술 융합", desc: "산업 현장 지식과 AI/소프트웨어 기술을 함께 갖춘 분" },
  { icon: "📈", title: "성장 지향", desc: "빠르게 변하는 AI 환경에서 끊임없이 배우고 성장하는 분" },
];

const positions = [
  {
    title: "AI 개발자",
    type: "정규직",
    tags: ["Python", "LLM", "AutoCAD API", "FastAPI"],
    color: ORANGE,
    open: true,
    tasks: [
      "건설 현장 업무 자동화 AI 모델 개발",
      "AutoCAD·BIM·나라장터 API 연동 및 AI 파이프라인 구축",
      "LLM 기반 서류 자동생성 시스템 개발",
      "CAD 도면 분석 및 물량산출 알고리즘 개발",
    ],
    requirements: [
      "Python 개발 2년 이상 또는 그에 준하는 역량",
      "LLM API (OpenAI, Claude 등) 활용 경험",
      "REST API 개발 및 연동 경험",
    ],
    preferred: [
      "AutoCAD API 또는 CAD 파일 처리 경험",
      "건설·소방·전기 분야 도메인 지식",
      "나라장터 데이터 수집/분석 경험",
    ],
  },
  {
    title: "풀스택 개발자",
    type: "정규직",
    tags: ["Next.js", "TypeScript", "Python", "Supabase"],
    color: BLUE,
    open: true,
    tasks: [
      "SaaS 플랫폼 프론트엔드/백엔드 개발",
      "구독 결제 시스템 및 사용자 관리 구현",
      "AI 도구 UI/UX 설계 및 구현",
      "성능 최적화 및 서비스 안정화",
    ],
    requirements: [
      "Next.js + TypeScript 개발 2년 이상",
      "REST API 설계 및 개발 경험",
      "DB 설계 및 쿼리 최적화 경험 (PostgreSQL 등)",
    ],
    preferred: [
      "Supabase 또는 Firebase 사용 경험",
      "SaaS 제품 개발 경험",
      "CI/CD 파이프라인 구성 경험",
    ],
  },
  {
    title: "건설IT 컨설턴트",
    type: "정규직 / 프리랜서",
    tags: ["건설", "소방", "전기", "CAD", "BIM"],
    color: GREEN,
    open: true,
    tasks: [
      "건설 현장 업무 프로세스 분석 및 디지털화 방안 수립",
      "고객사 AI 도구 도입 컨설팅 및 교육",
      "제품 기획 단계 도메인 자문",
      "나라장터 입찰 전략 수립 지원",
    ],
    requirements: [
      "건설·소방·전기·기계 분야 현장 경험 3년 이상",
      "CAD 도면 이해 및 물량산출 업무 경험",
      "고객 커뮤니케이션 및 프레젠테이션 역량",
    ],
    preferred: [
      "BIM 소프트웨어 사용 경험",
      "IT 솔루션 도입 또는 컨설팅 경험",
      "소방시설 설계·시공 면허 보유자 우대",
    ],
  },
];

const process = [
  { step: "01", title: "서류 접수", desc: "이력서 + 포트폴리오를 info@haehan-ai.kr로 제출" },
  { step: "02", title: "서류 검토", desc: "접수 후 7일 이내 결과 안내 (합격자에 한해 개별 연락)" },
  { step: "03", title: "면접", desc: "1차 화상 면접 → 2차 대면 면접 (포지션별 상이)" },
  { step: "04", title: "최종 합격", desc: "처우 협의 후 입사일 확정" },
];

export default function CareerPage() {
  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh" }}>
      {/* 상단 오렌지 라인 */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-50" style={{ backgroundColor: ORANGE }} />

      {/* 헤더 */}
      <header
        className="sticky top-[3px] z-40 border-b"
        style={{ backgroundColor: `${DARK}f5`, borderColor: BORDER, backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="https://haehan-ai.kr" className="flex items-center gap-2 select-none">
            <img src="/logo-header.svg" alt="해한Ai Engineering" className="h-7" />
            <span className="text-xs font-medium hidden sm:inline" style={{ color: MUTED }}>채용</span>
          </a>
          <a href="https://haehan-ai.kr" className="text-sm transition-colors hover:text-white" style={{ color: BLUE }}>
            ← 홈으로
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-20">

        {/* 히어로 */}
        <section className="text-center pt-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-5 border"
            style={{ backgroundColor: `${ORANGE}15`, borderColor: `${ORANGE}30`, color: ORANGE }}
          >
            🚀 We&apos;re Hiring
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            AI로 산업을 혁신하는<br />
            <span style={{ color: ORANGE }}>기술 기업</span>에 합류하세요
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: MUTED }}>
            해한Ai Engineering은 건설업을 시작으로 모든 산업 현장의 반복 업무를
            AI로 자동화합니다. 함께 더 큰 그림을 그려갈 분을 찾습니다.
          </p>
        </section>

        {/* 회사 비전 */}
        <section>
          <div className="rounded-2xl p-8 sm:p-10 border relative overflow-hidden" style={{ backgroundColor: CARD, borderColor: `${ORANGE}30` }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none" style={{ backgroundColor: `${ORANGE}08` }} />
            <div className="relative">
              <div className="text-sm font-semibold mb-3" style={{ color: ORANGE }}>COMPANY VISION</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                "AI로 산업을 혁신하는<br className="hidden sm:block" /> 기술 기업"
              </h2>
              <p className="text-base leading-relaxed max-w-2xl" style={{ color: MUTED }}>
                AI 프로그램을 개발하고, AutoCAD·BIM·ERP·나라장터 등 기존 시스템과 연동하여
                새로운 가치를 만듭니다. 현재 건설업 전 공종(건축·소방·전기·기계·토목)을
                아우르는 AI 통합 플랫폼을 운영하며, 향후 제조·물류·에너지 등
                다양한 산업으로 확장합니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["30개+ AI 도구", "건설업 전 공종", "15GB+ 입찰 DB", "SaaS 플랫폼"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border" style={{ borderColor: `${ORANGE}40`, color: ORANGE }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 핵심 가치 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">우리가 일하는 방식</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl p-5 border" style={{ backgroundColor: CARD, borderColor: BORDER }}>
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-white font-semibold mb-2">{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 인재상 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-2">우리가 찾는 인재상</h2>
          <p className="text-sm mb-6" style={{ color: MUTED }}>포지션에 관계없이 이런 분과 함께하고 싶습니다.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {talents.map((t) => (
              <div key={t.title} className="rounded-xl p-5 border flex items-start gap-4" style={{ backgroundColor: CARD, borderColor: BORDER }}>
                <span className="text-2xl flex-shrink-0">{t.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{t.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 채용 포지션 */}
        <section id="positions">
          <h2 className="text-xl font-bold text-white mb-2">채용 포지션</h2>
          <p className="text-sm mb-6" style={{ color: MUTED }}>현재 모든 포지션 상시 채용 중입니다.</p>
          <div className="space-y-5">
            {positions.map((pos) => (
              <div key={pos.title} className="rounded-2xl border overflow-hidden" style={{ borderColor: `${pos.color}30` }}>
                {/* 포지션 헤더 */}
                <div className="px-6 py-5 flex items-start justify-between gap-4" style={{ backgroundColor: `${pos.color}10` }}>
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-white font-bold text-lg">{pos.title}</h3>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: `${pos.color}20`, color: pos.color }}>
                        {pos.type}
                      </span>
                      {pos.open && (
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: `${GREEN}20`, color: GREEN }}>
                          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: GREEN }} />
                          채용 중
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pos.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded border" style={{ borderColor: `${pos.color}30`, color: MUTED }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`mailto:info@haehan-ai.kr?subject=[채용지원] ${pos.title}`}
                    className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-80"
                    style={{ backgroundColor: pos.color }}
                  >
                    지원하기
                  </a>
                </div>

                {/* 포지션 상세 */}
                <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-6" style={{ backgroundColor: CARD }}>
                  <div>
                    <h4 className="text-xs font-semibold uppercase mb-3" style={{ color: pos.color }}>주요 업무</h4>
                    <ul className="space-y-2">
                      {pos.tasks.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: MUTED }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: pos.color }} />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase mb-3" style={{ color: pos.color }}>자격 요건</h4>
                    <ul className="space-y-2">
                      {pos.requirements.map((r, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: MUTED }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: pos.color }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase mb-3" style={{ color: GREEN }}>우대 사항</h4>
                    <ul className="space-y-2">
                      {pos.preferred.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm" style={{ color: MUTED }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: GREEN }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 채용 프로세스 */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6">채용 프로세스</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((p, i) => (
              <div key={p.step} className="rounded-xl p-5 border relative" style={{ backgroundColor: CARD, borderColor: BORDER }}>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 z-10" style={{ backgroundColor: BORDER }} />
                )}
                <div className="text-2xl font-black mb-3" style={{ color: ORANGE }}>{p.step}</div>
                <h3 className="text-white font-semibold mb-2 text-sm">{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: MUTED }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 지원 안내 CTA */}
        <section>
          <div
            className="rounded-2xl p-8 sm:p-10 text-center border"
            style={{ backgroundColor: CARD, borderColor: `${ORANGE}30` }}
          >
            <h2 className="text-2xl font-bold text-white mb-3">지금 바로 지원하세요</h2>
            <p className="mb-6 leading-relaxed" style={{ color: MUTED }}>
              이력서와 포트폴리오(선택)를 아래 이메일로 보내주세요.<br />
              포지션명을 제목에 명시해 주시면 빠른 검토에 도움이 됩니다.
            </p>
            <a
              href="mailto:info@haehan-ai.kr?subject=[채용지원] 포지션명"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              ✉️ info@haehan-ai.kr 로 지원하기
            </a>
            <p className="mt-4 text-xs" style={{ color: `${MUTED}80` }}>
              서류 검토 후 7일 이내 결과 안내 · 전형 결과는 합격자에 한해 개별 연락
            </p>
          </div>
        </section>

      </main>

      {/* 푸터 */}
      <footer className="border-t mt-4 py-8" style={{ borderColor: BORDER }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-2">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs" style={{ color: `${MUTED}80` }}>
            <span>상호: 해한AI엔지니어링</span>
            <span>대표자: 신재우</span>
            <span>사업자등록번호: 372-34-00685</span>
            <span>주소: 서울특별시 강동구 고덕비즈밸리로 26, 3층 비325호</span>
            <span>이메일: info@haehan-ai.kr</span>
          </div>
          <p className="text-xs" style={{ color: `${MUTED}50` }}>
            © 2025 해한AI엔지니어링. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 하단 오렌지 라인 */}
      <div className="h-[3px] w-full" style={{ backgroundColor: ORANGE }} />
    </div>
  );
}
