// Pretty-print a check result to stdout. ANSI colors so the output reads
// well in a terminal; honors NO_COLOR.

import { CATEGORIES } from './rules.mjs';

const useColor = !process.env.NO_COLOR && process.stdout.isTTY;
const c = (code, s) => useColor ? `\x1b[${code}m${s}\x1b[0m` : s;
const dim = s => c('2', s);
const red = s => c('31', s);
const green = s => c('32', s);
const yellow = s => c('33', s);
const blue = s => c('34', s);
const bold = s => c('1', s);

const ICONS = { pass: green('✓'), warn: yellow('⚠'), fail: red('✗'), skip: dim('·'), error: red('!') };

export function format(result) {
  const lines = [];
  lines.push('');
  lines.push(bold('SEO Checker') + dim(' — ') + bold(result.target));
  if (result.mode === 'http' && result.finalUrl && result.finalUrl !== result.target) {
    lines.push(dim(`  → 重定向到 ${result.finalUrl}`));
  }
  if (result.status) lines.push(dim(`  HTTP ${result.status}`));
  lines.push('');

  const s = result.summary;
  const parts = [
    green(`${s.pass || 0} 通过`),
    yellow(`${s.warn || 0} 警告`),
    red(`${s.fail || 0} 错误`),
    dim(`${s.skip || 0} 跳过`),
  ];
  if (s.error) parts.push(red(`${s.error} 规则异常`));
  lines.push(parts.join('  '));
  lines.push('');

  // Group by status order: fail, warn, pass, skip
  const order = ['fail', 'warn', 'error', 'pass', 'skip'];
  const grouped = {};
  for (const r of result.results) (grouped[r.status] = grouped[r.status] || []).push(r);

  for (const status of order) {
    const rows = grouped[status];
    if (!rows || !rows.length) continue;
    const header = ({
      fail: red(bold('错误 (FAIL)')),
      warn: yellow(bold('警告 (WARN)')),
      error: red(bold('规则异常')),
      pass: green(bold('通过 (PASS)')),
      skip: dim(bold('跳过 (SKIP)')),
    })[status];
    lines.push(header);

    for (const r of rows) {
      const cat = CATEGORIES[r.category] || r.category;
      const head = `  ${ICONS[r.status]} ${bold(r.id)} ${dim('[' + cat + ']')}`;
      lines.push(head);
      if (status === 'fail' || status === 'warn' || status === 'error') {
        lines.push(`     ${r.title}`);
        if (r.message) lines.push(`     ${yellow('▶')} ${r.message}`);
        if (r.detail) lines.push(`     ${dim(r.detail)}`);
        lines.push(`     ${blue('→')} ${dim(r.source)}`);
      } else if (status === 'pass' && r.detail) {
        lines.push(`     ${dim(r.detail)}`);
      }
    }
    lines.push('');
  }

  return lines.join('\n');
}

export function formatJson(result) {
  return JSON.stringify(result, null, 2);
}
