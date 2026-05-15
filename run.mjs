// Orchestrator: take a URL or local file, build the inspection context,
// run every rule, return structured results.

import {
  stripNoise, getHead, getBody, getHtmlAttrs, getTitle,
  getMetas, getMetaByName, getMetaByProperty,
  getLinks, getLinkByRel, getAllLinksByRel,
  getHeadings, getImages, getAnchors,
  getJsonLd, getJsonLdNodes,
} from './lib/inspect.mjs';
import { fetchPage, fetchRobots, parseRobots, fetchSitemap } from './lib/fetch-page.mjs';
import { RULES } from './rules.mjs';

export async function check(target, opts = {}) {
  const page = await fetchPage(target, opts);
  const pageUrl = page.mode === 'http' ? (page.finalUrl || page.url) : null;

  // Strip <script>/<style>/comments for structural checks; keep raw html
  // for JSON-LD extraction (which lives inside <script>).
  const clean = stripNoise(page.html);
  const head = getHead(clean);
  const body = getBody(clean);
  const htmlAttrs = getHtmlAttrs(clean);
  const title = getTitle(head);
  const metas = getMetas(head);
  const links = getLinks(head);
  const headings = getHeadings(body);
  const images = getImages(body);
  const anchors = getAnchors(body);
  const jsonLd = getJsonLd(page.html);
  const jsonLdNodes = getJsonLdNodes(jsonLd);

  let robots = null;
  let robotsParsed = null;
  let sitemaps = null;

  if (page.mode === 'http' && opts.fetchRobots !== false) {
    robots = await fetchRobots(pageUrl);
    if (robots.ok) {
      robotsParsed = parseRobots(robots.text);
      if (opts.fetchSitemaps !== false && robotsParsed.sitemaps.length) {
        const list = robotsParsed.sitemaps.slice(0, 5);
        sitemaps = await Promise.all(list.map(fetchSitemap));
        sitemaps.forEach((s, i) => { s.url = list[i]; });
      }
    }
  }

  const ctx = {
    mode: page.mode,
    target,
    pageUrl,
    status: page.status,
    contentType: page.contentType,
    headers: page.headers,
    html: page.html,
    head, body, htmlAttrs,
    title, metas, links, headings, images, anchors,
    jsonLd, jsonLdNodes,
    robots, robotsParsed, sitemaps,
    // helpers exposed to rules
    getMetaByName, getMetaByProperty,
    getLinkByRel, getAllLinksByRel,
  };

  const results = [];
  for (const rule of RULES) {
    try {
      const r = rule.check(ctx) || { status: 'pass' };
      results.push({
        id: rule.id,
        category: rule.category,
        severity: rule.severity,
        title: rule.title,
        source: rule.source,
        ...r,
      });
    } catch (e) {
      results.push({
        id: rule.id,
        category: rule.category,
        severity: rule.severity,
        title: rule.title,
        source: rule.source,
        status: 'error',
        message: `规则执行抛错: ${e.message}`,
      });
    }
  }

  return {
    target,
    mode: page.mode,
    finalUrl: page.finalUrl,
    status: page.status,
    fetchedAt: new Date().toISOString(),
    summary: summarize(results),
    results,
  };
}

function summarize(results) {
  const counts = { pass: 0, warn: 0, fail: 0, skip: 0, error: 0 };
  for (const r of results) {
    counts[r.status] = (counts[r.status] || 0) + 1;
  }
  return counts;
}
