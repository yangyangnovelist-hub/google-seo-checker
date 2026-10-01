---
title: "Google 新闻站点地图"
source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap?hl=zh_CN
slug: search__docs__crawling-indexing__sitemaps__news-sitemap
path: /search/docs/crawling-indexing/sitemaps/news-sitemap
---

# Google 新闻站点地图

> 来源: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# Google 新闻站点地图

 如果您是一家新闻发布商，可使用 Google 新闻站点地图将您的新闻报道和其他相关信息告知 Google。您既可以使用 Google 新闻专用标记扩展现有站点地图，也可以创建单独的 Google 新闻站点地图，专供您的新闻报道使用。这两种方案对 Google 来说都没有问题。不过，如果为您的新闻报道创建单独的站点地图，可通过 Search Console 更好地跟踪您在 Google 搜索中的内容。

## Google 新闻站点地图最佳实践

由于 Google 新闻站点地图基于常规站点地图，因此[常规站点地图最佳实践](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn#general-guidelines)也适用于 Google 新闻站点地图。

 发布新的报道时，请更新 Google 新闻站点地图。不要每次更新都创建新的 Google 新闻站点地图。Google 新闻抓取 Google 新闻站点地图的频率与抓取网站其他内容的频率相同。

 仅添加过去两天内创建的文章的近期网址。报道发布超过两天后，请从 Google 新闻站点地图中移除这些网址，或从旧网址中移除站点地图中的 `<news:news>` 元数据。

 如果您选择从 Google 新闻站点地图中移除旧网址，则可能意味着您的站点地图会在一段时间内（例如，您在过去几天内没有发布报道）为空。您可能会在 Search Console 中看到空站点地图警告，但这只是为了确保这是代表您有意为之。如果文件为空，不会导致 Google 搜索出现任何问题。

## Google 新闻站点地图示例

 以下示例显示的是具有新闻扩展的常规站点地图。其中包含一个 `<url>` 标记和一个 `<news:news>` 标记及其必需的子标记：

```
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <url>
  <loc>http://www.example.org/business/article55.html</loc>
  <news:news>
    <news:publication>
      <news:name>The Example Times</news:name>
      <news:language>en</news:language>
    </news:publication>
    <news:publication_date>2008-12-23</news:publication_date>
    <news:title>Companies A, B in Merger Talks</news:title>
  </news:news>
  </url>
</urlset>
```

## Google 新闻站点地图引用

`news` 标记在 Google 新闻站点地图命名空间中定义：[`http://www.google.com/schemas/sitemap-news/0.9`](http://www.google.com/schemas/sitemap-news/0.9?hl=zh-cn)

 为确保 Google 能够使用您的 Google 新闻站点地图，您必须使用以下必需的标记：

必需的标记

`<news:news>`

 `news:` 命名空间中其他标记的父标记。每个 `url` 站点地图标记只能有一个 `news:news` 标记（以及相应的结束标记），一个站点地图最多可包含 1,000 个 `news:news` 标记。如果一个 Google 新闻站点地图中的 `<news:news>` 标记数量超过 1,000 个，请[将站点地图拆分成多个较小的站点地图](https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps?hl=zh-cn)。

`<news:publication>`

 `<news:name>` 和 `<news:language>` 标记的父标记。每个 `<news:news>` 父标记只能有一个 `<news:publication>` 标记。

`<news:name>`

 `<news:name>` 标记是新闻发布内容的名称。此名称必须与 [news.google.com](https://news.google.com/?hl=zh-cn) 上的报道中显示的名称完全一致（省略圆括号中的部分）。

`<news:language>`

 `<news:language>` 是发布内容所使用的语言，采用 [ISO 639 语言代码](http://www.loc.gov/standards/iso639-2/php/code_list.php)（由两个或三个字母组成）。

 **例外情况**：简体中文请使用 `zh-cn`，繁体中文请使用 `zh-tw`。

`<news:publication_date>`

 采用 [W3C 格式](http://www.w3.org/TR/NOTE-datetime)的报道发布日期。采用“完整日期”格式 (`YYYY-MM-DD`) 或含时区标识符的“完整日期加时、分和秒”格式 (`YYYY-MM-DDThh:mm:ssTZD`)。请指明报道在您的网站上首次发布的原始日期和时间，而非报道添加到站点地图的时间。

Google 接受以下任意格式：

- 完整日期：`YYYY-MM-DD (1997-07-16)`
-  完整日期加时、分：`YYYY-MM-DDThh:mmTZD (1997-07-16T19:20+01:00)`
-  完整日期加时、分、秒：`YYYY-MM-DDThh:mm:ssTZD (1997-07-16T19:20:30+01:00)`
-  完整日期加时、分、秒和秒的小数部分：`YYYY-MM-DDThh:mm:ss.sTZD` (`1997-07-16T19:20:30.45+01:00`)

`<news:title>`

新闻报道的标题。

 **提示：**在各种设备中显示报道时，Google 可能会出于空间原因而缩短新闻报道的标题。请提供报道显示在您网站上的标题。请勿在 `<news:title>` 标记中添加作者姓名、发布内容名称或发布日期。详细了解如何[创建有效标题](https://developers.google.com/search/docs/appearance/title-link?hl=zh-cn)。

## 站点地图问题排查

 如果您在站点地图方面遇到问题，可以使用 Google Search Console 调查错误。 如需帮助，请参阅 Search Console 的[站点地图问题排查指南](https://support.google.com/webmasters/answer/7451001?hl=zh-cn#errors)。

##  其他资源

 希望了解更多信息？请参阅以下资源：

-  [将站点地图提交给 Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn#addsitemap)
-  [了解如何结合使用站点地图扩展](https://developers.google.com/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions?hl=zh-cn)

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-02-20。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-02-20。"],[],["News publishers can use news sitemaps to inform Google about new articles. They can either add news-specific tags to existing sitemaps or create a separate news sitemap. Update the sitemap with new articles, and remove URLs of articles older than two days or remove the `\u003cnews:news\u003e` tag. Required tags include `\u003cnews:news\u003e`, `\u003cnews:publication\u003e`, `\u003cnews:name\u003e`, `\u003cnews:language\u003e`, `\u003cnews:publication_date\u003e`, and `\u003cnews:title\u003e`, each with specific formatting and content requirements.\n"]]

-  [ LinkedIn  ](https://www.linkedin.com/showcase/googlesearchcentral/)
在 LinkedIn 上加入我们

-  [ YouTube  ](https://www.youtube.com/channel/UCWf2ZlNsCGDS89VBF_awNvA?hl=zh-cn)
观看我们的视频

-  [ 博客  ](https://feeds.feedburner.com/blogspot/amDG)
订阅我们的 RSS Feed

-  [ 播客  ](https://pod.link/1512522198)
聆听 Search Off the Record（查无记录）

-  [ X (Twitter)  ](https://twitter.com/googlesearchc)
在 X (Twitter) 上加入我们

-

### 获取支持

  -  [ 转到帮助论坛 ](https://support.google.com/webmasters/community?hl=zh-cn)
  -  [ 向“咨询交流时间”活动提交问题 ](https://developers.google.com/search/help/office-hours?hl=zh-cn)
  -  [ 举报垃圾内容、钓鱼式攻击内容或恶意软件 ](https://developers.google.com/search/help/report-quality-issues?hl=zh-cn)
  -  [ 更多的支持资源 ](https://developers.google.com/search/help?hl=zh-cn)

-

### 资源

  -  [ 您需要 SEO 吗？ ](https://developers.google.com/search/docs/fundamentals/get-on-google?hl=zh-cn)
  -  [ SEO 新手指南 ](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-cn)
  -  [ 搜索系统的状态 ](https://status.search.google.com?hl=zh-cn)
  -  [ Search Console 文档 ](https://support.google.com/webmasters?hl=zh-cn)
  -  [ 案例研究 ](https://developers.google.com/search/case-studies/overview?hl=zh-cn)

-

### 工具

  -  [ Search Console ](https://search.google.com/search-console?hl=zh-cn)
  -  [ 富媒体搜索结果测试 ](https://search.google.com/test/rich-results?hl=zh-cn)
  -  [ PageSpeed Insights ](https://pagespeed.web.dev?hl=zh-cn)
  -  [ AMP 测试 ](https://search.google.com/test/amp?hl=zh-cn)

  [](https://developers.google.com/?hl=zh-cn)

-  [ Android ](//developer.android.com?hl=zh-cn)
-  [ Chrome ](//developer.chrome.com/home?hl=zh-cn)
-  [ Firebase ](//firebase.google.com?hl=zh-cn)
-  [ Google Cloud Platform ](//cloud.google.com?hl=zh-cn)
-  [ Google AI ](//ai.google.dev/?hl=zh-cn)
-  [ 所有产品 ](https://developers.google.com/products?hl=zh-cn)

-  [ 条款 ](https://developers.google.com/terms/site-terms?hl=zh-cn)
-  [ 隐私权政策 ](//policies.google.com/privacy?hl=zh-cn)
-  [ Manage cookies ](#)

-  [English]()
-  [Deutsch]()
-  [Español]()
-  [Español – América Latina]()
-  [Français]()
-  [Indonesia]()
-  [Italiano]()
-  [Polski]()
-  [Português – Brasil]()
-  [Tiếng Việt]()
-  [Türkçe]()
-  [Русский]()
-  [العربيّة]()
-  [हिंदी]()
-  [ภาษาไทย]()
-  [中文 – 简体]()
-  [中文 – 繁體]()
-  [日本語]()
-  [한국어]()
