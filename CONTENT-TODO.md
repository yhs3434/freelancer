# 콘텐츠 확인 목록

사이트에 들어간 자리 표시자와, 사실인지 확인이 필요한 초안 문구입니다. 공개 전에 모두 채우거나 고치세요.

`STRICT=1 npm test`는 `TODO`, `example.com`, `data-todo`가 붙은 자리 표시자만 찾아냅니다. 아래 표에서 "STRICT" 열이 "잡음"인 항목입니다. 나머지(앱 영문 표기, 초안 주장, 문구의 말투)는 표시가 없어 테스트를 통과하므로 직접 확인해야 합니다. 배포 빌드 명령도 `STRICT=1 npm test`로 두면 자리 표시자가 남은 채로는 배포되지 않습니다(README "Deploy").

## 자리 표시자 (반드시 채워야 공개 가능)

| 항목 | 위치 | 지금 값 | STRICT |
|---|---|---|---|
| Upwork 프로필 URL | `src/data/site.ts` → `platforms.upwork` | `~TODO` | 잡음 |
| Fiverr 프로필 URL | `src/data/site.ts` → `platforms.fiverr` | `TODO` | 잡음 |
| 도메인 | `astro.config.mjs` `SITE_URL`, `public/robots.txt` | `example.com` | 잡음 |
| 프로필 사진 | About 섹션. `src/assets/portrait-placeholder.svg`를 실제 사진으로 교체 | 회색 자리 | 잡음 |
| 결제 앱 작업 연도 | `site.ts` → `about.timeline[0].when`, 결제 케이스 스터디 `years` | `20XX` | 잡음 |
| X990 단말기 사진 | `src/content/work/card-terminal.md` `cover`. 본인이 찍은 앱 실행 사진이나 화면으로 교체하고 `coverTodo: true` 삭제(Verifone 제품 사진은 저작권 때문에 쓰지 않음) | 회색 자리 | 잡음 |
| X990 앱 작업 연도 | `card-terminal.md` `years` | `20XX` | 잡음 |
| X990 앱 "What I built" | `card-terminal.md` | 초안 목록(칩·마그네틱·비접촉 결제, 결제 취소, 영수증 출력, 당일 매출). 실제로 만든 기능으로 고치기 | 잡음 |
| 이삭토스트 앱 작업 연도 | `isaac-toast.md` `years`, `site.ts` → `about.timeline[1].when` | `20XX` | 잡음 |
| 이삭토스트 앱 "What I built" | `isaac-toast.md` | App Store 릴리스 노트에서 뽑은 초안(주문·결제와 토스페이, 스탬프·쿠폰, OTA 업데이트). 퇴사 뒤 다른 사람이 만든 기능은 빼고 재직 중 만든 것만 남기기 | 잡음 |

이미 채운 항목: 이름은 `Hansol Yoon`(MomentBook 커밋 작성자 이름, 2026-11-15 확정). MomentBook 기간은 `2025–now`(첫 커밋 2025-01-21). 이름을 바꾸면 `scripts/og/og.html`도 고치고 `bash scripts/og/render.sh`를 실행하세요. 둘이 다르면 테스트가 실패합니다.

## 확인이 필요한 주장 (초안으로 써 둔 문장)

| 내용 | 위치 | 확인할 것 |
|---|---|---|
| "six Korean card-payment brands" 앱을 내가 만들었다 | `site.ts` `intro`, 결제 케이스 스터디 | 맡은 역할(전체 개발? 앱만? 단말기 연동 포함?), 기간 |
| 6개 앱이 하나의 코드베이스에서 나온 화이트라벨인지 | `src/content/work/payments.md` | 패키지가 `com.corp.sonic.*`와 `com.finnacle.finon.*` 두 계열이라 구조를 단정하지 않음 |
| 핀트리니티와의 관계 | 결제 케이스 스터디 | Play Store에서 핀트리니티 명의 앱을 찾지 못함. 결제 단말기 쪽 작업이면 별도 케이스로 추가 가능 |
| 앱 영문 표기 | 결제 케이스 스터디 `brands[].name` | SOLOMON·Ftoo·ATEE는 로고에서 확인. Umji Pay, Umji Pay D1, Pay Hanul은 로마자 추정 |
| "latest release went out in November 2026" | 결제 케이스 스터디 Outcome | 2026-11-15 Play Store 기준. 시간이 지나면 틀리므로 공개 시점에 다시 확인하거나 문장을 빼기 |
| 고객사 공개 허락 | 결제·X990·주문 앱 케이스 스터디 | Finlogistec(결제 앱, X990 앱), 비버웍스(이삭토스트 앱)의 앱 이름과 스토어 스크린샷을 포트폴리오에 써도 되는지(NDA). Upwork에서도 남을 위해 한 작업은 허락을 받는 것이 일반적 |
| X990 앱 역할·내용 | `card-terminal.md`, `site.ts` About | 역할 "Android app development"가 맞는지, 어떤 결제 방식과 VAN을 연동했는지. 어려웠던 점과 결과(쓰는 매장 수 등)를 주면 섹션을 추가 |
| 케이스의 "Client" 표기 | 결제·X990·이삭토스트 케이스 스터디 `client` | 화면에 "Client"로 나가서 외주 계약처럼 읽힘. Finlogistec·비버웍스 일이 재직이었는지 계약이었는지 알려 주면 표기를 맞춤(예: 재직이면 라벨을 "Company"로) |
| 이삭토스트 앱 개발 | `isaac-toast.md` "The app", `site.ts` About | 앱 개발자는 본인 혼자(2026-11-15 확인). React Native라는 내용은 비버웍스 채용 공고 기준이니 맞는지, 처음부터 만들었는지 확인 |
| 이삭토스트 설치 수·평점·업데이트 시점 | `isaac-toast.md` Outcome, `site.ts` About | 2026-11-15 스토어 기준: Google Play 10만+, App Store 4.8(약 1.1천 건), 최근 업데이트 2026-11. 공개 전에 다시 확인 |
| 결제 실패 사례 문구 | `services.ts` "Card payments and payment links" | 결제 취소 기능, 승인 중 시간 초과, 정산 불일치를 실제로 다뤘는지 |
| 응답 시간 "one working day" | `faq.ts` 시간대 답변 | 지킬 수 있는 약속인지 |
| 출시 후 버그 수정 기간 | `process.ts` 마지막 문단 | 기간(예: 30일)을 적을지 |
| "about 5,300 commits since January 2025" | `site.ts` `intro`, MomentBook 케이스 스터디 | 2026-11-15 `git rev-list --count HEAD` 기준 5,304개. 숫자는 시간이 지나면 늘어나므로 공개 전에 다시 세기 |
| 디자인 가능 범위 | `faq.ts` "Do you also design?" | 실제로 화면 디자인까지 하는지 |
| 영어 업무 가능 여부 | (아직 사이트에 없음) | 쓰려면 About에 추가 |
| MomentBook 역할 | MomentBook 케이스 스터디 `role`, `site.ts` About | 개발자는 본인 혼자. 다만 5,304개 커밋 중 1,030개에 `Co-Authored-By: Claude`가 붙어 있어(2026-11-15 기준) "모든 커밋을 직접 썼다"는 표현은 쓰지 않음. 화면 디자인도 직접 했는지 |
| AI 도구 사용 공개 | (아직 사이트에 없음) | 밝힐지 결정. NN/g(2026)에 따르면 남이 먼저 알아낸 경우가 스스로 밝힌 경우보다 신뢰를 더 잃습니다. 쓴다면 About이나 FAQ에 한 문장(예: "I use AI coding tools, and I review and test everything they write.") |
| "More work" 목록 | `site.ts` → `moreWork` | 비어 있으면 섹션이 숨겨짐. 한 줄 소개할 작업이 있으면 추가 |
| 후기 | (섹션 없음) | 실제 Upwork/Fiverr 후기가 생기면 추가 |

## 말투 다듬기 (공개 전에 꼭)

지금 문구는 초안입니다. 2026-11-15에 AI가 쓴 글에서 자주 보이는 패턴을 걷어냈지만, 마지막은 본인 말투여야 합니다. 개인 프리랜서 페이지는 진정성이 중요한 글이라, AI가 썼다고 느껴지면 신뢰가 가장 크게 떨어집니다(NN/g, 2026). 모든 문장을 소리 내어 읽고, 고객과 통화할 때 하지 않을 말이면 고치세요.

문구를 고치거나 AI로 다시 쓸 때 피할 패턴입니다(자세한 내용과 출처는 `DESIGN.md`).

- "X, not Y", "not just", "rather than" 같은 대조 문장. 테스트가 막습니다.
- em dash(—). 테스트가 막습니다.
- "A, B and C" 3개 나열을 습관처럼 쓰기. 예시는 하나나 둘, 아니면 실제 전체 목록으로 쓰세요.
- 콜론으로 뒷말을 터뜨리는 문장, 모든 주장 뒤에 ", so …", "because …" 이유를 붙이는 습관.
- 누구나 쓸 수 있는 말("one person who knows how the pieces fit")은 빼고, 날짜·숫자·버전·스토어 링크처럼 확인할 수 있는 사실로 바꾸기.
