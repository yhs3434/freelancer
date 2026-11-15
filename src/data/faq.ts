export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: 'What time zone do you work in?',
    a: "Seoul, UTC+9. My late afternoon is Europe's morning, and my early morning is the US West Coast's afternoon. I keep a few hours of overlap with your team for calls and answer messages within one working day.",
  },
  {
    q: 'Can you take over an app someone else started?',
    a: 'Yes. I start by reading the code, getting it to build and shipping one small fix. Then I tell you plainly what state it is in, and we decide together what to keep and what to rebuild.',
  },
  {
    q: 'Do you also design?',
    a: "I work from your designer's files. For an early product without a designer, I design screens from each platform's own conventions, so the app feels native and is easy to restyle later.",
  },
  {
    q: 'Who owns the code?',
    a: 'You do. The repository and accounts are yours from the first day, and the rights to the work pass to you as each milestone is paid.',
  },
  {
    q: 'Will you sign an NDA?',
    a: 'Yes. Send it with your invitation and I will sign it before we go into details.',
  },
  {
    q: 'Why only through Upwork or Fiverr?',
    a: 'The platform holds your payment until you approve the work and keeps a record of what we agreed. That protects both of us, so I take every new project there.',
  },
];
