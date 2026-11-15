# 콘텐츠 확인 목록

사이트에 들어간 자리 표시자와, 사실인지 확인이 필요한 초안 문구입니다. 공개 전에 모두 채우거나 고친 뒤 `STRICT=1 npm test`로 남은 자리 표시자가 없는지 확인하세요(`TODO`, `example.com`, `data-todo`를 찾아냅니다).

## 자리 표시자 (반드시 채워야 공개 가능)

| 항목 | 위치 | 지금 값 |
|---|---|---|
| Upwork 프로필 URL | `src/data/site.ts` → `platforms.upwork` | `~TODO` |
| Fiverr 프로필 URL | `src/data/site.ts` → `platforms.fiverr` | `TODO` |
| 도메인 | `astro.config.mjs` `SITE_URL`, `site.ts` `url`, `public/robots.txt` | `example.com` |
| 이름(성 포함) | `site.ts` → `name`, `intro` | `Hansol` (macOS 사용자명에서 추정) |
| 프로필 사진 | `src/assets/portrait-placeholder.svg`를 실제 사진으로 교체 | 회색 자리 |
| 경력 연도 | `site.ts` → `about.timeline[].when` | `20XX` |

## 확인이 필요한 주장 (초안으로 써 둔 문장)

| 내용 | 위치 | 확인할 것 |
|---|---|---|
| "six Korean card-payment brands" 앱을 내가 만들었다 | `site.ts` `intro`, 결제 케이스 스터디 | 맡은 역할(전체 개발? 앱만? 단말기 연동 포함?), 기간 |
| 6개 앱이 하나의 코드베이스에서 나온 화이트라벨인지 | `src/content/work/payments.md` | 패키지가 `com.corp.sonic.*`와 `com.finnacle.finon.*` 두 계열이라 구조를 단정하지 않음 |
| 핀트리니티와의 관계 | 결제 케이스 스터디 | Play Store에서 핀트리니티 명의 앱을 찾지 못함. 결제 단말기 쪽 작업이면 별도 케이스로 추가 가능 |
| 앱 영문 표기 | 결제 케이스 스터디 `brands[].name` | Umji Pay, Umji Pay D1, Solomon, F2, AT, Pay Hanul (로마자 추정) |
| 고객사 공개 허락 | 결제 케이스 스터디 | Finlogistec 앱 이름·스크린샷을 포트폴리오에 써도 되는지(NDA) |
| 결제 실패 사례 문구 | `services.ts` "Payments that add up" | 중복 승인, 승인 중 끊김, 정산 불일치를 실제로 다뤘는지 |
| 응답 시간 "one working day" | `faq.ts` 시간대 답변 | 지킬 수 있는 약속인지 |
| 출시 후 버그 수정 기간 | `process.ts` "Still here after launch" | 기간(예: 30일)을 적을지 |
| 디자인 가능 범위 | `faq.ts` "Do you also design?" | 실제로 화면 디자인까지 하는지 |
| 영어 업무 가능 여부 | (아직 사이트에 없음) | 쓰려면 About에 추가 |
| MomentBook 기간·역할 | MomentBook 케이스 스터디 `years`, `role` | 혼자 만들었는지, 디자인 포함인지 |
| "More work" 목록 | `site.ts` → `moreWork` | 비어 있으면 섹션이 숨겨짐. 한 줄 소개할 작업이 있으면 추가 |
| 후기 | (섹션 없음) | 실제 Upwork/Fiverr 후기가 생기면 추가 |
