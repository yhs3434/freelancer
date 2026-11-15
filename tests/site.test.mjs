import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import {
  DIST,
  hostMatches,
  hrefHost,
  listDistFiles,
  loadPages,
  resolveInternal,
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
];

const EMAIL = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
const PHONE_DOMESTIC = /(?<!\d)0\d{1,2}[\s.-]?\d{3,4}[\s.-]?\d{4}(?!\d)/;
const PHONE_INTERNATIONAL = /\+\d{1,3}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{4}/;

const BANNED_WORDS = [
  'seamless',
  'seamlessly',
  'elevate',
  'cutting-edge',
  'unlock',
  'empower',
  'leverage',
  'world-class',
  'robust',
  'innovative',
  'supercharge',
  'game-changer',
  'synergy',
  'tailored solutions',
  'next-level',
  'delve',
];
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
  for (const page of pages) {
    for (const { href } of anchors(page)) {
      assert.doesNotMatch(href, /^(mailto|tel|sms):/i, `${page.path}: contact link ${href}`);
      const host = hrefHost(href);
      if (host) {
        const blocked = BLOCKED_HOSTS.find((domain) => hostMatches(host, domain));
        assert.equal(blocked, undefined, `${page.path}: link to ${host}`);
      }
    }
    const text = visibleText(page.root);
    assert.doesNotMatch(text, EMAIL, `${page.path}: email address in text`);
    assert.doesNotMatch(text, PHONE_DOMESTIC, `${page.path}: phone number in text`);
    assert.doesNotMatch(text, PHONE_INTERNATIONAL, `${page.path}: phone number in text`);
  }
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
  for (const page of pages) {
    const text = visibleText(page.root);
    assert.doesNotMatch(text, EMOJI, `${page.path}: emoji in text`);
    for (const word of BANNED_WORDS) {
      assert.doesNotMatch(text, new RegExp(`\\b${word}\\b`, 'i'), `${page.path}: banned word "${word}"`);
    }
  }
});

test('hero renders timezone without JS', () => {
  const home = pageAt('index.html');
  assert.ok(home, 'home page missing');
  assert.match(visibleText(home.root), /UTC\+9/);
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
