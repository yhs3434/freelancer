---
title: 'MomentBook: a travel app I build and run myself'
summary: Pick photos from a trip, and MomentBook groups them by time and place into a journey you can edit and share. It runs on iOS, Android and a public website in nine languages, on a backend I deploy and operate.
order: 2
client: My own product
years: 20XX
platforms: [iOS, Android, Web]
role: Product and engineering, end to end
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
    caption: Refine. Rename places, move photos, and decide what to keep.
    kind: phone
---

## What it is

Travel photos pile up and rarely get looked at again. MomentBook takes the photos you pick from a trip and groups them by time and place into a journey. The journey is visible only to you until you choose to post it. Posts go to a community of travelers, every post is reviewed by a person first, and readers see it in their own language when a translation is available.

## What I built

- **The app** for iOS 16.4+ and Android 7.0+, from one React Native codebase, released to TestFlight and the Google Play internal track.
- **The backend:** four services (sign-in, core, chat and search) that share one Postgres database.
- **The website**, momentbook.app, in nine languages. Anyone can read posted journeys and guides there without installing the app.
- **An admin back office** for reviewing posts, handling reports and comments, managing users and reading metrics.
- **The infrastructure:** containers behind a reverse proxy, encrypted service secrets, and pipelines that build the backend and website images on every push to the main branch.

## The hard parts

- **Same photos, same journey.** Grouping lives in a small, deterministic package. The backend pins it to an exact version, so a journey never reshuffles itself after an update.
- **Private until posted.** Nothing leaves the "Only me" state until the owner posts it, and a person reviews each post before anyone else can see it.
- **Nine languages.** The app, the website and the posts themselves all have to read naturally in each language, not just get translated once.

## Outcome

MomentBook is live on the App Store and Google Play, and momentbook.app serves posted journeys in nine languages. I handle everything from store reviews to database migrations myself, and that is the experience I bring to client projects.
