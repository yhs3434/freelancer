import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'node-html-parser';

export const DIST = fileURLToPath(new URL('../dist/', import.meta.url));

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = join(dir, entry.name);
      return entry.isDirectory() ? walk(full) : [full];
    }),
  );
  return files.flat();
}

/** Every file in dist/, as paths relative to dist/. */
export async function listDistFiles() {
  if (!existsSync(DIST)) return [];
  return (await walk(DIST)).map((file) => relative(DIST, file));
}

/** Every built HTML page, parsed. */
export async function loadPages() {
  const files = (await listDistFiles()).filter((file) => file.endsWith('.html'));
  return Promise.all(
    files.map(async (path) => {
      const html = await readFile(join(DIST, path), 'utf8');
      return { path, html, root: parse(html) };
    }),
  );
}

/**
 * Text a visitor or a screen reader gets: title, meta description, body text, and the alt,
 * aria-label and title attributes. Scripts and styles are dropped. Block elements are kept apart
 * (compressHTML removes the whitespace between them, so plain `.text` glues "Robust" and "One"
 * into "RobustOne"). With { englishOnly: true }, elements whose lang is not English are dropped.
 */
export function visibleText(root, { englishOnly = false } = {}) {
  const copy = parse(root.toString());
  copy.querySelectorAll('script, style, noscript, template').forEach((node) => node.remove());
  const body = copy.querySelector('body');
  if (englishOnly && body) {
    body
      .querySelectorAll('[lang]')
      .filter((el) => !/^en\b/i.test(el.getAttribute('lang') ?? ''))
      .forEach((el) => el.remove());
  }
  const labels = (body?.querySelectorAll('[alt], [aria-label], [title]') ?? []).flatMap((el) =>
    ['alt', 'aria-label', 'title'].map((name) => el.getAttribute(name)).filter(Boolean),
  );
  const title = copy.querySelector('title')?.text ?? '';
  const description = copy.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
  return [title, description, body?.structuredText ?? '', ...labels].join('\n').replace(/\s+/g, ' ');
}

/** Text of an element as rendered without JS: elements with the hidden attribute are left out. */
export function textWithoutHidden(el) {
  const copy = parse(el.toString());
  copy.querySelectorAll('[hidden]').forEach((node) => node.remove());
  return copy.text.replace(/\s+/g, ' ');
}

/** Scheme of an absolute URL ("https:", "mailto:"), or null for relative links. */
export function hrefScheme(href) {
  try {
    return new URL(href).protocol.toLowerCase();
  } catch {
    return null;
  }
}

/** Hostname of an href, or null for relative links and non-URL schemes. */
export function hrefHost(href) {
  try {
    const url = new URL(href);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.hostname.toLowerCase() : null;
  } catch {
    return null;
  }
}

export function hostMatches(host, domain) {
  return host === domain || host.endsWith(`.${domain}`);
}

/** Resolve a root-relative href ("/work/payments") to a file in dist/, or null if none exists. */
export function resolveInternal(href) {
  const path = decodeURI(href.split('#')[0].split('?')[0]) || '/';
  const candidates = path.endsWith('/')
    ? [join(path, 'index.html')]
    : [path, `${path}.html`, join(path, 'index.html')];
  return candidates.map((candidate) => join(DIST, candidate)).find((file) => existsSync(file)) ?? null;
}
