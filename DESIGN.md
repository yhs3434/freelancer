# Design and writing rules

This site has to read as made by one person. Visitors judge a page in about 50 ms (Lindgaard et al.), and people trust personal, sincere content less once they suspect it was generated (NN/g, "When Should You Disclose AI Use?", 2026). A freelancer's own page is exactly that kind of content. The rules below keep the site away from the defaults that AI tools produce, including the ones this site had before 2026-11-15. Follow them when you edit by hand or with an AI tool.

## Visual

- **White page, black text, no accent colour.** Colour comes only from the real screenshots, so the work is the most colourful thing on the page. Tokens live in `src/styles/tokens.css`.
- **No dark mode.** The store images are made for a white background.
- **One typeface,** IBM Plex Sans. There is no monospace and there are no ALL-CAPS labels.
- **Headings** are plain sentence case. Don't put small "eyebrow" labels above a heading.
- **No stats strip.** A big number above a small label is a stock hero pattern. Put numbers in sentences.
- **No middle-dot meta strings** ("Client · 2025 · Android"). Use a sentence, or the case-study meta list.
- **No decoration** that carries no information: availability dots, live clocks, gradients, glows, icon grids or stock illustrations.
- **Vary the rhythm.** Work gets the most room. Don't wrap every section in the same frame or add rules between them.
- **Real proof first.** Screenshots of shipped apps belong above the fold, never a placeholder.

Avoid these combinations, which AI tools converge on:
- A cream or beige background (#F4F1EA-ish) with a terracotta or rusty-orange accent.
- Broadsheet hairline rules, uppercase tracked-out labels, and a near-black dark mode with one bright accent.
- A purple-to-blue gradient over Inter, with three equal cards.

## Writing

The guard tests block em dashes and "X, not Y" contrasts (`writing patterns` in `tests/site.test.mjs`) as well as stock words. Everything else here needs a human read.

- **No negative parallelisms:** "not just", "X, not Y", "rather than", "instead of". Say what is true.
- **Avoid lists of three by default.** Give one concrete example, or two, or the real full list. A sentence shaped "A, B and C" every few lines is the strongest tell.
- **Use colons only for real lists.** A colon that sets up a reveal is the em dash in disguise.
- **Don't attach a tidy reason to every claim** (", so …", "because …"). Let some sentences stand.
- **Mix sentence lengths.** Short is fine. So is long, when it carries a real detail.
- **Prefer facts anyone can check over adjectives:** dates, counts, versions, store links, named clients. Examples: "about 5,300 commits since January 2025" and "iOS 16.4+".
- **Write the way the owner talks.** Read each line aloud. If you wouldn't say it to a client on a call, rewrite it.

## Sources

- Anthropic, `frontend-design` skill (github.com/anthropics/skills): the cream/terracotta default, uppercase labels, eyebrows, middle-dot meta, big-number heroes, and the advice to take choices from the subject itself.
- Kyle Chayka, The New Yorker, June 2026, as summarized by Pixel Envy and IBTimes: "Claudian sameness" in AI-built websites.
- Wikipedia: Signs of AI writing (WikiProject AI Cleanup): rule of three, negative parallelisms, em dashes, inline bold-header lists, and judging by combinations of signs.
- utsubo, "The Built with AI tell: 12 signals that drop trust" (2026), and 925studios, "AI slop web design guide": uniform sections, missing proof, generic headlines, and the "would the founder say this?" test.
- Nielsen Norman Group, Taylor Dykes, "When Should You Disclose AI Use? The PACED Framework" (2026-09-25).
