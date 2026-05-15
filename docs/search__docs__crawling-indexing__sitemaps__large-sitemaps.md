---
title: "使用站点地图索引文件管理站点地图"
source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps?hl=zh_CN
slug: search__docs__crawling-indexing__sitemaps__large-sitemaps
path: /search/docs/crawling-indexing/sitemaps/large-sitemaps
---

# 使用站点地图索引文件管理站点地图

> 来源: https://developers.google.com/search/docs/crawling-indexing/sitemaps/large-sitemaps?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 使用站点地图索引文件管理站点地图

 如果您的站点地图超过了[大小上限](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn)，则需要将较大的站点地图拆分成多个站点地图，让每个新站点地图都小于大小上限。拆分站点地图后，您可以使用站点地图索引文件这种方式同时提交多个站点地图。

## 站点地图索引最佳实践

 XML 格式的站点地图索引文件与 XML 格式的站点地图文件非常相似，前者由[站点地图协议](https://www.sitemaps.org/protocol.html#index)定义。 这意味着，所有站点地图要求同样适用于站点地图索引文件。

 引用的站点地图必须与站点地图索引文件在同一个网站上托管。如果您设置了[跨网站提交](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn#cross-submit)功能，则可免除此要求。

 站点地图索引文件中引用的站点地图必须与站点地图索引文件位于同一目录中，或者位于网站层次结构中的更低一级目录中。例如，如果站点地图索引文件位于 `https://example.com/public/sitemap_index.xml`，它只能包含位于相同或更深目录中的站点地图，如 `https://example.com/public/shared/...`。

 您最多可为 Search Console 账号中的每个网站提交 500 个站点地图索引文件。

## 站点地图索引示例

 以下示例是一个 XML 格式的站点地图索引，其中列出了两个站点地图：

```
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.example.com/sitemap1.xml.gz</loc>
    <lastmod>2024-08-15</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.example.com/sitemap2.xml.gz</loc>
    <lastmod>2022-06-05</lastmod>
  </sitemap>
</sitemapindex>
```

## 站点地图索引引用

站点地图索引标记由与通用站点地图相同的命名空间定义： [`http://www.sitemaps.org/schemas/sitemap/0.9`](http://www.sitemaps.org/schemas/sitemap/0.9)

为确保 Google 能够使用您的站点地图索引，您必须使用以下必需的标记：

必需的标记

`sitemapindex`

XML 树的根标记。它包含所有其他标记。

`sitemap`

 文件中列出的每个站点地图的父标记。它是 `sitemapindex` 标记的唯一直接子级。

`loc`

 站点地图的位置（网址）。它是 `sitemap` 标记的子级。一个站点地图索引文件最多可以包含 50,000 个 `loc` 标记。

 此外，以下可选标记可能有助于 Google 安排何时抓取您的站点地图：

可选标记

`lastmod`

 标识修改相应站点地图文件的时间。它可以是 `sitemap` 标记的子级。`lastmod` 标记的值必须采用 [W3C 日期时间格式](https://www.w3.org/TR/NOTE-datetime)。

## 站点地图问题排查

 如果您在站点地图方面遇到问题，可以使用 Google Search Console 调查错误。 如需帮助，请参阅 Search Console 的[站点地图问题排查指南](https://support.google.com/webmasters/answer/7451001?hl=zh-cn#errors)。

##  其他资源

 希望了解更多信息？请参阅以下资源：

-  [将站点地图提交给 Google](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn#addsitemap)
-  [了解如何结合使用站点地图扩展](https://developers.google.com/search/docs/crawling-indexing/sitemaps/combine-sitemap-extensions?hl=zh-cn)

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2026-02-20。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2026-02-20。"],[],["When a sitemap exceeds size limits, split it into smaller sitemaps. Use a sitemap index file to manage and submit multiple sitemaps simultaneously. The sitemap index's XML format mirrors that of a sitemap and follows the Sitemap Protocol. Referenced sitemaps must be on the same site or lower in the directory, or use cross-site submission. A sitemap index can contain up to 50,000 `loc` tags, with `sitemapindex`, `sitemap`, and `loc` being required. Up to 500 sitemap indexes can be submitted per site.\n"]]

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

  -  [ 转到帮助论坛 ](https://support.google.com/webmasters/community)
  -  [ 向“咨询交流时间”活动提交问题 ](/search/help/office-hours)
  -  [ 举报垃圾内容、钓鱼式攻击内容或恶意软件 ](/search/help/report-quality-issues)
  -  [ 更多的支持资源 ](/search/help)

-

### 资源

  -  [ 您需要 SEO 吗？ ](/search/docs/fundamentals/get-on-google)
  -  [ SEO 新手指南 ](/search/docs/fundamentals/seo-starter-guide)
  -  [ 搜索系统的状态 ](https://status.search.google.com)
  -  [ Search Console 文档 ](https://support.google.com/webmasters)
  -  [ 案例研究 ](/search/case-studies/overview)

-

### 工具

  -  [ Search Console ](https://search.google.com/search-console)
  -  [ 富媒体搜索结果测试 ](https://search.google.com/test/rich-results)
  -  [ PageSpeed Insights ](https://pagespeed.web.dev)
  -  [ AMP 测试 ](https://search.google.com/test/amp)

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
