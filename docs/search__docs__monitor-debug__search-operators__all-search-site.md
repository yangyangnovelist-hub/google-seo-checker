---
title: "site: 搜索运算符"
source: https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site?hl=zh_CN
slug: search__docs__monitor-debug__search-operators__all-search-site
path: /search/docs/monitor-debug/search-operators/all-search-site
---

# site: 搜索运算符

> 来源: https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# `site:` 搜索运算符

 `site:` 查询是一个搜索运算符，您可以使用它请求来自运算符中指定的特定网域、网址或网址前缀的搜索结果。例如：

`site:` 示例

`site:example.com`

 仅显示来自 `example.com` 网域（`www.example.com` 和 `recipes.example.com`）的结果。

`site:https://www.example.com/ramen` tsukemen

 显示包含以 `https://www.example.com/ramen` 开头的网址并与 tsukemen 一词相关的网页的结果。

`site:` 搜索运算符适用于所有 Google 搜索类产品和服务。

 如果某个网址已被 Google 编入索引，那么它可以显示在与该网址相关的 `site:` 查询的搜索结果中，但不能保证它一定会出现。如果网址未显示在 `site:` 查询的结果中，请使用[网址检查工具](https://support.google.com/webmasters/answer/9012289?hl=zh-cn)确保该网址可编入索引并提交该网址以使其编入索引。此外，请仔细检查查询是否正确；`site:https://www.example.com` 返回的结果与 `site:https://example.com/` 返回的结果并不相同。

## 适合网站所有者的用途

您可以通过几种方式借助 `site:` 查询来调试网站。下面是一些示例：

`site:` 示例

`site:example.com`

返回已编入索引并呈现给用户的网址的列表。

 返回的网址列表不一定详尽无遗。如果网站的规模较大，结果中应该不会显示其所有网址。与使用更宽泛的前缀相比，在查询中使用更具体的前缀可能会产生更多结果。

`site:https://example.com/recipes/tsukemen.html`

可帮助您了解特定网址是否已编入索引并呈现给用户。

`site:example.com viagra casino`

有助于发现和监控网站上的垃圾内容问题。

`site:https://example.com/` lemon

显示查询“lemon”一词会显示网站上的哪些网址。

`site:https://example.com/recipes/tsukemen.html` lemon

显示是否已按照“lemon”一词将特定网址编入索引。

## 限制

 `site:` 运算符主要是为执行搜索的用户设计的，因此存在一些局限性，网站所有者可能会觉得受到限制。具体而言存在如下限制：

-  `site:` 运算符不一定会返回按照查询中指定的前缀编入索引的所有网址。如果您要使用 `site:` 运算符来完成某些任务（例如确定有多少网址已按照某个前缀编入索引并呈现给用户），请记住这一点。
-  如果只有 `site:` 运算符而不含查询字词（例如 `site:example.com`），系统不会对结果进行排名。系统通常会在顶部显示带有该前缀的最短网址，但除此之外则会相对随机地显示结果。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["The `site:` search operator displays results from a specified domain, URL, or URL prefix. It can identify indexed and serving URLs, check if specific URLs are indexed, and help monitor site spam. Using `site:example.com` shows results from that domain, while `site:https://example.com/recipes/tsukemen.html` targets a specific URL. However, `site:` may not list all indexed URLs and doesn't rank results; results can appear random. Site owners can use the URL Inspection tool if a URL is not shown.\n"]]

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
