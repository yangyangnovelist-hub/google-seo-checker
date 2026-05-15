// Regex-based HTML inspection. Dependency-free by design — see
// scripts/lint-mirror-html.mjs for the same approach used elsewhere in
// this repo. Good enough for the head-tag / structured-data / link /
// image checks the SEO checker runs.

function decode(s = '') {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

export function parseAttrs(s) {
  const attrs = {};
  const re = /([a-zA-Z_:][a-zA-Z0-9_:.\-]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let m;
  while ((m = re.exec(s)) !== null) {
    attrs[m[1].toLowerCase()] = decode(m[2] ?? m[3] ?? m[4] ?? '');
  }
  return attrs;
}

// Strip <script>, <style>, comments before structural checks so their
// contents don't pollute matches (e.g. a `<title>` inside a JS string).
export function stripNoise(html) {
  return html
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
}

export function getHead(html) {
  const m = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  return m ? m[1] : html;
}

export function getBody(html) {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return m ? m[1] : html;
}

export function getHtmlAttrs(html) {
  const m = html.match(/<html\b([^>]*)>/i);
  return m ? parseAttrs(m[1]) : {};
}

export function getTitle(head) {
  const m = head.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decode(m[1]).trim() : '';
}

export function getMetas(head) {
  const metas = [];
  const re = /<meta\b([^>]*)>/gi;
  let m;
  while ((m = re.exec(head)) !== null) metas.push(parseAttrs(m[1]));
  return metas;
}

export function getMetaByName(metas, name) {
  return metas.find(m => (m.name || '').toLowerCase() === name.toLowerCase());
}

export function getMetaByProperty(metas, prop) {
  return metas.find(m => (m.property || '').toLowerCase() === prop.toLowerCase());
}

export function getLinks(head) {
  const links = [];
  const re = /<link\b([^>]*)>/gi;
  let m;
  while ((m = re.exec(head)) !== null) links.push(parseAttrs(m[1]));
  return links;
}

export function getLinkByRel(links, rel) {
  return links.find(l => (l.rel || '').toLowerCase().split(/\s+/).includes(rel.toLowerCase()));
}

export function getAllLinksByRel(links, rel) {
  return links.filter(l => (l.rel || '').toLowerCase().split(/\s+/).includes(rel.toLowerCase()));
}

export function getHeadings(body) {
  const headings = [];
  const re = /<h([1-6])\b([^>]*)>([\s\S]*?)<\/h\1>/gi;
  let m;
  while ((m = re.exec(body)) !== null) {
    headings.push({
      level: Number(m[1]),
      attrs: parseAttrs(m[2]),
      text: decode(m[3].replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim(),
    });
  }
  return headings;
}

export function getImages(body) {
  const imgs = [];
  const re = /<img\b([^>]*)>/gi;
  let m;
  while ((m = re.exec(body)) !== null) imgs.push(parseAttrs(m[1]));
  return imgs;
}

export function getAnchors(body) {
  const anchors = [];
  const re = /<a\b([^>]*)>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(body)) !== null) {
    anchors.push({
      ...parseAttrs(m[1]),
      text: decode(m[2].replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim(),
    });
  }
  return anchors;
}

export function getJsonLd(html) {
  const blocks = [];
  const re = /<script\b([^>]*type\s*=\s*["']application\/ld\+json["'][^>]*)>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const raw = m[2].trim();
    try {
      const parsed = JSON.parse(raw);
      blocks.push({ ok: true, parsed, raw });
    } catch (err) {
      blocks.push({ ok: false, error: err.message, raw });
    }
  }
  return blocks;
}

// Walk a JSON-LD value and yield every object that has an @type field.
export function* walkJsonLdNodes(value) {
  if (Array.isArray(value)) {
    for (const v of value) yield* walkJsonLdNodes(v);
    return;
  }
  if (value && typeof value === 'object') {
    if (value['@type']) yield value;
    if (Array.isArray(value['@graph'])) {
      for (const v of value['@graph']) yield* walkJsonLdNodes(v);
    }
    for (const k of Object.keys(value)) {
      if (k === '@type' || k === '@context' || k === '@graph') continue;
      yield* walkJsonLdNodes(value[k]);
    }
  }
}

export function getJsonLdNodes(blocks) {
  const out = [];
  for (const b of blocks) {
    if (!b.ok) continue;
    for (const node of walkJsonLdNodes(b.parsed)) out.push(node);
  }
  return out;
}

export function typeOf(node) {
  const t = node?.['@type'];
  return Array.isArray(t) ? t.join(',') : (t || '');
}
