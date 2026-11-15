export interface ProcessStep {
  title: string;
  body: string;
}

export const process: ProcessStep[] = [
  {
    title: 'You test real builds, not status reports',
    body: 'Every week you get something to open on your own phone or in your browser: a TestFlight build, a Google Play internal test, or a preview link. Feedback on the real thing beats a progress update.',
  },
  {
    title: 'Your code and accounts from day one',
    body: 'The repository, the App Store and Google Play developer accounts, and the cloud account are in your name from the start. I work inside them, so there is nothing to hand back at the end.',
  },
  {
    title: 'Milestones, paid through the platform',
    body: "We split the work into milestones, each with a clear definition of done. Payment goes through Upwork or Fiverr, and you release it after you've checked the milestone yourself.",
  },
  {
    title: 'Decisions in writing',
    body: 'When there is a trade-off, I write a short note: the options, what each one costs, and what I picked. Whoever works on the code next, including you, does not have to guess.',
  },
  {
    title: 'Still here after launch',
    body: 'I fix bugs in what I built after it goes live. After that, I can stay on for maintenance or hand everything over with documentation.',
  },
];
