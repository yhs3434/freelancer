---
title: Merchant payment apps for six brands
summary: A merchant app for small shops in Korea that takes card payments on a phone and keeps the day's sales. The same product ships on Google Play under six brands.
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

A small shop in Korea usually takes cards on a separate terminal and tracks its sales in a notebook. Finlogistec wanted one app a shop owner could use for both. It takes card payments on the owner's phone and sends payment links to customers who aren't in the shop. It also shows what the card companies will pay out, and when.

## What I built

- Card payments on the merchant's own phone, with no POS terminal, including cancellations.
- Payment links the merchant sends by text or messenger.
- A sales calendar with every transaction and the date each card settlement should reach the bank.
- A push notification with the day's total at closing time.
- Six brands on one product. Each brand has its own name, icon, colors and store listing.

## The hard parts

<div data-todo="payments-hard-parts">

Money apps are judged by their worst day. A payment that times out must end up either approved or cancelled, and the sales total has to match what the card company actually pays. Six brands also means every release goes out six times, so everything that differs between brands lives in configuration.

</div>

## Outcome

All six apps are live on Google Play under Finlogistec and still get updates. The latest one went out in November 2026.
