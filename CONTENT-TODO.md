# 콘텐츠 확인 목록

사이트에 들어간 자리 표시자와, 사실인지 확인이 필요한 초안 문구입니다. 공개 전에 모두 채우거나 고치세요.

`STRICT=1 npm test`는 `TODO`, `example.com`, `data-todo`가 붙은 자리 표시자만 찾아냅니다. 아래 표에서 "STRICT" 열이 "잡음"인 항목입니다. 나머지(이름, 앱 영문 표기, 초안 주장)는 표시가 없어 테스트를 통과하므로 직접 확인해야 합니다. 배포 빌드 명령도 `STRICT=1 npm test`로 두면 자리 표시자가 남은 채로는 배포되지 않습니다(README "Deploy").

## 자리 표시자 (반드시 채워야 공개 가능)

| 항목 | 위치 | 지금 값 | STRICT |
|---|---|---|---|
| Upwork 프로필 URL | `src/data/site.ts` → `platforms.upwork` | `~TODO` | 잡음 |
| Fiverr 프로필 URL | `src/data/site.ts` → `platforms.fiverr` | `TODO` | 잡음 |
| 도메인 | `astro.config.mjs` `SITE_URL`, `public/robots.txt` | `example.com` | 잡음 |
| 프로필 사진 | `src/assets/portrait-placeholder.svg`를 실제 사진으로 교체 | 회색 자리 | 잡음 |
| 경력 연도 | `site.ts` → `about.timeline[].when`, 케이스 스터디 `years` | `20XX` | 잡음 |
| 이름(성 포함) | `site.ts` → `name`, `intro`, `scripts/og/og.html` (바꾼 뒤 `bash scripts/og/render.sh`) | `Hansol` (macOS 사용자명에서 추정) | 못 잡음 (og.html과 site.ts가 다르면 테스트가 실패) |

## 확인이 필요한 주장 (초안으로 써 둔 문장)

| 내용 | 위치 | 확인할 것 |
|---|---|---|
| "six Korean card-payment brands" 앱을 내가 만들었다 | `site.ts` `intro`, 결제 케이스 스터디 | 맡은 역할(전체 개발? 앱만? 단말기 연동 포함?), 기간 |
| 6개 앱이 하나의 코드베이스에서 나온 화이트라벨인지 | `src/content/work/payments.md` | 패키지가 `com.corp.sonic.*`와 `com.finnacle.finon.*` 두 계열이라 구조를 단정하지 않음 |
| 핀트리니티와의 관계 | 결제 케이스 스터디 | Play Store에서 핀트리니티 명의 앱을 찾지 못함. 결제 단말기 쪽 작업이면 별도 케이스로 추가 가능 |
| 앱 영문 표기 | 결제 케이스 스터디 `brands[].name` | SOLOMON·Ftoo·ATEE는 로고에서 확인. Umji Pay, Umji Pay D1, Pay Hanul은 로마자 추정 |
| "latest release went out in November 2026" | 결제 케이스 스터디 Outcome | 2026-11-15 Play Store 기준. 시간이 지나면 틀리므로 공개 시점에 다시 확인하거나 문장을 빼기 |
| 고객사 공개 허락 | 결제 케이스 스터디 | Finlogistec 앱 이름·스크린샷을 포트폴리오에 써도 되는지(NDA) |
| 결제 실패 사례 문구 | `services.ts` "Payments that add up" | 중복 승인, 승인 중 끊김, 정산 불일치를 실제로 다뤘는지 |
| 응답 시간 "one working day" | `faq.ts` 시간대 답변 | 지킬 수 있는 약속인지 |
| 출시 후 버그 수정 기간 | `process.ts` "Still here after launch" | 기간(예: 30일)을 적을지 |
| 디자인 가능 범위 | `faq.ts` "Do you also design?" | 실제로 화면 디자인까지 하는지 |
| 영어 업무 가능 여부 | (아직 사이트에 없음) | 쓰려면 About에 추가 |
| MomentBook 기간·역할 | MomentBook 케이스 스터디 `years`, `role` | 혼자 만들었는지, 디자인 포함인지 |
| "More work" 목록 | `site.ts` → `moreWork` | 비어 있으면 섹션이 숨겨짐. 한 줄 소개할 작업이 있으면 추가 |
| 후기 | (섹션 없음) | 실제 Upwork/Fiverr 후기가 생기면 추가 |
