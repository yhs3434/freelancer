// What I build for clients. Titles name the work plainly; each body says what the client gets.
// `evidence` links to the case study where I did that kind of work.

export interface Service {
  title: string;
  body: string;
  evidence?: { label: string; href: string };
}

export const services: Service[] = [
  {
    title: 'Mobile apps for iPhone and Android',
    body: 'One codebase for both stores, built with React Native and Expo. I handle signing and store review too, which is where many launches stall, and you get a build on your own phone every week.',
    evidence: { label: 'See it in MomentBook', href: '/work/momentbook' },
  },
  {
    title: 'Card payments and payment links',
    body: "Taking a card on a phone, sending a payment link by text, cancelling a payment, and the sales report a shop owner reads at closing time. I built these for Korean payment companies. Most of the work is in the failure cases, like a payment that times out halfway or a daily total that doesn't match the card company's.",
    evidence: { label: 'See the six payment apps', href: '/work/payments' },
  },
  {
    title: 'Backends and admin tools',
    body: 'APIs, sign-in, push notifications and search, plus the admin screens your team uses to review content and help users. I start with the data model. It is the hardest part to change later.',
    evidence: { label: 'See the MomentBook backend', href: '/work/momentbook' },
  },
  {
    title: 'Websites',
    body: 'Marketing sites and web apps that load quickly on a cheap phone and are easy for search engines to read. momentbook.app is in nine languages, and I can set yours up for several countries from the first release.',
  },
  {
    title: 'Servers and deploys',
    body: 'Containers, deploys, secrets and backups, sized for the traffic you have today. Every change goes out through a pipeline, and you get a written runbook for deploying and rolling back.',
  },
];
