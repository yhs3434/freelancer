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

/** Text a visitor can read: body text without scripts and styles, plus title and meta description. */
export function visibleText(root) {
  const copy = parse(root.toString());
  copy.querySelectorAll('script, style, noscript, template').forEach((node) => node.remove());
  const body = copy.querySelector('body')?.text ?? '';
  const title = copy.querySelector('title')?.text ?? '';
  const description = copy.querySelector('meta[name="description"]')?.getAttribute('content') ?? '';
  return `${title}\n${description}\n${body}`.replace(/\s+/g, ' ');
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
