---
title: "了解 AMP 在搜索结果中的运作原理"
source: https://developers.google.com/search/docs/crawling-indexing/amp/about-amp?hl=zh_CN
slug: search__docs__crawling-indexing__amp__about-amp
path: /search/docs/crawling-indexing/amp/about-amp
---

# 了解 AMP 在搜索结果中的运作原理

> 来源: https://developers.google.com/search/docs/crawling-indexing/amp/about-amp?hl=zh_CN

-  [ 首页 ](https://developers.google.com/?hl=zh-cn)
-

 [ Search Central ](https://developers.google.com/search?hl=zh-cn)
-

 [ Documentation ](https://developers.google.com/search/docs?hl=zh-cn)

# 了解 AMP 在搜索结果中的运作原理

Google 搜索会将 [AMP](https://developers.google.com/amp?hl=zh-cn) 网页编入索引，以提供快速可靠的网络体验。当有可用的 AMP 网页时，系统会将其显示在移动搜索结果中，作为富媒体搜索结果和轮播界面的一部分。虽然 AMP 本身不是 Google 搜索的一项排名因素，但[速度是](https://developers.google.com/search/blog/2018/01/using-page-speed-in-mobile-search?hl=zh-cn)。无论网页是采用何种技术构建而成，Google 搜索会对所有网页采用统一标准。如需详细了解使用 AMP 的好处，请参阅 [AMP 项目成功案例](https://amp.dev/success-stories/)。

当用户选择查看 AMP 网页时，Google 搜索会从 [Google AMP Cache](https://developers.google.com/amp/cache?hl=zh-cn) 中检索相应网页，从而实现各种加载优化（例如预渲染），网页通常会即刻显示出来。在桌面设备上，AMP 网页目前不会通过 Google AMP Cache/AMP 查看工具提供。 [规范](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=zh-cn)的 AMP 网页在行为方面与标准搜索结果类似。

## 在搜索结果中的初始显示方式

 AMP 网页可以在 Google 搜索中显示为[富媒体搜索结果](https://developers.google.com/search/docs/appearance/structured-data/search-gallery?hl=zh-cn)，就像其他网页一样。为了帮助 Google 更好地了解您的网页，您可以向网页中添加[结构化数据](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=zh-cn)。请务必注意，Google 并不保证添加结构化数据一定会让您的内容在 Google 搜索结果中显示为富媒体搜索结果。有关详情，请参阅[结构化数据常规指南](https://developers.google.com/search/docs/guides/sd-policies?hl=zh-cn)。

如果您有包含相同内容的重复网页，请在所有重复网页上（而不仅仅是在规范网页上）放置相同的结构化数据。有关放置位置的详情，请参阅[结构化数据常规指南](https://developers.google.com/search/docs/guides/sd-policies?hl=zh-cn#location)。

 AMP 网页也可以显示为网络故事。详细了解如何[在 Google 搜索中启用网络故事](https://developers.google.com/search/docs/appearance/enable-web-stories?hl=zh-cn)。

## 在用户点击 AMP 内容后的显示方式

 当用户在 Google 搜索中点击您的 AMP 内容后，该内容可能会通过下面这两种方式之一进行显示：

- **[Google AMP 查看工具](#about-google-amp-viewer)**：Google AMP 查看工具的顶部会显示内容所在的网域，以便用户了解内容发布者是谁。
- **[Signed Exchange](#about-signed-exchange)**：一种可让浏览器将文档视为属于您的[源网域](https://en.wikipedia.org/wiki/Same-origin_policy)的技术。

### Google AMP 查看工具简介

Google AMP 查看工具是一种混合环境，可供您在支持 Google AMP 查看工具的浏览器中收集用户数据。如果我们的系统确定用户数据可以提供有用的用户体验，Google AMP 查看工具可能会呈现相应内容，尤其是在需要滑动浏览内容的情况下。Google 的数据收集行为受 Google 的[隐私权政策](https://www.google.com/policies/privacy/?hl=zh-cn)约束。作为 AMP 网页发布者，您的内容会显示在 Google AMP 查看工具中，您的数据收集行为受您的隐私权政策约束。您的 AMP 网页的行为方式和供应商集成由您来选择，因此您必须履行相应的合规义务。

### 关于 Signed Exchange

 Signed Exchange 允许您使用第一方 Cookie 定制内容并衡量分析数据。您的网页会在您的网址（而非 `google.com/amp` 网址）中显示。 在支持 Signed Exchange 技术的浏览器中，Google 搜索会将更高的优先级给予通过 Signed Exchange 而非 Google AMP 查看工具呈现的内容。为了向用户提供此格式的搜索结果，除了常规 AMP HTML 格式外，您还必须发布采用 Signed Exchange 技术呈现的 AMP 内容。 目前，在 Google 搜索中，系统仅支持对富媒体搜索结果和基本搜索结果使用 Signed Exchange，不支持对轮播界面使用此技术。如需详细了解如何为 AMP 网页设置 Signed Exchange，请参阅[用 Signed Exchange 提供 AMP 内容](https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/signed-exchange)。

如未另行说明，那么本页面中的内容已根据[知识共享署名 4.0 许可](https://creativecommons.org/licenses/by/4.0/)获得了许可，并且代码示例已根据 [Apache 2.0 许可](https://www.apache.org/licenses/LICENSE-2.0)获得了许可。有关详情，请参阅 [Google 开发者网站政策](https://developers.google.com/site-policies?hl=zh-cn)。Java 是 Oracle 和/或其关联公司的注册商标。

最后更新时间 (UTC)：2025-12-18。

     [[["易于理解","easyToUnderstand","thumb-up"],["解决了我的问题","solvedMyProblem","thumb-up"],["其他","otherUp","thumb-up"]],[["没有我需要的信息","missingTheInformationINeed","thumb-down"],["太复杂/步骤太多","tooComplicatedTooManySteps","thumb-down"],["内容需要更新","outOfDate","thumb-down"],["翻译问题","translationIssue","thumb-down"],["示例/代码问题","samplesCodeIssue","thumb-down"],["其他","otherDown","thumb-down"]],["最后更新时间 (UTC)：2025-12-18。"],[],["Google indexes AMP pages for faster mobile web experiences, featuring them in rich results and carousels. While not a direct ranking factor, speed, enhanced by AMP, influences rankings. When selected, AMP pages are often retrieved from the Google AMP Cache for quick loading. AMP pages can include structured data for better search understanding. Content can appear in the Google AMP Viewer or as a signed exchange, which lets publishers use first-party cookies and display their own URL.\n"]]

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
