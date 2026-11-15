# Freelance site

The site I link from my Upwork and Fiverr profiles. It shows what I do, two shipped products, and how to hire me on those platforms. It is a static Astro build with no client framework and no trackers. The only script is a few lines that show the local time in Seoul.

## Run it

Astro 7 needs Node 22.23.4 or newer. The Homebrew `node@24` works:

```sh
export PATH=/opt/homebrew/opt/node@24/bin:$PATH
npm install
npm run dev          # http://localhost:4321
npm test             # type check, build, then the guard tests in tests/
STRICT=1 npm test    # also fails while any placeholder is left (see CONTENT-TODO.md)
```

## Edit the content

| What | Where |
|---|---|
| Name, headline, intro, availability, platform URLs, proof numbers, About, closing CTA | `src/data/site.ts` |
| Services | `src/data/services.ts` |
| How I work | `src/data/process.ts` |
| FAQ | `src/data/faq.ts` |
| Case studies (frontmatter + body) | `src/content/work/*.md` |
| Images | `src/assets/` (sources in `src/assets/work/payments/SOURCES.md`) |
| Domain | `astro.config.mjs` (`SITE_URL`), `public/robots.txt` |

A new Markdown file in `src/content/work/` becomes a new case study and a new card on the home page. The schema is in `src/content.config.ts`, and `order` sets the position.

`CONTENT-TODO.md` lists every placeholder and every draft claim that still needs confirming. Placeholders render with a `data-todo` attribute or contain `TODO`/`example.com`, so `STRICT=1 npm test` finds them. Draft claims and the name are not marked, so check those by hand.

After changing the name, role or headline, update `scripts/og/og.html` and run `bash scripts/og/render.sh` to regenerate the social preview image `public/og.png`. A test fails while `og.html` and `site.ts` disagree.

## Rules the tests enforce

- **No contact details anywhere.** Upwork's rules forbid sharing email, phone, messenger IDs or social handles before a contract, so the site has none. Every hire button (`data-cta`) goes to upwork.com or fiverr.com.
- English text only (Korean only inside `lang="ko"`, as in the brand names), no emoji, and none of the stock marketing words listed in `tests/site.test.mjs`.
- Every image has English alt text, and every internal link resolves.

## Deploy

Any static host works (Vercel, Cloudflare Pages, Netlify). Set the build command to `STRICT=1 npm test`, not `npm run build`: it builds the same `dist/`, and it also stops the deploy while a placeholder is left, so a `~TODO` Upwork link or an `example.com` canonical URL never goes live. Output directory `dist`, Node 24. The host and domain are not chosen yet.

## Quality checks (15 November 2026)

Lighthouse 12, mobile emulation, local preview:

| Page | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| `/` | 99 | 100 | 100 | 100 |
| `/work/payments` | 99 | 100 | 100 | 100 |
| `/work/momentbook` | 98 | 100 | 100 | 100 |

Text contrast (WCAG): ink on paper 16.0:1 (light) and 15.3:1 (dark); muted text 5.5:1 or higher in both themes. The accent color is used only for large numerals, dots and underlines (4.4:1 light, 5.2:1 dark).
