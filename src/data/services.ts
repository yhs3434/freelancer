export interface Service {
  title: string;
  body: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    title: 'Your app, on both stores',
    body: 'One codebase for iPhone and Android, written so that the second year of changes is as easy as the first. I also handle the parts that usually hold a launch up: signing, store review, push notifications, over-the-air fixes and crash reports.',
    deliverables: [
      'A test build on your own phone every week',
      'Store listings submitted and approved',
      'A release process your team can run without me',
    ],
  },
  {
    title: 'Payments that add up',
    body: "Card payments at the counter, payment links sent by text, cancellations, refunds, and the sales report a shop owner checks at closing time. I've shipped this for Korean payment companies, so I build for the cases that cost money: a double tap on Pay, a connection that drops halfway through an approval, a daily total that doesn't match the bank's.",
    deliverables: [
      'Integration with your payment gateway or card terminal',
      'Transaction history and sales reports',
      'A written test plan for the failure cases, run before launch',
    ],
  },
  {
    title: 'The backend your product runs on',
    body: 'APIs, sign-in, databases, push and search, plus the admin screens your team needs to review content, help users and see what is going on. I design the data model first, because it is the part that is expensive to change later.',
    deliverables: [
      'A documented API for your apps and partners',
      'An admin back office for your operations team',
      'Tests around everything that touches money or personal data',
    ],
  },
  {
    title: 'A website that loads fast and gets found',
    body: 'Marketing sites and web apps that are quick on a cheap phone and easy for search engines to read. If you sell in more than one country, I set up several languages from the start instead of bolting them on later.',
    deliverables: [
      'Pages that pass Core Web Vitals on mobile',
      'Clean structure and metadata for search',
      'Multilingual pages when you need them',
    ],
  },
  {
    title: "Infrastructure you don't have to babysit",
    body: 'Servers, containers, deploys, secrets, backups and monitoring, sized for the traffic you actually have. Every change ships through a pipeline, and I write down how to deploy, roll back and restore, so you never depend on me to do it.',
    deliverables: [
      'Automated deploys from your repository',
      'Encrypted secrets and scheduled backups',
      'A runbook for deploy, rollback and restore',
    ],
  },
];
