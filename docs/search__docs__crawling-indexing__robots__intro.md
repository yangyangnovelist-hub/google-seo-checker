---
title: "robots.txt 简介"
source: https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=zh_CN
slug: search__docs__crawling-indexing__robots__intro
path: /search/docs/crawling-indexing/robots/intro
---

# robots.txt 简介

> 来源: https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# robots.txt 简介

 robots.txt 文件规定了搜索引擎抓取工具可以访问您网站上的哪些网址。 此文件主要用于避免您的网站收到过多请求；**它并不是一种阻止 Google 抓取某个网页的机制**。若想阻止 Google 访问某个网页，请[使用 `noindex` 禁止将其编入索引](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=zh-cn)，或使用密码保护该网页。

 **如果您使用了 Wix 或 Blogger 等 CMS**，则可能无需（或无法）直接修改 robots.txt 文件。您的 CMS 可能会通过显示搜索设置页面或借用其他某种方式，让您告知搜索引擎是否应抓取您的网页。

 如果您想向搜索引擎隐藏/取消隐藏您的某个网页，请搜索以下说明：如何在 CMS 上修改网页在搜索引擎中的可见性（例如搜索“Wix 向搜索引擎隐藏网页”）。

## robots.txt 文件有何用途？

 robots.txt 文件主要用于管理流向您网站的抓取工具流量，通常用于阻止 Google 访问某个文件（具体取决于文件类型）：**

robots.txt 对不同文件类型的影响

网页

 对于网页（包括 HTML、PDF，或其他 [Google 能够读取的非媒体格式](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types?hl=zh-cn)），您可在以下情况下使用 robots.txt 文件管理抓取流量：您认为来自 Google 抓取工具的请求会导致您的服务器超负荷；或者，您不想让 Google 抓取您网站上的不重要网页或相似网页。

 **警告**：如果您不想让自己的网页（包括 PDF 和受 Google 支持的其他基于文本的格式）显示在 Google 搜索结果中，请不要将 robots.txt 文件用作隐藏网页的方法。

 如果其他网页通过使用说明性文字指向您的网页，Google 在不访问您网页的情况下仍能将其网址编入索引。如果您想从搜索结果中屏蔽自己的网页，请改用其他方法，例如使用密码保护或 [`noindex`](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=zh-cn)。

 **如果您使用 robots.txt 文件阻止 Google 抓取您的网页**，则其网址仍可能会显示在搜索结果中，但搜索结果[不会包含对该网页的说明](https://support.google.com/webmasters/answer/7489871?hl=zh-cn)。 而且，内嵌在被屏蔽的网页中的图片文件、视频文件、PDF 文件和其他非 HTML 文件都会被排除在抓取范围之外，除非有其他允许抓取的网页引用了这些文件。如果您看到了这样一条与您网页对应的搜索结果并想修正它，请移除用于屏蔽该网页的 robots.txt 条目。如果您想从 Google 搜索结果中完全隐藏该网页，请改用[其他方法](https://developers.google.com/search/docs/crawling-indexing/remove-information?hl=zh-cn#i-control-the-web-page)。

媒体文件

 您可以使用 robots.txt 文件管理抓取流量并阻止图片、视频和音频文件出现在 Google 搜索结果中。这不会阻止其他网页或用户链接到您的图片/视频/音频文件。

-  [详细了解如何阻止图片显示在 Google 中。](https://developers.google.com/search/docs/crawling-indexing/prevent-images-on-your-page?hl=zh-cn)
-  [详细了解如何从 Google 中移除您的视频文件或限制您的视频文件显示在 Google 上。](https://developers.google.com/search/docs/appearance/video?hl=zh-cn#remove)

资源文件

 **如果您认为在加载网页时跳过诸如不重要的图片、脚本或样式文件之类的资源不会对网页造成太大影响**，您可以使用 robots.txt 文件屏蔽此类资源。不过，如果缺少此类资源会导致 Google 抓取工具更难解读网页，请勿屏蔽此类资源，否则 Google 将无法有效分析有赖于此类资源的网页。

## 了解 robots.txt 文件的限制

 在创建或修改 robots.txt 文件之前，您应了解这种网址屏蔽方法的限制。根据您的目标和具体情况，您可能需要考虑采用其他机制来确保搜索引擎无法在网络上找到您的网址。

-  **并非所有搜索引擎都支持 robots.txt 规则。**
 robots.txt 文件中的命令并不能强制规范抓取工具对网站采取的行为；是否遵循这些命令由抓取工具自行决定。Googlebot 和其他正规的网页抓取工具都会遵循 robots.txt 文件中的命令，但其他抓取工具未必如此。因此，如果您想确保特定信息不会被网页抓取工具抓取，我们建议您采用其他屏蔽方法，例如[用密码保护您服务器上的隐私文件](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share?hl=zh-cn)。
-  **不同的抓取工具会以不同的方式解析语法。**
 虽然正规的网页抓取工具会遵循 robots.txt 文件中的规则，但每种抓取工具可能会以不同的方式解析这些规则。您需要好好了解一下适用于不同网页抓取工具的[正确语法](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt?hl=zh-cn#syntax)，因为有些抓取工具可能会无法理解某些命令。
-  **如果其他网站上有链接指向被 robots.txt 文件屏蔽的网页，则此网页仍可能会被编入索引。**
 尽管 Google 不会抓取被 robots.txt 文件屏蔽的内容或将其编入索引，但如果网络上的其他位置有链接指向被禁止访问的网址，我们仍可能会找到该网址并将其编入索引。因此，相关网址和其他公开显示的信息（如相关页面链接中的定位文字）仍可能会出现在 Google 搜索结果中。若要正确阻止您的网址出现在 Google 搜索结果中，您应[为服务器上的文件设置密码保护](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share?hl=zh-cn)、[使用 `noindex``meta` 标记或响应标头](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=zh-cn)，或者彻底移除网页。

 **注意**：混用多种抓取规则和索引编制规则可能会导致某些规则与其他规则产生冲突。了解如何[合并使用抓取规则与索引编制及内容显示规则](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=zh-cn#combining)。

## 创建或更新 robots.txt 文件

 如果您确定需要一个 robots.txt 文件，请了解如何[创建 robots.txt 文件](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=zh-cn)。如果您已有 robots.txt 文件，请了解如何[更新它](https://developers.google.com/search/docs/crawling-indexing/robots/submit-updated-robots-txt?hl=zh-cn)。

 希望了解更多信息？请参阅以下资源：

-  [如何编写和提交 robots.txt 文件](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt?hl=zh-cn)
-  [更新 robots.txt 文件](https://developers.google.com/crawling/docs/robots-txt/submit-updated-robots-txt?hl=zh-cn)
-  [Google 如何解读 robots.txt 规范](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec?hl=zh-cn)

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["A robots.txt file manages search engine crawler access to URLs on a site, primarily to avoid server overload. It's not for hiding pages from Google; use `noindex` or password protection for that. The robots.txt file can also manage crawl traffic for media files to prevent them from appearing in search results. However, pages disallowed in robots.txt can still be indexed if linked externally, and it may not be supported by all search engines. Consider alternative methods like `noindex` or password protection.\n"]]

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
