# SEO Checker

按 Google Search 官方文档构建的页面 SEO 自检工具。两个入口：

- **`seo:check`** — 对一个 URL / 本地 HTML 跑 **65 条规则**
- **`seo:lookup`** — 反查 **152 篇** Google docs 找相关段落

文件结构：

- `sources.json` — 抓取来源 URL 列表（152 篇，覆盖 `essentials / fundamentals / crawling-indexing / appearance / monitor-debug / specialty` 全部 6 个板块）
- `fetch-docs.mjs` — 全量抓取并提取为 markdown 存入 `docs/`
- `raw/` — 原始 HTML（gitignore；首次抓取后可离线重抽）
- `docs/` — 提取后的 markdown 文档（按 slug 命名）
- `INDEX.md` — 文档索引
- `rules.mjs` — 65 条可执行规则，每条都带 `source` 指回 Google 原文
- `lib/inspect.mjs` — 正则版 HTML 解析（与 `scripts/lint-mirror-html.mjs` 同风格，无依赖）
- `lib/fetch-page.mjs` — URL/本地文件取页 + robots.txt + sitemap 抓取
- `lib/html-to-markdown.mjs` — 自写 HTML→Markdown（仅供 fetch-docs 用）
- `run.mjs` — 上下文装配 + 跑全部规则
- `report.mjs` — 终端着色报告
- `cli.mjs` — `seo:check` 命令行入口
- `lookup.mjs` — `seo:lookup` 命令行入口

## 使用

```bash
# 检查线上 URL（自动取 robots.txt / sitemap）
npm run seo:check -- https://packoasis.com/us/

# 检查本地 HTML 文件
npm run seo:check -- public/golf-ball-hanger-box.html

# 只看错误和警告
npm run seo:check -- https://packoasis.com/us/ --quiet

# JSON 输出（CI / 入库）
npm run seo:check -- https://packoasis.com/us/ --json > report.json

# 只跑某些类别
npm run seo:check -- https://packoasis.com/us/ --filter=meta,schema,headings

# 刷新 Google 文档缓存
npm run seo:fetch-docs            # 用已缓存的 raw HTML 重抽
node scripts/seo-checker/fetch-docs.mjs --force   # 强制重新下载
```

## 规则类别（共 65 条）

| 类别 | 检查内容 |
|------|---------|
| `crawl` | HTTPS, 200 状态, robots.txt, Sitemap, mixed-content, robots 不屏蔽 CSS/JS |
| `index` | noindex, canonical (存在/绝对/同源), robots meta 冲突, rel=next/prev, amphtml |
| `meta` | title, description, charset, viewport, html lang, favicon, snippet 控制 |
| `headings` | h1 存在/唯一, 层级不跳级 |
| `images` | alt, width/height (CLS), lazy-loading, 通用文件名, 现代格式 |
| `links` | 空锚, 通用锚文本, `javascript:`/`#`, `target=_blank` rel |
| `schema` | JSON-LD 语法, @context, Product/Article/Breadcrumb/Organization/WebSite, SearchAction, 日期合法性 |
| `social` | og:title/description/image/url |
| `i18n` | hreflang self-reference |
| `content` | 正文字数 / 词数 |
| `url` | 大小写、空格、`-` vs `_`、长度 |
| `policy` | 关键字堆砌, 隐藏文字, doorway 模板 |
| `js` | onclick 导航, fragment-only 路由 |
| `perf` | 渲染阻塞 `<script>`, preconnect 缺失 |

每条规则在 `rules.mjs` 都带一个 `source` 链接，指回 [developers.google.com/search/docs](https://developers.google.com/search/docs) 的具体页面。

## 反查 Google 文档（`seo:lookup`）

`seo:check` 报错时，光看一行规则不够——还想看 Google 原文怎么说。`seo:lookup` 在本地 152 篇 markdown 上做关键词反查：

```bash
npm run seo:lookup -- canonical            # 单关键词
npm run seo:lookup -- hreflang 自引用       # 多关键词（AND-加权）
npm run seo:lookup -- offers price --limit=5
npm run seo:lookup -- robots --section=crawling-indexing  # 限板块
npm run seo:lookup -- "结构化数据" --titles  # 只列标题
npm run seo:lookup -- canonical --json | jq
```

输出按相关性排序，给出文档标题、原文 URL、命中段落片段（关键词黄色高亮）。

## 退出码

- `0`：无错误
- `1`：有 `fail`（或满足 `--fail-on=warn` 阈值）
- `2`：CLI 异常

适合接进 CI / prebuild 校验。

## 扩展规则

在 `rules.mjs` 数组里追加一个对象即可：

```js
{
  id: 'my-rule',
  category: 'meta',
  severity: 'warn',
  title: '描述这条规则在检查什么',
  source: 'https://developers.google.com/search/docs/...',
  check: (ctx) => {
    // ctx.title, ctx.metas, ctx.headings, ctx.images,
    // ctx.jsonLdNodes, ctx.robotsParsed, ctx.sitemaps, ...
    return { status: 'pass' };
    // 或 { status: 'fail', message: '...', detail: '...' }
  },
}
```

`ctx` 字段见 `run.mjs`。
