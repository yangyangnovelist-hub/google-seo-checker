#!/usr/bin/env node
// Search the scraped Google docs by keyword and print matching paragraphs
// + source URL. Turns the docs/ folder into a queryable reference.
//
//   node scripts/seo-checker/lookup.mjs <keyword> [keyword2 ...]
//   npm run seo:lookup -- canonical
//   npm run seo:lookup -- "结构化数据" Product offers
//
// Options:
//   --limit=N           Cap number of doc matches (default 8)
//   --json              JSON output
//   --titles            Only list matching doc titles, no excerpts
//   --section=<glob>    Filter by path prefix, e.g. crawling-indexing

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DOCS_DIR = path.join(__dirname, 'docs');

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return { fm: {}, body: md };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"|"$/g, '');
  }
  return { fm, body: m[2] };
}

function chunkParagraphs(body) {
  // Split into paragraphs; treat headings as their own chunks.
  return body.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);
}

function score(text, terms) {
  const lower = text.toLowerCase();
  let s = 0;
  for (const t of terms) {
    const occ = lower.split(t.toLowerCase()).length - 1;
    s += occ * Math.max(2, t.length);
  }
  return s;
}

function highlight(text, terms, useColor) {
  if (!useColor) return text;
  let out = text;
  for (const t of terms.sort((a, b) => b.length - a.length)) {
    if (!t) continue;
    const re = new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    out = out.replace(re, m => `\x1b[33m\x1b[1m${m}\x1b[0m`);
  }
  return out;
}

async function main() {
  const args = process.argv.slice(2);
  if (!args.length || args.includes('-h') || args.includes('--help')) {
    console.log(`Lookup Google SEO docs by keyword.

Usage: node scripts/seo-checker/lookup.mjs <keywords...> [options]

Options:
  --limit=N         max docs to show (default 8)
  --json            JSON output
  --titles          only doc titles, no excerpts
  --section=PREFIX  filter by path prefix (e.g. crawling-indexing)
`);
    process.exit(args.length ? 0 : 1);
  }

  const terms = [];
  let limit = 8, jsonOut = false, titlesOnly = false, section = '';
  for (const a of args) {
    if (a.startsWith('--limit=')) limit = Number(a.slice(8));
    else if (a === '--json') jsonOut = true;
    else if (a === '--titles') titlesOnly = true;
    else if (a.startsWith('--section=')) section = a.slice(10);
    else if (!a.startsWith('--')) terms.push(a);
  }
  if (!terms.length) { console.error('需要至少 1 个关键词'); process.exit(1); }

  const files = (await readdir(DOCS_DIR)).filter(f => f.endsWith('.md'));
  const matches = [];

  for (const f of files) {
    if (section && !f.includes(section)) continue;
    const text = await readFile(path.join(DOCS_DIR, f), 'utf8');
    const { fm, body } = parseFrontmatter(text);
    const docScore = score(text, terms);
    if (!docScore) continue;
    const paras = chunkParagraphs(body);
    const ranked = paras
      .map(p => ({ p, s: score(p, terms) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 2);
    matches.push({
      title: fm.title || f,
      source: fm.source || '',
      slug: fm.slug || f.replace(/\.md$/, ''),
      score: docScore,
      excerpts: ranked.map(r => r.p),
    });
  }

  matches.sort((a, b) => b.score - a.score);
  const top = matches.slice(0, limit);

  if (jsonOut) {
    console.log(JSON.stringify({ terms, count: matches.length, results: top }, null, 2));
    return;
  }

  const useColor = !process.env.NO_COLOR && process.stdout.isTTY;
  const dim = s => useColor ? `\x1b[2m${s}\x1b[0m` : s;
  const bold = s => useColor ? `\x1b[1m${s}\x1b[0m` : s;
  const blue = s => useColor ? `\x1b[34m${s}\x1b[0m` : s;

  console.log(`\n${bold('SEO Docs Lookup')} ${dim('— keywords: ' + terms.join(' '))}`);
  console.log(dim(`${matches.length} 篇匹配，显示前 ${top.length} 篇\n`));

  for (const r of top) {
    console.log(`${bold(r.title)} ${dim('[score ' + r.score + ']')}`);
    console.log(`  ${blue('→')} ${dim(r.source)}`);
    if (!titlesOnly) {
      for (const ex of r.excerpts) {
        const compact = ex.replace(/\s+/g, ' ').slice(0, 300);
        console.log(`  ${highlight(compact, terms, useColor)}${ex.length > 300 ? dim(' …') : ''}`);
      }
    }
    console.log();
  }
}

main().catch(err => { console.error(err); process.exit(2); });
