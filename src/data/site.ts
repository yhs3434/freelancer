// Site-wide facts and copy. Anything still unconfirmed is listed in CONTENT-TODO.md.

export interface TimelineItem {
  when: string;
  what: string;
  /** Marks a placeholder the owner still has to fill in. Rendered as data-todo, which STRICT=1 npm test catches. */
  todo?: boolean;
}

export interface MoreWorkItem {
  title: string;
  detail: string;
}

export const site = {
  name: 'Hansol Yoon',
  role: 'Freelance product engineer',
  location: 'Seoul',
  utcLabel: 'UTC+9',
  availability: 'Taking on new projects',
  platforms: {
    upwork: 'https://www.upwork.com/freelancers/~TODO',
    fiverr: 'https://www.fiverr.com/TODO',
  },

  headline: 'I build mobile apps that take payments, and the servers behind them.',
  intro:
    "I'm Hansol, a freelance product engineer in Seoul. I built the merchant app that six Korean card-payment brands ship on Google Play. I also build and run MomentBook, a travel app for iOS, Android and the web, by myself: about 5,300 commits since January 2025.",

  /** One-line entries for smaller projects. The section stays hidden while this is empty. */
  moreWork: [] as MoreWorkItem[],

  about: {
    paragraphs: [
      'Most of my client work has been for Korean payment companies. Shop owners use the apps I built to take a card on their phone or on a card terminal, and to see what the card companies will pay them and when.',
      'At Beaver Works I was the only developer on the Isaac Toast ordering app for iOS and Android. It has over 100,000 installs on Google Play.',
      "MomentBook is the product I own. I started it in January 2025 and I'm still the only developer on it. When a server goes down or a store review fails, I'm the one who fixes it, and that is the habit I bring to client work.",
    ],
    timeline: [
      { when: '20XX', what: 'Merchant payment apps and a card terminal app for Finlogistec', todo: true },
      { when: '20XX', what: 'The Isaac Toast ordering app, as its only developer at Beaver Works', todo: true },
      { when: '2025–now', what: 'MomentBook, my own app, which I build and run alone' },
    ] satisfies TimelineItem[],
  },

  cta: {
    heading: 'Tell me about your project',
    body: "Send me a message on Upwork with what you're building and where it's stuck. I'll usually ask a few questions before I give you a quote.",
    note: 'I take new work through Upwork and Fiverr. The platform holds your payment until you approve each milestone.',
  },
};
