// Site-wide facts and copy. Anything still unconfirmed is listed in CONTENT-TODO.md.

export interface ProofItem {
  value: string;
  label: string;
  href?: string;
}

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
  name: 'Hansol',
  role: 'Freelance product engineer',
  location: 'Seoul',
  timeZone: 'Asia/Seoul',
  utcLabel: 'UTC+9',
  availability: 'Taking on new projects',
  url: 'https://example.com',
  platforms: {
    upwork: 'https://www.upwork.com/freelancers/~TODO',
    fiverr: 'https://www.fiverr.com/TODO',
  },

  headline: 'I build the app, the backend behind it, and the payments that run through it.',
  intro:
    "I'm Hansol, a freelance product engineer in Seoul. I built the merchant apps that six Korean card-payment brands ship on Google Play, and I build and run my own travel app, MomentBook, on iOS, Android and the web. Hire me for one piece or for the whole product. Either way, you work with one person who knows how the pieces fit.",

  proof: [
    { value: '6', label: 'merchant payment apps live on Google Play', href: '/work/payments' },
    { value: '9', label: 'languages on momentbook.app, the website of my own product', href: '/work/momentbook' },
    { value: '4', label: 'backend services I deploy and run in production', href: '/work/momentbook' },
  ] satisfies ProofItem[],

  /** One-line entries for smaller projects. The section stays hidden while this is empty. */
  moreWork: [] as MoreWorkItem[],

  about: {
    paragraphs: [
      "I'm a product engineer based in Seoul. Most of my client work has been in payments: the merchant apps small businesses use to take card payments, send payment links and check the day's sales.",
      'Alongside client work I build and run MomentBook, a travel app. It keeps me honest across the whole stack, because every outage, store rejection and slow query there is mine to fix.',
    ],
    timeline: [
      { when: '20XX', what: 'Merchant payment apps for Finlogistec', todo: true },
      { when: '20XX', what: 'MomentBook, my own product, from first commit to the stores', todo: true },
    ] satisfies TimelineItem[],
  },

  cta: {
    heading: 'Tell me about your project',
    body: "Send me a message on Upwork with what you're building and where it's stuck. I usually reply with a few questions before I quote, because a good estimate needs them.",
    note: 'I take new work through Upwork and Fiverr. Your payment stays with the platform until you approve each milestone.',
  },
};
