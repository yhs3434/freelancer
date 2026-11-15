---
title: 'MomentBook: a travel app I build and run myself'
summary: Pick photos from a trip and MomentBook groups them by time and place into a journey you can edit and share. I build and run the whole thing alone, from the iOS and Android app to the servers.
order: 4
client: My own product
years: '2025–now'
platforms: [iOS, Android, Web]
role: Product and engineering, on my own
links:
  - label: App Store
    href: https://apps.apple.com/app/id6749165889
  - label: Google Play
    href: https://play.google.com/store/apps/details?id=com.reflectalab.momentbook
  - label: momentbook.app
    href: https://momentbook.app/en
cover: ../../assets/work/momentbook/web.webp
coverAlt: "The momentbook.app home page: the headline 'Your travel photos, made into a journey' next to a phone showing a trip from Lisbon to Ronda."
coverKind: composed
gallery:
  - src: ../../assets/work/momentbook/pick.webp
    alt: The photo picker with nine travel photos selected.
    caption: Pick. Choose the photos from a trip.
    kind: phone
  - src: ../../assets/work/momentbook/group.webp
    alt: A journey timeline with the trip title at the top, followed by the first place and its photos.
    caption: Group. The photos become a timeline, sorted by time and place.
    kind: phone
  - src: ../../assets/work/momentbook/refine.webp
    alt: The journey editor showing three places, each with its photos.
    caption: Refine. Rename places and decide which photos to keep.
    kind: phone
---

## What it is

Travel photos pile up and rarely get looked at again. MomentBook takes the photos you pick from a trip and groups them by time and place into a journey. Only you can see it until you post it. Posted journeys go to a community of travelers after a person has reviewed them, and readers get a translation in their own language when one is available.

## What I built

- The app for iOS 16.4+ and Android 7.0+, from one React Native and Expo codebase, released through TestFlight and the Google Play internal track.
- Four backend services for sign-in, core features, chat and search, sharing one Postgres database.
- momentbook.app, where anyone can read posted journeys and guides without installing the app.
- An admin back office for reviewing posts and handling reports.
- Containers behind a reverse proxy, with new images built and shipped on every push to the main branch.

## The hard parts

A journey has to look the same after an update. The grouping code lives in its own small, deterministic package, and the backend pins it to an exact version.

Nothing is public by default. A journey stays private until its owner posts it, and a person reviews each post before anyone else sees it.

The app and the website speak nine languages: English, Korean, Japanese, Chinese, Spanish, French, Portuguese, Thai and Vietnamese. Posts are translated too, and each version has to read as if it had been written in that language.

## Outcome

MomentBook is live on the App Store and Google Play. Since January 2025 I have made about 5,300 commits to the app repository, and I handle everything around it myself, from store reviews to database migrations.
