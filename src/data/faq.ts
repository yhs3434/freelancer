export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: 'What time zone do you work in?',
    a: "Seoul, UTC+9. Late afternoon here is morning in Europe, and early morning here is afternoon on the US West Coast. I keep a few hours free to overlap with your team and reply to messages within one working day.",
  },
  {
    q: 'Can you take over an app someone else started?',
    a: "Yes. First I get it building on my machine and ship one small fix. Then I tell you plainly what state it's in, and we decide together what to keep.",
  },
  {
    q: 'Do you also design?',
    a: "I work from your designer's files. If there's no designer yet, I follow each platform's own conventions, which keeps the app easy to restyle later.",
  },
  {
    q: 'Who owns the code?',
    a: 'You do. The repository and accounts are yours from the first day, and the rights pass to you as each milestone is paid.',
  },
  {
    q: 'Will you sign an NDA?',
    a: "Yes. Send it with your invitation and I'll sign it before we go into details.",
  },
  {
    q: 'Why only through Upwork or Fiverr?',
    a: 'The platform holds your payment until you approve the work and keeps a record of what we agreed. It protects both of us.',
  },
];
