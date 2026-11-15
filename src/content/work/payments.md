---
title: Merchant payment apps for six brands
summary: Card payments on a phone, payment links, and a daily sales ledger for small businesses in Korea. The same product ships on Google Play under six brands, each with its own name, logo and colors.
order: 1
client: Finlogistec
years: 20XX
platforms: [Android]
role: Mobile app development
links:
  - label: Finlogistec on Google Play
    href: https://play.google.com/store/apps/developer?id=Finlogistec+Co.,+Ltd
cover: ../../assets/work/payments/umjipay/banner.png
coverAlt: Store image for one of the six brands, showing two phones with the app's home screen, today's sales and the amount due to be settled.
coverKind: composed
gallery:
  - src: ../../assets/work/payments/umjipay/calendar.png
    alt: Sales calendar screen with today's sales of 29,100,000 won and the settlement amount below it.
    caption: Sales calendar. What came in today, and what the card companies will pay out.
  - src: ../../assets/work/payments/umjipay/card-payment.png
    alt: Card payment form on a phone with fields for card number, expiry date and card password.
    caption: Card payments without a POS terminal. The merchant keys the card in on their own phone.
  - src: ../../assets/work/payments/umjipay/closing-alert.png
    alt: Push notifications summarizing the day's sales at closing time.
    caption: Closing alerts. The day's total arrives as a notification at the end of business.
  - src: ../../assets/work/payments/umjipay/settlement.png
    alt: Payment and settlement history listing payments and the date each settlement is expected.
    caption: Settlement history. When each card payment will reach the bank account, to the day.
brands:
  - name: Umji Pay
    nameKo: 엄지페이
    icon: ../../assets/work/payments/umjipay/icon.png
    banner: ../../assets/work/payments/umjipay/banner.png
    href: https://play.google.com/store/apps/details?id=com.corp.sonic.newkingpay
  - name: Umji Pay D1
    nameKo: 엄지페이D1
    icon: ../../assets/work/payments/umjipay-d1/icon.png
    banner: ../../assets/work/payments/umjipay-d1/banner.png
    href: https://play.google.com/store/apps/details?id=com.corp.sonic.newkingpayD1
  - name: Solomon
    nameKo: 솔로몬
    icon: ../../assets/work/payments/solomon/icon.png
    banner: ../../assets/work/payments/solomon/banner.png
    href: https://play.google.com/store/apps/details?id=com.finnacle.finon.cal
  - name: Ftoo
    nameKo: 에프투
    icon: ../../assets/work/payments/ftoo/icon.png
    banner: ../../assets/work/payments/ftoo/banner.png
    href: https://play.google.com/store/apps/details?id=com.finnacle.finon.sse
  - name: ATEE
    nameKo: 에이티
    icon: ../../assets/work/payments/atee/icon.png
    banner: ../../assets/work/payments/atee/banner.png
    href: https://play.google.com/store/apps/details?id=com.finnacle.finon.sixs
  - name: Pay Hanul
    nameKo: 페이한울
    icon: ../../assets/work/payments/payhanul/icon.png
    banner: ../../assets/work/payments/payhanul/banner.png
    href: https://play.google.com/store/apps/details?id=com.finnacle.finon.wiz
---

## The situation

A small shop in Korea usually takes cards on a dedicated terminal and keeps its sales in a notebook or a spreadsheet. Finlogistec wanted one app a business owner could use for both: take a card payment on their phone, send a payment link to a customer who isn't in the shop, and see the day's sales and the coming settlements without calling the card company.

## What I built

- **Card payments on the phone.** The merchant enters the card details on their own phone, with no POS terminal, and can cancel a payment from the same screen.
- **Payment links.** A link the merchant sends by text or messenger, so a customer can pay remotely.
- **A sales ledger.** A calendar of daily sales, the full transaction history, and the date each card settlement is expected in the bank account.
- **Closing alerts.** A push notification with the day's total at the end of business.
- **Six brands from one product.** Each brand has its own name, icon, colors and store listing on top of the same features.

## The hard parts

<div data-todo="payments-hard-parts">

Money apps are judged by their worst day. A payment that times out has to end up either approved or cancelled, never both, and a sales total has to match what the card company actually pays out. Six brands also means every release goes out six times, so brand differences belong in configuration, not in forked code.

</div>

## Outcome

All six apps are live on Google Play under Finlogistec, and they are still being updated: the latest release went out in November 2026.
