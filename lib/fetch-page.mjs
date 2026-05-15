// Fetch a URL or read a local file. Returns the same envelope so callers
// don't care which mode was used.

import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const UA = 'Mozilla/5.0 (compatible; packoasis-seo-checker/1.0)';

export async function fetchPage(target, opts = {}) {
  const isFile = !/^https?:\/\//i.test(target) && existsSync(target);
  if (isFile) {
    const abs = path.resolve(target);
    const html = await readFile(abs, 'utf8');
    return {
      mode: 'file',
      target,
      url: abs,
      status: 200,
      finalUrl: abs,
      contentType: 'text/html',
      html,
      headers: {},
    };
  }
  const res = await fetch(target, {
    redirect: 'follow',
    headers: { 'user-agent': UA, 'accept-language': opts.lang || 'zh-CN,zh;q=0.9,en;q=0.8' },
  });
  const html = await res.text();
  return {
    mode: 'http',
    target,
    url: target,
    status: res.status,
    finalUrl: res.url,
    contentType: res.headers.get('content-type') || '',
    html,
    headers: Object.fromEntries(res.headers),
  };
}

export async function fetchRobots(originUrl) {
  try {
    const u = new URL(originUrl);
    const robotsUrl = `${u.origin}/robots.txt`;
    const res = await fetch(robotsUrl, { headers: { 'user-agent': UA } });
    if (!res.ok) return { ok: false, status: res.status, url: robotsUrl };
    const text = await res.text();
    return { ok: true, status: res.status, url: robotsUrl, text };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

export function parseRobots(text) {
  const lines = text.split(/\r?\n/);
  const groups = [];
  const sitemaps = [];
  let current = null;
  for (const raw of lines) {
    const line = raw.replace(/#.*$/, '').trim();
    if (!line) continue;
    const m = line.match(/^([a-zA-Z-]+)\s*:\s*(.+)$/);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const val = m[2].trim();
    if (key === 'user-agent') {
      current = { agent: val, rules: [] };
      groups.push(current);
    } else if (key === 'sitemap') {
      sitemaps.push(val);
    } else if (current && (key === 'allow' || key === 'disallow')) {
      current.rules.push({ type: key, path: val });
    }
  }
  return { groups, sitemaps };
}

export async function fetchSitemap(url) {
  try {
    const res = await fetch(url, { headers: { 'user-agent': UA } });
    if (!res.ok) return { ok: false, status: res.status };
    const text = await res.text();
    const urls = Array.from(text.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)).map(m => m[1]);
    const isIndex = /<sitemapindex/i.test(text);
    return { ok: true, status: res.status, isIndex, urls, raw: text, size: text.length };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

export async function headRequest(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return { ok: res.ok, status: res.status, contentType: res.headers.get('content-type') || '' };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}
