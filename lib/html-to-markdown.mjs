// Tiny HTML → Markdown converter scoped to Google devsite article body.
//
// Why hand-rolled: we don't want a new runtime dep just for fetch-docs.mjs.
// The Google devsite HTML structure is narrow (a known set of tags + classes)
// so a focused converter is enough. If we ever need more fidelity, swap in
// turndown via a one-line replacement.

const VOID = new Set(['br', 'hr', 'img', 'meta', 'link', 'input']);
const BLOCK = new Set([
  'p', 'div', 'section', 'article', 'aside', 'header', 'footer',
  'ul', 'ol', 'li', 'pre', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'td', 'th',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
]);

const HEADING = { h1: '# ', h2: '## ', h3: '### ', h4: '#### ', h5: '##### ', h6: '###### ' };

function decode(s) {
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

// Minimal tokenizer — produces a flat token stream we walk into markdown.
function tokenize(html) {
  const tokens = [];
  const re = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][a-zA-Z0-9-]*)\s*([^>]*?)\/?>|([^<]+)/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (m[0].startsWith('<!--')) continue;
    if (m[4] !== undefined) {
      tokens.push({ type: 'text', value: m[4] });
    } else {
      const closing = m[1] === '/';
      const tag = m[2].toLowerCase();
      const attrs = parseAttrs(m[3] || '');
      const selfClose = m[0].endsWith('/>') || VOID.has(tag);
      tokens.push({ type: closing ? 'close' : 'open', tag, attrs, selfClose });
    }
  }
  return tokens;
}

function parseAttrs(s) {
  const attrs = {};
  const re = /([a-zA-Z_:][a-zA-Z0-9_:.\-]*)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
  let m;
  while ((m = re.exec(s)) !== null) attrs[m[1].toLowerCase()] = decode(m[2] ?? m[3] ?? m[4] ?? '');
  return attrs;
}

const SKIP_TAGS = new Set(['script', 'style', 'noscript', 'svg', 'devsite-feedback', 'devsite-thumb-rating']);
const SKIP_CLASSES = ['devsite-banner', 'devsite-toc', 'devsite-page-rating', 'devsite-feedback'];

export function articleToMarkdown(html) {
  // Find the <article class="devsite-article"> body. We trim to that.
  const start = html.search(/<article[^>]*devsite-article[^>]*>/i);
  const articleHtml = start >= 0
    ? html.slice(start)
    : html;
  const tokens = tokenize(articleHtml);

  let out = '';
  let listStack = []; // {type:'ul'|'ol', index}
  let inPre = false;
  let inCode = false;
  let suppressDepth = 0;
  let linkHrefStack = [];
  let buffer = '';

  function emit(str) {
    buffer += str;
  }
  function flushBlock() {
    out += buffer.replace(/[ \t]+\n/g, '\n').replace(/\n{3,}/g, '\n\n');
    buffer = '';
  }
  function newline(n = 1) {
    while (n-- > 0) emit('\n');
  }

  for (const t of tokens) {
    if (suppressDepth > 0) {
      if (t.type === 'open' && !t.selfClose) suppressDepth++;
      else if (t.type === 'close') suppressDepth--;
      continue;
    }
    if (t.type === 'text') {
      let text = decode(t.value);
      if (!inPre) text = text.replace(/\s+/g, ' ');
      if (inPre || text.trim() || /[\s]/.test(buffer.slice(-1))) emit(text);
      continue;
    }
    const { tag, attrs } = t;
    if (t.type === 'open') {
      if (SKIP_TAGS.has(tag)) { suppressDepth = 1; continue; }
      const cls = (attrs.class || '').toLowerCase();
      if (SKIP_CLASSES.some(c => cls.includes(c))) { suppressDepth = 1; continue; }
      if (HEADING[tag]) { newline(2); emit(HEADING[tag]); continue; }
      if (tag === 'p') { newline(2); continue; }
      if (tag === 'br') { newline(1); continue; }
      if (tag === 'hr') { newline(2); emit('---'); newline(2); continue; }
      if (tag === 'ul') { listStack.push({ type: 'ul' }); newline(2); continue; }
      if (tag === 'ol') { listStack.push({ type: 'ol', index: 1 }); newline(2); continue; }
      if (tag === 'li') {
        newline(1);
        const top = listStack[listStack.length - 1];
        const indent = '  '.repeat(Math.max(0, listStack.length - 1));
        if (top?.type === 'ol') { emit(`${indent}${top.index}. `); top.index++; }
        else emit(`${indent}- `);
        continue;
      }
      if (tag === 'pre') { inPre = true; newline(2); emit('```\n'); continue; }
      if (tag === 'code') {
        if (!inPre) { emit('`'); inCode = true; }
        continue;
      }
      if (tag === 'a') {
        linkHrefStack.push(attrs.href || '');
        emit('[');
        continue;
      }
      if (tag === 'strong' || tag === 'b') { emit('**'); continue; }
      if (tag === 'em' || tag === 'i') { emit('*'); continue; }
      if (tag === 'blockquote') { newline(2); emit('> '); continue; }
      if (BLOCK.has(tag)) { newline(1); continue; }
    } else if (t.type === 'close') {
      if (HEADING[tag]) { newline(2); continue; }
      if (tag === 'p') { newline(2); continue; }
      if (tag === 'ul' || tag === 'ol') { listStack.pop(); newline(2); continue; }
      if (tag === 'li') { continue; }
      if (tag === 'pre') { inPre = false; newline(1); emit('```'); newline(2); continue; }
      if (tag === 'code') {
        if (!inPre) { emit('`'); inCode = false; }
        continue;
      }
      if (tag === 'a') {
        const href = linkHrefStack.pop() || '';
        emit(`](${href})`);
        continue;
      }
      if (tag === 'strong' || tag === 'b') { emit('**'); continue; }
      if (tag === 'em' || tag === 'i') { emit('*'); continue; }
      if (tag === 'blockquote') { newline(2); continue; }
      if (BLOCK.has(tag)) { newline(1); continue; }
    }
  }
  flushBlock();
  return out
    .replace(/ /g, ' ')
    .replace(/[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim() + '\n';
}

// Pull <h1> as the article title, fallback to <title>
export function extractTitle(html) {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1) return decode(h1[1].replace(/<[^>]+>/g, '')).trim();
  const t = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return t ? decode(t[1]).trim() : '';
}
