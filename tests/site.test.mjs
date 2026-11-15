import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'node-html-parser';
import { site } from '../src/data/site.ts';
import {
  DIST,
  hostMatches,
  hrefHost,
  hrefScheme,
  listDistFiles,
  loadPages,
  resolveInternal,
  textWithoutHidden,
  visibleText,
} from './helpers.mjs';

const pages = await loadPages();
const pageAt = (path) => pages.find((page) => page.path === path);

const REQUIRED_PAGES = ['index.html', 'work/payments/index.html', 'work/momentbook/index.html', '404.html'];

const PAYMENT_APP_IDS = [
  'com.corp.sonic.newkingpay',
  'com.corp.sonic.newkingpayD1',
  'com.finnacle.finon.cal',
  'com.finnacle.finon.sse',
  'com.finnacle.finon.sixs',
  'com.finnacle.finon.wiz',
];

// Upwork forbids sharing contact details (incl. messenger IDs and social handles) before a contract.
const BLOCKED_HOSTS = [
  'linkedin.com',
  'twitter.com',
  'x.com',
  'instagram.com',
  'facebook.com',
  't.me',
  'telegram.me',
  'wa.me',
  'whatsapp.com',
  'kakao.com',
  'open.kakao.com',
  'pf.kakao.com',
  'skype.com',
  'discord.gg',
  'discord.com',
  'github.com',
  'threads.net',
  'line.me',
  'm.me',
  'messenger.com',
  'signal.me',
  'bsky.app',
  'youtube.com',
  'youtu.be',
  'tiktok.com',
  'gitlab.com',
  'wechat.com',
  'viber.com',
  'snapchat.com',
];

const EMAIL = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
// Any absolute URL in the raw HTML, including JSON-LD, meta tags and <link rel="me">.
const URL_IN_HTML = /https?:\/\/[^\s"'<>)\\]+/gi;
// Patterns checked against the visible text.
const CONTACT_TEXT = {
  'phone number': /(?<!\d)0\d{1,2}[\s.-]?\d{3,4}[\s.-]?\d{4}(?!\d)/,
  'international phone number': /\+\d{1,3}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{4}/,
  'US-format phone number': /(?<!\d)\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}(?!\d)/,
  'messenger ID': /\b(?:kakao(?:talk)?|telegram|whatsapp|wechat|line|signal|skype|discord|viber)\b\s*(?:id|handle)?\s*[:@]/i,
  'social handle': /(?:^|\s)@[A-Za-z0-9_.]{3,}/,
};

// Stock marketing words, matched with their inflections ("leveraging", "empowers").
const BANNED_WORDS = [
  'seamless\\w*',
  'elevat\\w*',
  'cutting-edge',
  'unlock\\w*',
  'empower\\w*',
  'leverag\\w*',
  'world-class',
  'robust\\w*',
  'innovat\\w*',
  'supercharg\\w*',
  'game-chang\\w*',
  'synerg\\w*',
  'tailored solutions?',
  'next-level',
  'delv\\w*',
];
const HANGUL = /\p{Script=Hangul}+/u;
// Writing tics that read as generated (see DESIGN.md): em dashes and "X, not Y" contrasts.
const WRITING_PATTERNS = {
  'em dash': /\u2014/,
  // ", not yet" is a plain time phrase, so it is allowed.
  'negative parallelism':
    /, not (?!yet\b)(?:just |only )?\w|\bnot (?:just|only)\b|n['’]t (?:just|only)\b|\bnot\b[^.,;:!?]{1,30}\bbut\b|\brather than\b|\binstead of\b/i,
};
// Emoji and pictographs, except the typographic ©, ® and ™.
const EMOJI = /(?![©®™])\p{Extended_Pictographic}/u;

const anchors = (page) =>
  page.root.querySelectorAll('a[href]').map((a) => ({ el: a, href: a.getAttribute('href') ?? '' }));

test('required pages exist', () => {
  for (const path of REQUIRED_PAGES) {
    assert.ok(existsSync(join(DIST, path)), `missing dist/${path}`);
  }
});

test('no contact info', () => {
  assert.ok(pages.length > 0, 'no pages built');
  const problems = [];
  for (const page of pages) {
    // Only web links: mailto:, tel:, sms:, skype:, whatsapp: and the like are all contact channels.
    for (const el of page.root.querySelectorAll('[href]')) {
      const href = el.getAttribute('href') ?? '';
      const scheme = hrefScheme(href);
      if (scheme && scheme !== 'http:' && scheme !== 'https:') problems.push(`${page.path}: ${scheme} link ${href}`);
    }
    for (const url of page.html.match(URL_IN_HTML) ?? []) {
      const host = hrefHost(url);
      if (host && BLOCKED_HOSTS.some((domain) => hostMatches(host, domain))) {
        problems.push(`${page.path}: link to ${host}`);
      }
    }
    const email = page.html.match(EMAIL);
    if (email) problems.push(`${page.path}: email address ${email[0]}`);
    const text = visibleText(page.root);
    for (const [kind, pattern] of Object.entries(CONTACT_TEXT)) {
      const match = text.match(pattern);
      if (match) problems.push(`${page.path}: ${kind} "${match[0].trim()}"`);
    }
  }
  assert.deepEqual(problems, []);
});

test('hire CTAs go to platforms only', () => {
  const home = pageAt('index.html');
  assert.ok(home, 'home page missing');
  assert.ok(home.root.querySelectorAll('[data-cta]').length >= 2, 'home page needs at least two hire CTAs');
  for (const page of pages) {
    for (const cta of page.root.querySelectorAll('[data-cta]')) {
      const host = hrefHost(cta.getAttribute('href') ?? '');
      assert.ok(
        host && (hostMatches(host, 'upwork.com') || hostMatches(host, 'fiverr.com')),
        `${page.path}: CTA points to ${cta.getAttribute('href')}`,
      );
    }
  }
});

test('404 page has no canonical URL', () => {
  const page = pageAt('404.html');
  assert.ok(page, '404 page missing');
  assert.ok(!page.root.querySelector('link[rel="canonical"]'), 'canonical on the 404 page');
  assert.ok(!page.root.querySelector('meta[property="og:url"]'), 'og:url on the 404 page');
});

test('page basics', () => {
  for (const page of pages) {
    assert.equal(page.root.querySelector('html')?.getAttribute('lang'), 'en', `${page.path}: lang`);
    assert.equal(page.root.querySelectorAll('h1').length, 1, `${page.path}: needs exactly one h1`);
    assert.ok(page.root.querySelector('title')?.text.trim(), `${page.path}: empty title`);
    const description = page.root.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
    assert.ok(description.length >= 50, `${page.path}: meta description shorter than 50 chars`);
  }
});

test('images have alt', () => {
  for (const page of pages) {
    for (const img of page.root.querySelectorAll('img')) {
      assert.ok(img.getAttribute('alt')?.trim(), `${page.path}: img without alt (${img.getAttribute('src')})`);
    }
  }
});

test('internal links resolve', () => {
  for (const page of pages) {
    for (const { href } of anchors(page)) {
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      assert.ok(resolveInternal(href), `${page.path}: broken internal link ${href}`);
    }
  }
});

test('payments page links all six listings', () => {
  const page = pageAt('work/payments/index.html');
  assert.ok(page, 'payments page missing');
  const ids = anchors(page)
    .filter(({ href }) => hrefHost(href) === 'play.google.com')
    .map(({ href }) => new URL(href).searchParams.get('id'));
  for (const id of PAYMENT_APP_IDS) {
    assert.ok(ids.includes(id), `no Play Store link for ${id}`);
  }
});

test('copy rules', () => {
  const problems = [];
  for (const page of pages) {
    const text = visibleText(page.root);
    const emoji = text.match(EMOJI);
    if (emoji) problems.push(`${page.path}: emoji ${emoji[0]}`);
    for (const word of BANNED_WORDS) {
      const match = text.match(new RegExp(`\\b${word}\\b`, 'i'));
      if (match) problems.push(`${page.path}: stock word "${match[0]}"`);
    }
    // English only. Korean is allowed where it is marked up as such (the brand names, lang="ko").
    const korean = visibleText(page.root, { englishOnly: true }).match(HANGUL);
    if (korean) problems.push(`${page.path}: Korean text "${korean[0]}" without lang="ko"`);
  }
  assert.deepEqual(problems, []);
});

test('writing patterns', () => {
  const problems = [];
  for (const page of pages) {
    const text = visibleText(page.root);
    for (const [kind, pattern] of Object.entries(WRITING_PATTERNS)) {
      const match = text.match(new RegExp(`.{0,40}(?:${pattern.source}).{0,20}`, pattern.flags));
      if (match) problems.push(`${page.path}: ${kind} "${match[0].trim()}"`);
    }
  }
  assert.deepEqual(problems, []);
});

test('hero renders timezone without JS', () => {
  const status = pageAt('index.html')?.root.querySelector('.hero__status');
  assert.ok(status, 'hero status line missing');
  assert.match(textWithoutHidden(status), /Seoul \(UTC\+9\)/);
});

test('social preview card matches the site copy', async () => {
  const card = parse(await readFile(new URL('../scripts/og/og.html', import.meta.url), 'utf8'));
  const stale = 'scripts/og/og.html is out of date: edit it, then run bash scripts/og/render.sh';
  assert.equal(card.querySelector('#name')?.text.trim(), site.name, stale);
  assert.equal(card.querySelector('#headline')?.text.trim(), site.headline, stale);
  assert.equal(card.querySelector('.meta')?.text.trim(), `${site.role} in ${site.location}`, stale);
});

test('placeholders (strict mode)', async () => {
  const files = (await listDistFiles()).filter((file) => /\.(html|xml|txt)$/.test(file));
  const hits = [];
  for (const file of files) {
    const content = await readFile(join(DIST, file), 'utf8');
    const count = (content.match(/\btodo\b|example\.com/gi) ?? []).length;
    if (count) hits.push(`${file} (${count})`);
  }
  if (process.env.STRICT === '1') {
    assert.deepEqual(hits, [], `placeholders left in: ${hits.join(', ')}`);
  } else if (hits.length) {
    console.warn(`[placeholders] ${hits.length} file(s) still have TODO/example.com: ${hits.join(', ')}`);
  }
});
