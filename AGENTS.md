# Freelance site

A static Astro site linked from the owner's Upwork and Fiverr profiles. It shows what the owner does, real shipped work, and how to hire them on those platforms.

## Commands

Astro 7 needs Node >= 22.23.4. Use the Homebrew Node 24:

```sh
export PATH=/opt/homebrew/opt/node@24/bin:$PATH
npm run dev            # dev server (or `astro dev --background`)
npm test               # astro check + build + guard tests in tests/
STRICT=1 npm test      # also fails on any TODO or example.com left in dist/
```

## Rules the tests enforce

- No contact details anywhere: no email, phone, `mailto:`/`tel:`, messenger IDs, social or GitHub links. Upwork forbids sharing them before a contract. Hire buttons (`data-cta`) link only to upwork.com or fiverr.com.
- English only, first person ("I"), no emoji, no stock marketing words, no em dashes or "X, not Y" contrasts (lists in `tests/site.test.mjs`).
- Every image has English alt text.

## Design and writing

Read `DESIGN.md` before changing styles or copy. In short: white page, black text, no accent colour, no uppercase or monospace labels, no stats strip, no dark mode. Colour comes only from the real screenshots, and copy avoids lists of three, "not X but Y" and other AI-writing tics.

## Where content lives

- `src/data/*.ts`: site config, services, how I work, FAQ
- `src/content/work/*.md`: case studies
- `CONTENT-TODO.md`: placeholders and claims the owner still has to confirm

## Documentation

Full documentation: https://docs.astro.build
