# google-seo-checker

> 把 [Google Search 152 篇官方文档](https://developers.google.com/search/docs) 变成 **65 条机检规则** + **全文反查工具**。
>
> 每条规则都带 `→ 原文链接`。不靠 LLM 凭印象编"Google 推荐 ..."。

[English](./README.en.md) · 中文

```bash
npx google-seo-checker https://example.com/
```

```
SEO Checker — https://example.com/
  HTTP 200

49 通过  9 警告  1 错误  6 跳过

错误 (FAIL)
  ✗ no-mixed-content [可抓取性]
     HTTPS 页面不应引用 http: 资源（mixed content）
     ▶ 1 处 http: 资源
     http://s7.addthis.com/js/300/addthis_widget.js
     → https://developers.google.com/search/docs/essentials/technical
```

## 为什么有这个

市面上 SEO 工具两类：

1. **Lighthouse / PageSpeed** — 强在 CWV，弱在 schema / canonical / robots / 反垃圾政策
2. **Screaming Frog / Ahrefs / Semrush** — 商业付费，规则黑箱，对小项目过重

而真正的 ground truth 是 [developers.google.com/search/docs](https://developers.google.com/search/docs) 这 152 篇 — 大多数程序员从没完整读过。

这个工具做的事：**把那 152 篇里能机检的部分写成 if 语句**，每条规则都带出处链接。

## 安装

```bash
# 全局命令
npm i -g google-seo-checker
seo-check https://example.com/

# 或直接用 npx，不装
npx google-seo-checker https://example.com/

# 项目里用
npm i -D google-seo-checker
```

要求 Node ≥ 18（用了内置 `fetch`）。零运行时依赖。

## 三个入口

### 1. `seo-check` — 查单页

```bash
seo-check https://example.com/                  # URL
seo-check ./dist/index.html                     # 本地文件
seo-check https://example.com/ --quiet          # 只看 fail/warn
seo-check https://example.com/ --json           # 机器可读
seo-check https://example.com/ --filter=schema  # 只跑某类
seo-check https://example.com/ --fail-on=warn   # CI：warn 也阻断
seo-check https://example.com/ --no-sitemap     # 跳过 sitemap 抓取
```

退出码：`0` = 没 fail；`1` = 有 fail（或满足 `--fail-on` 阈值）；`2` = 工具异常。

### 2. `seo-lookup` — 反查 Google 文档

```bash
seo-lookup canonical                            # 单词
seo-lookup hreflang 自引用 x-default              # 多词加权（AND）
seo-lookup robots --section=crawling-indexing   # 限板块
seo-lookup "Product offers" --titles            # 只列标题
seo-lookup canonical --json | jq                # JSON
```

返回相关度排序的文档 + 命中段落（关键词高亮）+ 原文 URL。

### 3. 作为 JS 库

```js
import { check } from 'google-seo-checker';
import { RULES, CATEGORIES } from 'google-seo-checker/rules';

const result = await check('https://example.com/');

console.log(result.summary);  // { pass: 49, warn: 9, fail: 1, skip: 6 }

for (const r of result.results) {
  if (r.status === 'fail') {
    console.log(r.id, '→', r.message, '\n   ', r.source);
  }
}

// 想知道规则定义：
RULES.find(r => r.id === 'no-mixed-content');
```

## 65 条规则覆盖了什么

按 Google docs 的 6 大板块（essentials / fundamentals / crawling-indexing / appearance / monitor-debug / specialty）拆出来：

| 类别 | 示例规则 |
|------|---------|
| `crawl` (8) | HTTPS, 200 状态, robots.txt 存在/允许当前页/允许 CSS-JS, Sitemap 声明/可达/未超限, mixed-content |
| `index` (8) | noindex, canonical (存在/绝对/同源), robots-meta 与 X-Robots-Tag 冲突, rel=next/prev, amphtml |
| `meta` (10) | title (存在/15-60字/非模板), description (50-160字), charset, viewport, html lang, favicon, snippet 控制 |
| `headings` (3) | h1 存在 / 唯一 / 不跳级 |
| `images` (5) | alt, width/height (CLS), lazy, 通用文件名 (IMG_1234), 现代格式 (webp/avif) |
| `links` (5) | 空锚, 通用锚文本, `javascript:`/`#`, `target=_blank` rel |
| `schema` (10) | JSON-LD 语法, @context, Product offers price/currency, Article 必填字段, Breadcrumb itemListElement, Organization, WebSite name, SearchAction, 日期合法性 |
| `social` (4) | og:title/description/image/url（且与 canonical 一致） |
| `i18n` (1) | hreflang self-reference / x-default |
| `content` (2) | title=h1 重复, 正文长度 (CJK 字 / 拉丁 词 自适应) |
| `url` (4) | 大小写, 空格, `-` vs `_`, 长度 |
| `policy` (3) | 关键字堆砌 (>5% 词频), 隐藏文字 (display:none / color), doorway 城市模板 |
| `js` (2) | onclick=window.location, fragment-only 路由 |
| `perf` (2) | `<head>` 内阻塞渲染的 `<script>`, 多 origin 无 preconnect |

完整定义看 [`rules.mjs`](./rules.mjs)。每条对象长这样：

```js
{
  id: 'jsonld-product-offers',
  category: 'schema',
  severity: 'error',
  title: 'Product 必须有 offers + price + priceCurrency',
  source: 'https://developers.google.com/search/docs/appearance/structured-data/product',
  check: (ctx) => { /* return { status: 'pass' | 'warn' | 'fail' | 'skip', message?, detail? } */ },
}
```

## 加你自己的规则

往 `rules.mjs` 数组追一项，立即生效：

```js
{
  id: 'twitter-card-summary',
  category: 'social',
  severity: 'info',
  title: 'Twitter card 应声明 summary_large_image',
  source: 'https://developer.x.com/...',
  check: ({ getMetaByName, metas }) => {
    const card = getMetaByName(metas, 'twitter:card');
    return card?.content === 'summary_large_image'
      ? { status: 'pass' }
      : { status: 'warn', message: '缺少或非 large_image' };
  },
}
```

`ctx` 字段全集见 [`run.mjs`](./run.mjs)：`title / metas / links / headings / images / anchors / jsonLd / jsonLdNodes / robotsParsed / sitemaps` 等。

## 用作 Claude Code skill

仓库里附了 [`SKILL.md`](./SKILL.md)。装法：

```bash
# 装到 Claude Code 个人 skill 目录
mkdir -p ~/.claude/skills/google-seo-checker
ln -s "$(npm root -g)/google-seo-checker"/* ~/.claude/skills/google-seo-checker/
```

然后在 Claude Code 里说"帮我查一下 example.com 的 SEO" / "Google 怎么说 canonical" 就会自动触发。

## 局限（直说）

- **正则解析 HTML** — 不是真 DOM。碎 HTML / 嵌套 `<script>` 里塞 HTML 字符串可能误判
- **不跑 JS** — SSR / SSG 能看到；纯客户端渲染的 schema/title 看不到
- **单 URL 一次性** — 没有全站 crawl、没有 diff、没有跟上次对比
- **CWV 是表层** — 只查 `width/height`、`preconnect`、阻塞脚本；真 LCP/CLS/INP 要 Lighthouse / CrUX
- **docs 是时刻快照** — Google 改 docs 不会自动同步。`npm run fetch-docs -- --force` 重抓；CI 每月自动刷
- **规则不是从 docs 自动抽** — 65 条是手挑的"能机检的部分"。E-E-A-T、helpful content 这类质性判断没法变 if 语句

## 跟其他工具的关系

| | google-seo-checker | Lighthouse | Screaming Frog | Ahrefs |
|---|---|---|---|---|
| 价格 | 免费 / MIT | 免费 | $259/年起 | $99/月起 |
| Schema / JSON-LD 字段 | ✅ 10 条 | ⚠️ 基础 | ✅ | ⚠️ |
| robots.txt + sitemap | ✅ | ❌ | ✅ | ✅ |
| 反垃圾政策（关键字堆砌 / 隐藏文字 / doorway） | ✅ 3 条 | ❌ | ⚠️ | ⚠️ |
| 真 CWV (LCP/CLS/INP) | ❌（用 Lighthouse） | ✅ | ⚠️ | ✅ |
| 全站 crawl | ❌ | ❌ | ✅ | ✅ |
| 规则源出处 | ✅ 每条带 link | ❌ | ❌ | ❌ |
| 反查 Google docs | ✅ | ❌ | ❌ | ❌ |

定位：**单页面、规则透明、CI 友好** 的补充层。配合 Lighthouse（性能）+ Search Console（漏点）一起用。

## 贡献

PR 欢迎。每条新规则需要：

1. `rules.mjs` 里加一项（带 `source` 指向 Google 原文）
2. 在 `README.md` 的规则表里增一行
3. 起码一个本地 HTML 在 `test-fixtures/`（如果有）触发

如果你发现误报（false-positive），开 issue 贴最小复现。如果发现漏报（应该 fail 但 pass），贴 URL + Google docs 出处。

## License

MIT — 见 [LICENSE](./LICENSE)。
