---
title: "设计电子商务网站的网址结构"
source: https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites?hl=zh_CN
slug: search__docs__specialty__ecommerce__designing-a-url-structure-for-ecommerce-sites
path: /search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites
---

# 设计电子商务网站的网址结构

> 来源: https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 设计电子商务网站的网址结构

 精心设计的网址可以帮助 Google 更高效地定位和检索电子商务网站上的网页。如果您能够控制网址结构（例如，您要从头开始构建自己的网站），那么本指南可以帮助您确定网址结构，避免出现 Google 在一些电子商务网站上发现的索引编制问题。

 如果您使用的是电子商务平台，您应该可以跳过此部分，因为平台很可能已经为您考量过这些问题。

##  网址结构的重要性

 良好的网址设计结构有助于 Google 抓取您的网站并将其编入索引，而不良的网址结构可能会导致出现以下问题：

-

 如果 Googlebot 误认为两个网址会返回相同的内容，则**可能会遗漏内容**，因为抓取工具可能只会检索一个网址（并将另一个网址视为重复网址）。如果使用片段标识符（例如 `#fragment`）显示不同的内容，就可能会出现这种情况。在编制索引时，Google 并不考虑片段标识符。

 **示例**：Google 会将 `/product/t-shirt#black` 和 `/product/t-shirt#white` 视为同一个网页。

-

 如果 Google 认为两个网址不同，但系统返回的是同一网页中的结果，则抓取工具可能会**多次检索相同的内容**。这可能会减慢对您网站的抓取速度，并为您的网络服务器增加额外的负担，却毫无益处。

 **示例**：`/product/black-t-shirt` 和 `/product?sku=1234` 可能会返回相同的商品页面，但 Google 无法仅通过查看网址来确定这一点。

-

 如果您的网址包含不断变化的值（如时间戳），**抓取工具可能会认为您的网站包含无限数量的网页**。因此，Google 可能需要较长的时间才能在您的网站上找到所有有用的内容。

 **示例**：Google 可能会将 `/about?now=12:34am` 和 `/about?now=12:35am` 视为不同的网址，即使这两个网址显示的是同一网页。

 如需详细了解 Google 如何抓取网站并将其编入索引，请参阅 [Google 搜索的工作方式](https://developers.google.com/search/docs/fundamentals/how-search-works?hl=zh-cn)以及 [Google 的网站抓取工具如何将网站编入索引](https://www.google.com/search/howsearchworks/crawling-indexing/?hl=zh-cn)这两篇文章。

##  关于设计良好网址结构的最佳实践

 如需优化 Google 抓取您的网站并将其编入索引的方式，请遵循有关如何设计网址结构的最佳实践。

###  关于网址的一般建议

-  尽量减少返回相同内容的备用网址的数量，以免 Google 向您的网站发出不必要的请求。Google 可能要在完成对两个网址的检索之后，才能发现它们返回的是同一网页。
-  如果网络服务器对网址中的大小写文本的处理方式相同，请将所有文本转换为同一大小写形式，以便 Google 能够更轻松地确定相应网址引用的是同一网页。
-  确保分页结果中的每个网页都具有唯一的网址。我们在分页网址结构中发现的网址错误数量最多。
-

 在网址路径中添加说明性字词。网址中的字词有助于 Google 更好地了解对应的网页。

 **建议**： `/product/black-t-shirt-with-a-white-collar`

 **不建议**： `/product/3243`

###  关于网址查询参数的建议

 在使用查询参数时，请遵循以下建议，帮助 Google 成功抓取您的网站并将其编入索引。

-

 尽可能使用 `?key=value` 网址参数，而不要使用 `?value`。 借助网址参数，Google 搜索可以了解您网站的结构，从而更高效地抓取内容并编制索引。

 **建议**： `/photo-frames?page=2`, `/t-shirt?color=green`

 **不建议**：`/photo-frames?2`、`/t-shirt?green`

-

 相同参数不可使用两次。否则，Googlebot 可能会忽略其中一个值。

 **建议**： `?type=candy,sweet`

 **不建议**：`?type=candy&type=sweet`

-

 避免在内部链接到临时参数，例如会话 ID、跟踪代码、用户相对值（`location=nearby`、`time=last-week`）和当前时间。这可能会导致网址寿命较短或同一网页的网址重复。若要从 Google 搜索中获得最佳结果，请使用长期的永久性网址。

 **建议**： `/t-shirt?location=UK`

 **不建议**：`/t-shirt?location=nearby`、`/t-shirt?current-time=12:02`、`/t-shirt?session=123123123`

###  Google 如何理解不同商品款式对应的网址

 电子商务网站的一项常见考虑因素，就是当商品具有多种尺寸或颜色时，应该怎样设计网址结构。每个商品属性组合都称为一种“商品款式”。**为帮助 Google 了解您的商品款式/规格，请确保每个款式/规格都可以通过单独的网址进行标识。我们建议您为款式/规格网址使用以下网址结构：

-  路径片段，例如 `/t-shirt/green`
-  查询参数，例如 `/t-shirt?color=green`

如需了解详情，请参阅[商品款式/规格结构化数据文档](https://developers.google.com/search/docs/appearance/structured-data/product-variants?hl=zh-cn)。

 如果您使用可选的查询参数来标识款式/规格，请将不带查询参数的网址用作[规范网址](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=zh-cn)。这有助于 Google 更好地了解不同商品款式之间的关系。

##  在内容中使用网址

 在内容中使用网址时，请遵循以下最佳做法，帮助 Google 搜索和 Google 购物正确识别您的商品以及不同商品款式之间的关系。

-  在内部链接、站点地图文件和 [`<link rel="canonical">` 标记](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=zh-cn)中使用相同的网址。 例如，如果要使用查询参数连接到某个分页序列中的第一个网页（默认网页为第 1 页），请在整个网站的网址中一致地添加或排除 `?page=1`。
-  在所有可编入索引的网页上使用自引用 [`<link rel="canonical">` 标记](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=zh-cn)（此类标记中的网址指向当前网页），并将这些网址添加到[站点地图](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=zh-cn)文件。
-  对于每种款式都具有唯一网址的商品，请使用 `<link rel="canonical">` 标记在所有款式的网页上添加规范商品网址。如需了解详情，请参阅 [Google Merchant Center 的 `canonical_link` 属性](https://support.google.com/merchants/answer/9340054?hl=zh-cn)。
-  使用 `<a href>` 标记直接在网页上添加链接；请勿使用 JavaScript 在网页之间导航。Googlebot 可能无法检测出 JavaScript 代码中的导航结构。如需详细了解 Google 如何处理 JavaScript，请参阅[了解 JavaScript SEO 基础知识](https://developers.google.com/search/docs/guides/javascript-seo-basics?hl=zh-cn)。
-  尽可能在 `<a href>` 和 `</a>` 标记之间添加有意义的文本，例如，要链接到的商品的名称。请勿使用“点击此处”等意义宽泛的词组。
-  避免链接到没有有用内容的网页，至少不要使其编入索引。如果某个类别没有任何商品，请使用 [`noindex`robots`meta` 标记](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#noindex)。 如果您的网站检测到某个类别已为空，并自动从网站内搜索和浏览中移除此类别，请考虑针对相应网页返回 `404 (not found)` HTTP 状态代码。

##  其他资源

 希望了解更多信息？请参阅以下资源：

-  [帮助 Google 了解您的网站结构](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure?hl=zh-cn)
-  [避免创建重复内容](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=zh-cn)
-  [分页、增量网页加载以及它们对 Google 搜索的影响](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading?hl=zh-cn)
-  [管理对分面导航网址的抓取](https://developers.google.com/search/docs/crawling-indexing/crawling-managing-faceted-navigation?hl=zh-cn)

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["To optimize Google's crawling and indexing of ecommerce sites, ensure each page has a unique, descriptive URL. Minimize alternative URLs for the same content, avoid using fragment identifiers, and convert text to a consistent case. Use `?key=value` for query parameters, avoid duplicate parameters, and don't use temporary parameters. For product variants, assign each a separate URL using path segments or query parameters and utilize canonical URLs. Use consistent URLs in internal links, sitemaps, and `\u003clink rel=\"canonical\"\u003e` tags.\n"]]

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
